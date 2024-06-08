import Potato from '../Components/Potato';
import PotatoDiseases from '../Components/PotatoDiseases';
import PotatoDiagnosis from '../Components/PotatoDiagnosis';
import Footer from '../Components/Footer';

function Home() {
    return(
        <div>
            <PotatoDiagnosis />
            <Potato/>
            <PotatoDiseases />
            <Footer/>
        </div>        
    );
}
export default Home;
