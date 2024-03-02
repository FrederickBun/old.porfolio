"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";
import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "framer-motion";

type Props = {
	section1Ref: React.RefObject<HTMLDivElement>;
	section2Ref: React.RefObject<HTMLDivElement>;
	section3Ref: React.RefObject<HTMLDivElement>;
	section4Ref: React.RefObject<HTMLDivElement>;
};

export default function NextPageButton(props: Props) {
	const [isVisible, setIsVisible] = useState(true);
	const is1InView = useInView(props.section1Ref);
	const is2InView = useInView(props.section2Ref);
	const is3InView = useInView(props.section3Ref);
	const is4InView = useInView(props.section4Ref);

	const scrollToView = (ref: React.RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	};

	const scrolltoHash = () => {
		switch (true) {
			case is1InView:
				scrollToView(props.section2Ref);
				break;
			case is2InView && !is1InView:
				scrollToView(props.section3Ref);
				break;
			case is3InView && !is2InView:
				scrollToView(props.section4Ref);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			switch (true) {
				case is1InView:
					setIsVisible(true);
					break;
				case is2InView:
					setIsVisible(true);
					break;
				case is3InView:
					setIsVisible(true);
					break;
				case is4InView && !is3InView:
					setIsVisible(false);
					break;
				default:
					break;
			}
		};
		// Add the event listener when the component is mounted
		window.addEventListener("scroll", handleScroll);

		// Remove the event listener when the component is unmounted
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [is1InView, is2InView, is3InView, is4InView]);

	return (
		<div className="position fixed w-screen left-0 bottom-0 flex justify-center items-center h-24">
			<AnimatePresence>
				{isVisible && (
					<motion.div
						drag
						dragConstraints={{
							top: -10,
							left: -200,
							right: 200,
							bottom: 10,
						}}
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 0.7,
									type: "spring",
									stiffness: 400,
									damping: 17,
									duration: 0.1,
								},
							},
						}}
						className="p-3 bg-gray-50 cursor-pointer border border-gray-200 shadow-lg  text-gray-8 flex items-center justify-center"
						onClick={() => scrolltoHash()}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 17,
						}}
						exit={{
							opacity: 0,
							scale: 0,
							transition: {
								delay: 0.1,
								type: "spring",
								stiffness: 400,
								damping: 17,
								duration: 0.2,
							},
						}}
					>
						<ChevronDownIcon size={32} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
