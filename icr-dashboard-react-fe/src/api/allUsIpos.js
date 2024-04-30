import { axiosPrivate } from '../config/axios'

export const filtersListApi = async () => {
    const response = await axiosPrivate.get("api/v1/dashboard/fetchfilterlist");
    return response.data;
}

export const getAllUsIpoData = async (filterOption1, filterOption2, sortOption) => {
    // debugger;
    // Constructing the complete URL with query parameters
    const url = `api/v1/dashboard/fetchipodata${(filterOption1 && filterOption1.length > 0) ? `?${filterOption1}` : ''}${(filterOption2 && filterOption2.length > 0) ? `${filterOption1.length > 0 ? '&' : '?'}${filterOption2}` : ''}${(sortOption && sortOption !== '') ? `${filterOption1.length > 0 || filterOption2.length > 0 ? '&' : '?'}${sortOption}` : ''}`;
    const response = await axiosPrivate.get(url);
    return response.data;
}






export const getAllocationByHolderStyleChart = async () => {
    const response = await axiosPrivate.get("/api/v1/dashboard/allocationbyholderstylepiechartdata");
    return response.data;
}

export const getProceedsBySectorChart = async () => {
    const response = await axiosPrivate.get("/api/v1/dashboard/allocationbyholderstylepiechartdata");
    return response.data;
}

export const getPxChangeChart = async () => {
    const response = await axiosPrivate.get("/api/v1/dashboard/fetchpxchangegraphdata");
    return response.data;
}