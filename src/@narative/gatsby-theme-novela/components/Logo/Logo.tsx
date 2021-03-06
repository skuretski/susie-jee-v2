import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import Image from "@narative/gatsby-theme-novela/src/components/Image";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
      <Image src="https://i.imgur.com/wPkfN8I.png"/>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
