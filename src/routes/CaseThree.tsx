import BpkText, {TEXT_STYLES} from '@skyscanner/backpack-web/bpk-component-text';
import React from "react";
import HotelCardV3 from "../components/HotelCardV3/HotelCardV3";
import CarCardV3 from "../components/CarCardV3/CarCardV3";

function CaseThree() {
    return (
        <div className={'main-content'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading2}>Hotels</BpkText>
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
        </div>
    )
}

export default CaseThree