import Api from "./Api";

export default{


    generate(form){

        return Api().post("/Login/Generate",form);

    },

  
}