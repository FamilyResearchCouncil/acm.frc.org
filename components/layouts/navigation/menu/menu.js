import Link from 'next/link';
import { bool, func } from 'prop-types';
import { StyledMenu } from './menu.styled';
// import { GoldLink } from '../../../buttonAndLinks/goldLink'

const Menu = ({ open }) => (
        <StyledMenu open={open}>
            <Link href="/about-us">
                <a>About Us</a>
            </Link>
            <Link href="/resources">
                <a>Resources</a>
            </Link>
            <Link href="/how-to-join">
                <a>How To Join</a>
            </Link>
        </StyledMenu>
    );

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu;