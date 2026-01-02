/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable strict mode for catching issues early
    reactStrictMode: true,

    // Transpile workspace packages
    transpilePackages: ["@verify/validation", "@verify/config"],
};

export default nextConfig;
