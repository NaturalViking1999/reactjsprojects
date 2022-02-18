//http://localhost:3000/note/17q97dj1op0323wwg9vkux4i

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide')
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');
    let { noteURL } = useParams();

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide')
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('')
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    let getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните форму!')
            return false;
        }
        noteURL = url;
        window.location.href = env.url + "/" + url;
    }

    let searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div className="menu notes">
            <div className={lineClass}>
                <h4>Note:</h4>
                <div>{noteText}</div>
                <div><button onClick={searchNote}>Смотреть еще одну заметку</button></div>
            </div>
            <div className="error">
                <div className={errorClass}>
                    <p className="again">Произошла ошибка. Такой заметки не существует. Попробуйте снова!</p>
                </div>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <div>
                        <label htmlFor="url" className="lbl">Введите хэш заметки:</label>
                    </div>
                    <div>
                        <input type="text" name="url" id="url" />
                    </div>
                    <div>
                        <button type="submit" className='crt-btn'>Искать заметку</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Note;