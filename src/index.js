import React from 'react';
import ReactDOM from 'react-dom';
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

