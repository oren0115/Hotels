/**
 * Reusable Hero Section component
 */

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  buttonText?: string;
  buttonAction?: () => void;
  height?: string;
}

export const HeroSection = ({
  title,
  backgroundImage,
  buttonText,
  buttonAction,
  height = "h-hero",
}: HeroSectionProps) => {
  return (
    <section
      className={`${height} relative flex items-center justify-center bg-cover bg-center`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {buttonText && buttonAction && (
          <Button
            size="lg"
            className="bg-[#FFD700] hover:bg-[#DAA520] font-bold"
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

