import React from 'react'
import ButtonCreator from './buttonCreator.js'

const NavBar = (props) => {
    console.log(props)
    return(
        <nav>
            <p>
                NASA Photo of the Day: {props.title}
            </p>
            <p className ='date'>
                {props.date}
            </p>
            <div className = 'buttonExtra'>
                <ButtonCreator
                class={props.class}
                plusBut = {props.plusBut}
                minusBut = {props.minusBut}
                textPlus = 'Day +'
                textMinus = 'Day -'
                />
                <ButtonCreator
                class = {props.class}
                plusBut = {props.yearPlus}
                minusBut = {props.yearMinus}
                textPlus = 'Year +'
                textMinus = 'Year -'
                />
                <ButtonCreator
                class = {props.class}
                plusBut = {props.monthPlus}
                minusBut = {props.monthMinus}
                textPlus = 'Month +'
                textMinus = 'Month -'
                />
                {/* <section>
                    <button 
                    className = {`${props.class} day-plus`}
                    onClick = {props.plusBut}
                    >
                        Day+
                    </button>
                    <button
                    className = {`${props.class} day-minus`}
                    onClick = {props.minusBut}
                    >
                        Day-
                    </button>
                </section> */}
                {/* <section>
                    <button 
                    className= {`${props.class} year-plus`}
                    onClick = {props.yearPlus}
                    >
                        Year+
                    </button>
                    <button 
                    className= {`${props.class} year-minus`}
                    onClick = {props.yearMinus}
                    >
                        Year-
                    </button>
                </section>
                <section>
                    <button 
                    className= {`${props.class} month-plus`}
                    onClick = {props.monthPlus}
                    >
                        Month +
                    </button>
                    <button 
                    className= {`${props.class} month-minus`}
                    onClick = {props.monthMinus}
                    >
                        Month -
                    </button>
                </section> */}
            </div>
        </nav>
    )
}

export default NavBar