import BpkCard from "@skyscanner/backpack-web/bpk-component-card";
import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import React from "react";
import './CarCard.scss'
import vendorLogo from '../../assets/car_vendor_image.png';
import BpkBadge from "@skyscanner/backpack-web/bpk-component-badge";

interface Props {
    option: number
    title: string
    similarTitle: string
    partner: string
    dealCount: number
    price: string
}

function CarCard({title, similarTitle, partner, dealCount, price}: Props) {
    const partnerA11yText = `Supplied by, ${partner}`
    const priceA11yText = `${dealCount} deals from ${price}`

    return (
        <BpkCard atomic={false} padded={false} className={'CarCard'}>
            <div className={'Content'}>
                <div className={'TitleRow'}>
                    <div>
                        <BpkText textStyle={TEXT_STYLES.heading5} tagName={'h3'}>
                            {title}
                        </BpkText>
                        <BpkText textStyle={TEXT_STYLES.caption} tagName={'p'}>
                            {similarTitle}
                        </BpkText>
                    </div>
                    <div>
                        <img src={vendorLogo} alt={partnerA11yText}/>
                    </div>
                </div>
                <div className={'DetailRow'}>
                    <div>
                        <div className={'ChipGroup'}>
                            <BpkBadge>5 seats</BpkBadge>
                            <BpkBadge>1 bag</BpkBadge>
                            <BpkBadge>Automatic transmission</BpkBadge>
                            <BpkBadge>Electric</BpkBadge>
                        </div>
                    </div>
                    <div className={'CarImage'}>

                    </div>
                </div>
            </div>
            <hr aria-hidden/>
            <div className={'Content'}>
                <div className={'PriceRow'}>
                    <BpkText textStyle={TEXT_STYLES.base} tagName={'p'}>
                        Some deals with free cancellation
                    </BpkText>

                    <div className={'PriceInfo'}>
                        <span className={'visually-hidden'}>{priceA11yText}</span>
                        <BpkText textStyle={TEXT_STYLES.base} tagName={'p'} aria-hidden>
                            {dealCount} deals from
                        </BpkText>
                        <BpkText textStyle={TEXT_STYLES.heading4} tagName={'p'} aria-hidden>
                            {price}
                        </BpkText>
                    </div>
                </div>
            </div>
            {/*Link to view details is placed at the end and css is used to make the whole card clickable */}
            <div className={'CardLink'}>
                <a href="https://example.com" className={'CardRound'}>
                    <span className={'visually-hidden'}>View deals, {title}</span>
                </a>
            </div>
        </BpkCard>
    )
}

export default CarCard