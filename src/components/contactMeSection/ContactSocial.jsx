import SingleContactSocial from "./SingleContactSocial";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/ranak8811/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/ranak8811"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="mailto:ranakrphone@gmail.com"
        Icon={FaEnvelope}
      />
    </div>
  );
};

export default ContactSocial;
