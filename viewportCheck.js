import React from "react";
import throttle from "lodash.throttle";

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    const throttledWindowResize = throttle(handleWindowResize, 200);
    window.addEventListener("resize", throttledWindowResize);
    return () => window.removeEventListener("resize", throttledWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width } = React.useContext(viewportContext);
  return { width };
};
