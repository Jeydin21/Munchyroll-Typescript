import React, { useState, useEffect, useCallback } from 'react';
import { Icon, Icons } from '@/components/Icon';
import { getAnimeSearch } from '@/src/anime'; // Adjust the import path as needed
import SearchResultCard from '@/components/interface/SearchResultCard'; // Adjust the import path as needed

interface SearchResult {
  id: number;
  title: string;
  imageUrl: string;
  status: string;
  releaseDate: string;
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = useCallback(
    debounce(async (term: string) => {
      if (term) {
        setIsSearching(true);
        getAnimeSearch(term, 10).then((data) => {
          return data.results.map((anime: any) => ({
            id: anime.id,
            title: anime.title.english || anime.title.romaji || anime.title.native,
            imageUrl: anime.image,
            status: anime.status,
            releaseDate: anime.releaseDate
          }));
        }).then((results) => {
          setSearchResults(results);
          setIsSearching(false);
        }).catch((error) => {
          console.error('Error fetching search results:', error);
          setIsSearching(false);
        });
      } else {
        setSearchResults([]);
      }
    }, 500),
    []
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  return (
    <div className="relative flex flex-col items-center justify-start px-4 mt-5 space-y-5">
      <div className="flex max-w-3xl flex-row items-center w-full mt-4 bg-slate-800 rounded-full">
        <Icon icon={Icons.SEARCH} className="text-xl text-[#60527A] ml-4" />
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="w-full px-4 py-4 placeholder-[#60527A] rounded-full focus:outline-none bg-slate-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {!searchResults.length && !isSearching && (
        <button className="px-14 py-3 bg-[#2d263a] transition-all rounded-lg text-[#756790] font-bold scale-90 hover:scale-95 duration-200">
          Browse
        </button>
      )}

      {isSearching && <p>Searching...</p>}

      {searchResults.length > 0 && (
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {searchResults.map((result) => (
            <SearchResultCard key={result.id} id={result.id} title={result.title} imageUrl={result.imageUrl} status={result.status} releaseDate={result.releaseDate} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;