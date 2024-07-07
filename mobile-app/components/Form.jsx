import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import { useSubmitFormMutation } from "../redux/Api/ApartmentFormSlice";

const Form = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  const [down_payment, setDownPayment] = useState("");
  const [installments, setInstallments] = useState("");
  const [images, setImages] = useState([{ title: "", img_link: "" }]);
  // const [submitForm] = useSubmitFormMutation();
  // const dispatch = useDispatch();

  const handleAddImageField = () => {
    setImages([...images, { title: "", img_link: "" }]);
  };

  const handleRemoveImageField = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleImageChange = (index, key, value) => {
    const newImages = [...images];
    newImages[index][key] = value;
    setImages(newImages);
  };

  const handleSubmit = async () => {
    const data = {
      title,
      address,
      price,
      description,
      bedrooms,
      bathrooms,
      area,
      down_payment,
      installments,
      Images: images,
    };
    // await submitForm(data)
    //   .unwrap()
    //   .then((fulfilled) => {
    //     navigation.navigate("Home");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <ScrollView className="p-6 bg-gray-100">
      <View className="container mx-auto">
        <Text className="text-xl text-gray-600 font-semibold">
          Create New Property
        </Text>
        <Text className="text-gray-500 mb-6">Please fill out this form</Text>

        <View className="bg-white rounded shadow-lg p-4">
          <Text className="text-lg font-medium text-gray-600">
            Property Details
          </Text>
          <Text>Please fill out all the fields.</Text>

          <View className="mt-4">
            <Text>Title</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={title}
              onChangeText={setTitle}
            />

            <Text>Description</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <Text>Address / Street</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={address}
              onChangeText={setAddress}
            />

            <Text>Price</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={price}
              onChangeText={setPrice}
            />

            <Text>Down Payment</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1  bg-gray-50"
              value={down_payment}
              onChangeText={setDownPayment}
            />

            <Text>Installments</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={installments}
              onChangeText={setInstallments}
              keyboardType="numeric"
            />

            <Text>Bedrooms</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={bedrooms}
              onChangeText={setBedrooms}
              keyboardType="numeric"
            />

            <Text>Bathrooms</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={bathrooms}
              onChangeText={setBathrooms}
              keyboardType="numeric"
            />

            <Text>Area</Text>
            <TextInput
              className="border rounded px-4 py-2 mt-1 bg-gray-50"
              value={area}
              onChangeText={setArea}
            />

            {images.map((image, index) => (
              <View key={index} className="mt-4">
                <Text>Image Title</Text>
                <TextInput
                  className="border rounded px-4 py-2 mt-1 bg-gray-50"
                  value={image.title}
                  onChangeText={(value) =>
                    handleImageChange(index, "title", value)
                  }
                />

                <Text>Image URL</Text>
                <TextInput
                  className="border rounded px-4 py-2 mt-1 bg-gray-50"
                  value={image.img_link}
                  onChangeText={(value) =>
                    handleImageChange(index, "img_link", value)
                  }
                />

                <Button
                  title="Remove"
                  onPress={() => handleRemoveImageField(index)}
                />
              </View>
            ))}

            <Button title="Add Image" onPress={handleAddImageField} />

            <Button title="Submit" onPress={handleSubmit} className="mt-4" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;
