import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[
        {id:"test",name:"test",address:"test"}
      ]
    }
  }

  _renderUser =()=>{
    const users = this.state.users;
    return users.map((e)=>{
      return (
            <tr>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td>{e.id}</td>
              </tr>
      )
    })
  }

  _handleAddUser = ()=>{
    const name = this.refs.name.value;
    const address = this.refs.address.value;
    const id = this.refs.id.value;

    const user = {
      name,id, address
    }

    const users = this.state.users;

    users.push(user);

    this.setState({
      users
    })
  }

  _handleReset =() =>{
    this.setState({
      users:[]
    })
  }

  render = ()=>{
    return (
      <div className="App">
          <div id="form">
          <div id="name">Name:
              <input type="text" ref="name"/>
          </div> <br/>
          <div id="address">Address:
              <input type="text" ref="address"/>
          </div>
          <div id="cardID">Card ID:
              <input type="text" ref="id"/>
          </div><br/>
          <div>
              <button type="button" onClick={this._handleReset}>Reset</button>
              <button type="button" onClick={this._handleAddUser}>OK</button>
          </div>
          <br/>
      </div>
        <div id="table">
          <table style={{width:"80%"}}>
              <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Card ID</th>
              </tr>
              {this._renderUser()}
          </table>
        </div>
      </div>
    );
  }
  
}

export default App;


