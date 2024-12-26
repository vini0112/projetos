
import Router from "express";
import usersControllers from '../app/controllers/usersControllers.js'

const router = Router()


// GET
router.get('/', usersControllers.show)





// GET BY IDS
router.get('/oleos/:id', usersControllers.showById)
router.get('/baterias/:id', usersControllers.showById)
router.get('/fluidos/:id', usersControllers.showById)

// sessao filtros
router.get('/filtroOleoSimples/:id', usersControllers.showById)
router.get('/filtroOleoPesado/:id', usersControllers.showById)
router.get('/filtroCombustSimples/:id', usersControllers.showById)
router.get('/filtroCombustPesado/:id', usersControllers.showById)
router.get('/filtroArMotor/:id', usersControllers.showById)
router.get('/filtroArCabine/:id', usersControllers.showById)
router.get('/mangoteAR/:id', usersControllers.showById)

// sessao direcao
router.get('/terminaisDirecao/:id', usersControllers.showById)
router.get('/barrasAxiais/:id', usersControllers.showById)
router.get('/estabilizadores/:id', usersControllers.showById)
router.get('/BuchaCaixaDirecao/:id', usersControllers.showById)

// sessao suspensao
router.get('/batedores/:id', usersControllers.showById)
router.get('/pivos/:id', usersControllers.showById)
router.get('/amortecedores/:id', usersControllers.showById)
router.get('/buchaSusp/:id', usersControllers.showById)
router.get('/coxinsAmort/:id', usersControllers.showById)
router.get('/bieletas/:id', usersControllers.showById)

// sessao freios
router.get('/pastilhaFreio/:id', usersControllers.showById)
router.get('/discosFreio/:id', usersControllers.showById)
router.get('/sapatasFreio/:id', usersControllers.showById)
router.get('/cilindros/:id', usersControllers.showById)
router.get('/tamboresFreio/:id', usersControllers.showById)
router.get('/reparosFreio/:id', usersControllers.showById)
router.get('/cabosEflexiveis/:id', usersControllers.showById)
router.get('/acessoriosFreio/:id', usersControllers.showById)

// sessao ignicao
router.get('/cabosDvela/:id', usersControllers.showById)
router.get('/velas/:id', usersControllers.showById)
router.get('/bobinasIgnicao/:id', usersControllers.showById)
router.get('/modulosIgnicao/:id', usersControllers.showById)

// sessao carga
router.get('/tensoresCorreia/:id', usersControllers.showById)
router.get('/correiaAlternador/:id', usersControllers.showById)
router.get('/correiasDentada/:id', usersControllers.showById)
router.get('/reguladorVolt/:id', usersControllers.showById)
router.get('/estatores/:id', usersControllers.showById)

// sessao partida
router.get('/bendix/:id', usersControllers.showById)
router.get('/portaEscovas/:id', usersControllers.showById)
router.get('/acessoriosMotorPart/:id', usersControllers.showById)

// sessao arrefecimento
router.get('/bombasDgua/:id', usersControllers.showById)
router.get('/reservatorioDagua/:id', usersControllers.showById)
router.get('/valvulasTermo/:id', usersControllers.showById)
router.get('/eletroventiladores/:id', usersControllers.showById)
router.get('/canosDagua/:id', usersControllers.showById)
router.get('/tubosDagua/:id', usersControllers.showById)
router.get('/resistenciaEletro/:id', usersControllers.showById)
router.get('/diversasArrefeci/:id', usersControllers.showById)

// sessao injecao
router.get('/bicosInjecao/:id', usersControllers.showById)
router.get('/bombaCombust/:id', usersControllers.showById)
router.get('/flangeBombaCombust/:id', usersControllers.showById)
router.get('/acessoriosCombust/:id', usersControllers.showById)

// sessao transmissao
router.get('/discosEmbreagem/:id', usersControllers.showById)
router.get('/reparoCambioTrabulador/:id', usersControllers.showById)

// sessao rodagem
router.get('/cubosRoda/:id', usersControllers.showById)
router.get('/pontasEixo/:id', usersControllers.showById)
router.get('/juntasHomocinetica/:id', usersControllers.showById)
router.get('/rolamentosRoda/:id', usersControllers.showById)
router.get('/rolamentoDiversos/:id', usersControllers.showById)

// sessao escapes
router.get('/bojosTras/:id', usersControllers.showById)
router.get('/canosIntermediario/:id', usersControllers.showById)
router.get('/coxinsEscap/:id', usersControllers.showById)
router.get('/acessoriosEscap/:id', usersControllers.showById)







// POST
router.post('/oleos', usersControllers.postOleo)
router.post('/baterias', usersControllers.postBateriaYfluido)
router.post('/fluidos', usersControllers.postBateriaYfluido)

// sessao filtros
router.post('/filtroOleoSimples', usersControllers.postEstruturaAplicacoes)
router.post('/filtroOleoPesado', usersControllers.postEstruturaAplicacoes)
router.post('/filtroCombustSimples', usersControllers.postEstruturaAplicacoes)
router.post('/filtroCombustPesado', usersControllers.postEstruturaAplicacoes)
router.post('/filtroArMotor', usersControllers.postEstruturaAplicacoes)
router.post('/filtroArCabine', usersControllers.postEstruturaAplicacoes)
router.post('/mangoteAR', usersControllers.postEstruturaAplicacoes)

// sessao direcao
router.post('/terminaisDirecao', usersControllers.postEstruturaAplicacoes)
router.post('/barrasAxiais', usersControllers.postBarrasAxiais)
router.post('/estabilizadores', usersControllers.postEstruturaAplicacoes)
router.post('/BuchaCaixaDirecao', usersControllers.postEstruturaAplicacoes)

// sessao suspensao
router.post('/batedores', usersControllers.postEstruturaAplicacoes)
router.post('/pivos', usersControllers.postEstruturaAplicacoes)
router.post('/amortecedores', usersControllers.postEstruturaAplicacoes)
router.post('/buchaSusp', usersControllers.postEstruturaAplicacoes)
router.post('/coxinsAmort', usersControllers.postEstruturaAplicacoes)
router.post('/bieletas', usersControllers.postEstruturaAplicacoes)

// sessao freios
router.post('/pastilhaFreio', usersControllers.postEstruturaAplicacoes)
router.post('/discosFreio', usersControllers.postEstruturaAplicacoes)
router.post('/sapatasFreio', usersControllers.postEstruturaAplicacoes)
router.post('/cilindros', usersControllers.postEstruturaAplicacoes)
router.post('/tamboresFreio', usersControllers.postEstruturaAplicacoes)
router.post('/reparosFreio', usersControllers.postEstruturaAplicacoes)
router.post('/cabosEflexiveis', usersControllers.postEstruturaAplicacoes)
router.post('/acessoriosFreio', usersControllers.postEstruturaAplicacoes)

// sessao ignicao
router.post('/cabosDvela', usersControllers.postEstruturaAplicacoes)
router.post('/velas', usersControllers.postEstruturaAplicacoes)
router.post('/bobinasIgnicao', usersControllers.postEstruturaAplicacoes)
router.post('/modulosIgnicao', usersControllers.postEstruturaAplicacoes)

// sessao carga
router.post('/tensoresCorreia', usersControllers.postEstruturaAplicacoes)
router.post('/correiaAlternador', usersControllers.postEstruturaAplicacoes)
router.post('/correiasDentada', usersControllers.postEstruturaAplicacoes)
router.post('/reguladorVolt', usersControllers.postEstruturaAplicacoes)
router.post('/estatores', usersControllers.postEstruturaAplicacoes)

// sessao partida
router.post('/bendix', usersControllers.postEstruturaAplicacoes)
router.post('/portaEscovas', usersControllers.postEstruturaAplicacoes)
router.post('/acessoriosMotorPart', usersControllers.postEstruturaAplicacoes)

// sessao arrefecimento
router.post('/bombasDgua', usersControllers.postEstruturaAplicacoes)
router.post('/reservatorioDagua', usersControllers.postEstruturaAplicacoes)
router.post('/valvulasTermo', usersControllers.postEstruturaAplicacoes)
router.post('/eletroventiladores', usersControllers.postEstruturaAplicacoes)
router.post('/canosDagua', usersControllers.postEstruturaAplicacoes)
router.post('/tubosDagua', usersControllers.postEstruturaAplicacoes)
router.post('/resistenciaEletro', usersControllers.postEstruturaAplicacoes)
router.post('/diversasArrefeci', usersControllers.postEstruturaAplicacoes)

// sessao injecao
router.post('/bicosInjecao', usersControllers.postEstruturaAplicacoes)
router.post('/bombaCombust', usersControllers.postEstruturaAplicacoes)
router.post('/flangeBombaCombust', usersControllers.postEstruturaAplicacoes)
router.post('/acessoriosCombust', usersControllers.postEstruturaAplicacoes)

// sessao transmissao
router.post('/discosEmbreagem', usersControllers.postEstruturaAplicacoes)
router.post('/reparoCambioTrabulador', usersControllers.postEstruturaAplicacoes)

// sessao rodagem
router.post('/cubosRoda', usersControllers.postEstruturaAplicacoes)
router.post('/pontasEixo', usersControllers.postEstruturaAplicacoes)
router.post('/juntasHomocinetica', usersControllers.postEstruturaAplicacoes)
router.post('/rolamentosRoda', usersControllers.postEstruturaAplicacoes)
router.post('/rolamentoDiversos', usersControllers.postEstruturaAplicacoes)

// sessao escapes
router.post('/bojosTras', usersControllers.postEstruturaAplicacoes)
router.post('/canosIntermediario', usersControllers.postEstruturaAplicacoes)
router.post('/coxinsEscap', usersControllers.postEstruturaAplicacoes)
router.post('/acessoriosEscap', usersControllers.postEstruturaAplicacoes)






// UPDATE
router.put('/oleos/:id', usersControllers.updateOleo)
router.put('/baterias/:id', usersControllers.updateBateriaYfluido)
router.put('/fluidos/:id', usersControllers.updateBateriaYfluido)

// sessao filtros
router.put('/filtroOleoSimples/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroOleoPesado/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroCombustSimples/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroCombustPesado/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroArMotor/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/filtroArCabine/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/mangoteAR/:id', usersControllers.updateEstruturaAplicacoes)

// sessao de direcao
router.put('/terminaisDirecao/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/barrasAxiais/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/estabilizadores/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/BuchaCaixaDirecao/:id', usersControllers.updateEstruturaAplicacoes)

// sessao suspensao 
router.put('/batedores/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/pivos/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/amortecedores/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/buchaSusp/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/coxinsAmort/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/bieletas/:id', usersControllers.updateEstruturaAplicacoes)

// sessao freios
router.put('/pastilhaFreio/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/discosFreio/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/sapatasFreio/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/cilindros/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/tamboresFreio/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/reparosFreio/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/cabosEflexiveis/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/acessoriosFreio/:id', usersControllers.updateEstruturaAplicacoes)

// sessao ignicao
router.put('/cabosDvela/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/velas/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/bobinasIgnicao/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/modulosIgnicao/:id', usersControllers.updateEstruturaAplicacoes)

// sessao carga
router.put('/tensoresCorreia/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/correiaAlternador/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/correiasDentada/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/reguladorVolt/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/estatores/:id', usersControllers.updateEstruturaAplicacoes)

// sessao partida
router.put('/bendix/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/portaEscovas/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/acessoriosMotorPart/:id', usersControllers.updateEstruturaAplicacoes)

// sessao arrefecimento
router.put('/bombasDgua/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/reservatorioDagua/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/valvulasTermo/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/eletroventiladores/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/canosDagua/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/tubosDagua/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/resistenciaEletro/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/diversasArrefeci/:id', usersControllers.updateEstruturaAplicacoes)

// sessao injecao
router.put('/bicosInjecao/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/bombaCombust/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/flangeBombaCombust/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/acessoriosCombust/:id', usersControllers.updateEstruturaAplicacoes)

// sessao transmissao
router.put('/discosEmbreagem/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/reparoCambioTrabulador/:id', usersControllers.updateEstruturaAplicacoes)

// sessao rodagem
router.put('/cubosRoda/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/pontasEixo/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/juntasHomocinetica/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/rolamentosRoda/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/rolamentoDiversos/:id', usersControllers.updateEstruturaAplicacoes)

// sessao escapes
router.put('/bojosTras/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/canosIntermediario/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/coxinsEscap/:id', usersControllers.updateEstruturaAplicacoes)
router.put('/acessoriosEscap/:id', usersControllers.updateEstruturaAplicacoes)






// DELETE
router.delete('/oleos/:id', usersControllers.deleting)
router.delete('/baterias/:id', usersControllers.deleting)
router.delete('/fluidos/:id', usersControllers.deleting)

// sessao filtros
router.delete('/filtroOleoSimples/:id', usersControllers.deleting)
router.delete('/filtroOleoPesado/:id', usersControllers.deleting)
router.delete('/filtroCombustSimples/:id', usersControllers.deleting)
router.delete('/filtroCombustPesado/:id', usersControllers.deleting)
router.delete('/filtroArMotor/:id', usersControllers.deleting)
router.delete('/filtroArCabine/:id', usersControllers.deleting)
router.delete('/mangoteAR/:id', usersControllers.deleting)

// sessao direcao
router.delete('/terminaisDirecao/:id', usersControllers.deleting)
router.delete('/barrasAxiais/:id', usersControllers.deleting)
router.delete('/estabilizadores/:id', usersControllers.deleting)
router.delete('/BuchaCaixaDirecao/:id', usersControllers.deleting)

// sessao suspensao
router.delete('/batedores/:id', usersControllers.deleting)
router.delete('/pivos/:id', usersControllers.deleting)
router.delete('/amortecedores/:id', usersControllers.deleting)
router.delete('/buchaSusp/:id', usersControllers.deleting)
router.delete('/coxinsAmort/:id', usersControllers.deleting)
router.delete('/bieletas/:id', usersControllers.deleting)

// sessao freios
router.delete('/pastilhaFreio/:id', usersControllers.deleting)
router.delete('/discosFreio/:id', usersControllers.deleting)
router.delete('/sapatasFreio/:id', usersControllers.deleting)
router.delete('/cilindros/:id', usersControllers.deleting)
router.delete('/tamboresFreio/:id', usersControllers.deleting)
router.delete('/reparosFreio/:id', usersControllers.deleting)
router.delete('/cabosEflexiveis/:id', usersControllers.deleting)
router.delete('/acessoriosFreio/:id', usersControllers.deleting)

// sessao ignicao
router.delete('/cabosDvela/:id', usersControllers.deleting)
router.delete('/velas/:id', usersControllers.deleting)
router.delete('/bobinasIgnicao/:id', usersControllers.deleting)
router.delete('/modulosIgnicao/:id', usersControllers.deleting)

// sessao carga
router.delete('/tensoresCorreia/:id', usersControllers.deleting)
router.delete('/correiaAlternador/:id', usersControllers.deleting)
router.delete('/correiasDentada/:id', usersControllers.deleting)
router.delete('/reguladorVolt/:id', usersControllers.deleting)
router.delete('/estatores/:id', usersControllers.deleting)

// sessao partida
router.delete('/bendix/:id', usersControllers.deleting)
router.delete('/portaEscovas/:id', usersControllers.deleting)
router.delete('/acessoriosMotorPart/:id', usersControllers.deleting)

// sessao arrefecimento
router.delete('/bombasDgua/:id', usersControllers.deleting)
router.delete('/reservatorioDagua/:id', usersControllers.deleting)
router.delete('/valvulasTermo/:id', usersControllers.deleting)
router.delete('/eletroventiladores/:id', usersControllers.deleting)
router.delete('/canosDagua/:id', usersControllers.deleting)
router.delete('/tubosDagua/:id', usersControllers.deleting)
router.delete('/resistenciaEletro/:id', usersControllers.deleting)
router.delete('/diversasArrefeci/:id', usersControllers.deleting)

// sessao injecao
router.delete('/bicosInjecao/:id', usersControllers.deleting)
router.delete('/bombaCombust/:id', usersControllers.deleting)
router.delete('/flangeBombaCombust/:id', usersControllers.deleting)
router.delete('/acessoriosCombust/:id', usersControllers.deleting)

// sessao transmissao
router.delete('/discosEmbreagem/:id', usersControllers.deleting)
router.delete('/reparoCambioTrabulador/:id', usersControllers.deleting)

// sessao rodagem
router.delete('/cubosRoda/:id', usersControllers.deleting)
router.delete('/pontasEixo/:id', usersControllers.deleting)
router.delete('/juntasHomocinetica/:id', usersControllers.deleting)
router.delete('/rolamentosRoda/:id', usersControllers.deleting)
router.delete('/rolamentoDiversos/:id', usersControllers.deleting)

// sessao escapes
router.delete('/bojosTras/:id', usersControllers.deleting)
router.delete('/canosIntermediario/:id', usersControllers.deleting)
router.delete('/coxinsEscap/:id', usersControllers.deleting)
router.delete('/acessoriosEscap/:id', usersControllers.deleting)








export default router;
