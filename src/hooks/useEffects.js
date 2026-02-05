import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      if (containerRef.current) {
        containerRef.current.appendChild(particle);
      }

      gsap.set(particle, {
        x: 100 + window.innerWidth,
        y: window.innerHeight + 10,
        opacity: 0.5,
        scale: Math.random() * 1.5,
      });

      gsap.to(particle, {
        y: 10,
        rotation: 360,
        duration: 6 + Math.random() * 3,
        ease: 'back.inOut',
        onComplete: () => {
          particle.remove();
          createParticle();
        },
      });
    };

    for (let i = 0; i < 50; i++) {
      setTimeout(() => createParticle(), i * 100);
    }
  }, []);

  return containerRef;
};

export const useCursorTrail = () => {
  useEffect(() => {
    const trails = document.querySelectorAll('.cursor-trail');
    let mouseX = 0,
      mouseY = 0;
    let trailX = 0,
      trailY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      trails.forEach((trail, index) => {
        const delay = index * 2;
        trail.style.left = trailX - delay + 'px';
        trail.style.top = trailY - delay + 'px';
        trail.style.opacity = Math.max(0, 1 - index * 0.2);
      });

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', () => animateTrail());

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', animateTrail);
    };
  }, []);
};

export const useMagneticButton = () => {
  useEffect(() => {
    document.querySelectorAll('.magnetic').forEach((button) => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });
  }, []);
};
