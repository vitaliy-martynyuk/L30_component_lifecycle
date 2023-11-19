import { useEffect, useState } from "react";

export const Timer = ({ index }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log(`TIMER${index} - mounted`);

    return () => {
      console.log(`TIMER${index} - unmounted`);
    };
  }, []);

  useEffect(() => {
    console.log(`TIMER${index} - updated`);
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  return <div>{time.toLocaleTimeString()}</div>;
};
