import { useState } from 'react';
import Backdrop from '../../components/ui/Backdrop';
import Drawer from './Drawer/Drawer';
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
