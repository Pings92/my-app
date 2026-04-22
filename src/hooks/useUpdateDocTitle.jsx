import { useEffect } from "react";

const useUpdateDocTitle =(arg) => {

        // const [text, setText] = useState('')

        useEffect(() =>{
        document.title = `Titre: ${arg}`;
        // console.dir(document);
    }, [arg]);

}

export default useUpdateDocTitle
    
