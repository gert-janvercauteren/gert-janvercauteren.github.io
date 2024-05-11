import BpkText, {TEXT_STYLES} from '@skyscanner/backpack-web/bpk-component-text';
import React from "react";
import HotelCardV2 from "../components/HotelCardV2/HotelCardV2";
import CarCardV2 from "../components/CarCardV2/CarCardV2";

function CaseTwo() {
    return (
        <div className={'main-content'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading2}>Results</BpkText>
            <BpkText tagName={'h2'} textStyle={TEXT_STYLES.heading3}>Hotels</BpkText>
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

            <BpkText tagName={'h2'} textStyle={TEXT_STYLES.heading3}>Car Hire</BpkText>
            <CarCardV2 option={1} title={"Chevrolet Bolt"} similarTitle={"Or similar intermediate SUV"} partner={"Hertz"} dealCount={5} price={"$56"}></CarCardV2>
            <CarCardV2 option={2} title={"Tesla model 3"} similarTitle={"Or similar intermediate SUV"} partner={"Dollar"} dealCount={19} price={"$80"}></CarCardV2>
            <CarCardV2 option={3} title={"Toyota Yaris"} similarTitle={"Or similar compact"} partner={"Thrifty"} dealCount={22} price={"$49"}></CarCardV2>
        </div>
    )
}

export default CaseTwo