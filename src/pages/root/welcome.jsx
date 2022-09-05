import React from "react";
import { StyGlFullScreen } from "src/styles/components/layout/global";
import { StyImgFullScreen } from "src/styles/components/img/layout";
import styled, { css } from "styled-components";
import Header from "src/components/header/header";

const HeroLayout = styled.div`
  position: relative;
  height: 100%;
  max-height: ${window.innerHeight}px;
  overflow: hidden;
`;
const OpacityCover = css`
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
`;
const Welcome = () => {
  return (
    <>
      <Header />
      <HeroLayout>
        <StyImgFullScreen
          alt="gone"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/d0ee3fb7-f68f-4bcf-bc7a-70804965e778/KR-ko-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/d0ee3fb7-f68f-4bcf-bc7a-70804965e778/KR-ko-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/d0ee3fb7-f68f-4bcf-bc7a-70804965e778/KR-ko-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/d0ee3fb7-f68f-4bcf-bc7a-70804965e778/KR-ko-20220829-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"></StyImgFullScreen>
        <StyGlFullScreen restStyle={OpacityCover}></StyGlFullScreen>
      </HeroLayout>
    </>
  );
};

export default Welcome;
