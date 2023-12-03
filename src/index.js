import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from './image/logo.jpg';
import './style.css';

//creating a nested header element using react .create element
const header = React.createElement(
    "div",{className:"Title", key:"title"},
    [React.createElement("h1",{key:"h1"},"this is title-1 using h1 tag"),
     React.createElement("h2",{key:"h2"},"this is title-1 using h2 tag"),
     React.createElement("h3",{key:"h3"},"this is title-1 using h3 tag"),
    ]);
    console.log(header)

    //create same element using jsx
    const header1 = (
        <div className='Title'>
           <h1>"this is title-1 using jsx"</h1>
           <h2>"this is title-2 using jsx"</h2>
           <h3>"this is title-3 using jsx"</h3>
        </div>
    );
    
//create a functinal component of the same with jsx
const Header2 = () => {
    return(
        <div className='Title'>
            <h1>"this is title-1 using functional component"</h1>
            <h2>"this is title-2 using functional component"</h2>
            <h3>"this is title-3 using functional component"</h3>
        </div>
    )
 };
 //ReactDOM.render(<Header2/>,document.getElementById("root"))
 //pass attributes into the the tag 
 const header3 =(
    <div className="Title">
        <h1 style={{color:"blue"}}>"this is title-1 using jsx"</h1>
        <h1 style={{color:"yellow"}}>"this is title-1 using jsx"</h1>
        <h1 style={{color:"pink"}}>"this is title-1 using jsx"</h1>
    </div>
 );
const Header4 =() => {
      return(
        <h1>component inside the component</h1>,
        <Header2/>
    )
};
//ReactDOM.render(<Header4/>,document.getElementById("root"))

//{Title component} vs {<title component/>} vs {<Title component></Title component>}
const Title=() =>{
    return
        <h1>"this is title component"</h1>;
};
const Apk = () => {
    return (
        <div>
            <h1 style={{color:"red"}}>this is component</h1>
            <Title/>
            <h2 style={{color:"yellow"}}>this is component</h2>
            <Title></Title>
            <h3 style={{color:"blue"}}>this is component</h3>
            
        </div>
    );
};
ReactDOM.render(<Apk/>,document.getElementById("root"))


const Header = () => {
    return (
      <>
        <div className='Header'>
          <div className='logo'>
          <img src={image} alt="Logo" height="77px" width= "77px" />
          </div>
          <div className='search'>
            <input id='search_type' type='text' placeholder='Search Any Thing'></input>
            <button id='btn'>Search</button>
          </div>
          <div className='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#59f221" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </div>
        </div>
      </>
    );
  };
  
  ReactDOM.render(<Header/>, document.getElementById("root"));
