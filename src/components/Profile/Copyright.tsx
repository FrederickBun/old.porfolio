'use client'
import { motion } from "framer-motion";
import { useIsSmall } from "@/hooks/useMediaQuery";

export default function NameTitle() {
    const variants = useIsSmall() ? {
        hidden: {
            scale: 1,
            opacity: 0,
            x: -200,
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: -20,
            transition: {
                delay: 0.05,
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.1,
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
                delay: 0.05,
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.1,
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
        right: 30,
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
			<div className="cursor-text">
                <p> 
                    Copyright 2023-2024 Frederick Chen
                </p>
                <p> 
                    Made with ❤️
                </p>
                <a href="https://icp.gov.moe/?keyword=20245128" target="_blank">萌ICP备20245128号</a>
			</div>
		</motion.div>
	);
}
