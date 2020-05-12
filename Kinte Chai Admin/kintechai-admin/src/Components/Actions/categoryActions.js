import { firestore } from "../../firebase";

export const loadCategories = (onSuccess, onError) => {
  return (dispatch, getstate) => {
    firestore
      .collection("CATEGORIES")
      .orderBy("index")
      .get()
      .then((querySnapshot) => {
        let categories = [];
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            categories.push(doc.data());
          });
          dispatch({ type: "LOAD_CATEGORIES", payload: categories });
          onSuccess();
        }
      })
      .catch((error) => {
        console.log(error);
        onError();
      });
  };
};
