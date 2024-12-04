'use client'

type ProjectCardProps = {
    title: string;
    tag: string;
    description: string;
    image: string;
    link: string;
  }
  
  const ProjectCard = ({ title, tag, description, image, link }: ProjectCardProps) => {
    return (
      <div className="flex flex-col sm:flex-row border border-[#303030] bg-[#303030] rounded-3xl w-full p-5">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{title}</h3>
              <span className="text-xs bg-blue-200 text-black rounded px-2 p-1 min-w-max">{tag}</span>
            </div>
            <p className="text-sm">{description}</p>
          </div>
          <button 
            onClick={() => window.location.href = link}
            className="bg-[#1B1B1B] text-white rounded-full px-4 py-1 text-sm max-w-max"
          >
            Read More
          </button>
        </div>
        <img src={image} alt={`${title} preview`} />
      </div>
    );
  };
  
  export default ProjectCard;