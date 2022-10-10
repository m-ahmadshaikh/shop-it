import { useState } from 'react';
import Drawer from './Drawer';
import Header from './Header';

function MainNavigation() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
}

export default MainNavigation;
