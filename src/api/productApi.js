import axiosClient from "./axiosClient";

const productApi = {
    getAll(params) {
        const url = '/top/anime/1/upcoming';
        return axiosClient.get(url, {params: params});
    }
}

export default productApi;