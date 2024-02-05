import Image from "next/image";
import Link from "next/link";
import { Observer } from "/components/Helpers/Observer";
import React from 'react';

export const GridLogos = ({ data, blockData }) => {
  return (
    <Observer className="section-three" data-waypoint=".25">
      <div className="container container-logos">
        <div className="row">
          <div className="grid grid-logos">
          {blockData.logos && blockData.logos.length > 0 && blockData.logos.map((el, key) => (
              <div key={key} className="grid__item">
                <div className="logo-wrapper">
                  <Link href={el.link.url || "#"}>
                    {el.image && (
                      <Image src={el.image.url} width={220} height={900} alt={el.image.alt}/>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Observer>
  );
};