import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import {Book} from './Book';
import {books} from './books';
import JoditEditor from './jodit_example';
import TinymceEditor from './tinymce_example';
import QuillEditor from './quill_example';

function BookList(){
    return (
    <>
    <section class="booklist">
        {books.map((book) => {
            return (<Book {...book}></Book>);
        })
        }
    </section>
    <div className='editor'>
        <JoditEditor></JoditEditor>
    </div>
    <div className='editor2'>
        <TinymceEditor></TinymceEditor>
    </div>
    <div className='editor'>
        <QuillEditor></QuillEditor>
    </div>
    </>
    )
}

ReactDom.render(<BookList/>,document.getElementById('root'))