import { useState, useEffect } from "react";
import axios from "axios";

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get(baseUrl);
        setResources(response.data);
      } catch (exception) {
        console.log(exception);
      }
    };

    getAll();
  }, [baseUrl]);

  const create = async (resource) => {
    const response = await axios.post(baseUrl, resource);
    setResources([...resources, response.data]);
  };

  const service = {
    create,
  };

  return [resources, service];
};
