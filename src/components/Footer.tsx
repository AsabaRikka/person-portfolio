const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} Crafted by XXX
      </div>
    </footer>
  )
}

export default Footer