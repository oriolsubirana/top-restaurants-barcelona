"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import { ListOfRestaurants } from "@/components/list/ListOfRestaurants";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <ListOfRestaurants />
      </div>
    </main>
  );
}
