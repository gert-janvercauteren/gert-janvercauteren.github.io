import BpkText, {TEXT_STYLES} from "@skyscanner/backpack-web/bpk-component-text";
import BpkStarRating from "@skyscanner/backpack-web/bpk-component-star-rating";
import {SIZE_TYPES, STYLE_TYPES} from "@skyscanner/backpack-web/bpk-component-card-button";
import {BpkDividedCard} from "@skyscanner/backpack-web/bpk-component-card";
import React from "react";
import './DesktopHotelCardV1.scss'
import {useState} from "react";
import BpkSaveButtonV2 from "../BPKSaveButtonV2/BPKSaveButtonV2";
import BpkRating from "@skyscanner/backpack-web/bpk-component-rating"
import ratingLogo from "../../assets/rating.svg"
import {BpkButtonV2} from "@skyscanner/backpack-web/bpk-component-button";

interface Props {
    option: number
    title: string
    price: string
    stars: number
    rating: number
    reviews: number
    cityCenterDistance: string
}

function DesktopHotelCardV1({title, price, stars, rating, reviews, option, cityCenterDistance}: Props) {

    const cityCenterDistanceStr = `${cityCenterDistance} from city center`
    const [hotelSaved, setHotelSaved] = useState(false)

    const a11yTitle = `${title}, ${price} per night, option ${option}, details`
    const a11yRating = `Rated ${rating} of 5 on Skyscanner. Based on ${reviews} reviews.`

    const primaryContent = (
        <div className={'MainCardContent'}>
            <div aria-hidden>
                <div className={'DesktopGallery'}>

                </div>
            </div>
            <div className={'CardContent'}>
                <div>
                    {/* Base hotel name */}
                    <div className={'Headline'}>
                        <BpkText textStyle={TEXT_STYLES.heading3} tagName={'h2'}>
                            <a href={`https://example.com/${title}`} className={'CardRound DesktopCardLink'}>
                                <span className={'visually-hidden'}>{a11yTitle}</span>
                            </a>
                            <span aria-hidden id={`title-${option}`}>{title}</span>
                        </BpkText>
                    </div>
                    <div>
                        <BpkStarRating ratingLabel={stars + ' Stars'} maxRating={stars} rating={stars}
                                       aria-hidden></BpkStarRating>
                        <span className="visually-hidden">{`${stars} star hotel`}</span>
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
                        />
                    </BpkText>
                </div>
                <div>
                    <ul className={"HotelLinks"}>
                        <li>
                            <a href={"https://example.com/bookingcom"} id={`link-${option}-1`}
                               aria-labelledby={`link-${option}-1 title-${option}`}>
                                Booking.com<br/>£175
                            </a>
                        </li>
                        <li>
                            <a href={"https://example.com/hotelscom"} id={`link-${option}-2`}
                               aria-labelledby={`link-${option}-2 title-${option}`}>
                                Hotels.com<br/>£175
                            </a>
                        </li>
                        <li>
                            <a href={"https://example.com/algotels"} id={`link-${option}-3`}
                               aria-labelledby={`link-${option}-3 title-${option}`}>
                                Algotels<br/>£175
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Positioned absolute in the top right corner */}
                <div className={"SaveButton"}>
                    <BpkSaveButtonV2
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
        </div>
    )

    const secondaryContent = (
        <div className={"SecondaryContent"}>
            <div className={"DealLayout"}>
                {/* Price */}
                <div>
                    <BpkText textStyle={TEXT_STYLES.heading4} aria-hidden>
                        {price} night<br/>Expedia
                    </BpkText>
                </div>

                <div className={'GotoSite'}>
                    <a href={`https://example.com/${title}`} className={'ButtonLink'} id={`main-link-${option}`}
                       aria-labelledby={`main-link-${option} title-${option}`}>
                        <span className={'visually-hidden'}>{`Expedia ${price}`}</span>
                    </a>
                    <BpkButtonV2 aria-hidden>Go to site</BpkButtonV2>
                </div>
            </div>
        </div>
    )

    return (
        <BpkDividedCard atomic={false} primaryContent={primaryContent} secondaryContent={secondaryContent}
                        className={'HotelCard'}></BpkDividedCard>
    )
}

export default DesktopHotelCardV1