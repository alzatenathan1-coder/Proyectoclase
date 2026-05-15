'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { initLegacyInteractions } from '@/lib/legacy-interactions';

function syncClassList(target, nextClassName) {
  const previousClassName = target.className;
  target.className = nextClassName || '';
  return () => {
    target.className = previousClassName;
  };
}

function syncStylesheets(stylesheets) {
  const created = stylesheets.map((href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.legacyStylesheet = href;
    document.head.appendChild(link);
    return link;
  });

  return () => {
    created.forEach((link) => link.remove());
  };
}

export default function LegacyRoute({
  html,
  variant,
  stylesheets = [],
  bodyClassName = '',
  htmlClassName = '',
}) {
  useEffect(() => {
    const cleanups = [
      syncClassList(document.body, bodyClassName),
      syncClassList(document.documentElement, htmlClassName),
      syncStylesheets(stylesheets),
      initLegacyInteractions(variant),
    ];

    return () => {
      cleanups.reverse().forEach((cleanup) => cleanup?.());
    };
  }, [bodyClassName, htmlClassName, stylesheets, variant]);

  return (
    <motion.div
      data-legacy-route={variant}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
