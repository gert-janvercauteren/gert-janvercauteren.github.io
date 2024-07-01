import React from "react";
import List from "../components/List/List";
import HotelCardProduction from "../components/HotelCardProduction/HotelCardProduction";

function CaseProd() {
    const cards = <>
        <HotelCardProduction option={1}
                             title={"Hampton by Hilton"}
                             price={"£159"}
                             stars={3}
                             rating={4.0}
                             reviews={116}
                             cityCenterDistance={'7.6km'}></HotelCardProduction>

        <HotelCardProduction option={2}
                             title={"AC Hotel Som"}
                             price={"£185"}
                             stars={4}
                             rating={4.0}
                             reviews={670}
                             cityCenterDistance={'8.06km'}></HotelCardProduction>

        <HotelCardProduction option={3}
                             title={"Castell Beach Aparthotel"}
                             price={"£119"}
                             stars={2}
                             rating={4.5}
                             reviews={2}
                             cityCenterDistance={'9.87km'}></HotelCardProduction>
    </>
    return (
        <List title={"Hotels in Barcelona"} count={3} children={cards}></List>
    )
}
export default CaseProd