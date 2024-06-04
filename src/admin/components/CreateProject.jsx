import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CreateProject = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState([]);
  const [categoryEN, setCategoryEN] = useState([]);
  const [urlHeroImgs, setUrlHeroImgs] = useState([]);
  const [urlHorizontalImgArray, setUrlHorizontalImgArray] = useState([]);
  const [urlLogo, setUrlLogo] = useState(null);
  const [urlVerticalImgArray, setUrlVerticalImgArray] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    descriptionEN: "",
    mainText: "",
    mainTextEN: "",
    secondaryText: "",
    secondaryTextEN: "",
    colorLeft: "",
    colorRight: "",
  });

  const opcionesCategory = ['Identidad de Marca', 'Web', 'Redes Sociales'];
  const opcionesCategoryEN = ['Band identity', 'Web', 'Social networks'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMultiSelect = (e, field) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);

    if (field === "category") {
      setCategory(values);
    } else {
      setCategoryEN(values);
    }
  };

  const uploadFile = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, file.name); // No path, just file name
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload files to Firebase Storage
      const urlLogoPath = urlLogo ? await uploadFile(urlLogo) : "";
      const urlHeroImgsPaths = await Promise.all(
        Array.from(urlHeroImgs).map(file => uploadFile(file))
      );
      const urlHorizontalImgArrayPaths = await Promise.all(
        Array.from(urlHorizontalImgArray).map(file => uploadFile(file))
      );
      const urlVerticalImgArrayPaths = await Promise.all(
        Array.from(urlVerticalImgArray).map(file => uploadFile(file))
      );

      // Save project data to Firestore
      await addDoc(collection(db, "projects"), {
        ...formData,
        category,
        categoryEN,
        urlLogo: urlLogoPath,
        urlHeroImgs: urlHeroImgsPaths,
        urlHorizontalImgArray: urlHorizontalImgArrayPaths,
        urlVerticalImgArray: urlVerticalImgArrayPaths,
      });
      alert("Project added successfully!");
      // Reset form or navigate to another page
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const renderStep1 = () => (
    <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresar nombre"
      />
      <label>Slug</label>
      <input
        type="text"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        placeholder="my-project"
      />
      <label>Logo</label>
      <input
        type="file"
        name="logo"
        onChange={(e) => setUrlLogo(e.target.files[0])}
      />
      <label>Imagen principal</label>
      <input
        type="file"
        name="mainImage"
        onChange={(e) => setUrlHeroImgs(e.target.files)}
      />
      <label>Descripción corta</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Ingresar descripción"
      />
      <label>Short description</label>
      <textarea
        name="descriptionEN"
        value={formData.descriptionEN}
        onChange={handleChange}
        placeholder="Enter short description"
      />
      <label>Texto principal en detalle del proyecto</label>
      <textarea
        name="mainText"
        value={formData.mainText}
        onChange={handleChange}
        placeholder="Enter main text"
      />
      <label>Main text in project detail</label>
      <textarea
        name="mainTextEN"
        value={formData.mainTextEN}
        onChange={handleChange}
        placeholder="Enter main text in English"
      />
      <label>Texto secundario en detalle del proyecto</label>
      <textarea
        name="secondaryText"
        value={formData.secondaryText}
        onChange={handleChange}
        placeholder="Enter secondary text"
      />
      <label>Secondary text in project detail</label>
      <textarea
        name="secondaryTextEN"
        value={formData.secondaryTextEN}
        onChange={handleChange}
        placeholder="Enter secondary text in English"
      />
      <div className="container-btn">
        <button type="submit" className="btn-create">Siguiente</button>
      </div>
    </form>
  );

  const renderStep2 = () => (
    <form onSubmit={handleSubmit}>
      <label>Seleccionar categoría (Ctrl + click para seleccionar más de una)</label>
      <select
        multiple
        value={category}
        onChange={(e) => handleMultiSelect(e, "category")}
        className="multi-select"
      >
        {opcionesCategory.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label>Select category (Ctrl + click para seleccionar más de una)</label>
      <select
        multiple
        value={categoryEN}
        onChange={(e) => handleMultiSelect(e, "categoryEN")}
        className="multi-select"
      >
        {opcionesCategoryEN.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label>Color principal</label>
      <input
        type="text"
        name="colorLeft"
        value={formData.colorLeft}
        onChange={handleChange}
        placeholder="Enter left color"
      />
      <label>Color secundario</label>
      <input
        type="text"
        name="colorRight"
        value={formData.colorRight}
        onChange={handleChange}
        placeholder="Enter right color"
      />
      <label>Imágenes de slider horizontal</label>
      <input
        type="file"
        multiple
        name="sliderImages"
        onChange={(e) => setUrlHorizontalImgArray(e.target.files)}
      />
      <label>Imágenes verticales</label>
      <input
        type="file"
        multiple
        name="verticalImages"
        onChange={(e) => setUrlVerticalImgArray(e.target.files)}
      />
      <div className="container-btn">
        <button type="button" onClick={() => setStep(1)} className="btn-create">Volver</button>
        <button type="submit" className="btn-create">Agregar proyecto</button>
      </div>
    </form>
  );

  return (
    <section>
      <div className="container">
        <h3>Agregar Proyecto</h3>
        {step === 1 ? renderStep1() : renderStep2()}
      </div>
    </section>
  );
};

export default CreateProject;