import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import Link from 'next/link';

export default function HomePageHero(): ReactElement {
  return (
    <HomePageHeroWrapper>
      <div className="content">
        <Tilt className="logoTilt" options={{ max: 25 }}>
          <img src="./images/logo_transparent.png" alt="logo"></img>
        </Tilt>
        <div>
          <p>
            <span className="highlighted">Access</span>
          </p>
          <p>
            All <span className="highlighted">Football</span> Highlights
          </p>
          <p> in one place</p>

          <Link href="/videos">Watch here</Link>
        </div>
      </div>
    </HomePageHeroWrapper>
  );
}

const HomePageHeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 95%;
    height: 85%;
    border: 7px solid #743ad5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
  }

  .content > .logoTilt {
    width: 30%;
  }

  .content img {
    width: 100%;
    margin: auto;
  }

  .content > div {
    min-height: 80%;
    width: 50%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  .content > div a {
    margin-top: 1rem;
    font-size: 1.3rem;
    padding: 1rem 2rem;
    text-decoration: none;
    border: 2px solid #743ad5;
    color: #743ad5;
  }

  .content > div a:hover {
    background-color: #743ad5;
    color: #fff;
  }

  .content > div p {
    margin: 0.2rem 0;
  }

  .content > div span.highlighted {
    color: #743ad5;
  }

  @media screen and (max-width: 1024px) {
    .content {
      flex-direction: column;
      width: 95%;
      height: 95%;
      padding: 1rem 0rem;
    }

    .content > .logoTilt {
      width: 90%;
      max-height: 55%;
    }

    .content img {
      width: 100%;
      height: 100%;
    }
    .content > div {
      min-height: 45%;
      width: 100%;
      font-size: 4rem;
      letter-spacing: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    .content > div {
      font-size: 1rem;
    }
  }
`;
