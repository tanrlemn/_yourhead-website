'use client';
import { useSyncExternalStore } from 'react';

export function useWindowSize() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return window.innerWidth < 1090 ? true : false;
}

function getServerSnapshot() {
  return true;
}
