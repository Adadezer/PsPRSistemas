"use client"

// import "/styles/globals.css";
 
import { ThemeProvider } from "@material-tailwind/react";

type Props = {
  children?: React.ReactNode
}
 
export default function TailwindMaterialProvider({children}: Props) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}