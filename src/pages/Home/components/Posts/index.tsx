import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';
import { getIssues } from '../../../../services/getIssues';

import { Post, PostContainer, PostGrid, SeachContainer } from './styles';

export function Posts() {
  const { data, isSuccess } = useQuery(['posts'], () =>
    getIssues('fkrein1', 'github-blog'),
  );
  const [search, setSearch] = useState('');

  const filteredPosts = data?.filter(
    (post) =>
      post.body.toLowerCase().includes(search.toLowerCase().trim()) ||
      post.title.toLowerCase().includes(search.toLowerCase().trim()),
  );

  function limitPostSummary(body: string) {
    const maxChars = 150;
    return body.substring(0, maxChars) + '...';
  }

  return (
    <PostContainer>
      <SeachContainer>
        <div>
          <p>Publicações</p>
          <span>{data?.length} publicações</span>
        </div>
        <input
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SeachContainer>

      <PostGrid>
        {filteredPosts?.map((post) => (
          <Post to={`/${post.number}`} key={post.id}>
            <h2>{post.title}</h2>
            <span>
              {' '}
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
            <p>{isSuccess && limitPostSummary(post.body)}</p>
          </Post>
        ))}
      </PostGrid>
    </PostContainer>
  );
}
