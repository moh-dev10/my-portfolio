
import { motion } from "framer-motion";

import { RiReactjsLine , RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiVite, SiTypescript ,SiHtml5,SiCss,SiJavascript } from "react-icons/si";
import { useRef } from "react";


const skills = [

{ name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, color: "hover:text-[#E34F26]" },
{ name: "CSS3", icon: <SiCss className="text-[#1572B6]" />, color: "hover:text-[#1572B6]" },
{ name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, color: "hover:text-[#F7DF1E]" },
{ name: "WordPress", icon: <FaWordpress className="text-[#21759b]" />, color: "hover:text-[#21759b]" },
{ name: "Tailwind", icon: <RiTailwindCssFill className="text-[#38BDF8]" />, color: "hover:text-[#38BDF8]" },
{ name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] " />, color: "hover:text-[#3178C6]" },
{ name: "Vite", icon: <SiVite className="text-[#646CFF]" />, color: "hover:text-[#646CFF]" },
{ name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, color: "hover:text-[#339933]" },
]
const TechSkills = () => {

    const containerRef = useRef(null)

    return(
        <section id="skills" className="py-20">
            <div className="overflow-hidden  backdrop-blur-md   mx-auto 
            mask-x-from-70%  mask-x-to-90%">
                <motion.div
                ref={containerRef}
                className="py-4 flex whitespace-nowrap gap-4 md:gap-10"
                animate = {{ x: ["0" , "-50%"]}}// Animate by 50% of the width
                transition={{duration: 8, repeat: Infinity,ease: "linear" }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        
                            <div key={`${skill.name}-${index}`} className="shrink-0 w-15 h-15 md:w-24 md:h-24  lg:w-32 lg:h-32 
                            flex flex-col items-center justify-center p-8 dark:bg-white/3 backdrop-blur-xl border border-neutral-300 shadow-md
                             hover:border-black/20  dark:border-neutral-700 hover:shadow-brand-glow transition-all duration-300   rounded-xl gap-2 group cursor-default">
                               <span className="text-2xl md:text-5xl lg:text-6xl" >
                                {skill.icon}
                               </span>
                               <span className="text-[10px] md:text-sm">
                               {skill.name}
                               </span>
                            
                            </div>
                    
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default TechSkills;