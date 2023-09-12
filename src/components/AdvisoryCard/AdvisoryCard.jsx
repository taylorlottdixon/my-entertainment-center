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
                <div className='ratings'>
                    <h4>Violence ({userViolence})</h4>
                    <div className='violence'>
                        {userViolence < 1 ? 
                        <img src='/images/violence-gray.png' alt='0 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 1' width="30rem" />
                        }
                        {userViolence < 2 ? 
                        <img src='/images/violence-gray.png' alt='0 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 2' width="30rem" />
                        }
                        {userViolence < 3 ? 
                        <img src='/images/violence-gray.png' alt='0 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 3' width="30rem" />
                        }
                        {userViolence < 4 ? 
                        <img src='/images/violence-gray.png' alt='0 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 4' width="30rem" />
                        }
                        {userViolence < 5 ? 
                        <img src='/images/violence-gray.png' alt='0 violence' width="30rem" />
                        :
                        <img src='/images/violence.png' alt='violence rating 5' width="30rem" />
                        }
                    </div>
                    <h4>Language</h4>
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
                    <h4>Sexual Content</h4>
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
                    <h4>Notes</h4>
                    <p></p>
                </div>
            </div>
            <AdvisoryForm userViolence={userViolence} setUserViolence={setUserViolence} />
        </>
    )
}