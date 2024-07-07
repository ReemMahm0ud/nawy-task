"use client";
import { useDispatch } from "react-redux";
import Card from "../../components/card";
import { useGetAllApartmentsQuery } from "@/app/redux/Api/ApartmentApiSlice";
import { allApartments } from "../../redux/slices/apartmentSlice";

export default function CardList() {
  const { data: apartmentsList } = useGetAllApartmentsQuery();
  //   const dispatch = useDispatch();
  //   apartmentsList && dispatch(allApartments(apartmentsList));

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {apartmentsList?.apartments?.map((apartment, index) => (
            <Card property={apartment} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
