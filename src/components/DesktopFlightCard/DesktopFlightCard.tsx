// @ts-nocheck
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import React, {useRef} from "react";
import './DesktopFlightCard.scss'
import {BpkDividedCard} from "@skyscanner/backpack-web/bpk-component-card";
import BpkTooltip from "@skyscanner/backpack-web/bpk-component-tooltip";

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

    const targetRefOutboundOutbound = useRef(null);
    const targetOutboundOutbound = (
        <div ref={targetRefOutboundOutbound} className={'my-tooltip-target'}>
            <BpkText>LHR</BpkText>
        </div>
    );

    const targetRefOutboundArrival = useRef(null);
    const targetOutboundArrival = (
        <div ref={targetRefOutboundArrival} className={'my-tooltip-target'}>
            <BpkText>BCN</BpkText>
        </div>
    );

    const targetRefReturnArrival = useRef(null);
    const targetReturnArrival = (
        <div ref={targetRefReturnArrival} className={'my-tooltip-target'}>
            <BpkText>LHR</BpkText>
        </div>
    );

    const targetRefReturnOutbound = useRef(null);
    const targetReturnOutbound = (
        <div ref={targetRefReturnOutbound} className={'my-tooltip-target'}>
            <BpkText>BCN</BpkText>
        </div>
    );

    const mainContent = (
        <div className={"FlightLegContainer"}>
            <BpkText tagName={'h2'}>
                <a href={"https://example.com"} className={"FlightCard__CardLink"}>
                    <span className={'visually-hidden'}>Swiss airlines, Option 1</span></a>
            </BpkText>

            {/* Outbound leg */}
            <div aria-label={outboundA11y}>
                <div className={"FlightLeg"} aria-hidden>
                    <div className={"FlightLeg__AirlineLogo"}>
                        <span className={'visually-hidden'}>Swiss Airlines</span>
                    </div>
                    <div className={"FlightLeg__Outbound"}>
                        <BpkText textStyle={TEXT_STYLES.heading4}>12:30</BpkText>
                        <BpkTooltip
                            ariaLabel="London Heathrow"
                            id="my-tooltip"
                            target={targetOutboundArrival}
                        >
                            London Heathrow
                        </BpkTooltip>
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
                            target={targetOutboundOutbound}
                        >
                            Barcelona
                        </BpkTooltip>
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
                        <BpkTooltip
                            ariaLabel="London Heathrow"
                            id="my-tooltip"
                            target={targetReturnOutbound}
                        >
                            Barcelona
                        </BpkTooltip>
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
                            target={targetReturnArrival}
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