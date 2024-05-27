import { LocationBlueSvg, LocationSvg } from "@/src/assets/images";
import Image from "next/image";

const BoardingDetails = ({ boardingData }) => {
  return (
    <div className="flex items-center">
      <div className="me-4 p-1">
        <Image
          src={
            boardingData.type === "destination" ? LocationBlueSvg : LocationSvg
          }
          alt="LocationSvg"
        />
      </div>
      <div
        className={`flex flex-1 text-13 rounded-md px-4 pt-2.5 pb-3 ${
          boardingData.type === "layover" ? "bg-blue-200" : "bg-gray-100"
        }`}
      >
        <p className="font-475 text-gray-950 capitalize">
          {boardingData.type}{" "}
          <span className="lowercase">
            {boardingData.type === "departure" ? "from" : "at "}
          </span>{" "}
          {boardingData.location}
          {boardingData.layover_time !== "" && (
            <span>: {boardingData.layover_time}</span>
          )}
        </p>
        <p className="text-gray-600 ms-auto">
          {boardingData.terminal !== "" && (
            <span className="font-475">{boardingData.terminal}: </span>
          )}
          {boardingData.airport}
        </p>
      </div>
    </div>
  );
};

export { BoardingDetails };
