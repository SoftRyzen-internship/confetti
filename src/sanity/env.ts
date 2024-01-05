// special file for imports into different plugins to avoid some random errors

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-19';
