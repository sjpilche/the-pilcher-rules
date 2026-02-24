"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html>
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                Error
              </h1>
              <p className="text-xl text-slate-300 mb-2">
                Critical Application Error
              </p>
              <p className="text-sm text-slate-500">
                Something went wrong while loading this page. Please try again.
              </p>
            </div>

            <button
              onClick={reset}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              Reload Page
            </button>

            <p className="text-xs text-slate-600 mt-8">
              Error ID: {error?.digest || "unknown"}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
