import React, { useState, useRef } from "react";
import Burger from '../navigation/burger'
import Menu from '../navigation/menu'
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import styles from './Header.module.css'

let Header = () => {
    const [open, setOpen] = useState(true);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <header ref={node} className={styles.header}>
            <Burger open={open} setOpen={setOpen} />
            <Menu  open={open} setOpen={setOpen} />
        </header>
    );
}

export default Header;