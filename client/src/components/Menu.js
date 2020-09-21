import React, {useState} from 'react';
import { Button, Icon, Header, Checkbox } from 'semantic-ui-react'
import App from 'react';
import MenuForm from './MenuForm';


const Menu = ({ id, name, active, updateMenu, deleteMenu, editMenu }) => {
  const [form, setForm] = useState(false)
  if(form) return(
    <MenuForm 
    editMenu={editMenu}/>
  ); else return (

    <div style={styles.flex}>
      <div style={styles.flex}>
        <Checkbox 
          defaultChecked={active}
            onClick={() => updateMenu(id)}
        />
        <div style={active ? styles.active : {}} className="center">
          <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
        </div>
      </div>
      <Button
        icon
        color="red"
        size="tiny"
        onClick={() => deleteMenu(id)}
        style={{ marginLeft: "15px", }}
        >
          <Icon name="trash" />
        </Button>
        <Button
        icon
        color="purple"
        size="tiny"
        onClick={() => setForm(true)}
        style={{ marginLeft: "15px", }}
        >
          <Icon name="pencil" />
        </Button>
    </div>
  )
}

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    display: "flex",
    alignItems: "center",
  },
};


export default Menu;