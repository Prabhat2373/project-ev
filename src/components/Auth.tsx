import React from 'react'
interface Props {
    isAuth?: boolean
}

const Auth = ({ isAuth }: Props) => {
    return (
        <>
            <div className="pt-2 pb-2">
                <h3 className="pb-2">Authorize Your Station</h3>

                <button onClick={(e) => {

                }}
                    className={`box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none`}>
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <img src="https://www.svgrepo.com/show/305761/auth0.svg" alt="" className='w-5 h-5 mr-2 invert' />
                    
                        Authorize
                    </span>
                </button>


            </div>
        </>
    )
}

export default Auth