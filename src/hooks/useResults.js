import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]); //because the reponse we get back from yelp under the name of businesses is an array
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          //second parameter that will be added to after /search as string query
          limit: 50, // /search?limit=50
          term: searchTerm, // term happens to be one of the params that yelp asks for
          location: "irvine",
        },
      }); ///search will be added at the end of the base URL defind via get method
      setResults(response.data.businesses); //reponse we get from yelp will have a data property, which represents the whole data from yelp. We're only interested in the businesses property of that data.
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []); //adding [] as the second arg to ensure searchApi only runs once in its lifetime
  return [searchApi, results, errorMessage];
  //exported as an array
};
