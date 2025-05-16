import { useState } from "react"
import { getCoursesRequest } from "../../../services/api"
import toast from "react-hot-toast"

export const useCourse = () => {
    const [courses, setCourses] = useState(null)
    const getCourses = async () => {
        const response = await getCoursesRequest()
        console.log(response)
        if (response.error) {
            return toast.error(
                response?.error?.response?.data?.message ||
                "Error al obtener las publicaciones"
            )
        }
        setCourses(response.data.courses)
    }
    return {
        courses, //Tiene las publicacioens
        isFetchingPosts: !courses, //Valida si ya respondió el back o no
        getCourses, //Consulta las publicaciones al back
    }
}