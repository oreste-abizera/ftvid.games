import React from 'react';
import styled from 'styled-components';
import { timeAgo } from '../../utils/helperFunctions';
import { Match } from '../../utils/types';
import NotFoundComponent from '../NotFoundComponent';

interface Props {
  match: Match;
}

export const VideoDisplay = ({ match }: Props) => {
  const { videos, manual } = match;
  if (videos.length === 0) {
    return <NotFoundComponent text="no video found"></NotFoundComponent>;
  }
  return (
    <VideoDisplayWrapper>
      {videos.map((video) => (
        <div className="video" key={video._id}>
          <div
            dangerouslySetInnerHTML={{ __html: video.embed }}
            className="video__container"
          ></div>
          <h4>{`${match.title} (${video.title})`}</h4>
          <p className="time">
            <span>{timeAgo(match.date)}</span>
            <p className="competition">{match.competition.name}</p>
          </p>
        </div>
      ))}
    </VideoDisplayWrapper>
  );
};

const VideoDisplayWrapper = styled.div`
  width: 60%;
  margin: 1rem auto;

  > div > h4 {
    margin: 0;
  }

  .video:not(:first-child) {
    margin-top: 2rem;
  }

  .video > p.time {
    margin-top: 0;
    display: flex;
    justify-content: space-between;
  }

  .video p.competition {
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
