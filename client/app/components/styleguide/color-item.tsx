export default function ColorItem({
  name,
  hex,
  rgb,
  hsl,
  gradientDirection,
  gradientHex,
  gradientRgb,
  gradientHsl,
}: {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  gradientDirection?: string;
  gradientHex?: string;
  gradientRgb?: string;
  gradientHsl?: string;
}) {
  const borderClassWhite = hex === '#FFFFFF' ? 'border border-black' : '';
  const borderClassGray50 = hex === '#FAFAFA' ? 'border border-[#D1D2DA]' : '';
  const baseStyles = `h-32 ${borderClassWhite || borderClassGray50} rounded-[0.625rem]`;

  const hasGradient =
    gradientDirection && gradientHex && gradientRgb && gradientHsl;
  const backgroundStyle = hasGradient
    ? {
        background: `linear-gradient(${gradientDirection}, ${hex} 0%, ${gradientHex} 100%)`,
      }
    : { backgroundColor: hex };

  return (
    <div className="flex flex-col gap-6">
      <div className={baseStyles} style={backgroundStyle} />

      <p>{name}</p>

      <div className="flex justify-between">
        <ul className="space-y-3">
          <li className="space-x-8">
            <span className="text-[#6B94A8]">HEX</span>
            <span>{hex}</span>
          </li>
          <li className="space-x-8">
            <span className="text-[#6B94A8]">RGB</span>
            <span>{rgb}</span>
          </li>
          <li className="space-x-8">
            <span className="text-[#6B94A8]">HSL</span>
            <span>{hsl}</span>
          </li>
        </ul>

        {hasGradient && (
          <ul className="space-y-3">
            <li className="space-x-8">
              <span className="text-[#6B94A8]">HEX</span>
              <span>{gradientHex}</span>
            </li>
            <li className="space-x-8">
              <span className="text-[#6B94A8]">RGB</span>
              <span>{gradientRgb}</span>
            </li>
            <li className="space-x-8">
              <span className="text-[#6B94A8]">HSL</span>
              <span>{gradientHsl}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
