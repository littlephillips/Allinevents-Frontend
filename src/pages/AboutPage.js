import React from 'react'
import "../css/Aboutpage.css"
import { Link } from 'react-router-dom'



function About() {
    return (
            <>
                <div class="shadow-sm min-h-min w-screen p-6 flex flex-col text-center bg-[#f1f1ef]">
                    <h1 className='font-primary p-2 text-4xl font-bold'>About Us</h1>
                    <p className='font-secondary text-md'>AllEvents is the one place stop for planning your dream celebrations.</p>
                    <hr />
                    <br />
        
                    <h2 className='text-center font-bold font-primary p-4 shadow-sm '>Our Team</h2>
        
                    <div className='flex p-2 space-x-3 justify-center'>
        
                    {/* Card 1 */}


                                        
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="#">
                        <img class="rounded-t-lg" src={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Smile&skinColor=DarkBrown'} alt="isir" />
                    </Link>
                    <div class="p-5">
                        <Link to="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Phillip Waruingi</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">All-in Events Chair Executive Board</p>
                        <Link to="/contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>
        
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="#">
                        <img class="rounded-t-lg" src={'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Prescription02&hatColor=PastelYellow&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=SkullOutline&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Default&skinColor=Brown'} alt="" />
                    </Link>
                    <div class="p-5">
                        <Link to="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Isir Malak</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lead Event Manager, 2022 Award winning Event Manager</p>
                        <Link to="/contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>
        
                    {/* Card 2 */}
        
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="#">
                        <img class="rounded-t-lg" src={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Black'} alt="Kago" />
                    </Link>
                    <div class="p-5">
                        <Link to="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stephen Kago</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">All-In Events, Chair of communication and logistics </p>
                        <Link to="/contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>

                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="#">
                        <img class="rounded-t-lg" src={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=DarkBrown'} alt="isir" />
                    </Link>
                    <div class="p-5">
                        <Link to="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wycliffe Ndungu</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">All-in Events Lead Marketer, Appeared on Several local magazine as the most succesfull marketer </p>
                        <Link to="/contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Contact
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>
        
                    {/* Card 3 */}
        
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/contact">
                        <img class="rounded-t-lg" src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Tanned'} alt="silvia" />
                    </Link>
                    <div class="p-5">
                        <Link to="/contact">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Silvia Wachira</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Highest Rated event Manager for the past decade</p>
                        <Link to="/contacts" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>
        
                    {/* Card 4 */}
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/contacts">
                        <img class="rounded-t-lg" src={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=SadConcernedNatural&mouthType=Grimace&skinColor=Black'} alt="phillip" />
                    </Link>
                    <div class="p-5">
                        <Link to="/contacts">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Samuel Waruhiu</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">All-in Events, Lead in financial department.</p>
                        <Link to="/contacts" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    </div>       
        

        
                    </div>
        
                </div>
        
            </>
        
            )
        }

export default About