import React from "react";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";

import './ListDemo.scss'

function ListDemo() {
    return (
        <div className='main-content'>
            <ul>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/aria-role */}
                    <p className='list-item' role="text">
                        <BpkText textStyle={TEXT_STYLES.label2} tagName='span'>Free cancellation</BpkText>
                        <BpkText textStyle={TEXT_STYLES.footnote} tagName='span'>No</BpkText>
                    </p>
                </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/aria-role */}
                    <p className='list-item' role="text">
                        <BpkText textStyle={TEXT_STYLES.label2} tagName='span'>Mileage policy</BpkText>
                        <BpkText textStyle={TEXT_STYLES.footnote} tagName='span'>200 miles included</BpkText>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ListDemo;