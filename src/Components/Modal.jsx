import React, { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-2xl",
  blur = true,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 ${
        blur ? "backdrop-blur-sm" : ""
      } animate-fadeIn`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white w-full ${maxWidth} rounded-xl shadow-2xl m-2`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primaryStart bg-white rounded-full hover:text-black text-sm p-2 shadow"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
