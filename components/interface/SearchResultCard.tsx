// components/SearchResultCard.tsx
import React from 'react';
import Link from 'next/link';
import Status from '@/components/interface/Status'
import { FaCalendar } from 'react-icons/fa';

interface SearchResultCardProps {
  id: number;
  title: string;
  imageUrl: string;
  status: string;
  releaseDate: string;
}

function SearchResultCard({ id, title, imageUrl, status, releaseDate }: SearchResultCardProps) {
  return (
    <>
      <Link href={"/media/" + id}>
        <div className="sm:p-3 ">
          <div className="overflow-hidden relative rounded-lg aspect-[5/7]">
            <div className="group absolute inset-0">
              <div className="transition-all transform duration-300 group-hover:scale-105 group-hover:brightness-50">
                <img
                  className="w-full h-full aspect-[5/7] object-cover rounded-lg"
                  src={imageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mt-2 rounded-md flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-800">
              <Status status={status} />
              <p title={title} className="transition-all dark:text-secondary text-primary font-bold line-clamp-1 text-sm rounded p-1">
                {title}
              </p>
            </div>
            {/* <p>Episode {data.episodeNumber}</p> */}
            <div className="text-xs sm:text-sm flex space-x-2 mt-2 select-none">
              <div className="dark:text-secondary text-primary flex items-center">
                {releaseDate && (
                  <p>
                    <span title={`Released: ${releaseDate}`} className="dark:text-secondary text-primary flex items-center">
                      <FaCalendar />
                      <span className="ml-1">{releaseDate}</span>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchResultCard;