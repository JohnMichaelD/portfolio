'use client'

import { useEffect, useState } from 'react';

const AnimatedLoader = () => {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const [isReturning, setIsReturning] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    const animate = async () => {
      setActiveIndices(new Set());
      setIsReturning(false);
      setIsSpinning(false);

      // Move circles one by one
      for (let i = 0; i < 13; i++) {
        timeouts.push(
          setTimeout(() => {
            setActiveIndices(prev => new Set([...prev, i]));
          }, i * 10)
        );
      }

      // Start spinning when all circles are in position
      timeouts.push(
        setTimeout(() => {
          setIsSpinning(true);
        }, 13 * 15 + 250)
      );

      // Start returning after spin duration
      timeouts.push(
        setTimeout(() => {
          setIsSpinning(false);
          setIsReturning(true);
        }, 4000)
      );

      // Reset and restart animation
      timeouts.push(
        setTimeout(() => {
          animate();
        }, 6000)
      );
    };

    animate();

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const getCirclePosition = (index: number) => {
    const radius = 17.5;
    const angle = (index * 2 * Math.PI) / 13 + Math.PI / 2;
    return {
      x: 29.5 + radius * Math.cos(angle),
      y: 29.5 + radius * Math.sin(angle)
    };
  };

  const originalPositions = [
    { x: 5.9562, y: 5.83395 },
    { x: 21.6896, y: 5.83395 },
    { x: 37.3107, y: 5.83395 },
    { x: 53.0435, y: 5.83395 },
    { x: 5.9562, y: 21.7949 },
    { x: 21.6896, y: 21.7949 },
    { x: 37.3107, y: 21.7949 },
    { x: 53.044, y: 21.7949 },
    { x: 5.9562, y: 37.42575 },
    { x: 21.6896, y: 37.42575 },
    { x: 37.3102, y: 37.42475 },
    { x: 53.0435, y: 37.42575 },
    { x: 13.8229, y: 53.166 }
  ];

  const colors = [
    '#FFA400', '#FFA400', '#FFA400', '#FFA400',
    '#CE0058', '#CE0058', '#CE0058', '#CE0058',
    '#00AFD7', '#00AFD7', '#00AFD7', '#00AFD7',
    '#236192'
  ];

  return (
    <div className="w-[59px] h-[59px] relative">
      <svg
        viewBox="0 0 59 59"
        className={`w-full h-full ${isSpinning ? 'animate-[spin_1s_linear_infinite]' : ''}`}
      >
        <g>
          {originalPositions.map((pos, index) => {
            const isActive = activeIndices.has(index);
            const finalPos = getCirclePosition(index);
            return (
              <circle
                key={index}
                cx={pos.x}
                cy={pos.y}
                r="5.83395"
                fill={colors[index]}
                className={`
                  transition-all duration-300
                  ${isSpinning ? 'origin-center' : ''}
                `}
                style={{
                  transform: `translate(${isActive && !isReturning ? finalPos.x - pos.x : 0}px, ${isActive && !isReturning ? finalPos.y - pos.y : 0}px)`,
                  transformOrigin: '29.5px 29.5px',
                  transition: `transform ${isReturning ? '500ms' : '300ms'} ${index * 25}ms ${isReturning ? 'ease-out' : 'ease-in-out'}`,
                  opacity: isSpinning ? 0.85 : 1,
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLoader;