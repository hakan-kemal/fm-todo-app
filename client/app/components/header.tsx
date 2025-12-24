import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '~/assets/icons';
import {
  ImageDesktopDark,
  ImageDesktopLight,
  ImageMobileLight,
  ImageMobileDark,
  LogoTodo,
} from '~/assets/images';

export default function Header() {
  const initialState = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('colorScheme');
      if (saved) return saved as 'dark' | 'light';
      // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return 'light dark';
  };

  const [colorScheme, setColorScheme] = useState<
    'light dark' | 'dark' | 'light'
  >(initialState);

  useEffect(() => {
    localStorage.setItem('colorScheme', colorScheme);

    const colorSchemeMeta = document.querySelector<HTMLMetaElement>(
      'meta[name=color-scheme]'
    );
    if (colorSchemeMeta) {
      colorSchemeMeta.content = colorScheme;
    }
  }, [colorScheme]);

  const handleClick = () => {
    setColorScheme((prev) =>
      prev === 'light' || prev === 'light dark' ? 'dark' : 'light'
    );
  };

  return (
    <header className="relative w-full">
      <picture className="block w-full">
        <source
          media="(min-width: 48rem) and (prefers-color-scheme: dark)"
          srcSet={ImageDesktopDark}
        />
        <source media="(min-width: 48rem)" srcSet={ImageDesktopLight} />
        <source media="(prefers-color-scheme: dark)" srcSet={ImageMobileDark} />
        <img
          src={ImageMobileLight}
          alt="Background image"
          fetchPriority="high"
          className="w-full block"
        />
      </picture>

      <div className="absolute inset-0 top-12 max-w-xl mx-auto px-6 flex items-start justify-between text-white">
        <img
          src={LogoTodo}
          alt="logo todo app"
          className="h-5 md:h-7.5 w-auto"
        />

        <button
          type="button"
          aria-label="Toggle Dark Mode"
          onClick={handleClick}
          className="cursor-pointer"
        >
          <img
            src={IconMoon}
            alt="Moon icon"
            className="block dark:hidden h-5 md:h-7.5 w-auto"
          />
          <img
            src={IconSun}
            alt="Sun icon"
            className="hidden dark:block h-5 md:h-7.5 w-auto"
          />
        </button>
      </div>
    </header>
  );
}
