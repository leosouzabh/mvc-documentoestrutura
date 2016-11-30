import {currentInstance} from './controller/DocEstrutura';



var json = `
{
    "label": "ESTRUTURA DO DOCUMENTO",
    "id": "root",
    "seq": 0,
    "tipo": "agregador",
    "itens": [{
        "label": "NOME",
        "id": "texto1",
        "chave": "texto1",
        "seq": 1,
        "obrigatorio": false,
        "regex": "",
        "tipo": "texto"
    }, {
        "label": "IDADE",
        "id": "numero2",
        "chave": "numero2",
        "obrigatorio": false,
        "regex": "",
        "tipo": "numero"
    }, {
        "label": "ENDEREÇO",
        "id": "agregador3",
        "chave": "agregador3",
        "seq": 3,
        "tipo": "agregador",
        "itens": [{
            "label": "LOG",
            "id": "texto4",
            "chave": "texto4",
            "seq": 4,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "BAIRRO",
            "id": "texto5",
            "chave": "texto5",
            "seq": 5,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }]
    }, {
        "label": "LISTAGEM",
        "id": "listagem6",
        "chave": "listagem6",
        "seq": 6,
        "tipo": "listagem",
        "itens": [{
            "label": "NOME",
            "id": "texto7",
            "chave": "texto7",
            "seq": 7,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "CPF",
            "id": "texto8",
            "chave": "texto8",
            "seq": 8,
            "obrigatorio": false,
            "regex": "",
            "tipo": "texto"
        }, {
            "label": "CONCURSADO",
            "id": "lista10",
            "chave": "lista10",
            "obrigatorio": false,
            "tipo": "lista",
            "seq": 10,
            "opcoes": ["Sim", "Não", "Sim", "Não"]
        }, {
            "label": "NOME DO GRUPO",
            "id": "agregador11",
            "chave": "agregador11",
            "seq": 11,
            "tipo": "agregador",
            "itens": [{
                "label": "CTPS",
                "id": "texto12",
                "chave": "texto12",
                "seq": 12,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }, {
                "label": "PIS",
                "id": "texto13",
                "chave": "texto13",
                "seq": 13,
                "obrigatorio": false,
                "regex": "",
                "tipo": "texto"
            }]
        }]
    }]
}
`;

currentInstance().iniciaConstrucao(json, false);
$("#btn-parse").on('click', function(){
    currentInstance().montaJson();
})
