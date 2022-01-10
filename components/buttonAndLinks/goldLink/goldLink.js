import Link from 'next/link';
import {StyledGoldLink} from "./goldLink.styled";

const GoldLink = (props) => (
    <>
        <Link href={props.href} passHref>
            <StyledGoldLink>
                {props.displayName}
            </StyledGoldLink>
        </Link>

        {/*<Link href="/">*/}
        {/*    <a>Home</a>*/}
        {/*</Link>*/}
        {/*<Link href="/about-us">*/}
        {/*    <a>About Us</a>*/}
        {/*</Link>*/}
        {/*<Link href="/resources">*/}
        {/*    <a>Resources</a>*/}
        {/*</Link>*/}
        {/*<Link href="/how-to-join">*/}
        {/*    <a>How To Join</a>*/}
        {/*</Link>*/}

    </>
);

export default GoldLink;