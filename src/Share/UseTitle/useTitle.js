import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Digital toy shop`
    },[title])
}
export default useTitle