import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import TeacherItem from '../../components/TeacherItem';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os profys disponíveis.">
                <form id="search-teachers" action="">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input id="subject" type="text" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input id="week-day" type="text" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="text" />
                    </div>

                </form>
            </PageHeader>

            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
    )
}


export default TeacherList;