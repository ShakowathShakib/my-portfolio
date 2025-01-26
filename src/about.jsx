import myImg from './assets/myImg.jpeg'

export default function About() {
     return (
     <div style={{width:"80%", margin:"auto"}}>
     <h2 style={{fontSize:'30px'}}>Sh Shakib</h2>

     <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
     <img width={200} src={myImg} alt="" />

<div>
     <a className='resume' target='_blank' href="https://drive.google.com/file/d/1O0Si9V2yI95Y2Zshe2mwiF3J1Hms9N9F/view?usp=sharing" rel="noreferrer">My Resume</a>
</div>
     </div>

     <p style={{width:'70%'}}>My name is Shakib, and I am currently studying Computer Science and Engineering (CSE). As a budding web developer, I am planning to create an e-commerce website. I prefer utilizing React for this project due to its  component-based architecture, large community and ecosystem, JSX for easy rendering, excellent developer tools.
<br />
I believe React js, virtual DOM, efficient rendering, reusable components will enable me to build a high-performance, scalable, and user-friendly e-commerce platform. I am excited to learn and grow through this project, gaining valuable experience in  front-end development, e-commerce concepts, project management.</p>
     </div>
     );
    }