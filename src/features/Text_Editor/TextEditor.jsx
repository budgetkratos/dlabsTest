import React, { useRef } from 'react';
import EditorJs from 'react-editor-js';
import './TextEditor.css';

function TextEditor() {
  let output = [];

  const instanceRef = useRef(null);


  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(savedData);
    output.push(savedData?.blocks?.[0]?.data?.text);
    console.log(output)
   }

    return (
      <div className='text-editor-container'>
        <div className='text-editor-wrapper'>
          <EditorJs holder="editorjs" instanceRef={(instance) => (instanceRef.current = instance)}>
          <div id="editorjs" />
          </EditorJs>
          <button className='save-text-btn' onClick={() => {
            handleSave();
          }} type="button">
            Save Content
          </button>
        </div>
      </div>
      )
}

export default TextEditor;

