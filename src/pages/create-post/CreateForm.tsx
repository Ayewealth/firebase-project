import "../../App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "post");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="Title...." {...register("title")} />
      <span style={{ color: "red" }}>{errors.title?.message}</span>
      <textarea placeholder="Description..." {...register("description")} />
      <span style={{ color: "red" }}>{errors.description?.message}</span>
      <input type="submit" id="submitbtn" />
    </form>
  );
};

export default CreateForm;
