import { FacilityCard } from "@/components/facilities";
import { FACILITY_DETAILS } from "@/data";

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
          {FACILITY_DETAILS.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Facilities;
