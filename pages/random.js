import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ItemArticle = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 20px;
  border-bottom: solid 1px ${({theme}) => theme.colors.primary};
  margin-bottom: 30px;
`;

function PublicationList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("/scratchJson/item_listing_PV.json")
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
            <section>
                {items.map(item => (
                    <ItemArticle key={item.ITEM_CODE}>
                        <h4>{item.ITEM_DESC}</h4>
                        <p>{item.SUMMARY_TEXT}</p>
                    </ItemArticle>
                ))}
            </section>
        );
    }
}

export default PublicationList;