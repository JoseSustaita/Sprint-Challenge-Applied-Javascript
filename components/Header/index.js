// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  
    //Created elements
  const mainHeader = document.createElement("div");
  const dateHeader = document.createElement("span");
  const titleHeader = document.createElement("h1");
  const temperature = document.createElement("span");

  //Appened the elements
  mainHeader.appendChild(dateHeader);
  mainHeader.appendChild(titleHeader);
  mainHeader.appendChild(temperature);

  //Added the classes
  mainHeader.classList.add("header");
  dateHeader.classList.add("date");
  temperature.classList.add("temp");

  //Added the text content
  dateHeader.textContent = "March 28, 2019";
  titleHeader.textContent = "Lambda Times";
  temperature.textContent = "98°";

  return mainHeader;
}
    const headerParent = document.querySelector(".header-container");

    headerParent.appendChild(Header());
