import { api } from '../lib/axios';

interface Issue {
  id: number;
  url: string;
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  };
}

interface Issues {
  total_count: number;
  items: Issue[] | [];
}

export async function searchIssues(
  username: string,
  repo: string,
  query: string,
): Promise<Issues> {
  const { data } = await api.get(
    `/search/issues?q=${query}%20repo:${username}/${repo}`,
  );

  return data;
}
