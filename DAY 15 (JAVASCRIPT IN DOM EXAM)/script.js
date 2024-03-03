// Click handler for search button
const captureSearchValue = () => {
    let a = document.getElementById("search-bar").value;
    return a;
  };
  
  // Filter books based on search input
  const filterBooks = (captureSearchValue, books) => {
    let search = captureSearchValue;
    let a = [];
    let b = flattenObjectValuesIntoArray(books);
    for(let j = 0; j < b.length; j++){
      for(let k = 0; k < b[j].length; k++){
          if (b[j][k] === search){
            a.push(books[j]);
         }
      }
    }
   return a;
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = (books) => {
    let a = filterBooks(captureSearchValue(), books);
    let b = [];
    for(let i = 0; i < a.length; i++){
      b.push(structureBook(a[i]));
    } 
    return b;
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (books) => {
   return renderBooksToDom(structureBooksAsHtml(books))
  }
  
  // Grab search button from the DOM
  const searchBtn = document.getElementById("search-btn")
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { structureBooksAsHtml(books) });