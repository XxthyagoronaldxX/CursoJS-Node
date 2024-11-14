const xmlString = /* xml */ `
    <frota>
      <informacoes>
        <nomeEmpresa>Transportes Rapidez</nomeEmpresa>
        <sede>
          <rua>Rua da Logística, 456</rua>
          <cidade>Rio de Janeiro</cidade>
          <estado>RJ</estado>
          <cep>20000-000</cep>
        </sede>
        <telefone>(21) 9876-5432</telefone>
      </informacoes>
      <veiculos>
        <veiculo>
          <modelo>Mercedes-Benz Sprinter</modelo>
          <ano>2020</ano>
          <placa>XYZ-1234</placa>
          <disponivel>true</disponivel>
        </veiculo>
        <veiculo>
          <modelo>Volkswagen Delivery</modelo>
          <ano>2018</ano>
          <placa>ABC-5678</placa>
          <disponivel>false</disponivel>
        </veiculo>
        <veiculo>
          <modelo>Ford Cargo</modelo>
          <ano>2021</ano>
          <placa>DEF-9101</placa>
          <disponivel>true</disponivel>
        </veiculo>
      </veiculos>
    </frota>
`;

function parseXml(xmlStr) {
    const parser = new DOMParser();
    return parser.parseFromString(xmlStr, "text/xml");
}

function initEmpresa(xmlObject) {
    const infoElement = xmlObject.querySelector("informacoes");

    const cidade = infoElement.querySelector("cidade").textContent.concat(", ", infoElement.querySelector("estado").textContent);

    document.getElementById("empresa-nome").innerHTML = infoElement.querySelector("nomeEmpresa").textContent;
    document.getElementById("telefone").innerHTML = infoElement.querySelector("telefone").textContent;
    document.getElementById("rua").innerHTML = infoElement.querySelector("rua").textContent;
    document.getElementById("cidade").innerHTML = cidade;
    document.getElementById("cep").innerHTML = infoElement.querySelector("cep").textContent;
}

function initVeiculos(xmlObject) {
    const veiculoXmlElements = xmlObject.querySelectorAll("veiculo");
    const veiculosElement = document.getElementById("veiculos");

    veiculosElement.innerHTML = "";

    for (const veiculoXml of veiculoXmlElements) 
        veiculosElement.innerHTML += genVeiculoElement(veiculoXml);
}

function genVeiculoElement(veiculoXml) {
    return /*html*/`
    <tr>
        <td>${veiculoXml.querySelector("modelo").textContent}</td>
        <td>${veiculoXml.querySelector("ano").textContent}</td>
        <td>${veiculoXml.querySelector("placa").textContent}</td>
        <td>${veiculoXml.querySelector("disponivel").textContent}</td>
    </tr>
    `;
}

const xmlObject = parseXml(xmlString);

initEmpresa(xmlObject);
initVeiculos(xmlObject);