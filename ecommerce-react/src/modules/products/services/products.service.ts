import { Product } from "../models/api-model/product";
import axiosClient from "../../../api/apiClient";


export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await axiosClient.get<Product[]>('/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};
