import { AirlinesEmiratesSvg } from "@/src/assets/images";
import Image from "next/image";
const TravelDetails = ({ travelData }) => {
  return (
    <div className="flex items-center pt-3">
      <div className="me-4 p-0.5">
        <Image src={AirlinesEmiratesSvg} alt="AirlinesEmiratesSvg" />
      </div>
      <div className="flex flex-1">
        <div className="w-2/6">
          <p className="text-gray-950 font-semibold text-base">
            {travelData.departure} - {travelData.destination}
          </p>
          <p className="text-gray-600 font-normal text-sm">
            {travelData.estimated_time}
          </p>
        </div>
        <div className="w-2/6">
          <p className="text-gray-950 font-semibold text-base">
            {travelData.start_time}
          </p>
          <p className="text-gray-600 font-normal text-sm">
            {travelData.start_date}
          </p>
        </div>
        <div className="w-2/6">
          <p className="text-gray-950 font-semibold text-base">
            {travelData.end_time}
          </p>
          <p className="text-gray-600 font-normal text-sm">
            {travelData.end_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export { TravelDetails };
