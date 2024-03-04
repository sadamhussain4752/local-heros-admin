import React, { createContext, useContext } from 'react';
import { EventEmitter } from 'events';  // Import the built-in 'events' module

// Create a context for managing events
const EventContext = createContext();

// Create a custom hook to use the event context
export const useEventContext = () => {
  return useContext(EventContext);
};

// EventProvider component to wrap your application
export const EventProvider = ({ children }) => {
  const eventEmitter = new EventEmitter(); // Assuming EventEmitter is available

  return (
    <EventContext.Provider value={eventEmitter}>
      {children}
    </EventContext.Provider>
  );
};
