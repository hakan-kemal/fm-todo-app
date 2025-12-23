export default function Spacing() {
  return (
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
  );
}
