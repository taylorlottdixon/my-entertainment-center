import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import "./AdvisoryCard.css"
import { FaEdit } from "react-icons/fa";
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

    const handleClickViolence = (evt) => {
        let newRating = prompt("Rate Violence on a scale of 1-5")
        setUserViolence(newRating)
    }
    const handleClickLanguage = (evt) => {
        let newRating = prompt("Rate Language on a scale of 1-5")
        setUserLanguage(newRating)
    }
    const handleClickSex = (evt) => {
        let newRating = prompt("Rate Sexual Violence on a scale of 1-5")
        setUserSex(newRating)
    }

    return (
        <>
            <div className='mecRatings'>
                <h3>MEC Ratings</h3>
                <div className='ratings'>
                    <div className='advisory-title'>   
                        <h4>Violence ({userViolence})</h4>
                        <button className='edit-button' onClick={handleClickViolence}>
                            <FaEdit style={{color: 'goldenrod'}} />
                        </button>
                    </div>
                    <div className='violence'>
                        {userViolence < 1 ? 
                        <img src='/images/violence-gray.png' alt='0 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 1' width="30rem" />
                        }
                        {userViolence < 2 ? 
                        <img src='/images/violence-gray.png' alt='1 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 2' width="30rem" />
                        }
                        {userViolence < 3 ? 
                        <img src='/images/violence-gray.png' alt='2 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 3' width="30rem" />
                        }
                        {userViolence < 4 ? 
                        <img src='/images/violence-gray.png' alt='3 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 4' width="30rem" />
                        }
                        {userViolence < 5 ? 
                        <img src='/images/violence-gray.png' alt='4 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 5' width="30rem" />
                        }
                    </div>
                    <div className='advisory-title'>
                        <h4>Language  ({userLanguage})</h4>
                        <button className='edit-button' onClick={handleClickLanguage}>
                            <FaEdit style={{color: 'goldenrod'}} />
                        </button>
                    </div>
                    <div className='language'>
                        {userLanguage < 1 ? 
                        <img src='/images/language-gray.png' alt='0 language' width="30rem" />
                        :
                        <img src='/images/language.png' alt='language rating 1' width="30rem" />
                        }
                        {userLanguage < 2 ? 
                        <img src='/images/language-gray.png' alt='0 language' width="30rem" />
                        :
                        <img src='/images/language.png' alt='language rating 1' width="30rem" />
                        }
                        {userLanguage < 3 ? 
                        <img src='/images/language-gray.png' alt='0 language' width="30rem" />
                        :
                        <img src='/images/language.png' alt='language rating 1' width="30rem" />
                        }
                        {userLanguage < 4 ? 
                        <img src='/images/language-gray.png' alt='0 language' width="30rem" />
                        :
                        <img src='/images/language.png' alt='language rating 1' width="30rem" />
                        }
                        {userLanguage < 5 ? 
                        <img src='/images/language-gray.png' alt='0 language' width="30rem" />
                        :
                        <img src='/images/language.png' alt='language rating 1' width="30rem" />
                        }
                    </div>
                    <div className='advisory-title'>
                        <h4>Sexual Content  ({userSex})</h4>
                        <button className='edit-button' onClick={handleClickSex}>
                            <FaEdit style={{color: 'goldenrod'}} />
                        </button>
                    </div>
                    <div className='sex'>
                        {userSex < 1 ? 
                        <img src='/images/sex-gray.png' alt='0 sex' width="30rem" />
                        :
                        <img src='/images/sex.png' alt='sex rating 1' width="30rem" />
                        }
                        {userSex < 2 ? 
                        <img src='/images/sex-gray.png' alt='0 sex' width="30rem" />
                        :
                        <img src='/images/sex.png' alt='sex rating 1' width="30rem" />
                        }
                        {userSex < 3 ? 
                        <img src='/images/sex-gray.png' alt='0 sex' width="30rem" />
                        :
                        <img src='/images/sex.png' alt='sex rating 1' width="30rem" />
                        }
                        {userSex < 4 ? 
                        <img src='/images/sex-gray.png' alt='0 sex' width="30rem" />
                        :
                        <img src='/images/sex.png' alt='sex rating 1' width="30rem" />
                        }
                        {userSex < 5 ? 
                        <img src='/images/sex-gray.png' alt='0 sex' width="30rem" />
                        :
                        <img src='/images/sex.png' alt='sex rating 1' width="30rem" />
                        }
                    </div>
                    {/* <h4>Suicidal Themes</h4>
                    <h4>Death</h4>
                    <h4>Sexual Violence</h4>
                    <h4>Infidelity</h4>
                    <h4>Racism</h4> */}
                    {/* <h4>Notes</h4> */}
                    <p></p>
                </div>
            </div>
        </>
    )
}