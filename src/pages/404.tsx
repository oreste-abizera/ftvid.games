import { ReactElement, useContext, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { SEO } from '../components/SEO';
import Context from '../context/ContextProvider';

function ErrorPage(): ReactElement {
  const { clearSearch }: any = useContext(Context);
  useEffect(() => {
    clearSearch();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <SEO title="FtVid | Error: Page not found."></SEO>
      <ErrorPageWrapper>
        <Navbar></Navbar>
        <div className="error__container">
          <p>Oops, You lost the way!</p>
          <Link href="/">Return to Home</Link>
        </div>
      </ErrorPageWrapper>
    </>
  );
}

const ErrorPageWrapper = styled.div`
  .error__container {
    width: 100%;
    height: calc(100vh - 65px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error__container p {
    margin-bottom: 1rem;
  }

  .error__container a {
    text-decoration: underline;
    color: blueviolet;
  }
`;

export default ErrorPage;
