import { IoMoon, IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((store) => store.themeSlice);

  return (
    <header className="p-2 d-flex justify-content-between align-items-center">
      <h1>Redux CRUD</h1>
      <button
        onClick={() => dispatch(changeTheme())}
        className={
          themeState.isLightTheme
            ? "btn btn-outline-dark d-flex align-items-center gap-1"
            : "btn btn-outline-light d-flex align-items-center gap-1"
        }
      >
        <span>
          {themeState.isLightTheme ? (
            <IoMoon className="fs-5" />
          ) : (
            <IoSunny className="fs-5" />
          )}
        </span>
        <span>{themeState.isLightTheme ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </header>
  );
};

export default Header;
