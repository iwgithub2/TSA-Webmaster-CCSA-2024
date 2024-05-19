'use client'
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import {dmSerif} from "@/app/ui/fonts";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [distance, -distance]);
}

export default function HeroParallax() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const tree1 = useTransform(scrollYProgress, [0,2], ["0%", "0%"]);
    const tree2 = useTransform(scrollYProgress, [0,2], ["0%", "25%"]);
    const tree3 = useTransform(scrollYProgress, [0,2], ["0%", "50%"]);
    const tree4 = useTransform(scrollYProgress, [0,2], ["0%", "75%"]);
    const range1 = useTransform(scrollYProgress, [0,2], ["0%", "100%"]);
    const range2 = useTransform(scrollYProgress, [0,2], ["0%", "200%"]);
    const range3 = useTransform(scrollYProgress, [0,2], ["0%", "300%"]);

    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center" ref={ref}>
            <motion.div style={{y : tree1}} className="absolute inset-0 z-[30] ">
                <Image alt="tree" src='/HeroPage/Dark-Trees.png' sizes="100vw" fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : tree2}} className="absolute inset-0 z-[25] ">
                <Image alt="tree" src='/HeroPage/Lighter-Trees.png' fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : tree3}} className="absolute inset-0 z-[20] ">
                <Image alt="tree" src='/HeroPage/Even-Lighter-Trees.png' fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : tree4}} className="absolute inset-0 z-[15] ">
                <Image alt="tree" src='/HeroPage/Lightest-Trees.png' fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : range1}} className="absolute inset-0 z-10 ">
                <Image alt="tree" src='/HeroPage/Mountain-Ridge.png' fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : range2}} className="absolute inset-0 z-[5] ">
                <Image alt="tree" src='/HeroPage/Mountain-Ridge2.png' fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : range3}} className="absolute inset-0 z-0 ">
                <Image alt="tree" src='/HeroPage/Mountain-Ridge3.png' fill={true} objectFit="cover"/>
            </motion.div>
            <motion.div style={{y : tree1}} className="absolute top-1.5 z-0 ">
                <div className={`${dmSerif.className}`}>
                    <p className={` lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center mt-40 py-10 px-2 tracking-tight text-green-900`}>
                        Where clean energy becomes <em>cheap</em> <br/>and <em>accessible</em>.
                    </p>
                </div>
            </motion.div>
        </div>);

}