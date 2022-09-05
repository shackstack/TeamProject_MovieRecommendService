import Header from "src/components/header/header";
import { BannerScreen } from "src/styles/components/banner/banner";
import { DesolveCover } from "src/styles/components/layout/global";
import List from "src/components/list/list";
import React from "react";

const BrowseMain = () => {
    return (
        <>
            <Header></Header>
            <BannerScreen>
                <img
                    alt="gone"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/d0ee3fb7-f68f-4bcf-bc7a-70804965e778/KR-ko-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                ></img>
                <DesolveCover opacity={0.7}></DesolveCover>
            </BannerScreen>
            <List></List>
        </>
    );
};
export default React.memo(BrowseMain);
