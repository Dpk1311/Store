import { createContext, useContext, ReactNode, useState } from "react";

type shoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  remove: (id: number) => void;
  cartQuantity: number;
  cartItems: cartItems[]
};

type cartItems = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: shoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<cartItems[]>([]);
  const [isOpen , setIsOpen] = useState(false)

  const openCart = ()=>{
    setIsOpen(true)
  }

  const closeCart = ()=>{
    setIsOpen(false)
  }

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const incrementQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decrementQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id != id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const remove = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id != id);
    });
  };

  const cartQuantity = cartItems.reduce((quantity , item) => item.quantity + quantity,0)
  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, incrementQuantity, decrementQuantity, remove ,cartItems ,cartQuantity ,closeCart,openCart}}
    >
        {children}
    </ShoppingCartContext.Provider>
  );
}
