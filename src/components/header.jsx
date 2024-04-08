import React, { useState } from 'react';

export default function Header() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <header id="header" className="fixed z-10 top-0 flex justify-between align-middle bg-headerColor w-full h-16">
      <h1 className="w-1/3 ml-24 text-white p-4">Marisa Miller</h1>
      <ul className="mt-1 mr-40 w-1/3 flex text-white p-4 justify-evenly">
        <li>
          <a href="#home" className={selectedItem === 'home' ? 'text-purple-600' : 'hover:text-purple-600'} onClick={() => handleItemClick('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className={selectedItem === 'skills' ? 'text-purple-600': 'hover:text-purple-600'} onClick={() => handleItemClick('skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={selectedItem === 'projects' ? 'text-purple-600': 'hover:text-purple-600'} onClick={() => handleItemClick('projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className={selectedItem === 'resume' ? 'text-purple-600': 'hover:text-purple-600'} onClick={() => handleItemClick('resume')}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" className={selectedItem === 'contact' ? 'text-purple-600': 'hover:text-purple-600'} onClick={() => handleItemClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}
