import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О нас</h3>
          <p>Мы создаем удивительные веб-приложения</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: crafter.100500@mail.ru</p>
          <p>Телефон: +7 (996) 123-45-67</p>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <div className="social-links">
            <a href="#">VK</a>
            <a href="#">Telegram</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;