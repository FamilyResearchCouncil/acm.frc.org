import Link from 'next/link';
import { bool, func } from 'prop-types';
import { StyledMenu } from './menu.styled';

const Menu = ({ open }) => (
        <StyledMenu open={open}>
            <Link href="/">
                <a>HOME</a>
            </Link>
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