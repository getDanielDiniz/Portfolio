import Header from "../../Components/Header";
import { SlArrowDown } from "react-icons/sl";
import { MainContext } from "../../Context/Main/MainContext"
import { useContext, useEffect } from "react";
import "./frames.css"
import { Link } from "react-router-dom";
import { ScrollAnimation } from "../../Components/ScrollAnimation";

export default function Frames() {
    
    const {setOpenMenu} = useContext(MainContext)
    
    const {setLoad} = useContext(MainContext)
    useEffect(()=>{
        setLoad(true)
    },[setLoad])

    return (
        <>
            <Header/>
            <main className="bg-frames" id="main">
                <button onClick={()=> setOpenMenu(true)}
                    className="menu-button header-button">
                    <SlArrowDown/>
                </button>

                <div className="paragrafo parallax">
                    <div className="wrapper">
                        <div className="titulo-resumo">
                            <h1 className="titulo-resumo">FFY</h1>
                            <h3 className="subtitulo-resumo">O primeiro frame</h3>
                        </div>
                        <ul className="lista-resumo">
                            <li className="item-resumo">Protótipos simples pois o objetivo era documentação.</li>
                            <li className="item-resumo">Feito no Figma.</li>
                            <li className="item-resumo">O objetivo era controle financeiro.</li>
                            <li className="item-resumo">Meu primero contato com a plataforma e com prototipagem.</li>        
                        </ul>

                    </div>
                </div>
                <div className="img1 parallax"></div>
                
                <div className="paragrafo parallax">
                    <div className="wrapper">
                            <div className="titulo-resumo">
                                <h1 className="titulo-resumo">CQP</h1>
                                <h3 className="subtitulo-resumo">O que mais me marcou</h3>
                            </div>
                            <ul className="lista-resumo">
                                <li className="item-resumo">Feito no Figma.</li>
                                <li className="item-resumo">O objetivo era auxiliar deficientes visuais.</li>
                                <li className="item-resumo">Me marcou pois todo o protótipo foi pensado e testado para ter somente cores vistas por daltônicos.</li>
                                <li className="item-resumo">O frame também tem todos os seus elementos muito grandes para auxiliar deficiências parciais.</li>
                            </ul>
                    </div>
                </div>
                <div className="img2 parallax"></div>

                
                <div className="paragrafo parallax">
                    <div className="wrapper">
                            <div className="titulo-resumo">
                                <h1 className="titulo-resumo">Othoniel Alvim</h1>
                                <h3 className="subtitulo-resumo">O que quero tirar do desenho</h3>
                            </div>
                            <ul className="lista-resumo">
                                <li className="item-resumo">Feito no Figma.</li>
                                <li className="item-resumo">O objetivo um site de divulgação do Psicólogo Othoniel Alvim.</li>
                                <li className="item-resumo">Neste frame tentei sair da minha zona de conforto que é o minimalismo.</li>
                                <li className="item-resumo">Mesmo hoje, após evoluir muito, ainda acho esse frame bonito.</li>
                            </ul>
                    </div>
                </div>
                <div className="img3 parallax"></div>

                
                <div className="paragrafo parallax">
                    <div className="wrapper">
                            <div className="titulo-resumo">
                                <h1 className="titulo-resumo">Logo Próprio</h1>
                                <h3 className="subtitulo-resumo">Minha identidade visual  </h3>
                            </div>
                            <ul className="lista-resumo">
                                <li className="item-resumo">O olho também representa a letra "D", minha inicial.</li>
                                <li className="item-resumo">Meu desejo para o portfólio era fazer algo orgânico.</li>
                                <li className="item-resumo">Por isso, somente o logo foi desenhado, todo o restante foi feito criativamente.</li>
                            </ul>
                    </div>
                </div>
                <div className="img4 parallax"></div>

                <div className="paragrafo parallax">
                    <div className="wrapper">
                            <div className="titulo-resumo">
                                <h1 className="titulo-resumo">Feedback</h1>
                                <h3 className="subtitulo-resumo">o que posso melhorar na sua opinião?  </h3>
                            </div>
                            <p>Fique a vontade para dar críticas construtivas na aba <Link className="link-frames" to="../Feedback">
                            Feedback</Link></p>
                    </div>
                </div>

                <ScrollAnimation/>
            </main>
        </>

    )
}