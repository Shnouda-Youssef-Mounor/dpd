import Potato from '../Components/Potato';
import PotatoDiseases from '../Components/PotatoDiseases';
import PotatoDiagnosis from '../Components/PotatoDiagnosis';
function Home() {
    return(
        <div>
            <PotatoDiagnosis />
            <Potato/>
            <PotatoDiseases />
        </div>        
    );
}
export default Home;
