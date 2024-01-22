import { BlockRenderer } from "components/BlockRenderer";
import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";

import { PageWrapper } from "context/page";
import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);

  return (
    <PageWrapper
      value={{
        title: props.title,
        featuredImage: props.featuredImage,
        options: props.options
      }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>

      <Header></Header>

      <BlockRenderer pageBlocks={props.blocks} />

      <Footer/>
    </PageWrapper>
  );
};
