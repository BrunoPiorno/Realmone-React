import Link from "next/link";
import { useRouter } from "next/router";

export const FooterMenuItem = ( {item, includeSubitem= true } ) => {
  let router = useRouter();

  if ( !item.link ) return

  return (
    <li
      className={`${
        router.asPath === "/" + item.link.url ||
        process.env.NEXT_PUBLIC_WP_URL + router.asPath + "/" === item.link.url
          ? "current-menu-item"
          : ""
      } `}
    >
      <Link href={item.link.url}>{item.link.title}</Link>
     
    </li>
  );
};
