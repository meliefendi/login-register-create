

import axios from "axios";

export const fetchProductList = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product`);

    return data;

}