import Form from "./components/Form";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter"
import HiddenSearchBar from "./components/HiddenSearchBar"
import Todos from "./components/Todos"
import ToggleBackgroundColor from "./components/ToggleBackgroundColor"
import {accordionData} from "./utils/content";

const App = () =>{
  
  return (
  //  <Counter/>
  // <Todos />  
  // <ToggleBackgroundColor/>
  // <HiddenSearchBar/>
  <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  // <Form />
  )
}

export default App
