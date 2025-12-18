/**
 * Reusable RoomCard component for displaying room information
 */

import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Room } from "@/types";
import { AMENITY_ICONS } from "@/data";
import { formatCurrency } from "@/utils";
import { ROUTES } from "@/constants";

interface RoomCardProps {
  room: Room;
  variant?: "list" | "grid";
}

export const RoomCard = ({ room, variant = "list" }: RoomCardProps) => {
  const navigate = useNavigate();

  if (variant === "grid") {
    return (
      <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          alt={room.title}
          src={room.image}
        />
        <CardContent className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">{room.title}</h3>
          <p className="text-gray-600 text-sm">{room.description}</p>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Icon icon="lucide:users" className="w-4 h-4" />
              <span className="text-sm">{room.occupancy}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="lucide:maximize" className="w-4 h-4" />
              <span className="text-sm">{room.size}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 3).map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <Icon
                  icon={AMENITY_ICONS[amenity].icon}
                  className="w-4 h-4"
                />
              </div>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-sm text-gray-500">
                +{room.amenities.length - 3} lainnya
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-gold text-xl">
                {formatCurrency(room.price)}
              </span>
              <span className="text-gray-500 text-sm">/malam</span>
            </div>
          </div>
          <Button
            className="w-full mt-2"
            variant="default"
            onClick={() => navigate(ROUTES.ROOM_DETAIL(room.id))}
          >
            Lihat Detail
          </Button>
        </CardContent>
      </Card>
    );
  }

  // List variant (default)
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            alt={room.title}
            className="w-full h-[300px] object-cover rounded-lg"
            src={room.image}
          />
          <div className="flex flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-2">{room.title}</h2>
              <p className="text-gray-500 mb-4">{room.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Room Size</p>
                  <p className="font-semibold">{room.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Occupancy</p>
                  <p className="font-semibold">{room.occupancy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bed Type</p>
                  <p className="font-semibold">{room.beds}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price per night</p>
                  <span className="text-gold font-semibold">
                    {formatCurrency(room.price)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-1">
                    <Icon
                      icon={AMENITY_ICONS[amenity].icon}
                      className="w-4 h-4 text-gray-500"
                    />
                    <span className="text-sm text-gray-500">
                      {AMENITY_ICONS[amenity].label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <Button
                size="lg"
                className="flex-1"
                onClick={() => navigate(ROUTES.ROOM_DETAIL(room.id))}
              >
                Lihat Detail
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(ROUTES.CONTACT, { replace: true })}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

