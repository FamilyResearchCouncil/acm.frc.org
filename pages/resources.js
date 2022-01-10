import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import GoldLink from "../components/buttonAndLinks/goldLink";

let Resources = () => (
    <>
        <h1 className={styles.title}>Resources</h1>
        <GoldLink href="/" displayName="NOT A MEMBER? JOIN NOW!" />
        <GoldLink href="/" displayName="MEMBER LOGIN" />
    </>
);

export default Resources;