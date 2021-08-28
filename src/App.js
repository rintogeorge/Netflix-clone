import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import {Originals,Trending, Action, Comedy, Horror, Romance, Documentaries} from "./urls"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
   <NavBar/>
   <Banner/>
   <RowPost urls={Originals} title='Netflix Oiginals'/>
   <RowPost urls={Trending} title='Trending' isSmall />
   <RowPost urls={Action} title='Action' isSmall />
   <RowPost urls={Comedy} title='Comedy' isSmall />
   <RowPost urls={Horror} title='Horror' isSmall />
   <RowPost urls={Romance} title='Romance' isSmall />
   <RowPost urls={Documentaries} title='Documentaries' isSmall />


   </div>

  );
}

export default App;
