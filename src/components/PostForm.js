import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const user = useSelector((state) => state.userReducer)

  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Titre du poste" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
