import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const items = [
  { q: 'What is WOOFHYPE?', a: '[PROJECT_DESCRIPTION — 2 to 3 sentences about what makes this collection unique]' },
  { q: 'How do I mint?', a: 'Connect your [NETWORK] wallet (e.g. MetaMask), click \'Mint Now\', select quantity, and confirm the transaction. Make sure you have enough [CURRENCY] to cover the mint price plus gas fees.' },
  { q: 'What is the mint price?', a: 'The public mint price is [PRICE]. Allowlist members receive a discounted price of [AL_PRICE].' },
  { q: 'How do I get on the allowlist?', a: '[ALLOWLIST_INSTRUCTIONS — e.g. Join our Discord and complete the allowlist tasks in #allowlist-info]' },
  { q: 'What blockchain is this on?', a: 'WOOFHYPE lives on [NETWORK]. You\'ll need a compatible wallet and [CURRENCY] to mint.' },
  { q: 'What can I do with my NFT?', a: '[UTILITY_DESCRIPTION — holder perks, access, commercial rights, etc.]' },
  { q: 'Is there a secondary market?', a: 'Yes, WOOFHYPE will be tradeable on [MARKETPLACE, e.g. OpenSea / Blur] after mint.' },
  { q: 'When is the reveal?', a: '[REVEAL_INFO — e.g. Instant reveal / 48 hours after mint / TBD]' },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-[42rem] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h2 text-[var(--color-text-primary)] text-center mb-10"
        >
          FAQ
        </motion.h2>
        <div className="space-y-2">
          {items.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="card rounded-xl overflow-hidden transition-[border-color,box-shadow]"
              style={{
                borderColor: openIndex === i ? 'var(--color-teal)' : 'var(--color-border)',
                boxShadow: openIndex === i ? '0 0 0 1px rgba(45, 212, 191, 0.15)' : 'none',
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 text-left font-semibold text-[var(--color-text-primary)] min-h-[var(--touch-min)]"
              >
                <span className="text-left text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-200 text-[var(--color-text-muted)]"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="body px-5 pb-4 sm:px-6 text-[var(--color-text-muted)]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
