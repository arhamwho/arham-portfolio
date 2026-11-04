import { useState, type FormEvent } from 'react';
import { FileText, Github, MapPin, Phone } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { asset } from '../lib/asset';

const CONTACT_EMAIL = 'arhamwhoo@gmail.com';
const CONTACT_PHONE = '+91 99877 24721';
const CONTACT_PHONE_HREF = 'tel:+919987724721';
const LOCATION = 'Mumbai, India';
const GITHUB_URL = 'https://github.com/arhamwho';
const RESUME_URL = asset('/resume.pdf');

const BASE = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const ACCENT_GRADIENT = 'linear-gradient(123deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)';

const labelClass = 'text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#0C0C0C]/60';
const fieldClass =
  'w-full border-b border-[rgba(12,12,12,0.2)] bg-transparent py-2.5 text-[#0C0C0C] font-light outline-none transition-colors duration-200 focus:border-[#7621B0]';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `New project inquiry from ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message') ?? ''}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="px-3 pb-6 pt-20 sm:px-4 sm:pt-24 md:pt-32" style={{ background: '#0C0C0C' }}>
      <div
        className="relative overflow-hidden rounded-[40px] px-6 pb-40 pt-16 sm:rounded-[50px] sm:px-10 sm:pb-48 sm:pt-20 md:rounded-[60px] md:px-16 md:pb-56 md:pt-28"
        style={{ background: 'radial-gradient(ellipse at 30% 10%, #FFFFFF 0%, #EDEFF2 70%)' }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-6 sm:gap-8">
            <FadeIn
              as="h2"
              y={40}
              className="font-black uppercase leading-[0.9] tracking-tight text-[#0C0C0C]"
              style={{ fontSize: 'clamp(2.75rem, 7.5vw, 120px)' }}
            >
              Let
              <span
                style={{
                  background: ACCENT_GRADIENT,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                &apos;
              </span>
              s get
              <br />
              in touch
            </FadeIn>
            <FadeIn delay={0.15} y={20}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="relative inline-block pb-1 font-medium text-[#0C0C0C] transition-opacity duration-200 hover:opacity-70"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
              >
                {CONTACT_EMAIL}
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full rounded-full"
                  style={{ background: ACCENT_GRADIENT }}
                />
              </a>
            </FadeIn>
            <FadeIn delay={0.25} y={20} className="flex flex-col gap-3 text-[#0C0C0C]/70">
              <a href={CONTACT_PHONE_HREF} className="flex items-center gap-3 font-light transition-opacity duration-200 hover:opacity-70">
                <Phone size={18} /> {CONTACT_PHONE}
              </a>
              <span className="flex items-center gap-3 font-light">
                <MapPin size={18} /> {LOCATION}
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-light transition-opacity duration-200 hover:opacity-70"
              >
                <Github size={18} /> github.com/arhamwho
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-light transition-opacity duration-200 hover:opacity-70"
              >
                <FileText size={18} /> Resume
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} y={40} className="relative">
            <FadeIn
              as="img"
              src={`${BASE}/lego_icon-1.703bb594.png`}
              alt=""
              delay={0.5}
              x={60}
              y={-20}
              duration={0.9}
              className="pointer-events-none absolute -right-4 -top-14 z-10 w-[100px] rotate-12 drop-shadow-xl sm:-right-10 sm:-top-16 sm:w-[130px] md:w-[150px]"
            />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-[32px] border bg-white p-6 shadow-[0_20px_60px_rgba(12,12,12,0.08)] sm:gap-7 sm:rounded-[40px] sm:p-8 md:p-10"
              style={{ borderColor: 'rgba(12, 12, 12, 0.12)' }}
            >
              <label className="flex flex-col gap-1">
                <span className={labelClass}>Full name</span>
                <input name="name" required className={fieldClass} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelClass}>Email</span>
                <input name="email" type="email" required className={fieldClass} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelClass}>Message</span>
                <textarea name="message" required rows={4} className={`${fieldClass} resize-y`} />
              </label>
              <div className="flex flex-col items-stretch gap-3 pt-2 [&>button]:w-full">
                <ContactButton type="submit" label="Send" />
                {sent && (
                  <span className="text-center text-xs font-light uppercase tracking-widest text-[#0C0C0C]/60">
                    Thanks! Your mail app should open now.
                  </span>
                )}
              </div>
            </form>
          </FadeIn>
        </div>

        <FadeIn
          as="img"
          src={`${BASE}/Group_134-1.2e04f3ce.png`}
          alt=""
          delay={0.3}
          y={120}
          duration={1}
          className="pointer-events-none absolute -bottom-10 left-[8%] w-[150px] sm:-bottom-14 sm:w-[190px] md:left-[10%] md:w-[230px]"
        />
      </div>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-3 pt-6 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:flex-row sm:text-sm">
        <span>© {new Date().getFullYear()} Arham — Full Stack Developer</span>
        <a href="#" className="transition-opacity duration-200 hover:opacity-70">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
