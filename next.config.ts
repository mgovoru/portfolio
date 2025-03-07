import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'app/styles')],
		additionalData: `@use "main" as *;`,
	},
};

export default nextConfig;
