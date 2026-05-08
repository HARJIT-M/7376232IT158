import React , {useState,useEffect} from "react";
import "./App.css"

function App()
{
  const [notification , setNotification] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState("");

  useEffect(()=> {
    fetch("http://4.224.186.213/evaluation-service/notifications")
    .then((Response)=>
      {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
    .then((Data)=>
      {
        setNotification(data);
        setLoading(false);
      })
      .catch((err) => 
        {
          setError(error);
          setLoading(false);
        })
  },[])

  return
  (
    <div className="heading">
      <h2>Notification statistics</h2>
    </div>

  )
}