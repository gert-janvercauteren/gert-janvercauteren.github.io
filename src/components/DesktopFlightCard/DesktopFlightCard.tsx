// @ts-nocheck
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import React, {useRef} from "react";
import './DesktopFlightCard.scss'
import {BpkDividedCard} from "@skyscanner/backpack-web/bpk-component-card";
import BpkTooltip from "@skyscanner/backpack-web/bpk-component-tooltip/src/BpkTooltip";

interface Props {
    option: number
    title: string
    price: string
    stars: number
    rating: number
    reviews: number
    cityCenterDistance: string
}

function DesktopFlightCard({title, price, stars, rating, reviews, option, cityCenterDistance}: Props) {

    const outboundA11y = "Outbound, Swiss airlines, from London Heathrow at 12:30 to Barcelona at 14:30, Direct flight, 2 hours 20 minutes"
    const returnA11y = "Return, Swiss airlines, from Barcelona at 12:30 to London Heathrow at 14:30, Direct flight, 2 hours 20 minutes"

    const targetRef = useRef(null);
    const target = (
        <div ref={targetRef} className={'my-tooltip-target'}>
            <BpkText textStyle="lg">LHR</BpkText>
        </div>
    );

    const mainContent = (
        <div className={"FlightLegContainer"}>
            <BpkText tagName={'h2'} className={'visually-hidden'}>Swiss airlines, Option 1</BpkText>

            {/* Outbound leg */}
            <div aria-label={outboundA11y}>
                <div className={"FlightLeg"} aria-hidden>
                    <div className={"FlightLeg__AirlineLogo"}>
                        <span className={'visually-hidden'}>Swiss Airlines</span>
                    </div>
                    <div className={"FlightLeg__Outbound"}>
                        <BpkText textStyle={TEXT_STYLES.heading4}>12:30</BpkText>
                        <BpkText>LHR</BpkText>
                    </div>
                    <div className={"FlightLeg__Duration"}>
                        <BpkText>02h20</BpkText>
                        <BpkText>Direct</BpkText>
                    </div>
                    <div className={"FlightLeg__Inbound"}>
                        <BpkText textStyle={TEXT_STYLES.heading4}>14:50</BpkText>
                        <BpkText>BCN</BpkText>
                    </div>
                </div>
            </div>

            <div aria-label={returnA11y}>
                <div className={"FlightLeg"} aria-hidden>
                    <div className={"FlightLeg__AirlineLogo"}>
                        <span className={'visually-hidden'}>Swiss Airlines</span>
                    </div>
                    <div className={"FlightLeg__Outbound"}>
                        <BpkText textStyle={TEXT_STYLES.heading4}>12:30</BpkText>
                        <BpkText>BCN</BpkText>
                    </div>
                    <div className={"FlightLeg__Duration"}>
                        <BpkText>02h20</BpkText>
                        <BpkText>Direct</BpkText>
                    </div>
                    <div className={"FlightLeg__Inbound"}>
                        <BpkText textStyle={TEXT_STYLES.heading4}>14:50</BpkText>
                        <BpkTooltip
                            ariaLabel="London Heathrow"
                            id="my-tooltip"
                            target={target}
                        >
                            London Heathrow
                        </BpkTooltip>
                    </div>
                </div>
            </div>
        </div>
    )

    const secondaryContent = (
        <div>
            Secondary
        </div>
    )

    return (
        <BpkDividedCard primaryContent={mainContent} secondaryContent={secondaryContent} atomic={false}
                        className={"FullWidth"}></BpkDividedCard>
    )
}

export default DesktopFlightCard