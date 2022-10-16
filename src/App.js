import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const nayoks = ['Hero Alom', 'Alomgir', 'Joshim','Salman Sha']
  const products = [
    {name: 'Photoshop', price: '$ 09.10'},
    {name: 'Illustrator', price:'$ 50.11'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JS king Rejwanul</h1>
        <Users></Users>
        <Counter></Counter>

        <ul>
          {
            products.map(product =><li>{product.name}</li>)
          }
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Person name="Rejwanul" job="Developer"></Person>
        <Person name="Muhammad" job="Programmer"></Person>
        <Person name="Rajon" job="Programmer"></Person>
        <Person name="Rajon" job="Programmer"></Person>
      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (   
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={() => setCount(count- 1)}>Decrease</button>
      <button onMouseMove={handleIncrease}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUser] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }       
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle = {
    border: '1px solid cyan',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left'
  }
  return(
  <div style={productStyle}>
    <h2>Name: {props.name}</h2>
    <h3>Price: {props.price}</h3>
    <button>Buy Now</button>
  </div>
  )
}

const personStyle = {
  color: 'cyan',
  border: '5px solid cyan',
  margin: '10px'
}
function Person(props){
  return(
  <div style={personStyle}>
    <h1>My Name: {props.name}</h1>
    <h3>Profession: {props.job}</h3>
  </div>
  )
}

export default App;
