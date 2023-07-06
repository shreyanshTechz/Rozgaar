import { useState,useEffect } from "react";

const useFetch = ()=>{
    const [data,setData] = useState([]);
    const [isloading,setisloading]  = useState(false);
    const [error,seterror] = useState(null); 
    const getData = async ()=>{
        setisloading(true);
        try{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
           }
           
           let response = await fetch("https://remotive.com/api/remote-jobs?search=front%20end", { 
             method: "GET",
             headers: headersList
           });
           
           let d = await response.json();
           setData(d['jobs']);
           console.log(d[jobs]);
        } catch (error){
            seterror(error);
            // alert("There is an error");
        } finally {
            // setData(d['jobs']);
            setisloading(false);
        }
    }
    
    
   
    useEffect(() => {
     getData();
    }, []);
    
    const refetch = ()=>{
        setisloading(true);
        getData();
    }
    
    return {data,isloading,error,refetch};
}

export default useFetch;