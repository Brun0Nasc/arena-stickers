import React, { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Buscando:", search); // Substitua por lógica de busca
  };

  const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
      <a href="/" className="navbar__title">Arena Stickers</a>
      <div className="navbar__links">
        <a href="/" className={`navbar__link ${currentPath === '/' ? 'navbar__link--active' : ''}`}>Página Inicial</a>
        <a href="/favoritos" className={`navbar__link ${currentPath === '/favoritos' ? 'navbar__link--active' : ''}`}>Favoritos</a>
      </div>
      <form onSubmit={handleSearch} className="navbar__search">
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar jogador..." 
          aria-label="Buscar jogador"
          className="navbar__input"
        />
        <button 
          type="submit" 
          disabled={!search.trim()}
          className="navbar__button"
        >
          Buscar
        </button>
      </form>
    </nav>
  );
}
