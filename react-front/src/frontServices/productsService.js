import httpService from "./httpService";
import config from "../config.json";
// import data from "../components/shop/data.json"

// localStorage.setItem("product" , JSON.stringify(data));

export async function addFavorite(productId) {
  console.log("send")
  return httpService.post(`${config.apiUrl}/addFavorite` , productId)
}

export async function getProduct() {
  return httpService.get(`${config.apiUrl}/products`).then(res => res.data);
}

const productsService={
    addFavorite,
    getProduct,

  }

  export default productsService;