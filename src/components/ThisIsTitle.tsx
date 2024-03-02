'use client'
import { motion } from "framer-motion";
import {ArrowDownIcon} from "@primer/octicons-react";
import { useIsSmall } from "@/hooks/useMediaQuery";

export default function ThisIsTitle() {

    const variants = useIsSmall() ? {
        hidden: {
            scale: 1,
            opacity: 0,
            x: 200,
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: -20,
            transition: {
                delay: 0,
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.05,
            },
        },
    } : {
        hidden: {
            scale: 1,
            opacity: 0,
            x: 200,
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: -20,
            transition: {
                delay: 0,
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.05,
            },
        },
    };

    const dragConstraints = useIsSmall() ? {
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
    } : {
        top: -80,
        left: -30,
        right: 150,
        bottom: 80,
    };

	return (
		<motion.div
            className="cursor-grab"
			initial="hidden"
			animate="visible"
			variants={variants}
            drag
            dragConstraints={dragConstraints}
		>
			<div className="font-normal text-2xl flex justify-between items-center translate-y-2">
				<h1 className="px-3 py-2 border border-black/5 bg-gray-50">This is</h1>
                {/* <div className="px-3 py-2 border border-black/5 bg-white/20">
                    <ArrowDownIcon size={28} />
                </div> */}
                
			</div>
		</motion.div>
	);
}
