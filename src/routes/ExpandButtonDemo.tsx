import React, {useState} from "react";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import BpkSmallFoodIcon from "@skyscanner/backpack-web/bpk-component-icon/sm/food";
import BpkSmallCafeIcon from "@skyscanner/backpack-web/bpk-component-icon/sm/cafe";
import BpkSmallMediaIcon from "@skyscanner/backpack-web/bpk-component-icon/sm/media";
import BpkSmallPowerplugIcon from "@skyscanner/backpack-web/bpk-component-icon/sm/powerplug";
import BpkSmallWifiIcon from "@skyscanner/backpack-web/bpk-component-icon/sm/wifi";
import BpkSmallDotIcon from "@skyscanner/backpack-web/bpk-component-icon/sm/dot";

import {withButtonAlignment, withRtlSupport} from '@skyscanner/backpack-web/bpk-component-icon';
import ChevronDownIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/chevron-down';
import ChevronUpIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/chevron-up';
import {BpkButtonV2, BUTTON_TYPES} from '@skyscanner/backpack-web/bpk-component-button';

const AlignedChevronDownIcon = withButtonAlignment(withRtlSupport(ChevronDownIcon));
const AlignedChevronUpIcon = withButtonAlignment(withRtlSupport(ChevronUpIcon));

function ExpandButtonDemo() {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className='main-content'>
            <BpkText textStyle={TEXT_STYLES.heading1} tagName='h1'>Button demo</BpkText>
            <div className='icon-grid'>
                <BpkSmallFoodIcon/>
                <BpkSmallCafeIcon/>
                <BpkSmallMediaIcon/>
                <BpkSmallPowerplugIcon/>
                <BpkSmallWifiIcon/>
                <BpkButtonV2
                    iconOnly
                    type={BUTTON_TYPES.link}
                    aria-label='Amenities included: meals, non-alcoholic beverages, on-demand video, power & USB outlets, Wi-Fi'
                    aria-expanded={expanded}
                    aria-controls='amenities'
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded && <AlignedChevronUpIcon/>}
                    {!expanded && <AlignedChevronDownIcon/>}
                    <span className="visually-hidden">Search</span>
                </BpkButtonV2>
            </div>
            <div id='amenities' hidden={!expanded}>
                <ul>
                    <li><BpkSmallFoodIcon/> Meals provided</li>
                    <li><BpkSmallCafeIcon/> Nonalcoholic beverages available</li>
                    <li><BpkSmallMediaIcon/> Seatback on-demand video</li>
                    <li><BpkSmallDotIcon /> Power & USB outlets</li>
                    <li><BpkSmallWifiIcon/> Streaming Capable Wi-Fi (fee)</li>
                    <li><BpkSmallDotIcon /> 81 cm seat pitch</li>
                    <li><BpkSmallDotIcon /> 3-3-3 seat layout</li>
                    <li><BpkSmallDotIcon /> Airbus A350 (widebody)</li>
                </ul>
            </div>
        </div>
    )
}

export default ExpandButtonDemo;