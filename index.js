import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BookList} from './BookList'
import Bookss from './Image'

// const names=['Prince','Tanish','Jenil'];

// const newNames= names.map( (name)=>
// {
//   return <h2>{name}</h2>
// })

function Books()
{
  return <section className='bookList'> {BookList.map( (book)=>
  {
    const {img, title, author}=book;

    // return (
    //     <Image key={book.id} book={book}></Image>/
    // )
    return (
        <Bookss key={book.id} {...book}></Bookss>
    )
  })} </section>

}

// const Image =({img,title,author}) => 
// {
//   //const {img,title,author}=props.book;
//    //const {img,title,author}=props;
//   //onClick //onMouseOver
//   const clickEvents =()=>{
//     alert('hello');
//   }
//   return(
//   <article className='books'>
    
//     <img src={img} alt="" />
//     <h2 onClick={()=>
//       {
//         console.log(title)
//       }
//     }>{title}</h2>
//     <h4>{author}</h4>
//     <button type='button' onClick={clickEvents}>Example</button>
  
//   </article>
// );
// }


ReactDOM.render(<Books/>, document.getElementById('root'));



