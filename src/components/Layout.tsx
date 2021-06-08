import { ContextProvider } from '@/context/ContextProvider';
import React, { ReactElement } from 'react';

interface Props {
  children: any;
}

export default function Layout({ children }: Props): ReactElement {
  return <ContextProvider>{children}</ContextProvider>;
}
