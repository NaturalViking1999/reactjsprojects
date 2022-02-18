import { Link } from 'react-router-dom';

function Header() {

    let setActive = (event) => {
        event.preventDefault();
        [event.target, document.querySelector('.active')].forEach(elem => {
            if (elem) elem.classList.toggle('active');
        });
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" onClick={setActive}>
                <div className="container">
                    <Link className="nav-link " name="one" to="/">Notes</Link>
                    <Link className="nav-link" name="two" to="/">Домашняя страница</Link>
                    <Link className="nav-link" name="three" to="/note">Заметки</Link>
                    <Link className="nav-link" name="four" to="/create">Создать заметку</Link>
                    <Link className="nav-link" name="five" to="/about">О сайте</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;