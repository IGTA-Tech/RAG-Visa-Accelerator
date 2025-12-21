import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Training | IGTA Partner Program",
  description: "Access IGTA partner training materials. 9 NotebookLM modules covering O-1 visa criteria, programs, pricing, and sales techniques.",
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
