import Image from "next/image";
import { ObserverScroll } from "@/components/Helpers/ObserverScroll";

export const ParallaxImage = ({ data }) => {
  
  return (
    <ObserverScroll className='parallax-image' fromtop={true} always={true}>      
      <Image src={data.image.url} width={1980} height={900} alt={data.image.alt} />
    </ObserverScroll>
  );
};
