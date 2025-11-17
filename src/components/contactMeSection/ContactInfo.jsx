import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text="ranakrphone@gmail.com"
        Image={HiOutlineMail}
        href="mailto:ranakrphone@gmail.com"
      />
      <SingleInfo
        text="+8801789133715"
        Image={FiPhone}
        href="tel:+8801789133715"
      />
      <SingleInfo
        text="+8801789133715"
        Image={FaWhatsapp}
        href="https://wa.me/8801789133715"
      />
      <SingleInfo text="Md. Anwar Hossain, Dhaka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
