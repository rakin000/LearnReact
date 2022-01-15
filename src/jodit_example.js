import React, {useState,useRef} from 'react';
import JoditEditor from 'jodit-react';

const Jodit_Example = ({}) => {
    const editor = useRef(null);
    const [content,setContent] = useState('');

    const config = {
        readonly: false
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur = {newContent=> setContent(newContent)}
            onChange={newContent => {}}
        >
        </JoditEditor>

    );
}

export default Jodit_Example;