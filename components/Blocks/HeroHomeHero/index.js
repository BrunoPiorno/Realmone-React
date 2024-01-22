import Image from "next/image";

export const HeroHomeHero = ({ data }) => {
  console.log(data.title);
  return (
    <section className="home-hero">
      {data.title ? <h1>{data.title}</h1> : <h1>titulo por defecto</h1>}
      <Image
        src="/images/temp.jpg"
        width={1600}
        height={900}
        alt="Home image"
        className="background"
      />
    </section>
  );
};
