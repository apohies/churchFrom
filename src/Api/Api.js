import axios from "axios";

let BaseApi = axios.create({

     baseURL:"https://localhost:7186/api",
     // llamar al token desde localstorage
       // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    //headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJlbWFpbCI6InN0cmluZyIsIkRhdGVPZkpvaW5nIjoiMjAyMS0xMS0wMyIsImp0aSI6IjkxMGNiZTBiLTBmYWEtNGQ1MS1hMDEyLTg0NDUyNDkzNmQxMSIsImV4cCI6MTYzNTk4MTk5NywiaXNzIjoiVGVzdC5jb20iLCJhdWQiOiJUZXN0LmNvbSJ9.j3b79gjSGBWUiWbaVfo9T_Ek_ccyemLWshgPaZSL6UU"}` }

});

let Api = function(){

    return BaseApi;
}



export default Api;