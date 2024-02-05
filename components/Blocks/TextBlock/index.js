import { Observer } from "/components/Helpers/Observer";

export const TextBlock = ({ data }) => {
  return (
    <Observer className="section-one" data-waypoint=".25">
      <div className="container container-md">
        <div className="shape-bottom"></div>
        <div className="row">
          <div className="section-text">{data.text}</div>
        </div>
      </div>
    </Observer>
  );
};