import { useEffect, useState } from "react";

type TypeWriterProps = {
  message: string;
  speed?: number;
};

/**
 *
 * @version 1.0.0
 * @param message
 * @description This component take a message and speed time (optional) from props and giving an animation type to hero's paragraph.
 * @returns animation type text for users.
 */
const AnimationTxt = ({ message, speed = 20 }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");

    let i = 0;

    const interval = setInterval(() => {
      if (i < message.length) {
        setDisplayText((prev) => prev + message.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message, speed]);
  return (
    <>
      <h2 className="text-2xl">{displayText}</h2>
    </>
  );
};

export default AnimationTxt;
