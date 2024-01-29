import { redirect, useLoaderData } from "react-router-dom";
import { getUser } from "../Services/AuthenticationApis"

function Home() {
  const {email, user} = useLoaderData();
  return (
    <div>
      hello👋{user} , {email}
    </div>
  )
}

export default Home


export async function loader() { 
  const token = localStorage.getItem('access_token');
  if(!token) return redirect('/login')
  const data = await getUser(token);
  console.log(data)
  return data;
}