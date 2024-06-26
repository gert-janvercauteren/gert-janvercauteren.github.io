import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import BpkStarRating from "@skyscanner/backpack-web/bpk-component-star-rating";
import BpkCard from "@skyscanner/backpack-web/bpk-component-card";
import React from "react";
import './HotelCardV4.scss'
import {useState} from "react";
import BpkSaveButtonV2, {SIZE_TYPES, STYLE_TYPES} from "../BPKSaveButtonV2/BPKSaveButtonV2";

interface Props {
    option: number
    title: string
    price: string
    stars: number
    rating: number
    reviews: number
    cityCenterDistance: string
}

function HotelCardV4({title, price, stars, rating, reviews, option, cityCenterDistance}: Props) {

    const a11yTitle = `${option}, ${title}, ${price} per night`
    const a11yRating = `Rated ${rating} of 5 on TripAdvisor. Based on ${reviews} reviews.`

    const cityCenterDistanceStr = `${cityCenterDistance} from city center`

    const [hotelSaved, setHotelSaved] = useState(false)
    const a11ySave = `Save ${title}`

    return (
        <BpkCard atomic={false} padded={false} className={"HotelCard"}>
            <div aria-hidden>
                <div className={'Gallery'}>

                </div>
            </div>
            <div className={'CardContent'}>
                {/* Base hotel name */}
                <div className={'Headline'}>
                    <BpkText textStyle={TEXT_STYLES.heading5} tagName={'h2'}>
                        <span className={'visually-hidden'}>{a11yTitle}</span>
                        <span aria-hidden>{title}</span>
                    </BpkText>
                    <span>
                        <BpkStarRating ratingLabel={stars + ' Stars'} maxRating={stars} rating={stars} aria-hidden></BpkStarRating>
                        <span className="visually-hidden">{`${stars} star hotel`}</span>
                    </span>
                </div>
                <BpkText>{cityCenterDistanceStr}</BpkText>

                {/* Rating */}
                <BpkText textStyle={TEXT_STYLES.footnote} tagName={'p'}>
                    <a href={`https://example.com/rating-${title}`} className={'rating'}>
                        <span className={'visually-hidden'}>{a11yRating}</span>
                        <span aria-hidden>{rating}, TripAdvisor {reviews}</span>
                    </a>
                </BpkText>

                {/* Price */}
                <div className={'PriceContainer'}>
                    <BpkText textStyle={TEXT_STYLES.heading4} aria-hidden>
                        {price} night
                    </BpkText>
                </div>

                {/* Positioned absolute in the top right corner */}
                <div className={"SaveButton"}>
                    <BpkSaveButtonV2
                        checked={hotelSaved}
                        accessibilityLabel={a11ySave}
                        onCheckedChange={() => {
                            console.log('save status changed!');
                            setHotelSaved(!hotelSaved)
                        }}
                        size={SIZE_TYPES.default}
                        style={STYLE_TYPES.contained}
                    />
                </div>

                 {/*Link to view details is placed at the end and css is used to make the whole card clickable */}
                <div className={'CardLink'}>
                    <a href={`https://example.com/${title}`} className={'CardRound'}>
                        <span className={'visually-hidden'}>{title}</span>
                    </a>
                </div>
            </div>
        </BpkCard>
    )
}

export default HotelCardV4