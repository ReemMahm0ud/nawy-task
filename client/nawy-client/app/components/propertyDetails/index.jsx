"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faRulerCombined,
  faCalendarAlt,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import ImageCarousel from "../ImageCarousel";
import { useParams } from "next/navigation";
import { useGetApartmentDetailsQuery } from "@/app/redux/Api/ApartmentApiSlice";
import moment from "moment";

const PropertyDetails = () => {
  const { id } = useParams();
  const { data: apartmentData } = useGetApartmentDetailsQuery(id);
  console.log(apartmentData);
  return (
    <div className="max-w-7xl mx-auto my-10 p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          {apartmentData?.apartment?.title}
        </h1>
        <span className="bg-red-500 text-white px-2 py-1 rounded-md">
          {moment(apartmentData?.apartment?.createdAt).format("MMM Do YYYY")}
        </span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <ImageCarousel images={apartmentData?.apartment?.Images} />
          {/* <div className="mt-4 space-x-4 flex justify-center">
            {apartmentData?.apartment?.Images?.map((image, index) => (
              <Image
                key={index}
                src={image.img_link}
                alt={`Thumbnail ${image.title}`}
                className="w-24 h-24 object-cover rounded-md"
                width={100}
                height={100}
              />
            ))}
          </div> */}
        </div>
        <div className="md:w-1/3 md:pl-6 mt-4 md:mt-0">
          <p className="text-2xl font-semibold">
            {apartmentData?.apartment?.price}
          </p>
          <p className="mt-2 text-gray-700">
            {apartmentData?.apartment?.address}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="text-gray-700 mr-2" />
              <span>{apartmentData?.apartment?.bedrooms} Bed</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="text-gray-700 mr-2" />
              <span>{apartmentData?.apartment?.bathrooms} Bath</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faRulerCombined}
                className="text-gray-700 mr-2"
              />
              <span>{apartmentData?.apartment?.area}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-gray-700 mr-2"
              />
              <span>{apartmentData?.apartment?.installments} Installments</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                className="text-gray-700 mr-2"
              />
              <span>{apartmentData?.apartment?.down_payment} Down Payment</span>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Email Agent
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="mt-2 text-gray-700">
          {apartmentData?.apartment?.description}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
