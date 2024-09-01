import React, { useState, useRef, useEffect, useCallback } from "react";
import "./HomeMainFeed.scss";
import Posts from "../posts/Posts";

const HomeMainFeed = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const popupRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
    resetFileInput(); // Reset the file input when an image is removed
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = () => {
    // Handle the post submission with text and images
    const formData = new FormData();
    formData.append("text", inputValue);
    selectedImages.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    // Perform the API call to submit the formData
    // Example:
    // axios.post("/api/post", formData)
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));
  };

  const togglePopup = useCallback(() => {
    setIsPopupOpen((prev) => !prev);
    document.body.style.overflow = !isPopupOpen ? "hidden" : "auto"; // Prevent scrolling when popup is open
  }, [isPopupOpen]);

  const handleClickOutside = useCallback(
    (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup();
      }
    },
    [togglePopup]
  );

  const handleEscapeKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        togglePopup();
      }
    },
    [togglePopup]
  );

  const closeAndDeletePopupContents = () => {
    setIsPopupOpen(false);
    setSelectedImages([]);
    setInputValue("");
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }; }, [isPopupOpen, handleClickOutside, handleEscapeKey]);

  return (
    <div className="homeMainFeedContainer">
      <div className="componentHeader">
        <div className="post-container">
          <img src="/user.svg" alt="" />
          <div onClick={togglePopup} className="post-box">
            <span>Start a post, trying with AI</span>
          </div>
        </div>
        <div className="post-icons-container">
          <div className="post-icons">
            <img src="/image-icon.png" alt="" />
            Media
          </div>
          <div className="post-icons">
            <img src="/calendar.svg" alt="" />
            Event
          </div>
          <div className="post-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Write Article
          </div>
        </div>
      </div>

      {/* Post container (popup) */}
      {isPopupOpen && (
        <div className="post-popup">
          <div className="post-subcontainer" ref={popupRef}>
            <div className="popup-cancel-header">
              <div className="post-profile">
                <img src="/user.svg" alt="" />
                <span>
                  <h1>David Maduabuchi</h1>
                  <p>Post to Anyone</p>
                </span>
                <img src="/down-icon.svg" alt="" className="popup-down-icon" />
              </div>
              <img
                src="/cancel.svg"
                alt=""
                className="popup-cancel-icon"
                onClick={closeAndDeletePopupContents}
              />
            </div>
            <textarea
              value={inputValue}
              onChange={handleChange}
              placeholder="What do you want to talk about?"
              type="text"
            />
            {/* Image upload section */}

            <div className="image-preview-container">
              {selectedImages.map((image, index) => (
                <div key={index} className="image-preview">
                  <img src={URL.createObjectURL(image)} alt={``} />
                  <br />
                  <div className="remove-button">
                    <img
                      src="/cancel.svg"
                      alt=""
                      onClick={() => removeImage(index)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Upload SVG */}
            <img
              className="add-image-img"
              src="/image-post.svg"
              alt=""
              onClick={handleIconClick}
            />

            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {/* post button */}
            <div className="post-button">
              <button
                disabled={!inputValue && selectedImages.length === 0}
                className={
                  !inputValue && selectedImages.length === 0
                    ? "disabled-button"
                    : "button"
                }
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHHOW ALL POSTS SECTION */}
      <div className="showAllPosts">
        <Posts />
      </div>

    </div>
  );
};

export default HomeMainFeed;
