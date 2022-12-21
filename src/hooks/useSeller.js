import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller ,setIsSeller] = useState(false)
    useEffect(()=>{
        fetch(`https://mobiledekho-server.vercel.app/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsSeller(data.isSeller)
        })
    },[email])
    return [isSeller]
}

export default useSeller;