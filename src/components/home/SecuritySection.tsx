import React from "react";
import {
  Lock,
  Database,
  Server,
  ExternalLink,
  Check,
  Minus,
  Ban,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import iso27001Logo from "@/assets/logos/iso-27001-certified.svg";

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-16 md:py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-[#0c180a] text-balance mb-4">
            Your Data Is Private, Protected and Under Your Control.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
            Donor information, board documents, financial data, and organizational knowledge
            <br />
            require real protection.
          </p>
        </div>

        {/* 6 Clean Structural Cards with Micro-UI Proof Elements */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Role-based access */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-[#0c180a] tracking-tight">
                Role-based access
              </h3>
            </div>

            {/* Micro-UI Proof: Permission Matrix Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                    <th className="pb-1.5 text-left font-medium">Role</th>
                    <th className="pb-1.5 text-center font-medium">View</th>
                    <th className="pb-1.5 text-center font-medium">Edit</th>
                    <th className="pb-1.5 text-center font-medium">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/70 text-slate-700">
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">Staff</td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#108a00]" />
                    </td>
                    <td className="py-1.5 text-center text-slate-300">
                      <Minus className="mx-auto h-3.5 w-3.5" />
                    </td>
                    <td className="py-1.5 text-center text-slate-300">
                      <Minus className="mx-auto h-3.5 w-3.5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">Leadership</td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#108a00]" />
                    </td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#108a00]" />
                    </td>
                    <td className="py-1.5 text-center text-slate-300">
                      <Minus className="mx-auto h-3.5 w-3.5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">Board</td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#108a00]" />
                    </td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#108a00]" />
                    </td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#108a00]" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Encryption in transit and at rest */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-[#0c180a] tracking-tight">
                Encryption in transit and at rest
              </h3>
            </div>

            {/* Micro-UI Proof: Dual Encryption Badges */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#108a00]">
                  <Lock className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-medium block">In transit</span>
                  <span className="text-xs font-bold text-slate-800 block">TLS 1.3</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#108a00]">
                  <Database className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-medium block">At rest</span>
                  <span className="text-xs font-bold text-slate-800 block">AES-256</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Controlled access to client information */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-[#0c180a] tracking-tight">
                Controlled access to client information
              </h3>
            </div>

            {/* Micro-UI Proof: Isolated Tenant Graphic */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                {/* Organization Isolated Tenant Box */}
                <div className="flex-1 rounded-xl border-2 border-[#108a00] bg-[#e7f5e3]/40 p-2.5 text-left">
                  <div className="text-xs font-bold text-[#0c180a]">
                    Your Organization
                  </div>
                  <span className="text-[10px] font-semibold text-[#0e7700] block mt-0.5">
                    Isolated tenant
                  </span>
                </div>

                {/* Firewall Lock Icon */}
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                  <Lock className="h-3.5 w-3.5" />
                </div>

                {/* Other Organizations (Blocked) */}
                <div className="flex-1 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-2.5 text-left opacity-70">
                  <div className="text-xs font-medium text-slate-600">Other Entities</div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Zero access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Client data is not used to train public AI models */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-[#0c180a] tracking-tight">
                Client data is not used to train public AI models
              </h3>
            </div>

            {/* Micro-UI Proof: Blocked Data Pipeline Graphic */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#108a00]">
                    <Database className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-800 block">Your Data</span>
                    <span className="text-[10px] text-[#0e7700] font-semibold block">Stays private</span>
                  </div>
                </div>

                {/* Strikethrough / Blockade Icon */}
                <div className="flex items-center gap-1">
                  <span className="h-0.5 w-4 bg-red-300" />
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Ban className="h-3.5 w-3.5" />
                  </div>
                  <span className="h-0.5 w-4 bg-red-300" />
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-slate-800 block">Public Models</span>
                  <span className="text-[10px] text-red-600 font-semibold block">Zero training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Private infrastructure options available when required */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-[#0c180a] tracking-tight">
                Private infrastructure options available when required
              </h3>
            </div>

            {/* Micro-UI Proof: Infrastructure Choice */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs text-left">
                <Server className="h-4 w-4 text-slate-500" />
                <div className="mt-2 text-xs font-bold text-slate-800">Your servers</div>
                <span className="text-[10px] text-slate-400 block">On-prem / private cloud</span>
              </div>

              <div className="rounded-2xl border-2 border-[#108a00] bg-[#e7f5e3]/40 p-3 shadow-2xs text-left">
                <Cloud className="h-4 w-4 text-[#108a00]" />
                <div className="mt-2 text-xs font-bold text-[#0c180a]">Our cloud</div>
                <span className="text-[10px] text-[#0e7700] font-semibold block">Secure, isolated</span>
              </div>
            </div>
          </div>

          {/* Card 6: SJ Innovation is certified to ISO/IEC 27001:2022 */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-[#0c180a] tracking-tight">
                SJ Innovation is certified to ISO/IEC 27001:2022
              </h3>
            </div>

            {/* Micro-UI Proof: ISO Certification Seal */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={iso27001Logo}
                  alt="ISO/IEC 27001:2022 Certified"
                  className="h-10 w-auto object-contain"
                />
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block">ISO/IEC 27001:2022</span>
                  <span className="text-[10px] font-semibold text-[#0e7700] block">Globally certified</span>
                </div>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7f5e3] text-[#108a00]">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Link */}
        <div className="mt-12 text-center">
          <a
            href="https://sjinnovation.com/security"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#108a00] hover:text-[#0e7700] hover:underline"
          >
            <span>Learn more about our security standards</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

