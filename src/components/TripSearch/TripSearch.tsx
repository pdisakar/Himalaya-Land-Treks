'use client';
import React from 'react';
import SmartSearch from '../SmartSearch/SmartSearch';
import Link from 'next/link';

const TripSearch = ({ featuredCategory }: { featuredCategory: any }) => {
  return (
    <aside className="trip-search  -mt-[50px] relative z-10 hidden md:block">
      <div className="container">
        <div className="trip-search-inner max-w-[750px] mx-auto p-4 bg-white rounded-lg shadow-md">
          <SmartSearch />
          <ul className="popular-search mt-3 flex items-center justify-center text-sm gap-6 font-medium text-headings">
            {featuredCategory?.map((item: any, index: number) => (
              <li
                key={item.id}
                className={
                  index === 0
                    ? ''
                    : 'relative before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primary before:-ml-3'
                }>
                <Link
                  className="leadings-[100%] hover:text-primary"
                  href={`${item.urlinfo.url_slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default TripSearch;
