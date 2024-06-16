import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-black animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-800 mb-4">ただいま準備中です。</p>
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce200"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce400"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
