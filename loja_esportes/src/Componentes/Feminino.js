import React from 'react'
import Fem1 from '../img/Fem1.jpg'
import Fem2 from '../img/Fem2.jpg'
import Fem3 from '../img/Fem3.jpg'
import Fem4 from '../img/Fem4.jpg'
import Fem5 from '../img/Fem5.jpg'
import Fem6 from '../img/Fem6.jpg'
import '../css/Cards.css'

export default function Feminino(){
    return(
        <>
        <section>
            <article>
                <img src={Fem1} className="cards" alt="" />
            </article>
            <article>
                <img src={Fem2} className="cards" alt="" />
            </article>
            <article>
            <img src={Fem3} className="cards" alt="" />
            </article>
            <article>
            <img src={Fem4} className="cards" alt="" />
            </article>
            <article>
            <img src={Fem5} className="cards" alt="" />
            </article>
            <article>
            <img src={Fem6} className="cards" alt="" />
            </article>
        </section>
        </>
    )
}