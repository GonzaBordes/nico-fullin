import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaSpinner } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";

const CreateProject = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
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
    homeText: "",
    homeTextEN: "",
    projectHeroText: "",
    projectHeroTextEN: "",
    projectSecondText: "",
    projectSecondTextEN: "",
    leftBlurBackground: "",
    rightBlurBackground: "",
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
    setLoading(true);
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
      await addDoc(collection(db, "proyectos"), {
        ...formData,
        category,
        categoryEN,
        logo: urlLogoPath,
        heroImgs: urlHeroImgsPaths,
        horizontalImgArray: urlHorizontalImgArrayPaths,
        verticalImgArray: urlVerticalImgArrayPaths,
      });
      // Mostrar toast de éxito
      toast.success("Proyecto creado");

      // Esperar 3 segundos antes de redirigir a /admin/
      setTimeout(() => {
        setLoading(false);
        navigate("/admin/");
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
      toast.error("Error al agregar proyecto.");
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
      {urlLogo && <p>Archivo cargado: {urlLogo.name}</p>}
      <label>Imagen principal</label>
      <input
        type="file"
        name="mainImage"
        onChange={(e) => setUrlHeroImgs(e.target.files)}
      />
      {urlHeroImgs.length > 0 && <p>{urlHeroImgs.length} archivos cargados</p>}
      <label>Descripción corta</label>
      <textarea
        name="homeText"
        value={formData.homeText}
        onChange={handleChange}
        placeholder="Ingresar descripción"
      />
      <label>Short description</label>
      <textarea
        name="homeTextEN"
        value={formData.homeTextEN}
        onChange={handleChange}
        placeholder="Enter short description"
      />
      <label>Texto principal en detalle del proyecto</label>
      <textarea
        name="projectHeroText"
        value={formData.projectHeroText}
        onChange={handleChange}
        placeholder="Ingresar texto principal"
      />
      <label>Main text in project detail</label>
      <textarea
        name="projectHeroTextEN"
        value={formData.projectHeroTextEN}
        onChange={handleChange}
        placeholder="Enter main text in English"
      />
      <label>Texto secundario en detalle del proyecto</label>
      <textarea
        name="projectSecondText"
        value={formData.projectSecondText}
        onChange={handleChange}
        placeholder="Ingresar texto secundario"
      />
      <label>Secondary text in project detail</label>
      <textarea
        name="projectSecondTextEN"
        value={formData.projectSecondTextEN}
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
        name="leftBlurBackground"
        value={formData.leftBlurBackground}
        onChange={handleChange}
        placeholder="Ingresar color principal"
      />
      <label>Color secundario</label>
      <input
        type="text"
        name="rightBlurBackground"
        value={formData.rightBlurBackground}
        onChange={handleChange}
        placeholder="Ingresar color secundario"
      />
      <label>Imágenes de slider horizontal</label>
      <input
        type="file"
        multiple
        name="sliderImages"
        onChange={(e) => setUrlHorizontalImgArray(e.target.files)}
      />
      {urlHorizontalImgArray.length > 0 && <p>{urlHorizontalImgArray.length} archivos cargados</p>}
      <label>Imágenes verticales</label>
      <input
        type="file"
        multiple
        name="verticalImages"
        onChange={(e) => setUrlVerticalImgArray(e.target.files)}
      />
      {urlVerticalImgArray.length > 0 && <p>{urlVerticalImgArray.length} archivos cargados</p>}
      <div className="container-btn">
        <button type="button" onClick={() => setStep(1)} className="btn-create">Volver</button>
        <button type="submit" className="btn-create add">{loading ? <FaSpinner className="spinner-icon" /> : "+ Agregar proyecto"}</button>
      </div>
    </form>
  );

  return (
    <section>
      <div className="container container-add-project">
        <h3>Agregar Proyecto</h3>
        {step === 1 ? renderStep1() : renderStep2()}
        <Toaster
            position="top-center"
            reverseOrder={true}
        />
      </div>
    </section>
  );
};

export default CreateProject;