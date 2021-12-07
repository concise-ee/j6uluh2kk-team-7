import React from 'react'

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <h2>Is it christmas yet? {christmas.isItChristmasYet ? 'Yep' : 'Nope'}</h2>
        </div>
    )
}