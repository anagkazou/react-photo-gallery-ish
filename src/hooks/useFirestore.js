import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)

      .orderBy("createAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
           // console.log(doc.data())
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);
  console.log(docs);
  return { docs };
};

export default useFirestore;
