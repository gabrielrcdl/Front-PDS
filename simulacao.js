function updateValue() {
    let tipo = formulario.tipo.value;
    let quantidade = formulario.quantidade.value;
  
    const tabela = { Carrara: 150, Imperador: 200, Turco: 350 };
  
    mensagem.innerHTML = `Você escolheu Mármore ${tipo} e seu investimento será de: R$ ${
      Number(quantidade) * tabela[tipo]
    }`;
}

function updateValue2() {
    let tipo2 = formulario2.tipo2.value;
    let quantidade2 = formulario2.quantidade2.value;
  
    const tabela2 = { Corumba: 100, Perola: 90, Gabriel: 95 };
  
    mensagem2.innerHTML = `Você escolheu Granito ${tipo2} e seu investimento será de: R$ ${
      Number(quantidade2) * tabela2[tipo2]
    }`;
}
























  
   
        


    




