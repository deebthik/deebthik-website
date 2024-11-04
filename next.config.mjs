import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	async redirects() {
		return [
			{
				source: '/vocation/publications-preprints/BinSeg-Leveraging_Semantic_Segmentation_for_Code_and_Data_Separation_in_Non-Standard_Binary_Formats__DK.pdf',
				destination: '/papers/BinSeg-Leveraging_Semantic_Segmentation_for_Code_and_Data_Separation_in_Non-Standard_Binary_Formats.pdf',
				permanent: true,
			},
		];
	},
};

export default withContentlayer(nextConfig);
