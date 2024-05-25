// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css';
// import Navigation from './component/nav';
// import './assets/css/main.css';
// import Logo from './component/logo';



// export default function App() {
// let name = "aljay";

// const age = 50;
// var x = 5;
// var y = 5;


// var num1 = 45;
// var num2 = 50;

// const game = {
//   name:"Aljay gaming",
//   version: '2.0',
//   developer:"Aljay",

//   gameItems: {
//       defense: "Physical",
//       damage: "mage"
//   },
//   themes:{
//     background: 'black',
//     fontSize:30,
//     fontFamily: "verdana",
//     color:'white'
//   }
// };


//   return (
//     <>
//       <div style={game.themes}>
//         <h1>welcome to aljay gaming</h1>
//       <h4>Name of the Game: {game.name}</h4>
//       <h5>The version aljay gaming: {game.version}</h5>
//       <h6>The creatot of aljay gaming{game.developer}</h6>
//       <p>Items:</p>
//       <p>{game.gameItems.defense}</p>
//       <p>{game.gameItems.damage}</p>
//       </div>


//       <p>{num1 + num2}</p>
//       <Hibaya />
//         <Palban />

//         <Logo/>
//         <Navigation/>

//         <div style={MainStyles.wrapper}>
//       <h1 className='Jel'>hello gwapo jelbert <br />welcome back</h1>
//       </div>

//       <p style={{color:"blue",fontSize:"60px",fontWeight:"bold"}}> aljay bati nawong</p> 
//     {/* <p style={{color:"red",fontSize:"20",}}>My name is {name}</p> */}
//     <p style={{color:"blue",fontSize:"30px"}}>
//       My name is {name} <br/>
//       my age is {age} 
//       </p>
// <p style={{color:"red",fontSize:"20px"}}>the sum of {x+y}</p>




//     </>
//   )
// }
// const Palban = () => {
//   return (
//     <>
//     <h2>ako si palban baw gwapo ba ko <br/> naay bb gurl sa pikas room</h2>
//     </>
//     )
// }
// const Hibaya = () => {
//   return (
//     <>
//     <h2>Hello world</h2>
//     </>
//   )
// }

// const MainStyles = {
//   wrapper:{
//     backgroundColor:"green",
//     width:"100%",
//     height:120,
//     color: 'white',
//     textAlign: 'center',
//   },
//   h1:{
//     fontFamily:"Lucida Sans Calligraphy"
//   }
// }

// // export default App


//===================================================================================================================

// Introduction to props

// export default function App(){ // APP parent components

// const MyGreetings = (props) =>{ //MyGreeting child components
//   return(
// <div>
//   <h1>Hi! {props.name} Ohaha {props.event}</h1>
// </div>
//   );
// }

//   return(
//     <>
//       <div>
//         <MyGreetings 
//         name = "aljay"
//         event = "kalagkalag"
//         />
//       </div>

//     </>
//   );
// }

//=======================================================================================================================================================

//props using class component
// import React, {Component} from 'react';

// export default class App extends Component{

//   render(){
//     return(
//       <>
//       <MyGreetings 
//       name="Aljay" 
//       event="kalagkalag"
//       />
//       </>
//     );
//   }
// }
// class MyGreetings extends Component{
//     render(){
//       return(
//         <>
//         <div>
//           <h1>HI! {this.props.name} ma ngadto {this.props.event}?</h1>
//         </div>
//         </>
//       );
//     }
//   }



//=======================================================================================================================================

// export default function App() {
//   const Product = (props) => {
//     const { name, price, description, imageUrl, onAddToCart } = props;

//     return (
//       ♣
//         <img src={imageUrl} width="300px" height="200px" alt={name} />
//         <div className="product-info">
//           <div className="product-name">{name}</div>
//           <div className="product-description">{description}</div>
//           <p className="product-price">Price: ${price}</p>
          
//           <button 
//             onClick={onAddToCart} 
//             className="add-to-cart-button"
//           >
//             Add to cart
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (productName) => {
//     setCartItems([...cartItems, productName]);
//     alert(`You added ${productName} to the cart!`);
//   };

//   const handleClearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1 className="header">Kebs Gadgets Shop</h1>
//       {/* <button className="top-right-button">Button</button> */}

//       <div style={{  backgroundColor: 'white', border: '3px solid black', padding: '10px', margin: '10px' }}>
//         <Product
//           name="Lenovo"
//           price={200}
//           description="A powerful laptop for work and entertainment."
//           imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp_hxbq9cPIlerupmwRkObUGNZeQPqAFQ3YdFmUbHBVH3xDlGZwWzTiejGQf9p92X1OoY0lchsrqVPgyMH_ATE3I_0yKiuIDQAe7Xe6KURcga5E1dlhmxrnRVeWDs3kH59-wFbQ9tMm1ufF-gPLkhlUmIO-3cf2BEJ172ZmlkGOc4j077GRoZasUXm/s1920/wallpaper-laptop-hd.webp"
//           onAddToCart={() => handleAddToCart("Lenovo")}
//         />
//       </div>

//       <div style={{  backgroundColor: 'white', border: '3px solid black', padding: '10px', margin: '10px' }}>
//         <Product
//           name="Asus"
//           price={200}
//           description="A powerful laptop for work and entertainment."
//           imageUrl="https://images6.alphacoders.com/133/1338694.png"
//           onAddToCart={() => handleAddToCart("Asus")}
//         />
//       </div>

//       <div style={{  backgroundColor: 'white', border: '3px solid black', padding: '10px', margin: '10px' }}>
//         <Product
//           name="Acer"
//           price={200}
//           description="A powerful laptop for work and entertainment."
//           imageUrl="https://allthedifferences.com/wp-content/uploads/2022/05/yu-hai-ykI7BeSWgMo-unsplash-1250x834.jpg"
//           onAddToCart={() => handleAddToCart("Acer")}
//         />
//       </div>

//       <div style={{  backgroundColor: 'white', border: '3px solid black', padding: '10px', margin: '10px' }}>
//         <Product
//           name="Mac book"
//           price={200}
//           description="A powerful laptop for work and entertainment."
//           imageUrl="https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/06/Best-MacBook-1.jpg"
//           onAddToCart={() => handleAddToCart("Mac book")}
//         />
//       </div>

//       <div className='add-tocart'>
//         <h2 style={{color: 'black'}}>Your Cart</h2>
//         <ul>
//         {cartItems.map((item, index) => (
//             <li key={index} className="cart-item">{item}</li> 
//           ))}
//         </ul>
//         <button onClick={handleClearCart}>Clear Cart</button>
//       </div>
//     </div>
//   );
// }


//===============================================================================================================================



// export default function App() {

//   const age =16;

//   return (
//     <>
//     <p>Age :{age}</p>
//     {age >= 18 && age <= 25 ? "SK and national" : age <= 17 ? "SK" : "Natinal" }

//     </>
//   );
// }
// Create a react Program using props And Ternary operator that would test if the innputted grade uis high grade, a good grade, average grade and a fail grade
//90 to 100 = high
//80 to 90 = good grade
//75 to 80 average grade
//75 bellow = fail grade

// import React from 'react';

// const GradeChecker = ({ grade }) => {
//   let gradeStatus =
//     grade >= 90
//       ? 'High grade'
//       : grade >= 80
//       ? 'Good grade'
//       : grade >= 75
//       ? 'Average grade'
//       : 'Fail grade';

//   return <div>{`Grade ${grade} is ${gradeStatus}`}</div>;
// };

// const App = () => {
//   return (
//     <div>
//       <GradeChecker grade={95} />
//       <GradeChecker grade={85} />
//       <GradeChecker grade={78} />
//       <GradeChecker grade={70} />
//     </div>
//   );
// };

// export default App;


//--------------------------------------------------------------------------------------------------------------

// const Grade = ({ grade, hMessage, gMessage, aMessage, uMessage }) => { 
//   let message;

// {

// grade > 90 && grade <= 100 ? message = hMessage:
// grade >= 80 && grade < 90 ? message = gMessage:
// grade > 75 && grade < 80 ? message = aMessage:
// message = uMessage;

// }

// return (

// <div>

//     <p style={{color:"red", fontSize: "30px"}}>Grade: {grade}</p>
//   <p style={{color:"red", fontSize: "30px"}}>Result: {message}</p>

// </div>
// );

// };

// export default function App() {

// return (
// <>
// <Grade

// grade={74}
// hMessage="You got a high grade!"

// gMessage="You got a good grade."

// aMessage="You got an average grade."
// uMessage="Failed Grade"
// />
// </>
// );

// }
//------------------------------------------------------------------------------------------------------------------------

// const Grade = ({ grade, hMessage, gMessage, aMessage, uMessage }) => { 
//   let message;

//   if (grade > 90 && grade <= 100) {
//     message = hMessage;
//   } else if (grade >= 80 && grade < 90) {
//     message = gMessage;
//   } else if (grade > 75 && grade <= 80) {
//     message = aMessage;
//   } else {
//     message = uMessage;
//   }

//   return (
//     <div>
//       <p style={{color:"red", fontSize: "30px"}}>Grade: {grade}</p>
//       <p style={{color:"red", fontSize: "30px"}}>Result: {message}</p>
//     </div>
//   );
// };
  // ==============================================================================================================
// export default function App() {
//   const userGrade = 75; // User input for grade

//   return (
//     <>
//       <Grade
//         grade={userGrade}
//         hMessage="You got a high grade!"
//         gMessage="You got a good grade."
//         aMessage="You got an average grade."
//         uMessage="Failed Grade"
//       />
//     </>
//   );
// }
// Addition of 10 and 10:
// Subtraction of 10 and 10:
// Product of 10 and 10 is:
// Quotient of 10 and 10 is :
//============================================================================================================================================
// export default function App() {
//     const Product = (props) => {
//       const { num1, num2} = props;
//    return (
//     const num1 = 10;
//     const num2 = 10;

//     return (
//       <div>
//         <p>Addition of {num1} and {num2}: {num1 + num2}</p>
//         <p>Subtraction of {num1} and {num2}: {num1 - num2}</p>
//         <p>Product of {num1} and {num2} is: {num1 * num2}</p>
//         <p>Quotient of {num1} and {num2} is: {num1 / num2}</p>
//       </div>
//     );
//   }
// }


//    );
//    };


//___________________________________________________________________________________________________________________
// class Calculator extends React.Component {
//   render() {
//     const num1 = 10;
//     const num2 = 10;

//     return (
//       <div>
//         <p>Addition of {num1} and {num2}: {num1 + num2}</p>
//         <p>Subtraction of {num1} and {num2}: {num1 - num2}</p>
//         <p>Product of {num1} and {num2} is: {num1 * num2}</p>
//         <p>Quotient of {num1} and {num2} is: {num1 / num2}</p>
//       </div>
//     );
//   }
// }

// export default Calculator;




// const Calculator = (props) => {
//   const { num1 = 10, num2 =10 } = props;

//   return (
//     <div>
//       <p>Addition of {num1} and {num2}: {num1 + num2}</p>
//       <p>Subtraction of {num1} and {num2}: {num1 - num2}</p>
//       <p>Product of {num1} and {num2} is: {num1 * num2}</p>
//       <p>Quotient of {num1} and {num2} is: {num1 / num2}</p>
//     </div>
//   );
// };

// export default Calculator;

//==================================================================================================================

// const Cal = (props) => {
//   const { num1 = 10, num2 = 10 , cal = "Addition", cals = "Subtraction" , calss= "Product" , calsss= "Quotient" } = props;

//   const numStyle = {
//     color: 'blue',
//   };

//   const operationStyle = {
//     color: 'red',
//   };

//   return (
//     <div style={{color:"blue"}}>
//       <p><span style={operationStyle}>{cal}</span> of {num1} and {num2}: {num1 + num2}</p>
//       <p><span style={operationStyle}>{cals}</span> of {num1} and {num2}: {num1 - num2}</p>
//       <p><span style={operationStyle}>{calss}</span> of {num1} and {num2} is: {num1 * num2}</p>
//       <p><span style={operationStyle}>{calsss}</span> of {num1} and {num2} is: {num1 / num2}</p>
//     </div>
//   );
// };

// export default Cal;


//============================================================================================================



// const Cal = (props) => {
//   const { num1, num2, cal, cals, calss, calsss } = props;

//   const numStyle = {
//     color: 'red',
//   };

//   const operationStyle = {
//     color: 'blue',
//   };

//   return (
//     <div>
//       <p>
//         <span style={numStyle}>{cal}</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 + num2}</span>
//       </p>
//       <p>
//         <span style={numStyle}>{cals}</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 - num2}</span>
//       </p>
//       <p>
//         <span style={numStyle}>{calss}</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 * num2}</span>
//       </p>
//       <p>
//         <span style={numStyle}>{calsss}</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 / num2}</span>
//       </p>
//     </div>
//   );
// };

// const Calculator = () => {
//   return (
//     <div className="product-container">
//       <Cal
//         num1={10}
//         num2={10}
//         cal="Addition"
//         cals="Subtraction"
//         calss="Product"
//         calsss="Quotient"
//       />
//     </div>
//   );
// };

// export default Calculator;

//=========================================================================================================================================================================


//user input the num1 and num2

// const Calculator = () => {
//   const [num1, setNum1] = useState('0');
//   const [num2, setNum2] = useState('0');

//   const handleNum1Change = (event) => {
//     setNum1(event.target.value);
//   };

//   const handleNum2Change = (event) => {
//     setNum2(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // You can perform any calculations here if needed
//   };

//   return (
//     <div className="product-container">
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Num1:
//           <input type="number" value={num1} onChange={handleNum1Change} />
//         </label>
//         <br />
//         <label>
//           Num2:
//           <input type="number" value={num2} onChange={handleNum2Change} />
//         </label>
//         <br />
//         <button type="submit">Calculate</button>
//       </form>
//       <Cal num1={parseInt(num1)} num2={parseInt(num2)} />
//     </div>
//   );
// };

// const Cal = ({ num1, num2 }) => {
//   const numStyle = {
//     color: 'red',
//   };

//   const operationStyle = {
//     color: 'blue',
//   };

//   return (
//     <div>
//       <p>
//         <span style={numStyle}>Addition</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 + num2}</span>
//       </p>
//       <p>
//         <span style={numStyle}>Subtraction</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 - num2}</span>
//       </p>
//       <p>
//         <span style={numStyle}>Product</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 * num2}</span>
//       </p>
//       <p>
//         <span style={numStyle}>Quotient</span>
//         <span style={operationStyle}> of</span> {num1}{' '}
//         <span style={operationStyle}> and </span> {num2}{' '}
//         <span style={operationStyle}> is :</span>{' '}
//         <span style={numStyle}>{num1 / num2}</span>
//       </p>
//     </div>
//   );
// };

// export default Calculator;


//=================================================================================================================================
//  import React from 'react';
// export default function App() {

//   const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'best mathematician 1',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'best chemist 1',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'best physicist 1',
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//     accomplishment: 'best chemist 2',
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//     accomplishment: 'best astrophysicist 1',
//   }];


//   const chemists = people.filter(person =>
//     person.profession === 'chemist' || person.profession === 'physicist' 
//   );
  
//   if(chemists.length === 0 ){
//     console.log("No chemists found");
//   }

//   // const listItems = chemists.map(person =>
//   //   <li>
//   //      <p>
//   //        <b>{person.name}:</b>
//   //        {' ' + person.profession + ' '}
//   //        known for {person.accomplishment}
//   //      </p>
//   //   </li>
//   // );
//   return (
//     <>
//     {chemists.map(person =>
//       <li key={person.id}>
//       My name si : {person.name}, possition of: {person.profession}<br/>
//       </li>

//       )}
//     </>
  
//     );
//   }

//   return (
//      <> 
//    <ul>{listItems}</ul>
//   </>

//   );
// }
//===================================================================================================================
// export default function App(){
//   const Okey =() => {
//     const x = 10;
//     const y = 10;
    
//     alert(x+y);

//   }
//   return(
//     <>
//     <button onClick={Okey}>click here</button>
//       </>
//   )
// }


// export default class App extends React.Component{
//  constructor() {
//     super();
//     this.state = {color: "red"};
// }
//   render(){
//       return(
//       <>
//       <h1 style={this.state}>hello</h1>
//       </>
//     );
//   }
// }

//=============================================================================================================================================================================

// import React, { useState } from 'react';
// export default function App(){

//   const [age, SetAge] = useState(17);
//   const [index, setIndex] = useState(1);

//     const handleAgeOnClick = () =>{
//     SetAge ("aljay" + 21 + "hello");
//     }
//     const handleIndex = () =>{
//       setIndex(index + 1);
//     }
//   return(
//     <>
//     <h1>{age}</h1>
//     <button onClick={handleAgeOnClick}>click change</button>
//     <h1>{index}</h1>
//     <button onClick={handleIndex}>click </button>
//     </>
//   );
// }
//================================================================================================================================
// import React, { useState } from 'react';
// export default function App(){

//   const [age, SetAge] = useState(100);
//   const [index, setIndex] = useState(1);

//     const handleAgeOnClick = () =>{
//     SetAge (age - 1);
//     }
//     const handleIndex = () =>{
//       setIndex(index + 1);
//       SetAge (age - 1);
//     }
//   return(
//     <>
//     <h1>{age}</h1>
//     <button onClick={handleIndex}>click change</button>
//     <h1>{index}</h1>
//     </>
//   );
// }
//=============================================================================================================================================================================
// import React, {useState} from 'react';

// export default function App(){
//     const [age, setAge] = useState('');

//     const handleInputChange =(e) =>{
//       setAge(e.target.value);
//     }


//   return(
//     <>
//     <form action="">
//       Enter Age: <input type="number" value={age} onChange={handleInputChange}></input>

//       </form>
//       <h1>your age: {age}</h1>
//     </>
//   );
// }
//=============================================================================================================================================================================
// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [age, setAge] = useState('');
//     const [showAge, setShowAge] = useState(false);

//     const handleInput = () => {
//         setAge(inputV);
//         setShowAge(true);
//     }

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }

//     return (
//         <>
        
//             <form action="">
//                 Enter Age: <input type="number" value={inputV} onChange={handleChange}></input>
//                  <br />
//                   <button type="button" onClick={handleInput}>click change</button>
//             <br />
//             Your age :{showAge && <h1> {age}</h1>}
           
//             </form>
//         </>
//     );
// }


//=============================================================================================================================================================================

// import React, { useState } from 'react';
// const Calculator = () => {
//   const [num1, setNum1] = useState('0');
//   const [num2, setNum2] = useState('0');

//   const handleNum1Change = (event) => {
//     setNum1(event.target.value);
//   };

//   const handleNum2Change = (event) => {
//     setNum2(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // You can perform any calculations here if needed
//   };

//   return (
//     <div className="product-container">
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Num1:
//           <input type="number" value={num1} onChange={handleNum1Change} />
//         </label>
//         <br />
//         <label>
//           Num2:
//           <input type="number" value={num2} onChange={handleNum2Change} />
//         </label>
//         <br />
//         <button type="submit">Calculate</button>
//       </form>
//       <Cal num1={parseInt(num1)} num2={parseInt(num2)} />
//     </div>
//   );
// };

// const Cal = ({ num1, num2 }) => {
//   const numStyle = {
//     color: 'red',
//   };

//   const operationStyle = {
//     color: 'blue',
//   };

//   return (
//     <div>
//       <p>
//         <span style={numStyle}>Addition</span>

//       </p>

//     </div>
//   );
// };

// export default Calculator;

//=============================================================================================================================================================================


// import React, { useState } from 'react';

// export default function App(){
//     const[num1, setNum1] = useState('');
//     const[num2, setNum2] = useState('');
//     const[result, setResult] = useState('');


//     const handleNum1 = (e) =>{
//         setNum1(e.target.value);
//     }
//     const handleNum2 = (e) =>{
//         setNum2(e.target.value);
//     }
//     const handleSumOnClick = (e) =>{
//         e.preventDefault();
//         const sum = parseFloat(num1) + parseFloat(num2);
//         setResult(sum);
//     }
//     const handleSubOnClick = (e) =>{
//         e.preventDefault();
//         const sub = parseFloat(num1) - parseFloat(num2);
//         setResult(sub);
//     }
//     const handleMulOnClick = (e) =>{
//         e.preventDefault();
//         const mul = parseFloat(num1) * parseFloat(num2);
//         setResult(mul);
//     }
//     const handledivOnClick = (e) =>{
//         e.preventDefault();
//         const div = parseFloat(num1) / parseFloat(num2);
//         setResult(div);
//     }
    
//     return (
//         <>
//         <div>Calculator</div>
//         <p>Enter num 1: <input type="number" value={num1} onChange={handleNum1}/></p>
//         <p>Enter num 2: <input type="number" value={num2} onChange={handleNum2}/></p>

//         <button onClick={handleSumOnClick}>+</button>
//         <button onClick={handleSubOnClick}>-</button>
//         <button onClick={handleMulOnClick}>*</button>
//         <button onClick={handledivOnClick}>/</button>
//         <br/>
//         <h1> sum: {result}</h1>
//         </>
//     );
// }

//=============================================================================================================================================================================


// user imput using switch


// import React, { useState } from 'react';

// export default function App(){
//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');
//     const [result, setResult] = useState('');

//     const handleNum1 = (e) => {
//         setNum1(e.target.value);
//     }

//     const handleNum2 = (e) => {
//         setNum2(e.target.value);
//     }

//     const handleOperatorOnClick = (operator) => {
//         const number1 = parseFloat(num1);
//         const number2 = parseFloat(num2);

//         switch (operator) {
//             case '+':
//                 setResult(number1 + number2);
//                 break;
//             case '-':
//                 setResult(number1 - number2);
//                 break;
//             case '*':
//                 setResult(number1 * number2);
//                 break;
//             case '/':
//                 setResult(number1 / number2);
//                 break;
//             default:
//                 setResult('');
//         }
//     }

//     return (
//         <>
//             <div>Calculator</div>
//             <p>Enter num 1: <input type="number" value={num1} onChange={handleNum1} /></p>
//             <p>Enter num 2: <input type="number" value={num2} onChange={handleNum2} /></p>

//             <button onClick={() => handleOperatorOnClick('+')}>+</button>
//             <button onClick={() => handleOperatorOnClick('-')}>-</button>
//             <button onClick={() => handleOperatorOnClick('*')}>*</button>
//             <button onClick={() => handleOperatorOnClick('/')}>/</button>
//             <br />
//             <h1>Result: {result}</h1>
//         </>
//     );
// }

//=============================================================================================================================================================================


// import React, { useState } from 'react';

// export default function App(){
//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');
//     const [result, setResult] = useState('');
//     const [operator, setOperator] = useState('+');

//     const handleNum1 = (e) => {
//         setNum1(e.target.value);
//     }

//     const handleNum2 = (e) => {
//         setNum2(e.target.value);
//     }

//     const handleOperatorChange = (e) => {
//         setOperator(e.target.value);
//     }

//     const handleCalculate = () => {
//         const number1 = parseFloat(num1);
//         const number2 = parseFloat(num2);

//         switch (operator) {
//             case '+':
//                 setResult(number1 + number2);
//                 break;
//             case '-':
//                 setResult(number1 - number2);
//                 break;
//             case '*':
//                 setResult(number1 * number2);
//                 break;
//             case '/':
//                 setResult(number1 / number2);
//                 break;
//             default:
//                 setResult('');
//         }
//     }

//     return (
//         <>
//             <div>Calculator</div>
//             <p>Enter num 1: <input type="number" value={num1} onChange={handleNum1} /></p>
//             <p>Enter num 2: <input type="number" value={num2} onChange={handleNum2} /></p>

//             <select value={operator} onChange={handleOperatorChange}>
//                 <option value="+">+</option>
//                 <option value="-">-</option>
//                 <option value="*">*</option>
//                 <option value="/">/</option>
//             </select>
            
//             <button onClick={handleCalculate}>=</button>
//             <br />
//             <h1>Result: {result}</h1>
//         </>
//     );
// }
//=================================================================================================================================

// import React, { useState } from 'react';

//  function App() {
//     // const [inputV, setInputValue] = useState('palban');

//     // const [showAge, setShowAge] = useState(false);
//     const [showMore, setShowMore] = useState(false);
//     // const handleInput = () => {
//     //     setAge(inputV);
//     //     setShowAge(true);
//     // }
// //  let name = "palban"

// function handleMoreClick() {
//     setShowMore(!showMore);
// };
//     // const handleMoreClick = () => {
//     //     setShowMore(!showMore)
//     //   };
//     return (
//         <>
//         <div>
//             {/* <form action=""> */}
//   {/* <input type="number"  onChange={handleChange}></input> */}
//                  <br />
                 
//                   {/* <button type="button" onClick={handleInput}>click change</button>
//             <br /> */}
//             {showMore && <h1>jelbert hibaya</h1>}
//             <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>

// </div>
            
//         </>
//     );
// }
// export default App;


//========================================================================================================================================

// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [age, setAge] = useState('');
//     const [showAge, setShowAge] = useState(false);

//     const handleInput = () => {
//         setAge(inputV);
//         setShowAge(true);
//     }

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }

//     return (
//         <>
        
//             <form action="">
//                 Enter name: <input value={inputV} onChange={handleChange}></input>
//                  <br />    
//                  Your name :{showAge && <h1> {age}</h1>}
//                  <br/>
                 
//                   <button type="button" onClick={handleInput}>show</button>
//             <br />
        
           
//             </form>
//         </>
//     );
// }

// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [showAge, setShowAge] = useState(false);

//     const handleInput = () => {
//         if (showAge) {
//             setAge(inputV);
//         }
//         setShowAge(!showAge);
//     }

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }

//     return (
//         <>
//             <form action="">
//                 Enter name: <input value={inputV} onChange={handleChange}></input>
//                 <br />
//                 {showAge && <h1>Your name: {age}</h1>}
//                 <button type="button" onClick={handleInput}>
//                     {showAge ? 'Hide' : 'Show'}
//                 </button>
//             </form>
//         </>
//     );
// }
//===========================================================================================================================================================================================
// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [showAge, setShowAge] = useState(false);

//     const handleInput = () => {
//         if (showAge) {
//             setInputValue(inputV);
//         }
//         setShowAge(!showAge);
//     }

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }

//     return (
//         <>
//             <form>
//                 Enter name: <input value={inputV} onChange={handleChange} />
//                 <br />
//                 {showAge && <h1>Your name: {inputV}</h1>}
//                 <button type="button" onClick={handleInput}>
//                     {showAge ? 'Hide' : 'Show'}
//                 </button>
//             </form>
//         </>
//     );
// }
//===========================================================================================================================================================================================
// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [todos, setTodos] = useState([]);

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }

//     const handleAddTodo = () => {
//         setTodos([...todos, { text: inputV, crossedOut: false }]);
//         setInputValue('');
//     }

//     const handleCrossOut = (index) => {
//         const updatedTodos = [...todos];
//         updatedTodos[index] = {
//             ...updatedTodos[index],
//             crossedOut: !updatedTodos[index].crossedOut
//         };
//         setTodos(updatedTodos);
//     }

//     return (
//         <>
//             <form>
//                 <h1><marquee>My Task</marquee></h1>
//                 Enter todo: <input value={inputV} onChange={handleChange} />
//                 <button className="button" type="button" onClick={handleAddTodo}>Add Todo List</button>
//             </form>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index} className="todo">
//                         <button className="button" onClick={() => handleCrossOut(index)}>
//                             {todo.crossedOut ? 'Undo' : 'Done'}
//                         </button>
//                         {todo.crossedOut ? <del>{todo.text}</del> : todo.text}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }
//===========================================================================================================================================================================================

// import React, { useState } from 'react';


// export default function App() {
//     const [hovered, setHovered] = useState(false);

//     const handleHover = () => {
//         setHovered(!hovered);
//     };

//     return (
//         <div className="container">
//             <button className="yes-button">Yes</button>
//             <button
//                 className={hovered ? "no-button hovered" : "no-button"}
//                 onMouseEnter={handleHover}
//                 onMouseLeave={handleHover}
//             >
//                 No
//             </button>
//         </div>
//     );
// }
//===========================================================================================================================================================================================
// unli Email
// import React, { useState } from 'react';

// export default function UsernameChecker() {
//   const [username, setUsername] = useState('');
//   const [isValid, setIsValid] = useState(null);

//   const checkUsername = () => {

//     const validUsernames = ['jelbert','Jelbert'];

//     if (validUsernames.includes(username)) {
//       setIsValid(true);
//       alert('Succesful Login');
//     } else {
//       setIsValid(false);
//       alert('Incorrect Email');
//     }
//   };

//   return (
//     <div>
//         <h2>Put the correct email</h2>
//       <p>Email : <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       /></p>
//       <p>Password : <input></input></p>
//       <br />
//       <button onClick={checkUsername}>Log in</button>
//       {isValid === true && <h1>Sakto ka</h1>}
//       {isValid === false && <h1>Mali</h1>}
//     </div>
//   );
// }
//===========================================================================================================================================================================================
//Email and pass
// import React, { useState } from 'react';

// export default function UsernameChecker() {
//   const [username, setUsername] = useState('');
//   const [pass, setPass] = useState('');
//   const [isValid, setIsValid] = useState(null);

//   const checkUsername = () => {
//     const validUsernames = ['jelbert'];
//     const validPassword = '123456789'; // Change to string

//     if (validUsernames.includes(username) && pass === validPassword) { // Use && instead of ,
//       setIsValid(true);
//       alert('Successfully Logged in'); // Corrected spelling
//     } else {
//       setIsValid(false);
//       alert('Incorrect Email or Password'); // Updated alert message
//     }
//   };

//   return (
//     <div>
//       <h2>Enter your email and password</h2> {/* Updated heading */}
//       <p>Email : <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       /></p>
//       <p>Password : <input
//         type="password" // Changed to password type for security
//         value={pass}
//         onChange={(e) => setPass(e.target.value)} // Corrected function name
//       /></p>
//       <br />
//       <button onClick={checkUsername}>Log in</button>
//       {isValid === true && <h1>Correct</h1>} {/* Updated text */}
//       {isValid === false && <h1>Incorrect</h1>} {/* Updated text */}
//     </div>
//   );
// }
//===========================================================================================================================================================================================

// import React, { useState } from 'react';

// export default function UsernameChecker() {
//   const [username, setUsername] = useState('');
//   const [isValid, setIsValid] = useState(null);

//   const checkUsername = () => {

//     const validUsernames = 'jelbert';

//     if (username === validUsernames) {
//       setIsValid(true);
//       alert('Succesful Login');
//     } else {
//       setIsValid(false);
//       alert('Incorrect Email');
//     }
//   };

//   return (
//     <div>
//         <h2>Put the correct email</h2>
//       <p>Email : <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       /></p>
//       <p>Password : <input></input></p>
//       <br />
//       <button onClick={checkUsername}>Log in</button>
//       {isValid === true && <h1>Sakto ka</h1>}
//       {isValid === false && <h1>Mali</h1>}
//     </div>
//   );
// }

//===========================================================================================================================================================================================
// import React, { useState } from 'react';

// export default function UsernameChecker() {
//   const [username, setUsername] = useState('');
//   const [pass, setPass] = useState('');
//   const [isValid, setIsValid] = useState(null);

//   const checkUsername = () => {
//     const validUsernames = 'j';
//     const validPassword = '123'; // Change to string

//     if (username === validUsernames && pass === validPassword) { // Use && instead of , pwde mag === or gamit ra pd include
//       setIsValid(true);
//       alert('Successfully Logged in'); // Corrected spelling
//     } else {
//       setIsValid(false);
//       alert('Incorrect Email or Password'); // Updated alert message
//     }
//   };

//   return (
//     <div>
//       <h2>Enter your email and password</h2> {/* Updated heading */}
//       <p>Email : <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       /></p>
//       <p>Password : <input
//         type="password" // Changed to password type for security
//         value={pass}
//         onChange={(e) => setPass(e.target.value)} // Corrected function name
//       /></p>
//       <br />
//       <button onClick={checkUsername}>Log in</button>
//       {isValid === true && <h1>Correct</h1>} {/* Updated text */}
//       {isValid === false && <h1>Incorrect</h1>} {/* Updated text */}
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function UsernameChecker() {
//   const [username, setUsername] = useState('');
//   const [pass, setPass] = useState('');
//   const [isValid, setIsValid] = useState(false);
//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');
//     const[result, setResult] = useState('');
//     const [show, setShow] = useState(false);

//   const checkUsername = () => {
//     const validUsernames = 'j';
//     const validPassword = '123';

//     if (username === validUsernames && pass === validPassword) {
//       setIsValid(true);
//       alert('Successfully Logged in');
      
//     } else {
//       setIsValid(false);
//       alert('Incorrect Email or Password');
//     }
//   };
  
//     const handleNum1 = (e) => {
//         setNum1(e.target.value);
//     }

//     const handleNum2 = (e) => {
//         setNum2(e.target.value);
//     }

//     const handleOperatorChange = (e) => {
//         setOperator(e.target.value);
//     }
//     const handleCalculate = () => {
//         const number1 = parseFloat(num1);
//         const number2 = parseFloat(num2);

//         switch (operator) {
//             case '+':
//                 setResult(number1 + number2);
//                 break;
//             case '-':
//                 setResult(number1 - number2);
//                 break;
//             case '*':
//                 setResult(number1 * number2);
//                 break;
//             case '/':
//                 setResult(number1 / number2);
//                 break;
//             default:
//                 setResult('');
//         }
//     }
//   return (
//     <div>
//       {isValid ? ( <form action="">
//       <h2>Enter your email and password</h2>
//       <p>Email : <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       /></p>
//       <p>Password : <input
//         type="password"
//         value={pass}
//         onChange={(e) => setPass(e.target.value)}
//       /></p>

//       <button onClick={checkUsername}>Log in</button>
//       </form> 
//       ) : (

//         <h2>Add to Numbers</h2>
//           <p>Enter num 1: <input type="number" value={num1} onChange={handleNum1} /></p>
//           <p>Enter num 2: <input type="number" value={num2} onChange={handleNum2} /></p>

//             <select value={operator} onChange={handleOperatorChange}>
//                <option value="+">+</option>
//                <option value="-">-</option>
//                 <option value="*">*</option>
//                <option value="/">/</option>
//             </select>
            
//           <button onClick={handleCalculate}>=</button>
//            <br />    
//            </div>
//             <h1>Result: {result}</h1>  ) } 


//   );
// }

//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');
//     const [result, setResult] = useState('');
//     const [operator, setOperator] = useState('+');

//     const handleNum1 = (e) => {
//         setNum1(e.target.value);
//     }

//     const handleNum2 = (e) => {
//         setNum2(e.target.value);
//     }

//     const handleOperatorChange = (e) => {
//         setOperator(e.target.value);
//     }

//     const handleCalculate = () => {
//         const number1 = parseFloat(num1);
//         const number2 = parseFloat(num2);

//         switch (operator) {
//             case '+':
//                 setResult(number1 + number2);
//                 break;
//             case '-':
//                 setResult(number1 - number2);
//                 break;
//             case '*':
//                 setResult(number1 * number2);
//                 break;
//             case '/':
//                 setResult(number1 / number2);
//                 break;
//             default:
//                 setResult('');
//         }
//     }

//     return (
//         <>
//             <div>Calculator</div>
//             <p>Enter num 1: <input type="number" value={num1} onChange={handleNum1} /></p>
//             <p>Enter num 2: <input type="number" value={num2} onChange={handleNum2} /></p>

//             <select value={operator} onChange={handleOperatorChange}>
//                 <option value="+">+</option>
//                 <option value="-">-</option>
//                 <option value="*">*</option>
//                 <option value="/">/</option>
//             </select>
            
//             <button onClick={handleCalculate}>=</button>
//             <br />
//             <h1>Result: {result}</h1>
//         </>
//     );
// }

//===========================================================================================================================================================

// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [showAge, setShowAge] = useState(true);
//   const [username, setUsername] = useState('');
//   const [pass, setPass] = useState('');
//   const [isValid, setIsValid] = useState(false);
//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');
//     const[result, setResult] = useState('');
//     const [show, setShow] = useState(false);

//     const handleInput = () => {
//             const validUsernames = 'j';
//             const validPassword = '123';

//             if (username === validUsernames && pass === validPassword) {
            
//             alert('Successfully Logged in');
//             setIsValid(true);
//         }
//         setShowAge(!showAge);
//     }

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }
//     const handleNum1 = (e) => {
//         setNum1(e.target.value);
//     }

//     const handleNum2 = (e) => {
//         setNum2(e.target.value);
//     }

//     const handleOperatorChange = (e) => {
//         setOperator(e.target.value);
//     }
//     const handleCalculate = () => {
//         const number1 = parseFloat(num1);
//         const number2 = parseFloat(num2);

//         switch (operator) {
//             case '+':
//                 setResult(number1 + number2);
//                 break;
//             case '-':
//                 setResult(number1 - number2);
//                 break;
//             case '*':
//                 setResult(number1 * number2);
//                 break;
//             case '/':
//                 setResult(number1 / number2);
//                 break;
//             default:
//                 setResult('');
//         }
//     }
//     return (
//         <>
//         {setIsValid ? (
//            <form action="">
//             <h2>Enter your email and password</h2>
//             <p>Email : <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   /></p>
//                   <p>Password : <input
//                     type="password"
//                     value={pass}
//                     onChange={(e) => setPass(e.target.value)}
//                   /></p>
            
//                   <button onClick={handleInput}>Log in</button>
//                   </form> 
//             //     Enter name: <input value={inputV} onChange={handleChange} />
//             //     <br />
//             //     {showAge && <h1>Your name: {inputV}</h1>}
//             //     <button type="button" onClick={handleInput}>
                    
//             //     </button>
//             // </form> 
//             ) : (
//               <div>
//                 <div>Calculator</div>
//             <p>Enter num 1: <input type="number" value={num1} onChange={handleNum1} /></p>
//             <p>Enter num 2: <input type="number" value={num2} onChange={handleNum2} /></p>

//              <select value={operator} onChange={handleOperatorChange}>
//                  <option value="+">+</option>
//                 <option value="-">-</option>
//                  <option value="*">*</option>
//                  <option value="/">/</option>
//             </select>
            
//             <button onClick={handleCalculate}>=</button>
//            <br />
//             <h1>Result: {result}</h1>
//               </div>
              
//             )}
//         </>
//     );
// }


// import React, { useState } from 'react';

// function Panel({ title, children }) {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <>
//           <p>{children}</p>
//           <button onClick={() => setIsActive(false)}>Hide</button>
//         </>
//       ) : (
//         <button onClick={() => setIsActive(true)}>Show</button>
//       )}
//     </section>
//   );
// }

// export default function Accordion() {
//   return (
//     <>
//       <h2>Mark Vincent Palban</h2>
//       <Panel title="About Me">
//         I'm Mark Vincent Palban, a very handsome man. I'm proud to say that I'm living simple life here on earth
        
//       </Panel>
//       <Panel title="Service">
//         <ul>
//           <li>web development</li>
//           <li>Tabulation System Developer</li>
//           <li>lover boy</li>
//         </ul>
//       </Panel>
//     </>
//   );
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [operator, setOperator] = useState('');
//   const [result, setResult] = useState(null);

//   const handleInput1 = (e) => setInput1(e.target.value);
//   const handleInput2 = (e) => setInput2(e.target.value);

//   const handleOperator = (op) => setOperator(op);

//   const calculateResult = () => {
//     const num1 = parseFloat(input1);
//     const num2 = parseFloat(input2);

//     if (isNaN(num1) || isNaN(num2)) {
//       setResult('Invalid input');
//       return;
//     }

//     let calcResult = null;
//     switch (operator) {
//       case '+':
//         calcResult = num1 + num2;
//         break;
//       case '-':
//         calcResult = num1 - num2;
//         break;
//       case '*':
//         calcResult = num1 * num2;
//         break;
//       case '/':
//         calcResult = num1 / num2;
//         break;
//       default:
//         calcResult = 'Invalid operator';
//     }

//     setResult(calcResult);
//   };

//   const clear = () => {
//     setInput1('');
//     setInput2('');
//     setOperator('');
//     setResult(null);
//   };

//   return (
//     <div className="calculator-container">
//       <Calculator 
//         input1={input1} 
//         input2={input2} 
//         operator={operator} 
//         onInput1Change={handleInput1} 
//         onInput2Change={handleInput2} 
//         onOperatorChange={handleOperator} 
//         onCalculate={calculateResult} 
//       />
//       <Display result={result} />
//       <ClearButton onClear={clear} />
//     </div>
//   );
// }

// function Calculator({
//   input1,
//   input2,
//   operator,
//   onInput1Change,
//   onInput2Change,
//   onOperatorChange,
//   onCalculate,
// }) {
//   return (
//     <div className="calculator">
//       <p>Enter Number 1:</p>
//       <input type="number" onChange={onInput1Change} value={input1} />
//       <p>Enter Number 2:</p>
//       <input type="number" onChange={onInput2Change} value={input2} />

//       <div className="operators">
//         <button onClick={() => onOperatorChange('+')}>+</button>
//         <button onClick={() => onOperatorChange('-')}>-</button>
//         <button onClick={() => onOperatorChange('*')}>*</button>
//         <button onClick={() => onOperatorChange('/')}>/</button>
//       </div>

//       <button onClick={onCalculate}>Calculate</button>
//     </div>
//   );
// }

// function Display({ result }) {
//   return (
//     <div className="display">
//       {result !== null && <p>Result: {result}</p>}
//     </div>
//   );
// }

// function ClearButton({ onClear }) {
//   return (
//     <div className="clear">
//       <button onClick={onClear}>Clear</button>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';

// export default function App() {
//     const [inputV, setInputValue] = useState('');
//     const [showAge, setShowAge] = useState(false);

//     const handleInput = () => {
//         if (showAge) {
//             setInputValue(inputV);
//         }
//         setShowAge(!showAge);
//     }

//     const handleChange = (e) => {
//         setInputValue(e.target.value);
//     }

//     return (
//         <>
//             <form>
//                 Enter name: <input value={inputV} onChange={handleChange} />
//                 <br />
//                 {showAge && <h1>Your name: {inputV}</h1>}
//                 <button type="button" onClick={handleInput}>
//                     {showAge ? 'Hide' : 'Show'}
//                 </button>
//             </form>
//         </>
//     );
// }

//-----------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import './App.css';
// const Login = () => {
//   const [num1, setNum1 ] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     if (username === 'user' && password === 'pass') {
//       setIsLoggedIn(true);
//       console.log('Logged in successfully');
//       alert("Welcome" );
//     } else {
//       console.log('Invalid credentials');
//       alert("Invalid" );
//     }

//   };



//   const handleNum1 = (e) =>{
//    setNum1(e.target.value);
//     alert("Invalid" );
//   }
//   const handleNum2 = (e) =>{
//   setNum2(e.target.value);
//    }

//    const handleSumOnClick =(e) =>{
//     e.preventDefault();
//     const sum = parseFloat(num1) + parseFloat(num2);
//     setResult(sum);
//    }

//    const handleMinusOnClick =(e) =>{
//     e.preventDefault();
//     const minus = parseFloat(num1) - parseFloat(num2);
//     setResult(minus);
//    }

//    const handleMulOnClick =(e) =>{
//     e.preventDefault();
//     const mul = parseFloat(num1) * parseFloat(num2);
//     setResult(mul);
//    }

//    const handleDivOnClick =(e) =>{
//     e.preventDefault();
//     const div = parseFloat(num1) / parseFloat(num2);
//     setResult(div);
//    }

    
  

//   return (
//     <div>
//       {!isLoggedIn ? (
//         <form onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <p>MATHEMATICS
//           <div>Calculator</div>
//     <p> Enter Num 1: <input type='number' value={num1} onChange={handleNum1}></input></p>
//     <p> Enter Num 2: <input type='number' value={num2} onChange={handleNum2}></input></p>
  

      
//     <h1>SELECT OPERATORS</h1>
//     <button onClick={handleSumOnClick}>Add</button>
//     <button onClick={handleMinusOnClick}>Minus</button>
//     <button onClick={handleMulOnClick}>Multiply</button>
//     <button onClick={handleDivOnClick}>Divide</button>
    
//     <h1>Result: {result}</h1>

//         </p>
        
//       )}
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input1, setInput1] = useState('');
//   const [result, setResult] = useState(null);

//   const handleInput1 = (e) => setInput1(e.target.value);


//   const calculateResult = () => {
//     const num1 = parseFloat(input1);
// {
//     if (num1 <= 17) {
//       setResult('Under Age');

//     else if (num1 >=18) { 
//       setResult('Under Age');
//     return;
//     }
   

//     let calcResult = null;

//     setResult(calcResult);
//   };

//   const clear = () => {
//     setInput1('');

//     setResult(null);
//   };

//   return (
//     <div className="calculator-container">
//       <Calculator 
//         input1={input1}  
//         onInput1Change={handleInput1} 
//         onCalculate={calculateResult} 
//       />
//       <Display result={result} />
//       <ClearButton onClear={clear} />
//     </div>
//   );
// }

// function Calculator({
//   input1,

//   onInput1Change,
//   onCalculate,
// }) {
//   return (
//     <div className="calculator">
//       <p>Enter Your Age:</p>
//       <input type="number" onChange={onInput1Change} value={input1} />


//       <button onClick={onCalculate}>Calculate</button>
//     </div>
//   );
// }

// function Display({ result }) {
//   return (
//     <div className="display">
//       {result !== null && <p>Result: {result}</p>}
//     </div>
//   );
// }

// function ClearButton({ onClear }) {
//   return (
//     <div className="clear">
//       <button onClick={onClear}>Clear</button>
//     </div>
//   );
// }

// export default App;




// if (isNaN(num1)) {
    //   setResult('Invalid input');
    //   return;
    // }
    // if ((num1) = 12) {
    //   setResult('under Age');
    //   return;
    // }



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input1, setInput1] = useState('');
//   const [result, setResult] = useState(null);

//   const handleInput1 = (e) => setInput1(e.target.value);

//   const calculateResult = () => {
//     const num1 = parseFloat(input1);
//     if (isNaN(num1)) {
//         setResult('Invalid input');
// return;
//     }if (num1 <= 17) {
//       setResult('Under Age');
//     } else if (num1 >= 18) {
//       setResult('Legal Age');
//     } else {
//       let calcResult = null;
//       setResult(calcResult);
//     }
//   };

//   const clear = () => {
//     setInput1('');
//     setResult(null);
//   };

//   return (
//     <div className="calculator-container">
//       <Calculator 
//         input1={input1}  
//         onInput1Change={handleInput1} 
//         onCalculate={calculateResult} 
//       />
//       <Display result={result} />
//       <ClearButton onClear={clear} />
//     </div>
//   );
// }

// function Calculator({
//   input1,
//   onInput1Change,
//   onCalculate,
// }) {
//   return (
//     <div className="calculator">
//       <p>Enter Your Age:</p>
//       <input type="number" onChange={onInput1Change} value={input1} />
//       <button onClick={onCalculate}>Calculate</button>
//     </div>
//   );
// }

// function Display({ result }) {
//   return (
//     <div className="display">
//       {result!== null && <p>Result: {result}</p>}
//     </div>
//   );
// }

// function ClearButton({ onClear }) {
//   return (
//     <div className="clear">
//       <button onClick={onClear}>Clear</button>
//     </div>
//   );
// }

// export default App;
// App.js

import { createBrowserHistory } from 'history';
import Dashboard from './Dashboard';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard history={history} />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
