"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Zozor from "@/components/Zozor/Zozor";
import { useState } from "react";
import { flushSync } from "react-dom";

export default function Home() {
  const [isBig, setIsBig] = useState(false);
  const handleClick = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => setIsBig((big) => !big));
      });
      return;
    }
    setIsBig((big) => !big);
  };
  return (
    <div>
      {!isBig && (
        <Zozor
          style={{
            position: "absolute",
            left: "1rem",
            top: "1rem",
            viewTransitionName: "zozor",
            width: "100px",
            height: "auto",
          }}
          onClick={handleClick}
        ></Zozor>
      )}
      {isBig && (
        <Zozor
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            viewTransitionName: "zozor2",
            width: "300px",
            height: "auto",
            transform: "rotate(180deg)",
          }}
          onClick={handleClick}
        ></Zozor>
      )}
    </div>
  );
}
