import Image from "next/image";
import Arrow from "/public/images/arrow.svg";


export const HeroPageHero = ({ data }) => {
  
  return (
    <div className={`hero hero-${data.background_color}`}>
      
      <h1>Page title</h1>
      
      {data.subtitle && <div className="hero-text">{data.subtitle}</div>}

    </div>
  );
};
