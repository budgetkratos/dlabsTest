import { useState } from "react";
import TextEditor  from './Text_Editor/TextEditor';
import ImageGallery from './Gallery/Gallery';
import './css/Tabs.css';

export function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Text Editor
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Image Gallery
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Text Editor</h2>
          <hr />
          <TextEditor/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Image Gallery</h2>
          <hr />
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}
