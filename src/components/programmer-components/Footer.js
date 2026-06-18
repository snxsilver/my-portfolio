function Footer() {
  return (
    <section id="about" className="bg-bg-darker pb-6 pt-6 print:pb-1 print:pt-1 print:text-xs">
      <div className="container">
        <div className="flex justify-center">
          <a href="https://snxsilver.github.io/my-portfolio" target="_blank" rel="noopener noreferrer" className="font-medium text-base text-slate-300 text-center mb-3 pb-3 border-b-slate-400 border-b w-full lg:w-1/2 print:text-sm print:pb-1 print:mb-1">https://snxsilver.github.io/my-portfolio</a>
        </div>
        <p className="font-medium text-sm text-slate-400 text-center print:text-xs">ⓒ Copyright <span className="font-medium text-slate-200">SNXSilver</span> | Design by <span className="font-bold text-cyan-300">Muh Syaiful Adli</span>, using <span className="font-bold text-cyan-400">Tailwind CSS 3</span>.</p>
      </div>
    </section>
  )
}

export default Footer