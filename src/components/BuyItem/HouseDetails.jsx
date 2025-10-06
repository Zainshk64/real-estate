import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { featuredListings } from "../../data/listing.js";
import SectionHeader from "../SectionHeader.jsx";
import TagPill from "../TagPill.jsx";
import { LocateIcon, PhoneCall } from "lucide-react";
import Layout from "../../Layout/Layout.jsx";

export default function HouseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const house = featuredListings.find((h) => h.id === id);
  const [mainImage, setMainImage] = useState(house.gallery[0]);

  if (!house) return <p>House not found.</p>;

  return (
    <Layout>
      <div className="mx-auto px-4 max-w-6xl py-20 space-y-10">
        <div className="flex flex-col-reverse md:flex-row justify-between pt-20">
          <SectionHeader
            eyebrow={house.location}
            title={house.title}
            description={`Listed for ${house.price}`}
          />
          <button
            onClick={() => navigate("/")}
            className="mb-4 px-4 py-2 cursor-pointer text-xs font-medium uppercase tracking-[0.25em] text-forest hover:border-forest"
          >
            ← Back
          </button>
        </div>

        {/* Main Image */}
        <div className="rounded-[28px] overflow-hidden shadow-collage">
          <img
            src={mainImage}
            alt={house.title}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>

        {/* Gallery Thumbnails */}
        <div className="flex flex-wrap justify-center md:gap-4 scrollbar-hide py-4">
          {house.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className={`h-24 w-24 md:w-32 rounded-lg object-cover cursor-pointer border-4 transition ${
                mainImage === img ? "border-sand" : "border-transparent"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Tags */}
        <ul className="flex flex-wrap gap-4 ">
          {house.tags.map((tag) => (
            <li className="">
              <TagPill key={tag}>{tag}</TagPill>
            </li>
          ))}
        </ul>

        {/* Key Details */}
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {Object.entries(house.details).map(([key, value]) => (
            <div
              key={key}
              className="rounded-xl odd:bg-[#ddc7ae75] even:bg-sand p-4 shadow-sm"
            >
              <p className="text-sm text-ink/70 capitalize">{key}</p>
              <p className="font- text-xl text-forest">{value}</p>
            </div>
          ))}
        </div>

        <div className="my-12 space-y-6">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact Seller"
            description="Reach out directly to the property owner for more details or to schedule a visit."
          />

          <div className="grid md:grid-cols-2 gap-10  p-6 rounded-xl border border-neutral-300">
            {/* Seller Profile */}
            <div className="flex items-center gap-4">
              <img
                src="https://luminor-eight.vercel.app/images/avatar/avatar-10.jpg"
                alt="seller_profile"
                className="w-20 h-20 rounded-full border-2 border-primary object-cover"
              />
              <div className="leading-6">
                <h1 className="font-semibold text-lg">Jorge R.</h1>
                <p className="text-gray-600">1-555-678-8888</p>
                <p className="text-gray-600">example@gmail.com</p>
              </div>
            </div>

            {/* Seller Address */}
            <div className="flex max-w-sm gap-3 items-start">
              <div className="p-3 bg-primary/10 rounded-full">
                <LocateIcon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-700">
                6205 Peachtree Dunwoody Rd, Atlanta, GA 30328
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <PhoneCall className="w-5 h-5 text-primary" />
              </div>
              <div className="text-gray-700">
                <p>1-555-678-8888</p>
                <p>1-555-678-8888</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className=" max-w-sm flex gap-3">
              <button className="px-5 py-2 rounded-lg bg-forest text-white font-medium  transition">
                Call Dealer
              </button>
              <button className="px-5 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                Chat via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* <div>
          <SectionHeader
            eyebrow=""
            title="What's Near By?"
            description={
              "Whether you're raising a family or enjoying a peaceful retreat, you’ll appreciate the close proximity to essential services, green spaces, and entertainment options."
            }
          />
          <div className="grid  grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {Object.entries(house.nearby).map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl even:bg-[#ddc7ae75] odd:bg-sand p-4 shadow-sm"
              >
                <p className="text-sm text-ink/70 capitalize">{key}</p>
                <p className="font- text-xl text-forest">{value}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
