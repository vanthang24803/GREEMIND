import React from 'react'

const ad = [
  {
    id: 1,
    image:
      "https://cdn.sanity.io/images/y346iw48/production/4b5c3c7c2615c4378787839179de666cae90d783-645x600.svg?auto=format",
    title: "In-Store Exclusives",
    desc: "Sourced from local growers support family-owned businesses.",
  },
  {
    id: 2,
    image:
      "https://cdn.sanity.io/images/y346iw48/production/6363ae026f79e812a3508458112d0cd4ea89145a-645x600.svg?auto=format",
    title: "Same Day Delivery",
    desc: "All plants available for curbside pick-up or local delivery.",
  },
  {
    id: 3,
    image:
      "https://cdn.sanity.io/images/y346iw48/production/2cd3e20022e031ea46105adaf547e2f8fe0515c3-927x648.jpg?auto=format",
    title: "Re-Potting Service",
    desc: "Pick your plant, pick your planter. We pot it for you for free.",
  },
];


const DataMap = () => {
  return (
    <div className="m-4 flex flex-col justify-between lg:flex-row">
      {ad.map((list) => {
        return (
          <div className="my-4 md:mx-28 lg:mx-0" key={list.id}>
            <img
              src={list.image}
              alt=""
              className="my-4 h-[320px] w-[380px] md:mx-10"
            />
            <div className="md:mx-10">
              <h3 className="my-2 font-domine text-2xl font-medium">
                {list.title}
              </h3>
              <p className="mr-10 font-domine text-gray-500">{list.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataMap
