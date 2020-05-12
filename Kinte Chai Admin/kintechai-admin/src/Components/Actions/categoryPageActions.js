import { firestore } from "../../firebase";

export const loadCategoryPage = (category, onSuccess, onError) => {
  return (dispatch, getstate) => {
    firestore
      .collection("CATEGORIES")
      .doc(category)
      .collection("TOP_DEALS")
      .get()
      .then((querySnapshot) => {
        let pagedata = [];
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            pagedata.push(doc.data());
          });
          dispatch({ type: "LOAD_PAGE", payload: pagedata, category });
          onSuccess();
        }
      })
      .catch((error) => {
        console.log(error);
        onError();
      });
  };
};
