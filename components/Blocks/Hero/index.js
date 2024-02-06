import React from 'react';
import { Header } from "/components/Layout/Header";
import { Observer } from "/components/Helpers/Observer";

export const Hero = ({ data }) => {
  return (
      <Observer className="section-hero" data-scroll-observe data-in="100">
          <div className="hero-shapes">
            <div className="shape-circle-1"></div>
            <div className="shape-circle-2"></div>
            <div className="shape-video-1">
              <video loop muted autoPlay playsInline poster="/images/shape-video.webp">
                <source src="/images/hero_video_mobile.mp4" media="(max-width:1050px)" type="video/mp4" />
                <source src="/images/hero_video.mp4" type="video/mp4" />
              </video>
              <div className="video-filter"></div>
            </div>
            <div className="shape-button-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="125" viewBox="0 0 12 125" fill="none">
                <path d="M5.99999 125L11.7735 115L0.226492 115L5.99999 125ZM5 -4.37114e-08L4.99999 116L6.99999 116L7 4.37114e-08L5 -4.37114e-08Z" fill="#971DF5"/>
              </svg>
            </div>

            {data.title &&  data.description && 
              <div className="container container-sm">
                <div className="row">
                  <h1 className="hero-text"><span>{data.title}</span></h1>
                  <h2 className="hero-desc">{data.description}</h2>
                </div>
              </div>
            } 
        </div>
      </Observer>
  );
};
