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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center justify-center" // Added justify-center for better alignment
          >
            {item.icon ? (
              <item.icon className="text-7xl text-orange" />
            ) : (
              // Placeholder for items without an icon, e.g., "More on the way..."
              // You can style this text as needed
              <div className="h-[7rem] flex items-center justify-center">
                {" "}
                {/* Adjust height to match icon height */}
                {/* Intentionally empty or add a generic placeholder icon/svg if desired */}
              </div>
            )}
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
