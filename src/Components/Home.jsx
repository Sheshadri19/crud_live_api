import react from 'react'
import Navbar from './Navbar'
import { useAuth } from '../AuthPages/Context'
export const Home=()=>{
    
const [auth]=useAuth()
    return (
        <>
     <div className="container"> 
<center><h1>Products</h1>
<h1><img height={"100%"} width={"100%"} src="https://voicebot.ai/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg" alt="" /></h1>
</center>

<pre>
    {JSON.stringify(auth,null,4)}
</pre>

</div> 
        </>
    )
}

