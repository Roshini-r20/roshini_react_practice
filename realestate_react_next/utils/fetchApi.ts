import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'a481d631aamsh75f730c8cde8939p180fdfjsn3d3201b63226' ,
      },
    });
      
    return data;
  }