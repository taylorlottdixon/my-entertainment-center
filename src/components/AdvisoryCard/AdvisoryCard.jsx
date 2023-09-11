import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import "./AdvisoryCard.scss"
import AdvisoryForm from "./AdvisoryForm"

export default function AdvisoryCard({ movie }) {
    console.log(movie)
    let { movieName } = useParams

    const [userViolence, setUserViolence] = useState([])
    const [userLanguage, setUserLanguage] = useState([])
    const [userSex, setUserSex] = useState([])
    // const [aggAdvisory, setAggAdvisory] = useState([])

    useEffect(() => {
        async function getViolence(movie) {
            const violence = movie.mecUserRating[0].violence
            setUserViolence(violence)
        }
        async function getLanguage(movie) {
            const language = movie.mecUserRating[0].language
            setUserLanguage(language)
        }
        async function getSex(movie) {
            const sex = movie.mecUserRating[0].sex
            setUserSex(sex)
        }
        getViolence(movie)
        getLanguage(movie)
        getSex(movie)
    }, [])

    return (
        <>
            <div>
                <h3>MEC Ratings</h3>
                <div>
                    <h4>Violence</h4>
                    <div className='violence'>{userViolence === "unrated" ? 
                    <p>unrated</p>
                    :
                    <></>}
                    </div>
                    <h4>Language</h4>
                    <h4>Sexual Content</h4>
                    {/* <h4>Suicidal Themes</h4>
                    <h4>Death</h4>
                    <h4>Sexual Violence</h4>
                    <h4>Infidelity</h4>
                    <h4>Racism</h4> */}
                </div>
            </div>
            <AdvisoryForm userViolence={userViolence} setUserViolence={setUserViolence} />
        </>
    )
}