import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RoomCard } from "@/components/rooms";
import { ROOMS } from "@/data";
import { sortByNumber, sortByParsedNumber } from "@/utils";

type SortOption = "recommended" | "price-asc" | "price-desc" | "size-asc" | "size-desc";

const Rooms = () => {
  const [sortBy, setSortBy] = React.useState<SortOption>("recommended");

  const sortedRooms = React.useMemo(() => {
    switch (sortBy) {
      case "price-asc":
        return sortByNumber(ROOMS, "price", "asc");
      case "price-desc":
        return sortByNumber(ROOMS, "price", "desc");
      case "size-asc":
        return sortByParsedNumber(ROOMS, "size", "asc");
      case "size-desc":
        return sortByParsedNumber(ROOMS, "size", "desc");
      default:
        return ROOMS;
    }
  }, [sortBy]);

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Kamar Kami</h1>
            <p className="text-sm text-gray-500">
              Pilih kamar yang paling sesuai dengan kebutuhan dan anggaran Anda.
            </p>
          </div>
          <Select
            value={sortBy}
            onValueChange={(value) => setSortBy(value as SortOption)}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Rekomendasi</SelectItem>
              <SelectItem value="price-asc">Harga: Termurah</SelectItem>
              <SelectItem value="price-desc">Harga: Termahal</SelectItem>
              <SelectItem value="size-asc">Ukuran: Terkecil</SelectItem>
              <SelectItem value="size-desc">Ukuran: Terbesar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          {sortedRooms.map((room) => (
            <RoomCard key={room.id} room={room} variant="list" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Rooms;
