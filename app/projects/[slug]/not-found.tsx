import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-900 mb-2">404</h1>
        <p className="text-lg text-zinc-600 mb-8">
          Case study not found. Please check the URL and try again.
        </p>
        <a
          href="/projects"
          className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-zinc-900 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
        >
          Back to Projects
        </a>
      </div>
    </div>
  );
}
