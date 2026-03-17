import { useState } from 'react';
import { images } from '../assets/images';

export default function Footer({ discordUrl = '[DISCORD_INVITE_URL]', twitterHandle = '[TWITTER/X HANDLE]' }) {
  const year = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer
      className="border-t py-12 md:py-14"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-bg)',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
        paddingBottom: 'max(3rem, env(safe-area-inset-bottom) + 1.5rem)',
      }}
    >
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <a
            href="#hero"
            className="text-base font-bold text-[var(--color-text-primary)] min-h-[var(--touch-min)] flex items-center w-fit"
          >
            {logoError ? (
              <span>WOOFHYPE</span>
            ) : (
              <img src={images.logo} alt="WOOFHYPE" className="h-7 w-auto" onError={() => setLogoError(true)} />
            )}
          </a>
          <nav className="flex flex-wrap gap-6 md:gap-8" aria-label="Footer navigation">
            <a href="#story" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors py-2 text-sm min-h-[var(--touch-min)] flex items-center">
              Story
            </a>
            <a href="#mint" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors py-2 text-sm min-h-[var(--touch-min)] flex items-center">
              Mint
            </a>
            <a href="#collection" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors py-2 text-sm min-h-[var(--touch-min)] flex items-center">
              Collection
            </a>
            <a href="#faq" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors py-2 text-sm min-h-[var(--touch-min)] flex items-center">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-6">
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-teal)] transition-colors text-sm min-h-[var(--touch-min)] flex items-center"
              aria-label="Discord"
            >
              Discord
            </a>
            <a
              href={`https://x.com/${twitterHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm min-h-[var(--touch-min)] flex items-center"
              aria-label="Twitter"
            >
              Twitter / X
            </a>
          </div>
        </div>
        <p className="text-[var(--color-text-muted)] text-sm text-center md:text-left">
          © {year} WOOFHYPE. All rights reserved.
        </p>
        <p className="text-[var(--color-text-muted)] text-xs text-center md:text-left -mt-6">
          Not financial advice.
        </p>
      </div>
    </footer>
  );
}
