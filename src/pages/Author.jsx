import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import Skeleton from "../components/UI/Skeleton";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Author = () => {
  const [authorItems, setAuthorItems] = useState([]);
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const { authorId } = useParams();

  useEffect(() => {
    async function fetchAuthorItems() {
      setLoading(true);
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`,
      );
      setAuthorItems(data);
      setLoading(false);
    }

    fetchAuthorItems();
  }, [authorId]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {!loading ? (
                        <>
                          <img src={authorItems.authorImage} alt="" />
                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {authorItems.authorName}
                              <span className="profile_username">
                                {authorItems.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {authorItems.address}
                              </span>
                              <button 
                              id="btn_copy" 
                              title="Copy Text"
                              onClick={() => {
                                navigator.clipboard.writeText(authorItems.address)
                                alert("Copied to clipboard");
                              }}
                              >
                                Copy
                              </button>
                            </h4>
                          </div>
                        </>
                      ) : (
                        <div style={{ position: "relative" }}>
                          <Skeleton width="150px" height="150px" borderRadius="50%" />
                          <div className="profile_name" style={{ marginTop: "20px" }}>
                            <h4>
                              <Skeleton width="200px" height="25px" />
                              <span className="profile_username">
                                <Skeleton width="100px" height="20px" />
                              </span>
                              <span id="wallet" className="profile_wallet">
                                <Skeleton width="150px" height="20px" />
                              </span>
                            </h4>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      {!loading ? (
                        <>
                          <div className="profile_follower">
                            {authorItems.followers + (following ? 1 : 0)} followers
                          </div>
                          <Link to="#" className="btn-main" onClick={() => setFollowing(!following)}>
                            {following ? "Unfollow" : "Follow"}
                          </Link>
                        </>
                      ) : (
                        <>
                          <div className="profile_follower">
                            <Skeleton width="100px" height="20px" />
                          </div>
                          <Skeleton width="150px" height="40px" borderRadius="20px" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems
                    authorItems={authorItems.nftCollection || []}
                    authorImage={authorItems.authorImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
