import React from "react";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

function List({children}: Props) {
    return (
        <div className={'main-content'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading3}>Hotels in Barcelona</BpkText>
            <BpkText tagName={'p'} textStyle={TEXT_STYLES.footnote}>3 results</BpkText>
            {children}
        </div>
    )
}

export default List