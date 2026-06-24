'use client';

import React, { useEffect, useRef } from 'react';

export default function WarmHealthCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const drawStaticBackground = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#FFFDF8');
        grad.addColorStop(0.5, '#FFF6F1');
        grad.addColorStop(1, '#FFEBE6');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
      drawStaticBackground();
      window.addEventListener('resize', drawStaticBackground);
      return () => window.removeEventListener('resize', drawStaticBackground);
    }

    let animationFrameId;
    let blobs = [];
    let mouse = { x: undefined, y: undefined };
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBlobs();
    };

    class MorphingBlob {
      constructor(relX, relY, radius, colorRange, speed, complexity) {
        this.relX = relX; // Relative position (0 to 1) for responsive positioning
        this.relY = relY;
        this.baseRadius = radius;
        this.radius = radius;
        this.colorRange = colorRange; // e.g. ['rgba(255, 154, 134, 0.2)', 'rgba(255, 214, 166, 0.15)']
        this.speed = speed;
        this.complexity = complexity;
        this.timeOffset = Math.random() * 1000;
        this.numPoints = 8;
        this.points = [];
        
        for (let i = 0; i < this.numPoints; i++) {
          this.points.push({
            angle: (i / this.numPoints) * Math.PI * 2,
            offset: 0
          });
        }
      }

      update(width, height) {
        this.x = this.relX * width;
        this.y = this.relY * height;
        this.timeOffset += this.speed;

        // Slow orbital drift
        this.x += Math.sin(this.timeOffset * 0.2) * 30;
        this.y += Math.cos(this.timeOffset * 0.2) * 30;

        // Calculate wobble offsets for each perimeter point
        this.points.forEach((p) => {
          const wave = Math.sin(p.angle * 3 + this.timeOffset) * 20 +
                       Math.cos(p.angle * 2 - this.timeOffset * 1.5) * 12;
          p.offset = wave * this.complexity;

          // React to mouse presence (gently push away or bulge)
          if (mouse.x !== undefined && mouse.y !== undefined) {
            const curRad = this.baseRadius + p.offset;
            const px = this.x + Math.cos(p.angle) * curRad;
            const py = this.y + Math.sin(p.angle) * curRad;

            const dx = mouse.x - px;
            const dy = mouse.y - py;
            const dist = Math.hypot(dx, dy);

            if (dist < 220) {
              const pushForce = (220 - dist) * 0.18;
              p.offset -= pushForce; // Shrink/deform perimeter when cursor is near
            }
          }
        });
      }

      draw() {
        ctx.beginPath();
        const coords = this.points.map((p) => {
          const curRad = Math.max(20, this.baseRadius + p.offset);
          return {
            x: this.x + Math.cos(p.angle) * curRad,
            y: this.y + Math.sin(p.angle) * curRad
          };
        });

        ctx.moveTo(coords[0].x, coords[0].y);
        for (let i = 0; i < coords.length; i++) {
          const p1 = coords[i];
          const p2 = coords[(i + 1) % coords.length];
          const xc = (p1.x + p2.x) / 2;
          const yc = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
        }
        ctx.closePath();

        const grad = ctx.createRadialGradient(
          this.x - this.baseRadius * 0.1, this.y - this.baseRadius * 0.1, 0,
          this.x, this.y, this.baseRadius * 1.2
        );
        grad.addColorStop(0, this.colorRange[0]);
        grad.addColorStop(0.6, this.colorRange[1]);
        grad.addColorStop(1, 'transparent');

        ctx.save();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }
    }

    const initBlobs = () => {
      // 3 large distinct morphing blobs positioned strategically
      blobs = [
        new MorphingBlob(
          0.85, 0.25, 
          Math.min(window.innerWidth * 0.25, 380), 
          ['rgba(255, 154, 134, 0.15)', 'rgba(255, 214, 166, 0.08)'], 
          0.003, 
          1.2
        ),
        new MorphingBlob(
          0.15, 0.55, 
          Math.min(window.innerWidth * 0.2, 300), 
          ['rgba(255, 179, 153, 0.12)', 'rgba(255, 240, 190, 0.06)'], 
          0.0025, 
          1.0
        ),
        new MorphingBlob(
          0.75, 0.8, 
          Math.min(window.innerWidth * 0.22, 340), 
          ['rgba(255, 214, 166, 0.14)', 'rgba(255, 154, 134, 0.07)'], 
          0.0035, 
          1.1
        )
      ];
    };

    // Concept 3: Volumetric Light Ray Shifting
    const drawLightRays = () => {
      const originX = -120;
      const originY = -120;
      const rayCount = 5;
      const colors = [
        'rgba(255, 214, 166, 0.04)', 
        'rgba(255, 240, 190, 0.03)', 
        'rgba(255, 154, 134, 0.025)',
        'rgba(255, 246, 241, 0.02)'
      ];

      ctx.save();
      for (let i = 0; i < rayCount; i++) {
        const angleOffset = Math.sin(time * 0.12 + i * 0.9) * 0.025;
        const baseAngle = 0.35 + (i * 0.1) + angleOffset;
        const widthOffset = Math.sin(time * 0.08 + i * 0.45) * 0.03;
        const rayWidth = 0.07 + widthOffset;

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        const length = Math.max(canvas.width, canvas.height) * 2;
        const x1 = originX + Math.cos(baseAngle - rayWidth) * length;
        const y1 = originY + Math.sin(baseAngle - rayWidth) * length;
        const x2 = originX + Math.cos(baseAngle + rayWidth) * length;
        const y2 = originY + Math.sin(baseAngle + rayWidth) * length;

        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();

        const grad = ctx.createRadialGradient(
          originX, originY, 0,
          originX, originY, length * 0.7
        );
        const color = colors[i % colors.length];
        grad.addColorStop(0, color);
        grad.addColorStop(0.6, color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fill();
      }
      ctx.restore();
    };

    // Soft flowing sine waves at the bottom
    let waveOffset = 0;
    const drawWave = () => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.75);
      
      for (let x = 0; x < canvas.width; x += 15) {
        const y = canvas.height * 0.78 + Math.sin(x * 0.002 + waveOffset) * 35 + Math.cos(x * 0.0008 + waveOffset) * 15;
        ctx.lineTo(x, y);
      }
      
      ctx.strokeStyle = 'rgba(255, 154, 134, 0.035)';
      ctx.lineWidth = 6;
      ctx.stroke();
      
      waveOffset += 0.0018;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const animate = () => {
      time += 0.05;

      // Soft clear overlay to build cumulative blur trails
      ctx.fillStyle = '#FFFDF8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render base warm page-wide gradient
      const baseGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      baseGrad.addColorStop(0, 'rgba(255, 253, 248, 1)');
      baseGrad.addColorStop(0.5, 'rgba(255, 246, 241, 0.7)');
      baseGrad.addColorStop(1, 'rgba(255, 214, 166, 0.12)');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render custom shifting light rays (Concept 3)
      drawLightRays();

      // Update and draw organic morphing blobs (Concept 2)
      blobs.forEach((b) => {
        b.update(canvas.width, canvas.height);
        b.draw();
      });

      // Render bottom flowing wave
      drawWave();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      id="warm-health-canvas"
    />
  );
}
