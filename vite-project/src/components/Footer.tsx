import './Footer.css'

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О нас</h3>
          <p>Мы продаем товары по уникальным ценам</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: crafter.100500@mail.ru</p>
          <p>Телефон: +7 (912) 345-67-89</p>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <div className="social-links">
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">VK</a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Все права защищены</p>
      </div>
    </footer>
  )
}

export default Footer