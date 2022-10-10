import { useState } from 'react';
import Drawer from './Drawer';
import Header from './Header/Header';

function MainNavigation() {
  const [openDrawer, setOpenDrawer] = useState(false);
  function toggleOpen() {
    setOpenDrawer((prev) => !prev);
  }

  return (
    <div>
      <Header openDrawer={openDrawer} toggleOpen={toggleOpen} />
      <Drawer openDrawer={openDrawer} toggleOpen={toggleOpen} />
    </div>
  );
}

export default MainNavigation;