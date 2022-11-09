import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import { getIssueByNumber } from '../../services/getIssueByNumber';
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostIcons,
  PostSummary,
  PostTitle,
} from './styles';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Post() {
  const { postId } = useParams();
  const { data, isSuccess } = useQuery(['post', postId], () =>
    getIssueByNumber('fkrein1', 'github-blog', postId as string),
  );

  return (
    <PostContainer>
      <PostSummary>
        <PostHeader>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <a href={data?.html_url}>
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeader>
        <PostTitle>{data?.title}</PostTitle>
        <PostIcons>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{data?.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {isSuccess && formatDistanceToNow(new Date(data?.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{data?.comments} comentários</span>
          </div>
        </PostIcons>
      </PostSummary>

      <PostContent>
        {data?.body}
      </PostContent>
    </PostContainer>
  );
}
