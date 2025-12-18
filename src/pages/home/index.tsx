import { useNavigate } from "react-router-dom";
import { FacilitiesSection } from "@/components/facilities-section";
import { RoomsSection } from "@/components/rooms-section";
import { HeroSection, CTASection } from "@/components/common";
import { APP_CONFIG, IMAGE_PATHS, ROUTES } from "@/constants";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-[80px]">
      <HeroSection
        title={APP_CONFIG.tagline}
        backgroundImage={IMAGE_PATHS.hero}
        buttonText="JELAJAHI"
        buttonAction={() => navigate(ROUTES.ROOMS)}
      />

      <div className="container mx-auto px-4">{/* <BookingForm /> */}</div>

      <FacilitiesSection />
      <RoomsSection />

      <CTASection
        title="Pesan kamar sekarang juga!"
        buttonText="Pesan Sekarang"
        onButtonClick={() => navigate(ROUTES.EXPLORE)}
      />
    </main>
  );
};

export default Home;
