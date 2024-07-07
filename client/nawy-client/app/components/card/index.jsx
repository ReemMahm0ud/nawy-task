"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Card = ({ property }) => {
  return (
    <Link href={`/apartmentDetails/${property?.uuid}`}>
      <div className="rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <Image
            className="w-full"
            src={
              property?.Images[0]?.img_link || "https://via.placeholder.com/500"
            }
            alt={property?.Images[0]?.title}
            width={500}
            height={300}
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
        <div className="px-6 py-4">
          <h3 className="font-semibold text-lg">{property?.title}</h3>
          <p className="text-gray-500 text-sm">{property?.price}</p>
          <div className="flex mt-2">
            <div className="flex items-center mr-4">
              <FontAwesomeIcon icon={faBed} className="text-gray-700 mr-1" />
              <span>{property?.bedrooms} Bed</span>
            </div>
            <div className="flex items-center mr-4">
              <FontAwesomeIcon icon={faBath} className="text-gray-700 mr-1" />
              <span>{property?.bathrooms} Bath</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faRulerCombined}
                className="text-gray-700 mr-1"
              />
              <span>{property?.area}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
