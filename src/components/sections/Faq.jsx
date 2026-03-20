import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const items = [
  { q: 'What is WOOFHYPE?', a: 'WOOFHYPE is a community-first pfp project built around the builder’s den — a place for builders, creators, and collectors to connect, share progress, and grow together.' },
  { q: 'How do I mint?', a: 'Mint happens on opensea — once it’s live, you’ll connect your wallet, select quantity, and confirm the transaction.' },
  { q: 'What is the mint price?', a: 'Mint price will be announced with the next launch details — we’re keeping it affordable and builder-friendly.' },
  { q: 'How do I get on the Whitelist?', a: 'Get involved in the community (discord + x), show up consistently, and join collabs/activations when they’re announced.' },
  { q: 'What blockchain is this on?', a: 'WOOFHYPE is on ethereum.' },
  { q: 'What can I do with my NFT?', a: 'Your WOOF acts as your pass into the builder’s den community and future holder perks like early access to drops and collabs.' },
  { q: 'Is there a secondary market?', a: 'Yes — once minted, woofs can be bought and sold on secondary marketplaces like opensea.' },
  { q: 'When is the mint date?', a: 'Mint timing will be announced — stay connected in discord and on x so you don’t miss when the next mint goes live.' },
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
