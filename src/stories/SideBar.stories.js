import React, {useState} from "react";
import SideBar from "../components/SideBar";
import presetThemes from "../data/themes";

export default { title: "Sidebar" };

export const Default = () => {
  const [theme] = useState(presetThemes[0].themeColor);

  return <SideBar theme={theme} />
};
