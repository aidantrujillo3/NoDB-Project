import React from 'react'
import Guitars from './Guitars'

function guitarCollection(props) {
    console.log(props)
    const guitarList = props.boughtGuitars.map(element => {
        return (
            <Guitars
                saveName={props.saveBrand}
                sellGuitar={props.sellGuitar}
                guitars={element}
                key={element.id}
                />
        )
    })

    return (
        <div>
            <h2 style={{display: "flex", justifyContent: "center", color: "purple"}}>GUITAR COLLECTION</h2>
            {guitarList}
        </div>
    )
}

export default guitarCollection