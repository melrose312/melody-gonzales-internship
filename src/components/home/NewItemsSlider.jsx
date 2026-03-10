import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Countdown from "./Countdown";

function NewItemsSlider({ newItems }) {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      1200: { items: 4 },
    },
  };

  const skeletonCount = 4;

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        </div>

        {newItems.length > 0 ? (
          <OwlCarousel className="owl-theme" key="loaded" {...options}>
            {newItems.map((newItem) => (
              <div className="nft__item" key={newItem.id}>
                <div className="author_list_pp">
                  <Link
                    to={`/author/${newItem.authorId}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Creator: ${newItem.authorName}`}
                  >
                    <img className="lazy" src={newItem.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                {newItem.expiryDate && (
                  <Countdown expiryDate={newItem.expiryDate} />
                )}

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link to={`/item-details/${newItem.nftId}`}>
                    <img
                      src={newItem.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${newItem.nftId}`}>
                    <h4>{newItem.title}</h4>
                  </Link>
                  <div className="nft__item_price">{newItem.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{newItem.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <OwlCarousel className="owl-theme" key="skeleton" {...options}>
            {Array(skeletonCount).fill(0).map((_, index) => (
              <div className="nft__item" key={index}>
                <div className="author_list_pp skeleton-box"></div>
                <div className="nft__item_wrap skeleton-box"></div>
                <div className="nft__item_info skeleton-box"></div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
}

export default NewItemsSlider;