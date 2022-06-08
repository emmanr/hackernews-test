import { useEffect, useState } from "react";

const useStoryApi = () => {
  const [storyIDs, setStoryIDs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');

      if (!res.ok) {
        console.error('Error fetching data.');
        return;
      }

      const data = await res.json();
      return setStoryIDs(data);
    })();
  }, []);

  return storyIDs;
};

export default useStoryApi;
