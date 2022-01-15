import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuillEditor() {
    const [value,setValue] = useState(`<p>So here goes my first C++ code .</p><pre class="ql-syntax" spellcheck="false">#include &lt;iostream&gt;
    using namespace std;
    int main(){
      cout&lt;&lt;"Hello World"&lt;&lt;endl;
    }
    </pre><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/Zso1-vyzkhw?showinfo=0"></iframe><p><br></p>`);
    return (<>
        <ReactQuill 
                 modules = {{
                    toolbar: [
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      [{'font':[]}],
                      ['bold', 'italic', 'underline','strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image', 'video','code-block', 'code'],
                      [{'indent': '+1'},{'indent': '-1'}],
                      ['clean']
                    ]
                }}
                
                formats = {
                    ['background','bold','color','font','code',
                    'italic','link','size','strike','script','underline',
                    'blockquote','header','indent','list','align','direction',
                    'code-block','formula','image','video'
                    ]
                }

                theme="snow" 
                value={value} 
                onChange={setValue}
                
                ></ReactQuill>
        <button onClick={()=>console.log(value)}>Log</button>
        </>
    )
}