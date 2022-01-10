import React, { useState, useRef } from "react";
import Burger from '../navigation/burger'
import Menu from '../navigation/menu'
import { useOnClickOutside } from '../../../pages/hooks.js';

let Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <header ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu  open={open} setOpen={setOpen} />
        </header>
    );
}

export default Header;
