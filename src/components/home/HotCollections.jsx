import  { useState, useEffect } from "react";
import axios from "axios";
import HotCollectionsSlider from "./HotCollectionsSlider";

const HotCollections = () => {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <HotCollectionsSlider items={items} />
  );
};

export default HotCollections;
