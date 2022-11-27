import { useEffect, useState } from "react"

const useSeller = email => {
    const [isAdmin ,setIsAdmin] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data)
        })
    },[email])
    return [isAdmin]
}

export default useSeller;