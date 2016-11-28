'use strict';

var _DocEstrutura = require('./controller/DocEstrutura');

var json = '\n{\n    "label": "ESTRUTURA DO DOCUMENTO",\n    "id": "root",\n    "seq": 0,\n    "tipo": "agregador",\n    "itens": [{\n        "label": "Campo Texto",\n        "id": "texto3",\n        "chave": "texto3",\n        "seq": 3,\n        "obrigatorio": false,\n        "regex": "",\n        "tipo": "texto"\n    }, {\n        "label": "LISTAGEM",\n        "id": "listagem1",\n        "chave": "listagem1",\n        "seq": 1,\n        "tipo": "listagem",\n        "itens": [{\n            "label": "Campo Texto",\n            "id": "texto2",\n            "chave": "texto2",\n            "seq": 2,\n            "obrigatorio": false,\n            "regex": "",\n            "tipo": "texto"\n        }, {\n            "label": "LISTAGEM",\n            "id": "listagem4",\n            "chave": "listagem4",\n            "seq": 4,\n            "tipo": "listagem",\n            "itens": [{\n                "label": "Campo Texto",\n                "id": "texto5",\n                "chave": "texto5",\n                "seq": 5,\n                "obrigatorio": false,\n                "regex": "",\n                "tipo": "texto"\n            }]\n        }]\n    }]\n}\n';

(0, _DocEstrutura.currentInstance)().iniciaConstrucao(json, false);
//# sourceMappingURL=boot.js.map