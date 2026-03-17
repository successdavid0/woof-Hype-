import { motion, useScroll, useTransform } from 'framer-motion';
import { images } from '../../assets/images';

const easing = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.4]);
  const y = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-end md:justify-center overflow-hidden"
      style={{
        background: 'var(--color-bg)',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
        paddingTop: 'max(5rem, env(safe-area-inset-top) + 2rem)',
        paddingBottom: 'max(2rem, env(safe-area-inset-bottom) + 1.5rem)',
      }}
    >
      {/* Background: layered shapes instead of generic overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute -right-[40%] -top-[20%] w-[90%] aspect-square rounded-full opacity-[0.07]"
          style={{ background: 'var(--color-teal)' }}
        />
        <div
          className="absolute -left-[30%] top-[40%] w-[70%] aspect-square rounded-full opacity-[0.05]"
          style={{ background: 'var(--color-violet)' }}
        />
        <div
          className="absolute right-[10%] bottom-[10%] w-[min(400px,50%)] aspect-square rounded-full opacity-[0.04]"
          style={{ background: 'var(--color-amber)' }}
        />
      </motion.div>

      {/* Hero background image — add public/images/hero.jpg to use */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.hero})`, y: bgY }}
      />
      <div className="absolute inset-0 bg-[var(--color-bg)]/60" />

      <motion.div
        className="relative z-10 max-w-[var(--container-max)] mx-auto w-full"
        style={{ opacity, y }}
      >
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easing }}
            className="inline-block text-[11px] font-medium uppercase tracking-[0.25em] mb-5 text-[var(--color-text-muted)]"
          >
            Lock In the HYPE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: easing }}
            className="text-[clamp(3rem,12vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--color-text-primary)]"
          >
            WOOF
            <br />
            <span className="text-[var(--color-teal)]">HYPE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: easing }}
            className="mt-6 text-base md:text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed"
          >
            COMMUNITY FIRST NFT WITH COOL ARTS AND UTILITY FOR ITS HOLDERS AND MORE  
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: easing }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#mint"
              className="inline-flex items-center min-h-[48px] px-7 rounded-full font-semibold text-[#0A0A0F] bg-[var(--color-teal)] hover:opacity-95 active:scale-[0.98] transition-all"
            >
              Mint Now
            </a>
            <a
              href="#story"
              className="inline-flex items-center min-h-[48px] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] font-medium text-sm transition-colors border-b border-[var(--color-border)] hover:border-[var(--color-text-primary)] pb-0.5"
            >
              Learn more →
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint — minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 left-[var(--section-padding-x)] right-[var(--section-padding-x)] flex flex-col items-center md:items-start md:left-[var(--section-padding-x)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a
          href="#story"
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <span className="w-px h-8 bg-current opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
    </section>
  );
}
