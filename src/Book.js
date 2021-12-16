import React from 'react';

export const Book = ({image,title,author,children}) => {
    return (
        <div class="book" onClick={() => alert(title)}> 
            <img height="300" width="300" src={image} alt=""></img>
            <h3 onMouseOver={()=>console.log(title)}>{title}</h3>
            <h4>{author}</h4>
            <p>{children}</p>
        </div>
    );
}

export default Book;