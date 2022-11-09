import { api } from '../lib/axios';

interface Issue {
  id: number;
  html_url: string;
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
  id: string,
): Promise<Issue> {
  const { data } = await api.get(`/repos/${username}/${repo}/issues/${id}`);

  return data;
}
