# Roadmap - Dashboard Médico Neurológico

## Estado Atual
- **Branch principal de desenvolvimento**: `claude/explain-codebase-mmm9affduv48ef7g-1yPzI`
- **Arquivo principal**: `analisi-neurologista.jsx` (783 linhas, componente React completo)
- **Frontend**: pasta `frontend/` com projeto Vite+React
- **Merge local**: master já tem as alterações localmente, mas não foi possível fazer push remoto (restrição 403)

## Funcionalidades Implementadas
- [x] 8 abas: timeline, frequenza, heatmap, pressione, orario, sintesi, farmaci, registro
- [x] 62 episódios de enxaqueca documentados
- [x] Gráfico SVG de pressão arterial com timeline
- [x] Correlação pressão x Candesartan (20/09/2025) e Dieta (05/01/2026)
- [x] Análise em 3 fases (Pré-Candesartan, Candesartan+Pré-Dieta, Candesartan+Dieta)
- [x] Suplemento Aura Stop adicionado (1 cápsula manhã + 1 noite)

## Próxima Sessão - Prioridades

### 1. Merge para master e push remoto
- Fazer `git checkout master && git merge claude/... && git push origin master`
- Isso deve funcionar no Claude Code Desktop onde não há restrição de push para master

### 2. Visualização do Frontend
- O usuário ainda não conseguiu ver a aplicação no navegador
- Opções a explorar:
  - **GitHub Pages**: deploy estático (grátis, acessível de qualquer lugar)
  - **Claude Code Desktop**: usar `npm run dev` com acesso direto ao localhost
  - **Netlify/Vercel**: deploy automático a cada push

### 3. Sincronização de Arquivos
- `frontend/src/App.jsx` é uma cópia de `analisi-neurologista.jsx`
- Considerar: mover a fonte única para `frontend/src/App.jsx` e manter um symlink, ou usar um script de build

### 4. Melhorias Futuras (sugestões)
- [ ] Correlação cruzada: gráfico sobrepondo episódios de enxaqueca + pressão arterial
- [ ] Exportar relatório em PDF para levar ao neurologista
- [ ] Adicionar tracking de peso (evolução com a dieta desde 05/01/2026)
- [ ] Adicionar tracking de qualidade do sono
- [ ] Modo escuro para facilitar leitura
- [ ] Filtros por período nos gráficos
- [ ] Formulário para adicionar novos episódios diretamente na interface

## Dados do Paciente (referência)
- **Início Candesartan**: 20/09/2025
- **Início Dieta**: 05/01/2026
- **Total episódios**: 62
- **Suplementos**: Magnésio, Vitamina B2, Coenzima Q10, Aura Stop
- **Medicação**: Candesartan 8mg, Zolmitriptano 2.5mg (resgate)

## Notas Técnicas
- React JSX com estilos inline (sem CSS framework, sem biblioteca de gráficos)
- SVG customizado para todos os gráficos
- Projeto Vite para desenvolvimento local
- Dados hardcoded no componente (sem backend/banco de dados)
