'use client';

// apis
import { createContext } from 'react';

export const ContactContext = createContext({
  showContactBar: false,
  setShowContactBar: () => {},
});
