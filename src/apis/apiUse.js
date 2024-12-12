import axiosInstance from "./axios"


export const apiGetAllUser = () =>
  axiosInstance({
    method: "get",
    url: "/admin/getAllUser",
  })


  
export const apiGetUser = (id) =>
  axiosInstance({
    method: "get",
    url: `/admin/getUserById/${id}`,
  })


// export const apiRegister = (payload) =>
//   axiosInstance({
//     method: "post",
//     url: "/auth/signup",
//     data: payload,
//   })