import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";


const fetchProyectos = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "proyectos"));
        const proyectosData = [];
        querySnapshot.forEach((doc) => {
          proyectosData.push({ id: doc.id, ...doc.data() });
        });
        return proyectosData;
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
    }
  }

export default fetchProyectos