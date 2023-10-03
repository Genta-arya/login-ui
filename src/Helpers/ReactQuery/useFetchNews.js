import { useQuery } from "react-query";
import { getNews, getRandomImageURL } from "../../Model/Service/Api";

// export function useNewsQuery(searchTerm, selectedCategory, selectedCountry) {
//   return useQuery(
//     ["news", searchTerm, selectedCategory, selectedCountry],
//     async () => {
//       const newsData = await getNews(selectedCategory, selectedCountry);

//       let filteredData = newsData.articles;

//       if (searchTerm) {
//         filteredData = filteredData.filter((article) =>
//           article.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       }

//       const newsDataWithImages = filteredData.map((item) => ({
//         ...item,
//         imageURL: getRandomImageURL(),
//       }));

//       return newsDataWithImages.reverse();
//     }
//   );
// }

export function useNewsQuery(searchTerm, selectedCategory, selectedCountry) {
  return useQuery(
    ["news", searchTerm, selectedCategory, selectedCountry],
    async () => {
      try {
        const newsData = await getNews(selectedCategory, selectedCountry);

        let filteredData = newsData.articles;
        if (searchTerm) {
          filteredData = filteredData.filter((article) =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

     
        const newsDataWithImages = filteredData.map((item) => ({
          ...item,
          imageURL: getRandomImageURL(),
        }));

    
        return newsDataWithImages.reverse();
      } catch (error) {
        console.error("Error fetching news:", error);
        throw error; 
      }
    }
  );
}
