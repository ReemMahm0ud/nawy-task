"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useSubmitFormMutation } from "../../redux/Api/ApartmentFormSlice";
export default function Form() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  const [down_payment, setDown_payment] = useState("");
  const [installments, setInstallments] = useState();
  const [images, setImages] = useState([{ title: "", img_link: "" }]);
  const [submitForm] = useSubmitFormMutation();
  const dispatch = useDispatch();

  const handleAddImageField = () => {
    setImages([...images, { title: "", img_link: "" }]);
  };

  const handleRemoveImageField = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index][event.target.name] = event.target.value;
    console.log(newImages);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      address: address,
      price: price,
      description: description,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      area: area,
      down_payment: down_payment,
      installments: installments,
      Images: images,
    };
    console.log(data);
    await submitForm(data)
      .unwrap()
      .then((fulfilled) => {
        console.log(fulfilled);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Create New Property
          </h2>
          <p className="text-gray-500 mb-6">Please fill out this form</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Property Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="price">price</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="price"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="down_payment">down payment</label>
                    <input
                      type="text"
                      name="down_payment"
                      id="down_payment"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={down_payment}
                      onChange={(e) => setDown_payment(e.target.value)}
                      placeholder="down payment"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="installments">installments</label>
                    <input
                      type="number"
                      name="installments"
                      id="installments"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}
                      placeholder="installments"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="number"
                        name="bedrooms"
                        id="bedrooms"
                        placeholder="Bedrooms"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="number"
                        name="bathrooms"
                        id="bathrooms"
                        placeholder="Bathrooms"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="area">Area</label>
                    <input
                      type="text"
                      name="area"
                      id="area"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>

                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="md:col-span-5 grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    >
                      <div className="md:col-span-2">
                        <label htmlFor={`image_title_${index}`}>
                          Image Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id={`image_title_${index}`}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={image.title}
                          onChange={(e) => handleImageChange(index, e)}
                          placeholder="Image Title"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor={`image_url_${index}`}>Image URL</label>
                        <input
                          type="text"
                          name="img_link"
                          id={`image_url_${index}`}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={image.img_link}
                          onChange={(e) => handleImageChange(index, e)}
                          placeholder="Image URL"
                        />
                      </div>
                      <div className="md:col-span-1 flex items-end">
                        <button
                          type="button"
                          onClick={() => handleRemoveImageField(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="md:col-span-5">
                    <button
                      type="button"
                      onClick={handleAddImageField}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add Image
                    </button>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        onClick={(e) => handleSubmit(e)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
