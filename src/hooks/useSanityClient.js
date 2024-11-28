import sanity from "../sanity/client";
import { useState, useEffect } from "react";

export default function useSanityClient(query) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanity.fetch(query);
      if (data.length === 1) {
        setData(data[0]);
      } else {
        setData(data);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
