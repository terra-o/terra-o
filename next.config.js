/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'appliedsciences.nasa.gov',
      'business.esa.int',
      'eo4society.esa.int',
      'www.nrcan.gc.ca'
    ]
  }
}
