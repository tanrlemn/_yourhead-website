'use client';
import { useSyncExternalStore } from 'react';

export function useLocalStorage() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback) {
  window.addEventListener('load', callback);
  return () => window.removeEventListener('load', callback);
}

function getSnapshot() {
  return window.localStorage;
}

function getServerSnapshot() {
  if (typeof window === 'undefined') {
    return null;
  } else {
    return window.localStorage;
  }
}
