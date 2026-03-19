import { motion } from 'framer-motion';
import { images } from '../../assets/images';

const statAccents = ['var(--color-amber)', 'var(--color-teal)', 'var(--color-violet)', 'var(--color-rose)'];
const stats = [
  { value: '1,111', label: 'Total Supply' },
  { value: '150+', label: 'Unique Traits' },
  { value: '30+', label: 'Trait Categories' },
  { value: '1:1', label: 'Legendary Pieces' },
];

const tierColor = (tier) =>
  tier === 'Legendary' ? 'var(--color-amber)' : tier === 'Rare' ? 'var(--color-violet)' : 'var(--color-teal)';
const traits = [
  { name: '[TRAIT_1]', variants: 12, tier: 'Common' },
  { name: '[TRAIT_2]', variants: 8, tier: 'Rare' },
  { name: '[TRAIT_3]', variants: 5, tier: 'Legendary' },
  { name: '[TRAIT_4]', variants: 10, tier: 'Common' },
  { name: '[TRAIT_5]', variants: 6, tier: 'Rare' },
];

const samples = [
  { id: 1, img: images.samples[0], rarity: 'Legendary' },
  { id: 2, img: images.samples[1], rarity: 'Rare' },
  { id: 3, img: images.samples[2], rarity: 'Common' },
  { id: 4, img: images.samples[3], rarity: 'Rare' },
  { id: 5, img: images.samples[4], rarity: 'Common' },
  { id: 6, img: images.samples[5], rarity: 'Legendary' },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="h2 text-[var(--color-text-primary)] mb-2">The Collection</h2>
          <p className="body text-[var(--color-text-muted)] max-w-xl mx-auto">
            WOOFHYPE is a collection of 1,111 unique NFTs that are not randomly generated with 150+ traits.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="card rounded-lg sm:rounded-xl p-3 sm:p-5 text-center"
              style={{ borderLeft: `3px solid ${statAccents[i]}` }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                {stat.value}
              </p>
              <p className="caption mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="h3 text-[var(--color-text-primary)] mb-4">Trait Categories</p>
        <div
          className="flex gap-4 overflow-x-auto pb-4 mb-10 -mx-[var(--section-padding-x)] px-[var(--section-padding-x)] snap-x snap-mandatory scrollbar-none"
        >
          {traits.map((trait, i) => (
            <motion.div
              key={trait.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card flex-shrink-0 w-40 sm:w-44 rounded-xl p-4 snap-start"
              style={{ borderLeft: `3px solid ${tierColor(trait.tier)}` }}
            >
              <p className="font-semibold text-[var(--color-text-primary)] text-sm">{trait.name}</p>
              <p className="caption text-xs">{trait.variants} variants</p>
              <span
                className="inline-block mt-2 px-2 py-1 rounded-md text-xs font-medium text-[var(--color-bg)]"
                style={{ background: tierColor(trait.tier) }}
              >
                {trait.tier}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-10"
        >
          {samples.map((item) => (
            <motion.div
              key={item.id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="group relative rounded-lg sm:rounded-xl overflow-hidden card aspect-square"
            >
              <img
                src={item.img}
                alt={`WOOFHYPE #${item.id}`}
                className="w-full h-full aspect-square object-cover bg-[var(--color-border)]"
              />
              <div className="nft-overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex flex-col items-end justify-end gap-1.5 sm:gap-2 p-3 sm:p-4">
                <span className="font-mono text-white text-xs sm:text-sm">#{item.id}</span>
                <span
                  className="text-[10px] sm:text-xs px-2 py-1 rounded-md text-[var(--color-bg)]"
                  style={{
                    background:
                      item.rarity === 'Legendary'
                        ? 'var(--color-amber)'
                        : item.rarity === 'Rare'
                          ? 'var(--color-violet)'
                          : 'var(--color-teal)',
                  }}
                >
                  {item.rarity}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <a
            href="https://opensea.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 border font-semibold text-[var(--color-rose)]"
            style={{ borderColor: 'var(--color-rose)' }}
          >
            View Full Collection on OpenSea →
          </a>
        </div>
      </div>
    </section>
  );
}
