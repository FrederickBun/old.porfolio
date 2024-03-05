'use client'
import { motion } from "framer-motion";
import { useIsSmall } from "@/hooks/useMediaQuery";

export default function NameTitle() {
    const variants = useIsSmall() ? {
        hidden: {
            scale: 1,
            opacity: 0,
            x: -100,
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: 20,
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
            x: -100,
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: 20,
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
			<div className="text-2xl sm:text-4xl px-6 py-4 border border-black/5 bg-gray-50 font-bold">
				<p>Github: </p>
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 font-bold">
					<a href="https://github.com/FrederickAsYou">/FrederickAsYou</a>
				</span>
			</div>
		</motion.div>
	);
}
