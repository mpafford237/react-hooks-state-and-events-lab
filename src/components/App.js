import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //In the `App` component, there is a button for toggling between dark mode and
  //light mode. Using the `useState` hook, create a state variable in the `App`
  //component. Then, use that variable to determine if our app should be in dark
  //mode or light mode.

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  //You will also need to add an event handler to the dark mode button, and update
  //state when the button is clicked.

  const handleDarkModeToggle = () => {
    setIsDarkMode ((prevMode) => !prevMode);
  }
  
  //The actual functionality of changing our app's theme is handled in CSS, so all
  //you have to do is set up the code to update the `className` of the div based on
  //your state variable:

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
