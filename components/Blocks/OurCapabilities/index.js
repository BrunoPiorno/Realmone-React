import Image from "next/image";
import { Observer } from "/components/Helpers/Observer";
import React from 'react';

export const OurCapabilities = ({ data, blockData }) => {
  console.log("blockData", blockData);
  return (
    <section className="bg-white">
      <Observer className="section-six" data-waypoint=".25">
        <div className="container ">
          <div className="row">
          {data.title && <div className="title-wrapper">{data.title}</div>}
          </div>
        </div>

        <div className="bg-grey">
          <div className="container">
            <div className="icons-grid">
              <div className="row">
                {blockData.capabilities && blockData.capabilities.length > 0 && blockData.capabilities.map((el, key) => (
                  <div key={key} className="icons-grid__item">
                    <div className="icons-grid__item__top">
                      <Image className="icons-grid__item__icon" src={el.icon.url} width={50} height={900} alt={el.icon.alt}/>
                      <div className="icons-grid__item__title">{el.title}</div>
                    </div>
                    <div className="icons-grid__item__desc">{el.text}</div>
                  </div>
                ))}
              </div>       
            </div>
          </div>
        </div>
      </Observer>
    </section>
  );
};
