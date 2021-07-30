import { useSelector, useDispatch } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC, LoadingStateType } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import styles from "./HW10.module.css";
import preloader from "./img/grid.svg";

function HW10() {
  const dispatch = useDispatch();
  let loading = useSelector<AppStoreType, LoadingStateType>(
    (state) => state.loading
  );

  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(function () {
      dispatch(loadingAC(false));
    }, 2000);

    console.log("loading...");
  };

  return (
    <div>
      <hr />
      homeworks 10
      {loading.isLoading ? (
        <img className={styles.preloader} src={preloader} alt="loading" />
      ) : (
        <div>
          <SuperButton className={styles.btn} onClick={setLoading}>
            set loading...
          </SuperButton>
        </div>
      )}
      <hr />
    </div>
  );
}

export default HW10;
