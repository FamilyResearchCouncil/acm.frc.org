import Link from 'next/link';
import {StyledGoldLink} from "./goldLink.styled";

const GoldLink = (props) => (
    <>
        <Link href={props.href} passHref>
            <StyledGoldLink>
                {props.displayName}
            </StyledGoldLink>
        </Link>
    </>
);

export default GoldLink;