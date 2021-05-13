import React from 'react'
import ReactDom from 'react-dom'
import App from './posts';

//import the css file
import './index.css';

//stateless functional component always return JSX

ReactDom.render(<App/>,document.getElementById('root'));


/* function Posts(){
   return  (
     <section>
    <Createpost/>
    <Postlist/>
    </section> */
 // ) 
//} 
//*/