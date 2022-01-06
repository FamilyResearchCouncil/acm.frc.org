import Link from 'next/link';


let Header = () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about-us">
                    <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href="/resources">
                    <a>Resources</a>
                </Link>
            </li>
            <li>
                <Link href="/how-to-join">
                    <a>How To Join</a>
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;
