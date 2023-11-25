import Api from "./Api";

export default{


    getAllMongos(){

        return Api().get("/User/UserMongos");

    },

  
}