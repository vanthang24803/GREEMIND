import React from "react";

const data = [
  {
    id: 1,
    name: "Pothos Marble Queen 4 in.",
    price: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/IMG_4741_7058e3cf-d16a-4148-a8f2-86d5e057ed25.jpg?v=1673377200&width=400",
  },
  {
    id: 2,
    name: "Pothos Silver Satin 4 in.",
    price: 20,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/8157C894-71E6-4792-80C9-ED59A6CF731C_1_105_c_716c4046-eb7a-4431-ba8c-e097ac012994.jpg?v=1642652606&width=400",
  },
  {
    id: 3,
    name: "Philodendron Green 4 in.",
    price: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/SnakeLaurentii.jpg?v=1648149006&width=400",
  },
  {
    id: 4,
    name: "Pilea Peperomioides 4 in.",
    price: 20,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/F36C215A-5AE3-478F-8FC7-59936A8CDDE6_921ed214-a107-4386-aadc-66e156dfc268.jpg?v=1642652778&width=400",
  },
  {
    id: 5,
    name: "Snake Laurentii 6 in.",
    price: 25,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/PL-PTH-MAQ_77dc0544-957c-4fef-a90c-e185d6771dcc.jpg?v=1642652718&width=400",
  },
  {
    id: 6,
    name: "Philodendron Green 6 in.",
    price: 25,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/4_SilverSatinPothos.jpg?v=1648149178&width=400",
  },
  {
    id: 7,
    name: "Peperomia Rosso 4 in.",
    price: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/4_PhilodendronGreen.jpg?v=1653948357&width=400",
  },
  {
    id: 8,
    name: "Monstera Deliciosa 6 in.",
    price: 30,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/WPOS-PL-PIL-PEP-4_3e4dadd1-9291-4b24-876e-0f8102e96ebc.jpg?v=1642652705&width=400",
  },
  {
    id: 9,
    name: "Snake Laurentii 10 in.",
    price: 65,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/PL-SAN-LAU-6.jpg?v=1653949216&width=400",
  },
  {
    id: 10,
    name: "Ficus Burgundy 6 in.",
    price: 35,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/79186C71-03D8-496B-A263-1AD71E9360FF_1_105_c_66cb428d-040d-4d18-bef9-a3de6e6cfc82.jpg?v=1642652685&width=400",
  },
  {
    id: 11,
    name: "Pothos Golden 4 in.",
    price: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/ImagefromiOS_51.jpg?v=1647994207&width=400",
  },
  {
    id: 12,
    name: "Monstera Deliciosa 10 in.",
    price: 85,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/F1F2D959-A067-4E95-8F33-95DB7ACF469D_1_105_c_2be6f5c5-f70c-4214-9a44-8face4ebd382.jpg?v=1642652720&width=400",
  },
];

const DataStore = () => {
  return (
    <div className="m-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
      {data.map((item) => {
        return (
          <div className="" key={item.id}>
            <img src={item.image} alt="" className="h-[360px] w-full" />
            <h3 className="mt-4 font-rubik font-bold">{item.name}</h3>
            <p className="font-domine  text-lg">$ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DataStore;
