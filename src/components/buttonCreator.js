import React from 'react'

const ButtonCreator = (props) => {
    return(
        <section>
            <button 
            className = {props.class} 
            onClick = {props.plusBut}
            >
                {props.textPlus}
            </button>
            <button 
            className = {props.class} 
            onClick = {props.minusBut}
            >
                {props.textMinus}
            </button>
        </section>
    )
}
export default ButtonCreator