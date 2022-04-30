import perfil from './imagens/perfil.jpg';
import perfil2 from './imagens/perfil2.jpg';
import perfil3 from './imagens/perfil3.jpg';
import perfil4 from './imagens/perfil4.jpg';

function Perfil() {
  return (
    <>
      <div className="informacoes">
            <div className="container-informacoes">
                <div className="mudar-perfil">
                    <div className="perfil-informacoes">
                        <img src={perfil} className="foto-informacoes" alt="perfil" />
                        <h1>user.name18</h1>
                        <p>user.name18</p>
                    </div>

                    <p className="mudar">Mudar</p>
                </div>

                <div className="sugestoes">
                    <div className="sugestoes-texto">
                            <h1>Sugestões para você</h1>
                            <p>Ver tudo</p>
                    </div>

                    <div className="sugestoes-container">
                        <div className="perfil-sugestoes">
                            <img src={perfil} className="foto-sugestoes" alt="perfil" />
                            <h1>user.name19</h1>
                            <p>Seguido(a) por user.name2 e ...</p>
                        </div>

                        <p className="seguir">Seguir</p>
                    </div>

                    <div className="sugestoes-container">
                        <div className="perfil-sugestoes">
                            <img src={perfil2} className="foto-sugestoes" alt="perfil" />
                            <h1>user.name90</h1>
                            <p>Seguido(a) por user.name98 e ...</p>
                        </div>

                        <p className="seguir">Seguir</p>
                    </div>

                    <div className="sugestoes-container">
                        <div className="perfil-sugestoes">
                            <img src={perfil3} className="foto-sugestoes" alt="perfil" />
                            <h1>user.name56</h1>
                            <p>Seguido(a) por user.name5 e ...</p>
                        </div>

                        <p className="seguir">Seguir</p>
                    </div>

                    <div className="sugestoes-container">
                        <div className="perfil-sugestoes">
                            <img src={perfil4} className="foto-sugestoes" alt="perfil" />
                            <h1>user.name82</h1>
                            <p>Seguido(a) por user.name22 e ...</p>
                        </div>

                        <p className="seguir">Seguir</p>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer-link">
                        <a href="https://about.instagram.com/">Sobre</a>
                        <a href="https://help.instagram.com/">Ajuda</a>
                        <a href="https://about.instagram.com/blog">Imprensa</a>
                        <a href="https://developers.facebook.com/docs/instagram">API</a>
                        <a href="https://about.instagram.com/about-us/careers">Carreiras</a>
                        <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">Privacidade</a>
                        <a href="https://help.instagram.com/581066165581870">Termos</a>
                        <a href="https://www.instagram.com/explore/locations/">Localizações</a>
                        <a href="https://www.instagram.com/directory/profiles/">Principais contas</a>
                        <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
                        <a href="https://www.instagram.com/">Idioma</a>
                    </div>             

                    <p>© 2022 INSTAGRAM FROM META</p>
                </div>
            </div>
      </div>
    </>
  );
}

export default Perfil;