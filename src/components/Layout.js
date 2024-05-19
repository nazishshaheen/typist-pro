import '../style.css';
import Header from './Header';
import InputContainer from './InputContainer';
import Result from './Result';

function Layout() {
    return (
        <div className="Container Justify-content-center">
            <div className="Container-child">
                <Header />
                <Result />
                <InputContainer />
            </div>
        </div>
    )
}

export default Layout;