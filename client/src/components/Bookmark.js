import React, { useState } from "react";
import bookmarkoff from "../props/icon/bookmarkoff.png";
import bookmarkon from "../props/icon/bookmarkon.png";
function Bookmark() {
  const [toggleOnOff, settoggleOnOff] = useState(false);
  const toggle = () => {
    settoggleOnOff(!toggleOnOff);
  };
  return (
    <img
      onClick={toggle}
      src={toggleOnOff === true ? bookmarkon : bookmarkoff}
      alt="bookmark"
    />
  );
}

export default Bookmark;
