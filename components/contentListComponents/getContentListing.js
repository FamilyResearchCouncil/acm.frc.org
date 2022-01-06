import React, { useEffect, useState } from "react";
import ItemArticle from "./itemArticle";

let ContentList = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("/scratchJson/item_listing_"+props.itemType+".json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (

            items.map(item => (
                <ItemArticle key={item.ITEM_CODE} name={item.ITEM_DESC} summary={item.SUMMARY_TEXT} imgageUrl={item.SCREENCAP_IMAGE} />
            ))

        );
    }
}

export default ContentList;