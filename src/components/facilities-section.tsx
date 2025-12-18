import { Icon } from "@iconify/react";
import { FACILITIES } from "@/data";

export const FacilitiesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fasilitas</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.name}
              className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <Icon icon={facility.icon} className="w-8 h-8 text-gold" />
              </div>
              <span className="text-lg font-medium">{facility.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
