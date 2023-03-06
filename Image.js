
const Image =({img,title,author}) => 
{
  //const {img,title,author}=props.book;
   //const {img,title,author}=props;
  //onClick //onMouseOver
  const clickEvents =()=>{
    alert('hello');
  }
  return(
  <article className='books'>
    
    <img src={img} alt="" />
    <h2 onClick={()=>
      {
        console.log(title)
      }
    }>{title}</h2>
    <h4>{author}</h4>
    <button type='button' onClick={clickEvents}>Example</button>
  
  </article>
);
}
export default Image