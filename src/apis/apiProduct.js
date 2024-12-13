import axiosInstance from "./axios"


export const apiGetAllProduct = () =>
  axiosInstance({
    method: "get",
    url: "/admin/getAllProduct",
  })


  
export const apiAddProduct = (data) =>
  axiosInstance({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "post",
    url: "/admin/addProduct",
    data: data,
  })
  

  export const apiUpdateProduct = (id,data) =>
    axiosInstance({
      method: "put",
      url: `/admin/updateProduct/${id}`,
      data: data,
    })
  
  
    export const apiDeleteProduct = (id) =>
      axiosInstance({
        method: "delete",
        url: `/admin/deleteProduct/${id}`,
      })