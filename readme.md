# nawy task

### how to run the server

- npm install
- npm run dev

### how to run the client

- npm install
- npm run dev

### how to run the mobile app using expo

- npm install
- npx expo start -c

## server

I used node js with javascript and database mysql using sequelize package

- post route "http://127.0.0.1:8000/v1/apartment/createApartment"
  body :
  {
  "title":"test",
  "address": "test",
  "price": "123456 EGP",
  "description": "kfndvklnfd",
  "bedrooms": 2,
  "bathrooms": 2,
  "area": "12 sqm",
  "down_payment": "123 EGP",
  "installments": 3,
  "Images":
  [
  {
  "title":"test",
  "img_link":"https://www.propertyfinder.eg/property/8cfed5077499e45aa70618b572449898/1312/894/MODE/52060f/5336887-c8ffbo.webp?ctr=eg"
  }
  ]
  }

- get route "http://127.0.0.1:8000/v1/apartment/getAllApartments"
- get route by id "http://127.0.0.1:8000/v1/apartment/getApartmentDetails/uuid"

## client

I used nextjs framework with tailwind css

- home page with list of apartments
- create page with form to create new apartment
- details page for every apartment depends on id
- navigation bar with two links home and create new apartment

## mobile app

I used react-native with tailwind css

- only finished the tabs and the form
