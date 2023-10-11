import './styles.css';
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';

export default function Catalog(){
    return(
        <>
            <Header />
            <main className='ct-catalog-main'>
                <section id="ct-catalog-section" className='ct-container'>
                    <div className='ct-seach-bar-container'>
                        <SearchBar />
                    </div>
                    <div className='ct-catalog-cards-container'>
                        <div>card</div>
                    </div>
                </section>
            </main>
        </>
        
    );
}