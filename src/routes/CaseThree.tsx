import BpkText, {TEXT_STYLES} from '@skyscanner/backpack-web/bpk-component-text';
import React from "react";
import HotelCardV3 from "../components/HotelCardV3/HotelCardV3";
import List from "../components/List/List";

function CaseThree() {
    const cards = <>
        <HotelCardV3 option={1}
                     title={"Hampton by Hilton"}
                     price={"£159"}
                     stars={3}
                     rating={4.0}
                     reviews={116}
                     cityCenterDistance={'7.6km'}></HotelCardV3>

        <HotelCardV3 option={2}
                     title={"AC Hotel Som"}
                     price={"£185"}
                     stars={4}
                     rating={4.0}
                     reviews={670}
                     cityCenterDistance={'8.06km'}></HotelCardV3>

        <HotelCardV3 option={3}
                     title={"Castell Beach Aparthotel"}
                     price={"£119"}
                     stars={2}
                     rating={4.5}
                     reviews={2}
                     cityCenterDistance={'9.87km'}></HotelCardV3>
    </>
    return (
       <List title={"Hotels in Barcelona"} count={3} children={cards}></List>
    )
}

export default CaseThree