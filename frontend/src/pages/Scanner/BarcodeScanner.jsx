import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByBarcode,
  selectScannedProduct,
  selectScannedProductIsLoading,
  selectError,
} from "../../redux/slices/barcodeSlice";
import { useNavigate } from "react-router-dom";
import { Scanner } from "@yudiel/react-qr-scanner";
import styles from "./Scanner.module.css";
import { setError } from "../../redux/slices/errorSlice";

export const BarcodeScanner = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectScannedProduct);
  const isLoading = useSelector(selectScannedProductIsLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const handleResult = (text, result) => {
    console.log(text); // Текст сканированного кода
    dispatch(fetchProductByBarcode(text));
    navigate(`/scanner/${text}`);
  };

  const handleError = (error) => {
    console.error(error?.message);
    dispatch(setError(error));
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Scanner
          onResult={handleResult}
          onError={handleError}
          styles={{
            container: {
              width: "100%",
              height: "100%", // Установите желаемую высоту
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black", // Пример фона
            },
            video: {
              width: "100%", // Примените полную ширину к видео элементу
              height: "100%", // Растяните видео на всю высоту контейнера
            },
          }}
          components={{
            audio: true, // Отклюsчить звуковой сигнал
            torch: true, // Включить элемент управления торчем
            count: false, // Отключить счетчик сканирований
            onOff: true, // Включить кнопку вкл/выкл сканирования
            tracker: false, // Отключить отображение трекера
          }}
        />
      </div>
    </>
  );
};
