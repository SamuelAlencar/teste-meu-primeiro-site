// No App Router, app/page.tsx representa a página inicial (rota /).
export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Meu Primeiro Site — início">
          <span className="brand-icon" aria-hidden="true">&lt;/&gt;</span>
          Meu Primeiro Site
        </a>
        <span className="project-label"><span className="status-dot" /> Projeto educacional</span>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <span className="eyebrow">UM NOVO COMEÇO</span>
          <h1 id="hero-title">Lorem Ipsum<span className="title-dot">.</span></h1>
          <p className="intro">Todo grande projeto começa com um primeiro passo.</p>
          <p className="description">
            Este site foi criado para fins educacionais e aprendizado de Next.js.
            Um espaço simples para explorar, experimentar e aprender a construir para a web.
          </p>
          <a className="primary-link" href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            Explorar o Next.js <span aria-hidden="true">↗</span>
            <span className="sr-only"> (abre em uma nova aba)</span>
          </a>
          <span className="learning-note">Uma linha de código de cada vez.</span>
        </section>

        <section className="foundations" aria-labelledby="foundations-title">
          <div className="section-heading">
            <h2 id="foundations-title">Simples por fora. Muito aprendizado por dentro.</h2>
            <p>As bases deste primeiro projeto.</p>
          </div>
          <div className="card-grid">
            <article className="feature-card">
              <span className="card-icon" aria-hidden="true">N<span className="small-arrow">↗</span></span>
              <h3>Feito com Next.js</h3>
              <p>Uma base moderna com App Router para dar vida às primeiras páginas.</p>
              <span className="card-tag">O ponto de partida</span>
            </article>
            <article className="feature-card">
              <span className="card-icon type-icon" aria-hidden="true">TS</span>
              <h3>Escrito em TypeScript</h3>
              <p>Mais clareza no código para aprender e construir com confiança.</p>
              <span className="card-tag">Aprendendo com cada detalhe</span>
            </article>
            <article className="feature-card">
              <span className="card-icon" aria-hidden="true">&lt;/&gt;</span>
              <h3>Criado para aprender</h3>
              <p>Um projeto pequeno, com espaço para experimentar novas ideias.</p>
              <span className="card-tag">Só o começo</span>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Meu Primeiro Site <span className="footer-divider">/</span> Feito para aprender.</span>
        <span>Pequenos passos, novas possibilidades. <span className="footer-spark" aria-hidden="true">✳</span></span>
      </footer>
    </div>
  );
}
