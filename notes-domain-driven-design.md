DDD - Domain Driven Design
    - Como desenhar o software guiado ao domínio.
        - Domínio = Core da aplicação.
    - Criador do DDD: Eric Evans - 2003

    - A grande complexidade de desenvolver um software é por conta da comunicação, que pode não ser a mesma em diferentes contextos, entendimento de negócio por diversos ângulos.
    Por isso existem as tecnicas de Domain Driven Design.

    - Como DDD pode ajudar? 
        Entender com profundidade o DOMÍNIO E SUBDOMINIO da aplicação.
            Domínio = coração do negócio.
            Subdominios = partes do sistema que em conjunto fazem parte de um domínio específico.
        Definição de linguagem universal entre todos os envolvidos do sistema.
        Clareza para definir o que é complexidade do negócio e complexidade técnica.

    - Tipos de subdominios
        Core Domain
        Support Subdomain 
        Generic Subdomain

    - Bounded Contexts -  Contexto Delimitado
        É uma divisão explicita dentro de um modelo. E dentroro desse contexto, existe uma linguagem especifica mencionada.

    - Contexto
        Palavras iguais que representam coisas diferentes, muito provavelmente estão em contextos diferentes.
        Exemplo: 
            Serviço de vendas tem um módulo de tickets
            Serviço de suporte ao cliente também tem um módulo de tickets.

            Ambas as palavras "tickets" são iguais, mas em contextos diferentes.
        
    