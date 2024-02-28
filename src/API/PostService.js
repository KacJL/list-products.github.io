import axios from "axios";
import {headers, URL_API} from "../constans";

export default class PostService {

    static async getIds(params) {
        const response = await axios.post(
            `${URL_API}`,
            {
                "action": "get_ids",
                "params": params
            },
            {headers});
        return await this.getItems({"ids": response.data.result})
    }

    static async getIdsFilter(params) {
        const response = await axios.post(
            `${URL_API}`,
            {
                "action": "filter",
                "params": params
            },
            {headers});
        return await this.getItems({"ids": response.data.result})
    }

    static async getFieldsBrands(params) {
        const response = await axios.post(
            `${URL_API}`,
            {
                "action": "get_fields",
                "params": params
            },
            {headers});

        return [...new Set(response.data.result.filter(brand => brand !== null))];
    }

    static async getItems(params) {
        const response = await axios.post(
            `${URL_API}`,
            {
                "action": "get_items",
                "params": params
            },
            {headers});

        return response.data.result.reduce((acc, current) => {
            const isUniqueId = acc.find(item => item.id === current.id);
            if (!isUniqueId) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
    }
}