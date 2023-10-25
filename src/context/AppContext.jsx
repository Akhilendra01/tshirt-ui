import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext({
  size: "",
  quantity: 0,
  modalOpen:false,
  setSize: () => {},
  setQuantity: () => {},
  setModalOpen: () => {},
});

export default function TshirtContextProvider({ children }) {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        size: size,
        quantity: quantity,
        modalOpen:modalOpen,
        setSize: setSize,
        setQuantity: setQuantity,
        setModalOpen: setModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export {AppContext};