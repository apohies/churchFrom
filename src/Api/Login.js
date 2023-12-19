import Api from "./Api";

export default{


    generate(form){

        return Api().post("/Login/Generate",form);

    },

    scan(form){

        return Api().post("/Map/mensaje",form);

    },

    resultScan(form){

        return Api().post("/Map/resultado",form);

    },

  
}