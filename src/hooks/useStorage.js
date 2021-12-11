import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase";
import { Form, Card, FormGroup } from "react-bootstrap";
import { render } from "@testing-library/react";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("Drills");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const title = storageRef.name.split(".")[0];
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt, title, description });
        setTitle(title);
        setUrl(url);
        setDescription("hello");
      }
    );
  }, [file]);
  return { title, progress, url, error, description };
};

export default useStorage;
