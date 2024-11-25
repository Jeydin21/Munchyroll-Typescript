import React, { useState } from 'react';
import { getAnimeEpisodeLinks, getAnimeSearch, getTopAnime, getAnimeTrending } from '@/src/anime'; // Adjust the import path as needed

const ApiTest = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAnimeSearch = async () => {
    try {
      setIsLoading(true);
      const result = await getAnimeSearch('dan dan dan', 10);
      setSearchResults(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error in getAnimeSearch:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
        onClick={handleGetAnimeSearch}
      >
        Test getAnimeSearch
      </button>

      {isLoading && <p>Loading...</p>}

      {searchResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Search Results:</h2>
          {/* <ul>
            {searchResults.map((result, index) => (
              <li key={index} className="mb-2">
                <p><strong>Title:</strong> {result.title}</p>
                <img src={result.imageUrl} alt={result.title} className="w-32 h-32 object-cover" />
              </li>
            ))}
          </ul> */}
          {searchResults}
        </div>
      )}
    </div>
  );
};

export default ApiTest;