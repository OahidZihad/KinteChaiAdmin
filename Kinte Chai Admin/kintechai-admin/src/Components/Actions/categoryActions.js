import { firestore } from "../../firebase";

export const loadCategories = () => {
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
