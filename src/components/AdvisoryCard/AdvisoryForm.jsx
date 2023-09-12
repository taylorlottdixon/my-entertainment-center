import { useState } from 'react';
import { useParams, Link } from "react-router-dom";

export default function AdvisoryForm({ userViolence, setUserViolence, userLanguage, setUserLanguage, userSex, setUserSex }) {
    return (
        <>
            <div className='mecRatings'>
                <h3>MEC Ratings</h3>
                <div className='ratings'>
                    <h4>Violence ({userViolence})</h4>
                    <div className='violence'>
                        <img src='/images/violence.png' alt='violence rating 1' width="30rem" />
                        <img src='/images/violence.png' alt='violence rating 2' width="30rem" />
                        <img src='/images/violence.png' alt='violence rating 3' width="30rem" />
                        <img src='/images/violence.png' alt='violence rating 4' width="30rem" />
                        <img src='/images/violence.png' alt='violence rating 5' width="30rem" />
                    </div>
                    <h4>Language  ({userLanguage})</h4>
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
                    <h4>Sexual Content  ({userSex})</h4>
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
                    {/* <p></p> */}
                </div>
            </div>
        </>
    )
}