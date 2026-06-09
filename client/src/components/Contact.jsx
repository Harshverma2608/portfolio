import { useState } from "react";
import api from "../api";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SectionLabel } from "./About";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.post("/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <SectionLabel eyebrow="Get In Touch">Contact Me</SectionLabel>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT info */}
          <div className="space-y-8">
            <p className="text-stone-500 leading-relaxed text-base" style={{ fontFamily: "var(--font-unna)" }}>
              I'm actively looking for entry-level Software or Full-Stack Developer roles.
              If you have an opportunity that fits, or just want to talk — drop a message.
              I reply within <span className="text-emerald-600 font-semibold">24 hours</span>.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Mail size={17} />, label: "harshkumarverma26@gmail.com", href: "mailto:harshkumarverma26@gmail.com" },
                { icon: <Phone size={17} />, label: "+91 7454836617", href: "tel:+917454836617" },
                { icon: <MapPin size={17} />, label: "Mathura, Uttar Pradesh, India", href: null },
              ].map(({ icon, label, href }) =>
                href ? (
                  <a key={label} href={href}
                    className="flex items-center gap-4 text-stone-500 hover:text-emerald-600 transition-colors group"
                    style={{ fontFamily: "var(--font-geist)" }}>
                    <span className="w-10 h-10 flex items-center justify-center bg-white border border-stone-200 rounded-sm text-emerald-500 group-hover:border-emerald-300 transition-colors shadow-sm shrink-0">
                      {icon}
                    </span>
                    <span className="text-sm">{label}</span>
                  </a>
                ) : (
                  <p key={label} className="flex items-center gap-4 text-stone-400" style={{ fontFamily: "var(--font-geist)" }}>
                    <span className="w-10 h-10 flex items-center justify-center bg-white border border-stone-100 rounded-sm text-stone-400 shadow-sm shrink-0">
                      {icon}
                    </span>
                    <span className="text-sm">{label}</span>
                  </p>
                )
              )}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://github.com/Harshverma2608", icon: <GithubIcon size={18} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/harshverma2608/", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-sm border border-stone-200 bg-white text-stone-500 hover:text-emerald-600 hover:border-emerald-300 transition-all shadow-sm">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm border border-stone-100 card-shadow space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold tracking-widest uppercase text-stone-400" style={{ fontFamily: "var(--font-oswald)" }}>
                  Your Name
                </label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Harsh Verma"
                  className="w-full px-4 py-3 rounded-sm bg-stone-50 border border-stone-200 text-sm text-stone-700 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold tracking-widest uppercase text-stone-400" style={{ fontFamily: "var(--font-oswald)" }}>
                  Email Address
                </label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-sm bg-stone-50 border border-stone-200 text-sm text-stone-700 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-widest uppercase text-stone-400" style={{ fontFamily: "var(--font-oswald)" }}>
                Message
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-sm bg-stone-50 border border-stone-200 text-sm text-stone-700 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-[#1a1a2e] hover:bg-emerald-600 disabled:opacity-60 text-white font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-colors duration-200 rounded-sm"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              {status === "loading" ? "Sending..." : <><Send size={14} /> Send Message</>}
            </button>

            {status === "success" && (
              <p className="text-emerald-600 text-sm text-center font-medium">
                ✓ Message sent! I'll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Email me directly at harshkumarverma26@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
