import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyComponent from './MyComponent';
const List = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); // Add a state variable for loading
    const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true before fetching data
            const response = await axios.get('http://localhost:5000/api/items');
            setItems(response.data);
            setLoading(false); // Set loading to false after data is fetched
        };
        fetchData();
    }, []);

    return (
        <div>
            <MyComponent></MyComponent>
            <h2>List of Items</h2>
            {loading ? (
                <p>Loading items...</p> // Display loading message while loading
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.job_step_id}>{item.cmd_line}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default List;