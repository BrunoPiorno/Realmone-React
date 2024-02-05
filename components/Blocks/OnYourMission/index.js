import { Observer } from "/components/Helpers/Observer";

export const OnYourMission = ({ data }) => {

  return (
    <section>
        <Observer className="section-eight" data-waypoint=".25">
            <div className="shape-mask"></div>
            <div className="container container-md">
                <div className="align-items-center">
                    <div>
                        {data.upper_title &&  <div className="section-toptitle">{data.upper_title}</div>}
                        {data.title &&  <div className="section-title">{data.title}</div>}
                        {data.description && 
                            <div className="section-text">
                            <span className="shape-text"></span>
                                {data.description}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Observer>
    </section>

  );
};
