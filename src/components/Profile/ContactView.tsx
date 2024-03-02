import React, { useState, useEffect, use } from "react";
import ProgrammingLang from "./ProgrammingLang";
import { useAnimate, stagger, motion, AnimatePresence } from "framer-motion";
import { useIsSmall } from "@/hooks/useMediaQuery";



const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			".feather-chevron-left",
			{
				rotate: isOpen ? 90 : 0,
			},
			{
				duration: 0.2,
			}
		);
		animate(
			"div#list",
			{
				clipPath: isOpen
					? "inset(0% 0% 0% 0% round 0px)"
					: "inset(0% 0% 100% 0% round 0px)",
			},
			{
				type: "spring",
				bounce: 0,
				duration: 0.5,
			}
		);

		animate(
			"div#lang-item",
			isOpen
				? { opacity: 1, scale: 1, filter: "blur(0px)" }
				: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
			{
				duration: 0.4,
				delay: isOpen ? staggerMenuItems : 0,
			}
		);
	}, [isOpen]);

	return scope;
}

export default function ProfileDesc() {
	const [isExpanded, setIsExpanded] = useState(false);
	const scope = useMenuAnimation(isExpanded);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<motion.div
			variants={{
				offscreen: {
					opacity: 0,
					x: 100,
				},
				onscreen: {
					opacity: 1,
					x: 0,
					transition: {
						delay: 0.6,
						type: "spring",
						stiffness: 400,
						damping: 17,
						duration: 0.1,
					},
				},
			}}
			className="h-[57%] sm:h-full bg-gray-50 border border-black/5 flex flex-col justify-between items-center p-8 relative shadow-sm cursor-grab"
		>
			<div className="relative h-full w-full sm:w-96">
				<p className="text-left text-gray-800 text-3xl font-bold border-b-2 border-gray-200 pb-1 cursor-text">
				联系我：
				</p>
				<p className="text-left text-gray-800 text-xl font-normal pt-2 mt-2 cursor-text">
					邮箱：{" "}
					<span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-yellow-500 font-bold">
						<a href="mailto:seventeen@ohdragonboi.cn">seventeen@ohdragonboi.cn</a>
					</span>
					。
				</p>
				<div className="cursor-text">
					<p className="text-left text-gray-800 text-xl font-normal pt-2 mt-2">
						爱发电：{" "}
						<span className=" bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 font-semibold">
							<a href="https://afdian.net/se7entin">FrederickAsYou</a>
						</span>
					</p>
				</div>
			</div>
		</motion.div>
	);
}
