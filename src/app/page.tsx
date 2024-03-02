"use client";
import Image from "next/image";
import NameTitle from "@/components/NameTitle";
import ThisIsTitle from "@/components/ThisIsTitle";
import NextPageButton from "@/components/NextPageButton";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProfileDesc from "@/components/Profile/ProfileDesc";
import ProfilePic from "@/components/Profile/ProfilePic";

export default function Home() {
	const section1 = useRef<null | HTMLDivElement>(null);
	const section2 = useRef<null | HTMLDivElement>(null);
	const section3 = useRef<null | HTMLDivElement>(null);
  const section4 = useRef<null | HTMLDivElement>(null);

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<main className="min-h-screen flex flex-col items-center justify-center gap-2">
			<motion.div
				className="fixed top-0 left-0 right-0 h-4 bg-black/90 origin-left z-50"
				style={{ scaleX }}
			/>
			<section
				ref={section1}
				id="section1"
				className="flex flex-col items-left justify-center h-screen pb-12 gap-[-2px]"
			>
				<ThisIsTitle />
				<NameTitle />
			</section>

      {/* Profile Section */}
			<motion.section
				ref={section2}
				id="section2"
				className="flex flex-col sm:flex-row items-center justify-center h-screen w-full sm:w-4/5 p-2 sm:p-20 gap-4 sm:gap-10 "
        // style={{
        //   backgroundImage: "linear-gradient(to right, rgb(243,244,246) 1.2px, transparent 1.2px), linear-gradient(to bottom, rgb(243,244,246) 1.2px, transparent 1.2px);",
        //   backgroundSize: "20px 20px",
        //   backgroundPosition: "-10px -10px",
        // }}
				initial="offscreen"
				whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
			>
        <ProfilePic />
        <ProfileDesc />
        
      </motion.section>

      {/* Projects Section */}
			<section
				ref={section3}
				id="section3"
				className="flex flex-col items-center justify-center h-screen"
			>
				<div className="font-bold text-8xl">
					<h1>Section 3</h1>
				</div>
			</section>

      {/* Contact Section */}
      <section
				ref={section4}
				id="section4"
				className="flex flex-col items-center justify-center h-screen mt-10"
			>
				<div className="font-bold text-8xl">
					<h1>Section 4</h1>
				</div>
			</section>
			<NextPageButton
				section1Ref={section1}
				section2Ref={section2}
				section3Ref={section3}
        section4Ref={section4}
			/>
		</main>
	);
}
