import React from "react";
import DesktopHotelCardV1 from "../components/DesktopHotelCardV1/DesktopHotelCardV1";
import DesktopList from "../components/List/DesktopList";
import DesktopFlightCard from "../components/DesktopFlightCard/DesktopFlightCard";

function CaseDesktop() {
    const cards = <>
        <DesktopFlightCard option={1} title={"Test"} price={"11"} stars={5} rating={5} reviews={100} cityCenterDistance={"10km"}></DesktopFlightCard>
        <DesktopHotelCardV1 option={1}
                   title={"Hampton by Hilton"}
                   price={"£159"}
                   stars={3}
                   rating={4.0}
                   reviews={116}
                   cityCenterDistance={'7.6km'}></DesktopHotelCardV1>

        {/*<DesktopHotelCardV1 option={2}*/}
        {/*           title={"AC Hotel Som"}*/}
        {/*           price={"£185"}*/}
        {/*           stars={4}*/}
        {/*           rating={4.0}*/}
        {/*           reviews={670}*/}
        {/*           cityCenterDistance={'8.06km'}></DesktopHotelCardV1>*/}

        {/*<DesktopHotelCardV1 option={3}*/}
        {/*           title={"Castell Beach Aparthotel"}*/}
        {/*           price={"£119"}*/}
        {/*           stars={2}*/}
        {/*           rating={4.5}*/}
        {/*           reviews={2}*/}
        {/*           cityCenterDistance={'9.87km'}></DesktopHotelCardV1>*/}
    </>
    return (
        <DesktopList children={cards}></DesktopList>
    )
}
export default CaseDesktop