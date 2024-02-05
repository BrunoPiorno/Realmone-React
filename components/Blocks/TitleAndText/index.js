import { Observer } from "/components/Helpers/Observer";

export const TitleAndText = ({ data }) => {
  return (
    <Observer className="section-two" data-waypoint=".25">
      <div className="container container-md">
        <div className="row">
            <div className="section-wrapper">
                <div className="section-title">{data.title}</div>
                <div className="section-text">{data.text}</div>
            </div>
        </div>
      </div>
    </Observer>
  );
};