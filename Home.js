import { useState } from "react";

const Home = () => {
    const [verticals, setverticals] = useState([
      {image:'', title: 'Supply Chain Sustainability', body:'Coming up with the framework for tracking carbon footprint. Track, manage, and reduce carbon footprint in logistics sector.', id: 1 },
      {image:'', title: 'Logistics Worker Wellness', body:'Focused toward driver wellness and safety. Developing the technology for tracking and measuring the driver behaviour and provide recommendation to improve wellness.', id: 2  },
      {image:'', title: 'Algorithms and ML', body:'Developing algorithms, software systems and machine learning techniques for efficient logistics operations.', id: 3  },
      {image:'', title: 'Logistics Infrastructure', body:'Technology development for the better logistics infrastructure. This would include integration of fuel efficient vehicle, drones in warehouse and last mile logistics etc.', id: 4  }
    ]);
    const handleClick = () => {
        console.log('hello, ninjas');
    }
    return ( 
        <div className="home">
            {verticals.map((vertical) => (
              <div className="verticals-preview" key={vertical.id}>
                <h2>{ vertical.title }</h2>
                </div>  
            ))}
        </div>
     );
}
 
export default Home;