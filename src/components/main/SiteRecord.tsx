import React from "react";
import styled from "styled-components";

export const SiteRecord = () => {
  return (
    <SiteInfo>
      <p>
        <span role="img" aria-label="emoji">
          ✨
        </span>
        This site is under developing, see you soon&nbsp;
        <span role="img" aria-label="emoji">
          ✨
        </span>
      </p>
      <br />
      <p>
        Written by Caper with passion and&nbsp;
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </p>
      <Anchor
        href="http://www.beian.miit.gov.cn/"
        aria-label="link and check for this site"
      >
        浙ICP备19047176号
      </Anchor>
    </SiteInfo>
  );
};

const SiteInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-size: 14px;
  color: dimgray;
  & > p:hover {
    color: goldenrod;
  }
`;

const Anchor = styled.a`
  padding: 1rem 2rem;
  font-size: 8px;
  color: dimgray;
  &:hover {
    color: #eee;
  }
`;
