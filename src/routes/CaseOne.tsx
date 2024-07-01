import BpkText, {TEXT_STYLES} from '@skyscanner/backpack-web/bpk-component-text';
import React from "react";
import HotelCard from "../components/HotelCard/HotelCard";
import CarCard from "../components/CarCard/CarCard";
import FlightCard from "../components/FlightCard/FlightCard";
import List from "../components/List/List";

function CaseOne() {
    const cards = <>
        <HotelCard option={1}
                   title={"Hampton by Hilton"}
                   price={"£159"}
                   stars={3}
                   rating={4.0}
                   reviews={116}
                   cityCenterDistance={'7.6km'}></HotelCard>

        <HotelCard option={2}
                   title={"AC Hotel Som"}
                   price={"£185"}
                   stars={4}
                   rating={4.0}
                   reviews={670}
                   cityCenterDistance={'8.06km'}></HotelCard>

        <HotelCard option={3}
                   title={"Castell Beach Aparthotel"}
                   price={"£119"}
                   stars={2}
                   rating={4.5}
                   reviews={2}
                   cityCenterDistance={'9.87km'}></HotelCard>
    </>
    return (
        <List title={"Hotels in Barcelona"} count={3} children={cards}></List>
    )
}
export default CaseOne