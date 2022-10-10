import { useState } from 'react';
import Header from './Header';

function MainNavigation() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
}

export default MainNavigation;
