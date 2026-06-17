
import { motion } from "framer-motion";

import { RiReactjsLine , RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiVite, SiTypescript } from "react-icons/si";


const skills = [
{ name: "React", icon: <RiReactjsLine className="text-[#61DAFB]" />, color: "hover:text-[#61DAFB]" },
{ name: "WordPress", icon: <FaWordpress className="text-[#21759b]" />, color: "hover:text-[#21759b]" },
{ name: "Tailwind", icon: <RiTailwindCssFill className="text-[#38BDF8]" />, color: "hover:text-[#38BDF8]" },
{ name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-lg" />, color: "hover:text-[#3178C6]" },
{ name: "Vite", icon: <SiVite className="text-[#646CFF]" />, color: "hover:text-[#646CFF]" },
{ name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, color: "hover:text-[#339933]" },
]
const TechSkills = () => {

    return(
        <section id="skills" className="py-20">
            <div className="py-10 overflow-hidden bg-brand/20 backdrop-blur-md border-y">
                <motion.div
                className="flex whitespace-nowrap gap-10"
                animate = {{ x: [0 , -1035]}}
                transition={{duration: 15, repeat: Infinity,ease: "linear" }}
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 group cursor-default">
                           <span>
                            {skill.icon}
                           </span>
                           <span>
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