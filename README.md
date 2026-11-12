# NEON WORLD

Experiência urbana 3D em primeira pessoa para navegador, com renderização naturalista, iluminação cinematográfica e interface em português do Brasil. A direção visual usa técnicas comuns a jogos urbanos realistas, sem utilizar marcas, modelos, texturas ou outros recursos de jogos comerciais.

## Executar

O build final está incluído no repositório:

```bash
python3 -m http.server 8080
```

Abra `http://localhost:8080` em Chrome, Edge ou Firefox.

O Service Worker armazena `index.html` e `game.js` após o primeiro acesso. A cidade permanece disponível offline; o conteúdo do player do carro depende da conexão e da disponibilidade da fonte escolhida.

## Desenvolvimento

```bash
npm install
npm run build
npm run dev
```

O código-fonte está em `src/app.js`. O build empacota Three.js e a aplicação em `game.js`, sem bibliotecas externas carregadas durante o jogo.

## Reformulação visual

- Céu físico de fim de tarde com gradiente atmosférico, sol e nuvens
- Iluminação solar quente com sombras suaves acompanhando o jogador
- Tone mapping ACES e exposição adaptada por preset
- Ambient occlusion em qualidade Alta e Ultra Realista
- Bloom seletivo apenas em faróis e elementos emissivos
- Neblina linear para profundidade atmosférica
- Asfalto procedural com granulação, manchas e rachaduras
- Calçadas texturizadas e marcações viárias sem emissão artificial
- Fachadas de concreto, vidro, pedra e metal com reflexos naturais
- Materiais PBR com níveis próprios de rugosidade e metalicidade
- Centenas de edifícios instanciados para reduzir draw calls
- Tráfego, parques, árvores, cruzamentos e iluminação urbana
- Interface com paleta sóbria, acabamento de luxo e sem estética neon excessiva

## Automóvel de luxo

O Aurelis S9 foi remodelado como um sedã híbrido de luxo:

- Pintura escura com clear coat e reflexos físicos
- Grade e rodas com acabamento metálico
- Faróis quentes e lanternas traseiras
- Couro escuro, acabamento interno claro e faixa de madeira
- Detalhes cromados e iluminação ambiente
- Painel de instrumentos digital atualizado em tempo real
- Tela multimídia grande e interativa
- Volante, pilares, capô e interior visíveis em primeira pessoa

## Multimídia

O player inicia com o endereço:

```text
https://invidious.nerdvpn.de/embed/5dPwBWvmcbQ
```

Pressione `R` dentro do carro para liberar o mouse. O endereço pode ser substituído por outro link ou por um código completo de `iframe`.

Links comuns do YouTube, YouTube Music, `youtu.be` e Vimeo são convertidos para seus formatos incorporáveis. URLs que já apontam para um player `embed` são usadas diretamente.

Sites podem bloquear incorporação usando CSP ou `X-Frame-Options`. Essa política pertence à fonte e não é contornada pelo jogo. Se a instância Invidious estiver indisponível, basta colar outra instância ou player compatível.

## Otimização para computadores fracos

WebGL é apropriado para este projeto porque permite usar a GPU diretamente no navegador sem exigir instalação ou um executável específico. A implementação utiliza WebGL2 quando disponível e mantém fallback WebGL.

O jogo detecta a quantidade aproximada de memória e núcleos do computador para selecionar um preset inicial. Também ajusta a resolução durante a execução quando identifica queda de desempenho.

| Preset | Resolução interna | Sombras | Ambient occlusion | Bloom |
|---|---:|---:|---:|---:|
| Frio | 55% dinâmica | Desligadas | Desligado | Desligado |
| Equilibrado | 72% dinâmica | 1024 px | Desligado | Leve |
| Alto | 90% dinâmica | 1536 px | Ligado | Seletivo |
| Ultra Realista | 100% dinâmica | 2048 px | Ligado | Seletivo |

Outras otimizações:

- Limite rígido de 60 FPS
- Geometria instanciada para prédios, árvores, postes e calçadas
- Resolução limitada conforme a densidade de pixels do monitor
- Distância de renderização própria para cada preset
- Neblina ocultando geometria distante
- Chuva desativada no cenário de fim de tarde
- Pausa automática quando a aba fica oculta
- Cache offline de todos os recursos do jogo

## Controles

| Ação | Controle |
|---|---|
| Olhar | Mouse |
| Acelerar / andar | `W` ou `↑` |
| Frear / ré | `S` ou `↓` |
| Virar / mover lateralmente | `A` `D` ou `←` `→` |
| Aceleração máxima / correr | `Shift` |
| Sair ou entrar no carro | `F` |
| Abrir a tela multimídia | `R` |
| Saltar a pé | `Espaço` |
| Pausar | `Esc` |

## Salvamento

O progresso é salvo localmente a cada 60 segundos, ao pausar e ao voltar ao menu. São preservados:

- Posição e orientação do veículo
- Endereço usado na tela multimídia
- Preset gráfico
- Campo de visão
- Volume do veículo

## Tecnologia

- Three.js 0.170
- WebGL2 com fallback WebGL
- EffectComposer
- SSAO
- Unreal Bloom
- Materiais Standard e Physical
- Geometria instanciada
- Texturas procedurais via Canvas
- Web Audio
- Service Worker
