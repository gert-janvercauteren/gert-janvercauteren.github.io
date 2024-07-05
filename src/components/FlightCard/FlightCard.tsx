import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import {BpkSaveButton, SIZE_TYPES, STYLE_TYPES} from "@skyscanner/backpack-web/bpk-component-card-button";
import BpkCard from "@skyscanner/backpack-web/bpk-component-card";
import React from "react";
import './FlightCard.scss'
import {useState} from "react";

function FlightCard() {

    const title = 'Vueling Airlines, from £152'
    const [hotelSaved, setHotelSaved] = useState(false)
    const a11ySave = `Save, ${title}`
    const a11yRemoveSaved = `Delete saved, ${title}`

    return (
        <BpkCard atomic={false} padded={false} className={'FlightCard'}>
            <div className={'TitleRow'}>
                <BpkText tagName={'h3'}>Vueling Airlines</BpkText>
            </div>

            {/* Leg one */}
            <div className={'FlightLeg'} role={'group'} aria-label={'Outbound'}>
                <div>
                    <BpkText textStyle={TEXT_STYLES.label1} tagName={'p'}>10:10</BpkText>
                    <BpkText textStyle={TEXT_STYLES.base} tagName={'p'}>
                        <span aria-hidden>LHR</span>
                        <span className={'visually-hidden'}>London Heathrow Airport.</span>
                    </BpkText>
                </div>
                <div>
                    <BpkText textStyle={TEXT_STYLES.caption} tagName={'p'}>
                        <span aria-hidden>2h 10m</span>
                        <span className={'visually-hidden'}>2 hours, 10 minutes</span>
                    </BpkText>
                    <BpkText textStyle={TEXT_STYLES.caption} tagName={'p'}>Direct</BpkText>
                </div>
                <div>
                    <BpkText textStyle={TEXT_STYLES.label1} tagName={'p'}>13:20</BpkText>
                    <BpkText textStyle={TEXT_STYLES.base} tagName={'p'}>
                        <span aria-hidden>BCN</span>
                        <span className={'visually-hidden'}>Barcelona Airport</span>
                    </BpkText>
                </div>
            </div>

            <div className={'FlightLeg'} role={'group'} aria-label={'Return'}>
                <div>
                    <BpkText textStyle={TEXT_STYLES.label1} tagName={'p'}>18:30</BpkText>
                    <BpkText textStyle={TEXT_STYLES.base} tagName={'p'}>
                        <span aria-hidden>LHR</span>
                        <span className={'visually-hidden'}>London Heathrow Airport</span>
                    </BpkText>
                </div>
                <div>
                    <BpkText textStyle={TEXT_STYLES.caption} tagName={'p'}>
                        <span aria-hidden>2h 15m</span>
                        <span className={'visually-hidden'}>2 hours, 15 minutes</span>
                    </BpkText>
                    <BpkText textStyle={TEXT_STYLES.caption} tagName={'p'}>Direct</BpkText>
                </div>
                <div>
                    <BpkText textStyle={TEXT_STYLES.label1} tagName={'p'}>19:45</BpkText>
                    <BpkText textStyle={TEXT_STYLES.base} tagName={'p'}>
                        <span aria-hidden>BCN</span>
                        <span className={'visually-hidden'}>Barcelona Airport</span>
                    </BpkText>
                </div>
            </div>

            {/* Positioned absolute in the top right corner */}
            <div className={"FlightSaveButton"}>
                <BpkSaveButton
                    checked={hotelSaved}
                    accessibilityLabel={hotelSaved ? a11yRemoveSaved : a11ySave}
                    onCheckedChange={() => {
                        console.log('save status changed!');
                        setHotelSaved(!hotelSaved)
                    }}
                    size={SIZE_TYPES.default}
                    style={STYLE_TYPES.default}
                />
            </div>

            <hr aria-hidden />
            <div className={'FlightPriceRow'}>
                <div>
                    <BpkText textStyle={TEXT_STYLES.caption} tagName={'p'}>13 deals from</BpkText>
                    <BpkText textStyle={TEXT_STYLES.heading4} tagName={'p'}>£152</BpkText>
                </div>
            </div>

            {/*Link to view details is placed at the end and css is used to make the whole card clickable */}
            <div className={'CardLink'}>
                <a href="https://example.com" className={'CardRound'}>
                    <span className={'visually-hidden'}>Details, {title}</span>
                </a>
            </div>
        </BpkCard>
    )
}

export default FlightCard