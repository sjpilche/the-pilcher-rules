import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Jake — AI Operations Layer for Construction Finance",
  description:
    "Jake is the AI operations layer built for companies that want real automation — not experiments. Built by CFOs and finance engineers who've seen the wall.",
};

export default function AboutPage() {
  return <AboutClient />;
}
