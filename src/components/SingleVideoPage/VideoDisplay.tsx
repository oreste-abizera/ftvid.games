import React from 'react';
import styled from 'styled-components';
import { timeAgo } from '../../utils/helperFunctions';
import { Match } from '../../utils/types';
import NotFoundComponent from '../NotFoundComponent';

interface Props {
  match: Match;
}

export const VideoDisplay = ({ match }: Props) => {
  const { videos } = match;
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
          <p>{timeAgo(match.date)}</p>
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

  .video > p {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
