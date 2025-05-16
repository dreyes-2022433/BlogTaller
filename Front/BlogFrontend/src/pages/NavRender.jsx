import { useEffect } from "react";
import { Tabs,TabList } from "@chakra-ui/react";
import { Navpages } from "../components/Nav/Nav";
import { useCourse } from "../shared/hooks/Course/UseCourse";


export const NavRender = () => {
    const {courses, getCourses} = useCourse()
    useEffect(() => {
        getCourses()
    }, [])
    return (
        <>
        <Tabs variant='soft-rounded' colorScheme='green' color='white'>
            <TabList>
            {courses?.map((course) => (
        <Navpages 
        key={course._id}
        courseName={course.courseName}/>
           )) }
           </TabList>
        </Tabs>
        </>
    )
}