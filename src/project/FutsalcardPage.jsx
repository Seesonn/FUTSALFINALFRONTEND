import React from 'react';
import { FutsalCard } from '../futsalcard/FutsalCard';
import { FutsalHeroSection } from '../futsalcard/FutsalHeroSection';
import { Tagline } from '../futsalcard/Tagline';
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";


const futsalVenues = [
  {
    name: "PLANAT FUTSAL",
    location: "Itahari",
    imageUrl: f1,
  },
  {
    name: "ARENA FUTSAL",
    location: "Biratchock",
    imageUrl: f2,
  },
  {
    name: "SPORTHUB FUTSAL",
    location: "Biratnagar",
    imageUrl: f3,
  },
  {
    name: "SD FUTSAL",
    location: "Itahari",
    imageUrl: f1,
  },
  {
    name: "PREMIER FUTSAL",
    location: "Dharan",
    imageUrl: f4,
  },
  {
    name: "GOAL ZONE FUTSAL",
    location: "Kathmandu",
    imageUrl: f5,
  },
];

export default function FutsalCardPage () {
  return (
    <main className=" bg-gradient-to-b from-gray-100 to-white py-24">
      <FutsalHeroSection/>
      <Tagline />
      
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Explore Futsal Venues</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          {futsalVenues.map((venue) => (
            <FutsalCard key={venue.name} name={venue.name} location={venue.location} imageUrl={venue.imageUrl} />
          ))}
        </div>
      </section>
    </main>
  );
}
