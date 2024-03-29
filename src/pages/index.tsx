import { SEO } from '@/components/SEO';
// import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import HomePageHero from '../components/Homepage/HomePageHero';
import HomePageSlider from '../components/Homepage/HomePageSlider';

export default function Home() {
  return (
    <>
      <SEO></SEO>
      <HomePageWrapper>
        <HomePageSlider></HomePageSlider>
        <HomePageHero></HomePageHero>
      </HomePageWrapper>
    </>
  );
}

const HomePageWrapper = styled.div``;
