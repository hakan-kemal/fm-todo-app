import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Styleguide' }];
}

export default function Styleguide() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="mt-24 font-jakarta text-7xl font-bold text-[#133041] leading-24">
        Styleguide
      </h1>

      <section>
        <h2 className="my-8 font-jakarta text-6xl font-bold text-[#133041] leading-20">
          Colors
        </h2>

        <div className="my-18">
          <div className="flex gap-80 font-jakarta text-2xl font-bold leading-none text-[#133041]">
            <p>White</p>
            <p>Black</p>
          </div>

          <hr className="my-8 text-[#133041] opacity-15" />

          <div className="flex gap-8 text-jakarta-bold text-[#133041]">
            <div className="flex flex-col gap-6">
              <div className="w-80 h-32 bg-white border border-black rounded-[0.625rem]"></div>
              <p>White</p>
              <ul className="space-y-3">
                <li className="space-x-8">
                  <span className="text-[#6B94A8]">HEX</span>
                  <span>#FFFFFF</span>
                </li>
                <li className="space-x-8">
                  <span className="text-[#6B94A8]">RGB</span>
                  <span>255, 255, 255</span>
                </li>
                <li className="space-x-8">
                  <span className="text-[#6B94A8]">HSL</span>
                  <span>0%, 100%, 100%</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-80 h-32 bg-black border border-black rounded-[0.625rem]"></div>
              <p>Black</p>
              <ul className="space-y-3">
                <li className="space-x-8">
                  <span className="text-[#6B94A8]">HEX</span>
                  <span>#000000</span>
                </li>
                <li className="space-x-8">
                  <span className="text-[#6B94A8]">RGB</span>
                  <span>0, 0, 0</span>
                </li>
                <li className="space-x-8">
                  <span className="text-[#6B94A8]">HSL</span>
                  <span>0%, 0%, 0%</span>
                </li>
              </ul>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <section>
        <h2 className="my-8 font-jakarta text-6xl font-bold text-[#133041] leading-20">
          Typography
        </h2>

        <div className="my-18">
          <div className="mt-16">
            <h3 className="text-jakarta-bold space-x-4">
              <span className="text-[#4E6E7E]">Text Preset 1</span>
              <span className="text-[#133041]">Josefin Sans Regular</span>
            </h3>

            <p className="text-jakarta-base mt-3 space-x-6 text-[#133041] opacity-75">
              <span>18px</span>
              <span>100% Line Height</span>
              <span>-0.25px Letter Spacing</span>
            </p>

            <hr className="my-6 text-[#133041] opacity-25" />

            <p className="text-preset-1 text-[#133041]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-jakarta-bold space-x-4">
              <span className="text-[#4E6E7E]">Text Preset 2 (Bold)</span>
              <span className="text-[#133041]">Josefin Sans Bold</span>
            </h3>

            <p className="text-jakarta-base mt-3 space-x-6 text-[#133041] opacity-75">
              <span>14px</span>
              <span>100% Line Height</span>
              <span>-0.25px Letter Spacing</span>
            </p>

            <hr className="my-6 text-[#133041] opacity-25" />

            <p className="text-preset-2-bold text-[#133041]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-jakarta-bold space-x-4">
              <span className="text-[#4E6E7E]">Text Preset 2 (Regular)</span>
              <span className="text-[#133041]">Josefin Sans Regular</span>
            </h3>

            <p className="text-jakarta-base mt-3 space-x-6 text-[#133041] opacity-75">
              <span>14px</span>
              <span>100% Line Height</span>
              <span>-0.25px Letter Spacing</span>
            </p>

            <hr className="my-6 text-[#133041] opacity-25" />

            <p className="text-preset-2-regular text-[#133041]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-jakarta-bold space-x-4">
              <span className="text-[#4E6E7E]">Text Preset 3</span>
              <span className="text-[#133041]">Josefin Sans Regular</span>
            </h3>

            <p className="text-jakarta-base mt-3 space-x-6 text-[#133041] opacity-75">
              <span>12px</span>
              <span>100% Line Height</span>
              <span>-0.25px Letter Spacing</span>
            </p>

            <hr className="my-6 text-[#133041] opacity-25" />

            <p className="text-preset-3 text-[#133041]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="my-8 font-jakarta text-6xl font-bold text-[#133041] leading-20">
          Spacing
        </h2>

        <div className="my-18 text-[#4E6E7E]">
          <div className="flex gap-32 text-jakarta-bold">
            <p className="w-56">Name</p>
            <p className="w-16">Pixels</p>
            <p className="w-20">Spacing</p>
          </div>

          <div className="flex gap-32 mt-10 font-jakarta leading-10">
            <span className="w-56">spacing-0</span>
            <span className="w-16 opacity-75">0px</span>
          </div>

          <div className="flex gap-32 mt-10 font-jakarta leading-10">
            <span className="w-56">spacing-100</span>
            <span className="w-16 opacity-75">8px</span>
            <span className="h-10 w-2 bg-[#E4F4FD]"></span>
          </div>

          <div className="flex gap-32 mt-10 font-jakarta leading-10">
            <span className="w-56">spacing-200</span>
            <span className="w-16 opacity-75">16px</span>
            <span className="h-10 w-4 bg-[#E4F4FD]"></span>
          </div>

          <div className="flex gap-32 mt-10 font-jakarta leading-10">
            <span className="w-56">spacing-300</span>
            <span className="w-16 opacity-75">24px</span>
            <span className="h-10 w-6 bg-[#E4F4FD]"></span>
          </div>

          <div className="flex gap-32 mt-10 font-jakarta leading-10">
            <span className="w-56">spacing-500</span>
            <span className="w-16 opacity-75">40px</span>
            <span className="h-10 w-8 bg-[#E4F4FD]"></span>
          </div>

          <div className="flex gap-32 mt-10 font-jakarta leading-10">
            <span className="w-56">spacing-600</span>
            <span className="w-16 opacity-75">48px</span>
            <span className="h-10 w-10 bg-[#E4F4FD]"></span>
          </div>
        </div>
      </section>
    </main>
  );
}
