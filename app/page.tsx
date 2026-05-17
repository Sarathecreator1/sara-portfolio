"use client";
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VIOLET = '#7C5CFF';
const INK = '#EDEAE4';
const CANVAS = '#0A0A0B';
const DIM = '#6B6B70';
const RULE = '#1F1F22';

const SectionLabel = ({ num, label }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <div>
      <div className="uppercase mb-1" style={{ color: DIM, fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em' }}>
        §{num}
      </div>
      <div style={{ width: '24px', height: '1px', background: VIOLET }} />
    </div>
    <div className="uppercase" style={{ color: DIM, fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em' }}>
      {label}
    </div>
  </div>
);

const Hero = () => {
  const roles = ['strategist.', 'designer.', 'translator.', 'builder.'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDotPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.08,
        y: prev.y + (cursorPos.y - prev.y) * 0.08,
      }));
    });
    return () => cancelAnimationFrame(id);
  }, [cursorPos, dotPos]);

  const headline = 'Strategy at the edge of design.';
  const words = headline.split(' ');

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-20 pb-12 overflow-hidden">
      <div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          left: dotPos.x - 3, top: dotPos.y - 3,
          width: '6px', height: '6px', borderRadius: '50%',
          background: VIOLET, opacity: 0.35, mixBlendMode: 'screen',
        }}
      />
      <nav className="flex justify-between items-center w-full">
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', color: INK }}>
          SARA ALHABIB
        </div>
        <div className="hidden md:flex gap-8" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}>
          <a href="#thinking" className="hover:text-white transition-colors uppercase">Method</a>
          <a href="#work" className="hover:text-white transition-colors uppercase">Work</a>
          <a href="#notes" className="hover:text-white transition-colors uppercase">Notes</a>
          <a href="#contact" className="hover:text-white transition-colors uppercase">Contact</a>
        </div>
      </nav>

      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="uppercase mb-8 flex items-center gap-3"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: VIOLET, display: 'inline-block' }} />
           Riyadh · 2026
        </motion.div>

        <h1
          className="mb-2"
          style={{
            fontFamily: 'Fraunces, serif', fontWeight: 300,
            fontSize: 'clamp(48px, 8vw, 128px)', lineHeight: 0.95,
            letterSpacing: '-0.04em', color: INK,
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div
          className="mb-12"
          style={{
            fontFamily: 'Fraunces, serif', fontWeight: 300,
            fontSize: 'clamp(48px, 8vw, 128px)', lineHeight: 0.95,
            letterSpacing: '-0.04em', color: INK,
          }}
        >
          <span style={{ color: DIM }}>I am a </span>
          <span className="relative inline-block" style={{ minWidth: '0.5em' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                style={{ color: VIOLET, fontStyle: 'italic' }} className="inline-block"
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl"
        >
          <div className="md:col-span-7" style={{ fontFamily: 'Inter Tight, sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: 1.65, color: INK }}>
          Shaping work that turns progress into tangible impact for people and communities.
          </div>
          <div className="uppercase md:col-span-4 md:col-start-9" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}>
            <div className="mb-2" style={{ color: DIM }}>CURRENTLY</div>
            <div style={{ color: INK, fontFamily: 'Fraunces, serif', fontSize: '18px', letterSpacing: '0', textTransform: 'none', fontStyle: 'italic', fontWeight: 300 }}>
              In Riyadh. Building toward 2030.
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }}
        className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pt-12"
        style={{ borderTop: `1px solid ${RULE}` }}
      >
        <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
          A portfolio of thinking not artifacts. <span style={{ color: VIOLET }}>↓</span> scroll to read.
        </div>
        <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
          v.2026.01 · 2026
        </div>
      </motion.div>
    </section>
  );
};

const OperatingPremise = () => (
  <section id="premise" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
    <SectionLabel num="01" label="Operating Premise" />
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl">
      <div className="uppercase md:col-span-3" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}>
        <div className="mb-1" style={{ color: DIM }}>FROM</div>
        <div style={{ color: INK }}>S. Alhabib</div>
        <div className="mt-4 mb-1" style={{ color: DIM }}>RE</div>
        <div style={{ color: INK }}>How I work, briefly.</div>
      </div>
      <div className="md:col-span-8 md:col-start-5">
        <p className="mb-8" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.4, letterSpacing: '-0.01em', color: INK }}>
          I work where the Gulf's ambition meets its execution gap.
        </p>
        <p className="mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '19px', lineHeight: 1.7, color: INK }}>
          Transformation programs fail less often from lack of strategy than from the distance between a strategy deck and a citizen's tuesday morning. I'm trained on both sides of that distance strategy frameworks from a year inside PwC's public sector practice and, I'm interested in what closes the gap.
        </p>
        <p className="mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '19px', lineHeight: 1.7, color: INK }}>
          My background is in information systems and cybersecurity, which means I read systems before I read people. That turns out to matter. Most "human-centered" work fails to take seriously the institutional machinery the human is actually navigating. I try to take both seriously.
        </p>
        <p className="mb-12" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '19px', lineHeight: 1.7, color: INK }}>
          I am early in my career. I am not early in my thinking.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
          {[
            { k: 'BASE', v: 'Riyadh, KSA' },
            { k: 'LANGUAGE', v: 'Arabic · English' },
            { k: 'TRAINING', v: 'PwC · Imperial' },
            { k: 'INTEREST', v: 'Public-sector reinvention' },
          ].map((m) => (
            <div key={m.k}>
              <div className="uppercase mb-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
                {m.k}
              </div>
              <div style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '14px', color: INK }}>
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const HowIThink = () => {
  const beats = [
    { n: '01', verb: 'Provoke', desc: 'I start with the question the brief is avoiding. Most engagements arrive with a stated problem and a different real one. Naming the real one is the first deliverable.' },
    { n: '02', verb: 'Reframe', desc: 'I rewrite the problem in language a citizen would use. If a Deputy Minister and a citizen describe the same problem differently, the second description is the one I work from.' },
    { n: '03', verb: 'Field', desc: 'I go look. Research is not a phase, it is a posture. Even when I cannot interview, I read complaints, transcripts, and policy filings as primary data.' },
    { n: '04', verb: 'System', desc: 'I map. Not because diagrams are pretty but because they expose where the slack lives in a system — the joints where intervention is cheapest and impact is largest.' },
    { n: '05', verb: 'Move', desc: 'I prototype the smallest version of the change that still tells the truth. A working sketch beats a polished idea; a tested wrong answer beats an untested right one.' },
    { n: '06', verb: 'Horizon', desc: 'I close every engagement with a future-state that is one degree more ambitious than the brief asked for. That is the part of the work that travels.' },
  ];

  return (
    <section id="thinking" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
      <SectionLabel num="02" label="How I Think" />
      <div className="max-w-6xl">
        <h2 className="mb-16 max-w-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: INK }}>
          A method, not a vocabulary. <span style={{ color: DIM, fontStyle: 'italic' }}>Six moves I make on every problem.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: RULE }}>
          {beats.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 lg:p-10" style={{ background: CANVAS }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: VIOLET }}>
                  M·{b.n}
                </div>
                <div style={{ width: '32px', height: '1px', background: RULE }} />
              </div>
              <div className="mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '32px', letterSpacing: '-0.02em', color: INK, fontStyle: 'italic' }}>
                {b.verb}.
              </div>
              <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '14px', lineHeight: 1.65, color: DIM }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudy = ({ num, eyebrow, title, lede, theme, provoke, reframe, field, system, move, horizon, diagram, metrics }) => (
  <article className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
    <div className="max-w-6xl">
      <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
        <div className="flex items-baseline gap-6">
          <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: VIOLET }}>
            CASE / {num}
          </div>
          <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}>
            {eyebrow}
          </div>
        </div>
        <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
          {theme}
        </div>
      </div>

      <h2 className="mb-12 max-w-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1, letterSpacing: '-0.04em', color: INK }}>
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="uppercase md:col-span-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
          OPENING
        </div>
        <div className="md:col-span-9 md:col-start-4">{lede}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
        {[['Provoke', provoke], ['Reframe', reframe], ['Field', field], ['System', system], ['Move', move], ['Horizon', horizon]].map(([label, body], i) => (
          <React.Fragment key={label}>
            <div className="md:col-span-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em' }}>
              <div className="uppercase" style={{ color: VIOLET }}>M·{String(i+1).padStart(2,'0')}</div>
              <div className="uppercase" style={{ color: DIM, marginTop: '4px', fontSize: '10px' }}>{label}</div>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '20px', lineHeight: 1.7, color: INK }}>{body}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      {diagram && (
        <div className="mt-20">
          <div className="uppercase mb-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
            FIG · STRUCTURAL VIEW
          </div>
          <div style={{ border: `1px solid ${RULE}`, padding: '32px', background: '#0C0C0E' }}>
            {diagram}
          </div>
        </div>
      )}

      {metrics && (
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12" style={{ borderTop: `1px solid ${RULE}` }}>
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="mb-2" style={{ fontFamily: 'Fraunces, serif', fontSize: '40px', fontWeight: 300, letterSpacing: '-0.02em', color: VIOLET, fontStyle: 'italic' }}>
                {m.value}
              </div>
              <div className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
                {m.label}
              </div>
            </div>
          ))}
          <div className="col-span-2 md:col-span-4 pt-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', color: DIM }}>
            * STRATEGIC EXPLORATION — INDICATIVE OUTCOMES, NOT CLIENT-REPORTED FIGURES.
          </div>
        </div>
      )}
    </div>
  </article>
);

const PermitJourneyDiagram = () => (
  <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <text x="0" y="20" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">CURRENT-STATE PERMIT JOURNEY · 17 TOUCHPOINTS · 3 AGENCIES</text>
    {[
      { x: 60, label: 'Discover', friction: 2 }, { x: 140, label: 'Register', friction: 4 },
      { x: 220, label: 'Submit', friction: 5 }, { x: 300, label: 'Wait', friction: 8 },
      { x: 380, label: 'Resubmit', friction: 7 }, { x: 460, label: 'Wait', friction: 8 },
      { x: 540, label: 'Visit', friction: 6 }, { x: 620, label: 'Pay', friction: 3 },
      { x: 700, label: 'Receive', friction: 2 },
    ].map((step, i, arr) => {
      const y = 140 - step.friction * 8;
      const next = arr[i + 1];
      return (
        <g key={i}>
          {next && <line x1={step.x} y1={y} x2={next.x} y2={140 - next.friction * 8} stroke={RULE} strokeWidth="1" />}
          <circle cx={step.x} cy={y} r="4" fill={step.friction >= 7 ? VIOLET : INK} />
          <text x={step.x} y={y - 14} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">{step.label}</text>
          <text x={step.x} y={210} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle">D+{i*4}</text>
        </g>
      );
    })}
    <line x1="40" y1="220" x2="760" y2="220" stroke={RULE} />
    <text x="40" y="235" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8">DAY 0</text>
    <text x="720" y="235" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8">DAY 32</text>
    <text x="380" y="60" fill={VIOLET} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">FRICTION PEAK · DECISION LATENCY</text>
  </svg>
);

const AIDecisionDiagram = () => (
  <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <text x="0" y="20" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">DECISION FLOW · HUMAN + AI · TRIAGE PATTERN</text>
    <text x="0" y="60" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9">CURRENT</text>
    {['INTAKE', 'REVIEW', 'REVIEW', 'REVIEW', 'APPROVE', 'ISSUE'].map((l, i) => (
      <g key={`c${i}`}>
        <rect x={80 + i * 110} y={70} width="90" height="36" fill="none" stroke={RULE} />
        <text x={125 + i * 110} y={93} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">{l}</text>
        {i < 5 && <line x1={170 + i * 110} y1={88} x2={180 + i * 110} y2={88} stroke={DIM} />}
      </g>
    ))}
    <text x="0" y="190" fill={VIOLET} fontFamily="JetBrains Mono, monospace" fontSize="9">PROPOSED</text>
    <rect x={80} y={200} width="90" height="36" fill="none" stroke={INK} />
    <text x={125} y={223} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">INTAKE</text>
    <line x1={170} y1={218} x2={180} y2={218} stroke={DIM} />
    <rect x={190} y={200} width="110" height="36" fill="none" stroke={VIOLET} strokeDasharray="3,3" />
    <text x={245} y={223} fill={VIOLET} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">AI · TRIAGE</text>
    <line x1={300} y1={218} x2={320} y2={218} stroke={DIM} />
    <text x={310} y={250} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle">SPLIT</text>
    <line x1={320} y1={218} x2={340} y2={200} stroke={DIM} />
    <line x1={320} y1={218} x2={340} y2={236} stroke={DIM} />
    <rect x={340} y={182} width="100" height="28" fill="none" stroke={INK} />
    <text x={390} y={200} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">AUTO-APPROVE</text>
    <rect x={340} y={222} width="100" height="28" fill="none" stroke={INK} />
    <text x={390} y={240} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">HUMAN-REVIEW</text>
    <line x1={440} y1={196} x2={500} y2={218} stroke={DIM} />
    <line x1={440} y1={236} x2={500} y2={218} stroke={DIM} />
    <rect x={500} y={200} width="90" height="36" fill="none" stroke={INK} />
    <text x={545} y={223} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">ISSUE</text>
    <text x={650} y={223} fill={VIOLET} fontFamily="JetBrains Mono, monospace" fontSize="10">↓ 71% LATENCY</text>
  </svg>
);

const WorkforceSystemDiagram = () => (
  <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <text x="0" y="20" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">SAUDIZATION RECAST · FROM QUOTA TO CAPABILITY SYSTEM</text>
    <circle cx="400" cy="170" r="60" fill="none" stroke={VIOLET} />
    <text x="400" y="166" fill={INK} fontFamily="Fraunces, serif" fontSize="13" textAnchor="middle" fontStyle="italic">Capability</text>
    <text x="400" y="184" fill={INK} fontFamily="Fraunces, serif" fontSize="13" textAnchor="middle" fontStyle="italic">System</text>
    {[
      { x: 180, y: 80, l: 'EDUCATION', s: 'upstream signal' },
      { x: 620, y: 80, l: 'EMPLOYER', s: 'demand model' },
      { x: 100, y: 220, l: 'CITIZEN', s: 'trajectory' },
      { x: 700, y: 220, l: 'POLICY', s: 'incentive shape' },
      { x: 400, y: 290, l: 'LABOUR MARKET', s: 'feedback loop' },
    ].map((n) => (
      <g key={n.l}>
        <line x1={n.x} y1={n.y} x2="400" y2="170" stroke={RULE} />
        <circle cx={n.x} cy={n.y} r="6" fill={INK} />
        <text x={n.x} y={n.y - 14} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">{n.l}</text>
        <text x={n.x} y={n.y + 20} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle" fontStyle="italic">{n.s}</text>
      </g>
    ))}
    <text x="60" y="60" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9">OLD MODEL: QUOTA</text>
    <line x1="55" y1="64" x2="180" y2="64" stroke={DIM} />
  </svg>
);

const GigaProjectBlueprint = () => (
  <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <text x="0" y="20" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">SERVICE BLUEPRINT · INTERNAL EMPLOYEE EXPERIENCE · GIGA-PROJECT</text>
    {[
      { y: 60, label: 'EVIDENCE', items: ['Onboarding kit', 'Portal access', 'Badge', 'Asset', 'Review note'] },
      { y: 110, label: 'EMPLOYEE', items: ['Pre-board', 'Day 1', 'Week 1', 'Month 1', 'Quarter 1'] },
      { y: 160, label: 'FRONTSTAGE', items: ['HR rep', 'Manager', 'Buddy', 'Mentor', 'Manager'] },
      { y: 210, label: 'BACKSTAGE', items: ['HR ops', 'IT prov.', 'Workspace', 'Tools', 'Calibration'] },
      { y: 260, label: 'SYSTEMS', items: ['HRIS', 'IAM', 'CMMS', 'Learning', 'Perf. mgmt'] },
    ].map((lane, li) => (
      <g key={lane.label}>
        <text x="0" y={lane.y + 14} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9">{lane.label}</text>
        {lane.items.map((item, i) => (
          <g key={i}>
            <rect x={120 + i * 130} y={lane.y} width="115" height="28" fill="none" stroke={li === 1 ? VIOLET : RULE} />
            <text x={177 + i * 130} y={lane.y + 18} fill={li === 1 ? INK : DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">{item}</text>
          </g>
        ))}
        {li < 4 && <line x1="0" y1={lane.y + 40} x2="800" y2={lane.y + 40} stroke={RULE} strokeDasharray="2,4" />}
      </g>
    ))}
  </svg>
);

const FieldNotes = () => {
  const notes = [
    { n: '01', title: "On the difference between a strategy and a story.", body: 'A strategy that cannot be told as a story will not survive the first reorg. The work is to make the strategy and the story the same artifact — not to make a deck and then a narrative.' },
    { n: '02', title: 'AI is a research partner, not a research shortcut.', body: 'I use Claude the way I would use a sharp colleague at 11pm — to argue with my own framing, to surface counter-evidence, to draft the first version of something I will then carve away from. It accelerates the part of thinking that should not be the bottleneck.' },
    { n: '03', title: 'The most under-designed surface in government is the rejection letter.', body: 'A rejection is the place a citizen is most likely to lose faith in an institution. Most rejections are written by people who have never read one. Designing better rejections may be the highest-leverage public-service intervention available.' },
    { n: '04', title: 'Vision 2030 is not a deadline. It is a coordinate system.', body: 'The error is to read 2030 as a date by which things must be done. It is a way of organizing what things matter and what things do not. The portfolio of work that survives is the portfolio that takes the coordinate system seriously.' },
  ];

  return (
    <section id="notes" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
      <SectionLabel num="07" label="Field Notes" />
      <h2 className="mb-4 max-w-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: INK }}>
        Things I'm thinking about <span style={{ color: DIM, fontStyle: 'italic' }}>this quarter.</span>
      </h2>
      <p className="mb-16 max-w-2xl" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '15px', color: DIM, lineHeight: 1.6 }}>
        Not finished essays. Not LinkedIn posts. Working notes — the kind you would write in a Moleskine at the back of a meeting.
      </p>
      <div className="max-w-5xl">
        {notes.map((note, i) => (
          <motion.div
            key={note.n}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10"
            style={{ borderTop: `1px solid ${RULE}` }}
          >
            <div className="uppercase md:col-span-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: VIOLET }}>
              N·{note.n}
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <h3 className="mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '26px', letterSpacing: '-0.01em', color: INK, lineHeight: 1.3 }}>
                {note.title}
              </h3>
              <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '16px', lineHeight: 1.7, color: DIM }}>
                {note.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Trajectory = () => {
  const items = [
    { date: '2025 — 2026', org: 'PwC', loc: 'Riyadh', role: 'Consulting Intern · Strategy & Transformation, Public Sector', bullets: ['Supported national transformation initiatives through international benchmarking and program structuring.', 'Built maturity assessments, governance models, and executive deliverables for senior public-sector stakeholders.', 'Designed and facilitated tabletop exercises simulating real-world operational scenarios.'] },
    { date: '2025', org: 'Imperial College London', loc: 'London', role: 'Service Design Summer School · Selective program', bullets: ['Applied service design end-to-end on a live project: user research, journey mapping, blueprinting, prototyping, validation.', 'Worked inside an international multidisciplinary team on complex service challenges.'] },
    { date: '2024', org: 'Saudi Electricity Company', loc: 'Riyadh', role: 'IT PMO Intern', bullets: ['Supported coordination across cross-functional IT project teams.', 'Contributed to process improvements that improved reporting clarity and tracking efficiency.'] },
    { date: '2020 — 2025', org: 'Prince Sultan University', loc: 'Riyadh', role: 'B.Sc. Information Systems — Cybersecurity · First Honors · GPA 3.84', bullets: ['Selected member, Consultancy Route Club — workshops on structured problem-solving and consulting methods.', 'Selected mentee, PwC Elevate (from 1,500+ applicants) — simulated client engagement applying consulting frameworks.'] },
  ];

  return (
    <section id="trajectory" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
      <SectionLabel num="08" label="Trajectory" />
      <div className="max-w-6xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10"
            style={{ borderTop: i === 0 ? `1px solid ${RULE}` : 'none', borderBottom: `1px solid ${RULE}` }}
          >
            <div className="md:col-span-2">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', color: VIOLET }}>
                {item.date}
              </div>
              <div className="uppercase mt-1" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
                {item.loc}
              </div>
            </div>
            <div className="md:col-span-3">
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 300, letterSpacing: '-0.02em', color: INK }}>
                {item.org}
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="mb-3" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '15px', color: INK, fontWeight: 500 }}>
                {item.role}
              </div>
              <ul className="space-y-2" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '14px', lineHeight: 1.7, color: DIM }}>
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="pl-4 relative">
                    <span style={{ position: 'absolute', left: 0, top: '0.8em', width: '8px', height: '1px', background: DIM }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Instruments = () => {
  const groups = [
    { title: 'For thinking', desc: 'Methods I reach for first when the brief is ambiguous.', items: ['Problem framing', 'Journey mapping', 'Service blueprinting', 'Stakeholder mapping', 'Systems mapping', 'Design research'] },
    { title: 'For making things tangible', desc: 'Tools for moving from a concept to a thing a senior client can react to.', items: ['Figma', 'Miro', 'Visio', 'Claude (build & explore)', 'ChatGPT', 'Wireframes & flows'] },
    { title: 'For the boardroom', desc: 'Where the work gets argued. The deliverables clients actually open on a Tuesday morning.', items: ['Executive storytelling', 'PowerPoint', 'Benchmarking synthesis', 'Maturity models', 'Governance frameworks', 'MS Project · Excel'] },
  ];

  const certs = [
    'Service Design — Imperial College London',
    'Generative AI — IBM',
    'Agile Meets Design Thinking — Coursera',
    'Business Analysis Fundamentals — Microsoft',
    'AWS Cloud Practitioner',
  ];

  return (
    <section id="instruments" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
      <SectionLabel num="09" label="Instruments" />
      <div className="max-w-6xl">
        <h2 className="mb-4 max-w-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: INK }}>
          Tools are <span style={{ fontStyle: 'italic', color: DIM }}>downstream of method.</span>
        </h2>
        <p className="mb-16 max-w-2xl" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '15px', color: DIM, lineHeight: 1.6 }}>
          Listed by what they're for, not by logo. The point isn't the tool. The point is the move the tool enables.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-20" style={{ background: RULE }}>
          {groups.map((g) => (
            <div key={g.title} className="p-8 lg:p-10" style={{ background: CANVAS }}>
              <div className="uppercase mb-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: VIOLET }}>
                Use Class
              </div>
              <h3 className="mb-3" style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 300, letterSpacing: '-0.01em', color: INK, fontStyle: 'italic' }}>
                {g.title}
              </h3>
              <p className="mb-6" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '14px', lineHeight: 1.6, color: DIM }}>
                {g.desc}
              </p>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '14px', color: INK }}>
                    <span style={{ color: VIOLET, fontSize: '10px' }}>◇</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="uppercase mb-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}>
              CERTIFIED
            </div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 300, color: INK, fontStyle: 'italic' }}>
              Where I've done the time.
            </div>
          </div>
          <div className="md:col-span-9">
            <ul style={{ borderTop: `1px solid ${RULE}` }}>
              {certs.map((c) => (
                <li key={c} className="flex justify-between items-center py-4" style={{ borderBottom: `1px solid ${RULE}`, fontFamily: 'Inter Tight, sans-serif', fontSize: '15px', color: INK }}>
                  <span>{c}</span>
                  <span className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: DIM, letterSpacing: '0.18em' }}>CERT</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Closing = () => (
  <section id="contact" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
    <SectionLabel num="10" label="In Closing" />
    <div className="max-w-6xl">
      <h2 className="mb-8 max-w-5xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 1, letterSpacing: '-0.04em', color: INK }}>
        I'm looking for the room where transformation gets <span style={{ fontStyle: 'italic', color: VIOLET }}>decided</span> — and then <span style={{ fontStyle: 'italic', color: VIOLET }}>designed.</span>
      </h2>
      <p className="mb-16 max-w-3xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '22px', lineHeight: 1.6, color: DIM }}>
        Not a soloist. Not a generalist. A translator between the strategy floor and the experience floor — looking for a team that needs both, working on problems that matter at the scale of a country.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12" style={{ borderTop: `1px solid ${RULE}` }}>
        <div className="md:col-span-6">
          <div className="uppercase mb-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
            Direct
          </div>
          <a href="mailto:Alhabib.sar@gmail.com" className="block group">
            <div className="mb-2 group-hover:italic transition-all" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', color: INK }}>
              Alhabib.sar@gmail.com →
            </div>
          </a>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: DIM, letterSpacing: '0.06em' }}>
            +966 50 451 1212
          </div>
        </div>
        <div className="md:col-span-6 md:text-right">
          <div className="uppercase mb-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
            Take with you
          </div>
          <a href="#" className="inline-block group" style={{ borderBottom: `1px solid ${VIOLET}` }}>
            <span className="group-hover:opacity-70 transition-opacity" style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 300, fontStyle: 'italic', color: INK }}>
              Resume · PDF
            </span>
          </a>
          <div className="mt-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: DIM, letterSpacing: '0.12em' }}>
            One page. Read it on the elevator.
          </div>
        </div>
      </div>

      <div className="pt-20 mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6" style={{ borderTop: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '14px', fontStyle: 'italic', color: DIM, maxWidth: '480px', lineHeight: 1.7 }}>
          Designed and written by Sara Alhabib. Built in Riyadh. The case studies are strategic explorations — frameworks for the kind of work I want to do, not claims about work I have already shipped.
        </div>
        <div className="uppercase text-right" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM }}>
          © 2026 · S.A. · v.01
        </div>
      </div>
    </div>
  </section>
);

export default function Portfolio() {
  return (
    <div style={{ background: CANVAS, color: INK, minHeight: '100vh', fontFamily: 'Inter Tight, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${VIOLET}; color: ${CANVAS}; }
      `}</style>

      <Hero />
      <OperatingPremise />
      <HowIThink />

      <div id="work">
        <CaseStudy
          num="01 / 04"
          eyebrow="Citizen Experience · Public Sector"
          theme="Vision 2030 · Quality of Life"
          title="The Invisible Citizen."
          lede={
            <>
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '24px', lineHeight: 1.5, color: INK, fontStyle: 'italic' }}>
                "I gave up halfway. I figured someone else would tell me when to come back."
              </p>
              <p className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM, marginTop: '12px' }}>
                — citizen, age 34, on a permit renewal that took 32 days
              </p>
            </>
          }
          provoke="The brief asked how to reduce permit-processing time. The real question is why citizens stop expecting the state to come back to them. Speed is a symptom. Faith is the underlying variable."
          reframe="A permit is not an administrative output. It is a small contract of trust between a citizen and the institution. Each silent week is a withdrawal from that account. The redesign target is not throughput. It is restoring the felt presence of an active counterparty on the other side of the application."
          field="Read 240 publicly available service complaints. Mapped the language citizens used. Three quarters of negative descriptions did not mention duration — they mentioned silence. Citizens did not say 'this was slow'; they said 'I didn't know if anyone was looking.' That is a different problem."
          system="Mapped the journey as 17 touchpoints across 3 agencies. Friction concentrates at the two waiting intervals — D+8 and D+16 — where the citizen has no signal at all. These are the cheap intervention points. The institution is already doing work there; it is just not visible."
          move="Prototyped three small interventions: (1) a status that updates daily even when nothing has happened, with the institution naming what it is currently doing; (2) a single named caseworker visible to the citizen; (3) a rejection format that always includes a path forward. Tested with 12 citizens. All three were rated more impactful than 'making it faster.'"
          horizon="The horizon is not 'a faster permit.' It is a redefinition of what a public service is — from a transaction to a continuous conversation. That reframing is portable to every citizen-facing service the state runs."
          diagram={<PermitJourneyDiagram />}
          metrics={[
            { value: '32→9d', label: 'TARGET CYCLE' },
            { value: '17→9', label: 'TOUCHPOINTS' },
            { value: '+58%', label: 'TRUST INDEX*' },
            { value: '3', label: 'AGENCIES' },
          ]}
        />

        <CaseStudy
          num="02 / 04"
          eyebrow="AI-Enabled Transformation · Public Sector"
          theme="Vision 2030 · Government Efficiency"
          title="The Quiet Bureaucracy."
          lede={
            <>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', letterSpacing: '0.06em', color: VIOLET }}>
                DATA POINT
              </p>
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '28px', lineHeight: 1.4, color: INK, marginTop: '12px' }}>
                In a sample regulatory body, <span style={{ color: VIOLET, fontStyle: 'italic' }}>74%</span> of cases requiring senior review were structurally indistinguishable from each other. The reviewers were rereading the same case 74 times a week.
              </p>
            </>
          }
          provoke="The brief was 'use AI to automate approvals.' That brief misunderstands the problem. The bottleneck is not approval — it is triage. Senior reviewers are not the constraint; senior attention is."
          reframe="Reframe the AI's job: not as a decider but as a sorter. The AI's role is to identify which cases are genuinely novel and route those to humans; route the structurally repeating cases to a lighter path. The AI never approves; it allocates human attention. That is a categorically safer scope for AI in public sector."
          field="Reviewed 90 anonymized case summaries from comparable jurisdictions. Clustered them by structural features. Identified five recurring case archetypes accounting for the bulk of senior reviewer time. None of the five required the kind of judgment senior reviewers were hired for."
          system="Designed a two-track decision flow. Track A: AI-triaged repeating cases routed to a junior reviewer with a templated rationale. Track B: structurally novel cases routed to senior reviewer with the AI surfacing relevant precedent. The AI does not decide. It compresses latency."
          move="Wrote a one-page operating spec for the triage model, including the failure modes (e.g., what happens when the AI flags a 'novel' case that is actually routine, and vice versa). Built a paper prototype walking three case archetypes through the new flow. Pressure-tested with three reviewers; all three identified the same edge case I had missed. Logged it as the model's known weakness."
          horizon="The portable insight: AI in public-sector ops should be measured not by decisions automated but by senior attention freed. That single metric shift redirects the entire technology investment toward a safer, more politically defensible scope."
          diagram={<AIDecisionDiagram />}
          metrics={[
            { value: '−71%', label: 'DECISION LATENCY*' },
            { value: '5', label: 'CASE ARCHETYPES' },
            { value: '2-track', label: 'FLOW DESIGN' },
            { value: '0', label: 'AI APPROVALS' },
          ]}
        />

        <CaseStudy
          num="03 / 04"
          eyebrow="Workforce Transformation · Policy Design"
          theme="Vision 2030 · Human Capability"
          title="Saudization as a Capability System."
          lede={
            <>
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '26px', lineHeight: 1.4, color: INK, fontStyle: 'italic' }}>
                What if Saudization were not a quota at all — but the visible surface of an underlying capability system the country was building on purpose?
              </p>
            </>
          }
          provoke="A quota is a measurement of an outcome. A capability is a precondition for the outcome to occur naturally. Saudi employers and Saudi citizens both currently optimize for the quota. Neither is optimizing for the capability the quota is meant to proxy."
          reframe="Recast the entire program: from 'how many Saudis are in this firm' to 'what is the trajectory of the capabilities available to this firm in the Saudi labour market.' The KPI moves from a headcount snapshot to a capability flow."
          field="Read 30+ peer-reviewed papers and policy reviews on workforce nationalization programs across the Gulf and Asia. The successful programs share one feature: they made the employer a co-architect of the upstream capability pipeline, not just a downstream consumer of it."
          system="Mapped five nodes — Education, Employer, Citizen, Policy, Labour Market — and the feedback loops between them. The current system is unidirectional (policy → employer → citizen). The redesigned system is circular, with the employer feeding capability demand signals back into the education system in something close to real time."
          move="Drafted a one-page intervention brief: a 'capability demand exchange' run as a thin public layer between large employers and university programs. Not a database. A conversation infrastructure. The point is not the technology — the point is to change who is in the room."
          horizon="The harder argument the brief makes: workforce nationalization, properly framed, is not a labour policy. It is an industrial policy. Treating it that way is what makes the 2030 horizon plausible."
          diagram={<WorkforceSystemDiagram />}
          metrics={[
            { value: '5', label: 'SYSTEM NODES' },
            { value: '1→5', label: 'FEEDBACK LOOPS' },
            { value: 'thin', label: 'PUBLIC LAYER' },
            { value: '∞', label: 'TIME HORIZON' },
          ]}
        />

        <CaseStudy
          num="04 / 04"
          eyebrow="Giga-Project · Internal Service Design"
          theme="Vision 2030 · Project Execution"
          title="The Giga-Project Operating System."
          lede={
            <>
              <p className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: DIM }}>
                WORKING HYPOTHESIS
              </p>
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '26px', lineHeight: 1.45, color: INK, marginTop: '12px' }}>
                Giga-projects spend years designing the future for citizens. They spend almost no time designing the present for their own employees. That is where the execution gap lives.
              </p>
            </>
          }
          provoke="If 30,000 people are building a new city, and the experience of working on the project is itself friction-heavy, the project will lose the talent it spent years recruiting. The internal employee experience is not an HR concern. It is a delivery risk."
          reframe="Treat the internal employee experience as a product. Apply the same service design rigor giga-projects already apply to their external citizen experience. The employee is the first citizen of the project."
          field="Reviewed publicly available employee reviews of three named regional giga-projects. The pattern is consistent: pride in the mission, frustration with the day. The frustration is not strategic — it is operational. Onboarding, tool access, decision rights, manager visibility."
          system="Built a service blueprint across the first 90 days of the employee experience. Five lanes — Evidence, Employee, Frontstage, Backstage, Systems — across five phases — Pre-board, Day 1, Week 1, Month 1, Quarter 1. The Backstage and Systems lanes were where the most fixable friction lived."
          move="Identified three Day-1 interventions a project could ship in under a quarter: (1) a single named human owner for each new hire's first 30 days; (2) an integrated tool-access bundle issued pre-arrival, not post-arrival; (3) a 30-day reflection touchpoint that feeds back into the blueprint itself. Each is cheap. Each compounds."
          horizon="The strategic claim: a giga-project's ability to deliver its 2030 vision is bounded by its ability to retain the people delivering it. Service design applied internally is not an HR perk — it is a delivery capability."
          diagram={<GigaProjectBlueprint />}
          metrics={[
            { value: '5×5', label: 'BLUEPRINT GRID' },
            { value: '90d', label: 'DESIGN WINDOW' },
            { value: '3', label: 'DAY-1 MOVES' },
            { value: 'high', label: 'RETENTION IMPACT*' },
          ]}
        />
      </div>

      <FieldNotes />
      <Trajectory />
      <Instruments />
      <Closing />
    </div>
  );
}
