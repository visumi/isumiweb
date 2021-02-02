import IsuButton from './components/button'

function Header() {
    return (
        <div className="flex flex-row justify-between">
            <h1 className="font-serif font-black text-4xl my-4 mx-44">isumi</h1>
            <div className="flex flex-row justify-between my-4 mx-40">
                <IsuButton name="Sobre"></IsuButton>
                <IsuButton name="Projetos"></IsuButton>
                <IsuButton name="Contato"></IsuButton>
            </div>
        </div>
    );
}

export default Header;