import React, { useState, useEffect } from "react";
import './App.css';
import Base from './Base';
import { getDetails, getBalance } from "./apiCalls";



function App() {
  const [data, setData] = useState([]);
  const [bal, setBal] = useState([]);
  const [error, setError] = useState(false);
  const [addr, setAddr] = useState("");


  const handleChange = event => {
    setError("");
    setAddr(event.target.value);
  };
  const onSubmit = event => {
    if (!(addr)) {
      setError("Field cannot be empty")
    }
      else{
    
    event.preventDefault();
    getBalance(addr)
    .then(bal=>{
      if (bal.error) {
        setError(bal.error)
      }else{
        setBal(bal)
      }

    })
    .catch(console.log("ERROR"))
  }
  };
  const warningMessage = () => {
    if (error) {
      return <h4 className="text-danger">{error}</h4>;
    }
  };


  const loadData = () => {
      getDetails()
      .then(data=>{
        if (data.error) {
          setError(data.error)
        }
        else{
          setData(data)
        }
      })
    
    
  };

  useEffect(() => {
    loadData();
  }, []);
  const myForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the Address</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={addr}
          autoFocus
          required
          placeholder="Address"
        />
        <button className="btn btn-outline-info" onClick={onSubmit}>
          Check Balance
        </button>
      </div>
    </form>
  );
  return (
  <Base>
    <div className="container-flueid">
      <h1 className="text-success">BlockChain info</h1><br/><br/><br/>
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary">Hash</h1>
        </div>
        <div className="col-md-6">
         <input type="text" className="form-control" value={data.hash}/>
        </div>
      </div>

      <div className="row">
      <div className="col-md-6">
        <h1 className="text-primary">Height</h1>
      </div>
      <div className="col-md-6">
       <input type="text" className="form-control" value={data.height}/>
      </div>
      </div>
  
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary">Previous Hash</h1>
        </div>
       <div className="col-md-6">
        <input type="text" className="form-control" value={data.previous_hash}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary">Time</h1>
        </div>
       <div className="col-md-6">
        <input type="text" className="form-control" value={data.time}/>
        </div>
      </div>
    <br/> <br/>
    </div>
    {myForm()
      
    }{warningMessage()}
    <h1 className="text-info">{bal.balance}</h1>
  </Base>    
    
  );
}

export default App;
