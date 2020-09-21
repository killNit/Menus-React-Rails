import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MenuForm from './components/MenuForm';
import axios from 'axios';
import MenuList from './components/MenuList';
// import Menu from './components/Menu';

class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, })
      })
      .catch( err => {
        console.log(err);
      })
  }
  
  addMenu = (name) => {
    // TODO make api call to rails server to add menu
    // TODO update state
    axios.post('/api/menus', {name})
    .then(res => {
      const { menus, } = this.state;
      this.setState({menus: [res.data, ...menus], });
    })
  }
  
  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map( m => {
        if (m.id === id)
          return res.data;
        return m;
      });
      this.setState({ menus, });
    })
  }

  editMenu = (id) => {
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map(m => {
        if (m.id === id)
          return res.data;
        return m;
      });
      this.setState({menus, })
    })

  }
  
  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter(m => m.id !== id), })
      })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <h1>Menu</h1>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
            <MenuList 
            menus={this.state.menus}
            updateMenu={this.updateMenu}
            deleteMenu={this.deleteMenu}
            editMenu={this.editMenu}
            />
      </Container>
    )
  
  }
}

export default App;
