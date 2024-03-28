import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.css";
import { v4 as uuidv4 } from "uuid";

export const ProductsList = () => {
  const productList = [
    {
      name: "Kinder",
      barcode: "08854724",
      ingredients: {
        description: "sugar, cocoa, mass, cocoa butter, whey solids, whole..",
        origin: "Italy",
        storage:
          " store at a temperature from 15 ° C to 22 ° C and a relative humidity of no more than 65%.",
        helfLife: "120 days.",
      },
      status: "halal",
      img: "https://erkemay-baby.kz/upload/iblock/36c/356rhwexfxr5a7hstd412dfcosmjqjqw.jpg",
      additives: ["E322", "E500", "E503"],
      certified: true,
      certifiacates: {
        name: "Стандарт ПРО",
        logo: "https://gsg-rt.ru/upload/iblock/15d/Halal-Logo-02.png",
        certificate:
          "https://medinaschool.org/files/images/2017/12/933f8e6fddd0fd0b71e9d590fc7f8b1e.jpg",
      },
    },
    {
      name: "Orion Choco-Pie",
      barcode: "08854724",
      ingredients: {
        description: "sugar, cocoa, mass, cocoa butter, whey solids, whole..",
        origin: "Italy",
        storage:
          " store at a temperature from 15 ° C to 22 ° C and a relative humidity of no more than 65%.",
        helfLife: "120 days.",
      },
      status: "haram",
      img: "https://arbuz.kz/image/s3/arbuz-kz-products/250496-pechene_orion_choco-pie_120_g.jpg?w=1100&h=1100&_c=1702952047",
      additives: ["E322", "E500", "E503"],
      certified: false,
    },
    {
      name: "Kinder",
      barcode: "08854724",
      ingredients: {
        description: "sugar, cocoa, mass, cocoa butter, whey solids, whole..",
        origin: "Italy",
        storage:
          " store at a temperature from 15 ° C to 22 ° C and a relative humidity of no more than 65%.",
        helfLife: "120 days.",
      },
      status: "doubtful",
      img: "https://erkemay-baby.kz/upload/iblock/36c/356rhwexfxr5a7hstd412dfcosmjqjqw.jpg",
      additives: ["E322", "E500", "E503"],
      certified: false,
    },
    {
      name: "Kinder",
      barcode: "08854724",
      ingredients: {
        description: "sugar, cocoa, mass, cocoa butter, whey solids, whole..",
        origin: "Italy",
        storage:
          " store at a temperature from 15 ° C to 22 ° C and a relative humidity of no more than 65%.",
        helfLife: "120 days.",
      },
      status: "doubtful",
      img: "https://erkemay-baby.kz/upload/iblock/36c/356rhwexfxr5a7hstd412dfcosmjqjqw.jpg",
      additives: ["E322", "E500", "E503"],
      certified: false,
    },
    {
      name: "Kinder",
      barcode: "08854724",
      ingredients: {
        description: "sugar, cocoa, mass, cocoa butter, whey solids, whole..",
        origin: "Italy",
        storage:
          " store at a temperature from 15 ° C to 22 ° C and a relative humidity of no more than 65%.",
        helfLife: "120 days.",
      },
      status: "doubtful",
      img: "https://erkemay-baby.kz/upload/iblock/36c/356rhwexfxr5a7hstd412dfcosmjqjqw.jpg",
      additives: ["E322", "E500", "E503"],
      certified: false,
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <h2>Confectionery / «Chocolate bars»</h2>
      <hr />
      <div className={styles.viewContent}>
        <div className={styles.container}>
          {productList.map((product) => {
            return <ProductCard {...product} key={uuidv4()} />;
          })}
        </div>
      </div>
    </div>
  );
};
