import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MessageCircle, PenLine, Languages, FileText, Image, Sparkles, Globe, Crown, ArrowUpRight, Menu, Plus, LockKeyhole } from 'lucide-react';
import './style.css';

const tools = [
  { id:'chat', icon:MessageCircle, title:'AI Chat', desc:'Ask anything. Explore ideas.' },
  { id:'writer', icon:PenLine, title:'AI Writer', desc:'Create clear, compelling text.' },
  { id:'translator', icon:Languages, title:'Translator', desc:'Translate across languages.' },
  { id:'documents', icon:FileText, title:'Documents', desc:'Summarize and understand files.' },
  { id:'images', icon:Image, title:'Image Studio', desc:'Turn ideas into visuals.' }
];
const copy = {
  English: { tagline:'ONE PLATFORM. ENDLESS POSSIBILITIES.', welcome:'Your AI workspace', subtitle:'What would you like to create today?', tools:'Your toolkit', plans:'Membership', prompt:'Ask anything or describe what you need...', send:'Send', popular:'POPULAR', weekly:'Weekly', monthly:'Monthly Pro', yearly:'Yearly VIP', days7:'7 days', days30:'30 days', days365:'365 days', choose:'Choose a tool', note:'Connect an AI provider to enable live responses.' },
  Русский: { tagline:'ОДНА ПЛАТФОРМА. БЕЗГРАНИЧНЫЕ ВОЗМОЖНОСТИ.', welcome:'Твоё рабочее пространство ИИ', subtitle:'Что создадим сегодня?', tools:'Твои инструменты', plans:'Подписка', prompt:'Напиши вопрос или опиши задачу...', send:'Отправить', popular:'ПОПУЛЯРНЫЙ', weekly:'На неделю', monthly:'Pro на месяц', yearly:'VIP на год', days7:'7 дней', days30:'30 дней', days365:'365 дней', choose:'Выбери инструмент', note:'Подключи ИИ-провайдера, чтобы включить ответы.' },
  O‘zbekcha: { tagline:'BITTA PLATFORMA. CHEKSIZ IMKONIYATLAR.', welcome:'Sizning AI ish joyingiz', subtitle:'Bugun nima yaratamiz?', tools:'AI vositalari', plans:'Obuna', prompt:'Savolingizni yozing yoki vazifani tasvirlang...', send:'Yuborish', popular:'MASHHUR', weekly:'Haftalik', monthly:'Oylik Pro', yearly:'Yillik VIP', days7:'7 kun', days30:'30 kun', days365:'365 kun', choose:'Vosita tanlang', note:'Javoblarni yoqish uchun AI provayderini ulang.' }
};
function App() {
 const [language,setLanguage] = useState('English');
 const [active,setActive] = useState('chat');
 const [question,setQuestion] = useState('');
 const [sent,setSent] = useState(false);
 const t = copy[language];
 const current = tools.find(x=>x.id===active) || tools[0];
 return <div className="app-shell">
  <aside className="sidebar">
   <div className="brand"><div className="brand-mark"><Sparkles size={22}/></div><div><b>AI HUB <span>NEXUS</span></b><small>YOUR AI WORKSPACE</small></div></div>
   <div className="side-label">WORKSPACE</div>
   {tools.map(item=><button key={item.id} className={'nav-item '+(active===item.id?'selected':'')} onClick={()=>{setActive(item.id);setSent(false)}}><item.icon size={18}/><span>{item.title}</span><ArrowUpRight size={14} className="nav-arrow"/></button>)}
   <div className="side-spacer"/>
   <div className="upgrade-card"><Crown size={19}/><b>Unlock your potential</b><p>Upgrade to access your AI toolkit.</p><button onClick={()=>document.getElementById('plans').scrollIntoView({behavior:'smooth'})}>Explore plans <ArrowUpRight size={15}/></button></div>
   <div className="sidebar-foot"><span className="status-dot"/> All systems designed for you</div>
  </aside>
  <main className="main">
   <header className="topbar"><button className="icon-button mobile-menu" aria-label="Menu"><Menu size={20}/></button><div className="crumb">Workspace <span>/</span> <b>{current.title}</b></div><div className="top-actions"><div className="language-select"><Globe size={16}/><select aria-label="Language" value={language} onChange={e=>setLanguage(e.target.value)}>{Object.keys(copy).map(l=><option key={l}>{l}</option>)}</select></div><div className="avatar">N</div></div></header>
   <section className="hero"><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="eyebrow"><Sparkles size={14}/> AI, REIMAGINED</div><h1>{t.welcome}<br/><span>without limits.</span></h1><p>{t.subtitle}</p><div className="hero-tagline">{t.tagline}</div></section>
   <section className="tools-section"><div className="section-head"><div><div className="section-kicker">BUILT FOR YOUR FLOW</div><h2>{t.tools}</h2></div><span className="tool-count">05 TOOLS</span></div>
    <div className="tool-grid">{tools.map(item=><button key={item.id} onClick={()=>{setActive(item.id);setSent(false)}} className={'tool-card '+(active===item.id?'active':'')}><div className="tool-icon"><item.icon size={21}/></div><div className="tool-card-title">{item.title}</div><p>{item.desc}</p><ArrowUpRight className="card-arrow" size={17}/></button>)}</div>
   </section>
   <section className="workspace-panel"><div className="panel-heading"><div className="tool-icon large"><current.icon size={23}/></div><div><h3>{current.title}</h3><p>{current.desc}</p></div><span className="secure-label"><LockKeyhole size={13}/> PRIVATE WORKSPACE</span></div>
    <div className="empty-state"><div className="empty-glow"><current.icon size={27}/></div><h3>{sent?'Request saved in this demo':'Ready when you are'}</h3><p>{sent?'This is a visual prototype. Live AI replies are not connected yet.':t.note}</p></div>
    <form className="composer" onSubmit={e=>{e.preventDefault();if(question.trim())setSent(true)}}><textarea value={question} onChange={e=>setQuestion(e.target.value)} placeholder={t.prompt} rows="2"/><div className="composer-bottom"><span><Plus size={15}/> Attachments soon</span><button type="submit" disabled={!question.trim()}>{t.send} <ArrowUpRight size={16}/></button></div></form>
   </section>
   <section id="plans" className="plans-section"><div className="section-head"><div><div className="section-kicker">SIMPLE MEMBERSHIP</div><h2>{t.plans}</h2></div><span className="tool-count">PICK YOUR ACCESS</span></div><div className="plan-grid">
    <div className="plan-card"><div className="plan-name">{t.weekly}</div><div className="price">$9.99 <small>/{t.days7}</small></div><p>Flexible access for a week.</p><button onClick={()=>alert('Payments are not connected yet.')}>Select plan <ArrowUpRight size={15}/></button></div>
    <div className="plan-card featured"><div className="popular">{t.popular}</div><div className="plan-name">{t.monthly}</div><div className="price">$24.99 <small>/{t.days30}</small></div><p>For your everyday workflow.</p><button onClick={()=>alert('Payments are not connected yet.')}>Select plan <ArrowUpRight size={15}/></button></div>
    <div className="plan-card"><div className="plan-name">{t.yearly}</div><div className="price">$99.99 <small>/{t.days365}</small></div><p>Long-term access, better value.</p><button onClick={()=>alert('Payments are not connected yet.')}>Select plan <ArrowUpRight size={15}/></button></div>
   </div></section>
   <footer>© 2026 AI HUB NEXUS <span>ONE PLATFORM. ENDLESS POSSIBILITIES.</span></footer>
  </main>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
