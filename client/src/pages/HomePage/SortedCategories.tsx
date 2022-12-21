import React from "react";
import BannerImage from "assets/images/bannerImage.webp";

type Props = {
  onHoverCategory: boolean;
  selectedImage: string;
  setOnHoverCategory: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
};

const SortedCategories: React.FC<Props> = ({
  onHoverCategory,
  selectedImage,
  setOnHoverCategory,
  setSelectedImage,
}) => {
  const categoryItems = [
    { categoryName: "Category1", categoryImage: BannerImage },
    { categoryName: "Category2", categoryImage: "test2" },
    { categoryName: "Category3", categoryImage: "test3" },
    { categoryName: "Category4", categoryImage: "test4" },
    { categoryName: "Category5", categoryImage: "test5" },
    { categoryName: "Category6", categoryImage: "test6" },
    { categoryName: "Category7", categoryImage: "test7" },
    { categoryName: "Category8", categoryImage: "test8" },
    { categoryName: "Category9", categoryImage: "test9" },
  ];

  return (
    <div className="sorted-categories-container">
      <div className="category-img">
        <img src={selectedImage} alt={selectedImage} />
      </div>
      <div className="sorted-categories">
        {categoryItems.map((category, index) => {
          return (
            <div
              key={index}
              className={`category-item ${
                onHoverCategory && "hovered-category"
              }`}
              onMouseEnter={() => {
                setOnHoverCategory(true);
                setSelectedImage(category.categoryImage);
              }}
              onMouseLeave={() => setOnHoverCategory(false)}
            >
              <span className="material-symbols-outlined">star</span>
              <span className="category-text">{category.categoryName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortedCategories;
