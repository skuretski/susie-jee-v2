import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from '@narative/gatsby-theme-novela/src/components/Image';
import { IAuthor } from '@types';

function Bio({ author }: IAuthor) {
  return (
    <BioContainer>
      <BioAvatar
        as={author.authorsPage ? Link : 'div'}
        to={author.slug}
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <Image src={author.avatar.medium} />
        </BioAvatarInner>
      </BioAvatar>
      <BioText dangerouslySetInnerHTML={{ __html: author.bio }} />
    </BioContainer>
  );
}

export default Bio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 70px;
    height: 70px;
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 70px;
    height: 70px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const BioAvatarInner = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.6;
  text-align: left !important;
  color: ${p => p.theme.colors.grey};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;

const Resume = styled.div`

`;
