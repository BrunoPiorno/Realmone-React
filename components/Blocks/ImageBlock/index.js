import { Observer } from "/components/Helpers/Observer";
import Image from "next/image";
import React from 'react';


export const ImageBlock = ({ data }) => {
  return (
    <section className="bg-white">
       <Observer className="section-five" data-waypoint=".25">
            <div className="container container-md">
                    <div className="section-five__row">
                        <div className="col">
                            <div className="section-title">{data.title}</div>
                        </div>
                        <div className="col">
                            <div className="img-shape-wrapper">
                                <Image className="img-fluid" src={data.image_one.url} width={1980} height={900} alt={data.image_one.alt} />
                            </div>
                        </div>
                    </div>

                    <div className="section-five__row section-five__row--bottom">
                        <div className="col">
                            <div className="img-shape-wrapper-2">
                                <Image className="img-fluid" src={data.image_two.url} width={1980} height={900} alt={data.image_two.alt} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="img-shape-wrapper-3">
                                <div className="section-text">{data.description}</div>
                            </div>
                        </div>
                    </div>
            </div>
        </Observer>
    </section>
 
  );
};
