import { LocationSvg } from "@/src/assets/images";
import Image from "next/image";

const FlightDetails = () => {
  return (
    <div className="bg-white rounded-b-lg p-5">
      <Image src={LocationSvg} alt="LocationSvg" />
    </div>
  );
};

export { FlightDetails };
