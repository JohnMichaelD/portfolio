import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <span className="flex gap-2 text-xl">
      <a 
        href="https://www.linkedin.com/in/john-darrin/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin alt="Link to Linkedin" />
      </a>
      <a 
        href="https://github.com/JohnMichaelD"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareGithub alt="Link to Github" />
      </a>
      <a href="mailto:#">
        <IoMdMail alt="link to my email" />
      </a>
    </span>
  );
};

export default SocialLinks;