import { useState, useEffect, SetStateAction } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import useBoolean from './useBoolean';

const useAxios = <T>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useBoolean();

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (err: SetStateAction<any> | undefined) {
      setError(err);
    } finally {
      setLoading.off();
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading } as const;
};
export default useAxios;
