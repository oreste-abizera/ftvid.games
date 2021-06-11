import { useRouter } from 'next/router';
import { ReactElement, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import NotFoundComponent from '../../components/NotFoundComponent';
import { SEO } from '../../components/SEO';
import { VideoDisplay } from '../../components/SingleVideoPage/VideoDisplay';
import Context from '../../context/ContextProvider';
import { loadVideo } from '../../functions';
import { Match } from '../../utils/types';

export default function SingleVideoPage(props: { data: any }): ReactElement {
  const contextData: any = useContext(Context);
  const matches: Array<Match> = contextData.matches;
  const [currentMatch, setcurrentMatch] = useState<Match>(props.data);
  const [isloading, setisloading] = useState(false);
  const { clearSearch } = contextData;
  const router = useRouter();

  useEffect(() => {
    clearSearch();
    // eslint-disable-next-line
    // setcurrentMatch(props.data);
  }, []);

  // useEffect(() => {
  //   async function init() {
  //     setisloading(true);
  //     const { id } = router.query;
  //     let tempMatches = matches || [];
  //     let tempCurrentMatch = tempMatches.find((match) => match._id === id);
  //     if (tempCurrentMatch) {
  //       setcurrentMatch(tempCurrentMatch);
  //     } else {
  //       //load match details from backend
  //       setcurrentMatch(await loadVideo(id ? id.toString() : ''));
  //     }
  //     setisloading(false);
  //   }
  //   init();
  // }, [matches, router.query]);

  return (
    <SingleVideoPageWrapper>
      <Navbar></Navbar>
      {isloading ? (
        <>
          {/* <SEO
            title="FtVid | Loading: loading match videos."
            description="Loading: loading match videos."
          ></SEO> */}
          <Loader></Loader>
        </>
      ) : (
        <>
          {currentMatch ? (
            <>
              <SEO
                title={`${currentMatch.side1.name} vs ${currentMatch.side2.name} | ${currentMatch.competition.name}.`}
                description={`${currentMatch.side1.name} vs ${currentMatch.side2.name} | ${currentMatch.competition.name}.Played at ${currentMatch.date}.`}
                image={currentMatch.thumbnail}
              ></SEO>
              <VideoDisplay match={currentMatch}></VideoDisplay>
            </>
          ) : (
            <>
              <SEO
                title="FtVid | Error: Match not found."
                description="Error | Match not found."
              ></SEO>
              <NotFoundComponent text="Match not found"></NotFoundComponent>
            </>
          )}
        </>
      )}
    </SingleVideoPageWrapper>
  );
}

const SingleVideoPageWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

SingleVideoPage.getInitialProps = async ({ query: { id } }: any) => {
  let video = await loadVideo(id);
  return { data: video };
};
