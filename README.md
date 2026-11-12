# NEON WORLD

Protótipo jogável offline de uma experiência urbana em mundo aberto, com interface integralmente em português do Brasil.

## Executar

O jogo não tem dependências, etapa de compilação ou servidor de aplicação.

### Abrir diretamente

Abra `index.html` em Chrome, Edge ou Firefox. O jogo funciona sem conexão e salva o progresso localmente.

### Servir localmente

Para ativar também o cache do Service Worker:

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080` e carregue a página uma vez. Depois desse primeiro acesso, os arquivos essenciais ficam disponíveis no cache offline.

## Recursos do protótipo

- Cidade noturna procedural com ruas, edifícios, parques, tráfego e chuva
- Seis destinos com identidade visual própria
- Modos visual Realista, Híbrido e Estilizado
- Exploração a pé e entrada ou saída do veículo
- Cinco classes dirigíveis: carro, motocicleta, ônibus, avião e helicóptero
- Física, velocidade e dirigibilidade próprias para cada classe
- Altitude para aeronaves e controle coletivo
- Três distâncias de câmera
- HUD com minimapa, relógio, clima, combustível, integridade e velocímetro
- Garagem para escolher o veículo ativo
- Rádio offline sintetizada com cinco estações
- Atalho para abrir Poketube.fun em uma janela externa
- Presets Frio, Equilibrado, Alto, Cyberpunk e Estilizado
- Resolução dinâmica e limite de atualização de 60 FPS
- Pausa automática quando a aba fica oculta
- Salvamento automático a cada 60 segundos em IndexedDB, com fallback em localStorage
- Layout responsivo para telas menores
- Código e interface sem dependências ou recursos gráficos externos

## Controles

| Ação | Tecla |
|---|---|
| Acelerar / andar | `W` ou `↑` |
| Frear / ré | `S` ou `↓` |
| Virar / mover | `A` `D` ou `←` `→` |
| Correr / nitro | `Shift` |
| Entrar ou sair do veículo | `F` |
| Alternar câmera | `C` |
| Ligar ou desligar rádio | `R` |
| Rádio durante o voo | `T` |
| Pausar | `Esc` |
| Subir aeronave | `R` |
| Descer aeronave | `F` |

No avião e no helicóptero, `R` e `F` controlam altitude. Durante o voo, use `T` para o rádio. No solo e com a aeronave parada, `F` alterna o modo a pé.

## Rádio

As estações internas usam Web Audio e são sintetizadas localmente, portanto continuam disponíveis offline e não reproduzem conteúdo protegido de terceiros.

O botão **ABRIR POKETUBE.FUN** abre o serviço em uma janela separada após uma ação explícita do usuário. Essa fonte requer internet e não é embutida nem ocultada pelo jogo. O navegador pode bloquear a janela caso pop-ups estejam desativados.

## Salvamento

O progresso inclui posição, veículo, combustível, altitude, horário, cidade, modo do mapa, estação e estado do rádio. Use **SALVAR JOGO** no menu de pausa para salvar manualmente. A aplicação também salva ao pausar, voltar ao menu e a cada 60 segundos.

Para apagar o progresso, remova os dados do site nas configurações do navegador.

## Escopo

Esta entrega é um vertical slice executável e sem recursos externos. A cidade é procedural; streaming de satélite, elevação real, interiores, modelos 3D de alta fidelidade e ray tracing por hardware pertencem às fases posteriores descritas na especificação do produto. O preset Cyberpunk ativa a identidade visual máxima do protótipo, sem afirmar suporte a ray tracing real.
