import mensagem from './imagens/mensagem.png';
import coracao from './imagens/coracao.png';
import comenta from './imagens/comentar.png';
import salva from './imagens/salva.png';
import pontos from './imagens/pontos.png';
import emoji from './imagens/emoji.png';


function Feed(props) {
  return (
    <>
      <div className="feed">
            <div className="foto1">
                <div className="infomacoes-perfil">
                    <div className="perfil-feed">
                        <div className="story-border-feed"><img src={props.perfil} className="foto-perfil" alt="perfil" /></div>                        
                        <h1>{props.nome}</h1>
                        <h2 className="localizacao">{props.localizacao}</h2>
                    </div>     

                    <img src={pontos} className="pontos" alt="perfil" />
                </div>

                <img src={props.feed} className="foto-feed" alt="foto" />
                
                <div className="interacao">  
                    <div>
                        <img src={coracao} className="coracao" alt="coração" />
                        <img src={comenta} className="coracao" alt="coração" />
                        <img src={mensagem} className="mensagem" alt="mensagem" />
                    </div>                  
                    
                    <img src={salva} className="salva" alt="salva" />
                </div>

                <p><spam>{props.curtidas}</spam></p>

                <p><spam>{props.nome}</spam>{props.titulo}</p>

                <p className="comentario">{props.comentarios}</p>

                <p className="horario">{props.horario}</p> 

                <div className="publicar-comentario">
                    <img src={emoji} className="emoji" alt="emoji" />
                    <input type="text" className="comentar" placeholder="Adicione um comentário..." />
                    <p className="publicar">Publicar</p>
                </div>
            </div>
      </div>
    </>
  );
}

export default Feed;