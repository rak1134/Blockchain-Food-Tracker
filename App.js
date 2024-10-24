import React, { useState } from 'react';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState([
    { name: 'Apples', origin: 'Farm A', status: 'In Transit' },
    { name: 'Bananas', origin: 'Farm B', status: 'Stored at Warehouse' },
    { name: 'Carrots', origin: 'Farm C', status: 'Delivered to Store' },
  ]);

  return (
    <div className="App">
      <h1>Food Supply Chain Tracker</h1>
      <h2>Food Items:</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.name} from {item.origin} - Status: {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
