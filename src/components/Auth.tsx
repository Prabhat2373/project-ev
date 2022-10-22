import React from 'react'
interface Props {
    isAuth?: boolean
}

const Auth = ({ isAuth }: Props) => {
    return (
        <>
            <div>
                <h3>Authorize Your Station</h3>
                <button onClick={() => {
                    alert("Upcoming Feature Yet!!")
                }} className="bg-blue-700 p-2 rounded text-white">Authorize</button>
            </div>
        </>
    )
}

export default Auth