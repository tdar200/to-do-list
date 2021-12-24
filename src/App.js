import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const removeItem = (idx) => {

    const newList = list.filter((item, index) => index !== idx);

    setList(() => newList)

  };

  const submitHandler = (e) => {
    e.preventDefault();

    setList((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div className='container'>
      <div className='heading'>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg '></img>

        <h1>To-Do-List</h1>
      </div>

      <div className='form-container'>
        <form onSubmit={submitHandler}>
          <input
            value={value}
  
            required
            onChange={(e) => setValue(e.target.value)}
          />
          <div className='button'>
            <button type='submit'>
           <span>Add Task</span>
            </button>
          </div>
          {list.map((item, idx) => {
            return (
              <div key={idx}>
                <p onClick={() => removeItem(idx)}>
                  task {idx + 1} :{item}
                </p>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
}

export default App;
