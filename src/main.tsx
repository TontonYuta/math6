import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. Nhập thư viện Capacitor
import { Capacitor } from '@capacitor/core';
import { CapacitorUpdater } from '@capgo/capacitor-updater';

// 2. Tuyên bố sống sót NGAY TỨC KHẮC khi file được chạy
if (Capacitor.isNativePlatform()) {
  CapacitorUpdater.notifyAppReady();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);