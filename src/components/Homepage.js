import {FaTwitter,FaGithub} from "react-icons/fa" 
const Homepage =()=>{
    return(
        <>
         <section className="homepage">
            
          <div className="overlay">
             <h1>Abdul Rasheed</h1> 
             <p>Front-end Web Developer</p>
            <ul>
                <li><a href="https://twitter.com/_Abdul_Rasheed_" target="_blank" rel="noopenneer   norefferer  "><FaTwitter/></a></li> 
                <li><a href="https://github.com/rasheed1998" target="_blank" rel="noopenneer    norefferer  "><FaGithub/></a></li>
            </ul>
          </div>
         </section>
        </>
    )

    }
export default Homepage