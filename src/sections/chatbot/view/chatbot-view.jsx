import React from 'react';
import ContextProvider from '../context/Context';
import Main from './Main';

export default function ChatbotView() {

  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  );
}
