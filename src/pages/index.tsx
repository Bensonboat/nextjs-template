import style from "@/styles/homePage/index.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { updateGreet } from "@/redux/testSlice";
import { IRootState } from "@/redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { greet, name } = useSelector((state: IRootState) => state.test);

  const update = () => {
    dispatch(updateGreet("Greet updated"));
  };

  return (
    <div className={style.homePage}>
      {greet} {name}, Welcome to home page
      <button onClick={() => update()}>Update Greet</button>
    </div>
  );
};

export default HomePage;
