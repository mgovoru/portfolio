import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'app/styles')],
		prependData: `@use "global" as *;`,
	},
};

export default nextConfig;
