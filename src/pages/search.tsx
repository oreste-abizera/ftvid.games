import { ReactElement } from 'react';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { SEO } from '../components/SEO';
import VideosList from '../components/VideosPage/VideosList';
import { useContextData } from '../context/ContextProvider';

export default function SearchVideosPage(): ReactElement {
  const { searchResults, searching }: any = useContextData();
  return (
    <>
      <SEO
        title="FtVid | Search Highlights here. Search by club name or by league name."
        description="FtVid | Search Highlights here. Search by club name or by league name."
      ></SEO>
      <SearchVideosPageWrapper>
        <Navbar></Navbar>
        {searching ? (
          <Loader></Loader>
        ) : (
          <VideosList results={searchResults}></VideosList>
        )}
      </SearchVideosPageWrapper>
    </>
  );
}

const SearchVideosPageWrapper = styled.div``;
