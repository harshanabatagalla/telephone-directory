import React from 'react';
import Header from './Header';
import './App.css'



function App() {

  const clickHandler = (message)=> {
    alert(message)
  }

  let contacts= [
    {
      id:1,
      name:"Harshana Batagalla",
      phone:"1987465231"
    },
    {
      id:2,
      name:"Theekshani Poornima",
      phone:"2369789456"
    }
  ];

  return (
    <div>

      <Header headding="Phone Directory" />
      <div>
        <button className='button-add'>Add</button>
      </div>


      <div className='input-container'>
        <span> Name </span> <br />
        <span> Phone </span>
      </div>
    {
      contacts.map(sub => {
        return <div key={sub.id}className='contacts'>
          <span>{sub.name}</span>
          <span>{sub.phone}</span>
          <span><button className='button-delete' onClick={clickHandler.bind(this, "Delete clicked")}>Delete</button></span>
          </div>
      })
    }

    </div>

  );
}

export default App;
