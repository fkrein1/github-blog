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

export async function getIssues(
  username: string,
  repo: string,
): Promise<Issue[]> {
  const { data } = await api.get(`/repos/${username}/${repo}/issues`);

  return data;
}
