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
				<p className="text-left text-gray-800 text-3xl border-b-2 border-gray-200 pb-1 cursor-text font-bold">
				console.log("Hello 👋");
				</p>
				<p className="text-left text-gray-800 text-xl font-normal pt-2 mt-2 cursor-text font-bold">
					I'm{" "}
					<span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-yellow-500 font-bold">
						Frederick Chen
					</span>
					 😜.
				</p>

				<div className="cursor-text">
					<p className="text-left text-gray-800 text-xl font-normal pt-2 mt-2">
						I'm a front-end developer from{" "}
						<span className=" bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 font-semibold">
							Beibei
						</span>
						, Chongqing, China.
					</p>
					<p className="text-left text-gray-800 text-xl font-normal pt-2 mt-2">
						Currently, I study in the{" "}
						<span className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 font-semibold">
							Affiliated High School of Southwest University
						</span>
					    . I'm also an OI player, so knowing C++ is inevitable.
					</p>
					<p className="text-left text-gray-800 text-xl font-normal pt-2 mt-2">
						Nice to meet you 💎!
					</p>
					<img src='/frederick-number-logo-final-@2x-animited.svg'/>
				</div>
			</div>

			{/* Programming Lang */}
			<div
				className="w-full flex flex-col gap-2 justify-between top-0 left-0"
				ref={scope}
			>
				<motion.div
					id="list"
					className="flex flex-col justify-center gap-2 w-full p-8 absolute top-0 left-0 right-0 bottom-28 bg-gray-100 cursor-auto overflow-y-auto"
					style={{
						pointerEvents: isExpanded ? "auto" : "none",
						clipPath: "inset(0% 0% 50% 0%)",
					}}
				>
					<div
						id="lang-item"
						className="flex flex-row justify-between pb-1 items-center border-b-2 border-gray-200 mt-52 sm:mt-0"
					>
						<p className="text-lg font-semibold">Skill Name</p>
						<p className="text-gray-500 text-lg">Level</p>
					</div>
					<ProgrammingLang
						lang="HTML"
						level={5}
						url="https://html.com/"
						img="/html.png"
					/>
					<ProgrammingLang
						lang="CSS"
						level={5}
						url="https://www.w3.org/Style/CSS/Overview.en.html"
						img="/css.png"
					/>
					<ProgrammingLang
						lang="JavaScript"
						level={3}
						url="https://www.javascript.com/"
						img="/js.png"
					/>
					<ProgrammingLang
						lang="TypeScript"
						level={2}
						url="https://www.typescriptlang.org/"
						img="/ts.png"
					/>
					<ProgrammingLang
						lang="Next.js"
						level={4}
						url="https://nextjs.org/"
						img="/nextjs.png"
					/>
				</motion.div>
				<motion.button
					className="bg-white/50 border border-gray-200 font-bold py-2 px-4 shadow-lg flex items-center justify-center"
					onClick={toggleExpand}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						type: "spring",
						stiffness: 400,
						damping: 17,
					}}
				>
					Skills
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-chevron-left ml-1"
						style={{
							transformOrigin: "50% 50%",
						}}
					>
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</motion.button>
			</div>
		</motion.div>
	);
}
