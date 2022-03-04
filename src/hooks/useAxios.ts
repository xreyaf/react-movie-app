import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const useAxios = <T>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading } as const;
};
export default useAxios;
