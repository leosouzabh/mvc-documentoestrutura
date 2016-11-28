import {currentInstance} from './controller/DocEstrutura';



var json = `
{
    "label": "ESTRUTURA DO DOCUMENTO",
    "id": "root",
    "seq": 0,
    "tipo": "agregador",
    "itens": [{
        "label": "Campo Texto",
        "id": "texto3",
        "chave": "texto3",
        "seq": 3,
        "obrigatorio": false,
        "regex": "",
        "tipo": "texto"
    }, {
        "label": "LISTAGEM",
        "id": "listagem1",
        "chave": "listagem1",
        "seq": 1,
        "tipo": "listagem",
        "itens": [{
            "label": "Campo Texto",
            "id": "texto2",
            "chave": "texto2",
            "seq": 2,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "LISTAGEM",
            "id": "listagem4",
            "chave": "listagem4",
            "seq": 4,
            "tipo": "listagem",
            "itens": [{
                "label": "Campo Texto",
                "id": "texto5",
                "chave": "texto5",
                "seq": 5,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }]
        }]
    }]
}
`;

currentInstance().iniciaConstrucao(json, false);