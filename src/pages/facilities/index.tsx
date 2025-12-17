import { Card, CardContent } from "../../components/ui/card";
import { Icon } from "@iconify/react";

const facilities = [
  {
    id: 1,
    title: "Kolam Renang Mewah",
    description:
      "Kolam renang infinity dengan suhu terkontrol dan pemandangan kota yang menakjubkan. Buka setiap hari dari pukul 06.00 hingga 22.00.",
    icon: "lucide:pool",
    image: "/img/fasility/swimming-pool.jpg",
    features: [
      "Suhu terkontrol",
      "Layanan handuk",
      "Bar kolam renang",
      "Tempat bersantai",
    ],
  },
  {
    id: 2,
    title: "Pusat Kebugaran Modern",
    description:
      "Peralatan mutakhir dan layanan pelatihan pribadi tersedia 24 jam.",
    icon: "lucide:dumbbell",
    image: "/img/fasility/gym.jpg",
    features: [
      "Akses 24 jam",
      "Pelatih pribadi",
      "Peralatan modern",
      "Studio yoga",
    ],
  },
  {
    id: 3,
    title: "Restoran Gourmet",
    description:
      "Pengalaman bersantap mewah dengan hidangan internasional dan spesialisasi lokal.",
    icon: "lucide:utensils",
    image: "/img/fasility/geurmet-food.jpg",
    features: [
      "Buffet sarapan",
      "Makan à la carte",
      "Ruang penyimpanan anggur",
      "Ruang makan pribadi",
    ],
  },
  {
    id: 4,
    title: "Pusat Bisnis",
    description: "Ruang rapat lengkap dan fasilitas konferensi profesional.",
    icon: "lucide:briefcase",
    image: "/img/fasility/bussines-center.jpg",
    features: [
      "Ruang rapat",
      "Konferensi video",
      "WiFi kecepatan tinggi",
      "Layanan cetak",
    ],
  },
  {
    id: 5,
    title: "Spa & Kesehatan",
    description: "Relaksasi dan peremajaan dengan perawatan spa profesional.",
    icon: "lucide:flower",
    image: "/img/fasility/spa.jpg",
    features: ["Terapi pijat", "Sauna", "Ruang uap", "Salon kecantikan"],
  },
];

const FacilityCard = ({ facility }: { facility: (typeof facilities)[0] }) => {
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

const Facilities = () => {
  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-section">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Fasilitas Kami</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Rasakan kemewahan dan kenyamanan dengan fasilitas kelas dunia kami
            yang dirancang untuk membuat masa menginap Anda luar biasa.
          </p>
        </div>

        <div>
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Facilities;
