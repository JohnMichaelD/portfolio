'use client'

import Image from 'next/image';
import AnimatedLoader from './AnimatedLoader';


type ProjectCardProps = {
    title: string;
    tag: string;
    description: string;
    display: string | 'AnimatedLoader' | 'Switchboard';
    link: string;
    status: string | 'development' | 'live' | 'coming-soon'; 
  }
  
  const ProjectCard = ({ title, tag, description, display, link, status = 'live'}: ProjectCardProps) => {
    const renderDisplay = () => {
        switch(display) {
          case 'AnimatedLoader':
            return <AnimatedLoader />;
          case 'Switchboard':
            return <video src="switchboard.mov" autoPlay loop></video> 
          default:
            return <Image src={display} alt={`${title} preview`} width="300" height="300" />;
        }
      };

    const getButtonStyles = () => {
        switch(status) {
            case 'development':
                return "bg-amber-500/20 text-amber-500 rounded-full px-4 py-1 text-sm max-w-max";
            case 'coming-soon':
                return "bg-blue-500/20 text-blue-500 rounded-full px-4 py-1 text-sm max-w-max";
            default:
                return "bg-[#1B1B1B] text-white rounded-full px-4 py-1 text-sm max-w-max";
        }
    };

    const getButtonText = () => {
        switch(status) {
            case 'development':
                return "In Development";
            case 'coming-soon':
                return "<Coming Soon />";
            default:
                return "<Live />";
        }
    };

    return (
      <div className="flex flex-col sm:flex-row border border-[#303030] bg-[#303030] rounded-3xl w-full p-5 gap-4">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">{title}</h3>
              <span className="text-xs bg-blue-100 text-blue-600 rounded px-2 p-1 min-w-max">{tag}</span>
            </div>
            <p className="text-sm">{description}</p>
          </div>
          <button 
              onClick={() => status === 'live' ? window.location.href = link : null}
              className={getButtonStyles()}
          >
              {getButtonText()}
          </button>
        </div>
        
        <div className="flex items-center justify-center max-w-40 min-w-40">
            {renderDisplay()}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;