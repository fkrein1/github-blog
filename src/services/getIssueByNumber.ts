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

export async function getIssueByNumber(
  username: string,
  repo: string,
  number: number,
): Promise<Issue> {
  const { data } = await api.get(`/${username}/${repo}/issues/${number}`);

  return data;
}
