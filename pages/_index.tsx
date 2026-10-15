import React, { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Layers3, Menu, MonitorSmartphone, Play, Sparkles, Workflow, X, Zap } from "lucide-react";
import { useScrollReveal } from "../helpers/useScrollReveal";
import styles from "./_index.module.css";

const projects = [
  { name: "Yara Boutique", type: "E-commerce", category: "Commerce", number: "01", description: "A fresh digital storefront designed to make discovering everyday style feel effortless.", visual: "fashion", label: "ONLINE STORE", accent: "#d9d0c7", url: "" },
  { name: "PONK Crane Hire", type: "Business website", category: "Websites", number: "02", description: "A confident online presence for a specialist crane hire and lifting business.", visual: "crane", label: "INDUSTRIAL / SERVICES", accent: "#c4d7e8", url: "https://ponkcranes.co.zw/" },
  { name: "The Courtyard", type: "Event brand & website", category: "Websites", number: "03", description: "An atmospheric digital home for curated gatherings, culture and experiences.", visual: "courtyard", label: "EVENTS / CULTURE", accent: "#c7c8ad", url: "" },
  { name: "FabricationOS", type: "Business system · In development", category: "Systems", number: "04", description: "A purpose-built operations workspace for fabrication teams, jobs and production visibility.", visual: "system", label: "PRODUCT CONCEPT / BUILD", accent: "#c5c9fa", url: "" },
  { name: "AI Architect", type: "Research & prototype concept", category: "Automation", number: "05", description: "Exploring ways to turn architectural instructions into reviewable digital drawing workflows.", visual: "architect", label: "R&D CONCEPT", accent: "#d0d9e7", url: "" },
];

const services = [
  { icon: MonitorSmartphone, n: "01", title: "Websites that work harder", text: "Distinctive, responsive websites that make your business easier to trust, understand and choose." },
  { icon: Layers3, n: "02", title: "E-commerce experiences", text: "Beautiful online stores with clear journeys from first look to checkout." },
  { icon: Workflow, n: "03", title: "Custom business systems", text: "Tools shaped around your real workflow: jobs, teams, stock, reporting and operations." },
  { icon: Sparkles, n: "04", title: "AI & automation", text: "Reduce repetitive work and connect the steps that slow your business down." },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#home" className={`${styles.brand} ${light ? styles.brandLight : ""}`} aria-label="VanillaWebz home"><span className={styles.brandMark}><i /><i /><i /><b /></span><span>vanilla<span className={styles.brandWebz}>webz</span></span></a>;
}

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  if (project.visual === "fashion") return <div className={`${styles.visual} ${styles.fashionVisual}`}><div className={styles.fashionSun} /><div className={styles.fashionCard}><span>YARA</span><b>SPRING<br/>IN BLOOM</b><small>NEW SEASON / 2026</small></div><div className={styles.fashionShape} /></div>;
  if (project.visual === "crane") return <div className={`${styles.visual} ${styles.craneVisual}`}><div className={styles.skyline} /><div className={styles.craneMast} /><div className={styles.craneArm} /><div className={styles.craneHook} /><div className={styles.craneText}>LIFT<br/>BIGGER.</div></div>;
  if (project.visual === "courtyard") return <div className={`${styles.visual} ${styles.courtyardVisual}`}><div className={styles.courtyardGlow} /><div className={styles.courtyardTitle}>The<br/><em>Courtyard</em><small>GATHER DIFFERENTLY</small></div><div className={styles.courtyardPlant}>✳</div></div>;
  if (project.visual === "system") return <div className={`${styles.visual} ${styles.systemVisual}`}><div className={styles.dashWindow}><div className={styles.dashTop}><i/><i/><i/><span>FABRICATION / OVERVIEW</span></div><div className={styles.dashSide}><b/><b/><b/><b/><b/></div><div className={styles.dashMain}><small>OPERATIONS OVERVIEW</small><strong>Production at a glance.</strong><div className={styles.dashStats}><i/><i/><i/></div><div className={styles.dashGraph}><b/><b/><b/><b/><b/><b/><b/><b/><b/></div></div></div></div>;
  return <div className={`${styles.visual} ${styles.architectVisual}`}><div className={styles.blueprint}><div/><div/><div/><div/><div/><div/><span>PLAN / 02</span></div><div className={styles.architectLabel}>IDEAS INTO<br/><em>architecture.</em></div></div>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });
  const heroReveal = useScrollReveal();
  const workReveal = useScrollReveal();
  const serviceReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const contactReveal = useScrollReveal();
  const filtered = filter === "All work" ? projects : projects.filter(p => p.category === filter);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`VanillaWebz project enquiry — ${form.service || "New project"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business || "Not provided"}\nService: ${form.service}\n\nProject details:\n${form.message}\n\nSent via vanillawebz.co.za`);
    window.location.href = `mailto:hello@vanillawebz.co.za?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return <main className={styles.site}>
    <header className={styles.header}><Brand light/><nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}><a onClick={() => setMenuOpen(false)} href="#work">Work</a><a onClick={() => setMenuOpen(false)} href="#services">Services</a><a onClick={() => setMenuOpen(false)} href="#studio">Studio</a><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></nav><a className={styles.headerCta} href="#contact">Start a project <ArrowUpRight size={15}/></a><button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button></header>

    <section id="home" className={styles.hero}>
      <div className={styles.heroGlow}/><div className={styles.heroGrid}/>
      <div className={styles.heroContent} ref={heroReveal}>
        <div className={styles.eyebrow}><span className={styles.statusDot}/> INDEPENDENT DIGITAL STUDIO <span className={styles.eyebrowLine}/></div>
        <h1>Make your next<br/>move <span className={styles.gradientText}>matter.</span></h1>
        <p className={styles.heroText}>We build digital experiences and business systems that help ambitious companies move forward.</p>
        <div className={styles.heroActions}><a href="#work" className={styles.primaryButton}>Explore our work <ArrowRight size={17}/></a><a href="#services" className={styles.secondaryButton}><span className={styles.playCircle}><Play size={11} fill="currentColor"/></span> What we do</a></div>
        <div className={styles.heroFoot}><span>WEBSITES · SYSTEMS · AUTOMATION</span><a href="#work">SCROLL TO DISCOVER <ArrowDown size={13}/></a></div>
      </div>
      <div className={styles.heroArtwork} aria-label="Abstract blue and violet digital ribbon artwork"><div className={`${styles.orbit} ${styles.orbitOne}`}/><div className={`${styles.orbit} ${styles.orbitTwo}`}/><div className={styles.artCore}><div className={styles.ribbonA}/><div className={styles.ribbonB}/><div className={styles.ribbonC}/></div><div className={styles.artLabel}><span>01 / DIGITAL POSSIBILITY</span><span>BUILT FOR WHAT'S NEXT ↗</span></div></div>
      <div className={styles.heroBottom}><span>BASED IN SOUTHERN AFRICA</span><span className={styles.bottomRule}/><span>BUILDING WITHOUT BORDERS</span></div>
    </section>

    <section id="work" className={styles.workSection}><div className={styles.sectionIntro} ref={workReveal}><div><div className={styles.sectionEyebrow}>A FEW THINGS WE'VE BEEN MAKING <span>↘</span></div><h2>Good work speaks<br/><em>for itself.</em></h2></div><p>From customer-facing websites to the systems behind the scenes, every project starts with a real business need.</p></div>
      <div className={styles.filters}>{["All work", "Websites", "Commerce", "Systems", "Automation"].map(f => <button key={f} className={filter === f ? styles.filterActive : ""} onClick={() => setFilter(f)}>{f}<span>{f === "All work" ? "05" : String(projects.filter(p => p.category === f).length).padStart(2,"0")}</span></button>)}</div>
      <div className={styles.projectGrid}>{filtered.map((p, i) => <article key={p.name} className={`${styles.projectCard} ${i === 0 && filter === "All work" ? styles.projectWide : ""}`}><a href={p.url || "#contact"} target={p.url ? "_blank" : undefined} rel={p.url ? "noreferrer" : undefined} className={styles.projectLink} aria-label={p.url ? `Visit ${p.name} website` : `Enquire about a project like ${p.name}`}><ProjectVisual project={p}/><div className={styles.projectMeta}><div><span className={styles.projectType}>{p.url ? "LIVE WEBSITE ↗" : p.label}</span><h3>{p.name}</h3><p>{p.description}</p></div><span className={styles.projectArrow}><ArrowUpRight size={20}/></span></div><div className={styles.projectFoot}><span>{p.type}</span><span>0{p.number} / 05</span></div></a></article>)}</div>
      <div className={styles.workNote}><span className={styles.noteDot}/> A selection of active work and concepts. Product concepts are clearly marked while in development.</div>
    </section>

    <section id="services" className={styles.servicesSection}><div className={styles.servicesHead} ref={serviceReveal}><div><div className={styles.sectionEyebrow}>WHAT WE BRING TO THE TABLE <span>↘</span></div><h2>More than a<br/><em>pretty website.</em></h2></div><p>Design is the beginning. We connect the experience your customers see with the work your business needs to get done.</p></div><div className={styles.serviceGrid}>{services.map(s => { const Icon = s.icon; return <article className={styles.serviceCard} key={s.n}><div className={styles.serviceTop}><span>{s.n} / 04</span><Icon size={22} strokeWidth={1.5}/></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Ask us about ${s.title}`}><ArrowUpRight size={18}/></a></article>; })}</div><div className={styles.servicesBanner}><span>HAVE A CHALLENGE THAT DOESN'T FIT A BOX?</span><a href="#contact">Let's figure it out together <ArrowRight size={16}/></a></div></section>

    <section id="studio" className={styles.studioSection}><div className={styles.studioVisual}><div className={styles.studioOrb}/><div className={styles.studioMark}><span/><span/><span/><i/></div><div className={styles.studioCaption}>IDEAS, MEET EXECUTION.</div></div><div className={styles.studioCopy} ref={processReveal}><div className={styles.sectionEyebrow}>SMALL STUDIO. BIG PICTURE. <span>↘</span></div><h2>Built around<br/>your <em>next chapter.</em></h2><p>VanillaWebz brings design, technology and practical thinking together. We work with businesses that are ready to improve how they show up, how they operate, and what they can do next.</p><div className={styles.principles}><div><span>01</span><b>Understand first</b><p>We start with the problem, not the software.</p></div><div><span>02</span><b>Make it useful</b><p>Every detail should earn its place.</p></div><div><span>03</span><b>Build for change</b><p>Digital tools should grow with your business.</p></div></div><a className={styles.textLink} href="#contact">A little more about your project <ArrowRight size={16}/></a></div></section>

    <section className={styles.processSection}><div className={styles.processHeader}><div className={styles.sectionEyebrow}>CLEAR STEPS. NO MYSTERY. <span>↘</span></div><h2>From first thought<br/>to <em>what's next.</em></h2></div><div className={styles.processSteps} ref={contactReveal}><div><span>01</span><h3>Discover</h3><p>We learn how your business works and what needs to change.</p></div><div><span>02</span><h3>Shape</h3><p>We agree on a clear direction, priorities and scope.</p></div><div><span>03</span><h3>Build</h3><p>We create, test and refine the experience with you.</p></div><div><span>04</span><h3>Move forward</h3><p>Launch, learn and keep improving where it matters.</p></div></div></section>

    <section id="contact" className={styles.contactSection}><div className={styles.contactGlow}/><div className={styles.contactCopy}><div className={styles.sectionEyebrow}>HAVE SOMETHING IN MIND? <span>↘</span></div><h2>Let's make<br/>it <em>happen.</em></h2><p>Tell us a little about what you're building, fixing or figuring out. We'll take it from there.</p><div className={styles.contactAside}><span className={styles.contactIcon}><Zap size={17}/></span><div><b>Good things start with a conversation.</b><small>Reach us directly and let's work out the next step.</small><div className={styles.contactLinks} style={{display:"flex",flexDirection:"column",gap:10,marginTop:15}}><a style={{color:"#b9aaff",fontSize:12,textDecoration:"none"}} href="https://wa.me/263772924731" target="_blank" rel="noreferrer">WhatsApp +263 772 924 731 ↗</a><a style={{color:"#b9aaff",fontSize:12,textDecoration:"none"}} href="mailto:hello@vanillawebz.co.za">hello@vanillawebz.co.za</a><a style={{color:"#b9aaff",fontSize:12,textDecoration:"none"}} href="tel:+263772924731">Call us ↗</a></div></div></div></div><form className={styles.contactForm} onSubmit={submitForm}><div className={styles.formTitle}><span>PROJECT ENQUIRY</span><span>LET'S TALK ↗</span></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="What should we call you?"/></label><div className={styles.formRow}><label>Email address<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label><label>Business / company<input value={form.business} onChange={e=>setForm({...form,business:e.target.value})} placeholder="Your company"/></label></div><label>What can we help with?<select required value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Choose a service</option><option>Website design & development</option><option>E-commerce</option><option>Custom business system</option><option>AI & automation</option><option>Something else</option></select></label><label>Tell us a little about it<textarea required rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="The challenge, the idea, the goal..."/></label><button className={styles.submitButton} type="submit">{sent ? <>Open email draft again <Check size={16}/></> : <>Send project enquiry <ArrowUpRight size={17}/></>}</button><small className={styles.formDisclaimer}>{sent ? "Your email app should open with the enquiry prepared. Press Send there to deliver it." : "Submitting opens your email app with the enquiry pre-filled. Press Send in your email app to deliver it."}</small></form></section>

    <footer className={styles.footer}><div className={styles.footerTop}><Brand light/><p>Digital experiences.<br/>Systems that make sense.</p><a href="#home" className={styles.backTop}>BACK TO TOP ↑</a></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} VANILLAWEBZ</span><span>DESIGNED FOR WHAT'S NEXT.</span><a href="mailto:hello@vanillawebz.co.za">hello@vanillawebz.co.za</a><a href="https://wa.me/263772924731" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div></footer>
    <a className={styles.whatsappFloat} style={{position:"fixed",right:22,bottom:22,zIndex:30,display:"flex",alignItems:"center",gap:10,padding:"14px 17px",borderRadius:999,background:"linear-gradient(110deg,#315fff,#7850f4)",color:"white",textDecoration:"none",fontSize:12,fontWeight:600,boxShadow:"0 12px 35px #0005"}} href="https://wa.me/263772924731?text=Hi%20VanillaWebz%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with VanillaWebz on WhatsApp"><span>WhatsApp us</span><Zap size={18}/></a>
  </main>;
}