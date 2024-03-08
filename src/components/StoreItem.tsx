import {  useShoppingCart } from "../context/ShopppingCartContext";
import { formatCurrency } from "../utils/formatCurreny";

type StoreDataProps = {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
};

const StoreItem = ({ name, price, id, imgUrl }: StoreDataProps) => {
  const { incrementQuantity , decrementQuantity , remove , getItemQuantity} = useShoppingCart()
  const quatity = getItemQuantity(id);
  return (
    <div className="bg-white m-5 p-3 border w-1/2 border-black mx-auto rounded-lg shadow-md">
      <div className="mx-auto flex flex-col">
        <img
          src={imgUrl}
          alt="image"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between p-4">
        <span className="font-bold text-2xl">{name}</span>
        <span className="font-bold text-xl text-gray-600">
          {formatCurrency(price)}
        </span>
      </div>
      <div className="flex items-center justify-center">
        {quatity === 0 ? (
          <button className=" bg-blue-600 rounded-lg h-8 w-full" onClick={()=> incrementQuantity(id)}>
            + Add to Cart
          </button>
        ) : (
          <div className="flex items-center flex-col">
            <div className="flex my-3">
              <button className="mx-3 bg-green-500 rounded-full w-7" onClick={()=> incrementQuantity(id)}>+</button>
              <div>
                <span className="mx-2 text-2xl">{quatity}</span>in cart
              </div>
              <button className="mx-3 bg-red-500 rounded-full w-7" onClick={()=> decrementQuantity(id)}>-</button>
            </div>
            <div>
              <button className="bg-orange-500 rounded-lg w-20 p-2" onClick={()=> remove(id)}>Remove</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
