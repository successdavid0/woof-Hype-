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
              It's a community driven project that has it's community first, with where we have like minded individuals who are looking to build there knowledge, 
              presence and overall share there experiences with the community. <br/><br/>
              We have people that specialize in every aspect of web3 that will then build to helping the people understand the value of web3 and connections to grow there knowledge. <br/>
            </motion.p>
            <motion.p variants={item} className="body text-[var(--color-text-muted)]">
              <span className="block text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2">UTILITY BACKING OUR PROJECT</span>
              Aside the communities massive drive to building a solid and stable ecosystem and due to how we believe in long term growth. <br /><br/>
              We will be rewarding our community OGs not just those that show up in the discord but also those that show up on our spaces. <br/><br/>

            1. We who’ll be hosting educational spaces with amazing KOLS that will help the community build knowledge in different areas similar to onboarding. <br/><br/>
            2. Collaborations with projects will lead to different opportunities and we plan to reward our communities with those opportunities (jobs, early access and much more) <br/><br/>
            3. Frequent giveaways for our community and active members <br/><br/>
            4. When we do finally plan to launch our token project an immediate governance will be given to the holders and allocations as well. <br/><br/>
            

              We know that all these will take time, money and energy. we assure you that we are not here for just the hype of the game but we are going to be building long term and we will definitely make the community proud. <br/><br/>
              Woof hype is a purely community pushed project and we will show the world what a strong community is all about.
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
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 1:</strong> Community Building — Growth of the community to a strong stand and have a strong presence in the crypto space</li>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 2:</strong> Collaborations with projects and communities — Collaborations with projects and communities to help grow the community and the project</li>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 3:</strong> NFT launch — NFT launch for the public to mint and have a strong community behind the project</li>
                <li className="text-[var(--color-text-primary)]"><strong className="text-[var(--color-violet)]">Phase 4:</strong> Coming soon — .......</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
