import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '~/assets/icons';
import {
  ImageDesktopDark,
  ImageDesktopLight,
  ImageMobileDark,
  ImageMobileLight,
  LogoTodo,
} from '~/assets/images';

export default function Header() {
  const initialState = () => {
    if (typeof window !== 'undefined') {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      return systemPrefersDark.matches ? 'dark' : 'light';
    }

    return 'light';
  };

  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>(
    initialState
  );

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
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="relative w-full h-50 md:h-75">
      <picture className="absolute inset-0">
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
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-start justify-between max-w-135 w-full pt-12 px-6 pb-10 text-white">
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
