import type { Metadata } from "next";
import { DiagnosticPageClient } from "@/components/marketing/DiagnosticPageClient";

export const metadata: Metadata = {
  title: "Schedule Free Diagnostic",
  description:
    "Jake scans your ERP data and shows you every duplicate vendor, orphaned cost code, and AR gap — in 48 hours. Free. No commitment.",
};

export default function DiagnosticPage() {
  return <DiagnosticPageClient />;
}
