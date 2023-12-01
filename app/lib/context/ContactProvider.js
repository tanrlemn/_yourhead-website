'use client';

import { createContext, useState } from 'react';

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [openContact, setOpenContact] = useState(false);

  return (
    <ContactContext.Provider value={{ openContact, setOpenContact }}>
      {children}
    </ContactContext.Provider>
  );
}
