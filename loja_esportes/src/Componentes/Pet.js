import React from 'react'
import Pet1 from '../img/Pet01.jpg'
import Pet2 from '../img/Pet02.jpg'
import Pet3 from '../img/Pet03.jpg'
import Pet4 from '../img/Pet04.jpg'
import Pet5 from '../img/Pet05.jpg'
import Pet6 from '../img/Pet06.jpg'
import '../css/Cards.css'

export default function Pet(){
    return(
        <>
        <section>
            <article>
                <img src={Pet1} className="cards" alt="" />
            </article>
            <article>
                <img src={Pet2} className="cards" alt="" />
            </article>
            <article>
            <img src={Pet3} className="cards" alt="" />
            </article>
            <article>
            <img src={Pet4} className="cards" alt="" />
            </article>
            <article>
            <img src={Pet5} className="cards" alt="" />
            </article>
            <article>
            <img src={Pet6} className="cards" alt="" />
            </article>
        </section>
        </>
    )
}