import {
  AirlinesEmiratesSvg,
  LocationBlueSvg,
  LocationSvg,
  PlaneSvg,
  WarningSvg,
} from "@/src/assets/images";
import { AirlineDetails } from "./airline-details";
import { TravelDetails } from "./travel-details";
import { BoardingDetails } from "./boarding-details";
import Image from "next/image";

const allBoardings = [
  {
    type: "departure",
    location: "dhaka",
    layover_time: "",
    terminal: "Terminal 1",
    airport: "Hazrat Shahjalal International Airport",
  },
  {
    type: "layover",
    location: "dubai",
    layover_time: "12 hr 20 min",
    terminal: "",
    airport: "Dubai International Airport",
  },
  {
    type: "destination",
    location: "new york",
    layover_time: "",
    terminal: "Terminal 4",
    airport: "John F Kennedy International Airport",
  },
];

const travelData = {
  destination: "DXB",
  departure: "DAC",
  start_date: "28 Mar, Friday",
  start_time: "07:30 PM",
  end_date: "29 Mar, Saturday",
  end_time: "08:50 AM",
  estimated_time: "12 hr 20 min",
};

const airlineData = {
  airline_name: "Turkish Airlines",
  flight_no: "TUR467",
  plane_name: "Airbus Industrie 737-800-738",
  class: "ECONOMY-Y (O)",
};

const FlightDetails = () => {
  return (
    <div className="bg-white rounded-b-lg p-5">
      {/* flight details component - 1 */}
      <BoardingDetails boardingData={allBoardings[0]} />
      {/* flight details component - 2 */}
      <TravelDetails travelData={travelData} />
      {/* flight details component - 3 */}
      <div className="flex">
        <div className="me-4 p-1 flex flex-col items-center">
          <div className="vl h-53 mb-1.5" />
          <Image src={PlaneSvg} alt="PlaneSvg" />
          <div className="vl h-53 mt-1.5" />
        </div>
        <div className="flex-1 py-4">
          <AirlineDetails airlineData={airlineData} />
          <div className="bg-yellow-200 border border-solid border-yellow-300 rounded-md mt-4 py-2 px-3 flex items-center">
            <Image src={WarningSvg} alt="WarningSvg" />
            <p className="text-gray-800 font-normal text-xs ms-2">
              Technical stoppage at Malpensa International Airport (Milano).
              Before booking this flight please check your visa requirements as
              per your <br /> nationality
            </p>
          </div>
        </div>
      </div>
      {/* flight details component - 4 */}
      <BoardingDetails boardingData={allBoardings[1]} />
      {/* flight details component - 5 */}
      <TravelDetails travelData={travelData} />
      {/* flight details component - 6 */}
      <div className="flex">
        <div className="me-4 p-1 flex flex-col items-center">
          <div className="vl h-19 mb-1.5" />
          <Image src={PlaneSvg} alt="PlaneSvg" />
          <div className="vl h-19 mt-1.5" />
        </div>
        <div className="flex-1 py-4">
          <AirlineDetails airlineData={airlineData} />
        </div>
      </div>
      {/* flight details component - 7 */}
      <BoardingDetails boardingData={allBoardings[2]} />
    </div>
  );
};

export { FlightDetails };
