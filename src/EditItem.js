import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditItem = (props) => {
  const [item, setItem] = useState({}); // State for item data
  const itemId = props.match.params.id; // Retrieve ID from URL params

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/items/${itemId}');
      setItem(response.data);
    };
    fetchData();
  }, [itemId]); // Update effect on ID change

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/items/${itemId}', item);
      props.history.push('/list'); // Redirect to list page after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={item.name} name="name" onChange={handleChange} />
        </label>
        {/* Add other form fields for editable data */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItem;