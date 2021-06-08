import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Context from '../../context/ContextProvider';
import { timeAgo } from '../../utils/helperFunctions';
import { Match } from '../../utils/types';
import Link from 'next/link';
import Loader from '../Loader';
import NotFoundComponent from '../NotFoundComponent';

interface Props {
  results?: Array<Match>;
}

export default function VideosList({ results }: Props): ReactElement {
  const contextData: any = React.useContext(Context);
  let matches: Array<Match> = results || contextData.matches || [];
  const { loading } = contextData;
  return (
    <VideosListWrapper>
      {matches.map((match) => (
        <Link href={`/videos/${match._id}`} key={match._id}>
          <a className="match" href={`/videos/${match._id}`}>
            <img src={match.thumbnail} alt={match.title}></img>
            <p className="title">{match.title}</p>
            <p>{timeAgo(match.date)}</p>
          </a>
        </Link>
      ))}
      {matches.length === 0 && !loading && (
        <NotFoundComponent text="no results found."></NotFoundComponent>
      )}
      {loading && <Loader></Loader>}
    </VideosListWrapper>
  );
}

const VideosListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  margin-top: 0.5rem;

  .match {
    width: 30%;
    margin: 1rem 1.5% 2rem 1.5%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: #000;
    text-decoration: none;
  }

  .match img {
    width: 100%;
    height: 16rem;
  }

  .match > .title {
    margin-top: 0.4rem;
    font-weight: 700;
  }

  @media screen and (max-width: 692px) {
    justify-content: center;
    .match {
      width: 90%;
    }
  }
  @media screen and (max-width: 768px) and (min-width: 692px) {
    justify-content: space-around;
    .match {
      width: 40%;
    }
  }
`;
