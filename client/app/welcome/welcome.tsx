import { IconMoon, IconSun } from '~/assets/icons';
import {
  ImageDesktopDark,
  ImageDesktopLight,
  ImageMobileLight,
  ImageMobileDark,
} from '~/assets/images';

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 pt-12 pb-19.5">
      <header className="flex flex-col items-center gap-4">
        <picture>
          <source
            media="(min-width: 48rem) and (prefers-color-scheme: dark)"
            srcSet={ImageDesktopDark}
          />
          <source media="(min-width: 48rem)" srcSet={ImageDesktopLight} />
          <source
            media="(prefers-color-scheme: dark)"
            srcSet={ImageMobileDark}
          />
          <img
            src={ImageMobileLight}
            alt="Background image"
            fetchPriority="high"
            className="w-full"
          />
          {/* <img
            src={ImageMobileDark}
            alt="Background image for dark mode"
            fetchPriority="high"
            className="hidden w-full dark:block"
          /> */}
        </picture>

        <h1>Todo</h1>

        <button type="button" aria-label="Toggle Dark Mode">
          <img
            src={IconMoon}
            alt="Moon icon"
            className="block w-full dark:hidden"
          />
          <img
            src={IconSun}
            alt="Sun icon"
            className="hidden w-full dark:block"
          />
        </button>
      </header>

      <section className="max-w-xl w-full space-y-6 px-4">
        <input
          type="text"
          id="todo-input"
          placeholder="Create a new todo..."
          autoComplete="off"
        />
        <ul
          className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4"
          id="todo-list"
        >
          {/* Todo items will be dynamically added here */}
          <li>No todos yet</li>
        </ul>

        <p className="text-center">
          <span id="items-count"></span> items left
        </p>

        <nav>
          <ul className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <li>
              <button type="button">All</button>
            </li>
            <li>
              <button type="button">Active</button>
            </li>
            <li>
              <button type="button">Completed</button>
            </li>
          </ul>
        </nav>

        <button type="button">Clear Completed</button>

        <p className="text-center">Drag and drop to reorder list</p>
      </section>
    </main>
  );
}
