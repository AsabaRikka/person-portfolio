const HeroSection = () => {
    return (
      <section id="home" className="section">
        <h1>你好，我是 XXX</h1>
        <p>这里是一句简短的身份介绍，比如「前端开发工程师，专注于 React 与前端工程化」。</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            查看项目
          </a>
          <a href="#contact" className="btn-secondary">
            联系我
          </a>
        </div>
      </section>
    )
  }
  
export default HeroSection