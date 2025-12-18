/**
 * Reusable FacilityCard component for displaying facility information
 */

import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import type { FacilityDetail } from "@/types";

interface FacilityCardProps {
  facility: FacilityDetail;
}

export const FacilityCard = ({ facility }: FacilityCardProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            alt={facility.title}
            className="w-full h-[300px] object-cover rounded-lg"
            src={facility.image}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-gold/10">
                <Icon icon={facility.icon} className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-bold">{facility.title}</h2>
            </div>

            <p className="text-gray-500 mb-6">{facility.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {facility.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="w-4 h-4 text-gold" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

