import { formatDate, APP_VERSION } from '@cross-platform/shared-utils';

export default function Home() {
  const today = formatDate(new Date());
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-600">
            Mermaid App
          </h1>
          <div className="flex gap-2 items-center justify-center flex-wrap">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Next.js Web
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-primary-50 p-8 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-primary-700">
            Welcome to Mermaid! 🧜‍♀️
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. 
            This is a demo of cross-platform development in a Turborepo monorepo.
          </p>
          <div className="border-t border-primary-200 pt-4 mt-4 space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Today:</span> {today}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Version:</span> {APP_VERSION}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="flex-1 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors">
            Learn More
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm">
          Using Turborepo + Yarn Workspaces + Gluestack UI
        </p>
      </div>
    </main>
  );
}

