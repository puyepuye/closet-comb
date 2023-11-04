import React, { useState } from 'react';

function Closet() {
  const [clothingItems, setClothingItems] = useState([]);
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const handleAddItem = () => {
    if (item && category && color) {
      // Create a new clothing item object
      const newItem = {
        name: item,
        category: category,
        color: color,
      };

      // Update the clothingItems array with the new item
      setClothingItems([...clothingItems, newItem]);

      // Clear the input fields
      setItem('');
      setCategory('');
      setColor('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...clothingItems];
    updatedItems.splice(index, 1);
    setClothingItems(updatedItems);
  };


  return (
    <div>
      <h2>Clothing Tracker</h2>
      <div>
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {clothingItems.map((clothing, index) => (
            <tr key={index}>
              <td>{clothing.name}</td>
              <td>{clothing.category}</td>
              <td>{clothing.color}</td>
              <td>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Closet;
