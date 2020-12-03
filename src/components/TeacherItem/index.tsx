import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="" alt="foto"/>
                <div>
                    <strong>Nome do Professor</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sint, 
                <br/>
                modi nostrum unde quis dolor provident non architecto itaque, repudiandae totam temporibus placeat velit ipsam obcaecati maxime consequuntur, vitae laborum?
            </p>
            <footer>
                <p>Preço/Hora<strong>R$: 80,00</strong></p>
                
                <button type="button">Entrar em contato
                    <img src={whatsappIcon} alt="Whatsapp"/>
                </button>
            </footer>
        </article>    
    )
}

export default TeacherItem;