import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable strict mode for catching issues early
    reactStrictMode: true,

    // Transpile workspace packages
    transpilePackages: ["@verify/validation", "@verify/config"],

    // Disable webpack cache to avoid ENOENT errors on paths with spaces
    webpack: (config, { dev }) => {
        if (dev) {
            config.cache = false;
        }
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tgoixnitnqhxtnvodttq.supabase.co",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
};

export default withFlowbiteReact(nextConfig);