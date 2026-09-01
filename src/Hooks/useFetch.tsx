import { useEffect, useState } from "react";

type hookProp = {
  url: string;
};

/**
 * @version 1.0.0
 * @param url_generic
 * @description This function fetch all data from url(api) and returns data of api.
 * @description The <T,> tells TypeScript:"useFetch is a generic function, and the caller will provide the type T."
 * @returns fetched data and if we have a error represent.
 */
const useFetch = <T,>({ url }: hookProp) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        return await res.json();
      })
      .then((dataRes) => {
        console.log(dataRes.data);
        setData(dataRes);
      })
      .catch((err: Error) => {
        console.log(err.message);
        setError(err);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
