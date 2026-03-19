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

export default function Nav({ discordUrl = 'https://discord.gg/9shKmsfV', twitterUrl = 'https://x.com/woofhype' }) {
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

        {/* Desktop nav */}
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

        {/* Mobile: social icons + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-border)] bg-white/5 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-muted)] hover:bg-white/10 transition-all"
            aria-label="Twitter / X"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-border)] bg-white/5 text-[var(--color-text-muted)] hover:text-[var(--color-teal)] hover:border-[var(--color-teal)]/40 hover:bg-[var(--color-teal)]/10 transition-all"
            aria-label="Discord"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
          <div className="w-px h-5 bg-[var(--color-border)] mx-0.5" />
          <button
            type="button"
            className="touch-target text-[var(--color-text-primary)] rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-x-4 z-50 md:hidden rounded-2xl border border-[var(--color-border)] overflow-hidden"
              style={{
                top: 'max(1rem, env(safe-area-inset-top))',
                background: 'rgba(18, 18, 26, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)]">
                <a
                  href="#hero"
                  className="text-base font-bold text-[var(--color-text-primary)] flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {logoError ? (
                    <span>WOOFHYPE</span>
                  ) : (
                    <img src={images.logo} alt="WOOFHYPE" className="h-6 w-auto" onError={() => setLogoError(true)} />
                  )}
                </a>
                <button
                  type="button"
                  className="touch-target text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] rounded-lg"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={1.8} />
                </button>
              </div>

              <div className="flex flex-col items-center py-4 px-5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    className="text-base font-medium text-[var(--color-text-primary)] w-full py-3.5 text-center rounded-xl hover:bg-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="w-full border-t border-[var(--color-border)] mt-3 pt-4 flex flex-col gap-2.5">
                  <a
                    href={discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-[#0A0A0F] bg-[var(--color-teal)] text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Join Discord
                  </a>
                  <button
                    type="button"
                    className="btn-primary w-full border font-medium text-[var(--color-text-primary)] text-sm"
                    style={{ borderColor: 'var(--color-border)' }}
                    onClick={handleConnectWallet}
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </motion.div>
          </>
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
