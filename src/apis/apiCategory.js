import axiosInstance from "./axios"


export const apiGetAllCategory = () =>
  axiosInstance({
    method: "get",
    url: "/admin/getAllCategory",
  })


  
export const apiAddCategory = (data) =>
  axiosInstance({
    method: "post",
    url: "/admin/addCategory",
    data: data,
  })
  

  export const apiUpdateCategory = (id,data) =>
    axiosInstance({
      method: "put",
      url: `/admin/updateCategory/${id}`,
      data: data,
    })
  
  
    export const apiDeleteCategory = (id) =>
      axiosInstance({
        method: "delete",
        url: `/admin/deleteCategory/${id}`,
      })

// export const apiRegister = (payload) =>
//   axiosInstance({
//     method: "post",
//     url: "/auth/signup",
//     data: payload,
//   })