import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import BpkStarRating from "@skyscanner/backpack-web/bpk-component-star-rating";
import {BpkSaveButton, SIZE_TYPES, STYLE_TYPES} from "@skyscanner/backpack-web/bpk-component-card-button";
import BpkCard from "@skyscanner/backpack-web/bpk-component-card";
import React from "react";
import {useState} from "react";
import BpkRating from "@skyscanner/backpack-web/bpk-component-rating"
import ratingLogo from "../../assets/rating.svg"

import STYLES from "./HotelCardV6.scss";
import {cssModules} from '@skyscanner/backpack-web/bpk-react-utils';

const getClassName = cssModules(STYLES);

interface Props {
    option: number
    title: string
    price: string
    stars: number
    rating: number
    reviews: number
    cityCenterDistance: string
}

function HotelCardV6({title, price, stars, rating, reviews, option, cityCenterDistance}: Props) {

    const cityCenterDistanceStr = `${cityCenterDistance} from city center`
    const [hotelSaved, setHotelSaved] = useState(false)

    const a11yTitle = `${title}, ${price} per night, option ${option}`
    const a11yRating = `Rated ${rating} of 5 on Skyscanner. Based on ${reviews} reviews.`

    return (
        <BpkCard atomic={false} padded={false} className={getClassName('HotelCard')}>
            <div aria-hidden>
                <div className={getClassName('HotelCard__Gallery')}>

                </div>
            </div>
            <div className={getClassName('HotelCard__CardContent')}>
                {/* Base hotel name */}
                <div className={getClassName('HotelCard__CardContent__Headline')}>
                    <BpkText textStyle={TEXT_STYLES.heading5} tagName={'h2'}>
                        <a href={`https://example.com/${title}`} className={getClassName('HotelCard__CardContent__CardLink')}>
                            <span className={'visually-hidden'}>{a11yTitle}</span>
                        </a>
                        <span aria-hidden>{title}</span>
                    </BpkText>
                    <span>
                        <BpkStarRating ratingLabel={stars + ' Stars'} maxRating={stars} rating={stars}
                                       aria-hidden></BpkStarRating>
                        <span className="visually-hidden">{`${stars} star hotel`}</span>
                    </span>
                </div>
                <BpkText>{cityCenterDistanceStr}</BpkText>

                {/* Rating */}
                <BpkText textStyle={TEXT_STYLES.footnote} tagName={'p'}>
                    <BpkRating
                        ariaLabel={a11yRating}
                        title={
                            <img src={ratingLogo} alt=""/>
                        }
                        subtitle={`${reviews} reviews`}
                        value={rating}
                        showScale={false}
                        ratingScale={"zeroToFive"}/>
                </BpkText>

                {/* Price */}
                <div className={getClassName('HotelCard__CardContent__PriceContainer')}>
                    <BpkText textStyle={TEXT_STYLES.heading4} aria-hidden>
                        {price} night
                    </BpkText>
                </div>

                {/* Positioned absolute in the top right corner */}
                <div className={getClassName('HotelCard__SaveButton')}>
                    <BpkSaveButton
                        checked={hotelSaved}
                        accessibilityLabel={`Save ${title}`}
                        onCheckedChange={() => {
                            console.log('save status changed!');
                            setHotelSaved(!hotelSaved)
                        }}
                        size={SIZE_TYPES.default}
                        style={STYLE_TYPES.contained}
                    />
                </div>
            </div>
        </BpkCard>
    )
}

export default HotelCardV6