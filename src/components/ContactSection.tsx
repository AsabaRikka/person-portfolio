import { contact } from '../data/contact'

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">联系方式</h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          欢迎通过以下方式联系我（占位信息，后续你再替换成真实内容）。
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">邮箱</h3>
            <a
              className="mt-2 inline-flex text-sm text-sky-700 hover:text-sky-800 hover:underline"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">GitHub</h3>
            <a
              className="mt-2 inline-flex text-sm text-sky-700 hover:text-sky-800 hover:underline"
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {contact.githubUrl}
            </a>
          </div>

          {contact.phone && (
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">电话（可选）</h3>
              <p className="mt-2 text-sm text-slate-700">{contact.phone}</p>
            </div>
          )}

          {contact.wechatQrText && (
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">微信（可选）</h3>
              <p className="mt-2 text-sm text-slate-700">{contact.wechatQrText}</p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-900">其他链接</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {contact.links.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection