import LoginScreen from "./modules/login"; //O caminho certo seria "./modules/login/index", porem o próprio typeScript reconhece que a pasta index deve ser importada, então ele importa automaticamente sem precisarmos colocar o nome do arquivo

function App() {
  return <LoginScreen />
}

export default App;
