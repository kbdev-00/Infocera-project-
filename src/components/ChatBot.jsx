import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: 'Hi! I am your AI assistant. You can select a FAQ or type your question below.',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Lock body scroll when chat is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const faqs = [
        { question: 'What services does Infocera offer?', key: 'services' },
        { question: 'Where is Infocera located?', key: 'location' },
        { question: 'How can I contact Infocera?', key: 'contact' },
        { question: 'What are your pricing models?', key: 'pricing' },
        { question: 'What technologies do you use?', key: 'technologies' },
        { question: 'How long does a project take?', key: 'timeline' }
    ];

    const responses = {
        services: "Infocera offers a comprehensive range of IT services including:\n\n• Web Design & Development\n• Mobile Application Development\n• Software Development\n• Cloud Computing Solutions\n• Data Science & Analytics\n• Creative Design Services\n• IT Consulting\n• Quality Assurance & Testing\n• Online Marketing\n\nWe serve industries like Automotive, E-commerce, Education, Finance, Healthcare, and more!",

        location: "Infocera is located at:\n\n📍 First Floor, L29-L34, Block L\nConnaught Place, New Delhi\nDelhi - 110001, India\n\nWe serve clients globally across 20+ countries!",

        contact: "You can reach us through:\n\n📞 Phone: +91 8882824948\n📧 Email: info@infocera.in\n\nOur team is available to discuss your project requirements. Feel free to visit our Contact page for more options!",

        pricing: "Our pricing is customized based on your specific requirements. We offer:\n\n• Flexible pricing models\n• Fixed price projects\n• Time & Material basis\n• Dedicated team hiring\n\nContact us for a free consultation and custom quote tailored to your needs!",

        technologies: "We work with cutting-edge technologies:\n\n🔹 Frontend: HTML5, CSS3, JavaScript, React, Angular\n🔹 Backend: Java, Python, PHP, Node.js\n🔹 Mobile: iOS, Android, React Native\n🔹 Cloud: AWS, Google Cloud, Azure\n🔹 Databases: MySQL, MongoDB, PostgreSQL, Redis\n🔹 DevOps: Docker, Kubernetes, Jenkins\n\nWe stay updated with the latest tech trends!",

        timeline: "Project timelines vary based on scope and complexity:\n\n⏱️ Small Projects: 2-4 weeks\n⏱️ Medium Projects: 1-3 months\n⏱️ Large Enterprise: 3-6+ months\n\nWe follow agile methodology with regular updates and delivery milestones. Contact us to discuss your project timeline!",

        support: "We provide 24/7 support for all our clients!\n\n✓ Round-the-clock assistance\n✓ Dedicated support team\n✓ Quick response times\n✓ Post-deployment support\n✓ Maintenance packages\n\nYour success is our priority!",

        portfolio: "We've successfully delivered 250+ projects across various industries!\n\nOur portfolio includes:\n• Enterprise web applications\n• Mobile apps (iOS & Android)\n• E-commerce platforms\n• Healthcare solutions\n• Financial software\n• Educational platforms\n\nVisit our Portfolio page to see our work!",

        team: "Our team consists of 150+ passionate professionals:\n\n👥 Expert developers\n👥 Creative designers\n👥 Project managers\n👥 Quality analysts\n👥 Business consultants\n\nWith 10+ years of combined experience, we deliver excellence!",

        industries: "We serve diverse industries:\n\n• Automotive\n• E-commerce\n• Education\n• Finance & Banking\n• Gaming\n• Healthcare\n• Manufacturing\n• Real Estate\n• Retail\n• And many more!\n\nOur solutions are tailored to industry-specific needs."
    };

    const getAIResponse = (question) => {
        const q = question.toLowerCase();

        // Check for exact FAQ matches
        for (let faq of faqs) {
            if (responses[faq.key]) {
                return responses[faq.key];
            }
        }

        // Keyword matching
        if (q.includes('service') || q.includes('offer') || q.includes('do you do') || q.includes('what do you')) {
            return responses.services;
        }
        if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('office')) {
            return responses.location;
        }
        if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('reach')) {
            return responses.contact;
        }
        if (q.includes('price') || q.includes('cost') || q.includes('pricing') || q.includes('quote') || q.includes('budget')) {
            return responses.pricing;
        }
        if (q.includes('technolog') || q.includes('tech stack') || q.includes('framework') || q.includes('language')) {
            return responses.technologies;
        }
        if (q.includes('timeline') || q.includes('how long') || q.includes('duration') || q.includes('time')) {
            return responses.timeline;
        }
        if (q.includes('support') || q.includes('help') || q.includes('assistance')) {
            return responses.support;
        }
        if (q.includes('portfolio') || q.includes('work') || q.includes('project') || q.includes('example')) {
            return responses.portfolio;
        }
        if (q.includes('team') || q.includes('people') || q.includes('employee')) {
            return responses.team;
        }
        if (q.includes('industry') || q.includes('sector') || q.includes('domain')) {
            return responses.industries;
        }

        // Fallback response
        return "Thank you for your question! For specific information, please:\n\n📞 Call us at +91 8882824948\n📧 Email us at info@infocera.in\n🌐 Visit our Contact page\n\nOur team will be happy to assist you with detailed information!";
    };

    const handleFAQClick = (faqKey) => {
        const faq = faqs.find(f => f.key === faqKey);
        if (!faq) return;

        // Add user message
        const userMsg = {
            type: 'user',
            text: faq.question,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);

        // Simulate typing
        setIsTyping(true);
        setTimeout(() => {
            const botMsg = {
                type: 'bot',
                text: responses[faqKey],
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 500);
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMsg = {
            type: 'user',
            text: inputValue,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Get AI response
        setIsTyping(true);
        setTimeout(() => {
            const response = getAIResponse(inputValue);
            const botMsg = {
                type: 'bot',
                text: response,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center text-white z-50 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
            </motion.button>

            {/* Chat Widget */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-[400px] max-w-[90vw] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <FaRobot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">AI Chat Assistant</h3>
                                    <p className="text-xs text-teal-100">Online • Always here to help</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[75%] p-3 rounded-2xl ${msg.type === 'user'
                                            ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                                        <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-teal-100' : 'text-gray-400'}`}>
                                            {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* FAQ Quick Buttons */}
                        <div className="px-4 py-2 bg-white border-t border-gray-200 overflow-x-auto">
                            <div className="flex gap-2 pb-2">
                                {faqs.slice(0, 3).map((faq, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleFAQClick(faq.key)}
                                        className="px-3 py-2 bg-blue-50 text-blue-600 rounded-full text-xs whitespace-nowrap hover:bg-blue-100 transition-colors border border-blue-200"
                                    >
                                        {faq.question}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your question..."
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all flex items-center gap-2 font-semibold"
                                >
                                    <FaPaperPlane size={16} />
                                    Send
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
