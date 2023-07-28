import axios from "axios";

const username = 'user';
const password = 'password';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};

const URI='http://localhost:9999'

const getProduct = () => axios.get(`${URI}/product/get`,{headers})
const adduser = (product) => axios.post(`${URI}/set`,product,{headers})
const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`,{headers})
const editProduct = (id,product)=>axios.put(`${URI}/product/edit/${id}`,product,{headers})
const deleteProduct=(id)=>axios.delete(`${URI}/product/delete/${id}`,{headers})

export {getProduct,getProductbyId,adduser,editProduct,deleteProduct}