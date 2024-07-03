import React, { useState } from 'react';
import './App.css';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import {Navbar} from './components/Navbar.jsx';
import SideNavigation from './components/SideNavigation.jsx';
import IG from './components/IG.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <div>Home Component</div>;
      case 'dashboard':
        return <div>Dashboard Component</div>;
      case 'airports':
        return <IG />;
      case 'videos':
        return <div>Videos Component</div>;
      case 'list1':
        return <div>List 1 Component</div>;
      case 'list2':
        return <div>List 2 Component</div>;
      case 'list3':
        return <div>List 3 Component</div>;
      default:
        return <div>Home Component</div>;
    }
  };

  return (
    <Provider theme={defaultTheme}>
      <Navbar />
      <div className='flex flex-row'>
        <SideNavigation setCurrentView={setCurrentView} />
        <div className='flex-grow'>
          {renderContent()}
        </div>
      </div>
    </Provider>
  );
}

export default App;
