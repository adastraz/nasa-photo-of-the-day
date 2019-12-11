import React from 'react'

const ContentBox = (props) => {
    return (
        <>
        <div className='content'>
            <h1>Explanation</h1>
            <h2>{props.explanation}</h2>
        </div>
        </>
    )
}

export default ContentBox