import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../UI/Skeleton";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);

  async function fetchTopSellers() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers",
    );
    setTopSellers(data);
  }

  useEffect(() => {
    fetchTopSellers();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>


          <div className="col-md-12">
            <ol className="author_list">
              {
                topSellers.length > 0 ? (
                  topSellers.map((topSeller, id) => (
                    <li key={id}>
                      <div className="author_list_pp">
                        <Link to={`/author/${topSeller.authorId}`}>
                          <img
                            className="lazy pp-author"
                            src={topSeller.authorImage}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to={`/author/${topSeller.authorId}`}>{topSeller.authorName}</Link>
                        <span>{topSeller.price} ETH</span>
                      </div>
                    </li>
                  ))
                ) : (
                  Array(12).fill(0).map((_, index) => (
                    <li key={index}>
                      <div className="author_list_pp">
                        <Skeleton width="50px" height="50px" borderRadius="50%" />
                      </div>
                      <div className="author_list_info">
                        <Skeleton width="100px" height="20px" />
                        <Skeleton width="60px" height="16px" />
                      </div>
                    </li>
                  ))
                )
              }
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
