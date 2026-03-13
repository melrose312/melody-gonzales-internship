import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NftInfo from "../UI/NftInfo";
import Skeleton from "../UI/Skeleton";

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [loadMore, setLoadMore] = useState(8);

  async function fetchExploreItems(filterValue) {
    {
      const filteredItems = filterValue
        ? `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filterValue}`
        : "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore";
      const { data } = await axios.get(filteredItems);
      setExploreItems(data);
    }
  }

  useEffect(() => {
    fetchExploreItems(filter);
  }, [filter]);

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {exploreItems.length > 0
        ? exploreItems.slice(0, loadMore).map((exploreItem, id) => (
            <div
              key={id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NftInfo nftCard={exploreItem} />
            </div>
          ))
        : Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Skeleton width="50px" height="50px" borderRadius="50%" />
                  </div>
                  <Skeleton width="100%" height="250px" />
                  <div className="nft__item_info">
                    <Skeleton width="120px" height="20px" />
                    <Skeleton width="80px" height="16px" />
                  </div>
                </div>
              </div>
            ))}
      {/* Hide button when all items display on the page */}
      {loadMore < exploreItems.length && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={() => setLoadMore(loadMore + 4)}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
