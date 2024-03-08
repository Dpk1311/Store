import StoreItem from "../components/StoreItem";
import storeData from "../data/items.json";

const Store = () => {
  return (
    <div>
      <div>
        {storeData.map((item)=> (
          <h2>{<StoreItem key={item.id} {...item} />}</h2>
        ))}
      </div>
    </div>
  );
};

export default Store;
