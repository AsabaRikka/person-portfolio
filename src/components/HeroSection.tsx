const HeroSection = () => {
  return (
    <section
      id="home"
      className="px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-sky-600 mb-3">
          个人网页 · 个人作品集
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          你好，我是 谢涵韫
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mb-8">
          专注于使用AI Agent进行前端工程化，喜欢把想法变成线上可用的产品体验。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors"
          >
            工作经历
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-sky-600 px-6 py-2.5 text-sm font-medium text-sky-700 bg-white hover:bg-sky-50 transition-colors"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection