import {
  AirlinesEmiratesSvg,
  LocationBlueSvg,
  LocationSvg,
  PlaneSvg,
  WarningSvg,
} from "@/src/assets/images";
import Image from "next/image";

const FlightDetails = () => {
  return (
    <div className="bg-white rounded-b-lg p-5">
      {/* flight details component - 1 */}
      <div className="flex items-center">
        <div className="me-4 p-1">
          <Image src={LocationSvg} alt="LocationSvg" />
        </div>
        <div className="flex flex-1 text-13 bg-gray-100 rounded-md px-4 pt-2.5 pb-3">
          <p className="font-475 text-gray-950">Departure from Dhaka</p>
          <p className="text-gray-600 ms-auto">
            <span className="font-475">Terminal 1: </span>Hazrat Shahjalal
            International Airport
          </p>
        </div>
      </div>
      {/* flight details component - 2 */}
      <div className="flex items-center pt-3">
        <div className="me-4 p-0.5">
          <Image src={AirlinesEmiratesSvg} alt="AirlinesEmiratesSvg" />
        </div>
        <div className="flex flex-1">
          <div className="w-2/6">
            <p className="text-gray-950 font-semibold text-base">DAC - DXB</p>
            <p className="text-gray-600 font-normal text-sm">12 hr 20 min</p>
          </div>
          <div className="w-2/6">
            <p className="text-gray-950 font-semibold text-base">07:30 PM</p>
            <p className="text-gray-600 font-normal text-sm">28 Mar, Friday</p>
          </div>
          <div className="w-2/6">
            <p className="text-gray-950 font-semibold text-base">08:50 AM</p>
            <p className="text-gray-600 font-normal text-sm">
              29 Mar, Saturday
            </p>
          </div>
        </div>
      </div>
      {/* flight details component - 3 */}
      <div className="flex">
        <div className="me-4 p-1 flex flex-col items-center">
          <div className="vl h-53 mb-1.5" />
          <Image src={PlaneSvg} alt="PlaneSvg" />
          <div className="vl h-53 mt-1.5" />
        </div>
        <div className="flex-1 py-4">
          <div className="flex mb-4">
            <div className="w-2/6">
              <p className="text-gray-800 font-475 text-sm">Turkish Airlines</p>
              <p className="text-gray-600 font-normal text-sm">
                Flight no : TUR467
              </p>
            </div>
            <div className="w-2/6">
              <p className="text-gray-600 font-normal text-sm">
                Airbus Industrie 737-800-738
              </p>
              <p className="text-gray-600 font-normal text-sm">
                Class : <span className="font-475">ECONOMY-Y (O)</span>
              </p>
            </div>
          </div>
          <div className="bg-yellow-200 border border-solid border-yellow-300 rounded-md py-2 px-3 flex items-center">
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
      <div className="flex items-center">
        <div className="me-4 p-1">
          <Image src={LocationSvg} alt="LocationSvg" />
        </div>
        <div className="flex flex-1 text-13 bg-blue-200 rounded-md px-4 pt-2.5 pb-3">
          <p className="font-475 text-gray-950">
            Layover at Dubai: 12 hr 20 min{" "}
          </p>
          <p className="text-gray-600 ms-auto">Dubai International Airport</p>
        </div>
      </div>
      {/* flight details component - 5 */}
      <div className="flex items-center pt-3">
        <div className="me-4 p-0.5">
          <Image src={AirlinesEmiratesSvg} alt="AirlinesEmiratesSvg" />
        </div>
        <div className="flex flex-1">
          <div className="w-2/6">
            <p className="text-gray-950 font-semibold text-base">DAC - DXB</p>
            <p className="text-gray-600 font-normal text-sm">12 hr 20 min</p>
          </div>
          <div className="w-2/6">
            <p className="text-gray-950 font-semibold text-base">07:30 PM</p>
            <p className="text-gray-600 font-normal text-sm">28 Mar, Friday</p>
          </div>
          <div className="w-2/6">
            <p className="text-gray-950 font-semibold text-base">08:50 AM</p>
            <p className="text-gray-600 font-normal text-sm">
              29 Mar, Saturday
            </p>
          </div>
        </div>
      </div>
      {/* flight details component - 6 */}
      <div className="flex">
        <div className="me-4 p-1 flex flex-col items-center">
          <div className="vl h-19 mb-1.5" />
          <Image src={PlaneSvg} alt="PlaneSvg" />
          <div className="vl h-19 mt-1.5" />
        </div>
        <div className="flex-1 py-4">
          <div className="flex">
            <div className="w-2/6">
              <p className="text-gray-800 font-475 text-sm">Turkish Airlines</p>
              <p className="text-gray-600 font-normal text-sm">
                Flight no : TUR467
              </p>
            </div>
            <div className="w-2/6">
              <p className="text-gray-600 font-normal text-sm">
                Airbus Industrie 737-800-738
              </p>
              <p className="text-gray-600 font-normal text-sm">
                Class : <span className="font-475">ECONOMY-Y (O)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* flight details component - 7 */}
      <div className="flex items-center mb-3">
        <div className="me-4 p-1">
          <Image src={LocationBlueSvg} alt="LocationBlueSvg" />
        </div>
        <div className="flex flex-1 text-13 bg-gray-100 rounded-md px-4 pt-2.5 pb-3">
          <p className="font-475 text-gray-950">Destination at New York</p>
          <p className="text-gray-600 ms-auto">
            <span className="font-475">Terminal 4: </span>John F Kennedy
            International Airport
          </p>
        </div>
      </div>
    </div>
  );
};

export { FlightDetails };
