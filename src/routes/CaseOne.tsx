import BpkText, {TEXT_STYLES} from '@skyscanner/backpack-web/bpk-component-text';
import React from "react";
import HotelCard from "../components/HotelCard/HotelCard";
import CarCard from "../components/CarCard/CarCard";

function CaseOne() {
    return (
        <div className={'main-content'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading2}>Results</BpkText>
            <BpkText tagName={'h2'} textStyle={TEXT_STYLES.heading3}>Hotels</BpkText>
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

            <BpkText tagName={'h2'} textStyle={TEXT_STYLES.heading3}>Car Hire</BpkText>
            <CarCard option={1} title={"Chevrolet Bolt"} similarTitle={"Or similar intermediate SUV"} partner={"Hertz"} dealCount={5} price={"$56"}></CarCard>
            <CarCard option={2} title={"Tesla model 3"} similarTitle={"Or similar intermediate SUV"} partner={"Dollar"} dealCount={19} price={"$80"}></CarCard>
            <CarCard option={3} title={"Toyota Yaris"} similarTitle={"Or similar compact"} partner={"Thrifty"} dealCount={22} price={"$49"}></CarCard>
        </div>
    )
}
export default CaseOne