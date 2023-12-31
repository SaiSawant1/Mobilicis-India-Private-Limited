'use client'
import UserModalProvider from "@/providers/UserModalProvider";
import "./globals.css";

import { Provider } from "react-redux";
import { store } from "@/store";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  let persistor=persistStore(store)

  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
          <UserModalProvider />
          {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
