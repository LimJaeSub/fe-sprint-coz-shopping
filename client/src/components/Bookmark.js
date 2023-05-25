import React, { useState } from "react";
import bookmarkoff from "../props/icon/bookmarkoff.png";
import bookmarkon from "../props/icon/bookmarkon.png";
import { useDispatch, useSelector } from "react-redux";
function Bookmark({ data }) {
  const dispatch = useDispatch();
  const bookmarkdata = useSelector((state) => state.itemReducer.bookmarks);
  //const toastData = useSelector((state) => state.ToastReducer.toastShow);
  const [toggleOnOff, settoggleOnOff] = useState(false);

  // 킨거 끄기(북마크 제거)
  const OnToOff = () => {
    settoggleOnOff(!toggleOnOff);
    dispatch({ type: "OUTPUT_BOOKMARK", payload: data.id });
    dispatch({ type: "ONTOOFF_TOAST" });
    dispatch({ type: "SHOW_TOAST" });
  };

  // 끈거 키기(북마크 생성)
  const OffToOn = () => {
    settoggleOnOff(!toggleOnOff);
    dispatch({ type: "INPUT_BOOKMARK", payload: data });
    dispatch({ type: "OFFTOON_TOAST" });
    dispatch({ type: "SHOW_TOAST" });
  };
  const isShow = bookmarkdata.indexOf(data);
  // Bookmarkdata에 data.id가 있으면 색칠된 별을 보여주고
  return isShow === -1 ? (
    // 북마크 없음
    <img onClick={OffToOn} src={bookmarkoff} alt="bookmark" />
  ) : (
    // 북마크 있음
    <img onClick={OnToOff} src={bookmarkon} alt="bookmark" />
  );
}

export default Bookmark;
