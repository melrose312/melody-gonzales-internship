import { Link } from "react-router-dom";
import Countdown from "../home/Countdown";

function NftInfo({ nftCard }) {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Link
          to={`/author/${nftCard.authorId}`}
          data-bs-toggle={nftCard.authorName ? "tooltip" : undefined}
          data-bs-placement={nftCard.authorName ? "top" : undefined}
          title={nftCard.authorName ? `Creator: ${nftCard.authorName}` : undefined}

        >
          <img className="lazy" src={nftCard.authorImage} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      {nftCard.expiryDate && (
        <Countdown expiryDate={nftCard.expiryDate} />
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
        <Link to={`/item-details/${nftCard.nftId}`}>
          <img
            src={nftCard.nftImage}
            className="lazy nft__item_preview"
            alt=""
          />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to={`/item-details/${nftCard.nftId}`}>
          <h4>{nftCard.title}</h4>
        </Link>
        <div className="nft__item_price">{nftCard.price} ETH</div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{nftCard.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default NftInfo;
