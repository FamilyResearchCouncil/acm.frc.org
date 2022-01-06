import React from 'react';

const List = ({items, ...props}) => {
    const [filteredItems, setFilteredItems] = React.useState(items);

    const filterItems = (e) => {
        const searchValue = e.target.value;
        const currentItems = [...items];
        const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));

        setFilteredItems(matchingItems);
    };

    return (
        <>
            <input onChange={filterItems}/>
            <ul {...props}>
                {filteredItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

// class List extends React.Component {
//
//     filterItems(e) {
//         const searchValue = e.target.value;
//         const currentItems = [...this.props.items];
//         const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));
//
//         this.setState({
//             filteredItems: matchingItems
//         });
//     }
//     render() {
//         return (
//             <>
//             <input onChange={this.filterItems}/>
//             <ul>
//                 {this.state.filteredItems.map((item) => (
//                     <li key={item}>{item}</li>
//                 ))}
//             </ul>
//             </>
//         );
//     }
// }

const ListContainer = () => (
    <List aria-label="My Fancy List" items={["Learn React","Learn Next.js","???","Profit!"]}/>
);

export default ListContainer;