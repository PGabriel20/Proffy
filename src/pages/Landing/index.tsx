import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';





function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <a href="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="/give-classes" className="give-classes">
                        <br/>
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar Aulas
                    </a>
                </div>

                <span className="total-connections">
                        Total de 200 conexões já realizadas lorem<img src={purpleHeartIcon} alt="Coraçao-Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;