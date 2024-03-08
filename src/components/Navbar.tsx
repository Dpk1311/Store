import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShopppingCartContext";

const Navbar = () => {

  const {openCart ,cartQuantity} = useShoppingCart()
  return (
    <div className="bg-white shadow-sm mb-3 flex justify-between items-center sticky">
      <div className="mx-5 p-3 ">
        <Link className="mx-3" to={"/"}>
          Home
        </Link>
        <Link className="mx-3" to={"/store"}>
          Store
        </Link>
        <Link className="mx-3" to={"/about"}>
          About
        </Link>
      </div>
      {cartQuantity > 0 && (
        <button className="mx-5 p-3 relative" onClick={openCart}>
        <svg xmlns="http://www.w3.org/2000/svg" width="47.999" height="48.001">
          <g fill="#1a171b">
            <circle cx="24.001" cy="38.546" r=".728" />
            <path d="M44.364 6.789h-6.182L37.327.627A.729.729 0 0 0 36.606 0H11.394a.73.73 0 0 0-.721.627l-.855 6.162H3.637A3.641 3.641 0 0 0 0 10.426v28.119a3.641 3.641 0 0 0 3.637 3.637h10.908v4.363H9.454a.728.728 0 0 0 0 1.456h29.09a.728.728 0 1 0 0-1.456h-5.091v-4.363h10.909A3.641 3.641 0 0 0 48 38.545V10.426a3.638 3.638 0 0 0-3.636-3.637zM12.028 1.455h23.944l4.647 33.455H7.381zM1.455 10.426a2.185 2.185 0 0 1 2.183-2.182h5.979L5.914 34.91H1.456V10.426zM32 46.545H16v-4.363h16zm14.545-8a2.185 2.185 0 0 1-2.182 2.182H3.637a2.186 2.186 0 0 1-2.183-2.182v-2.182h45.091v2.182zm0-3.635h-4.456l-3.7-26.666h5.979a2.185 2.185 0 0 1 2.182 2.182z" />
            <path d="M18.022 10.4V8.082a.728.728 0 0 0-1.455 0V10.4a7.434 7.434 0 1 0 14.868 0V8.082a.728.728 0 0 0-1.455 0V10.4a5.979 5.979 0 1 1-11.958 0z" />
            <path d="M14.87 8.324a.729.729 0 0 0 .73-.724 1.7 1.7 0 1 1 3.393 0 .728.728 0 0 0 1.456 0 3.152 3.152 0 1 0-6.3 0 .726.726 0 0 0 .721.724zM28.283 8.324a.729.729 0 0 0 .728-.727 1.7 1.7 0 1 1 3.393 0 .728.728 0 0 0 1.455 0 3.151 3.151 0 1 0-6.3 0 .726.726 0 0 0 .724.727z" />
          </g>
        </svg>
        <div className="bg-red-700 rounded-full w-6 absolute transform translate-x-7 -translate-y-3 text-white">{cartQuantity}</div>
      </button>
      )}
      
    </div>
  );
};

export default Navbar;
