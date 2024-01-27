/**
 * Importando o Css
 */
import "./Banner.css"


//  1º Versao de como fazer


/*
//  Componente Banner

function Banner(){
    
    //  () => no return indica que é um return com mutiplas linhas.
    
    return (
        
        //  JSX -> parace com o html mas não é.
        
        <header className="banner">
            <img src="./images/banner.png" alt="Banner do projeto Organo"/>
        </header>
    );
};

export default Banner;
*/

//  2º Opção, com index.

export const Banner = () => {
    return(
        <header className="banner">
            <img src="./images/banner.png" alt="Banner do projeto Organo"/>
        </header>
    )
}