import { Text } from "/components/Helpers/Text/Text";
import { Observer } from "/components/Helpers/Observer";

export const OnlyText = ({ data }) => {

  return (
    <section className="bg-white">
        <Observer className="section-four" data-waypoint=".25">
        <div className="container container-md">
            <div className="row">
                <div className="col">
                {data.text &&  <Text className="section-text">{data.text}</Text>}
                </div>
            </div>
        </div>
        </Observer>
    </section>
  );
};