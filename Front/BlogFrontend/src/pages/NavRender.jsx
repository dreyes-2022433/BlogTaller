import { useEffect } from "react";
import { Tabs,TabList,Tab } from "@chakra-ui/react";
import { Navpages } from "../components/Nav/Nav";
import { useCourse } from "../shared/hooks/Course/UseCourse";


export const NavRender = ({ setSelectedCourse }) => {
    const {courses, getCourses} = useCourse()
    useEffect(() => {
        getCourses()
    }, [])
    return (
        <>
        <Tabs variant='soft-rounded' colorScheme='green' color='white'>
            <TabList>
                <Tab onClick={() => setSelectedCourse(null)}>All</Tab>
            {courses?.map((course) => (
       <Tab key={course._id} onClick={() => setSelectedCourse(course.courseName)}>              
            {course.courseName}
          </Tab>
           )) }
           </TabList>
        </Tabs>
        </>
    )
}