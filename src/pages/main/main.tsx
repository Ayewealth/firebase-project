import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Post from "./post";

export interface PostInterface {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

const main = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const postRef = collection(db, "post");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostInterface[]
    );
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default main;
