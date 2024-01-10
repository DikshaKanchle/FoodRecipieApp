import Sandbox from '../pages/Sandbox';
import Home from '../pages/Home';
import {Routes,Route} from 'react-router-dom';


const Routing = ()=>{

    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sandbox' element={<Sandbox />} />
        </Routes>
    </>
}

export default Routing;