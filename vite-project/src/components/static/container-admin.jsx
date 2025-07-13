import React from 'react'
import HEADER from './header';

export const CONTAINER_ADMIN = ({children}) => {
  return (
    <>
        <HEADER isAdmin="true" />

        <br />

        {children}
    </>
  );
}
