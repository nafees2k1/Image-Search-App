import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 98G7pFVTpjcctm61pmfy2G0z4g1ggEW95HzwY9QHTv8',
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;