import { Link } from 'react-router-dom';
import logo from "../src/assets/s_logo-removebg-preview.png"

export default function Layout() {
 return (
 <>
<div style={{display:"flex"}}>
<img width={100} src={logo} alt="logo" />
<h1 className='header'>My Portfolio</h1>
</div>
 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
</>
 
 );
}
