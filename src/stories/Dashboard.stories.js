import React, {useState} from "react";
import presetThemes from '../data/themes';
import Dashboard from "../components/DashBoard";

export default { title: "Dashboard" };

export const Default = () => {
  const [theme, setTheme] = useState(presetThemes[0].themeColor);

  const updateTheme = (t) => {
    setTheme([...t]);
  };

  return <Dashboard setTheme={updateTheme} theme={theme}/>
};
