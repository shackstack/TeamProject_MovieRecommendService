import React from "react";
import { Link } from "react-router-dom";
import { StyCard } from "src/styles/components/card/card";

const ListCard = ({ element }) => {
    return (
        <StyCard>
            <div>
                <img
                    alt="No image"
                    src={
                        element?.src ||
                        "https://occ-0-1394-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbYHLgFrTHDxnmT-hfRxOGX7OWtUvdE3CZdDIUuqy36w9zVJbTPBYPkA8GPHCC75IBIMoKxSLCQKoS1Kh914lcQUNVXnDW470A9N.webp?r=9f4"
                    }
                ></img>
            </div>
            <div>
                <div className="title">{element?.title || "제목없음"}</div>
                <Link className="link-to" to={`detail/${element?.id}`}>
                    {"See More ⊳"}
                </Link>
            </div>
        </StyCard>
    );
};
export default React.memo(ListCard);
