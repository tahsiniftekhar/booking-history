import { AirlinesEmiratesSvg } from "@/src/assets/images";
import Image from "next/image";
const AirlineDetails = ({ airlineData }) => {
  return (
    <div className="flex">
      <div className="w-2/6">
        <p className="text-gray-800 font-475 text-sm">{airlineData.airline_name}</p>
        <p className="text-gray-600 font-normal text-sm">Flight no : {airlineData.flight_no}</p>
      </div>
      <div className="w-2/6">
        <p className="text-gray-600 font-normal text-sm">
          {airlineData.plane_name}
        </p>
        <p className="text-gray-600 font-normal text-sm">
          Class : <span className="font-475">{airlineData.class}</span>
        </p>
      </div>
    </div>
  );
};

export { AirlineDetails };
