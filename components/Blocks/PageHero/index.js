import Image from "next/image";
import Arrow from "/public/images/arrow.svg";


export const PageHero = ({ data }) => {

  let textoReturn = ""
  if ( data.subtitle ) {
    textoReturn = data.subtitle
  } else {
    textoReturn = "Por defecto"
  }
  
  return (
    <div className={`hero hero-${data.background_color}`}>
      
      <h1>Page title</h1>
      
      <div className="hero-text">{textoReturn}</div>
      
      

    </div>
  );
};
