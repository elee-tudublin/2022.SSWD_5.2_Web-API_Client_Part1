// import everything from fetchAPI.js
// This will allow resources to be referenced as api.BASE_URL, etc.
import * as api from './fetchAPIHelper.js';

// 1. Parse JSON
// 2. Create category links
// 3. Display in web page
//
function displayCategories(categories) {

  // Use the Array map method to iterate through the array of categories (in json format)


  // Set the innerHTML of the productRows root element = rows
  // join('') converts the rows array to a string, replacing the ',' delimiter with '' (blank)

  // Add Event listeners
  //
  // 1. Find button all elements with matching class name
  const catButtons = document.getElementsByClassName('category-link');

  // 2. Assign a 'click' event listener to each button
  // Both arrays have same length so only need 1 loop
  for (let i = 0; i < catButtons.length; i++) {
    catButtons[i].addEventListener('click', filterProducts);
  }

} // end function


// 1. Parse JSON
// 2. Create product rows
// 3. Display in web page
//
function displayProducts(products) {
  // Use the Array map method to iterate through the array of products (in json format)

  const rows = products.map((product) => {
    // returns a template string for each product, values are inserted using ${ }
    // <tr> is a table row and <td> a table division represents a column
    // product_price is converted to a Number value and displayed with two decimal places
    // icons - https://icons.getbootstrap.com/
    return `<tr>
                <td>${product.id}</td>
                <td>${product.product_name}</td>
                <td>${product.product_description}</td>
                <td>${product.product_stock}</td>
                <td class="price">&euro;${Number(product.product_price).toFixed(
                  2
                )}</td>
             </tr>`;
  });

  // Set the innerHTML of the productRows root element = rows
  // join('') converts the rows array to a string, replacing the ',' delimiter with '' (blank)
  document.getElementById("productRows").innerHTML = rows.join("");

} // end function


//
// Filter products by category
//
async function filterProducts() {

    // Get id of cat link (from the data attribute)
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    const catId = Number(this.dataset.category_id);

    // validation - if 0 or NaN reload everything
    
    // Otherwise get products in this category
}

//
// Get category and product data, then display
//
async function loadAndDisplayData() {

  // Get products using the fetchAPIHelper (imported as api above) function
  const products = await api.getDataAsync(`${api.BASE_URL}/product`);

  // If products returned then pass them to displayProducts()
  if (Array.isArray(products)) {
    displayProducts(products);
  }
}

// load and display products when this script is first loaded
loadAndDisplayData();


