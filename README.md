# NEON WORLD

Experiência urbana 3D em primeira pessoa para navegador, inteiramente em português do Brasil. O jogador dirige pela cidade de Nova Aurora a partir do cockpit, pode abandonar o veículo e explorar as ruas a pé, além de usar um player multimídia interativo integrado ao painel do carro.

## Executar

O build final está incluído no repositório. Inicie um servidor local:

```bash
python3 -m http.server 8080
```

Abra `http://localhost:8080` em Chrome, Edge ou Firefox.

O Service Worker salva `index.html` e `game.js` no cache após o primeiro carregamento. A partir daí, a cidade e todos os recursos procedurais continuam disponíveis offline. Conteúdo carregado no player do carro ainda depende da fonte externa escolhida.

## Desenvolvimento

```bash
npm install
npm run build
npm run dev
```

O código-fonte está em `src/app.js`. O comando de build empacota Three.js e a aplicação em `game.js`, sem dependências externas em tempo de execução.

## Experiência

- Cidade 3D única chamada Nova Aurora
- Direção integralmente em primeira pessoa
- Cockpit modelado com volante, painel, capô e para-brisa
- Entrada e saída do veículo a qualquer momento quando ele estiver parado
- Exploração a pé com câmera livre, corrida, salto e colisões
- Centenas de edifícios procedurais com fachadas iluminadas
- Avenidas, cruzamentos, calçadas, parques, árvores e sinalização
- Tráfego urbano independente
- Chuva dinâmica e pavimento molhado
- Iluminação física, reflexos, sombras suaves, neblina e tone mapping ACES
- Bloom seletivo em letreiros, faróis e iluminação urbana
- Menu cinematográfico renderizado sobre a cidade real
- Presets Frio, Equilibrado, Alto e Cyberpunk
- Resolução dinâmica e limite de 60 FPS
- Salvamento local da posição, ajustes e endereço do player
- Pausa automática quando a aba fica oculta
- Interface responsiva para computadores e notebooks

## Controles

| Ação | Controle |
|---|---|
| Olhar | Mouse |
| Acelerar / andar | `W` ou `↑` |
| Frear / ré | `S` ou `↓` |
| Virar / mover lateralmente | `A` `D` ou `←` `→` |
| Nitro / correr | `Shift` |
| Sair ou entrar no carro | `F` |
| Abrir multimídia do carro | `R` |
| Saltar a pé | `Espaço` |
| Pausar | `Esc` |

Clique na imagem do jogo para capturar novamente o mouse depois de fechar um menu.

## Multimídia do carro

1. Entre no veículo.
2. Pressione `R` para abrir o painel interativo.
3. Cole um link completo ou um código de `iframe` no campo inferior.
4. Pressione **CARREGAR**.
5. Use o mouse diretamente sobre o player para iniciar, pausar ou alterar o volume.
6. Pressione `R`, `Esc` ou o botão `×` para voltar à direção.

Links comuns do YouTube, YouTube Music, `youtu.be` e Vimeo são convertidos automaticamente para seus players incorporáveis. Endereços que já apontam para um player `embed` também são aceitos.

Alguns sites enviam `X-Frame-Options` ou uma política CSP que proíbe incorporação. Essa decisão pertence ao site de origem e não pode ser contornada pelo jogo. O navegador também exige uma ação do usuário para iniciar áudio ou vídeo.

## Salvamento

O progresso é salvo em `localStorage` a cada 60 segundos, ao pausar e ao voltar para o menu. São preservados:

- Posição e orientação do veículo
- Link utilizado no painel multimídia
- Qualidade gráfica
- Campo de visão
- Volume do veículo

O botão **CONTINUAR** aparece disponível quando existe um salvamento local.

## Tecnologia

- Three.js 0.170
- WebGL2 com fallback WebGL
- Materiais PBR e `MeshPhysicalMaterial`
- EffectComposer e Unreal Bloom
- Geometria, texturas, fachadas e letreiros gerados em tempo de execução
- Web Audio para o motor elétrico
- Service Worker para cache offline
- HTML, CSS e JavaScript sem assets gráficos externos
