import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Icon } from "@iconify/react";
import { RoomCard } from "@/components/rooms";
import { ROOMS } from "@/data";
import { LOCATION_OPTIONS, getRoomTitleByLocationId } from "@/data/explore.data";
import { ROUTES } from "@/constants";

// Main Explore component
const Explore = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = React.useState(new URLSearchParams());
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState<typeof ROOMS | null>(null);

  const selectedLocation = searchParams.get("location") || "";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const handleSearch = () => {
    if (!selectedLocation || !startDate || !endDate) {
      setResults(null);
      return;
    }

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      // Filter rooms based on selected room type
      const targetTitle = getRoomTitleByLocationId(selectedLocation);
      const filteredResults = targetTitle
        ? ROOMS.filter((room) => room.title === targetTitle)
        : ROOMS;
      setResults(filteredResults);
      setIsSearching(false);
    }, 1200);
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchParams(
      new URLSearchParams({
        location: event.target.value,
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
      })
    );
  };

  const handleDateChange = (key: "startDate" | "endDate", value: string) => {
    setSearchParams(
      new URLSearchParams({
        ...(selectedLocation && { location: selectedLocation }),
        ...(key === "startDate"
          ? { startDate: value, ...(endDate && { endDate }) }
          : { endDate: value, ...(startDate && { startDate }) }),
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-primary text-white py-16 m-5 rounded-2xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Temukan Kamar yang Tepat untuk Anda
          </h1>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">
                  Kamar mana yang Anda pilih?
                </label>
                <Select value={selectedLocation} onValueChange={(value) => {
                  handleLocationChange({
                    target: { value },
                  } as React.ChangeEvent<HTMLSelectElement>);
                }}>
                  <SelectTrigger className="bg-gray-50 text-gray-900">
                    <SelectValue placeholder="Pilih Kamar" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATION_OPTIONS.map((location) => (
                      <SelectItem key={location.id} value={location.id}>
                        <div className="flex flex-col">
                          <span>{location.name}</span>
                          <span className="text-xs text-gray-500">
                            {location.cities}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">
                  Kapan Anda ingin menginap?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="date"
                    className="bg-gray-50 text-gray-900"
                    value={startDate || ""}
                    onChange={(e) => handleDateChange("startDate", e.target.value)}
                  />
                  <Input
                    type="date"
                    className="bg-gray-50 text-gray-900"
                    value={endDate || ""}
                    onChange={(e) => handleDateChange("endDate", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 border-t border-gray-100 mt-2">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Icon icon="lucide:info" className="w-4 h-4" />
                Pilih tipe kamar dan rentang tanggal, lalu tekan tombol cari.
              </p>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full md:w-auto border-gray-200 text-gray-700"
                  onClick={() => {
                    setSearchParams(new URLSearchParams());
                    setResults(null);
                  }}
                >
                  Reset
                </Button>
                <Button
                  type="button"
                  className="w-full md:w-auto"
                  onClick={handleSearch}
                  disabled={!selectedLocation || !startDate || !endDate || isSearching}
                >
                  {isSearching ? (
                    <span className="flex items-center gap-2">
                      <Spinner size="sm" />
                      Mencari...
                    </span>
                  ) : (
                    "Cari Kamar"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-12">
        {isSearching ? (
          <div className="flex flex-col justify-center items-center min-h-[300px] gap-3">
            <Spinner size="lg" />
            <p className="text-sm text-gray-500">Mencari kamar terbaik untuk Anda...</p>
          </div>
        ) : results && results.length > 0 ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Hasil Pencarian</h2>
              <p className="text-sm text-gray-500">
                Menampilkan {results.length} kamar untuk pilihan Anda
              </p>
            </div>
            {results.map((room) => (
              <RoomCard key={room.id} room={room} variant="list" />
            ))}
          </div>
        ) : selectedLocation && startDate && endDate ? (
          <div className="flex flex-col items-center justify-center min-h-[260px] gap-3 text-center">
            <Icon icon="lucide:bed-double" className="w-10 h-10 text-gray-300" />
            <h2 className="text-lg font-semibold text-gray-800">Belum ada kamar yang cocok</h2>
            <p className="text-sm text-gray-500 max-w-md">
              Coba ubah tipe kamar atau tanggal menginap Anda untuk melihat pilihan lain yang tersedia.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[260px] gap-3 text-center">
            <Icon icon="lucide:calendar-search" className="w-10 h-10 text-gray-300" />
            <h2 className="text-lg font-semibold text-gray-800">Mulai dengan pencarian</h2>
            <p className="text-sm text-gray-500 max-w-md">
              Silakan pilih tipe kamar dan rentang tanggal pada formulir di atas, lalu tekan tombol
              &quot;Cari Kamar&quot;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
