"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied.");
    } catch {
      setStatus("Could not copy. Please select and copy the email address above.");
    }
  }

  return (
    <div className="copy-email">
      <button className="button" type="button" onClick={copyEmail}>
        Copy email
      </button>
      <p className="copy-status" role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
