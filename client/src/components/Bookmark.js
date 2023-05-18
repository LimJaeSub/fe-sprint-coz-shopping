import React, { useState } from "react";
import bookmarkoff from "../props/icon/bookmarkoff.png";
import bookmarkon from "../props/icon/bookmarkon.png";
import { useDispatch, useSelector } from "react-redux";
function Bookmark({ data }) {
  const dispatch = useDispatch();
  const bookmarkdata = useSelector((state) => state.bookmarks);
  const [toggleOnOff, settoggleOnOff] = useState(false);
  console.log(toggleOnOff);
  const OnToOff = () => {
    settoggleOnOff(!toggleOnOff);
    dispatch({ type: "OUTPUT_BOOKMARK", payload: data.id });
  };

  const OffToOn = () => {
    settoggleOnOff(!toggleOnOff);
    dispatch({ type: "INPUT_BOOKMARK", payload: data });
  };

  // Bookmarkdata에 data.id가 있으면 색칠된 별을 보여주고
  return toggleOnOff === false ? (
    <img onClick={OffToOn} src={bookmarkoff} alt="bookmark" />
  ) : (
    <img onClick={OnToOff} src={bookmarkon} alt="bookmark" />
  );
}

export default Bookmark;
