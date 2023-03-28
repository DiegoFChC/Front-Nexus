import "./homePage.scss";
import { useTranslation } from "react-i18next";
import { Context } from "../../context/Context";
import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
  const [t, i18n] = useTranslation("homePage");
  const context = useContext(Context);

  return (
    <div className="HomePage">
      <Navbar />
    </div>
  );
};

export default HomePage;
