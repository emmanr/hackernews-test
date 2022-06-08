import { useEffect, useState, useMemo } from 'react';

import { useStoryApi } from '../services';

import StoryLoading from "./Story/StoryLoading";
import { Story, Pagination } from './index';

const PageSize = 10;

const StoriesContainer = () => {
  const [filteredStoryIds, setFilteredStoryIds] = useState([])
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const storyIds = useStoryApi();

  useEffect(() => {
    if (filteredStoryIds.length) {
      const storyArray = filteredStoryIds.map(id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      const allStories = Promise.all(storyArray.map(async (story) => {
      const fetching = await fetch(story);
      return await fetching.json();
      })).then(values => {
        const sortedValues = values.sort((a, b) => a.score - b.score);
        setStories(sortedValues);
        setLoading(true);
      });

      window.scrollTo(0, 0);
    }
  }, [filteredStoryIds]);

  const storiesDataFiltered = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const filtered = storyIds.slice(firstPageIndex, lastPageIndex);
    setFilteredStoryIds(filtered);
    return filtered;
  }, [storyIds, currentPage]);

  return <div className="container">
      {
        loading ? (
          <>
            <ul>
              { stories.map(data => <Story key={data.id} story={data} />) }
            </ul>

            <Pagination
              currentPage={currentPage}
              totalCount={storyIds.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </>
        ) : storiesDataFiltered.map(item => <StoryLoading key={item} />)
      }
  </div>
}

export default StoriesContainer;
