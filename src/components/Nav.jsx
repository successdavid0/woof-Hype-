import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { images } from '../assets/images';

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Mint', href: '#mint' },
  { label: 'Collection', href: '#collection' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav({ discordUrl = 'https://discord.gg/9shKmsfV' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [showWalletToast, setShowWalletToast] = useState(false);

  const handleConnectWallet = () => {
    setShowWalletToast(true);
    setTimeout(() => setShowWalletToast(false), 2500);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-[var(--section-padding-x)] py-4 transition-[background,backdrop-filter] duration-300"
      style={{
        background: 'transparent',
        backdropFilter: 'blur(0px)',
        paddingTop: 'max(1rem, env(safe-area-inset-top))',
      }}
      id="nav"
    >
      <div className="max-w-[var(--container-max)] mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold text-[var(--color-text-primary)] py-2 -my-2 min-h-[var(--touch-min)] flex items-center"
        >
          {logoError ? (
            <span>WOOFHYPE</span>
          ) : (
            <img src={images.logo} alt="WOOFHYPE" className="h-8 w-auto" onError={() => setLogoError(true)} />
          )}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors py-2 text-[15px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[#0A0A0F] bg-[var(--color-teal)]"
          >
            Join Discord
          </a>
          <button
            type="button"
            className="btn-primary border text-sm font-medium text-[var(--color-text-primary)]"
            style={{ borderColor: 'var(--color-border)' }}
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        </div>

        <button
          type="button"
          className="md:hidden touch-target text-[var(--color-text-primary)] rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.8} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[var(--color-bg)]/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-2 px-6"
            style={{ paddingTop: 'max(5rem, env(safe-area-inset-top) + 2rem)' }}
          >
            <button
              type="button"
              className="absolute right-4 touch-target text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] rounded-lg"
              style={{ top: 'max(1rem, env(safe-area-inset-top))' }}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.8} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-[var(--color-text-primary)] w-full py-4 text-center rounded-xl hover:bg-white/5 transition-colors min-h-[var(--touch-min)] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 w-full max-w-[280px] mt-6">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-[#0A0A0F] bg-[var(--color-teal)]"
                onClick={() => setMobileOpen(false)}
              >
                Join Discord
              </a>
              <button
                type="button"
                className="btn-primary w-full border font-medium text-[var(--color-text-primary)]"
                style={{ borderColor: 'var(--color-border)' }}
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showWalletToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full text-sm font-semibold text-[#0A0A0F] bg-[var(--color-teal)] shadow-lg shadow-black/30"
          >
            Coming Soon
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
