import { Link } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopChik</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">О нас</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Контакты</Link>
          </li>
          <li className="nav-item">
            <Link to="/auth">Вход / Регистрация</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header