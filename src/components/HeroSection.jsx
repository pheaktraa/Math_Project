export default function HeroSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tl from-violet-200 to-pink-200 text-white px-4">

      <div className="w-full max-w-4xl mx-auto text-center space-y-4"> {/* Added max-width and mx-auto */}
        <h1 className="text-4xl md:text-5xl font-bold">🔐 Cryptography Project</h1>
        <p className="text-xl">Topic: RSA & Shift Cipher</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold underline">Group Members</h2>
          <ul className="mt-2 space-y-1 text-lg">
            <li>• Alice Johnson</li>
            <li>• Bob Smith</li>
            <li>• Charlie Lee</li>
            <li>• Dana White</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl">Lecturer: <span className="font-medium">Mr. Anderson</span></h2>
        </div>
      </div>
    </div>
  );
}