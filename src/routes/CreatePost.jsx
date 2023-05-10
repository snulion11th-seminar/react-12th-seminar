import { useState } from "react";
import { PostForm } from "../components/Form";
import { BigPost } from "../components/Posts";
import posts from "../data/posts";

const CreatePost = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    id: posts.length,
    title: "",
    content: "",
    author: { id: posts.length, username: "베이비" },
    tags: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.tags.length > 0)
      formData.tags = formData.tags.map((tag, idx) => {
        return { id: idx, content: tag };
      });
    formData.like_users = [];
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTag = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.split(",") });
  };

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center w-3/5 p-8">
          <BigPost post={formData} />
          {/* <Comments /> */}
        </div>
      ) : (
        <div className="flex flex-col items-center w-3/5">
          <h3 className="font-bold text-4xl">New Post</h3>
          <PostForm
            onSubmit={onSubmit}
            handleChange={handleChange}
            handleTag={handleTag}
            formData={formData}
          />
        </div>
      )}
    </>
  );
};

export default CreatePost;