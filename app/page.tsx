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
  const roles = ['strategist.', 'problem-solver.', 'transformer.', 'builder.'];
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

  const headline = 'Thought. Built.';
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
            Early career consultant transforming complex problems into clear, actionable solutions at the intersection of strategy, technology, and impact.
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
          I work where the region's ambition meets its execution expectations.
        </p>
        <p className="mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '19px', lineHeight: 1.7, color: INK }}>
          Transformation programs fail less often from lack of strategy than from the distance between a strategy deck and the lived experience. I'm trained on both sides of that distance strategy frameworks from a year inside PwC's public and private sector practice, I'm interested in what creates the biggest impact.
        </p>
        <p className="mb-6" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '19px', lineHeight: 1.7, color: INK }}>
          My academic background is in information systems and cybersecurity. That foundation gives me a structural lens on transformation work, an ability to see how organizations actually function before recommending how they should change. I find the technical, operational, and human dimensions of a problem are rarely separable, and the strongest work treats them together.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
          {[
            { k: 'BASE', v: 'Riyadh, KSA' },
            { k: 'LANGUAGE', v: 'Arabic · English' },
            { k: 'TRAINING', v: 'PwC · Imperial · Saudi Energy' },
            { k: 'INTEREST', v: 'Consulting' },
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
    { n: '02', verb: 'Reframe', desc: 'I rewrite the problem in the language of the people it ultimately affects. Stated problems and lived problems are rarely identical, and the gap between them is usually where the real work is.' },
    { n: '03', verb: 'Field', desc: 'I go look. Research is not a phase, it is a posture. Even when I cannot interview, I read complaints, transcripts, and policy filings as primary data.' },
    { n: '04', verb: 'System', desc: 'I map. Visualizing how the parts of a problem connect surfaces the points where small interventions create the largest effect, the kind of leverage thats hard to spot in narrative form.' },
    { n: '05', verb: 'Move', desc: 'I prototype the smallest version of the change that still tells the truth. A working sketch beats a polished idea; a tested wrong answer beats an untested right one.' },
    { n: '06', verb: 'Horizon', desc: 'I close every engagement with a future-state that is one degree more ambitious than the brief asked for. That is the part of the work that travels.' },
  ];

  return (
    <section id="thinking" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
      <SectionLabel num="02" label="How I Think" />
      <div className="max-w-6xl">
        <h2 className="mb-16 max-w-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: INK }}>
          A method, not a vocabulary. <span style={{ color: DIM, fontStyle: 'italic' }}>Six aspects I consider on every problem.</span>
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
            * STRATEGIC EXPLORATION — INDICATIVE OUTCOMES, NOT CLIENT-REPORTED FIGURES. ILLUSTRATIVE; NOT TIED TO ANY SPECIFIC COUNTRY OR CLIENT.
          </div>
        </div>
      )}
    </div>
  </article>
);

const InnovationGatesDiagram = () => (
  <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <text x="0" y="20" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">INNOVATION PORTFOLIO · FOUR-GATE OPERATING MODEL</text>
    {[
      { x: 100, label: 'FRAME', sub: 'hypothesis', survive: '100%' },
      { x: 280, label: 'VALIDATE', sub: 'falsifiable test', survive: '~30%' },
      { x: 460, label: 'BUILD', sub: 'real prototype', survive: '~10%' },
      { x: 640, label: 'SCALE', sub: 'production', survive: '~3%' },
    ].map((g, i, arr) => {
      const next = arr[i + 1];
      return (
        <g key={g.label}>
          <rect x={g.x - 50} y={80} width="100" height="60" fill="none" stroke={i === 0 ? INK : VIOLET} />
          <text x={g.x} y={105} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="11" textAnchor="middle">{g.label}</text>
          <text x={g.x} y={125} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" fontStyle="italic">{g.sub}</text>
          <text x={g.x} y={175} fill={VIOLET} fontFamily="Fraunces, serif" fontSize="22" textAnchor="middle" fontStyle="italic">{g.survive}</text>
          <text x={g.x} y={195} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle">SURVIVING</text>
          {next && (
            <>
              <line x1={g.x + 50} y1={110} x2={next.x - 50} y2={110} stroke={DIM} strokeWidth="1" />
              <text x={(g.x + next.x) / 2} y={70} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle">KILL CRITERIA</text>
            </>
          )}
        </g>
      );
    })}
    <line x1="40" y1="230" x2="760" y2="230" stroke={RULE} />
    <text x="40" y="250" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8">IDEAS IN</text>
    <text x="720" y="250" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="8">IDEAS SHIPPED</text>
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

const HiddenCapacityDiagram = () => (
  <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <text x="0" y="20" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">KNOWLEDGE WORKER TIME ALLOCATION · CURRENT VS RECOVERABLE</text>
    <text x="0" y="70" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9">CURRENT</text>
    <rect x={100} y={55} width="240" height="28" fill="none" stroke={INK} />
    <text x={220} y={73} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">VALUE WORK · 35%</text>
    <rect x={340} y={55} width="260" height="28" fill="none" stroke={VIOLET} strokeDasharray="3,3" />
    <text x={470} y={73} fill={VIOLET} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">COORDINATION · 38%</text>
    <rect x={600} y={55} width="180" height="28" fill="none" stroke={DIM} />
    <text x={690} y={73} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">THEATRE · 27%</text>
    <text x="0" y="135" fill={VIOLET} fontFamily="JetBrains Mono, monospace" fontSize="9">RECOVERABLE</text>
    {[
      { x: 100, label: 'MEETINGS', sub: 'by inertia', value: '~8%' },
      { x: 340, label: 'APPROVALS', sub: 'no decision variance', value: '~9%' },
      { x: 580, label: 'ROLE DRIFT', sub: 'scope vs design', value: '~5%' },
    ].map((src) => (
      <g key={src.label}>
        <rect x={src.x} y={120} width="160" height="80" fill="none" stroke={VIOLET} />
        <text x={src.x + 80} y={145} fill={INK} fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="middle">{src.label}</text>
        <text x={src.x + 80} y={163} fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" fontStyle="italic">{src.sub}</text>
        <text x={src.x + 80} y={188} fill={VIOLET} fontFamily="Fraunces, serif" fontSize="20" textAnchor="middle" fontStyle="italic">{src.value}</text>
      </g>
    ))}
    <line x1="0" y1="230" x2="800" y2="230" stroke={RULE} />
    <text x="0" y="252" fill={DIM} fontFamily="JetBrains Mono, monospace" fontSize="9">TOTAL CAPACITY HIDDEN IN THE SYSTEM</text>
    <text x="780" y="252" fill={VIOLET} fontFamily="Fraunces, serif" fontSize="22" textAnchor="end" fontStyle="italic">~22%</text>
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
    { n: '01', title: "On the difference between a strategy and a story.", body: 'A strategy that cannot be told as a story will not survive the first reorg. The work is to make the strategy and the story the same artifact not to make a deck and then a narrative.' },
    { n: '02', title: 'AI is a research partner, not a research shortcut.', body: 'I use Artificial Intelligence the way I would use a sharp colleague at 11pm to argue with my own framing, to surface counter-evidence, to draft the first version of something I will then carve away from. It accelerates the part of thinking that should not be the bottleneck.' },
    { n: '03', title: 'Every era has its "quantum moment" a technology that is simultaneously over-hyped and under-prepared for.', body: 'Cloud was one. Mobile was one. Generative AI is one. Quantum will be one. The pattern repeats: most organizations either dismiss it too long or react to it too early. The discipline is in pacing knowing which signals to act on and which to wait out.' },
    { n: '04', title: 'The stock market is a voting machine in the short term and a weighing machine in the long term', body: 'That gap is where most strategic mistakes get made. Companies optimize for the voting machine because the signal is louder, then discover too late that the weighing machine was the only one that mattered. The discipline is to make decisions for the weighing machine while still surviving the voting machine.' },
  ];

  return (
    <section id="notes" className="px-6 md:px-16 py-32" style={{ borderTop: `1px solid ${RULE}` }}>
      <SectionLabel num="07" label="Field Notes" />
      <h2 className="mb-4 max-w-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: INK }}>
        Things I'm thinking about <span style={{ color: DIM, fontStyle: 'italic' }}>this quarter.</span>
      </h2>
      <p className="mb-16 max-w-2xl" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '15px', color: DIM, lineHeight: 1.6 }}>
      Working notes on the questions I keep returning to. Not polished essays, just things I think are worth thinking about more carefully.
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
    { title: 'For making things tangible', desc: 'Tools for translating concepts into artifacts clients can engage with directly.', items: ['Figma', 'Visio', 'Claude (build & explore)', 'ChatGPT', 'Wireframes & flows'] },
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
        I'm looking for the room where transformation gets <span style={{ fontStyle: 'italic', color: VIOLET }}>decided</span> — and then <span style={{ fontStyle: 'italic', color: VIOLET }}>delivered.</span>
      </h2>
      <p className="mb-16 max-w-3xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '22px', lineHeight: 1.6, color: DIM }}>
      Early in my career. Clear on the direction.
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
          <a href="/resume.pdf" className="inline-block group" style={{ borderBottom: `1px solid ${VIOLET}` }}>
            <span className="group-hover:opacity-70 transition-opacity" style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 300, fontStyle: 'italic', color: INK }}>
              Resume · PDF
            </span>
          </a>
          <div className="mt-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: DIM, letterSpacing: '0.12em' }}>
           
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
const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState('thinking');

  useEffect(() => {
    const sections = ['thinking', 'work', 'notes', 'contact'];
    const handler = () => {
      // Find which section is currently most in view
      let current = 'thinking';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const items = [
    { href: '#thinking', label: 'Method', id: 'thinking' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#notes', label: 'Notes', id: 'notes' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: 'rgba(10, 10, 11, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: `1px solid ${RULE}`,
      }}
    >
      <div className="flex justify-around items-center py-3 px-4">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.href}
              href={item.href}
              className="uppercase transition-colors"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: isActive ? VIOLET : DIM,
                padding: '6px 4px',
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

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
          eyebrow="Innovation Strategy · Corporate"
          theme="Operating Model · Portfolio Design"
          title="The Innovation Backlog."
          lede={
            <>
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '26px', lineHeight: 1.4, color: INK, fontStyle: 'italic' }}>
                Most large organizations have hundreds of innovation ideas in flight at any given time. They ship almost none of them.
              </p>
              <p className="uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', color: DIM, marginTop: '12px' }}>
                — the central problem of corporate innovation
              </p>
            </>
          }
          provoke="The brief asked how to generate more ideas. That is rarely the real problem. Most organizations have more ideas than they can execute; what they lack is the operating system that decides which ideas move, which die fast, and which get protected long enough to mature. The bottleneck is not creativity, it is the decision architecture around creativity."
          reframe="Reframe innovation as a portfolio problem, not a creativity problem. Treat ideas like investments: some get seed funding, most get killed early, a small number get protected runway, and a smaller number still get scaled. The discipline is not in having ideas. It is in deciding."
          field="Reviewed how leading firms structure their innovation pipelines corporate venture units, internal incubators, growth offices. The pattern that distinguishes the effective ones is rarely the quality of their ideas. It is the speed and clarity with which they decide which ideas to stop working on."
          system="Mapped the typical innovation lifecycle as four gates: Frame, Validate, Build, Scale with explicit kill criteria at each gate. Most organizations have the first and last gates; almost none have rigorous middle gates. The result: ideas drift through the middle of the pipeline, consuming attention without ever being formally validated or formally killed."
          move="Drafted a one-page operating model: each idea enters with a hypothesis, a falsifiable test, and a budget of time and money. At each gate, the idea either earns the next tranche or stops. No idea is allowed to live in the pipeline without an active sponsor and an active test. The artifact is not a process diagram. It is a permission structure."
          horizon="The portable insight: organizations that out-innovate their peers are not the ones with better ideas. They are the ones with a faster, more honest decision rhythm. The most valuable thing an innovation function can build is its own discipline for stopping work."
          diagram={<InnovationGatesDiagram />}
          metrics={[
            { value: '4', label: 'PORTFOLIO GATES' },
            { value: '~70%', label: 'IDEAS STOPPED EARLY*' },
            { value: '3×', label: 'CYCLE COMPRESSION*' },
            { value: '1pg', label: 'OPERATING MODEL' },
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
          provoke="The brief was 'use AI to automate approvals.' That brief misunderstands the problem. The bottleneck is not approval it is triage. Senior reviewers are not the constraint; senior attention is."
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
          eyebrow="Operational Transformation · Corporate"
          theme="Productivity · Organizational Design"
          title="The Hidden Capacity."
          lede={
            <>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', letterSpacing: '0.06em', color: VIOLET }}>
                WORKING HYPOTHESIS
              </p>
              <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '28px', lineHeight: 1.4, color: INK, marginTop: '12px' }}>
                Large organizations already have the capacity they need. They cannot see it because it is hidden inside meetings that don't matter, approvals that compound delay, and talent already in the building but never deployed.
              </p>
            </>
          }
          provoke="The brief is usually framed as a cost problem: 'we need to do more with less.' That framing produces cost-cutting, which is rarely the right answer. The better frame is a visibility problem: the organization is already paying for capacity it is not using. The work is to find it."
          reframe="Recast the engagement: not a cost-reduction exercise, but a capacity audit. The goal is to identify the work the organization is doing that does not need to be done, and the people in the organization who could be doing more important work if freed from the work that does not matter."
          field="Reviewed how comparable firms allocate time across three categories: value-creating work, coordination work, and theatre work. The pattern is consistent knowledge workers spend a disproportionate share of their time in coordination and theatre, not because they choose to, but because the operating model rewards it."
          system="Built a simple framework mapping the three categories against the organization's actual time data. Identified three structural sources of hidden capacity: meetings that exist by inertia, approval chains with no decision rights variance, and roles whose scope has drifted from their original purpose. Each is fixable. None is fixable in isolation."
          move="Drafted a three-move intervention: (1) a meeting audit with explicit termination criteria; (2) a decision-rights map showing which approvals could be delegated downward without quality loss; (3) a role-scope review identifying where actual work has diverged from job design. The output is not a transformation programme. It is a set of small structural changes that compound."
          horizon="The strategic claim: organizations rarely need to be made bigger. They need to be made visible to themselves. The first job of any serious transformation is to find the capacity already there before commissioning the capacity that isn't."
          diagram={<HiddenCapacityDiagram />}
          metrics={[
            { value: '3', label: 'INTERVENTION MOVES' },
            { value: '~22%', label: 'TIME RECOVERED*' },
            { value: '0', label: 'HEADCOUNT CHANGE' },
            { value: '1', label: 'OPERATING MODEL SHIFT' },
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
          field="Reviewed publicly available employee reviews of three named regional giga-projects. The pattern is consistent: pride in the mission, frustration with the day. The frustration is not strategic it is operational. Onboarding, tool access, decision rights, manager visibility."
          system="Built a service blueprint across the first 90 days of the employee experience. Five lanes: Evidence, Employee, Frontstage, Backstage, Systems across five phases, Pre-board, Day 1, Week 1, Month 1, Quarter 1. The Backstage and Systems lanes were where the most fixable friction lived."
          move="Identified three Day-1 interventions a project could ship in under a quarter: (1) a single named human owner for each new hire's first 30 days; (2) an integrated tool-access bundle issued pre-arrival, not post-arrival; (3) a 30-day reflection touchpoint that feeds back into the blueprint itself. Each is cheap. Each compounds."
          horizon="The strategic claim: a giga-project's ability to deliver its 2030 vision is bounded by its ability to retain the people delivering it. Service design applied internally is not an HR perk it is a delivery capability."
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
      <MobileBottomNav /> 
    </div>
  );
}
