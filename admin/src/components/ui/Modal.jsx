import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  open,
  onClose,
  title,
  children,
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => {
        if (closeOnOverlayClick) {
          onClose();
        }
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

        {/* Header */}
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>
        </div>

        {/* Body */}
        <div className="relative px-6 py-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
