import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, CircularProgress, Container } from '@mui/material';

const ItemList = ({ searchQuery }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container>
            {loading ? (
                <CircularProgress />
            ) : (
                <List>
                    {filteredItems.map(item => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.title} secondary={item.body} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default ItemList;
