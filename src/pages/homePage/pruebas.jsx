import "./homePage.scss";
import { useTranslation } from "react-i18next";
import { Context } from "../../context/Context";
import { useContext } from "react";

const HomePage = () => {
  const [t, i18n] = useTranslation("homePage");
  const context = useContext(Context);

  return (
    <div>
      HomePage
      <div>{t("login")}</div>
      <button
        onClick={() => {
          i18n.language === "en"
            ? i18n.changeLanguage("es")
            : i18n.changeLanguage("en");
        }}
      >
        Change language
      </button>
    </div>
  );
};

export default HomePage;
