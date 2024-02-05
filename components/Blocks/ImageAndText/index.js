import Image from "next/image";
import Link from "next/link";
import { Observer } from "/components/Helpers/Observer";

export const ImageAndText = ({ data }) => {

  return (
    <section className="bg-white">
      <Observer className="section-seven bg-grey" data-waypoint=".25">
        <div className="container">
          <div className="row section-seven__grid">
              <div className="section-seven__grid__image">
                <div className="section-image">
                  {data.image && 
                    <picture>
                      <source srcSet="/images/realmone-people-focused-mobile.webp" media="(max-width:750px)" />
                      <Image className="img-fluid" src={data.image.url} width={1980} height={900} alt={data.image.alt} />
                    </picture>
                  }
                </div>
              </div>

              <div className="section-seven__grid__title">
                {data.after_title && <div className="section-toptitle">{data.after_title}</div>}
                {data.title &&  <div className="section-title"><span>{data.title}</span></div>}
              </div>

              <div className="section-seven__grid__desc">
                {data.description && <div className="section-text">{data.description}</div>}
                {data.link &&
                  <div className="section-button">
                      <Link className="button button--link" target={data.link.target ? data.link.target : ""} href={data.link.url}><span>{data.link.title}</span></Link>
                  </div>}
              </div>
            </div>
          </div>
      </Observer>
    </section>
  );
};
