import React from "react";
import List from "../components/List/List";
import HotelCardV5 from "../components/HotelCardV5/HotelCardV5";

function CaseFive() {
    const cards = <>
        <HotelCardV5 option={1}
                   title={"Hampton by Hilton"}
                   price={"£159"}
                   stars={3}
                   rating={4.0}
                   reviews={116}
                   cityCenterDistance={'7.6km'}></HotelCardV5>

        <HotelCardV5 option={2}
                   title={"AC Hotel Som"}
                   price={"£185"}
                   stars={4}
                   rating={4.0}
                   reviews={670}
                   cityCenterDistance={'8.06km'}></HotelCardV5>

        <HotelCardV5 option={3}
                   title={"Castell Beach Aparthotel"}
                   price={"£119"}
                   stars={2}
                   rating={4.5}
                   reviews={2}
                   cityCenterDistance={'9.87km'}></HotelCardV5>
    </>
    return (
        <List children={cards}></List>
    )
}
export default CaseFive