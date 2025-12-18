/**
 * Reusable Call-to-Action Section component
 */

import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const CTASection = ({
  title,
  buttonText,
  onButtonClick,
  backgroundColor = "bg-[#FFD700]",
  textColor = "text-white",
}: CTASectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor} ${textColor} text-center`}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <Button
        size="lg"
        variant="outline"
        className="bg-white text-[#FFD700] hover:bg-[#DAA520] hover:text-white"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </section>
  );
};

