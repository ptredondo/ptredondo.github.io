
import React, { useState } from 'react'
import { Sparkles, GraduationCap, Newspaper, Code, Award, Briefcase, BookOpen, Users } from 'lucide-react'
import { Card, CardContent, Badge, Button } from './ui.jsx'
import portrait from './assets/portrait.jpg'

const resume = {
  basics: {
    name: "Paolo Victor Tamoro Redondo",
    title: "Ph.D. Candidate in Statistics, King Abdullah University of Science and Technology (KAUST)",
    location: "Thuwal, Saudi Arabia",
    email: "paolovictor.redondo@kaust.edu.sa",
    github: "ptredondo",
    linkedin: "https://www.linkedin.com/in/paolovictorredondo/",
    summary:"\"Research means that you don\'t know, but you are willing to find out.\" - Charles F. Kettering \n \n Academic Advisers: Prof. Raphaël Huser and Prof. Hernando Ombao",
  },
  education: [
    { degree: "Ph.D. Candidate in Statistics", institution: "Computer, Electrical and Mathematical Sciences and Engineering (CEMSE), KAUST", period: "Jan 2021 – Present" },
    { degree: "M.S. Statistics", institution: "School of Statistics, University of the Philippines Diliman", period: "Aug 2015 – Jun 2017" },
    { degree: "B.S. Statistics (Magna Cum Laude)", institution: "School of Statistics, University of the Philippines Diliman", period: "Jun 2011 – Jun 2015" },
  ],
  published: [
    { year: 2025, title: "Measuring Information Transfer Between Nodes in a Brain Network through Spectral Transfer Entropy", authors: "REDONDO, P.; Huser, R.; Ombao, H.", venue: "The Annals of Applied Statistics 19(3): 2386–2411", url: "https://doi.org/10.1214/25-AOAS2050" },
    { year: 2025, title: "Functional-Coefficient Models for Multivariate Time Series in Designed Experiments: with Application to Brain Signals", authors: "REDONDO, P.; Huser, R.; Ombao, H.", venue: "The Annals of Applied Statistics 19(3): 2360–2385", url: "https://doi.org/10.1214/25-AOAS2046" },
    { year: 2025, title: "Statistics of Extremes for Neuroscience", authors: "REDONDO, P.; Guerrero, M.; Huser, R.; Ombao, H.", venue: "Handbook on Statistics of Extremes (Chapman & Hall / CRC), accepted. Preprint", url: "https://arxiv.org/pdf/2404.09157" },
    { year: 2025, title: "Methods for Brain Connectivity Analysis with Applications to Rat Local Field Potential Recordings", authors: "El-Yaagoubi, A.; Aslan, S.; Gomawi, F.; REDONDO, P.; Roy, S.; Sultan, M.; Talento, M.; Tarrazona, F.; Wu, H.; Cooper, K.; Fortin, N.; Ombao, H.", venue: "Entropy 27(4): 328", url: "https://doi.org/10.3390/e27040328" },
    { year: 2024, title: "Modern Extreme Value Statistics for Utopian Extremes. EVA (2023) Conference Data Challenge: Team Yalla", authors: "Richards, J.; Alotaibi, N.; Cisneros, D.; Gong, Y.; Guerrero, M.; REDONDO, P.; Shao, X.", venue: "Extremes 28: 149–171", url: "https://doi.org/10.1007/s10687-024-00496-y" },
    { year: 2023, title: "Nonparametric Test for Volatility in Clustered Multiple Time Series", authors: "Barrios, E.; REDONDO, P.", venue: "Computational Economics, 1–16", url: "https://doi.org/10.1007/s10614-023-10362-x" },
    { year: 2022, title: "Estimation of Poisson Autoregressive Model for Multiple Time Series", authors: "REDONDO, P.; Lansangan, J.; Barrios, E.", venue: "Philippine Journal of Science 151(2): 563–574", url: "https://doi.org/10.56899/151.02.02" },
    { year: 2019, title: "Optimal Variable Subset Selection Problem in Regression Analysis is NP-Complete", authors: "REDONDO, P.", venue: "The Philippine Statistician 68(1): 41–50", url: "https://www.psai.ph/tps_details.php?id=107" },
    { year: 2016, title: "Purposive Sampling in the Analysis of Count Data", authors: "REDONDO, P.", venue: "The Philippine Statistician 65(1): 41–52", url: "https://www.psai.ph/tps_details.php?id=80" },
  ],
  underReview: [
    { title: "Club Exco: Clustering Brain Extreme Communities from Multi-channel EEG Data", authors: "Guerrero, M.; REDONDO, P.; Huser, R.; Ombao, H.", note: "Major revision for The Annals of Applied Statistics", url: "https://arxiv.org/abs/2212.04338" },
    { title: "Evaluating Cortical Activity and Balance Performance in Alpine Skiers: An fNIRS Study", authors: "Khan, H.; REDONDO, P.; Engell, H.; Ombao, H.; Mirtaheri, P.", note: "Under review at Human Movement Science", url: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.24188673.v2" },
    { title: "The Linkage of Weather Extremes and Firm Efficiency: Empirical Evidence from Electric Cooperatives in the Philippines", authors: "Barrios, E.; Mazlan, N.; Weng, L.; REDONDO, P.; Chinh, L.", note: "Under review for Journal of Applied Econometrics" },
    { title: "On Tuberculosis Incidence, Health Expenditure and Macroeconomy: Insights from Cross-Country Data", authors: "Barrios, E.; REDONDO, P.; Nalica, A.", note: "Under review for Computational Economics" },
  ],
  inProgress: [
    { title: "Nonlinear Coherence for Vector Time Series: Defining Region-to-Region Functional Brain Connectivity", authors: "REDONDO, P.; Huser, R.; Ombao, H." },
    { title: "Spectral Causation Entropy and its Neural Estimator", authors: "REDONDO, P.; Huser, R.; Ombao, H." },
    { title: "Lead-lag Associations in Time Series: Frequency-specific Investigations", authors: "Ombao, H.; Aslan, S.; REDONDO, P." },
  ],
  software: [
    { name: "mxfar (R package)", note: "Functional-coefficient models for multivariate time series in designed experiments (EEG application)", link: "https://github.com/ptredondo/mxfar" },
    { name: "HSE_Chap30_Neuroscience (repo)", note: "EEG analysis code for 'Statistics of Extremes for Neuroscience'", link: "https://github.com/ptredondo/HSE_Chap30_Neuroscience" },
    { name: "NonparVolTest (R package)", note: "Nonparametric volatility test for clustered multiple time series", link: "https://github.com/ptredondo/NonparVolTest" },
  ],
  awards: [
    { name: "Runner-up, Distinguished Student Paper Award", org: "ASA Statistics in Imaging (JSM 2023)", year: "2023" },
    { name: "Best Poster Award", org: "EVA 2023", year: "2023" },
    { name: "Winner (Team Yalla), Data Challenge", org: "EVA 2023", year: "2023" },
    { name: "Al-Kindi Statistics Research Student Award", org: "KAUST", year: "2023" },
    { name: "Dean’s List", org: "CEMSE, KAUST", year: "AY 2021/2022, AY 2022/2023, AY 2023/2024, AY 2024/2025" },
  ],
  experience: [
    { role: "Teaching Assistant, CEMSE, KAUST", org: "", period: "Fall 2021 - Fall 2025", bullets: ["AMCS 143: Introduction to Probability and Statistics (Fall 2021)", "STAT 350: Time Series Analysis (Spring 2022, Spring 2024)", "STAT 220: Probability and Statistics (Fall 2023, Fall 2024, Fall 2025)","STAT 360: Functional Data Analysis (Spring 2024)","KAUST-ARAMCO course: Applied Statistics and Data Analysis (Summer 2022)","KAUST-ARAMCO course: Applied Statistics in R (Spring 2023)"] },
    { role: "Assistant Mentor, Saudi Research Science Institute (SRSI)", org: "", period: "Summer 2022, Winter 2024", bullets: ["Coached finalists: Saudi Young Talent (Winter 2024), National Olympiad for Scientific Creativity (Summer 2022)"] },
    { role: "Faculty Member, School of Statistics, University of the Philippines Diliman", org: "", period: "Aug 2015 – Jul 2019", bullets: ["Assistant Professor (Sep 2017 – Jul 2019)", "Instructor 4 (Aug 2015 – Aug 2017)"] },
    { role: "Statistical Consultant, Philippine Government and Private Sector", org: "", period: "Jan 2018 – Sep 2021", bullets: ["Philippine Statistics Authority (PSA): Sampling design revisions (AFS, CFS, IFS, MFS, FIES, CAF, LFS)", "Development Academy of the Philippines (DAP): AFMA impact assessment; BizSat survey", "Rebisco (Food Corporation): Dashboard analytics", "Energy Development Corporation (EDC): Dashboard analytics"] },
  ],
  talks: [
    { when: "Aug 2025", title: "Inference on Causation Entropy through Vine Copulas and Amortized Neural Estimators", venue: "EcoSta 2025, Tokyo, Japan" },
    { when: "Dec 2024", title: "Nonlinear Coherence for Vector Time Series", venue: "ICSDS 2024, Nice, France" },
    { when: "Dec 2023", title: "Nonlinear Spectral Dependence Measure for Brain Connectivity in Designed Experiments", venue: "ICSDS 2023, Lisbon, Portugal" },
    { when: "Dec 2023", title: "A Nonlinear Spectral Dependence Measure for Brain Connectivity in Designed Experiments", venue: "CMStatistics 2023, Berlin, Germany" },
    { when: "Dec 2023", title: "A short tutorial on general dependence measures", venue: "MSM 2023, Krakow, Poland" },
    { when: "Aug 2023", title: "Measuring Information Transfer Between Nodes in a Brain Network Through Spectral Transfer Entropy", venue: "JSM 2023, Toronto, Canada" },
    { when: "Aug 2023", title: "Measuring Cross-Channel Information Transfer in the Frequency Domain", venue: "EcoSta 2023, Tokyo, Japan" },
    { when: "Jun 2023", title: "Spectral Transfer Entropy and its Application to Extremal Brain Causal Connectivity Networks (Poster)", venue: "EVA 2023, Milan, Italy" },
    { when: "Dec 2022", title: "Tail Transfer Entropy: A New Extremal Dependence Measure for Studying Connectivity in a Brain Network", venue: "CMStatistics 2022, London, United Kingdom" },
    { when: "Dec 2022", title: "Measuring Cross-Channel Information Transfer Through Spectral Transfer Entropy", venue: "ICSDS 2022, Florence, Italy" },
    { when: "Jun 2022", title: "Functional-coefficient Models for Multivariate Time Series in Designed Experiments", venue: "EcoSta 2022 (Virtual), Tokyo, Japan" },
    { when: "Mar 2022", title: "Functional-coefficient Models ... with Application to Brain Signals", venue: "ENAR 2022 Spring Meeting, Houston, USA" },
  ],
}
function H2({ icon, children, id }){
  return (
    <div id={id} className="flex items-center gap-2 mb-4 scroll-mt-24">
      {icon}
      <h2 className="text-2xl font-semibold">{children}</h2>
    </div>
  )
}
function Pub({ p }){
  return (
    <li className="mb-3">
      <div className="text-sm text-zinc-500 dark:text-zinc-400">{p.year ? `${p.year} · ` : ""}{p.venue}</div>
      <div className="font-medium leading-snug">
        {p.url ? <a href={p.url} target="_blank" rel="noreferrer" className="underline">{p.title}</a> : p.title}
      </div>
      <div className="text-sm">{p.authors}</div>
    </li>
  )
}
export default function App(){
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 grid place-items-center rounded-xl border border-zinc-200 dark:border-zinc-800">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold leading-tight">{resume.basics.name}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{resume.basics.title}</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-5 text-sm">
              <a href="#education" className="hover:underline underline-offset-4">Education</a>
              <a href="#published" className="hover:underline underline-offset-4">Published Papers</a>
              <a href="#under-review" className="hover:underline underline-offset-4">Under Review</a>
              <a href="#in-progress" className="hover:underline underline-offset-4">In Progress</a>
              <a href="#software" className="hover:underline underline-offset-4">Developed Software</a>
              <a href="#awards" className="hover:underline underline-offset-4">Awards</a>
              <a href="#experience" className="hover:underline underline-offset-4">Working Experience</a>
              <a href="#talks" className="hover:underline underline-offset-4">Conference Papers</a>
            </nav>
            <Button variant="outline" onClick={()=> setDark(!dark)}>{dark? 'Light' : 'Dark'}</Button>
          </div>
        </header>
        <main className="container py-8 space-y-12">
          <section id="about" className="scroll-mt-24">
            <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
              <div className="justify-self-center md:justify-self-start">
                <img src={portrait} alt="Portrait of Paolo Victor T. Redondo" className="portrait w-[220px] h-[220px] object-cover object-center" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{resume.basics.name}</h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-1">{resume.basics.title}</p>
                <div className="flex flex-wrap gap-2 mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>📍 {resume.basics.location}</span>
                  <a className="underline" href={`mailto:${resume.basics.email}`}> Email </a>
                  <a  className="underline"  href={`https://github.com/${resume.basics.github}`}  target="_blank"  rel="noreferrer">  GitHub </a>
                  <a  className="underline"  href={resume.basics.linkedin}  target="_blank"  rel="noreferrer">  LinkedIn </a>
                </div>
                <p className="mt-4 leading-relaxed">{resume.basics.summary}</p>
              </div>
            </div>
          </section>

          {/* Education and Awards side by side */}
          <div className="flex flex-col md:flex-row md:space-x-8" id="education-awards">
            {/* Left column: Education */}
            <section id="education" className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5"/>
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              <div className="space-y-3">
                {resume.education.map((e, i)=>(
                  <div key={i} className="border-l-2 pl-3">
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{e.period}</div>
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-sm">{e.institution}</div>
                  </div>
                ))}
              </div>
            </section>
          
            {/* Right column: Awards */}
            <section id="awards" className="md:w-1/2 mt-8 md:mt-0">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5"/>
                <h2 className="text-2xl font-semibold">Awards</h2>
              </div>
              <ul className="space-y-2">
                {resume.awards.map((a,i)=>(
                  <li key={i} className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{a.year} · {a.name} — {a.org}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <section id="published">
            <div className="flex items-center gap-2 mb-4"><Newspaper className="w-5 h-5"/><h2 className="text-2xl font-semibold">Published Papers</h2></div>
            <ul>{resume.published.map((p,i)=> <Pub key={i} p={p} />)}</ul>
          </section>
          <section id="under-review">
            <div className="flex items-center gap-2 mb-4"><Newspaper className="w-5 h-5"/><h2 className="text-2xl font-semibold">Papers Under Review / Submitted</h2></div>
            <ul className="space-y-3">
              {resume.underReview.map((p, i)=> (
                <li key={i}>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm">{p.authors}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">{p.note}{p.url ? <> · <a className="underline" href={p.url} target="_blank" rel="noreferrer">link</a></> : null}</div>
                </li>
              ))}
            </ul>
          </section>
          <section id="in-progress">
            <div className="flex items-center gap-2 mb-4"><BookOpen className="w-5 h-5"/><h2 className="text-2xl font-semibold">Papers in Progress</h2></div>
            <ul className="list-disc ml-5 space-y-1">
              {resume.inProgress.map((p, i)=> (
                <li key={i}><span className="font-medium">{p.title}</span> — <span className="text-sm">{p.authors}</span></li>
              ))}
            </ul>
          </section>
          <section id="software">
            <div className="flex items-center gap-2 mb-4"><Code className="w-5 h-5"/><h2 className="text-2xl font-semibold">Developed Softwares</h2></div>
            <div className="grid md:grid-cols-2 gap-4">
              {resume.software.map((s, i)=> (
                <Card key={i}><CardContent>
                  <div className="font-medium"><a className="underline" href={s.link} target="_blank" rel="noreferrer">{s.name}</a></div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{s.note}</div>
                </CardContent></Card>
              ))}
            </div>
          </section>
          <section id="experience">
            <div className="flex items-center gap-2 mb-4"><Briefcase className="w-5 h-5"/><h2 className="text-2xl font-semibold">Working Experience</h2></div>
            <div className="space-y-4">
              {resume.experience.map((x, idx)=>(
                <Card key={idx}><CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{x.period}</div>
                      <div className="font-medium">{x.role}</div>
                      <div className="text-sm">{x.org}</div>
                    </div>
                  </div>
                  {x.bullets?.length>0 && <ul className="list-disc ml-5 mt-3 space-y-1">{x.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>}
                </CardContent></Card>
              ))}
            </div>
          </section>
          <section id="talks">
            <div className="flex items-center gap-2 mb-4"><Users className="w-5 h-5"/><h2 className="text-2xl font-semibold">Papers Presented in Conferences</h2></div>
            <ul className="list-disc ml-5 space-y-1">
              {resume.talks.map((t,i)=>(
                <li key={i}><span className="font-medium">{t.when} · {t.title}</span> — <span className="text-sm">{t.venue}</span></li>
              ))}
            </ul>
          </section>
          <footer className="text-center text-xs text-zinc-500 py-8">
            © {new Date().getFullYear()} {resume.basics.name}. Built with ♥.
          </footer>
        </main>
      </div>
    </div>
  )
}
