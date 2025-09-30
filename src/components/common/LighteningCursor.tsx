import React, { useState, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface TrailPoint extends Position {
  id: number;
}

const LightningCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let timeoutId: any;
    const trailTimeouts: any = [];

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Add to trail
      const newTrailPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setTrail((prev) => [...prev, newTrailPoint].slice(-8));

      // Clear existing timeout
      clearTimeout(timeoutId);

      // Set new timeout
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);

      // Remove trail points after a delay
      const removeTimeout = setTimeout(() => {
        setTrail((prev) =>
          prev.filter((point) => point.id !== newTrailPoint.id)
        );
      }, 300);
      trailTimeouts.push(removeTimeout);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
      trailTimeouts.forEach((timeout: any) => clearTimeout(timeout));
    };
  }, []);

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: "20px",
            height: "20px",
            background: `radial-gradient(circle, rgba(147, 197, 253, ${
              0.6 - index * 0.07
            }) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.3s ease-out",
            opacity: 1 - index * 0.12,
          }}
        />
      ))}

      {/* Main cursor glow */}
      <div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isMoving ? "60px" : "40px",
          height: isMoving ? "60px" : "40px",
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(147, 197, 253, 0.2) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease",
          boxShadow:
            "0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(147, 197, 253, 0.3)",
        }}
      />

      {/* Inner bright core */}
      <div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "6px",
          height: "6px",
          background: "rgba(255, 255, 255, 0.9)",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(147, 197, 253, 0.8)",
        }}
      />
    </>
  );
};

export default LightningCursor;
