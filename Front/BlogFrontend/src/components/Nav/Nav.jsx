import { Tab } from "@chakra-ui/react";


   export const Navpages = ({courseName, setSelectedCourse}) => {
    
    return (
        
<>
   <Tab onClick={() => setSelectedCourse(courseName)}>
        {courseName}
    </Tab>
 
</>
    )

}