import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setSize();
        window.addEventListener('resize', setSize);
        const stars = [];
        const numStars = 6000;

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;

                const r = Math.random();

                if (r < 0.8) {
                    this.size = Math.random() * 0.6 + 0.2;
                    this.opacity = Math.random() * 0.5 + 0.2;
                } else if (r < 0.98) {
                    this.size = Math.random() * 0.4 + 0.8;
                    this.opacity = Math.random() * 0.4 + 0.6;
                } else {
                    this.size = Math.random() * 0.8 + 1.2;
                    this.opacity = 1;
                }


                this.speedX = (Math.random() - 0.5) * 0.02;
                this.speedY = (Math.random() - 0.5) * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', setSize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default StarBackground;
