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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="text-white text-center px-6 py-8 max-w-sm">
        <p className="text-lg">
          For a better experience, please open this website on a desktop device.
        </p>

        <button
          onClick={() => setShow(false)}
          className="mt-6 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MobileWarningModal;
