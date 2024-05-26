import Image from "next/image";
import { DotSvg, RightArrowSvg } from "@/src/assets/images";

const FlightHistoryCard = () => {
  return (
    <div className="bg-white rounded-t-lg p-5 mb-0.5">
      <div className="flex items-center">
        <div className="items-center">
          <p className="rounded-full bg-blue-700 text-sm font-semibold text-white px-2 py-0.5 me-4">
            1
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-950 flex items-center">
            DAC
            <Image
              src={RightArrowSvg}
              width={15}
              alt="RightArrowSvg"
              className="mx-1"
            />
            JFK
          </p>
          <div className="text-gray-600 text-sm font-normal flex items-center">
            <p>Round Trip</p>
            <Image src={DotSvg} alt="RightArrowSvg" className="mx-2" />
            <p>25 Mar - 4 Apr 2023</p>
            <Image src={DotSvg} alt="RightArrowSvg" className="mx-2" />
            <p>1 Stop</p>
          </div>
        </div>
        <p className="ms-auto">33h 20m</p>
      </div>
    </div>
  );
};

export { FlightHistoryCard };
