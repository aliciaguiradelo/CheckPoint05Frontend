import React from 'react'
import Masc1 from '../img/Masc1.jpg'
import Masc2 from '../img/Masc2.jpeg'
import Masc3 from '../img/Masc3.jpeg'
import Masc4 from '../img/Masc4.jpg'
import Masc5 from '../img/Masc5.jpg'
import Masc6 from '../img/Masc6.jpg'
import '../css/Cards.css'

export default function Masculino(){
    return(
        <>
        <section>
            <article>
                <img src={Masc1} className="cards" alt="" />
            </article>
            <article>
                <img src={Masc2} className="cards" alt="" />
            </article>
            <article>
            <img src={Masc3} className="cards" alt="" />
            </article>
            <article>
            <img src={Masc4} className="cards" alt="" />
            </article>
            <article>
            <img src={Masc5} className="cards" alt="" />
            </article>
            <article>
            <img src={Masc6} className="cards" alt="" />
            </article>
        </section>
        </>
    )
}