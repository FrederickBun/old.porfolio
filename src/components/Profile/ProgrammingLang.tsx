import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
	lang: string;
	level: number;
	url: string;
	img: string;
};

export default function ProgrammingLang(props: Props) {
	const { lang, level, url, img } = props;

	return (
		<div id="lang-item" className="flex flex-row justify-between items-center w-full">
			<div className="flex flex-row items-center gap-2">
				<motion.div
					className="border border-gray-200 p-2 flex flex-col gap-2 items-center justify-center bg-white/50 shadow-lg cursor-pointer"
					onClick={() => window.open(url, "_blank")}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{
						type: "spring",
						stiffness: 400,
						damping: 17,
					}}
				>
					<Image src={img} alt={lang} width={32} height={32} />
				</motion.div>

				<p className="text-center text-gray-800 text-lg font-semibold">
					{lang}
				</p>
			</div>

			{/* Level Display */}

			<div className="flex flex-row items-center gap-1">
				{Array.from(Array(level).keys()).map((i) => (
					<div
						key={i}
						className="w-3.5 h-5 rounded-md bg-green-600"
					></div>
				))}
				{Array.from(Array(5 - level).keys()).map((i) => (
					<div
						key={i}
						className="w-3.5 h-5 rounded-md bg-gray-200"
					></div>
				))}
			</div>
		</div>
	);
}
