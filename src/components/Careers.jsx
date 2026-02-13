import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JobCard = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    const accordions = [
        { title: "Roles & Responsibilities", content: job.responsibilities },
        { title: "Required Skills", content: job.skills },
        { title: "Desired Qualifications", content: job.qualifications },
        { title: "Benefits", content: job.benefits }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-[#0a0a0b] border border-white/5 hover:border-blue-500/20 transition-all group overflow-hidden"
        >
            {/* Glow effect at top right */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500"></div>

            <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-[#00f2fe] font-orbitron">{job.title}</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl">{job.description}</p>

                    <div className="space-y-2">
                        {accordions.map((item, idx) => (
                            <div key={idx} className="border-b border-white/5 last:border-0">
                                <button
                                    onClick={() => setIsOpen(isOpen === idx ? null : idx)}
                                    className="flex items-center gap-3 w-full py-3 text-left hover:text-[#00f2fe] transition-colors group"
                                >
                                    <span className={`text-[10px] transition-transform duration-300 ${isOpen === idx ? 'rotate-90' : ''}`}>
                                        ▸
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-wider opacity-80">{item.title}</span>
                                </button>
                                <AnimatePresence>
                                    {isOpen === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="pb-4 pl-8 space-y-2 text-sm text-gray-400">
                                                {item.content.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-[#00f2fe] opacity-50">•</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/5 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{job.type}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                            {job.dept}
                        </span>
                    </div>
                </div>

                <div className="flex items-center">
                    <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1a73e8] to-[#00f2fe] rounded-xl font-bold text-white hover:scale-105 transition-transform group/btn">
                        Apply Now
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Careers = () => {
    const benefits = [
        {
            icon: "🚀",
            title: "Innovation First",
            description: "Work with cutting-edge technologies and solve complex challenges"
        },
        {
            icon: "🌍",
            title: "Remote Friendly",
            description: "Flexible work arrangements with a global team"
        },
        {
            icon: "📈",
            title: "Growth Opportunities",
            description: "Continuous learning and career development programs"
        }
    ];

    const positions = [
        {
            title: "Senior Full Stack Developer",
            type: "Full-time",
            location: "Remote",
            dept: "Engineering",
            description: "Build scalable web applications using React, Node.js, and cloud technologies.",
            responsibilities: ["Lead development of core features", "Collaborate with designers", "Mentor junior developers"],
            skills: ["React", "Node.js", "AWS", "PostgreSQL"],
            qualifications: ["5+ years React experience", "Strong system design skills"],
            benefits: ["Health insurance", "Equity options"]
        },
        {
            title: "DevOps Engineer",
            type: "Full-time",
            location: "Remote",
            dept: "Infrastructure",
            description: "Manage cloud infrastructure and implement CI/CD pipelines for our development teams.",
            responsibilities: ["Optimize cloud spend", "Maintain K8s clusters", "Automate deployments"],
            skills: ["Docker", "Kubernetes", "Terraform", "Jenkins"],
            qualifications: ["Experience with AWS/GCP", "IaaC proficiency"],
            benefits: ["Flexible hours", "Learning budget"]
        },
        {
            title: "UI/UX Designer",
            type: "Full-time",
            location: "Remote",
            dept: "Design",
            description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
            responsibilities: ["Create wireframes and prototypes", "User research", "Design system management"],
            skills: ["Figma", "Adobe Suite", "Prototyping"],
            qualifications: ["Stunning portfolio", "3+ years UI/UX experience"],
            benefits: ["High-end workstation", "Creative freedom"]
        },
        {
            title: "Data Scientist",
            type: "Full-time",
            location: "Remote",
            dept: "Analytics",
            description: "Analyze complex datasets to drive business insights and build predictive models.",
            responsibilities: ["Build ML models", "Data visualization", "Exploratory data analysis"],
            skills: ["Python", "TensorFlow", "Pandas", "SQL"],
            qualifications: ["Master's in Data Science/Math", "Statistical expertise"],
            benefits: ["Conference attendance", "Health & Wellness"]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                        alt="Join Our Team"
                        className="w-full h-full object-cover filter brightness-[0.5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-orbitron font-bold mb-8 tracking-tighter"
                    >
                        Join Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed opacity-90"
                    >
                        Be part of a dynamic team that's shaping the future of technology.
                        We're looking for talented individuals who are passionate about innovation.
                    </motion.p>
                </div>
            </section>

            {/* Why Work With Us Section */}
            <section className="py-24 bg-black border-y border-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-20 tracking-tight">
                        Why Work With Us?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-orbitron">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-24 bg-[#0a0a0b]">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 tracking-tight">
                        Open Positions
                    </h2>
                    <p className="text-gray-500 text-lg">Find your next opportunity with us</p>
                </div>

                <div className="container mx-auto px-4 max-w-6xl space-y-6">
                    {positions.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Careers;
