function toggleMode() {
  // Criando a função 'toggleMode' que será incorporada no HTML através do atributo 'onclick' (em <div id="switch" onclick="toggleMode()"). Ela será executada com a finalidade de habilitar o botão que alternará entre o dark mode e o light mode.
  const html = document.documentElement
  // É declarada a variável (constante e imutável) chamada 'html'. O 'document'  é um objeto especial no navegador que representa o documento web atual, ou seja, a página. E 'documentElement' é uma propriedade desse objeto (página) que se refere ao elemento raiz do documento HTML, que é geralmente o elemento <html>.
  if (html.classList.contains("light")) {
    // No JavaScript, o 'if' é uma estrutura de controle de fluxo que permite que você execute um bloco de código se uma determinada condição for verdadeira. É uma ferramenta fundamental para controlar o fluxo de um programa JavaScript, permitindo que você tome decisões com base em condições específicas, o que torna seu código mais dinâmico e interativo. Você pode usar "if" em conjunto com outras estruturas de controle de fluxo, como "else" (para lidar com casos alternativos) e "else if" (para lidar com múltiplas condições).
    // É selecionado o objeto 'html' para receber o comando que será desenvolvido.
    // O atributo 'classList' serve para permitir a adição, remoção e verificação de classes CSS em um elemento HTML de forma programática (nesse caso a tag <html>). Isso é especialmente útil para modificar a aparência ou o comportamento de elementos HTML em resposta a eventos ou ações do usuário, sem a necessidade de manipular diretamente o atributo class do elemento.
    // O método 'contains' serve para verificar se uma classe está presente em um elemento (nesse caso a classe 'light').
    html.classList.remove("light")
    // O método 'remove' é utilizado para remover a classe 'light'. Essa instrução é traduzida da seguinte maneira: se conter a classe 'light' na lista de classes da tag <html>, remova.
  } else {
    html.classList.add("light")
    // O 'else' é uma estrutura de controle de fluxo tal qual o 'if', porém possui o valor contrário (senão). Ou seja senão houver a classe 'light', ele adicionará com base no método 'add'.
  }

  // Todo o código proveniente de 'if' e o 'else' utilizados na função podem ser substituídos tranquilamente por uma só ferramenta JavaScript que é própria para casos de alternância: "html.classList.toggle('light')". As estruturas de controle de fluxo foram utilizadas para fins de compreensão de suas aplicações.

  const img = document.querySelector("#profile img")
  // O método 'querySelector' permite selecionar um elemento HTML em uma página da web com base em um seletor CSS. Ele serve para localizar e selecionar elementos específicos em uma página da web, permitindo que você interaja com esses elementos ou os manipule de várias maneiras usando JavaScript. Isso é especialmente útil quando você deseja acessar elementos HTML específicos, como botões, formulários, imagens, links, etc., para adicionar interatividade ou modificar o conteúdo da página dinamicamente.

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    // O método 'setAttribute' é uma função em JavaScript que permite definir ou modificar atributos de elementos HTML. Ele serve para modificar dinamicamente atributos HTML de elementos na página web. Isso é útil quando você deseja adicionar, alterar ou remover atributos, como "src" para imagens, "href" para links, "class" para classes CSS, etc., com base em lógica ou eventos no seu código JavaScript.
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, com óculos de sol preto e fundo em degradê do lilás para o azul."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
