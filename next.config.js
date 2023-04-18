const withImgix = require("next-imgix");

module.exports = withImgix({
    reactStrictMode: true,
    runtime: "edge",
    images: {
        loader: "imgix",
        path: "https://your-imgix-domain.imgix.net/",
        domains: ["mineral-backend.centarnit.live"],
    },
});
