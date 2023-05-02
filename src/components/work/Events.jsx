import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
const content = [
  {
    id: 1,
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F492898989%2F218194620125%2F1%2Foriginal.20230414-163338?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C233%2C1500%2C750&s=fb0172eb541c87b9383422b14cee284a",
    main: "Happy Hour Ship n Shop:Cobble Hill",
    time: "May 3rd,2023",
    pragrap:
      "Join us at our Cobble Hill, BK location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
  },
  {
    id: 2,
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F492930109%2F218194620125%2F1%2Foriginal.20230414-171208?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C333%2C2000%2C1000&s=21b07a5851dff5c2a2ceecff66b06a3b",
    main: "Happy Hour Ship n Shop:Park Slope",
    time: "May 5th,2023",
    pragrap:
      "Join us at our Park Slope, BK location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
  },

  {
    id: 3,
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F500705239%2F218194620125%2F1%2Foriginal.20230425-181454?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=418%2C487%2C1624%2C812&s=72d82f7e61271d295467a14d5ffeafef",
    main: "The Sill X Modern Sprout Lunch Party",
    time: "May 5th,2023",
    pragrap:
      "Come celebrate Modern Sprouts pop up launch at our Chicago plant shop location! Meet the founders  complimentary drinks and snacks.",
  },
  {
    id: 4,
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F490061149%2F218194620125%2F1%2Foriginal.20230411-163913?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C104%2C1024%2C512&s=ad45ad82f5d7bafa63db333bc66ed018",
    main: "Happy Hour Ship n Shop:William",
    time: "May 6th,2023",
    pragrap:
      "Join us at our Williamsburg, BK location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
  },
  {
    id: 5,
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F490092699%2F218194620125%2F1%2Foriginal.20230411-170958?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C85%2C1024%2C512&s=1188faddd75784a27d7064366b046b93",
    main: "Happy Hour Ship n Shop:Bethesda",
    time: "May 13th, 2023",
    pragrap:
      "Join us at our Bethesda, MD location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
  },
  {
    id: 6,
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F490169109%2F218194620125%2F1%2Foriginal.20230411-182129?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=164%2C164%2C2520%2C1260&s=cb04c7615fdaa244f640716a2a3506d8",
    main: "Flower Preser Online Workshop",
    time: "May 25th, 2023",
    pragrap:
      "Join The Sill for a free Leaf and Flower Preservation Online Workshop! Learn how to preserve gifted bouquets plant material.",
  },
];

const Events = () => {
  return (
    <>
      <div className="my-8 grid gap-4 md:my-0 md:grid-cols-2 md:gap-8  md:px-10 lg:grid-cols-3">
        {content.map((item) => {
          return (
            <div
              className="my-4  border-[1px] border-gray-400 md:my-0 bg-white"
              key={item.id}
            >
              <img src={item.image} alt="" className="w-full" />
              <h1 className="px-6 py-4 font-domine text-4xl font-normal">
                {item.main}
              </h1>
              <p className="mx-6 font-domine text-xl italic text-gray-500">
                {item.time}
              </p>
              <p className="px-6 py-4 font-domine">{item.pragrap}</p>
              <button className="mx-6 my-12 flex h-[60px] w-[180px] items-center justify-between font-domine hover:italic hover:text-[#00AB84]">
                RSVP on Eventbrite <HiArrowLongRight className="text-lg" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Events;
