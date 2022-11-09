import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../../../services/getUser';

import {
  ProfileContainer,
  ProfileDescription,
  ProfileIcons,
  ProfileImage,
  ProfileInfo,
  ProfileTitle,
} from './styles';

export function Profile() {
  const { data } = useQuery(['user'], () => getUser('gaearon'));

  return (
    <ProfileContainer>
      <ProfileImage src={data?.avatar_url} />
      <ProfileInfo>
        <ProfileTitle>
          <h2>{data?.twitter_username}</h2>
          <a href={data?.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileTitle>
        <ProfileDescription>
          Dan Abramov is a software engineer at Facebook. Together with Andrew
          Clark, he created Redux. He also co-authored the Create React App. He
          is married to Kseniya Abramova and is currently living in London,
          United Kingdom.
        </ProfileDescription>
        <ProfileIcons>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{data?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{data?.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{data?.followers} seguidores</span>
          </div>
        </ProfileIcons>
      </ProfileInfo>
    </ProfileContainer>
  );
}
