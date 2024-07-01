import React from "react";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";

interface Props {
    children: React.ReactNode | React.ReactNode[];
    title: string;
    count: number;
}

function List({children, title, count}: Props) {
    return (
        <div className={'main-content'}>
            <BpkText tagName={'h1'} textStyle={TEXT_STYLES.heading3}>{title}</BpkText>
            <BpkText tagName={'p'} textStyle={TEXT_STYLES.footnote}>{`${count} search results`} </BpkText>
            {children}
        </div>
    )
}

export default List