import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import {Book} from './Book';
import {books} from './books';

function BookList(){
    return (<section class="booklist">
        {books.map((book) => {
            return (<Book {...book}></Book>);
        })
        }
    </section>)
}

ReactDom.render(<BookList/>,document.getElementById('root'))