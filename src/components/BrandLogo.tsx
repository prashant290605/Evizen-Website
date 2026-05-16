type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src="/evizen-ai-logo.png"
      alt="Evizen AI"
      className={`brand-logo ${className}`}
      width="2502"
      height="658"
    />
  );
}
