import './App.css'; 
import Header from './components/header';
import Story from './components/story';
import Perfil from './components/perfil';
import Feed from './components/feed';
import perfil from './components/imagens/perfil.jpg';
import perfil2 from './components/imagens/perfil2.jpg';
import perfil3 from './components/imagens/perfil3.jpg';
import perfil4 from './components/imagens/perfil4.jpg';
import feed from './components/imagens/feed.jpg';
import feed2 from './components/imagens/feed2.jpg';
import feed3 from './components/imagens/feed3.jpg';
import feed4 from './components/imagens/perfil4.jpg';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Story />

          <Feed perfil={perfil} nome="username18" localizacao="Em casa" feed={feed} curtidas="154 curtidas" titulo=" Olha o que eu fiz" comentarios="Ver todos os 90 comentários"   horario="Há 3 horas"  />
          <Feed perfil={perfil2} nome="username2" localizacao="Restaurante Tudo gostoso" feed={feed2} curtidas="222 curtidas" titulo=" Almoço de hoje, ESQUEÇA 🤤" comentarios="Ver todos os 22 comentários"   horario="Há 2 horas"  />
          <Feed perfil={perfil3} nome="username5" localizacao="Netflix" feed={feed3} curtidas="30 curtidas" titulo=" Amo essa série! ❤️" comentarios="Ver todos os 2 comentários"   horario="Há 18 minutos"  />
          <Feed perfil={perfil4} nome="username3" localizacao="Descobre ai bb" feed={feed4} curtidas="491 curtidas" titulo=" 🔥" comentarios="Ver todos os 543 comentários"   horario="Há 10 horas"  />

          <Perfil />        
        </div>
      </div>
    </>
  );
}

export default App;
