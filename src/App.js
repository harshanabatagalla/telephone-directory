import React from 'react';

function App() {
  return (
    <div>
      {/* Phone directory <br />

      <button>Add</button> <br />

      <div>
        <span> Name </span> <br />
        <span> Phone </span>
      </div> */}

      <label htmlFor="name"> Name: </label>
      <input id ="name" type="text" placeholder='Your Name' defaultValue="Name" />

    </div>
  );
}

export default App;
