import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

 
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images')
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        const createAt = timestamp()
        collectionRef.add({url:url,  createAt  })
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
