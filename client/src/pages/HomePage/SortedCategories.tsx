import React from "react";
import BannerImage from "assets/images/bannerImage.webp";

type Props = {
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
};

const SortedCategories: React.FC<Props> = ({
  selectedImage,
  setSelectedImage,
}) => {
  const categoryItems = [
    { id: 1, categoryName: "Category1", categoryImage: BannerImage },
    { id: 2, categoryName: "Category2", categoryImage: "test2" },
    { id: 3, categoryName: "Category3", categoryImage: "test3" },
    { id: 4, categoryName: "Category4", categoryImage: "test4" },
    { id: 5, categoryName: "Category5", categoryImage: "test5" },
    { id: 6, categoryName: "Category6", categoryImage: "test6" },
    { id: 7, categoryName: "Category7", categoryImage: "test7" },
    { id: 8, categoryName: "Category8", categoryImage: "test8" },
    { id: 9, categoryName: "Category9", categoryImage: "test9" },
  ];

  return (
    <div className="sorted-categories-container">
      <div className="category-img">
        <img src={selectedImage} alt={selectedImage} />
      </div>
      <div className="sorted-categories">
        {categoryItems.map((category, index) => {
          return (
            <label
              key={category.id}
              htmlFor={`checkbox-${index}`}
              className={`category-item `}
              onMouseEnter={() => {
                setSelectedImage(category.categoryImage);
              }}
            >
              <>
                <span className="material-symbols-outlined">star</span>
                <span className="category-text">{category.categoryName}</span>
              </>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SortedCategories;
