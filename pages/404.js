import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="w3-padding-large" id="main">
            <div className="w3-content w3-padding-64 w3-center">       
                <h1>Sorry</h1>
                <h3>That page could not be found</h3>
            </div>
        </div>
        
     );
}
 
export default NotFound;