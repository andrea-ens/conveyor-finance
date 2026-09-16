import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/product", destination: "/work", permanent: false },
      { source: "/dashboard", destination: "/work/defi-dashboard", permanent: false },
      { source: "/trade", destination: "/work/trading-workspace", permanent: false },
      {
        source: "/careers/defi-full-stack-engineer",
        destination: "/careers/backend-engineer",
        permanent: false,
      },
      {
        source: "/careers/full-stack-engineer",
        destination: "/careers/backend-engineer",
        permanent: false,
      },
      {
        source: "/careers/senior-frontend-engineer",
        destination: "/careers/frontend-web3-engineer",
        permanent: false,
      },
      {
        source: "/careers/trading-ui-engineer",
        destination: "/careers/frontend-web3-engineer",
        permanent: false,
      },
      {
        source: "/careers/people-operations-lead",
        destination: "/careers",
        permanent: false,
      },
      {
        source: "/blog/company-site-not-an-exchange",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/blog/how-we-publish-protocol-work",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/blog/founder-led-technical-direction",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/blog/capital-while-the-position-is-open",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/blog/hiring-without-a-fake-ats",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/blog/markets-ui-is-still-engineering",
        destination: "/blog",
        permanent: false,
      },
      { source: "/blog/topic/company", destination: "/blog", permanent: false },
      {
        source: "/blog/topic/engineering",
        destination: "/blog",
        permanent: false,
      },
      { source: "/blog/topic/product", destination: "/blog", permanent: false },
      { source: "/blog/topic/careers", destination: "/blog", permanent: false },
    ];
  },
}

export default nextConfig
