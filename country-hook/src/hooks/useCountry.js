import { useState, useEffect } from "react";
import axios from "axios";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!name) return;
    const fetchCountry = async (name) => {
      try {
        const country = await axios.get(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        );
        setCountry(country.data);
      } catch (exception) {
        console.log(exception);
        setNotFound(true);
      }
    };

    fetchCountry(name);
  }, [name]);

  return { country, notFound };
};
