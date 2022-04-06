import axios from "axios";

const BASE_URL="https://restcountries.com";

const getCountry = async()=>{
    const response = await axios.get(`${BASE_URL}/v2/all`);
    return response.data;
}

export {getCountry};