import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = async () => {
  try {
    const response = await api.get(
      "/all?fields=name,population,region,capital,flags"
    );
    console.log("Countries fetched successfully:", response);
    return response;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

// HTTP Get export const getCountryByName = async (name) => {

export const getCountryIndData = async (name) => {
  try {
    const response = await api.get(
      `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,flags,tld,languages,currencies,borders,flags`
    );
    console.log("Country data fetched successfully:", response);
    return response;
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw error;
  }
};
