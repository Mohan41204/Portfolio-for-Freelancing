import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { BorderTrail } from "@/components/ui/border-trail";

// ─── Icons (inline SVG so there is no profile-photo look) ──────────────
const IconFrontend = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6 text-orange-400">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
    </svg>
);
const IconBackend = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6 text-orange-400">
        <rect x="2.5" y="3.5" width="19" height="6" rx="1.5" />
        <rect x="2.5" y="14.5" width="19" height="6" rx="1.5" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
    </svg>
);
const IconDatabase = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6 text-orange-400">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
);
const IconApp = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6 text-orange-400">
        <rect x="6.5" y="2" width="11" height="20" rx="2.5" />
        <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────
const skillGroupsData = [

    {
        id: 'database',
        tempId: 2,
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
        popular: false,
    },
    {
        id: 'app',
        tempId: 3,
        icon: IconApp,
        label: 'App Development',
        title: 'Cross-platform mobile apps from one codebase',
        skills: [
            'Flutter & Dart',
            'React Native',
            'Android Studio',
            'iOS & Android Builds',
        ],
        summary: 'cross-platform · native feel',
        popular: false,
    },
    {
        id: 'frontend',
        tempId: 0,
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
        popular: false,
    },
    {
        id: 'backend',
        tempId: 1,
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
        popular: false,
    },

];

const SkillCard = ({
    position,
    group,
    handleMove,
    cardSize,
}) => {
    const isCenter = position === 0;
    const isPopular = group.popular;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-in-out p-4 rounded-lg",
                isCenter ? "z-10 opacity-100" : "z-0 opacity-70 hover:opacity-100",
                "bg-zinc-950 border border-white/10",
                isPopular && "border-orange-500/30 bg-white/[0.02]",
                isCenter && isPopular && "shadow-[0_20px_60px_-20px_rgba(255,140,0,0.25)]"
            )}
            style={{
                width: cardSize,
                transform: `
                    translate(-50%, -50%) 
                    translateX(${(cardSize / 1.1) * position}px)
                    translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
                    rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
                `,
            }}
        >
            {isPopular && isCenter && (
                <BorderTrail
                    className="bg-orange-400"
                    style={{
                        boxShadow:
                            "0px 0px 60px 30px rgb(255 140 0 / 35%), 0 0 100px 60px rgb(255 140 0 / 15%)",
                    }}
                    size={100}
                />
            )}

            <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {group.icon}
                    </div>
                    <h3 className="font-semibold leading-none text-white text-xs sm:text-sm md:text-base">
                        {group.label}
                    </h3>
                </div>
                <p className="text-sm text-zinc-400 min-h-[40px]">{group.title}</p>
            </div>

            <div className="relative z-10 mt-8 space-y-4">
                <div className="flex flex-wrap items-end gap-1 text-zinc-400">
                    <span className="text-sm font-medium text-orange-400">
                        {group.summary}
                    </span>
                </div>

                <ul className="space-y-2 border-t border-white/10 pt-4">
                    {group.skills.map((skill) => (
                        <li
                            key={skill}
                            className="flex items-start gap-2 text-xs text-zinc-300 sm:text-sm"
                        >
                            <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400"
                                aria-hidden="true"
                            />
                            <span>{skill}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Skills() {
    const [cardSize, setCardSize] = useState(340);
    const [skillGroups, setSkillGroups] = useState(skillGroupsData);

    const handleMove = (steps) => {
        const newList = [...skillGroups];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setSkillGroups(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 340 : 280);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <section id="skills" className="relative min-h-fit overflow-hidden bg-zinc-950 py-24 md:py-28">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,140,0,0.08),transparent_55%)]" />

            <div className="relative mx-auto w-full max-w-7xl space-y-5 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-xl space-y-5"
                >
                    <div className="flex justify-center">
                        <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-1 font-mono text-sm text-orange-300">
                            My Toolkit
                        </div>
                    </div>
                    <h2 className="mt-5 text-center text-2xl font-bold tracking-tighter text-white md:text-3xl lg:text-4xl whitespace-nowrap">
                        <span className="text-white">Skills & </span>
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-semibold text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="mt-5 text-center text-sm text-zinc-400 md:text-base">
                        A working set of tools and disciplines, sharpened project after
                        project — grouped the way I actually reach for them.
                    </p>
                </motion.div>

                <div className="relative">
                    <div
                        className={cn(
                            "pointer-events-none absolute inset-0 z-0 size-full",
                            "bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]",
                            "bg-[size:32px_32px]",
                            "[mask-image:radial-gradient(ellipse_at_center,#09090b_10%,transparent)]"
                        )}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative z-10 mx-auto w-full max-w-6xl mt-12"
                    >
                        <div className="relative w-full overflow-hidden" style={{ height: 500 }}>
                            {skillGroups.map((group, index) => {
                                const position = skillGroups.length % 2
                                    ? index - (skillGroups.length - 1) / 2
                                    : index - skillGroups.length / 2;

                                return (
                                    <SkillCard
                                        key={group.tempId}
                                        group={group}
                                        handleMove={handleMove}
                                        position={position}
                                        cardSize={cardSize}
                                    />
                                );
                            })}

                            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
                                <button
                                    onClick={() => handleMove(-1)}
                                    className={cn(
                                        "flex h-12 w-12 items-center justify-center text-orange-400 transition-colors rounded-full",
                                        "bg-white/5 border border-white/10 hover:bg-orange-500/20 hover:text-orange-300",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                    )}
                                    aria-label="Previous skill group"
                                >
                                    <ChevronLeft className="size-6" />
                                </button>
                                <button
                                    onClick={() => handleMove(1)}
                                    className={cn(
                                        "flex h-12 w-12 items-center justify-center text-orange-400 transition-colors rounded-full",
                                        "bg-white/5 border border-white/10 hover:bg-orange-500/20 hover:text-orange-300",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                    )}
                                    aria-label="Next skill group"
                                >
                                    <ChevronRight className="size-6" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
