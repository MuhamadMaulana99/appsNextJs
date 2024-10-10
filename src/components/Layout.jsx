import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <div className="flex">
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <div  className={`flex-grow transition-all ${open ? 'ml-64' : 'ml-0'}`} style={{ paddingTop: '64px' }}>
        <Header open={open} toggleDrawer={toggleDrawer} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
