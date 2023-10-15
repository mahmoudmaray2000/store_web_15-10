// Function to fetch data from API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
}

// Function to display products
function displayProducts(products) {
  const row = document.querySelector('.row');

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 col-sm-12 my-4";
    div.innerHTML = `
      <div class="card" style="width: 22rem; border:none">
        <img src="${product.image ? product.image : "https://img.freepik.com/premium-vector/al-ahly-football-club-2023-logo_819612-11.jpg?w=2000"}" class="card-img-top" alt="This is fake image">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description ? product.description : "النادي الاهلي يهزم نادي الزمالك هزيمه قاسيه بنتيجه 6/1 مع الرأفه"}</p>
          <a href="${product.image}" target="_blank" class="btn btn-danger">Go to source</a>
        </div>
      </div>
    `;
    row.appendChild(div);
  });
}

// onDocument Load
document.addEventListener('DOMContentLoaded', async () => {
  const apiUrl = "https://fakestoreapi.com/products";
  try {
    const products = await fetchData(apiUrl);
    displayProducts(products);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
});
