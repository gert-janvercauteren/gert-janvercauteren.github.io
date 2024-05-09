import React from 'react';
import './App.scss';
import BpkText, {TEXT_STYLES} from '@skyscanner/backpack-web/bpk-component-text';
import HotelCard from "./components/HotelCard/HotelCard";

function App() {
    return (
        <div className={'App'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading2}>Hotels</BpkText>
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
        </div>
    );
}

export default App;
