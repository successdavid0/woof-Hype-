import { motion } from 'framer-motion';

export default function Mint() {
  return (
    <section
      id="mint"
      className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] relative"
      style={{
        background: 'var(--color-bg)',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(167, 139, 250, 0.06) 0%, transparent 55%)',
      }}
    >
      <div className="max-w-[32rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated rounded-2xl p-10 sm:p-12 text-center"
        >
          <h2 className="h2 text-[var(--color-text-primary)] mb-3">WOOFHYPE Mint</h2>
          <p className="text-4xl md:text-5xl font-bold text-[var(--color-teal)] mb-4">Coming Soon</p>
          <p className="body text-[var(--color-text-muted)] max-w-sm mx-auto">
            Mint details, date, and contract will be announced soon. Join our Discord to stay updated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
