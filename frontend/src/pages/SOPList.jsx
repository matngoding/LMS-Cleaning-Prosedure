import React, { useState } from 'react';
import './SOPList.css';

const SOPList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sopData = [
    { title: 'SOP 1', category: 'Category 1' },
    { title: 'SOP 2', category: 'Category 2' },
    { title: 'SOP 3', category: 'Category 1' },
    { title: 'SOP 4', category: 'Category 3' },
    { title: 'SOP 5', category: 'Category 2' },
    { title: 'SOP 6', category: 'Category 1' },
    { title: 'SOP 7', category: 'Category 3' }
  ];

  const categories = [...new Set(sopData.map(sop => sop.category)), 'All'];

  const filteredSOPs = sopData.filter(sop => 
    (selectedCategory === 'All' || sop.category === selectedCategory) && 
    sop.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sop-list">
      <h1>SOP List</h1>
      <input 
        type="text" 
        placeholder="Search SOPs" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <select onChange={e => setSelectedCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className="sop-cards">
        {filteredSOPs.map(sop => (
          <div key={sop.title} className="sop-card">
            <h2>{sop.title}</h2>
            <p>Category: {sop.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOPList;