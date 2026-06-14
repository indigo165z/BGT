"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(1, "Required"),
  businessName: z.string().min(2, "Required"),
  phone: z.string().min(8, "Enter a valid phone number").regex(/^[\d\s\-+()]+$/, "Invalid number"),
  serviceType: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputCls = "w-full bg-card border border-border rounded-[9px] px-[13px] py-[10px] text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/10 transition";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, name: `${data.firstName} ${data.lastName}`, email: "" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please call Cameron directly on 0459 410 785.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-[#2e8b57] mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Enquiry sent!</h3>
        <p className="text-muted-foreground text-sm">Cameron will be in touch shortly.</p>
        <button onClick={() => setSubmitted(false)} className="mt-5 text-[#2e8b57] text-sm hover:underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-[14px]">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[13px] font-semibold text-muted-foreground mb-[5px]">First name</label>
          <input type="text" placeholder="Jane" {...register("firstName")} className={inputCls} />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-muted-foreground mb-[5px]">Last name</label>
          <input type="text" placeholder="Smith" {...register("lastName")} className={inputCls} />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-muted-foreground mb-[5px]">Business name</label>
        <input type="text" placeholder="The Corner Café" {...register("businessName")} className={inputCls} />
        {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName.message}</p>}
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-muted-foreground mb-[5px]">Phone number</label>
        <input type="tel" placeholder="04XX XXX XXX" {...register("phone")} className={inputCls} />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-muted-foreground mb-[5px]">Service needed</label>
        <select {...register("serviceType")} className={inputCls}>
          <option value="">Select a service…</option>
          <optgroup label="Grease Traps">
            <option value="grease-cleaning">Grease trap cleaning / pump-out</option>
            <option value="grease-installation">Grease trap installation</option>
            <option value="compliance-report">Compliance report</option>
            <option value="emergency">Emergency call-out</option>
          </optgroup>
          <optgroup label="Wash Down Bays & Oil Separators">
            <option value="washdown-service">Wash down bay servicing</option>
            <option value="oil-separator">Oil separator service</option>
            <option value="washdown-install">Wash down bay installation</option>
          </optgroup>
          <option value="unsure">Not sure — need advice</option>
        </select>
        {errors.serviceType && <p className="mt-1 text-xs text-red-500">{errors.serviceType.message}</p>}
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-muted-foreground mb-[5px]">Message (optional)</label>
        <textarea
          rows={3}
          placeholder="Any details about your situation or site…"
          {...register("message")}
          className={`${inputCls} resize-none`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[9px] px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#2e8b57] hover:bg-[#3dab6e] disabled:opacity-60 text-white font-semibold text-[15px] py-[14px] rounded-[10px] transition-colors flex items-center justify-center gap-2 mt-2"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
        ) : (
          "Send enquiry — 0459 410 785"
        )}
      </button>
    </form>
  );
}
