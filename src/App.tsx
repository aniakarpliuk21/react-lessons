import React from 'react';
import './App.css';
import {usePrevious} from "./customHooks/usePreviousHook";
import {useToggle} from "./customHooks/useToggleHook";
import {useStorage} from "./customHooks/useStorageHook";



 const App = () => {
 usePrevious(100);
 useToggle(true);
 useStorage('fkkf','djjdss', window.localStorage)
  return (
    <div>

    </div>
  );
}

export default App;
