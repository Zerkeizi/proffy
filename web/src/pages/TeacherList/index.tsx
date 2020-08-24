import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';


function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeatchers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('/classes', {
          params: {
            subject,
            week_day,
            time
          }
        })

        setTeachers(response.data)
    }

    return(
        <div id="page-teacher-list" className="">
            <PageHeader title="Estes são os Proffies disponíveis.">
                <form id="search-teachers" onSubmit={searchTeatchers}>
                    <Select 
                        id="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Mágia Arcana', label: 'Mágia Arcana'},
                            { value: 'Criação de Runas', label: 'Criação de Runas'},
                            { value: 'Artes das Trevas', label: 'Artes das Trevas'},
                            { value: 'Invocação', label: 'Invocação'},
                            { value: 'Piromancia', label: 'Piromancia'},
                            { value: 'Herbologia', label: 'Herbologia'},
                        ]}    
                    />

                    <Select 
                        id="week-day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-Feira'},
                            { value: '2', label: 'Terça-Feira'},
                            { value: '3', label: 'Quarta-Feira'},
                            { value: '4', label: 'Quinta-Feira'},
                            { value: '5', label: 'Sexta-Feira'},
                            { value: '6', label: 'Sábado'},
                        ]}    
                    />
                    
                    <Input 
                        id="time"
                        label="Hora"  
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />


                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;