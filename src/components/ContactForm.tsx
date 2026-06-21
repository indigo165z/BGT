"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

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

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Enquiry — ${data.serviceType} — ${data.businessName}`);
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\nBusiness: ${data.businessName}\nPhone: ${data.phone}\nService: ${data.serviceType}\n\n${data.message ?? ""}`
    );
    window.location.href = `mailto:Admin@BrisbaneGreaseTraps.com.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-[#2e8b57] mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Opening your email app…</h3>
        <p className="text-muted-foreground text-sm">Or call Cameron directly on <a href="tel:0459410785" className="text-[#2e8b57] hover:underline font-semibold">0459 410 785</a>.</p>
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
            <option value="Grease trap cleaning / pump-out">Grease trap cleaning / pump-out</option>
            <option value="Grease trap installation">Grease trap installation</option>
            <option value="Compliance report">Compliance report</option>
            <option value="Emergency call-out">Emergency call-out</option>
          </optgroup>
          <optgroup label="Wash Down Bays & Oil Separators">
            <option value="Wash down bay servicing">Wash down bay servicing</option>
            <option value="Oil separator service">Oil separator service</option>
            <option value="Wash down bay installation">Wash down bay installation</option>
          </optgroup>
          <option value="Not sure — need advice">Not sure — need advice</option>
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

      <button
        type="submit"
        className="w-full bg-[#2e8b57] hover:bg-[#3dab6e] text-white font-semibold text-[15px] py-[14px] rounded-[10px] transition-colors flex items-center justify-center gap-2 mt-2"
      >
        Send enquiry — 0459 410 785
      </button>
    </form>
  );
}
