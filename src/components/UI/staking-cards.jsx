import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, description, index, totalCards, color, cta, link }) => {
    const cardRef = useRef(null);
    const containerRef = useRef(null);

    // Card background colors based on index
    const cardColors = [
        'rgb(231, 239, 252)',  // First card
        'rgb(255, 249, 230)',  // Second card
        'rgb(253, 232, 233)',  // Third card
        'rgb(230, 247, 245)'   // Fourth card
    ];

    const cardBackgroundColor = cardColors[index] || cardColors[0];

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        // Set initial state
        gsap.set(card, {
            scale: 1,
            transformOrigin: "center top"
        });

        // Create scroll trigger for stacking effect (similar to the reference component)
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);

                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '350px',
                    borderRadius: '24px',
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top'
                }}
                className="card-content"
            >
                {/* Main Card Content */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: '24px',
                    background: cardBackgroundColor,
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden'
                }}>
                    {/* Card Content */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        padding: '10px 20px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: '#1e3a8a',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2',
                            textAlign: 'center',
                            width: '100%'
                        }}>
                            {title}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: '#4a5568',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                            textAlign: 'center',
                            width: '100%'
                        }}>
                            {description}
                        </p>
                        {link ? (
                            <Link
                                to={link}
                                style={{
                                    backgroundColor: '#1e3a8a',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '12px 24px',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'opacity 0.2s',
                                    fontFamily: 'inherit',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.target.style.opacity = '1'}
                            >
                                {cta || title}
                                <span style={{ fontSize: '1rem', color: '#FCD64C' }}>→</span>
                            </Link>
                        ) : (
                            <button style={{
                                backgroundColor: '#1e3a8a',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '12px 24px',
                                fontSize: '1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'opacity 0.2s',
                                fontFamily: 'inherit'
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                            >
                                {cta || title}
                                <span style={{ fontSize: '1rem', color: '#FCD64C' }}>→</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StackedCards = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.fromTo(container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <main ref={containerRef} style={{ background: 'transparent' }}>
            {/* Cards Section */}
            <section style={{
                width: '100%'
            }}>
                {cardData.map((card, index) => {
                    const targetScale = 1 - (cardData.length - index) * 0.05;
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            index={index}
                            totalCards={cardData.length}
                            color={card.color}
                            cta={card.cta}
                            link={card.link}
                        />
                    );
                })}
            </section>
        </main>
    );
};
