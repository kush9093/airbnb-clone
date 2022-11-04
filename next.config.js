const { default: mongoose } = require('mongoose');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = () => {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose.connect(MONGO_URI, { dbName: "airbnb-clone" })
    .then(() => console.log("mongoose Initialized"));

  return nextConfig;

}