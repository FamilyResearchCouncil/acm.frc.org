import Link from 'next/link';
import {StyledAffiliateLink} from "./affiliateLink.styled";
// import Image from "next/image";

const AffiliateLink = (props) => (
    <>
        <Link href={props.href} passHref>
            <StyledAffiliateLink>
                <img src={props.imgageUrl} />
            </StyledAffiliateLink>
        </Link>
    </>
);

export default AffiliateLink;