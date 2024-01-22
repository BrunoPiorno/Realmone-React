import { Observer } from "@/components/Helpers/Observer";
import { Text } from "@/components/Helpers/Text/Text";
import Image from "next/image";

export const TextBlock = ({ data }) => {
  return (
    <Observer>
      <div className="text-block">
        <h2>{data.title}</h2>

        {/* Verifica si hay campos de repeater presentes en los datos */}
        {Object.keys(data).filter(key => key.startsWith('repeater_')).length > 0 && (
          <div className="repeater-container">
            {/* Mapea sobre las claves que comienzan con 'repeater_' */}
            {Object.keys(data).filter(key => key.startsWith('repeater_')).map((key) => (
              <div key={key} className="repeater-item">{data[key]}</div>
            ))}
          </div>
        )}

        <div className="text-col">
          <Text>{data.text}</Text>
        </div>
      </div>
      <Image src={data.image.url} width={1980} height={900} alt={data.image.alt} />
    </Observer>
  );
};
