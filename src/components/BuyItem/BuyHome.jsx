
import React, { useState } from "react";
import { BuyPageData } from "../../data/listing";
import SectionHeader from "../SectionHeader";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const BuyHome = () => {
  const [cityFilter, setCityFilter] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");

  const filteredData = BuyPageData.filter((item) => {
    return (
      (cityFilter ? item.city === cityFilter : true) &&
      (provinceFilter ? item.province === provinceFilter : true)
    );
  });

  return (
      <div className="py-28 mx-auto w-full px-4 max-w-6xl bg-shell text-ink">
        
        <SectionHeader
          eyebrow="Property Listings"
          title="Find Your Dream Home on Estate Orbit"
          description="Explore a wide range of properties tailored to your needs. Browse listings, compare options, and connect with trusted sellers easily."
        />

        <div className="relativee grid mx-auto px-4 lg:px-0 grid-cols-1 md:grid-cols-4 py-10 gap-8">
          {/* Sidebar Filters */}
          <aside className="bg-white  shadow rounded-lg p-6 space-y-6">
            <div>
              <h2 className="font-serif text-lg text-forest mb-3">
                Filter by City
              </h2>
              {["Dubai", "Los Angeles", "Surrey", "Ibiza"].map((city) => (
                <label key={city} className="block text-sm">
                  <input
                    type="radio"
                    name="city"
                    value={city}
                    checked={cityFilter === city}
                    onChange={() => setCityFilter(city)}
                    className="mr-2"
                  />
                  {city}
                </label>
              ))}
              <button
                onClick={() => setCityFilter("")}
                className="mt-2 text-xs text-clay underline"
              >
                Reset
              </button>
            </div>

            <div>
              <h2 className="font-serif text-lg text-forest mb-3">
                Filter by Province
              </h2>
              {["UAE", "California", "England", "Spain"].map((province) => (
                <label key={province} className="block text-sm">
                  <input
                    type="radio"
                    name="province"
                    value={province}
                    checked={provinceFilter === province}
                    onChange={() => setProvinceFilter(province)}
                    className="mr-2"
                  />
                  {province}
                </label>
              ))}
              <button
                onClick={() => setProvinceFilter("")}
                className="mt-2 text-xs text-clay underline"
              >
                Reset
              </button>
            </div>
          </aside>

          {/* Listings */}
          <main className="md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filteredData.length !== 0 ? (
              filteredData.map((house) => (
                <article
                  key={house.id}
                  className="bg-white shadow rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition"
                >
                  <img
                    src={house.image}
                    alt={house.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl text-forest">
                      {house.title}
                    </h3>
                    <p className="text-sm text-ink/70">{house.location}</p>
                    <ul className="mt-2 text-xs space-y-1 text-ink/80">
                      <li>🛏 {house.bedrooms} Bedrooms</li>
                      <li>🛁 {house.bathrooms} Bathrooms</li>
                      <li>📐 {house.area}</li>
                    </ul>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold text-clay">
                        {house.price}
                      </span>
                      {/* <button className="rounded-pill border border-forest/30 px-3 py-1 text-xs uppercase tracking-wide text-forest hover:border-forest transition">
                      See details
                    </button> */}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <>
                {/* <div className="text-center text-forest flex justify-center items-center" >No Record Found...</div> */}
                <div className="flex flex-col py-36 items-center justify-center h-[40vh] md:h-[70vh]">
                  <div className="hidden md:flex">
                    <DotLottieReact
                      src="/empty.lottie"
                      loop
                      autoplay
                      style={{ width: 400, height: 400 }}
                    />
                  </div>
                  <div className="md:hidden">
                    <DotLottieReact
                      src="/empty.lottie"
                      loop
                      autoplay
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                  <h1 className="mt-6 text-2xl font-bold text-forest">
                    Oops! No record found.
                  </h1>
                  
                </div>
              </>
            )}
          </main>
        </div>
      </div>
  );
};

export default BuyHome;
