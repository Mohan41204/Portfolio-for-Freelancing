// Skills.jsx
// Scroll-driven stacking cards for the Skills section.
// Each card pins for one viewport and scales down as the next card
// slides up over it — no profile images, no counters.
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import skillsBgImage from '../assets/Gemini_Generated_Image_xvtpk1xvtpk1xvtp.png';
import './Skills.css';



// ─── Icons (inline SVG so there is no profile-photo look) ──────────────
const IconFrontend = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
    </svg>
);
const IconBackend = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="3.5" width="19" height="6" rx="1.5" />
        <rect x="2.5" y="14.5" width="19" height="6" rx="1.5" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
    </svg>
);
const IconDatabase = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
);
const IconApp = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6.5" y="2" width="11" height="20" rx="2.5" />
        <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────
const skillGroups = [
    {
        id: 'frontend',
        icon: IconFrontend,
        label: 'Frontend Development',
        title: 'Fast, accessible, pixel-perfect interfaces',
        skills: [
            'HTML5 & Semantic Markup',
            'CSS3 · Flexbox · Grid',
            'JavaScript (ES6+)',
            'React.js & Hooks',
            'Tailwind CSS',
            'Responsive Design',
        ],
        summary: 'responsive · accessible · performant',
    },
    {
        id: 'backend',
        icon: IconBackend,
        label: 'Backend Development',
        title: 'Reliable APIs and server logic that scale',
        skills: [
            'Node.js & Express',
            'Python',
            'REST API Design',
            'Authentication & Security',
            'Microservices',
        ],
        summary: 'api · security · scalability',
    },
    {
        id: 'database',
        icon: IconDatabase,
        label: 'Database Engineering',
        title: 'Efficient data models, queries, and storage',
        skills: [
            'SQL & PostgreSQL',
            'MongoDB',
            'Redis',
            'Schema Design & Indexing',
        ],
        summary: 'modeling · indexing · optimization',
    },
    {
        id: 'app',
        icon: IconApp,
        label: 'App Development',
        title: 'Cross-platform mobile apps from one codebase',
        skills: [
            'Flutter & Dart',
            'React Native',
            'Android Studio',
            'iOS & Android Builds',
        ],
        summary: 'cross-platform · native feel · smooth UX',
    },
];

// ─── Main Component ──────────────────────────────────────────────────
export default function Skills() {
    const containerRef = useRef(null);
    const [active, setActive] = useState(0);
    const total = skillGroups.length;
    const prefersReducedMotion = useReducedMotion();

    // Drives the per-card stacking as the user scrolls through the section.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Keep the active card in sync with the scroll position (drives the glow).
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
        setActive(idx);
    });

    // Split skills into two balanced columns for each card.
    const getColumns = (skills) => {
        const mid = Math.ceil(skills.length / 2);
        return [skills.slice(0, mid), skills.slice(mid)];
    };

    return (
        <section id="skills" className="skills-stack-section" aria-labelledby="stack-heading">
            {/* Sticky background layer */}
            <div className="skills-sticky-bg">
                <div
                    className="skills-bg-image"
                    style={{ backgroundImage: `url(${skillsBgImage})` }}
                    aria-hidden="true"
                />
                <div className="skills-bg-overlay" aria-hidden="true" />
            </div>

            {/* Content wrapper */}
            <div className="skills-content-wrapper">
                {/* ─── Header ─── */}
<div className='skill-topic-edited'>
                    <div className="stack-header">
                    <div className="stack-header__text">
                        {/* <span className="eyebrow">
                            <span className="eyebrow__dot" aria-hidden="true" />
                            My Toolkit
                        </span> */}
                        <h2 id="stack-heading" className="stack-title">
                            Skills &amp; Technologies
                        </h2>
                        <p className="stack-lede">
                            A working set of tools and disciplines, sharpened project after
                            project — grouped the way I actually reach for them.
                        </p>
                    </div>
                </div>
</div>

                {/* ─── Stack ─── */}
                <div className="stack-cards" ref={containerRef}>
                    {skillGroups.map((group, index) => {
                        const [leftCol, rightCol] = getColumns(group.skills);
                        return (
                            <StackCard
                                key={group.id}
                                index={index}
                                total={total}
                                progress={scrollYProgress}
                                group={group}
                                leftCol={leftCol}
                                rightCol={rightCol}
                                isActive={active === index}
                                reduceMotion={prefersReducedMotion}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ─── Card Component ──────────────────────────────────────────────────
function StackCard({
    index,
    total,
    progress,
    group,
    leftCol,
    rightCol,
    isActive,
    reduceMotion,
}) {
    // Each card starts scaling once its slice of the scroll begins, and
    // settles smaller the earlier it is (so cards stack visibly underneath).
    const targetScale = 1 - (total - index) * 0.05;
    const scale = useTransform(
        progress,
        [index / total, 1],
        [1, reduceMotion ? 1 : targetScale]
    );

    return (
        <div className="stack-pin">
            <motion.article
                className="stack-card"
                style={{ scale }}
                data-active={isActive}
            >
                {/* ── Card inner ── */}
                <div className="card-inner">

                    {/* ── Header: icon tile + name ── */}
                    <div className="card-header-row">
                        <div className="card-icon" aria-hidden="true">
                            {group.icon}
                        </div>
                        <div className="card-name-group">
                            <h3 className="card-name">{group.label}</h3>
                            <p className="card-subtitle">{group.title}</p>
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div className="card-divider">
                        <span className="divider-line" />
                        <span className="divider-diamond">◆</span>
                        <span className="divider-line" />
                    </div>

                    {/* ── Skills grid (two columns) ── */}
                    <div className="skills-grid">
                        <div className="skills-column">
                            {leftCol.map((skill) => (
                                <div key={skill} className="skill-item">
                                    <span className="skill-bullet">▸</span>
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                        <div className="skills-column">
                            {rightCol.map((skill) => (
                                <div key={skill} className="skill-item">
                                    <span className="skill-bullet">▸</span>
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Footer ── */}
                    <div className="card-footer">
                        <span className="footer-icon">✦</span>
                        <span className="footer-text">{group.summary}</span>
                        <span className="footer-icon">✦</span>
                    </div>

                </div>
            </motion.article>
        </div>
    );
}
