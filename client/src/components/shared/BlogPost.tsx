import React from "react";
import "assets/styles/components/shared/blogPost.scss";
import LayeredButton from "./LayeredButton";

type Props = {
  blogPostTitle: string;
  blogPostShortDesc: string;
  blogPostImage: string;
  blogPostLink: string;
};

const BlogPost: React.FC<Props> = ({
  blogPostTitle,
  blogPostShortDesc,
  blogPostImage,
  blogPostLink,
}) => {
  return (
    <div className="blog-post-container">
      <div className="post-image">
        <img src={blogPostImage} />
      </div>
      <div className="post-short-infos">
        <div className="post-title">{blogPostTitle}</div>
        <div className="post-desc">{blogPostShortDesc}</div>
      </div>
      <LayeredButton
        text="Read More"
        textSize="sm"
        action={() => (window.location.href = `/blog/${blogPostLink}`)}
      />
    </div>
  );
};

export default BlogPost;
