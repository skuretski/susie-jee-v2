import React from "react";
import styled from "@emotion/styled";

import Image from "@narative/gatsby-theme-novela/src/components/Image";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import { IAuthor } from "@narative/gatsby-theme-novela/src/types";

import SocialLinks from "@narative/gatsby-theme-novela/src/components/SocialLinks";

interface AuthorHeroProps {
  author: IAuthor;
}

const AuthorHero: React.FC<AuthorHeroProps> = ({ author }) => {
  return (
    <Hero>
      <HeroImage>
        <Image src={author.avatar.large} />
      </HeroImage>
      <Heading>{author.name}</Heading>
      <Subheading>I am currently working as a full stack software engineer and in graduate school at the University of Illinois Urbana - Champaign for computer science, focusing on data science and machine learning. I had a past life as an intensive care nurse where I pushed a good amount of epinephrine and witnessed some truly amazing things. 
        <br/><br/>In my down time, I enjoy cooking and baking, entertaining my rescued dachshund mix Zelda, and playing video and tabletop games with my husband and friends.   
      </Subheading>
      <div style={{paddingTop: '2rem'}}>
        <button style={{padding: '1rem 2rem', border: '1px solid #e5e5e5', borderRadius: '0.3rem'}}>
          <Resume 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://docs.google.com/viewerng/viewer?url=https://github.com/skuretski/susie-jee-v2/raw/master/docs/skuretski.pdf">
            Resume
          </Resume>
        </button>
      </div>
      <Social>
        <SocialLinks links={author.social} />
      </Social>
    </Hero>
  );
};

export default AuthorHero;

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 110px;
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid ${p => p.theme.colors.background};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);

  ${mediaqueries.tablet`
    width: 146px;
    height: 146px;
  `}

  ${mediaqueries.phablet`
    width: 136px;
    height: 136px;
    margin-bottom: 25px;
  `}
`;

const Heading = styled.h1`
  font-size: 38px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;

  ${mediaqueries.tablet`
  `}

  ${mediaqueries.phablet`
  `}
`;

const Subheading = styled.p`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: left;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const Resume = styled.a`
  color: ${p => p.theme.colors.grey};
`;