// LinkContext.js
import React, { createContext, useState } from 'react';

const LinkContext = createContext();

const LinkProvider = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState(null);

  return (
    <LinkContext.Provider value={{ selectedLink, setSelectedLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export { LinkContext, LinkProvider };
