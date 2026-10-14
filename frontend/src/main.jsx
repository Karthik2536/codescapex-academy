import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Database, Globe2, BrainCircuit,
  Layers3, Code2, Menu, X, Check, Mail, MapPin, GraduationCap, Laptop,
  ShieldCheck, ChartNoAxesCombined, ChevronDown
} from 'lucide-react'


const ENQUIRY_API_URL = 'https://codescapex-backend.onrender.com/api/enquiries'

const programs = [
  { icon: Braces, title: 'Programming & Core Java', text: 'Programming fundamentals, object-oriented programming, exception handling, collections, and coding practice.' },
  { icon: Database, title: 'SQL & Database Concepts', text: 'Relational database foundations, SQL queries, joins, grouping, constraints, and data-focused exercises.' },
  { icon: Globe2, title: 'Web Technologies', text: 'HTML, CSS, JavaScript, responsive UI fundamentals, and guided website-building exercises.' },
  { icon: BrainCircuit, title: 'Data Structures & Algorithms', text: 'Problem-solving strategies, complexity basics, core data structures, and coding challenges.' },
  { icon: Laptop, title: 'Java Backend Foundations', text: 'Introductory JDBC, REST API concepts, Spring Boot foundations, and database-connected projects.' },
  { icon: Layers3, title: 'Workshops & Project Labs', text: 'Topic-focused workshops, guided mini-projects, debugging practice, and collaborative learning activities.' },
]

const faqs = [
  ['Which technical subjects can we request?', 'Current training themes include Core Java and programming, SQL and databases, Web Technologies, Data Structures and Algorithms, Java backend foundations, and customized workshops.'],
  ['Can a program be customized for our students?', 'Yes. The proposed scope can be discussed around student level, department, learning objectives, duration, and the institution’s timetable before the program is confirmed.'],
  ['Can you conduct a workshop or multi-day program?', 'Workshop and multi-day formats can be discussed. Availability, schedule, delivery mode, and program scope must be confirmed for each enquiry.'],
  ['How do we request a proposal or quotation?', 'Use the institutional enquiry form and include preferred topics, expected student count, dates, and requirements. Contact details and the enquiry submission service must be configured before public launch.'],
  ['Do you provide certificates or placement guarantees?', 'These are not promised on this website. Any certificates, assessments, placement support, or outcome commitments must be explicitly agreed and verified before being advertised.'],
  ['Are listed colleges formal partners?', 'Institutional names in the experience section describe training experience shared by the academy and do not imply endorsement or an ongoing formal partnership.'],
]

function Brand() {
  return <a href="#home" className="flex items-center gap-3" aria-label="Code Scapex Academy home">
    <img src="/codescapex-logo.jpeg" alt="Code Scapex logo" className="h-11 w-[86px] rounded-md object-contain bg-white p-1" />
    <span><span className="block text-[19px] font-extrabold tracking-tight">Code <span className="text-[#a8000b]">Scapex</span></span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[.16em] text-slate-500">Academy · Learn by building</span></span>
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatusType, setFormStatusType] = useState('')
  const [openFaq, setOpenFaq] = useState(0)

  async function submitEnquiry(event) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || '').trim(),
      role: String(data.get('role') || '').trim(),
      institutionName: String(data.get('institutionName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      program: String(data.get('program') || '').trim(),
      students: String(data.get('students') || '').trim(),
      
      message: String(data.get('message') || '').trim()
    }

    setIsSubmitting(true)
    setFormStatusType('info')
    setFormStatus('Submitting your enquiry…')

    try {
      const response = await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result.message || `Request failed with status ${response.status}`)
      }

      setFormStatusType('success')
      setFormStatus(`Thank you! Your enquiry was saved successfully. Reference ID: ${result.id ?? 'received'}.`)
      form.reset()
    } catch (error) {
      console.error('Enquiry submission failed:', error)
      setFormStatusType('error')
      if (error instanceof TypeError) {
        setFormStatus('Could not connect to the backend. Make sure Spring Boot is running on http://localhost:8080 and CORS allows your frontend origin.')
      } else {
        setFormStatus(error.message || 'We could not submit your enquiry. Please try again or email codescapex@gmail.com.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeMenu = () => setMenuOpen(false)
  const navItems = [['Programs', '#programs'], ['For Institutions', '#institutions'], ['How We Work', '#approach'], ['About Us', '#about'], ['FAQs', '#faq'], ['Contact', '#contact']]

  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <div className="bg-navy text-slate-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-xs">
        <span><strong className="text-cyan">INSTITUTIONAL TRAINING</strong> · Practical skills for tomorrow’s careers</span>
        <span className="hidden sm:block">A training division of ALTUMERA SOLUTIONS PRIVATE LIMITED</span>
      </div>
    </div>

    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4" aria-label="Main navigation">
        <Brand />
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
          <a className="btn-primary" href="#contact">Partner with us <ArrowUpRight size={16} /></a>
        </div>
        <button className="rounded-lg border border-slate-200 p-2 lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      {menuOpen && <div className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden">
        {navItems.map(([label, href]) => <a key={href} onClick={closeMenu} className="block border-b border-slate-100 py-3 text-sm font-semibold" href={href}>{label}</a>)}
        <a onClick={closeMenu} className="btn-primary mt-3 w-full" href="#contact">Partner with us <ArrowUpRight size={16} /></a>
      </div>}
    </header>

    <main>
      <section id="home" className="hero-bg relative overflow-hidden text-white">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-14 lg:py-24">
          <div>
            <div className="eyebrow"><span className="h-0.5 w-6 bg-cyan" /> Industry-focused technical training</div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Build skills.<br />Shape <span className="text-cyan">careers.</span><br />Empower institutions.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">Practical, hands-on technology training designed to help engineering students connect classroom concepts with real-world problem solving.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#contact">Discuss an institutional program <ArrowRight size={16} /></a>
              <a className="btn-outline" href="#programs">Explore programs <ArrowDown size={16} /></a>
            </div>
            <p className="mt-7 flex items-center gap-2 text-xs text-slate-300"><Check size={16} className="text-cyan" /> Workshops · Skill development · Project-based learning</p>
          </div>
          <div className="relative mx-auto w-full max-w-md py-8">
            <div className="absolute inset-8 rounded-full border border-cyan/20 ring-[24px] ring-cyan/[.025]" />
            <div className="relative rounded-2xl border border-sky-200/20 bg-gradient-to-br from-sky-900/90 to-slate-950/95 p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.16em] text-slate-300"><span>Code Scapex / Lab</span><span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_#35d5e8]" />Learning mode</span></div>
              <div className="mt-6 rounded-xl border border-white/10 bg-[#061323] p-4 font-mono text-xs leading-7 text-slate-300 sm:p-5"><div><span className="text-cyan">class</span> <span className="text-amber-200">FutureReady</span> {'{'}</div><div className="pl-4"><span className="text-cyan">public static void</span> buildSkills() {'{'}</div><div className="pl-8 text-emerald-300">learn("Core concepts");</div><div className="pl-8 text-emerald-300">practice("Real projects");</div><div className="pl-8 text-emerald-300">grow("Career confidence");</div><div className="pl-4">{'}'}</div><div>{'}'}</div></div>
              <div className="mt-4 grid grid-cols-3 gap-2">{[['01','Learn concepts'],['02','Build projects'],['03','Apply skills']].map(([n,t]) => <div key={n} className="rounded-lg border border-white/10 bg-white/5 p-3"><strong className="block text-lg">{n}</strong><span className="text-[10px] text-slate-300">{t}</span></div>)}</div>
            </div>
            <div className="absolute -right-2 top-1 rounded-xl bg-white px-4 py-3 text-xs font-extrabold text-navy shadow-xl sm:-right-5"><Code2 className="mr-2 inline text-teal-600" size={16} /> Learn by doing</div>
            <div className="absolute -bottom-1 -left-2 rounded-xl bg-white px-4 py-3 text-xs font-extrabold text-navy shadow-xl sm:-left-5"><GraduationCap className="mr-2 inline text-teal-600" size={16} /> Skills with purpose</div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
          <p className="text-xs font-extrabold uppercase leading-6 tracking-widest text-slate-500">Designed for meaningful learning outcomes</p>
          {[[Laptop, 'Hands-on sessions'], [ShieldCheck, 'Structured learning'], [ChartNoAxesCombined, 'Project-oriented practice']].map(([Icon, text]) => <div key={text} className="flex items-center gap-3 text-sm font-bold"><Icon className="text-teal-600" size={23} />{text}</div>)}
        </div>
      </section>

      <section id="programs" className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="section-head"><p className="section-kicker">Training programs</p><h2>Technology skills that move learning forward.</h2><p>Flexible training themes for college workshops, department-level programs, bootcamps, and student skill-development initiatives. Program duration and scope can be tailored to institutional needs.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(({icon: Icon, title, text}) => <article key={title} className="program-card"><span className="icon-tile"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p><a className="card-link" href="#contact">Discuss this program <ArrowRight size={15} /></a></article>)}
          </div>
        </div>
      </section>

      <section id="institutions" className="bg-slate-100 section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <div className="institution-panel">
            <p className="eyebrow"><span className="h-0.5 w-6 bg-cyan" /> For engineering colleges</p>
            <h3 className="mt-5 max-w-sm text-3xl font-black leading-tight tracking-tight">A practical partner for student skill development.</h3>
            <div className="mt-9 flex h-28 items-end gap-3">{[35,53,70,61,94].map((height, i) => <span key={i} style={{height: `${height}%`}} className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-700 to-cyan" />)}</div>
            <div className="mt-5 flex justify-between border-t border-white/20 pt-4 text-[10px] font-bold tracking-widest text-slate-300"><span>LEARN · PRACTICE · BUILD</span><span>INSTITUTIONAL PROGRAMS</span></div>
          </div>
          <div><p className="section-kicker">Institutional collaboration</p>
          
<h2>Technical Training Programs for Engineering Colleges</h2>

<p className="mt-4 text-sm leading-7 text-slate-600">
  Code Scapex Academy offers practical technical training for
  engineering colleges and institutions, including Core Java,
  Python, SQL, Web Development, Data Structures and Algorithms
  (DSA), and customized coding workshops that complement
  academic learning through hands-on practice.
</p>

          
            <div className="my-7 space-y-5">{[
              ['Programs aligned to your requirements', 'Discuss student year, department, current skill level, learning objectives, and duration.'],
              ['Practical, guided learning', 'Combine concept explanations with coding exercises, demonstrations, and project work.'],
              ['Flexible delivery options', 'Explore workshops, multi-day training, bootcamps, and customized technical sessions.']
            ].map(([title, text]) => <div key={title} className="flex gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-100 text-xs font-black text-teal-700"><Check size={14} /></span><div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-1 text-xs leading-6 text-slate-600">{text}</p></div></div>)}</div>
            <a className="btn-primary" href="#contact">Plan a college program <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-14">
          <div><p className="section-kicker">About the academy</p><h2>Focused on practical skills, clear concepts, and confident problem-solving.</h2><p className="mt-5 text-sm leading-7 text-slate-600">Code Scapex Academy is a technical training initiative under ALTUMERA SOLUTIONS PRIVATE LIMITED. Its training focus includes programming fundamentals, Java, SQL, web technologies, and hands-on learning activities.</p><p className="mt-4 text-sm leading-7 text-slate-600">We work toward making technical concepts easier to understand by connecting instruction with coding practice and applied exercises.</p><a className="btn-primary mt-7" href="#contact">Start a conversation <ArrowRight size={16} /></a></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h3 className="text-lg font-extrabold">Training experience</h3>
            {[
              ['Panimalar Engineering College', 'Training and mentoring experience in Core Java, programming fundamentals, OOP, SQL, and DSA.'],
              ['Dr. M.G.R. Educational and Research Institute', 'Institutional training experience shared by the academy.'],
              ['Core learning areas', 'Programming, databases, web technologies, coding exercises, and project-based practice.']
            ].map(([title, text]) => <div key={title} className="flex gap-3 border-t border-slate-100 py-4 first:mt-3"><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-cyan" /><div><h4 className="text-sm font-bold">{title}</h4><p className="mt-1 text-xs leading-6 text-slate-600">{text}</p></div></div>)}
            <p className="mt-3 border-l-2 border-cyan bg-slate-50 p-3 text-[11px] leading-6 text-slate-500">Institutional experience is presented as background, not as an endorsement or formal partnership. Add approved logos, testimonials, outcome data, and program photos only after obtaining permission and verifying details.</p>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-slate-100 section-pad">
        <div className="mx-auto max-w-7xl px-5"><div className="section-head"><p className="section-kicker">How we work</p><h2>A clear process from first conversation to learning outcomes.</h2><p>We coordinate with your institution to understand the audience and shape a practical program. Final scope, schedule, delivery mode, and fees are agreed before confirmation.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
            ['01','Understand your goals','Discuss department, student year, current skill level, learning outcomes, and available time.'],
            ['02','Shape the program','Propose topics, session structure, practice activities, project work, and delivery format.'],
            ['03','Deliver practical sessions','Combine explanations, demonstrations, guided coding, exercises, and questions.'],
            ['04','Review and improve','Agree on feedback and completion expectations and identify useful next steps.']
          ].map(([num,title,text]) => <article className="rounded-xl border border-slate-200 bg-white p-5" key={num}><span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-50 text-sm font-black text-teal-700">{num}</span><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-navy px-5 py-14 text-white sm:py-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Planning a technical training program for your students?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Tell us about your institution, student group, and learning goals. We can start a conversation about a suitable program.</p></div><a className="btn-primary shrink-0" href="#contact">Request a discussion <ArrowUpRight size={16} /></a></div></section>

      <section id="faq" className="section-pad">
        <div className="mx-auto max-w-7xl px-5"><div className="section-head"><p className="section-kicker">Frequently asked questions</p><h2>Planning a program with Code Scapex?</h2><p>Common questions from college teams. We can confirm specifics during an institutional discussion.</p></div>
          <div className="grid gap-3 lg:grid-cols-2">{faqs.map(([question, answer], index) => <div key={question} className="rounded-xl border border-slate-200 bg-white p-5"><button className="flex w-full items-center justify-between gap-4 text-left text-sm font-extrabold" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} size={18} /></button>{openFaq === index && <p className="mt-3 text-xs leading-6 text-slate-600">{answer}</p>}</div>)}</div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 section-pad">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div><p className="section-kicker">Partner with us</p><h2>Let’s plan your next student training program.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Share a few details and we’ll prepare the next steps for an institutional training discussion.</p>
            <div className="mt-7 flex items-center gap-3 text-sm text-slate-600"><span className="icon-tile"><Mail size={21} /></span><div><strong className="block text-slate-900">Email enquiries</strong><a className="hover:text-teal-700" href="mailto:codescapex@gmail.com">codescapex@gmail.com</a></div></div>
            <div className="mt-5 flex items-center gap-3 text-sm text-slate-600"><span className="icon-tile"><MapPin size={21} /></span><div><strong className="block text-slate-900">Location</strong><span>Chennai, Tamil Nadu</span></div></div>
            <div className="mt-5 flex items-center gap-3 text-sm text-slate-600"><span className="icon-tile"><Mail size={21} /></span><div><strong className="block text-slate-900">Phone / WhatsApp</strong><a className="hover:text-teal-700" href="https://wa.me/919440972536" target="_blank" rel="noreferrer">+91 94409 72536</a></div></div>
          </div>
          <form onSubmit={submitEnquiry} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name *"><input name="name" required autoComplete="name" placeholder="Name of coordinator" /></Field>
              <Field label="Your role *"><select name="role" required defaultValue=""><option value="" disabled>Select role</option><option>Principal / Management</option><option>HOD / Faculty</option><option>Training & Placement Officer</option><option>Institutional Coordinator</option><option>Other</option></select></Field>
            </div>
            <Field label="College / Institution *"><input name="institutionName" required placeholder="Institution name" /></Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Work email *"><input name="email" type="email" required autoComplete="email" placeholder="you@college.edu" /></Field>
              <Field label="Phone number"><input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Program of interest *"><select name="program" required defaultValue=""><option value="" disabled>Choose a program</option><option>Core Java & Programming</option><option>SQL & Databases</option><option>Web Technologies</option><option>Data Structures & Algorithms</option><option>Java Backend Foundations</option><option>Workshop / Customized program</option><option>Not sure yet</option></select></Field>
              <Field label="Expected student count"><select name="students" defaultValue=""><option value="">Select range</option><option>Up to 50</option><option>51–100</option><option>101–250</option><option>251–500</option><option>500+</option></select></Field>
            </div>
            <Field label="Tell us about your requirements"><textarea name="message" rows="4" placeholder="Preferred dates, departments, duration, or learning goals" /></Field>
            <p className="mb-4 text-[11px] leading-5 text-slate-500">Your enquiry is sent to the Code Scapex Spring Boot API and stored in the connected MySQL database. Please do not submit sensitive personal information.</p>
            <button className="btn-primary w-full" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Submit enquiry'} <ArrowRight size={16} /></button>
            {formStatus && <p role="status" aria-live="polite" className={`form-status form-status-${formStatusType} mt-4 rounded-lg p-3 text-xs leading-5`}>{formStatus}</p>}
          </form>
        </div>
      </section>
    </main>

    <footer className="bg-[#051324] px-5 py-9 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div><Brand /><p className="mt-4 max-w-sm text-xs leading-6 text-slate-400">Practical technical training for engineering students and institutions. A training division of ALTUMERA SOLUTIONS PRIVATE LIMITED.</p><p className="mt-3 max-w-sm text-xs leading-6 text-slate-400"><a className="hover:text-cyan" href="mailto:codescapex@gmail.com">codescapex@gmail.com</a><br /><a className="hover:text-cyan" href="https://wa.me/919440972536" target="_blank" rel="noreferrer">+91 94409 72536 · WhatsApp</a><br />Chennai, Tamil Nadu</p></div>
        <div className="flex flex-wrap content-start gap-x-5 gap-y-3 text-xs">{navItems.map(([label, href]) => <a key={href} className="hover:text-cyan" href={href}>{label}</a>)}</div>
      </div>
      <div className="mx-auto mt-7 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-4 text-[10px] text-slate-500 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Code Scapex Academy. All rights reserved.</span><span>Learn by building. Grow with purpose.</span></div>
    </footer>
  </div>
}

function Field({ label, children }) {
  return <label className="mb-4 block text-xs font-bold text-slate-800">{label}<span className="mt-2 block font-normal">{children}</span></label>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)