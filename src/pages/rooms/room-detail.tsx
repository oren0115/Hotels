import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Separator } from "../../components/ui/separator";
import { Icon } from "@iconify/react";
import { rooms, amenityIcons } from "./room-data";

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id === (id ? parseInt(id) : -1));

  if (!room) {
    return (
      <main className="pt-[100px] pb-16">
        <div className="container mx-auto px-section text-center">
          <h1 className="text-3xl font-bold mb-4">Kamar Tidak Ditemukan</h1>
          <Button onClick={() => navigate("/rooms")}>
            Kembali ke Daftar Kamar
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate("/rooms")}>
          <Icon icon="lucide:arrow-left" className="w-4 h-4" />
          Kembali ke Daftar Kamar
        </Button>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img
                  alt={room.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                  src={room.image}
                />
                <div className="grid grid-cols-3 gap-4">
                  {room.additionalImages.map((img, index) => (
                    <img
                      key={index}
                      alt={`Tampilan ${room.title} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      src={img}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-2">{room.title}</h1>
                <p className="text-2xl font-semibold text-gold mb-4">
                  <span>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(room.price)}
                  </span>{" "}
                  <span className="text-sm text-gray-500">per malam</span>
                </p>

                <p className="text-gray-500 mb-6">{room.description}</p>

                <Tabs defaultValue="details" className="mb-6">
                  <TabsList>
                    <TabsTrigger value="details">Detail</TabsTrigger>
                    <TabsTrigger value="amenities">Fasilitas</TabsTrigger>
                    <TabsTrigger value="policies">Kebijakan</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-gray-500">Ukuran Kamar</p>
                        <p className="font-semibold">{room.size}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Kapasitas</p>
                        <p className="font-semibold">{room.occupancy}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Jenis Tempat Tidur
                        </p>
                        <p className="font-semibold">{room.beds}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="amenities">
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon
                            icon="lucide:check"
                            className="w-4 h-4 text-gold"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="policies">
                    <div className="space-y-4 mt-4">
                      {Object.entries(room.policies).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-sm text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <Separator className="my-6" />

                <div className="flex flex-wrap gap-4 mb-6">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <Icon
                        icon={
                          amenityIcons[amenity as keyof typeof amenityIcons]
                            .icon
                        }
                        className="w-5 h-5 text-gray-500"
                      />
                      <span className="text-gray-500">
                        {
                          amenityIcons[amenity as keyof typeof amenityIcons]
                            .label
                        }
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1">
                    Pesan Sekarang
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate("/contact")}>
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default RoomDetail;
