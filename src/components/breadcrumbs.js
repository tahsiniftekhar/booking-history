import { ArrowSvg } from "@/src/assets/images";
import Image from "next/image";

const Breadcrumbs = () => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-13 font-normal text-gray-700"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <Image src={ArrowSvg} alt="ArrowSvg" className="me-1.5" />
            <a href="#" className="ms-1 text-13 font-normal text-gray-700">
              Booking History
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <Image src={ArrowSvg} alt="ArrowSvg" className="me-1.5" />
            <span className="ms-1 text-13 font-normal text-gray-700">
              Flight
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <Image src={ArrowSvg} alt="ArrowSvg" className="me-1.5" />
            <span className="ms-1 text-13 font-475 text-blue-700">
              STFL17121182045413
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export { Breadcrumbs };
