fetch('/props.json')
  .then(response => response.json())
  .then(PropsJson => {
    const nomeDoSite = PropsJson["nome-do-site"];
    const nomeSkye = PropsJson["nome-skye"];
    const userSkye = PropsJson["usuario"];
    const nomeOffTopic = PropsJson["nome-grupo-telegram"];
    const linkOffTopic = PropsJson["link-grupo-telegram"];
    
    function modificarElementosViaJson() {
      document.title = nomeDoSite;
      document.getElementById("nome-do-site").textContent = nomeDoSite;
      document.getElementById("nome").textContent = nomeSkye;
      document.getElementById("usuario").textContent = userSkye;
      document.getElementById("nome-telegram").textContent = nomeOffTopic;
      document.getElementById("link-telegram").href = linkOffTopic;
    }
    
    modificarElementosViaJson();
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
