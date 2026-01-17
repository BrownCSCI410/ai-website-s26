import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: 'export',
    images: {
        unoptimized: false
    },
    basePath: '/ai-website-s26'
};

export default nextConfig;
