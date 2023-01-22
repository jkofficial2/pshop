import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
} from "react";
import { ReactPortal } from "../../functional/ReactPortal";
import Close from "../../../public/img/x.png";

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  loading,
  handleClose,
  isOpen,
  className,
}) => {
  // const [isOpen, setIsOpen] = useToggle()

  const closeOnEscapeKey = useCallback(
    (e: any) => (e.key === "Escape" && isOpen === true ? handleClose() : null),
    [handleClose, isOpen]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeOnEscapeKey, handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal id="Modal">
      <div
        className={`w-[100vw] h-[100vh] flex bg-slate-500 ${className} backdrop-blur bg-opacity-50`}
      >
        <div className="relative">
          {isOpen && (
            <>
              <div className="z-30">{children}</div>
            </>
          )}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
