/**
 * Task 1
 */
const fs = require("fs");
const path = require("path");
const { validationErrorMessages } = require("./constants");

/**
 * Get Product info and its reviews
 * @param {Number} productId - Product id
 */
async function getProductInformationByProductId(productId, dataPaths) {
  const { products } = require(dataPaths.productsPath)
  const { reviews } = require(dataPaths.reviewsPath)
  const { images } = require(dataPaths.imagesPath)
  const { customers } = require(dataPaths.customersPath)

  const prod = products.find(item => item.id === productId)
  const rev = reviews.filter(item => item.product_id === prod.id)
  const cust = customers.find(item => item.id === rev[0].customer_id)
  console.log(rev[0].images)
  const img = images.find(item => item.id === rev[0].images[0])

  const newCustomer = {
    id: cust.id,
    name: cust.name,
    email: cust.email,
    phone_number: cust.phone_number
  }
  const reviewed = [...rev.map(item => ({
    id: item.id,
    message: item.message,
    created_at: item.created_at,
    rating: item.rating,
    customer: newCustomer,
    images: [img]
  }))]

  const output = {
    id: prod.id,
    name: prod.name,
    reviews: reviewed
  }
  return output
}

/**
 * TIP: Use the following code to test your implementation
 */
(async () => {
  try {
    const productsPath = path.resolve(__dirname, "./data/task1/products.json");
    const reviewsPath = path.resolve(__dirname, "./data/task1/reviews.json");
    const customersPath = path.resolve(__dirname, "./data/task1/customers.json");
    const imagesPath = path.resolve(__dirname, "./data/task1/images.json");
    const dataPaths = {
      productsPath,
      reviewsPath,
      customersPath,
      imagesPath
    }
    const product = await getProductInformationByProductId(1, dataPaths);
    console.log(JSON.stringify(product, null, 3));
  } catch (err) {
    console.error(err);
  }
})();

module.exports = {
  getProductInformationByProductId,
};
