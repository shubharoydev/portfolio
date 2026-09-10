import { useEffect, useState } from "react";

const MobileWarningModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0b0f1d]/90 border border-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-pink-500/15 blur-3xl" />

        <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
          <svg
            className="h-7 w-7 text-purple-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
            <path d="M11 18h2" />
          </svg>
        </div>

        <p className="relative text-lg text-white font-medium leading-relaxed">
          Best experienced on desktop
        </p>
        <p className="relative mt-2 text-sm text-white/60 leading-relaxed">
          This portfolio is designed to be explored on a larger screen. You can still browse on
          mobile — but for the full experience, open it on a desktop device.
        </p>

        <button
          onClick={() => setShow(false)}
          className="relative mt-6 w-full rounded-full bg-white text-black px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5"
        >
          Continue anyway
        </button>
      </div>
    </div>
  );
};

export default MobileWarningModal;
