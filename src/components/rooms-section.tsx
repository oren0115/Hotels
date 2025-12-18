import { useNavigate } from "react-router-dom";
import { RoomCard } from "@/components/rooms";
import { ROOMS } from "@/data";

export const RoomsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Kamar & Tarif</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Temukan pilihan kamar kami yang dipilih dengan cermat, masing-masing
          dirancang untuk memberikan perpaduan sempurna antara kenyamanan dan
          kemewahan selama menginap Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} variant="grid" />
          ))}
        </div>
      </div>
    </section>
  );
};
