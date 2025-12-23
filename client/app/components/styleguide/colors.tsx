import ColorItem from './color-item';

export default function Colors() {
  return (
    <section className="text-[#133041]">
      <h2 className="my-8 font-jakarta text-6xl font-bold leading-20">
        Colors
      </h2>

      <div className="my-18 text-jakarta-bold">
        <div className="flex gap-80 text-2xl/tight">
          <p>White</p>
          <p>Black</p>
        </div>

        <hr className="my-8 opacity-15" />

        <div className="grid grid-cols-3 gap-8">
          <ColorItem
            name="White"
            hex="#FFFFFF"
            rgb="255, 255, 255"
            hsl="0%, 100%, 100%"
          />

          <ColorItem
            name="Black"
            hex="#000000"
            rgb="0, 0, 0"
            hsl="0%, 0%, 0%"
          />
        </div>
      </div>

      <div className="my-18 text-jakarta-bold">
        <p className="text-2xl/tight">Purple</p>

        <hr className="my-8 opacity-15" />

        <div className="grid grid-cols-3 gap-8">
          <ColorItem
            name="Purple 800"
            hex="#393A4B"
            rgb="57, 58, 75"
            hsl="237°, 14%, 26%"
          />

          <ColorItem
            name="Purple 700"
            hex="#4D5067"
            rgb="77, 80, 103"
            hsl="233°, 14%, 35%"
          />

          <ColorItem
            name="Purple 600"
            hex="#5B5E7E"
            rgb="91, 94, 126"
            hsl="235°, 16%, 43%"
          />

          <ColorItem
            name="Purple 300"
            hex="#C8CBE7"
            rgb="200, 203, 231"
            hsl="234°, 39%, 85%"
          />

          <ColorItem
            name="Purple 100"
            hex="#E3E4F1"
            rgb="227, 228, 241"
            hsl="236°, 33%, 92%"
          />
        </div>
      </div>

      <div className="my-18 text-jakarta-bold">
        <p className="text-2xl/tight">Gray</p>

        <hr className="my-8 opacity-15" />

        <div className="grid grid-cols-3 gap-8">
          <ColorItem
            name="Gray 600"
            hex="#9495A5"
            rgb="148, 149, 165"
            hsl="236°, 9%, 61%"
          />

          <ColorItem
            name="Gray 300"
            hex="#D1D2DA"
            rgb="209, 210, 218"
            hsl="233°, 11%, 84%"
          />

          <ColorItem
            name="Gray 50"
            hex="#FAFAFA"
            rgb="250, 250, 250"
            hsl="0°, 0%, 98%"
          />
        </div>
      </div>

      <div className="my-18 text-jakarta-bold">
        <p className="text-2xl/tight">Navy</p>

        <hr className="my-8 opacity-15" />

        <div className="grid grid-cols-3 gap-8">
          <ColorItem
            name="Navy 950"
            hex="#171823"
            rgb="23, 24, 35"
            hsl="235°, 21%, 11%"
          />

          <ColorItem
            name="Navy 900"
            hex="#25273D"
            rgb="37, 39, 61"
            hsl="235°, 24%, 19%"
          />

          <ColorItem
            name="Navy 850"
            hex="#494C6B"
            rgb="73, 76, 107"
            hsl="235°, 19%, 35%"
          />
        </div>
      </div>

      <div className="my-18 text-jakarta-bold">
        <div className="flex gap-80 text-2xl/tight">
          <p>Blue</p>
        </div>

        <hr className="my-8 opacity-15" />

        <div className="grid grid-cols-3 gap-8">
          <ColorItem
            name="Blue 500"
            hex="#3A7CFD"
            rgb="58, 124, 253"
            hsl="220°, 98%, 61%"
          />
        </div>
      </div>

      <div className="my-18 text-jakarta-bold">
        <p className="text-2xl/tight">Gradient</p>

        <hr className="my-8 opacity-15" />

        <div className="grid grid-cols-1 gap-8">
          <ColorItem
            name="Gradient 1"
            hex="#55DDFF"
            rgb="85, 221, 255"
            hsl="192°, 100%, 67%"
            gradientDirection="to bottom right"
            gradientHex="#C058F3"
            gradientRgb="192, 88, 243"
            gradientHsl="280°, 87%, 65%"
          />

          <ColorItem
            name="Gradient 2"
            hex="#3710BD"
            rgb="55, 16, 189"
            hsl="254°, 85%, 40%"
            gradientDirection="to bottom right"
            gradientHex="#A42395"
            gradientRgb="164, 35, 149"
            gradientHsl="307°, 64%, 39%"
          />
        </div>
      </div>
    </section>
  );
}
