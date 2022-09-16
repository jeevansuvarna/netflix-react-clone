import React from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import requests from '../Request'

export const Home = () => {
    const titles = { requestUpcoming: 'Upcoming', requestPopular: 'Popular', requestTrending: "Trending", requestTopRated: "Top Rated", requestAnime: "Anime", requestHorror: "Horror" }
    return (
        <div>
            <Main />
            {Object.keys(titles).map((key, index) => {
                return (
                    <Row rowID={index} title={titles[key]} fetchURL={requests[key]} />
                );
            })}
        </div>
    )
}
