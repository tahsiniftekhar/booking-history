import { DotSvg } from "@/src/assets/images";
import Image from "next/image";

const FlightHistoryCard = ({ flightHistoryData }) => {
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
            {flightHistoryData.departure} → {flightHistoryData.destination}
          </p>
          <div className="text-gray-600 text-13 font-normal flex items-center">
            <p>{flightHistoryData.trip_type} Trip</p>
            <Image src={DotSvg} alt="RightArrowSvg" className="mx-2" />
            <p>
              {flightHistoryData.start_date} - {flightHistoryData.end_date} 2023
            </p>
            <Image src={DotSvg} alt="RightArrowSvg" className="mx-2" />
            <p>{flightHistoryData.total_stoppage} Stop</p>
          </div>
        </div>
        <p className="ms-auto text-xs font-475 rounded-32 bg-blue-200 text-blue-700 px-2 py-1">
          {flightHistoryData.estimated_time}
        </p>
      </div>
    </div>
  );
};

export { FlightHistoryCard };
