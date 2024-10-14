import React from 'react';

function App() {
    const openFilePicker = React.useRef();
    
    
    function handleClcik(){
        openFilePicker.current.click()

    }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={openFilePicker} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClcik}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
