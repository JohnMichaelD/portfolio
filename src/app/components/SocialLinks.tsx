import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <span className="flex gap-2 text-xl">
      <a 
        href="https://www.linkedin.com/in/john-darrin/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin alt="linkedin icon" />
      </a>
      <a 
        href="https://github.com/JohnMichaelD"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareGithub alt="github icon" />
      </a>
    </span>
  );
};

export default SocialLinks;