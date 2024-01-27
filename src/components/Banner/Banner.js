/**
 * Importando o Css
 */
import "./Banner.css"

/**
 * Componente Banner
 */
function Banner(){
    /**
     * () => no return indica que é um return com mutiplas linhas.
     */
    return (
        /**
         * JSX -> parace com o html mas não é.
         */
        <header className="banner">
            <img src="./images/banner.png" alt="Banner do projeto Organo"/>
        </header>
    );
};

export default Banner;