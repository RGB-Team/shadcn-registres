"use client";

import { voteAction } from "@/actions/vote";
import { useAction } from "next-safe-action/hooks";
import React from "react";
import { toast } from "sonner";

export const CopyWrapper = ({
  content,
  slug,
  children,
}: {
  content: string;
  slug?: string;
  children: React.ReactNode;
}) => {
  const [copied, setCopied] = React.useState(false);
  const { execute } = useAction(voteAction);

  const handleCopy = () => {
    if (slug) execute({ slug });
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast("Copied to clipboard. Paste it, run it and enjoy.");

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return <div onClick={handleCopy}>{children}</div>;
};
