'use client';
import React from 'react';

import { client } from '@/sanity/client';
import { ContactType } from '@/components/ui/ContactLinks/types';
import { ReviewType } from '@/components/ui/ReviewsCard/types';

export type ApiData = ReviewType | ContactType;

export const useFetch = (type: string) => {
  const [data, setData] = React.useState<ApiData[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="${type}"]`;
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
