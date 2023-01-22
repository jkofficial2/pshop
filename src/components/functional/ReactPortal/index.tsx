import React, {
  memo,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface Props {
  id: string;
}

export const ReactPortal: React.FC<PropsWithChildren<Props>> = memo(
  ({ children, id = "Modal" }) => {
    const [wrapperElement, setWrapperElement] = useState<any | null>(null);

    const CreateWrapperAndAppendToBody = useMemo(
      () => (id: string) => {
        const wrapperElementDiv = document.createElement("div");
        wrapperElementDiv.setAttribute("id", id);
        document.body.appendChild(wrapperElementDiv);
        return wrapperElementDiv;
      },
      []
    );

    useEffect(() => {
      let element = document.getElementById(id)!;
      let systemCreated = false;
      document.body.className = "overflow-hidden";
      if (!element) {
        systemCreated = true;
        element = CreateWrapperAndAppendToBody(id);
      }
      setWrapperElement(element);

      return () => {
        if (systemCreated && element.parentNode) {
          element.parentNode.removeChild(element);
          document.body.className = "overflow-visible";
        }
      };
    }, [CreateWrapperAndAppendToBody, id]);

    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
  }
);

ReactPortal.displayName = "ReactPortal";
