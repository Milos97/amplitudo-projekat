import Axios from "axios";

export const FETCH_SLIDER = "FETCH_SLIDER";
export const DELETE_SLIDER = "DELETE_SLIDER";

export const fetchSlider = () => dispatch => {
  Axios.get("/slider").then(res => {
    dispatch({
      type: FETCH_SLIDER,
      payload: res.data
    });
  });
};

export const deleteSlider = id => dispatch => {
  Axios.delete("/slider/" + id).then(res => {
    dispatch({
      type: DELETE_SLIDER,
      id: id
    });
  });
};
