import {ReactNode} from "react";
import './BpkAccessibilityGroup.scss';

type Props = {
    children: ReactNode | string;
    label: string;
};

const BpkAccessibilityGroup = ({children, label}: Props) => {
    return (
        <div className={'GroupContainer'}>
            <div className={'GroupLabel'}>
                {label}
            </div>
            <div aria-hidden>
                {children}
            </div>
        </div>
    )
}

export default BpkAccessibilityGroup