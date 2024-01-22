import Image from "next/image";
import { Observer } from "@/components/Helpers/Observer";
import { Text } from "@/components/Helpers/Text/Text";
import { Button } from "@/components/Parts/Button";

export const ImageAndText = ({ data }) => {
  
  return (
    <Observer className={`image-and-text align-${data.image_position} `} >
      <div className="container">
        <div className="content">
        {data.image && 
        <figure>
          <Image src={data.image.url} width={1980} height={900} alt={data.image.alt} />
        </figure>
        }
        {data.text &&  // esto imprime esat seccion solo si data.text tiene algo
        <div className="text-col">
          <Text>
            {data.text}
          </Text>
          <Button button={data.link_field} style="secondary" />
        </div>
        }
        </div>
      </div>
    </Observer>
  );
};
