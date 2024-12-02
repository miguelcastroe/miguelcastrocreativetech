import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MouthPadHeader from "@/components/mouthpad/MouthPadHeader";
import MouthPadDetails from "@/components/mouthpad/MouthPadDetails";
import OutcomesGrid from "@/components/mouthpad/OutcomesGrid";
import Sources from "@/components/mouthpad/Sources";

const MouthPad = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <div className="mt-24 md:mt-32">
          <MouthPadHeader />
          <MouthPadDetails />
          <OutcomesGrid />
          <Sources />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MouthPad;