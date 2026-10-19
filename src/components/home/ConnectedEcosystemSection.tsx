import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Container } from '../common/Container';
import { Button } from '../ui/Button';
import { 
  ArrowRight, 
  Workflow, 
  Globe, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Radio, 
  Cloud, 
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface EcosystemItem {
  id: string;
  name: string;
  category: 'service' | 'integration' | 'update';
  tagline: string;
  description: string;
  version?: string;
  status: string;
  link: string;
  lat: number;
  lon: number;
  iconType: string;
  isNew?: boolean;
}

const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  // Flagship Core Services
  {
    id: 'web-platforms',
    name: 'Website Platforms',
    category: 'service',
    tagline: 'High-speed business & corporate web systems',
    description: 'Bespoke web applications built for conversion, sub-second load times, and effortless content management.',
    status: 'Core Service',
    link: '/services#website-development',
    lat: 22,
    lon: -40,
    iconType: 'globe'
  },
  {
    id: 'custom-apps',
    name: 'Custom App Engine',
    category: 'service',
    tagline: 'Tailored web & mobile operational software',
    description: 'Scalable applications designed around your precise business processes and team operational workflows.',
    status: 'Core Service',
    link: '/services#application-development',
    lat: 6,
    lon: -18,
    iconType: 'smartphone'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    category: 'service',
    tagline: 'Zero-overhead business task orchestration',
    description: 'Eliminates repetitive data entry, connects fragmented tools, and triggers automated alerts instantly.',
    status: 'Core Service',
    link: '/services#business-automation',
    lat: -24,
    lon: -32,
    iconType: 'workflow'
  },
  {
    id: 'digital-records',
    name: 'Digital Records Hub',
    category: 'service',
    tagline: 'Paper-to-cloud operational transformation',
    description: 'Centralized cloud storage, structured database records, and instant search replacing messy manual filing.',
    status: 'Core Service',
    link: '/services#take-your-business-digital',
    lat: -34,
    lon: 12,
    iconType: 'database'
  },
  {
    id: 'api-gateways',
    name: 'Enterprise API Gateways',
    category: 'service',
    tagline: 'Secure cross-system data synchronization',
    description: 'Resilient REST and webhook pipelines linking legacy databases, third-party services, and real-time clients.',
    status: 'Core Service',
    link: '/services#custom-solutions',
    lat: 34,
    lon: 22,
    iconType: 'zap'
  },
  {
    id: 'ai-pipelines',
    name: 'AI & Automation Pipelines',
    category: 'service',
    tagline: 'Intelligent document extraction & RAG agents',
    description: 'Practical AI tools that extract invoice data, summarize documents, and triage customer requests automatically.',
    status: 'Core Service',
    link: '/services#custom-solutions',
    lat: 12,
    lon: 44,
    iconType: 'sparkles'
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    category: 'service',
    tagline: 'High-availability containerized deployments',
    description: 'Hardened cloud servers, automated backups, zero-downtime deployments, and end-to-end security audits.',
    status: 'Core Service',
    link: '/services#technology-consulting',
    lat: -14,
    lon: 48,
    iconType: 'cloud'
  },

  // Latest Platform Updates
  {
    id: 'update-v24',
    name: 'Automation Engine v2.4',
    category: 'update',
    tagline: 'Autonomous multi-step webhook orchestration',
    description: 'New visual workflow triggers connecting form submissions directly to CRM, payment notifications, and SMS alerts.',
    version: 'v2.4.0',
    status: 'Latest Update',
    link: '/services#business-automation',
    lat: -2,
    lon: 10,
    iconType: 'refresh',
    isNew: true
  },
  {
    id: 'update-v23',
    name: 'Multi-Tenant Portals v2.3',
    category: 'update',
    tagline: 'Role-based client & staff portal architecture',
    description: 'Enterprise permission gating, activity logs, and real-time collaborative document tracking.',
    version: 'v2.3.2',
    status: 'Recent Release',
    link: '/services#application-development',
    lat: -18,
    lon: -6,
    iconType: 'shield',
    isNew: true
  },
  {
    id: 'update-v22',
    name: 'Real-Time Sync Engine v2.2',
    category: 'update',
    tagline: 'Sub-50ms database replication & event stream',
    description: 'Instant multi-branch synchronization ensuring staff across different offices view live, updated records.',
    version: 'v2.2.0',
    status: 'Platform Upgrade',
    link: '/services#take-your-business-digital',
    lat: 28,
    lon: -6,
    iconType: 'radio',
    isNew: true
  },

  // Connected Ecosystem & Tool Integrations
  {
    id: 'int-supabase',
    name: 'Supabase Database',
    category: 'integration',
    tagline: 'Postgres with Row-Level Security & realtime subscriptions',
    description: 'Enterprise data layer ensuring immediate data validation and airtight encryption.',
    status: 'Verified Integration',
    link: '/services#custom-solutions',
    lat: 20,
    lon: -80,
    iconType: 'supabase'
  },
  {
    id: 'int-github',
    name: 'GitHub CI/CD',
    category: 'integration',
    tagline: 'Automated testing and zero-downtime deployment pipelines',
    description: 'Continuous delivery pipelines ensuring every code update is automatically tested and verified.',
    status: 'Verified Integration',
    link: '/services#custom-solutions',
    lat: 38,
    lon: -95,
    iconType: 'github'
  },
  {
    id: 'int-slack',
    name: 'Slack / Teams Bot',
    category: 'integration',
    tagline: 'Direct workflow notifications and automated alerts',
    description: 'Critical business triggers dispatched straight into your existing team communications channels.',
    status: 'Verified Integration',
    link: '/services#business-automation',
    lat: -28,
    lon: 82,
    iconType: 'slack'
  },
  {
    id: 'int-stripe',
    name: 'Stripe Payments',
    category: 'integration',
    tagline: 'Automated recurring billing, invoicing & checkout',
    description: 'PCI-compliant payment collection integrated smoothly with your internal billing ledger.',
    status: 'Verified Integration',
    link: '/services#application-development',
    lat: -6,
    lon: 110,
    iconType: 'stripe'
  },
  {
    id: 'int-postgres',
    name: 'PostgreSQL Core',
    category: 'integration',
    tagline: 'Relational database architecture built for longevity',
    description: 'ACID-compliant storage handling complex relational schemas and high-throughput analytics.',
    status: 'Verified Integration',
    link: '/services#custom-solutions',
    lat: 44,
    lon: 85,
    iconType: 'postgres'
  },
  {
    id: 'int-nextjs',
    name: 'Next.js & React',
    category: 'integration',
    tagline: 'Server-side rendered web applications',
    description: 'Lightning-fast client rendering with optimized bundle sizes and first-class SEO indexing.',
    status: 'Verified Integration',
    link: '/services#website-development',
    lat: -38,
    lon: -110,
    iconType: 'nextjs'
  }
];

// Precompute Unit Coordinates for 3D Projection (Zero Runtime Allocation)
const PRECOMPUTED_ITEMS = ECOSYSTEM_ITEMS.map((item) => {
  const phi = (90 - item.lat) * (Math.PI / 180);
  const theta = (item.lon + 180) * (Math.PI / 180);
  return {
    ...item,
    ux: -(Math.sin(phi) * Math.cos(theta)),
    uy: Math.cos(phi),
    uz: Math.sin(phi) * Math.sin(theta)
  };
});

// Precompute Fibonacci Sphere Lattice Points (480 Points)
const SPHERE_POINT_COUNT = 480;
const SPHERE_POINTS: { x: number; y: number; z: number }[] = (() => {
  const pts: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
  for (let i = 0; i < SPHERE_POINT_COUNT; i++) {
    const y = 1 - (i / (SPHERE_POINT_COUNT - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push({
      x: Math.cos(theta) * radiusAtY,
      y,
      z: Math.sin(theta) * radiusAtY
    });
  }
  return pts;
})();

// Helper to render icon for badges
const renderBadgeIcon = (iconType: string) => {
  switch (iconType) {
    case 'globe':
      return <Globe className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
    case 'smartphone':
      return <Smartphone className="w-3.5 h-3.5 text-blue-600 shrink-0" />;
    case 'workflow':
      return <Workflow className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    case 'database':
      return <Database className="w-3.5 h-3.5 text-amber-600 shrink-0" />;
    case 'zap':
      return <Zap className="w-3.5 h-3.5 text-yellow-500 shrink-0" />;
    case 'sparkles':
      return <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />;
    case 'cloud':
      return <Cloud className="w-3.5 h-3.5 text-sky-600 shrink-0" />;
    case 'refresh':
      return <RefreshCw className="w-3.5 h-3.5 text-accent-primary shrink-0" />;
    case 'shield':
      return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    case 'radio':
      return <Radio className="w-3.5 h-3.5 text-rose-500 shrink-0" />;
    case 'supabase':
      return (
        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.479 24c-.334 0-.649-.168-.834-.447L3.109 9.387c-.361-.546-.145-1.285.45-1.547l8.28-3.633a.998.998 0 011.393.914v7.411l7.659-10.368c.361-.546 1.139-.636 1.611-.186.471.45.476 1.209.011 1.666L14.28 23.518c-.198.307-.532.482-.801.482z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-3.5 h-3.5 text-neutral-800 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'slack':
      return (
        <svg className="w-3.5 h-3.5 text-[#E01E5A] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      );
    case 'stripe':
      return (
        <svg className="w-3.5 h-3.5 text-[#635BFF] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.951 15.934.5 13.176.5 7.644.5 3.8 3.518 3.8 8.163c0 4.73 3.65 6.643 7.848 8.212 2.617.973 3.535 1.768 3.535 2.827 0 .973-.878 1.611-2.316 1.611-2.158 0-5.068-1.077-7.078-2.227l-.924 5.567c1.782.906 4.75 1.547 7.734 1.547 5.86 0 9.873-2.915 9.873-7.828 0-4.887-3.496-6.726-8.496-8.722z" />
        </svg>
      );
    case 'postgres':
      return (
        <svg className="w-3.5 h-3.5 text-[#336791] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 2c-5.522 0-9.999 4.477-9.999 10 0 5.523 4.477 10 9.999 10 5.524 0 10-4.477 10-10 0-5.523-4.476-10-10-10zm2.25 15.65h-2.15v-1.63c-.45.98-1.55 1.83-3.1 1.83-2.8 0-4.3-2.15-4.3-4.75 0-2.8 1.6-4.9 4.4-4.9 1.45 0 2.5.75 2.95 1.65v-1.45h2.2v9.25zm-2.15-4.55c0-1.65-.95-2.9-2.45-2.9-1.45 0-2.4 1.25-2.4 2.9 0 1.65.95 2.9 2.4 2.9 1.5 0 2.45-1.25 2.45-2.9z" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg className="w-3.5 h-3.5 text-neutral-900 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.87 13.918L10.3 8.35h1.76l4.63 6.64-.82.928zm-1.89-6.388l-4.14 5.92V8.35h1.56v3.74l2.58-3.71h1.56l-1.56 2.15z" />
        </svg>
      );
    default:
      return <Layers className="w-3.5 h-3.5 text-neutral-600 shrink-0" />;
  }
};

export const ConnectedEcosystemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const badgeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // View mode tab: all | services | updates
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'updates'>('all');
  
  // Selected inspection item (v2.4 as default)
  const [selectedItemId, setSelectedItemId] = useState<string>('update-v24');
  const [isHoveringBadge, setIsHoveringBadge] = useState<boolean>(false);

  // Rotation state: rotation around Y and subtle X tilt
  const rotationRef = useRef<{ y: number; x: number; vy: number; vx: number }>({
    y: 0.35,
    x: 0.18,
    vy: 0.0028,
    vx: 0
  });

  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isVisibleRef = useRef<boolean>(true);

  // Determine selected item
  const selectedItem = PRECOMPUTED_ITEMS.find((it) => it.id === selectedItemId) || PRECOMPUTED_ITEMS[7];

  // IntersectionObserver: Pause RAF loop when offscreen to ensure sub-second performance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: '100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Filter check
  const isItemActiveInTab = useCallback(
    (category: string) => {
      if (activeTab === 'all') return true;
      if (activeTab === 'services' && category === 'service') return true;
      if (activeTab === 'updates' && category === 'update') return true;
      return false;
    },
    [activeTab]
  );

  // 60fps/120fps Native RAF Loop with DIRECT DOM UPDATES (Zero React Re-renders!)
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      if (!isVisibleRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 to preserve GPU efficiency
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (width === 0 || height === 0) {
        animId = requestAnimationFrame(render);
        return;
      }

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.52;
      const centerY = height * 0.5;
      
      const baseRadius = Math.min(width, height) * 0.38;
      const badgeRadius = baseRadius * 1.15;
      const fov = 500;

      // Update rotation
      const state = rotationRef.current;
      if (!isDraggingRef.current && !isHoveringBadge && !prefersReducedMotion) {
        state.y += state.vy;
        // Natural return damping for X tilt
        state.x += (0.18 - state.x) * 0.05;
      }

      const cosY = Math.cos(state.y);
      const sinY = Math.sin(state.y);
      const cosX = Math.cos(state.x);
      const sinX = Math.sin(state.x);

      // Subtle warm radial gradient backing the sphere
      const gradient = ctx.createRadialGradient(
        centerX - baseRadius * 0.25, 
        centerY - baseRadius * 0.25, 
        baseRadius * 0.1, 
        centerX, 
        centerY, 
        baseRadius * 1.05
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.55, 'rgba(244, 241, 234, 0.65)');
      gradient.addColorStop(0.88, 'rgba(235, 230, 220, 0.35)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Render 3D Halftone Dotted Sphere
      for (let i = 0; i < SPHERE_POINTS.length; i++) {
        const p = SPHERE_POINTS[i];

        // 1. Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // 2. Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        if (z2 > -0.25) {
          const pz = z2 * baseRadius;
          const scale = fov / (fov - pz);
          const sx = centerX + x1 * baseRadius * scale;
          const sy = centerY + y2 * baseRadius * scale;

          const depthNorm = (z2 + 0.25) / 1.25; // 0 to 1
          const radius = Math.max(0.65, 0.8 + depthNorm * 1.6);
          const alpha = Math.max(0.04, 0.08 + Math.pow(depthNorm, 1.8) * 0.6);

          ctx.fillStyle = `rgba(24, 24, 27, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(sx, sy, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();

      // DIRECT DOM BADGE PROJECTION (No React setState overhead!)
      for (let i = 0; i < PRECOMPUTED_ITEMS.length; i++) {
        const item = PRECOMPUTED_ITEMS[i];
        const badgeEl = badgeRefs.current[item.id];
        if (!badgeEl) continue;

        // Rotate Y
        const x1 = item.ux * cosY + item.uz * sinY;
        const z1 = -item.ux * sinY + item.uz * cosY;

        // Rotate X
        const y2 = item.uy * cosX - z1 * sinX;
        const z2 = item.uy * sinX + z1 * cosX;

        const visible = z2 > -0.22;
        if (!visible) {
          badgeEl.style.opacity = '0';
          badgeEl.style.pointerEvents = 'none';
          continue;
        }

        const pz = z2 * badgeRadius;
        const scale = fov / (fov - pz);
        const sx = centerX + x1 * badgeRadius * scale;
        const sy = centerY + y2 * badgeRadius * scale;

        const depthNorm = Math.max(0, (z2 + 0.22) / 1.22);
        const badgeScale = 0.76 + depthNorm * 0.34;
        const baseOpacity = 0.3 + depthNorm * 0.7;
        const zIndex = Math.round(50 + z2 * 40);

        const isHighlighted = isItemActiveInTab(item.category);
        const effectiveOpacity = isHighlighted ? baseOpacity : baseOpacity * 0.25;

        badgeEl.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -50%) scale(${badgeScale.toFixed(3)})`;
        badgeEl.style.opacity = effectiveOpacity.toFixed(2);
        badgeEl.style.zIndex = zIndex.toString();
        badgeEl.style.pointerEvents = isHighlighted ? 'auto' : 'none';
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isHoveringBadge, isItemActiveInTab]);

  // Pointer Drag Handling
  const handlePointerDown = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - lastMousePosRef.current.x;
    const dy = clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: clientX, y: clientY };

    rotationRef.current.y += dx * 0.006;
    rotationRef.current.x = Math.max(-0.5, Math.min(0.6, rotationRef.current.x + dy * 0.005));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 bg-bg-primary border-t border-border-subtle relative overflow-hidden select-none"
    >
      
      {/* Ambient Radial Depth Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[500px] bg-accent-glow rounded-full blur-[170px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Main Card Chassis */}
        <div className="rounded-3xl bg-white border border-border-medium shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[620px]">
            
            {/* ========================================================= */}
            {/* LEFT COLUMN: EDITORIAL, SERVICES & UPDATES FEED           */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle space-y-8 bg-white/80">
              
              <div className="space-y-6">
                
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shrink-0" />
                  <span>100+ Capabilities & Ecosystem</span>
                </div>

                {/* Primary Headline */}
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-black text-text-primary tracking-tight leading-[1.12]">
                    One connection, every capability.
                  </h2>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                    Orchestrate your custom web tools, mobile apps, automated pipelines, and cloud databases in one connected software ecosystem — all maintained and supported by AiSync.
                  </p>
                </div>

                {/* Interactive Filter Tabs */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-bg-surface2 border border-border-subtle max-w-sm">
                  <button
                    type="button"
                    onClick={() => setActiveTab('all')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all ${
                      activeTab === 'all'
                        ? 'bg-white text-text-primary shadow-sm border border-border-subtle'
                        : 'text-text-tertiary hover:text-text-primary'
                    }`}
                  >
                    All Ecosystem
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('services')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all ${
                      activeTab === 'services'
                        ? 'bg-white text-text-primary shadow-sm border border-border-subtle'
                        : 'text-text-tertiary hover:text-text-primary'
                    }`}
                  >
                    Services (7)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('updates')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'updates'
                        ? 'bg-white text-text-primary shadow-sm border border-border-subtle'
                        : 'text-text-tertiary hover:text-text-primary'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Updates
                  </button>
                </div>

                {/* Active Inspection / Spotlight Preview Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#faf9f6] border border-border-medium space-y-3 transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white border border-border-medium flex items-center justify-center shadow-xs">
                        {renderBadgeIcon(selectedItem.iconType)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-text-primary">
                            {selectedItem.name}
                          </span>
                          {selectedItem.version && (
                            <span className="text-[10px] font-mono font-bold text-accent-primary bg-accent-primary/10 px-1.5 py-0.5 rounded">
                              {selectedItem.version}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-text-tertiary block">
                          {selectedItem.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-white border border-border-subtle text-text-secondary shrink-0">
                      {selectedItem.status}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="pt-1 flex items-center justify-between border-t border-border-subtle text-xs">
                    <span className="text-[11px] font-mono text-text-tertiary flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Active AiSync Pipeline
                    </span>
                    <Link
                      to={selectedItem.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors"
                    >
                      <span>Explore details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Bottom Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button to="/services" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore All Services
                </Button>
                <Button to="/contact" variant="secondary" size="md">
                  Discuss Your Architecture
                </Button>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: 3D HALFTONE GLOBE & FLOATING BADGES        */}
            {/* ========================================================= */}
            <div 
              className="lg:col-span-7 relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#fcfbf9] to-[#f6f3ed] cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
              onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
              onMouseUp={handlePointerUp}
              onMouseLeave={handlePointerUp}
              onTouchStart={(e) => {
                if (e.touches.length === 1) {
                  handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
                }
              }}
              onTouchMove={(e) => {
                if (e.touches.length === 1) {
                  handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
                }
              }}
              onTouchEnd={handlePointerUp}
            >
              
              {/* Halftone Canvas Background */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
              />

              {/* Direct DOM Badge Elements in 3D Space */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {PRECOMPUTED_ITEMS.map((item) => {
                  const isSelected = selectedItemId === item.id;

                  return (
                    <div
                      key={item.id}
                      ref={(el) => {
                        badgeRefs.current[item.id] = el;
                      }}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        willChange: 'transform, opacity',
                        pointerEvents: 'none'
                      }}
                      className="cursor-pointer"
                      onMouseEnter={() => {
                        setIsHoveringBadge(true);
                        setSelectedItemId(item.id);
                      }}
                      onMouseLeave={() => {
                        setIsHoveringBadge(false);
                      }}
                      onClick={() => {
                        setSelectedItemId(item.id);
                      }}
                    >
                      <div
                        className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all select-none ${
                          isSelected
                            ? 'bg-white text-text-primary border-2 border-accent-primary shadow-[0_10px_25px_rgba(79,70,229,0.25)] scale-105'
                            : 'bg-white/95 text-text-primary border border-border-medium hover:border-accent-primary/70 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]'
                        }`}
                      >
                        <div className="w-5 h-5 rounded flex items-center justify-center shrink-0">
                          {renderBadgeIcon(item.iconType)}
                        </div>
                        <span className="font-brand whitespace-nowrap text-xs tracking-tight">
                          {item.name}
                        </span>

                        {/* Special New / Version Tag */}
                        {item.isNew && (
                          <span className="px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold tracking-tight">
                            NEW
                          </span>
                        )}
                        {item.category === 'update' && !item.isNew && item.version && (
                          <span className="px-1.5 py-0.2 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-mono font-bold tracking-tight">
                            {item.version}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Drag Hint */}
              <div className="absolute bottom-4 right-6 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-border-subtle text-[11px] font-mono text-text-tertiary shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary" />
                  <span>Click or drag to rotate ecosystem</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};
