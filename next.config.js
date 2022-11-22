const { default: mongoose } = require('mongoose');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['maps.googleapis.com']
  },
  rewrites : async () => {
    return [{
      source:"/google/autocomplete",
      destination :"https://maps.googleapis.com/maps/api/place/autocomplete/json"
    },{
      source:"/google/details",
      destination:"https://maps.googleapis.com/maps/api/place/details/json"
    }]
  }
}

module.exports = () => {
  // const MONGO_URI = process.env.MONGO_URI;

  // mongoose.connect(MONGO_URI, { dbName: "airbnb-clone" })
  //   .then(() => console.log("mongoose Initialized"));

  return nextConfig;

}