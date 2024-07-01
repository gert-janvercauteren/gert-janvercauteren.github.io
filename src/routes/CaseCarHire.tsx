import React from "react";
import List from "../components/List/List";
import CarCard from "../components/CarCard/CarCard";

function CaseCarHire() {
    const cards = <>
        <CarCard option={1}
                 dealCount={5}
                 partner={"Budget"}
                 price={"£95"}
                 similarTitle={"or similar mini"}
                 title={'Kia picanto'}></CarCard>

        <CarCard option={1}
                 dealCount={3}
                 partner={"Avis"}
                 price={"£97"}
                 similarTitle={"or similar mini"}
                 title={'Kia picanto'}></CarCard>

        <CarCard option={1}
                 dealCount={7}
                 partner={"Budget"}
                 price={"£110"}
                 similarTitle={"or similar mini"}
                 title={'Kia Rio'}></CarCard>
    </>
    return (
        <List children={cards} title={"Cars in Barcelona"} count={3}></List>
    )
}
export default CaseCarHire