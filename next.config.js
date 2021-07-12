module.exports = {
  reactStrictMode: true,
  exportPathMap: () => ({ // Next Export 에서 사용하는 값
    "/": { page: "/" },
    "/about": { page: "/about" },
    "/sample": { page: "/sample" },
  }),
  images: {
    loader: 'imgix',
    domains: ['ryuliah.vercel.app', 'ryuliah.netlify.app'],
  },
}
