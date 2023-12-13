// Define products in an array
const products = [
  {
    reviewId: "1222",
    name: "Galactic Goggles",
    rating: 3.3,
    imageUrl: "./assets/Product 2.png",
    altText: "Galactic Goggles",
  },
  {
    reviewId: "1223",
    name: "Neuron Navigator",
    rating: 2.7,
    imageUrl: "./assets/Product 3.png",
    altText: "Neuron Navigator",
  },
  {
    reviewId: "1234321",
    name: "Astral Adapter",
    rating: 1.8,
    imageUrl: "./assets/Product 4.png",
    altText: "Astral Adapter",
  },
  {
    reviewId: "1221",
    name: "Quantum Quill",
    rating: 4.3,
    imageUrl: "./assets/Product 1.png",
    altText: "Quantum Quill",
  },
  {
    reviewId: "1234322",
    name: "Echo Enigma",
    rating: 2.4,
    imageUrl: "./assets/Product 5.png",
    altText: "Echo Enigma",
  },
  {
    reviewId: "1234323",
    name: "Nebula Nexus",
    rating: 3.9,
    imageUrl: "./assets/Product 6.png",
    altText: "Nebula Nexus",
  },
  {
    reviewId: "77",
    name: "Vortex Vision",
    rating: 4.1,
    imageUrl: "./assets/Product 7.png",
    altText: "Vortex Vision",
  },
];

// Function to find the highest rated product
function findHighestRatedProduct(products) {
  // Implement your code here
}

// Function to find the lowest rated product
function findLowestRatedProduct(products) {
  // Implement your code here
  let min = products[0];
  for (let i = 1; i > products.length; i--) {
    if (products[i] < min.rating) {
      min = products[i];
    }
  }
}

// Palindrome function
function isPalindrome(str) {
  // Implement your code here
  if (str.length <= 0);
  return isPalindrome(str.slice(1, -1));
  //
}

// Function to calculate the number of verified reviews
function noOfVerifiedReviews(products) {
  // Implement your code here
}

// Function to calculate the average rating
function calculateAverageRating(products) {
  // Implement your code here
}

// Sorting function
function sortProductsByRating(products) {
  // Implement your code here
}

document.addEventListener("DOMContentLoaded", () => {
  // Function to create product HTML
  function createProductHTML(product) {
    return `
            <div class="product">
                <p>Review ID: <strong>${product.reviewId}</strong></p>
                <img src="${product.imageUrl}" alt="${product.altText}" />
                <h3>${product.name}</h3>
                <p>Rating: ${product.rating}</p>
            </div>
        `;
  }

  // Display the highest, lowest, and average ratings
  function displayCards() {
    const highestRated = findHighestRatedProduct(products);
    const lowestRated = findLowestRatedProduct(products);
    const avgRating = calculateAverageRating(products);

    document.getElementById("highest-rated").innerHTML =
      createProductHTML(highestRated);
    document.getElementById("lowest-rated").innerHTML =
      createProductHTML(lowestRated);
    document.getElementById("average-rating").innerText = avgRating.toFixed(1);
    document.getElementById("verified-reviews").innerText =
      noOfVerifiedReviews(products);
  }

  // Function to render all products
  function renderProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear current products
    productArray.forEach((product) => {
      productList.innerHTML += createProductHTML(product);
    });
  }

  function renderSortedProducts() {
    sortProductsByRating(products);
    renderProducts(products);
  }

  const sortButton = document.getElementById("sort-button");
  sortButton.addEventListener("click", renderSortedProducts);

  // Initially render all products and display ratings
  renderProducts(products);
  displayCards();
});

module.exports = {
  findHighestRatedProduct,
  findLowestRatedProduct,
  calculateAverageRating,
  noOfVerifiedReviews,
  isPalindrome,
  sortProductsByRating,
};
