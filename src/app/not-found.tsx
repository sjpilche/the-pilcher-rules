import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            404
          </h1>
          <p className="text-xl text-slate-300 mb-2">Page Not Found</p>
          <p className="text-sm text-slate-500">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-slate-100 transition-all"
          >
            Get Demo
          </Link>
        </div>

        <p className="text-xs text-slate-600 mt-8">
          Need help?{" "}
          <Link href="/contact" className="text-blue-400 hover:text-blue-300">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
