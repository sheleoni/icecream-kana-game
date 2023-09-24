/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
}
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")
module.exports = nextConfig
