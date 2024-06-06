import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import BpkStarRating from "@skyscanner/backpack-web/bpk-component-star-rating";
import {BpkSaveButton, SIZE_TYPES, STYLE_TYPES} from "@skyscanner/backpack-web/bpk-component-card-button";
import BpkCard from "@skyscanner/backpack-web/bpk-component-card";
import React from "react";
import './HotelCardProduction.scss'
import {useState} from "react";

interface Props {
    option: number
    title: string
    price: string
    stars: number
    rating: number
    reviews: number
    cityCenterDistance: string
}

function HotelCardProduction({title, price, stars, rating, reviews, option, cityCenterDistance}: Props) {

    const a11yTitle = `${option}, ${title}, ${price} per night`
    const a11yRating = `Rated ${rating} of 5 on TripAdvisor. Based on ${reviews} reviews.`
    const a11yPrice = `${price} per night`

    const cityCenterDistanceStr = `${cityCenterDistance} from city center`

    const [hotelSaved, setHotelSaved] = useState(false)
    const a11ySave = `Save, ${title}`
    const a11yRemoveSaved = `Delete saved, ${title}`

    return (
        <BpkCard href={`https://example.com/${title}`} padded={false} className={"HotelCard"}>
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
                    <span
                        className={'visually-hidden'}>{a11yRating}</span>
                    <span aria-hidden>{rating}, TripAdvisor {reviews}</span>
                </BpkText>

                {/* Price */}
                <div className={'PriceContainer'}>
                    <BpkText textStyle={TEXT_STYLES.heading4} aria-hidden>
                        {price} night
                    </BpkText>
                </div>
            </div>
        </BpkCard>
    )
}

export default HotelCardProduction