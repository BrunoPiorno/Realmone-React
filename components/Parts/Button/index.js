import Link from "next/link";

export const Button = ({
    button,
    style = "primary",
}) => {

    if ( !button ) return
    if ( !button.url ) return

    return (
        <Link
            className={`btn btn-${style}`}
            href={button.url}
            target={button.target ? button.target : ""}
        >
            {button.title && button.title}
        </Link>
    );
};
