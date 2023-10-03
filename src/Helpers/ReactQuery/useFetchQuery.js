import { useQuery } from "react-query";
import { getNews } from "../../Model/Service/Api";


export function useNewsQuery() {
  return useQuery(["news"], async () => {
    const category = "business"; 
    const countries = "us"; 
    const data = await getNews(category, countries);
    return data.articles; 
  });
}
