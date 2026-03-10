import { useState, useEffect } from "react";
import axios from "axios";
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);

  async function fetchNewItems() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
    );
    setNewItems(data);
  }

  useEffect(() => {
    fetchNewItems();
  }, []);

  return (
    <NewItemsSlider newItems={newItems} />
  );
};

export default NewItems;
