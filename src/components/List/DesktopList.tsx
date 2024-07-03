import React from "react";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import './DesktopList.scss'

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

function DesktopList({children}: Props) {
    return (
        <div className={'DesktopMainContent'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading3}>Return flights to Barcelona</BpkText>
            <BpkText tagName={'p'} textStyle={TEXT_STYLES.footnote}>3 search results</BpkText>
            {children}
        </div>
    )
}

export default DesktopList