import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="font-semibold tracking-tight text-slate-900">My Portfolio</div>

        {/* 桌面端菜单 */}
        <nav className="hidden gap-4 text-sm text-slate-600 sm:flex">
          <a className="hover:text-slate-900 transition-colors" href="#home">
            Home
          </a>
          <a className="hover:text-slate-900 transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-slate-900 transition-colors" href="#experience">
            Experience
          </a>
          <a className="hover:text-slate-900 transition-colors" href="#projects">
            Projects
          </a>
          <a className="hover:text-slate-900 transition-colors" href="#education">
            Education
          </a>
          <a className="hover:text-slate-900 transition-colors" href="#contact">
            Contact
          </a>
          <a
            className="hover:text-slate-900 transition-colors"
            href="/?view=resume"
          >
            Resume
          </a>
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 sm:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">打开导航菜单</span>
          {/* 简单三条横线图标 */}
          <span className="block h-0.5 w-5 bg-slate-600 mb-1"></span>
          <span className="block h-0.5 w-5 bg-slate-600 mb-1"></span>
          <span className="block h-0.5 w-5 bg-slate-600"></span>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white sm:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-3 text-sm text-slate-700">
            <a
              href="#home"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a
              href="#contact"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/?view=resume"
              className="py-1.5 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar