import { api } from '../lib/axios';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: string;
  followers: number;
  company: string;
  twitter_username: string;
}

export async function getUser(username: string): Promise<User> {
  const { data } = await api.get(`/users/${username}`);

  return data;
}
