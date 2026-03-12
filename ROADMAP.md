# Roadmap - Dashboard Médico Neurológico

## Estado Atual
- **Branch principal**: `main`
- **Arquivo principal**: `analisi-neurologista.jsx` (componente React completo)
- **Frontend**: pasta `frontend/` com projeto Vite+React (porta 5173)
- **Merge e push**: concluídos em 11/03/2026

## Funcionalidades Implementadas
- [x] 8 abas: timeline, frequenza, heatmap, pressione, orario, sintesi, farmaci, registro
- [x] 62 episódios de enxaqueca documentados
- [x] Gráfico SVG de pressão arterial com timeline
- [x] Correlação pressão x Candesartan (20/09/2025) e Dieta (05/01/2026)
- [x] Análise em 3 fases (Pré-Candesartan, Candesartan+Pré-Dieta, Candesartan+Dieta)
- [x] Suplemento Aura Stop adicionado (1 cápsula manhã + 1 noite)

## Próxima Sessão - Prioridades

### ~~1. Merge para master e push remoto~~ ✅ (concluído 11/03/2026)

### ~~2. Visualização do Frontend (Deploy)~~ ✅ (concluído 12/03/2026)
- **URL**: https://anamnesivial.netlify.app
- **Netlify**: projeto `anamnesivial`, build Vite configurado (base: `frontend`, publish: `frontend/dist`)
- Deploy automático a cada push no `main`
- O usuário ainda não conseguiu ver a aplicação no navegador
- Opções a explorar:
  - **GitHub Pages**: deploy estático (grátis, acessível de qualquer lugar)
  - **Claude Code Desktop**: usar `npm run dev` com acesso direto ao localhost
  - **Netlify/Vercel**: deploy automático a cada push

### ~~3. Sincronização de Arquivos~~ ✅ (concluído 12/03/2026)
- `analisi-neurologista.jsx` sincronizado como cópia de `frontend/src/App.jsx`
- Fonte principal: `frontend/src/App.jsx`

### ~~4. Melhorias~~ ✅ (concluído 12/03/2026)
- [x] Correlação cruzada: gráfico sobrepondo episódios + PA por mês (aba PA/Dieta)
- [x] Exportar PDF: botão "Stampa / PDF" no header
- [x] Tracking de peso: dados semanais desde início dieta (aba Peso/Sonno)
- [x] Tracking de qualidade do sono: 31 registros com correlação (aba Peso/Sonno)
- [x] Filtros por período: seletor de datas abaixo dos stats
- [x] Formulário de entrada: no topo do Registro, com localStorage

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
