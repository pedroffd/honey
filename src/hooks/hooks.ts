import differenceInHours from "date-fns/differenceInHours";
import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth < 992;
};

export const isDateToday = (date:string) => {
  if(date){
    const hours = differenceInHours(new Date(), Date.parse(date));
    if(hours < 24){
      return true
    }
  }

  return false
}
