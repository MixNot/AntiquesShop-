import { useState } from "react";
import "./newProduct.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [countryImageFile, setCountryImageFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(null);
        return;
      }
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const imgURL = await uploadFile(file);
      const countryImageURL = await uploadFile(countryImageFile);
      const product = {
        ...inputs,
        img: imgURL,
        countryImage: countryImageURL,
        categories: cat,
      };
      addProduct(product, dispatch);
    } catch (error) {
      console.error("Error uploading files: ", error);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Новый продукт</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Изображение</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Название</label>
          <input
            name="title"
            type="text"
            placeholder="Старая кружка"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Описание</label>
          <input
            name="desc"
            type="text"
            placeholder="описание..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Цена</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Категория</label>
          <input
            type="text"
            placeholder="cup"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>Наличие</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Да</option>
            <option value="false">Нет</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Страна</label>
          <input
            name="country"
            type="text"
            placeholder="BY"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Картинка страны</label>
          <input
            type="file"
            id="countryImageFile"
            onChange={(e) => setCountryImageFile(e.target.files[0])}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Создать
        </button>
      </form>
    </div>
  );
}