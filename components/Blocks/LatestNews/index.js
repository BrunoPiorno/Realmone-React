import Image from "next/image";
import Link from "next/link";

export const LatestNews = ({ data, blockData }) => {
  
  if (!blockData.latest_posts) return

  return (
    <div className="latest-news">
      <div className="container">
        <div className="grid">
          {blockData.latest_posts.length > 0 && blockData.latest_posts.map( (el, key) => {
            return (
              <div className="post-item" key={key} >
                {el.thumbnail && (<Image src={el.thumbnail} width={800} height={600} alt={el.post_title} />)}
                <Link href={`news/${el.post_name}`} >
                  {el.post_title}
                </Link>
              </div>
            )
          } )}
        </div>
      </div>
    </div>
  );
};
