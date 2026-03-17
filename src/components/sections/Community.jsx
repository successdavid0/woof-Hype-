import { motion } from 'framer-motion';

const quotes = [
  { text: '[COMMUNITY_MEMBER_QUOTE]', handle: '@[HANDLE]' },
  { text: '[COMMUNITY_MEMBER_QUOTE]', handle: '@[HANDLE]' },
  { text: '[COMMUNITY_MEMBER_QUOTE]', handle: '@[HANDLE]' },
];

export default function Community({ discordUrl = '[DISCORD_INVITE_URL]' }) {
  return (
    <section
      id="community"
      className="py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
      style={{
        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(45, 212, 191, 0.15) 50%, rgba(229, 184, 114, 0.1) 100%)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[var(--container-max)] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h2 text-[var(--color-text-primary)] mb-2"
        >
          Join the Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="body text-[var(--color-text-muted)] max-w-xl mx-auto mb-5"
        >
          [1–2 sentences about what the Discord offers — alpha, giveaways, holder perks]
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-white/10 text-[var(--color-text-primary)] text-sm font-medium mb-6"
        >
          200+ Members
        </motion.div>
        <motion.a
          href="https://discord.gg/9shKmsfV"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="btn-primary inline-flex items-center justify-center min-w-[200px] text-[#0A0A0F] bg-[var(--color-teal)]"
        >
          Join Discord
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 mt-8 flex-wrap"
        >
          <a
            href="https://x.com/woofhype"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm min-h-[var(--touch-min)] flex items-center"
          >
            Twitter / X
          </a>
          <a
            href="#"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm min-h-[var(--touch-min)] flex items-center"
          >
            [PLATFORM_3]
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="card rounded-xl p-5 text-left border border-[var(--color-border)]"
            >
              <p className="body text-[var(--color-text-primary)] mb-2">&ldquo;{q.text}&rdquo;</p>
              <p className="caption">{q.handle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
