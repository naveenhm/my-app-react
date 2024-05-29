// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [newItemName, setNewItemName] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/items');
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const addItem = async () => {
//     try {
//       await axios.post('http://localhost:5000/items', { name: newItemName });
//       setNewItemName('');
//       fetchData();
//     } catch (error) {
//       console.error('Error adding item:', error);
//     }
//   };

//   const deleteItem = async (id) => {
//     try {
//       await axios.delete('http://localhost:5000/items/${id}');
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>CRUD Application</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input 
//         type="text" 
//         value={newItemName} 
//         onChange={(e) => setNewItemName(e.target.value)} 
//       />
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Header from './Header';
import Menu from './Menu';
import CardDisplay from './CardDisplay';
import "bootstrap-icons/font/bootstrap-icons.css";
import List from './List';
import Create from './Create';
function App() {
  return (<div >
    <Header />
    <Menu></Menu>
    <CardDisplay></CardDisplay>
    <i class="bi bi-airplane-engines-fill"></i>
    <i class="bi bi-tv" style={{ width: 500 }}></i>
    
    <Create></Create>
    <List></List>

  </div>
  );
}

export default App;
