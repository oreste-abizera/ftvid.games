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
          <div className="match">
            <img
              src={match.thumbnail}
              alt={match.title.split('-').join('vs')}
            ></img>
            <p className="title">{match.title.split('-').join('vs')}</p>
            <p className="time">
              <span>{timeAgo(match.date)}</span>
              <p className="competition">{match.competition.name}</p>
            </p>
          </div>
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
    margin: 1rem 1.5% 1rem 1.5%;
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
    margin-bottom: 0;
  }

  .match > p.time {
    margin: 0;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
  }

  .match p.competition {
    margin: 0;
    font-size: 15px;
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: 0.7em;
    font-weight: 600;
    line-height: 1;
    color: #fff;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    background-color: rebeccapurple;
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
