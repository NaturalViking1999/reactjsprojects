import React from 'react';
import { useState } from "react";
import env from '../env.json'

function Create() {

    const [url, setUrl] = useState();
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result > 0) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }
    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните форму!')
            return false;
        }
        sendData({ 'note': note });
    }

    return (
        <div className="menu notes">
            <form className={formClass} action="" onSubmit={loadDataFromForm}>
                <div>
                    <label className="lbl" htmlFor="">Введите текст для заметки:</label>
                </div>
                <div>
                    <textarea name="note" id="note" cols="50" defaultValue="Здесь текст."></textarea>
                </div>
                <div>
                    <button className='crt-btn' type="submit">Создать</button>
                </div>
            </form>
            <div className={lineClass}>
                <div>{url}</div>
                <div>
                    <button onClick={() => { window.location.reload() }}>Создать новую заметку.</button>
                </div>
            </div>
        </div>
    );
}

export default Create;