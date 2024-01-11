'use client';

import { useEffect, useState } from 'react';

import { client } from '@/sanity/client';

import { ContactType, GalleryDataType, ReviewType } from '@/types';

export type ApiData = ReviewType | ContactType | GalleryDataType;

export const useFetch = (type: string) => {
  const [data, setData] = useState<ApiData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query =
          type === 'gallery'
            ? `*[_type=="${type}"]{
                    image[]{
                    alt,
                    "path": asset -> url
                    }
                }`
            : `*[_type=="${type}"]`;

        const fetchedData: ApiData[] = await client.fetch(query, {
          next: {
            revalidate: 3600, // look for updates to revalidate cache every hour
          },
        });
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [type]);

  return { data };
};
