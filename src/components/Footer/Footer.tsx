import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Arena Stickers. Todos os direitos reservados.</p>
        <div className="footer__links">
          <a href="/sobre" className="footer__link">Sobre</a>
          <a href="/contato" className="footer__link">Contato</a>
          <a href="/termos" className="footer__link">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
