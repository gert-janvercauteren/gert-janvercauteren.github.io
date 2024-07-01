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

function CarCard({title, similarTitle, partner, dealCount, price, option}: Props) {
    const partnerA11yText = `Supplied by, ${partner}`
    const priceA11yText = `${dealCount} deals from ${price}`
    const a11yTitle = `${title}, ${priceA11yText}, option ${option}`

    return (
        <BpkCard atomic={false} padded={false} className={'CarCard'}>
            <div className={'Content'}>
                <div className={'TitleRow'}>
                    <div>
                        <BpkText textStyle={TEXT_STYLES.heading5} tagName={'h2'}>
                            <span aria-hidden>{title}</span>
                            <a href={`https://example.com/${title}`} className={'CardLink'}>
                                <span className={'visually-hidden'}>{a11yTitle}</span>
                            </a>
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

                    <div className={'PriceInfo'} aria-hidden>
                        <BpkText textStyle={TEXT_STYLES.base} tagName={'p'}>
                            {dealCount} deals from
                        </BpkText>
                        <BpkText textStyle={TEXT_STYLES.heading4} tagName={'p'}>
                            {price}
                        </BpkText>
                    </div>
                </div>
            </div>
        </BpkCard>
    )
}

export default CarCard