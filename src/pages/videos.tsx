import { ReactElement, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { SEO } from '../components/SEO';
import VideosList from '../components/VideosPage/VideosList';
import { useContextData } from '../context/ContextProvider';

export default function VideosPage(): ReactElement {
  const contextData: any = useContextData();
  const { clearSearch } = contextData;

  useEffect(() => {
    clearSearch();
    // eslint-disable-next-line
  }, []);
  const handleScroll = (e: any) => {
    const bottom =
      Math.floor(e.target.scrollHeight - e.target.scrollTop) <=
      Math.floor(e.target.clientHeight);

    if (bottom) {
      contextData.loadNextPage();
    }
  };
  return (
    <>
      <SEO
        title="FtVid | Highlights page. All Highlights are found here starting with recent ones."
        description="Highlights page. All Highlights from recent ones are on this page."
      ></SEO>
      <VideosPageWrapper onScroll={handleScroll}>
        <Navbar></Navbar>
        <VideosList></VideosList>
      </VideosPageWrapper>
    </>
  );
}

const VideosPageWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
