/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {                                //       configure for image render
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'www.menucool.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
