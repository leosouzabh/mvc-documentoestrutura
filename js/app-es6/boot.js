import {DocEstrutura} from './controller/DocEstrutura';


var json = `
{
    "label": "PAI DE TODOS SEFIP",
    "id": "root",
    "seq": 0,
    "tipo": "agregador",
    "itens": [{
        "label": "Numero",
        "id": "texto1",
        "chave": "texto1",
        "seq": 1,
        "obrigatorio": false,
        "regex": "",
        "tipo": "texto"
    }, {
        "label": "Campo Controller",
        "id": "texto2",
        "chave": "texto2",
        "seq": 2,
        "obrigatorio": false,
        "regex": "",
        "tipo": "texto"
    }, {
        "label": "ENDEREÇAMENTO",
        "id": "agregador3",
        "chave": "agregador3",
        "seq": 3,
        "tipo": "agregador",
        "itens": [{
            "label": "Rua",
            "id": "texto4",
            "chave": "texto4",
            "seq": 4,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "Cidade",
            "id": "texto5",
            "chave": "texto5",
            "seq": 5,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "Bairro",
            "id": "texto6",
            "chave": "texto6",
            "seq": 6,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }]
    }, {
        "label": "EMPRESA",
        "id": "agregador7",
        "chave": "agregador7",
        "seq": 7,
        "tipo": "agregador",
        "itens": [{
            "label": "CNPJ",
            "id": "texto8",
            "chave": "texto8",
            "seq": 8,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "Filiada ao Sindicato",
            "id": "lista10",
            "chave": "lista10",
            "obrigatorio": false,
            "tipo": "lista",
            "seq": 10,
            "opcoes": ["Sim", "Não"]
        }, {
            "label": "SINDICATO",
            "id": "agregador11",
            "chave": "agregador11",
            "seq": 11,
            "tipo": "agregador",
            "itens": [{
                "label": "Nome",
                "id": "texto12",
                "chave": "texto12",
                "seq": 12,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }, {
                "label": "Registro Social",
                "id": "texto13",
                "chave": "texto13",
                "seq": 13,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }]
        }]
    }, {
        "label": "ITENS SEFIP",
        "id": "listagem14",
        "chave": "listagem14",
        "seq": 14,
        "tipo": "listagem",
        "itens": [{
            "label": "Inscrição Estadual",
            "id": "texto16",
            "chave": "texto16",
            "seq": 16,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "Registro de Folha",
            "id": "texto17",
            "chave": "texto17",
            "seq": 17,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "COLABORADOR",
            "id": "agregador15",
            "chave": "agregador15",
            "seq": 15,
            "tipo": "listagem",
            "itens": [{
                "label": "Nome do Colaborador",
                "id": "texto18",
                "chave": "texto18",
                "seq": 18,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }, {
                "label": "CTPS",
                "id": "texto19",
                "chave": "texto19",
                "seq": 19,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }, {
                "label": "CPF",
                "id": "texto20",
                "chave": "texto20",
                "seq": 20,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }]
        }]
    }]
}
`;

var controller = new DocEstrutura(json);

controller.iniciaConstrucao();