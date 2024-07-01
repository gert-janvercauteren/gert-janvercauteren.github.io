import React from "react";
import HotelCard from "../components/HotelCard/HotelCard";
import List from "../components/List/List";
import HotelCardV4 from "../components/HotelCardV4/HotelCardV4";

function CaseFour() {
    const cards = <>
        <HotelCardV4 option={1}
                   title={"Hampton by Hilton"}
                   price={"£159"}
                   stars={3}
                   rating={4.0}
                   reviews={116}
                   cityCenterDistance={'7.6km'}></HotelCardV4>

        <HotelCardV4 option={2}
                   title={"AC Hotel Som"}
                   price={"£185"}
                   stars={4}
                   rating={4.0}
                   reviews={670}
                   cityCenterDistance={'8.06km'}></HotelCardV4>

        <HotelCardV4 option={3}
                   title={"Castell Beach Aparthotel"}
                   price={"£119"}
                   stars={2}
                   rating={4.5}
                   reviews={2}
                   cityCenterDistance={'9.87km'}></HotelCardV4>
    </>
    return (
        <List title={"Hotels in Barcelona"} count={3} children={cards}></List>
    )
}
export default CaseFour