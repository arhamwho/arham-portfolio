import FadeIn from './FadeIn';
import Magnet from './Magnet';
import Navbar from './Navbar';
import ContactButton from './ContactButton';
import useFitText from '../hooks/useFitText';

const NAV_LINKS = [
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
];

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  const { containerRef, textRef, fontSize } = useFitText();

  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <Navbar links={NAV_LINKS} />

      <div ref={containerRef} className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight sm:mt-4 md:-mt-5"
        >
          <span
            ref={textRef}
            className="inline-block text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]"
            style={fontSize ? { fontSize } : undefined}
          >
            Hi, i&apos;m arham
          </span>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a full stack developer turning ideas into real-world products
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <img src={PORTRAIT_URL} alt="Arham portrait" className="block w-full select-none" draggable={false} />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
