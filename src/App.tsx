import './App.css'

const App = () => {
  return (
    <div className="app-root">
      {/* 顶部导航 */}
      <header className="navbar">
        <div className="navbar-brand">My Portfolio</div>
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* 主体内容 */}
      <main>
        {/* 首页 / Hero 区域 */}
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

        {/* 关于我 */}
        <section id="about" className="section">
          <h2>关于我</h2>
          <p>在这里简单介绍你的背景、擅长方向和当前状态。后面我们会把这里改成用数据文件驱动。</p>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="section">
          <h2>项目展示</h2>
          <p>这里将展示你的代表性项目列表。下一步我们会拆成独立组件和数据文件。</p>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="section">
          <h2>联系方式</h2>
          <p>邮箱、GitHub、其他社交账号会放在这里，保证在手机上也好点。</p>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Crafted by XXX</p>
      </footer>
    </div>
  )
}

export default App