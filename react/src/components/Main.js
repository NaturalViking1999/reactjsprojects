function Main() {
    return (
        <div className="menu">
            <div className="text">
                <p><b>Notes</b> – Сайт, созданный для создания заметок и обменом их с кем-либо. Здесь вы создаете заметку, которая хранится на сервере 15 минут, после чего удаляется. Для каждой заметки создается уникальный ключ (хэш), вводя в url адрес который, вы переходите по ссылке, где получаете текст заметки. Легко и просто!</p>
                <p>Как сделать заметку? </p>
                <ul>
                    <li>1. Нажмите кнопку "Создать заметку" или же кликните по одноименному разделу в панели навигации.</li>
                    <li>2. Вставьте текст и нажмите кнопку "Создать".</li>
                    <li>3. Получите сгенерированный адрес с уникальным хэшем, перейдите по нему и получите текст заметки, или же отправьте этот адрес своему знакомому.</li>
                </ul>
                <p>Готово!</p>
            </div>
            <div className="flex">
                <h4 id="choose">Выберите действие:</h4>
                <div>
                    <button><a href="/create">Создать заметку</a></button>
                </div>
                <p id="or">или</p>
                <div>
                    <button><a href="/note">Просмотреть заметку</a></button>
                </div>
            </div>
        </div>
    );
}

export default Main;