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
                <figure>
                <img src={Pet1} className="cards" alt="" />
                <figcaption>Moleton br</figcaption>
                </figure>
            </article>
            <article>
                <figure>
                <img src={Pet2} className="cards" alt="" />
                <figcaption>Camisa br</figcaption>
                </figure>
            </article>
            <article>
                <figure>
                <img src={Pet3} className="cards" alt="" />
                <figcaption>Lider de torcida br</figcaption>
                </figure>
            </article>
            <article>
                <figure>
                <img src={Pet4} className="cards" alt="" />
                <figcaption>Meu Buddy</figcaption>
                </figure>
            </article>
            <article>
                <figure>
                <img src={Pet5} className="cards" alt="" />
                <figcaption>Jaqueta basebol</figcaption>
                </figure>
            </article>
            <article>
                <figure>
                <img src={Pet6} className="cards" alt="" />
                <figcaption>Jaqueta couro moto</figcaption>
                </figure>
            </article>
        </section>
        </>
    )
}