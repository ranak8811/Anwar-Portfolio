import SingleSkill from "./SingleSkill";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
// import { DiC, DiCplusplus } from "react-icons/di"; // For C and C++ - Replaced with Si icons
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "Python", icon: FaPython },
  { skill: "C", icon: SiC },
  { skill: "C++", icon: SiCplusplus },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "Tailwind CSS", icon: RiTailwindCssFill },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "React.js", icon: FaReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "Firebase", icon: SiFirebase },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "Express.js", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "More on the way...", icon: null }, // Placeholder for "More on the way"
];

const AllSkills = () => {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-12 gap-y-60 place-items-center max-w-[1200px] mx-auto px-4 py-24">
        {" "}
        {/* Increased gap-y and py */}
        {skills.map((item, index) => {
          // Ensure index for delay is within a reasonable range if list grows very large
          const delayIndex = index % 10; // Example: reset delay pattern every 10 items
          return (
            <motion.div
              variants={fadeIn("up", `0.${delayIndex}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={item.icon ? <item.icon /> : null}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
