import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <span className="flex gap-2 text-xl">
      <a 
        href="https://www.linkedin.com/in/john-darrin/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/JohnMichaelD"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareGithub />
      </a>
      <a href="mailto:john.darrin1@gmail.com">
        <IoMdMail />
      </a>
    </span>
  );
};

export default SocialLinks;