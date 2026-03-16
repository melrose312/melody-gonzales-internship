import { useState, useEffect } from "react";

const getTimeLeft = (expiryDate) => expiryDate - Date.now();

function Countdown({ expiryDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(expiryDate));

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(expiryDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className="de_countdown">
      {timeLeft > 0 ? `${hours}h ${minutes}m ${seconds}s` : "Expired"}
    </div>
  );
}

export default Countdown;
