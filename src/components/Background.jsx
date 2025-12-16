'use strict';
import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] bg-primary/20 opacity-30 blur-[100px] rounded-full animate-pulse" />
      </div>
      <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-blue-500/10 opacity-20 blur-[80px] rounded-full" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-purple-500/10 opacity-20 blur-[80px] rounded-full" />
    </div>
  );
}
