import { motion } from 'framer-motion';
import { images } from '../../assets/images';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Story() {
  return (
    <section
      id="story"
      className="py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px', amount: 0.1 }}
            className="space-y-5 min-h-0"
          >
            <motion.p
              variants={item}
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-amber)' }}
            >
              Our Story
            </motion.p>
            <motion.h2 variants={item} className="h1 text-[var(--color-text-primary)]">
              THE VISION OF WOOFHYPE
            </motion.h2>
            <motion.p variants={item} className="body text-[var(--color-text-muted)]">
            woofhype is a community-driven project. a place for like minded people who want to grow their knowledge, build their presence, and share real experiences with others.
            <br/><br/>we’re bringing together people across every lane of web3; builders, artists, traders, creators, and collectors — so members can learn, connect, and level up through the power of community.
            </motion.p>
            <motion.p variants={item} className="body text-[var(--color-text-muted)]">
              <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">UTILITY BACKING OUR PROJECT</span>
              we’re building for the long term. utility won’t be rushed — it will be introduced intentionally, based on what the community actually values.
              <br/><br/>
                we’ll be rewarding our OGs, not just the people who are active in discord, but also those who show up consistently in spaces and contribute in real ways.
              <br/><br/>
                here’s what we’re building toward:
              <br/><br/>
                <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">Educational spaces</span>
                we’ll host educational spaces with strong KOLs, founders, developers and many more to help onboard the community and build knowledge across different areas of web3.
              <br/><br/>
                <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">Collaborations + opportunities</span>
                partnerships with aligned projects will lead to real opportunities for our community — collabs, early access, and more.
              <br/><br/>
                <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">Giveaways + community rewards</span>
                frequent giveaways and rewards for active members who consistently show up and contribute.
              <br/><br/>
                <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">Future governance + allocations</span>
              when we launch a token (if/when it makes sense), holders will receive governance and allocations.
              <br/><br/>  
                we know this takes time, energy and resources, but we’re not here for short term hype. we’re building something real, and we’re committed to making the community proud.
                <br/><br/>
            <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">woofhype is community-powered — and we’ll show what a strong community can really look like.</span>
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] md:aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-none shadow-xl"
            style={{ background: 'var(--color-bg)' }}
          >
            <img
              src={images.story}
              alt="WOOFHYPE story"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Second row: image LEFT, founder quote + roadmap RIGHT (reverse of above) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] md:aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-none md:mr-0 shadow-xl order-2 md:order-1"
            style={{ background: 'var(--color-bg)' }}
          >
            <img
              src={images.story2}
              alt="WOOFHYPE community"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="space-y-6 order-1 md:order-2">
            <blockquote
              className="text-base sm:text-xl md:text-2xl font-medium italic py-4 sm:py-5 pr-3 sm:pr-4 border-l-4 pl-4 sm:pl-5 rounded-r-lg"
              style={{ borderColor: 'var(--color-violet)', color: 'var(--color-text-primary)', background: 'rgba(167, 139, 250, 0.12)' }}
            >
              FROM THE FOUNDER OF WOOF HYPE<br/>
              &ldquo;MY MAIN GOAL IS TO CREATE A COMMUNITY OF LIKE MINDED PEOPLE WHO ARE HERE TO SHARE, LEARN AND GROW KNOWLEDGE TOGETHER
              &rdquo;
            </blockquote>
            <div className="space-y-3">
              <p className="h3 text-[var(--color-text-primary)]">Roadmap</p>
              <ul className="space-y-3 border-l-2 pl-4 sm:pl-5 text-xs sm:text-sm" style={{ borderColor: 'var(--color-violet)' }}>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 1:</strong> Community Building — Grow the community into a strong, consistent presence across web3, both on x and in discord.</li>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 2:</strong> Collaborations + Partnerships — Partner with aligned projects and communities to expand reach, create opportunities, and bring more value to holders.</li>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 3:</strong>  Next launch — Launch the next woofhype drop with a clearer direction, stronger narrative, and a better mint experience for everyone.</li>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 4:</strong> Coming Soon — we’ll announce phase 4 once phases 1–3 are actively running and the community helps shape what’s next.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
