import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './SEO'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Database, Globe2, BrainCircuit,
  Layers3, Code2, Menu, X, Check, Mail, MapPin, GraduationCap, Laptop,
  ShieldCheck, ChartNoAxesCombined, ChevronDown, Award, Briefcase
} from 'lucide-react'
import "./styles.css" 

const ENQUIRY_API_URL = 'https://codescapex-backend.onrender.com/api/enquiries'

const programs = [
  {
    icon: Award,
    title: 'Campus Placement & Aptitude Training',
    text: 'Comprehensive campus placement preparation covering quantitative aptitude, logical reasoning, verbal ability, coding placement drills, and mock technical interviews.'
  },
  {
    icon: Braces,
    title: 'Core Java Training & OOPs',
    text: 'Hands-on Java training, object-oriented programming principles, exception handling, collections framework, and rigorous coding placement problem-solving.'
  },
  {
    icon: Code2,
    title: 'Python Training & Scripting',
    text: 'Modern Python training, algorithmic thinking, scripting, data handling, and company-specific coding placement challenges for engineering students.'
  },
  {
    icon: BrainCircuit,
    title: 'DSA Training & Problem Solving',
    text: 'Data structures & algorithms training, time-space complexity, trees, graphs, dynamic programming, and competitive programming interview preparation.'
  },
  {
    icon: Database,
    title: 'SQL Training & Database Concepts',
    text: 'Relational database architecture, complex SQL queries, joins, constraints, indexing, database design, and real-time backend data exercises.'
  },
  {
    icon: Globe2,
    title: 'Web Technologies & Frontend',
    text: 'HTML5, CSS3, modern JavaScript, responsive UI design, frontend frameworks, and guided project-building exercises for student portfolios.'
  },
  {
    icon: Laptop,
    title: 'Java Backend Foundations & APIs',
    text: 'Introductory JDBC, RESTful API design, Spring Boot foundations, and database-connected industry projects for software engineering careers.'
  },
  {
    icon: Briefcase,
    title: 'Employability Skills & Career Training',
    text: 'Technical communication, resume reviews, HR interview readiness, collaborative coding, and career preparation designed for engineering graduates.'
  },
  {
    icon: Layers3,
    title: 'Institutional Workshops & Project Labs',
    text: 'Customized college workshops, multi-day bootcamps, guided mini-projects, debugging labs, and hands-on student training programs across Chennai.'
  },
]

const faqs = [
  [
    'What placement training and technical programs are offered by Code Scapex Academy in Chennai?',
    'We provide end-to-end placement programs including Core Java training, Python training, SQL training, Data Structures & Algorithms (DSA) training, quantitative and logical aptitude training, Java backend engineering, web technologies, and customized institutional workshops.'
  ],
  [
    'Can campus placement and engineering training programs be customized for our college?',
    'Yes. Our placement and technical training curriculum can be tailored around student year, engineering branch, current skill level, college placement syllabus, duration, and institution timetables.'
  ],
  [
    'Where is Code Scapex Academy located and do you train across Chennai and Tamil Nadu colleges?',
    'Code Scapex Academy is located in Chennai, Tamil Nadu. We deliver on-campus training, workshops, and bootcamps directly at engineering colleges across Chennai, surrounding districts, and Tamil Nadu.'
  ],
  [
    'Can you conduct intensive bootcamps or multi-day placement preparation workshops?',
    'Yes. We offer flexible formats including weekend bootcamps, 3-to-10 day intensive placement preparation workshops, semester-long technical training, and fast-track campus placement coaching.'
  ],
  [
    'How do engineering colleges request a proposal or quotation for campus training?',
    'Institutional coordinators, HODs, or Placement Officers can fill out our enquiry form below or contact us directly at codescapex@gmail.com / WhatsApp at +91 94409 72536 with expected student batch size and preferred topics.'
  ],
  [
    'Do you provide certificates or placement guarantees?',
    'Certification, outcome metrics, and placement support commitments are explicitly discussed and agreed upon with the institutional placement cell prior to commencement.'
  ],
  [
    'Are listed colleges formal partners?',
    'Institutional names describe training and mentoring experience shared by the academy and do not imply formal exclusive endorsements.'
  ],
]

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Code Scapex Academy home">
      <img
        src="/codescapex-logo.jpeg"
        alt="Code Scapex Academy logo"
        className="h-11 w-[86px] rounded-md object-contain bg-white p-1"
      />
      <span>
        <span className="block text-[19px] font-extrabold tracking-tight">
          Code <span className="text-[#a8000b]">Scapex</span>
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.16em] text-slate-500">
          Academy · Learn by building
        </span>
      </span>
    </a>
  )
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
        setFormStatus('Could not connect to the backend. Please check network connectivity or try again.')
      } else {
        setFormStatus(error.message || 'We could not submit your enquiry. Please try again or email codescapex@gmail.com.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeMenu = () => setMenuOpen(false)
  const navItems = [
    ['Programs', '#programs'],
    ['For Institutions', '#institutions'],
    ['How We Work', '#approach'],
    ['About Us', '#about'],
    ['FAQs', '#faq'],
    ['Contact', '#contact']
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* React Helmet dynamic SEO & Meta Tags */}
      <SEO />

      <div className="bg-navy text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-xs">
          <span>
            <strong className="text-cyan">CAMPUS PLACEMENTS & TECHNICAL TRAINING</strong> · Placement Preparation & Employability Skills in Chennai
          </span>
          <span className="hidden sm:block">A training division of ALTUMERA SOLUTIONS PRIVATE LIMITED</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4" aria-label="Main navigation">
          <Brand />
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} className="nav-link" href={href}>
                {label}
              </a>
            ))}
            <a className="btn-primary" href="#contact">
              Partner with us <ArrowUpRight size={16} />
            </a>
          </div>
          <button
            className="rounded-lg border border-slate-200 p-2 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                onClick={closeMenu}
                className="block border-b border-slate-100 py-3 text-sm font-semibold"
                href={href}
              >
                {label}
              </a>
            ))}
            <a onClick={closeMenu} className="btn-primary mt-3 w-full" href="#contact">
              Partner with us <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-bg relative overflow-hidden text-white">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-14 lg:py-24">
            <div>
              <div className="eyebrow">
                <span className="h-0.5 w-6 bg-cyan" /> Placement Training & Technical Skills · Chennai
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Campus Placement & Technical Training for{' '}
                <span className="text-cyan">Engineering Students</span> in Chennai
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Industry-focused campus placement training, aptitude coaching, and hands-on coding programs designed for engineering colleges and students across Chennai and Tamil Nadu.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="#contact">
                  Plan a campus placement program <ArrowRight size={16} />
                </a>
                <a className="btn-outline" href="#programs">
                  Explore training programs <ArrowDown size={16} />
                </a>
              </div>

              <p className="mt-7 flex items-center gap-2 text-xs text-slate-300">
                <Check size={16} className="text-cyan" /> Placement Preparation · Technical Skills · Employability Training
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md py-8">
              <div className="absolute inset-8 rounded-full border border-cyan/20 ring-[24px] ring-cyan/[.025]" />
              <div className="relative rounded-2xl border border-sky-200/20 bg-gradient-to-br from-sky-900/90 to-slate-950/95 p-5 shadow-2xl shadow-black/30 sm:p-7">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.16em] text-slate-300">
                  <span>Code Scapex / Placement Lab</span>
                  <span>
                    <i className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_#35d5e8]" />
                    Placement Ready
                  </span>
                </div>
                <div className="mt-6 rounded-xl border border-white/10 bg-[#061323] p-4 font-mono text-xs leading-7 text-slate-300 sm:p-5">
                  <div>
                    <span className="text-cyan">class</span> <span className="text-amber-200">PlacementReady</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan">public static void</span> accelerateCareer() {'{'}
                  </div>
                  <div className="pl-8 text-emerald-300">master("Core Java, Python, SQL");</div>
                  <div className="pl-8 text-emerald-300">crack("DSA & Aptitude");</div>
                  <div className="pl-8 text-emerald-300">achieve("Campus Placement");</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ['01', 'Learn concepts'],
                    ['02', 'Build projects'],
                    ['03', 'Crack interviews']
                  ].map(([n, t]) => (
                    <div key={n} className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <strong className="block text-lg">{n}</strong>
                      <span className="text-[10px] text-slate-300">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-2 top-1 rounded-xl bg-white px-4 py-3 text-xs font-extrabold text-navy shadow-xl sm:-right-5">
                <Code2 className="mr-2 inline text-teal-600" size={16} /> Placement Coaching
              </div>
              <div className="absolute -bottom-1 -left-2 rounded-xl bg-white px-4 py-3 text-xs font-extrabold text-navy shadow-xl sm:-left-5">
                <GraduationCap className="mr-2 inline text-teal-600" size={16} /> College Placements
              </div>
            </div>
          </div>
        </section>

        {/* Feature Badges */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <p className="text-xs font-extrabold uppercase leading-6 tracking-widest text-slate-500">
              Proven training for campus placement success
            </p>
            {[
              [Award, 'Placement Preparation'],
              [Laptop, 'Technical Skills Training'],
              [ShieldCheck, 'Campus Training Programs'],
              [ChartNoAxesCombined, 'Employability Coaching']
            ].map(([Icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-sm font-bold">
                <Icon className="text-teal-600" size={23} />
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="section-pad">
          <div className="mx-auto max-w-7xl px-5">
            <div className="section-head">
              <p className="section-kicker">Placement & Technical Training Programs</p>
              <h2>Industry skills that drive successful college placements.</h2>
              <p>
                Comprehensive placement preparation and engineering student training programs in Chennai. Designed for college workshops, student training bootcamps, and institutional placement drives. Program duration and curriculum can be customized for your institution.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map(({ icon: Icon, title, text }) => (
                <article key={title} className="program-card">
                  <span className="icon-tile">
                    <Icon size={24} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a className="card-link" href="#contact">
                    Discuss this program <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Institutional Collaboration */}
        <section id="institutions" className="bg-slate-100 section-pad">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
            <div className="institution-panel">
              <p className="eyebrow">
                <span className="h-0.5 w-6 bg-cyan" /> For Engineering Colleges & Placement Cells
              </p>
              <h3 className="mt-5 max-w-sm text-3xl font-black leading-tight tracking-tight">
                Your Trusted Campus Placement & Skill Development Partner.
              </h3>
              <div className="mt-9 flex h-28 items-end gap-3">
                {[35, 53, 70, 61, 94].map((height, i) => (
                  <span
                    key={i}
                    style={{ height: `${height}%` }}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-700 to-cyan"
                  />
                ))}
              </div>
              <div className="mt-5 flex justify-between border-t border-white/20 pt-4 text-[10px] font-bold tracking-widest text-slate-300">
                <span>CAMPUS PLACEMENT SUCCESS</span>
                <span>CHENNAI · TAMIL NADU</span>
              </div>
            </div>

            <div>
              <p className="section-kicker">Institutional collaboration</p>
              <h2>Campus Placement & Technical Training Programs for Engineering Colleges</h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Code Scapex Academy offers comprehensive campus placement training, engineering technical training, and employability skills development for institutions in Chennai. From Core Java, Python, and SQL training to DSA coding preparation, aptitude coaching, and college bootcamps, we equip engineering students with real-world skills to excel in placement interviews.
              </p>

              <div className="my-7 space-y-5">
                {[
                  [
                    'Customized Campus Placement Curriculum',
                    'Tailored around student year, engineering department, current aptitude level, and specific placement company requirements.'
                  ],
                  [
                    'Practical, Hands-on Technical Training',
                    'Combines in-depth concept clarity with live coding placement questions, algorithm problem solving, and practical exercises.'
                  ],
                  [
                    'Flexible College Training Formats',
                    'Choose from weekend workshops, multi-day placement preparation bootcamps, and semester-long skill development programs.'
                  ]
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-100 text-xs font-black text-teal-700">
                      <Check size={14} />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold">{title}</h3>
                      <p className="mt-1 text-xs leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a className="btn-primary" href="#contact">
                Plan a college placement program <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* About Academy Section */}
        <section id="about" className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="section-kicker">About the academy</p>
              <h2>Chennai’s Dedicated Hub for Campus Placement & Technical Skills.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Code Scapex Academy (a training division of ALTUMERA SOLUTIONS PRIVATE LIMITED) provides industry-focused placement coaching, technical training, and employability skills development for engineering students in Chennai and across Tamil Nadu.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We bridge the gap between academic education and industry hiring standards through rigorous training in Core Java, Python, SQL, Data Structures & Algorithms (DSA), aptitude problem-solving, and hands-on coding practice.
              </p>
              <a className="btn-primary mt-7" href="#contact">
                Start a conversation <ArrowRight size={16} />
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold">Training & Placement Experience</h3>
              {[
                [
                  'Panimalar Engineering College',
                  'Placement training and mentoring experience in Core Java, programming fundamentals, OOP, SQL, and DSA coding.'
                ],
                [
                  'Dr. M.G.R. Educational and Research Institute',
                  'Institutional technical training and student skill development experience shared by the academy.'
                ],
                [
                  'Core Placement Domains',
                  'Aptitude training, DSA, Java, Python, SQL, web technologies, coding placement assessments, and interview coaching.'
                ]
              ].map(([title, text]) => (
                <div key={title} className="flex gap-3 border-t border-slate-100 py-4 first:mt-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-cyan" />
                  <div>
                    <h4 className="text-sm font-bold">{title}</h4>
                    <p className="mt-1 text-xs leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
              <p className="mt-3 border-l-2 border-cyan bg-slate-50 p-3 text-[11px] leading-6 text-slate-500">
                Institutional experience is presented as background, not as an endorsement or formal partnership. Training details and college programs are conducted with agreed objectives.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="approach" className="bg-slate-100 section-pad">
          <div className="mx-auto max-w-7xl px-5">
            <div className="section-head">
              <p className="section-kicker">How we work</p>
              <h2>A proven pathway to placement excellence.</h2>
              <p>
                We coordinate closely with your college placement cell and faculty to design targeted training. Program scope, batch schedule, delivery mode, and syllabus are structured before launch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'Understand Campus Goals', 'Analyze student year, department, current technical and aptitude skill levels, and placement target companies.'],
                ['02', 'Structure the Training', 'Customize the syllabus across Java, Python, SQL, DSA, or aptitude with structured practice and mock tests.'],
                ['03', 'Deliver Practical Sessions', 'Engage students with live coding demonstrations, interview problem patterns, and interactive debugging.'],
                ['04', 'Assess & Empower', 'Provide assessment feedback, mock interview evaluations, and actionable career guidance for high placement results.']
              ].map(([num, title, text]) => (
                <article className="rounded-xl border border-slate-200 bg-white p-5" key={num}>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-50 text-sm font-black text-teal-700">
                    {num}
                  </span>
                  <h3 className="mt-4 font-extrabold">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-navy px-5 py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Elevate Campus Placements for Your Engineering Students
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Partner with Code Scapex Academy in Chennai to conduct impactful placement training, aptitude coaching, and technical skills bootcamps.
              </p>
            </div>
            <a className="btn-primary shrink-0" href="#contact">
              Request institutional discussion <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-pad">
          <div className="mx-auto max-w-7xl px-5">
            <div className="section-head">
              <p className="section-kicker">Frequently Asked Questions</p>
              <h2>Planning a placement training program with Code Scapex?</h2>
              <p>Common questions from engineering colleges and placement cells in Chennai.</p>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              {faqs.map(([question, answer], index) => (
                <div key={question} className="rounded-xl border border-slate-200 bg-white p-5">
                  <button
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-extrabold"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    {question}
                    <ChevronDown
                      className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      size={18}
                    />
                  </button>
                  {openFaq === index && <p className="mt-3 text-xs leading-6 text-slate-600">{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Enquiry Section */}
        <section id="contact" className="bg-slate-100 section-pad">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="section-kicker">Partner with us</p>
              <h2>Let’s plan your next student placement training program.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Share a few details and our placement training team will prepare tailored proposals and syllabi for your college.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-slate-600">
                <span className="icon-tile">
                  <Mail size={21} />
                </span>
                <div>
                  <strong className="block text-slate-900">Email enquiries</strong>
                  <a className="hover:text-teal-700" href="mailto:codescapex@gmail.com">
                    codescapex@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-slate-600">
                <span className="icon-tile">
                  <MapPin size={21} />
                </span>
                <div>
                  <strong className="block text-slate-900">Location</strong>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-slate-600">
                <span className="icon-tile">
                  <Mail size={21} />
                </span>
                <div>
                  <strong className="block text-slate-900">Phone / WhatsApp</strong>
                  <a
                    className="hover:text-teal-700"
                    href="https://wa.me/919440972536"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 94409 72536
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={submitEnquiry}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name *">
                  <input name="name" required autoComplete="name" placeholder="Name of coordinator / TPO" />
                </Field>
                <Field label="Your role *">
                  <select name="role" required defaultValue="">
                    <option value="" disabled>
                      Select role
                    </option>
                    <option>Training & Placement Officer (TPO)</option>
                    <option>Principal / Management</option>
                    <option>HOD / Department Faculty</option>
                    <option>Institutional Placement Coordinator</option>
                    <option>Student Representative</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>
              <Field label="College / Institution *">
                <input name="institutionName" required placeholder="Engineering college name" />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Work email *">
                  <input name="email" type="email" required autoComplete="email" placeholder="you@college.edu" />
                </Field>
                <Field label="Phone number">
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Program of interest *">
                  <select name="program" required defaultValue="">
                    <option value="" disabled>
                      Choose a program
                    </option>
                    <option>Campus Placement & Aptitude Training</option>
                    <option>Core Java & Programming Training</option>
                    <option>Python Training & Problem Solving</option>
                    <option>DSA Training (Data Structures & Algorithms)</option>
                    <option>SQL Training & Database Concepts</option>
                    <option>Web Technologies & Frontend</option>
                    <option>Java Backend Foundations & APIs</option>
                    <option>Employability Skills & Career Training</option>
                    <option>Institutional Workshop / Customized Program</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
                <Field label="Expected student count">
                  <select name="students" defaultValue="">
                    <option value="">Select range</option>
                    <option>Up to 50</option>
                    <option>51–100</option>
                    <option>101–250</option>
                    <option>251–500</option>
                    <option>500+</option>
                  </select>
                </Field>
              </div>
              <Field label="Tell us about your requirements">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Preferred dates, student year, departments, duration, or placement targets"
                />
              </Field>
              <p className="mb-4 text-[11px] leading-5 text-slate-500">
                Your enquiry is sent directly to the Code Scapex institutional coordination team. Please do not submit confidential information.
              </p>
              <button className="btn-primary w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit enquiry'}{' '}
                <ArrowRight size={16} />
              </button>
              {formStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`form-status form-status-${formStatusType} mt-4 rounded-lg p-3 text-xs leading-5`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#051324] px-5 py-9 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <Brand />
            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-400">
              Code Scapex Academy – Premier campus placement preparation, engineering technical training, and employability skills in Chennai. A training division of ALTUMERA SOLUTIONS PRIVATE LIMITED.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-6 text-slate-400">
              <a className="hover:text-cyan" href="mailto:codescapex@gmail.com">
                codescapex@gmail.com
              </a>
              <br />
              <a className="hover:text-cyan" href="https://wa.me/919440972536" target="_blank" rel="noreferrer">
                +91 94409 72536 · WhatsApp
              </a>
              <br />
              Chennai, Tamil Nadu, India
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-x-5 gap-y-3 text-xs">
            {navItems.map(([label, href]) => (
              <a key={href} className="hover:text-cyan" href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-7 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-4 text-[10px] text-slate-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Code Scapex Academy. All rights reserved.</span>
          <span>Placement Training · Technical Skills · Chennai</span>
        </div>
      </footer>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="mb-4 block text-xs font-bold text-slate-800">
      {label}
      <span className="mt-2 block font-normal">{children}</span>
    </label>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)