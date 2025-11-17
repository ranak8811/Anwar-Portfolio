import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] flex flex-col items-center py-12">
        {" "}
        {/* Changed to flex column and added padding */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full flex justify-center" // Ensure SkillsText is centered
        >
          <SkillsText />
        </motion.div>
        {/* Container for AllSkills - visible on lg and up, hidden on sm */}
        <div className="mt-32 w-full hidden lg:block">
          {" "}
          {/* Increased margin-top */}
          <AllSkills />
        </div>
        {/* Container for AllSkillsSM - visible on sm, hidden on lg and up */}
        <div className="mt-24 w-full sm:block lg:hidden">
          {" "}
          {/* Increased margin-top */}
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
