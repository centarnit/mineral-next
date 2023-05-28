module.exports = {
    reactStrictMode: true,
    runtime: "edge",
    images: {
        domains: ["mineral-backend.centarnit.live"],
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: "/minerals/:id",
                destination: "/minerals",
            },
        ];
    },
};
