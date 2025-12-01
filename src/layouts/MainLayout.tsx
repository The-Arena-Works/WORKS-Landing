import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ReactLenis root>
      <main className="w-full min-h-screen bg-void-black text-paper-white selection:bg-signal-yellow selection:text-void-black">
        {children}
      </main>
    </ReactLenis>
  );
};

export default MainLayout;
