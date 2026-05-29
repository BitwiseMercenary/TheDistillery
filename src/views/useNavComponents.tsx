import { useNavigate } from "react-router-dom";
import { Route } from "../constants";
import TsFileIcon from "@assets/TSX.svg?react";

const TsFileNavButton = ({ dataId, destination, text }: { dataId: string; destination: Route | null; text: string }) => {
  const navigate = useNavigate();
  return (
    <button
      id={dataId}
      key={dataId}
      onClick={() => {
        if (destination) {
          navigate(destination);
        } else {
          window.alert("working on it...");
        }
      }}
    >
      <div>
        <TsFileIcon /> <div>{text}</div>
      </div>
    </button>
  );
};

export const useNavComponents = () => {
  const tabList = [
    <TsFileNavButton dataId="NavBar-Home-Button" key="NavBar-Home-Button" destination={Route.HOME} text="Home.tsx" />,
    <TsFileNavButton
      dataId="NavBar-Resume-Button"
      key="NavBar-Resume-Button"
      destination={Route.RESUME}
      text="Resume.tsx"
    />,
    <TsFileNavButton
      dataId="NavBar-OtherStuff-Button"
      key="NavBar-OtherStuff-Button"
      destination={null}
      text="OtherStuff.tsx"
    />,
  ];

  return { tabList };
};
