import React from "react";
import HotelCardV2 from "../components/HotelCardV2/HotelCardV2";
import List from "../components/List/List";

function CaseTwo() {
    const cards = <>
        <HotelCardV2 option={1}
                     title={"Hampton by Hilton"}
                     price={"£159"}
                     stars={3}
                     rating={4.0}
                     reviews={116}
                     cityCenterDistance={'7.6km'}></HotelCardV2>

        <HotelCardV2 option={2}
                     title={"AC Hotel Som"}
                     price={"£185"}
                     stars={4}
                     rating={4.0}
                     reviews={670}
                     cityCenterDistance={'8.06km'}></HotelCardV2>

        <HotelCardV2 option={3}
                     title={"Castell Beach Aparthotel"}
                     price={"£119"}
                     stars={2}
                     rating={4.5}
                     reviews={2}
                     cityCenterDistance={'9.87km'}></HotelCardV2>
    </>
    return (
        <List title={"Hotels in Barcelona"} count={3} children={cards}></List>
    )
}

export default CaseTwo