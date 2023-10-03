import { axiosInstace } from "../../Helpers/lib/axios";

const apiKey = "3c3fec3ba03344b4990ba080b3a0e99b";

// export async function getNews(category, countries) {
//   const options = {
//     method: "GET",
//     params: {
//       country: countries,
//       category: category,
//       apiKey: apiKey,
//     },
//   };

//   try {
//     const response = await axiosInstace.request(options);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

const apiUrl = "https://newsapi.org/v2/top-headlines";
export async function getNews(category, countries) {
  const params = new URLSearchParams({
    country: countries,
    category: category,
    apiKey: apiKey,
  });

  const url = `${apiUrl}?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch news data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export function getRandomImageURL() {
  const randomId = Math.floor(Math.random() * 10) + 2;
  return `https://picsum.photos/id/${randomId}/1200/700`;
}
