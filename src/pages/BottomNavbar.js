import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BottomNavbar() {
  const [activeTab, setActiveTab] = useState(); // 현재 활성화된 탭

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <footer className="bottom-navbar">
      <Link to ="/List"
        className={activeTab === 'Tab1' ? 'nav-item active' : 'nav-item'}
        onClick={() => handleTabClick('Tab1')}
      >
        Search
      </Link>

      <Link to = "/"
        className={activeTab === 'Tab2' ? 'nav-item active' : 'nav-item'}
        onClick={() => handleTabClick('Tab2')}
        >
          Home
      </Link>

      <Link to = "/Detail"
        className={activeTab === 'Tab3' ? 'nav-item active' : 'nav-item'}
        onClick={() => handleTabClick('Tab3')}
      >
        ing
      </Link>
    </footer>
  );
}

export default BottomNavbar;