import React from 'react'
import Inf1 from '../img/Inf1.jpg'
import Inf2 from '../img/Inf2.jpg'
import Inf3 from '../img/Inf3.jpg'
import Inf4 from '../img/Inf4.jpg'
import Inf5 from '../img/Inf5.jpg'
import Inf6 from '../img/Inf6.jpg'
import '../css/Cards.css'

export default function Infantil(){
    return(
        <>
        <section>
            <article>
                <figure>
                <img src={Inf1} className="cards" alt="" />
                <figcaption>Conj beach tenis</figcaption>
                </figure>
            </article>
            <article>
            <figure>
                <img src={Inf2} className="cards" alt="" />
                <figcaption>Conj rodeio</figcaption>
                </figure>
            </article>
            <article>
            <figure>
                <img src={Inf3} className="cards" alt="" />
                <figcaption>Conj ciclismo</figcaption>
                </figure>
            </article>
            <article>
            <figure>
                <img src={Inf4} className="cards" alt="" />
                <figcaption>Conj ginastica</figcaption>
                </figure>
            </article>
            <article>
            <figure>
                <img src={Inf5} className="cards" alt="" />
                <figcaption>MAio natação</figcaption>
                </figure>
            </article>
            <article>
            <figure>
                <img src={Inf6} className="cards" alt="" />
                <figcaption>Bola de volei</figcaption>
                </figure>
            </article>
        </section>
        </>
    )
}