import React from 'react';
import Menu from './Menu';

const MenuList = ({ menus, updateMenu, deleteMenu, editMenu, }) => (
  <div>
    { menus.map( menu =>
      <Menu 
      key={menu.id}
      {...menu}
      updateMenu={updateMenu}
      deleteMenu={deleteMenu}
      editMenu={editMenu}
      />
      )
    }
  </div>
)

export default MenuList;