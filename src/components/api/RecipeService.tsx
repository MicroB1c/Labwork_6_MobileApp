import axios from 'axios';

const API_ID = 'cffb63a0'; // Замените на ваш APP_ID от Edamam
const API_KEY = '6f940a7154fcc1c8865e3189f7fc9e13'; // Замените на ваш API_KEY от Edamam
const BASE_URL = 'https://api.edamam.com/search';

export interface Recipe {
  recipe: {
    label: string;
    image: string;
    source: string;
    url: string;
    ingredientLines: string[];
  };
}

export const fetchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=20`);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
