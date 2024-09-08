let dados = [
    {
        titulo: "Bárbaro",
        descricao: `O Bárbaro é um combatente feroz, conhecido por sua força bruta e resistência. 
        Em batalha, eles entram em fúria, aumentando seu poder de ataque e reduzindo o dano recebido. 
        São guerreiros que se destacam em combate corpo a corpo. <br>

        <strong>Perícias</strong>: Atletismo, Intimidação <br>
        <strong>Bônus</strong>: Fúria, resistência aumentada, maior dano em combate corpo a corpo.`,
        link: "https://orbedosdragoes.com/barbaro-dd-5a-edicao/",
        tags: "força bruta fúria combate corpo a corpo resistência barbaro"
    },
    {
        titulo: "Bardo",
        descricao: `O Bardo é um mestre das artes e da magia, capaz de inspirar aliados e confundir inimigos. 
        Sua versatilidade em combate e habilidades de suporte são incomparáveis. <br>
        
        <strong>Perícias</strong>: Persuasão, Enganação, Atuação, Arcanismo <br>
        <strong>Bônus</strong>: Inspiração Bárdica, versatilidade com magia, feitiços de suporte e controle.`,
        link: "https://dndbrasil.fandom.com/pt-br/wiki/Bardo",
        tags: "magia suporte inspiração versatilidade"
    },
    {
        titulo: "Bruxo",
        descricao: `O Bruxo obtém seu poder através de pactos com entidades sobrenaturais. 
        Seu foco está em magias poderosas, mas ele também pode usar armas simples em combate. <br>
        
        <strong>Perícias</strong>: Arcanismo, Religião, Enganação, Intimidação <br>
        <strong>Bônus</strong>: Poderes sobrenaturais com base no pacto, invocação de criaturas e feitiços de pacto.`,
        link: "https://dndbrasil.fandom.com/pt-br/wiki/Brux",
        tags: "magia pacto entidade invocação poder sobrenatural mago"
    },
    {
        titulo: "Clérigo",
        descricao: `O Clérigo é um servo devoto dos deuses, combinando poder divino com cura e suporte. 
        Ele pode usar várias armas, incluindo martelos e maças, e invocar poderosos feitiços.
        <br>
        <strong>Perícias</strong>: Medicina, Religião, Intuição <br>
        <strong>Bônus</strong>: Cura poderosa, feitiços divinos, bênçãos divinas que concedem resistência.`,
        link: "https://orbedosdragoes.com/clerigo-dd-5a-edicao/",
        tags: "magia divina cura suporte combate fé"
    },
    {
        titulo: "Druida",
        descricao: `O Druida é o guardião da natureza, combinando magias naturais com formas animais. 
        Eles podem usar armas simples e algumas armas especiais como a cimitarra.
        <br>
        <strong>Perícias</strong>: Natureza, Medicina, Sobrevivência, Percepção <br>
        <strong>Bônus</strong>: Transformação em animais (Forma Selvagem), controle da natureza, feitiços de cura.`,
        link: "https://nuckturp.com.br/druida-dd-5e-guia-completo-da-classe/",
        tags: "natureza magia cura transformação controle"
    },
    {
        titulo: "Feiticeiro",
        descricao: `O Feiticeiro é um conjurador nato que herda seus poderes de uma linhagem mágica. 
        Seu foco principal é a magia, mas também pode usar algumas armas simples.
        <br>
        <strong>Perícias</strong>: Arcanismo, Intuição, Enganação <br>
        <strong>Bônus</strong>: Magia espontânea de linhagem, manipulação de feitiços (Metamagia), feitiços poderosos.`,
        link: "https://dnd5e.fandom.com/wiki/Sorcerer",
        tags: "magia linhagem poder espontâneo feitiços poderosos"
    },
    {
        titulo: "Guerreiro",
        descricao: `O Guerreiro é um especialista em combate físico, mestre no uso de uma ampla variedade de armas e táticas. 
        Pode utilizar qualquer arma disponível no jogo, sendo altamente versátil.
        <br>
        <strong>Perícias</strong>: Atletismo, Intimidação, História (opcional), Percepção <br>
        <strong>Bônus</strong>: Proficiência em várias armas, ataques extras, uso de táticas de combate.`,
        link: "https://orbedosdragoes.com/feiticeiro-dd-5a-edicao/",
        tags: "combate armas táticas versatilidade"
    },
    {
        titulo: "Ladino",
        descricao: `O Ladino é um mestre da furtividade e do ataque preciso. 
        Capaz de realizar ataques furtivos devastadores, eles utilizam armas leves e discretas.
        <br>
        <strong>Perícias</strong>: Furtividade, Prestidigitação, Enganação, Percepção <br>
        <strong>Bônus</strong>: Ataques furtivos com dano extra, bônus em furtividade e precisão.`,
        link: "https://orbedosdragoes.com/ladino-dd-5a-edicao/",
        tags: "furtividade ataque furtivo precisão astúcia"
    },
    {
        titulo: "Monge",
        descricao: `O Monge é um lutador disciplinado que usa o ki para realizar feitos extraordinários. 
        Ataca com as mãos nuas ou com armas simples e rápidas.
        <br>
        <strong>Perícias</strong>:Acrobacia, Atletismo, Furtividade <br>
        <strong>Bônus</strong>: Uso de ki para ataques extras, aumento de velocidade, combate desarmado eficaz.`,
        link: "https://orbedosdragoes.com/monge-dd-5a-edicao/",
        tags: "ki combate desarmado agilidade mobilidade"
    },
    {
        titulo: "Paladino",
        descricao: `O Paladino é um guerreiro sagrado com poderes divinos. 
        Pode usar espadas longas, martelos de guerra e lançar feitiços divinos para purificar e proteger.
        <br>
        <strong>Perícias</strong>: Intimidação, Religião, Persuasão <br>
        <strong>Bônus</strong>: Ataques sagrados com dano extra, cura de aliados, resistência a efeitos de medo.`,
        link: "https://orbedosdragoes.com/paladino-dd-5a-edicao/",
        tags: "juramento justiça combate divino cura"
    },
    {
        titulo: "Patrulheiro",
        descricao: `O Patrulheiro é um rastreador e especialista em combate à distância. 
        Eles podem usar arcos e espadas com grande eficácia, equilibrando suas habilidades entre sobrevivência e combate.
        <br>
        <strong>Perícias</strong>: Sobrevivência, Natureza, Percepção, Atletismo <br>
        <strong>Bônus</strong>: Bônus em ataques com arco e espada, rastreamento eficaz, habilidades de sobrevivência e combate à distância.`,
        link: "https://orbedosdragoes.com/patrulheiro-dd-5a-edicao/",
        tags: "rastreamento arco e flecha sobrevivência natureza"
    }
];

