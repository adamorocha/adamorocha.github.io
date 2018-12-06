var menu;

$(document).ready(function() {
 
	
	// Esconder a div da Home quando carregar o iframe de nome content
	$("iframe[name='content']").show();
	



	
	// Instancia da classe clsMenu, ela que é utilizada para criar os menus, o código dela se encontra no capa.js
    menu = new clsMenu();
    

   // Pasta Células
	var celulas = 
        	menu.addFolder("Células");
        	
		// pasta Chat
		var chat =
			celulas.addFolder("Chat");
			
			// Pasta Arquivos Fiscais
			var cArqfiscais =
				chat.addFolder("Arquivos Fiscais");

					cArqfiscais 
						.addItem("C.1.1 Ato COTEPE", "Procedimentos/Chat/Ato%20Cotepe%2017-04%20-%20Lay-out.pdf")
						.addItem("C.1.2 Gerar Ato COTEPE", "Procedimentos/Chat/Gerar_Ato_Cotep/Gerar_Ato_Cotep.htm")
						.addItem("C.1.3 Gerar CAT 52", "Procedimentos/Chat/Gerar_CAT52/Gerar_Cat52.htm")
						.addItem("C.1.4 Gerar Sintegra Tipo 60", "Procedimentos/Chat/Gerar_Sintegra_tipo60/Gerar_Sintegra.htm")
						.addItem("C.1.5 Gerar Sped Fiscal", "Procedimentos/Chat/Gerar_Sped_Fiscal/Gerar_Sped.htm")
						.addItem("C.1.6 Gerar XML", "Procedimentos/Chat/Gerar_XML/Gerar_XML.htm")
						.addItem("C.1.7 Aguardando Acerto do Horário ou Desbloqueio pelo Teclado", "Procedimentos/Chat/desbloqueio_pelo_teclado/desbloqueio_pelo_teclado.htm")

	    // Pasta E-mail	
		var email = 
			celulas.addFolder("E-mail");
	
			//Pasta Abertura de OS 
			var eAberturaOS =
				email.addFolder("Abertura de O.S");
				
					eAberturaOS 
						.addItem("E.1.1 Abertura de O.S. - Cliente Corporativo SAT", "Procedimentos/E-mail/OS_Cliente_Corporativo_SAT/OS_cliente_Corporativo_SAT.htm") 
						.addItem("E.1.2 Cadastro Módulo Fiscal Eletrônico (SAT Ceará)", "Procedimentos/E-mail/OS_mfe_sat_ceara/OS_mfe_sat_ceara.htm")
						.addItem("E.1.3 E-mail Interno (Boticário)", "Procedimentos/E-mail//email_interno/email_interno.htm")
						.addItem("E.1.4 Fraseologia para Clientes Corporate Prime", "Procedimentos/E-mail/OS_Fraseologia_Cliente_Prime/OS_Fraseologia.htm")
						.addItem("E.1.5 O.S. Inclusão da Informação Projeto", "Procedimentos/E-mail/OS_Inclusao_Informacao_Projeto/OS_Projeto.htm")

			// Pasta Configurações
			var eConfiguracao =
				email.addFolder("Configurações");
				
					eConfiguracao 
						.addItem("E.2.1 Endereço De E-Mail Para Direcionamento De Cliente Ao Setor De Vendas", "Procedimentos/E-mail/Endereco_de_email_para_direcionamento_vendas/email_vendas.htm")
						.addItem("E.2.2 Envio De Checklist Com Dados Para Confirmação Cadastral", "Procedimentos/E-mail/Envio_checklist_dados_para_confirmacao_cadastral/Envio_checklist_dados_para_confirmacao_cadastral.htm")
						.addItem("E.2.3 S-3200  Procedimentos de Configuração", "Procedimentos/E-mail/Configuracao_de_leitor_S3200/Configuracao.htm")
						.addItem("E.2.4 Prime IBM", "Procedimentos/E-mail/Prime/Prime.htm")
						.addItem("E.2.5 Registro De Solicitação Inicial Do Cliente Na Célula De E-Mail", "Procedimentos/E-mail/registro_solicitacao/registro.htm")
						.addItem("E.2.6 Template Explicativo Sobre Configurações De Leitores De Códigos De Barras", "Procedimentos/E-mail/Template_para_configuracao_leitores/Template_para_configuracao_leitores.htm")
						.addItem("E.2.7 Tratativa Clientes Corporativo", "Procedimentos/E-mail/tratativas_corporativo/corp.htm")
				
				
				
		// Pasta hardware
		var Hardware =
			celulas.addFolder("Hardware");
			
			//Pasta abertura de O.S
			var hAberturaOS =
				Hardware.addFolder("Abertura O.S");
				
					hAberturaOS 
						.addItem("H.1.1 Abertura de O.S. - Clientes Corporativos", "Procedimentos/Hardware/Abertura_OS/Abertura_de_OS/Impressoras_Fiscais.htm")
						.addItem("H.1.2 Abertura de O.S. - Clientes Corporativos SAT", "Procedimentos/Hardware/Abertura_OS/Abertura_de_OS_SAT/Abertura_OS.htm")
						.addItem("H.1.3 Abertura de O.S. Com Cortesia ", "Procedimentos/Hardware/Abertura_OS/Abertura_de_OS_cortesia/Abertura_de_OS_cortesia.htm")
						.addItem("H.1.4 Cadastro de clientes WorkFinity", "Procedimentos/Hardware/Abertura_OS/Cadastro_clientes_WorkFinity/Cadastro_clientes_WorkFinity.htm")
						.addItem("H.1.5 Clientes Que Entram Em Contato Para Consultar Tratativas De Desenvolvedores", "Procedimentos/Hardware/Abertura_OS/Clientes_que_entram_em_contato_para_consultar_tratativas_de_desenvolvedores/Clientes_que_entram_em_contato_para_consultar_tratativas_de_desenvolvedores.htm")
						.addItem("H.1.6 Equipamento Não Cadastrado", "Procedimentos/Hardware/Abertura_OS/Equipamento_nao_cadastrado/Equipamento_nao_cadastrado.htm")
						.addItem("H.1.7 Garantias Expiradas", "Procedimentos/Hardware/Abertura_OS/Validacao_Garantias_Vencidas/Impressoras_fiscais.htm")
				
			//Pasta Balanças
			var hBalancas =
				Hardware.addFolder("Balanças");
				
					hBalancas 
						.addItem("H.2.1 SA-110 Balança Não Comunica", "Procedimentos/Hardware/Balancas/SA-110_Balanca_Nao_Comunica/Balanca.htm")
						.addItem("H.2.2 SA-110 Balança Não Liga ", "Procedimentos/Hardware/Balancas/SA-110_Balanca_Nao_Liga/Balanca.htm")
						.addItem("H.2.3 SA-110 Mensagem E1 ", "Procedimentos/Hardware/Balancas/SA-110_Mensagem_E1/Balanca.htm")
						.addItem("H.2.4 SA-110 Mensagem E2 ", "Procedimentos/Hardware/Balancas/SA-110_Mensagem_E2/Balanca.htm")
						.addItem("H.2.5 SA-110 Mensagem E4 ", "Procedimentos/Hardware/Balancas/SA-110_Mensagem_E4/Balanca.htm")
						.addItem("H.2.6 SA-110 Mensagem --OF- ", "Procedimentos/Hardware/Balancas/SA-110_Mensagem_OF/Balanca.htm")
				
			//Pasta Coletores
			var hColetores =
				Hardware.addFolder("Coletores ");
				
					hColetores 
						.addItem("H.3.1 DC-2000 Apagar Dados e/ou Tarefas", "Procedimentos/Hardware/Coletores/DC200_Apagar_dados_ou_tarefas/Coletores.htm")
						.addItem("H.3.2 DC-2000 Coletor Não Comunica com Computador", "Procedimentos/Hardware/Coletores/DC200_Coletor_nao_comunica_com_computador/Coletores.htm")
						.addItem("H.3.3 DC-2000 Coletor Não Liga", "Procedimentos/Hardware/Coletores/DC-2000_Coletor_Nao_Liga/Coletores.htm")
						.addItem("H.3.4 DC-2000 Coletor não sincroniza com WinTaskGen", "Procedimentos/Hardware/Coletores/DC200_Coletor_nao_sincroniza_com_o_WinTaskGen/Coletores.htm")
						.addItem("H.3.5 DC-2000 Configurar Cógido de Barras - Software Win Taskgen", "Procedimentos/Hardware/Coletores/DC2000_Configurar_Codigo_Barras_Wintaskgen/Coletores.htm")
						.addItem("H.3.6 DC 2000 Configurar ITF 2 e 5", "Procedimentos/Hardware/Coletores/DC2000_configurar_itf_2_e_5/Coletores.htm")
						.addItem("H.3.7 DC-2000 Configurar Prefixo/Sufixo na Transmissão de Dados", "Procedimentos/Hardware/Coletores/DC200_Configurar_prefixo_sufixo_para_transmissao/Coletores.htm")
						.addItem("H.3.8 DC-2000 Data Corrompida", "Procedimentos/Hardware/Coletores/DC-2000_Data_Corrompida/Coletores.htm")
						.addItem("H.3.9 DC-2000 Digitar Através do Teclado do Leitor", "Procedimentos/Hardware/Coletores/DC2000_Digitar_atraves_teclado_do_Leitor/Coletores.htm")
						.addItem("H.3.10 DC-2000 Download Fail", "Procedimentos/Hardware/Coletores/DC-2000_Download_Fail/Coletores.htm")
						
						.addItem("H.3.11 DC-2000 Erro RTC Fail", "Procedimentos/Hardware/Coletores/DC2000_RTC_Fail/Coletores.htm")
						.addItem("H.3.12 DC-2000 Exportar Dados .TXT", "Procedimentos/Hardware/Coletores/DC2000_Exportar_Dados_txt/Coletores.htm")
						.addItem("H.3.13 DC-2000 Importar tarefa", "Procedimentos/Hardware/Coletores/DC2000_importar_tarefa/Coletores.htm")
						.addItem("H.3.14 DC-2000 Instalação de Driver", "Procedimentos/Hardware/Coletores/DC-2000_Instalar_driver/Coletores.htm")
						.addItem("H.3.15 DC-2000 Leitor de Códigos de Barras", "Procedimentos/Hardware/Coletores/DC200_Leitura_de_codigos_de_Barras/Coletores.htm")
						.addItem("H.3.16 DC-2000 Retornar Configurações de Fábrica", "Procedimentos/Hardware/Coletores/DC200_Retornar_coletor_para_configuracoes_de_fabrica/Coletores.htm")
						.addItem("H.3.17 DC-2000 Salvar Dados em Formato CSV", "Procedimentos/Hardware/Coletores/DC200_Salvar_dados_em_formato_csv/Coletores.htm")
						.addItem("H.3.18 DC-2000 Separar Código da Quantidade Utilizando Delimitadores", "Procedimentos/Hardware/Coletores/DC2000_Separar_Codigo_da_Quantidade/Coletores.htm")
						.addItem("H.3.19 DC-2000 Transferência de Dados para o Computador", "Procedimentos/Hardware/Coletores/DC200_Transferencia_de_dados/Coletores.htm")
						.addItem("H.3.20 DC-2200 Atualização Firmware", "Procedimentos/Hardware/Coletores/DC-2200_Atualizacao_Firmware/Coletores.htm")
						
						.addItem("H.3.21 DC-2200 Coletor Não Liga", "Procedimentos/Hardware/Coletores/DC-2200_Coletor_Nao_Liga/Coletores.htm")
						.addItem("H.3.22 DC-2200 Digitar Através do Teclado", "Procedimentos/Hardware/Coletores/DC-2200_Digitar_Atraves_do_Teclado/Coletores.htm")
						.addItem("H.3.23 DC-2200 Exportar Dados Após Coleta/Captura", "Procedimentos/Hardware/Coletores/DC-2200_Exportar_Dados_Apos_Coleta/Coletores.htm")
						.addItem("H.3.24 DC-2200 Instalação / Configuração", "Procedimentos/Hardware/Coletores/DC-2200_Instalação_Utilização/Coletores.htm")
						.addItem("H.3.25 DC-2200 Reset", "Procedimentos/Hardware/Coletores/DC-2200_Reset/Coletores.htm")
						.addItem("H.3.26 DC-2200 Separar Código da Quantidade Utilizando Delimitadores", "Procedimentos/Hardware/Coletores/DC2200_Separar_Codigo_da_Quantidade/Coletores.htm")
						.addItem("H.3.27 DC-3500 Alternar Conexão entre Bluetooth com WiFi", "Procedimentos/Hardware/Coletores/DC3500_Alterar_conexao_entre_bluetooth_com_wifi/Coletores.htm")
						.addItem("H.3.28 DC-3500 Coletor Não Liga", "Procedimentos/Hardware/Coletores/DC3500_Coletor_Nao_Liga/Coletores.htm")
						.addItem("H.3.29 DC-3500 Aumentar Tamanho de teclado", "Procedimentos/Hardware/Coletores/DC3500_Aumentar_tamanho_teclado/Coletores.htm")
						.addItem("H.3.30 DC-3500 Calibrar Caneta Apontadora", "Procedimentos/Hardware/Coletores/DC3500_Calibrar_caneta_apontadora/Coletores.htm")
						
						.addItem("H.3.31 DC-3500 Coletor Não Comunica Via Usb (Windows 10)", "Procedimentos/Hardware/Coletores/DC3500_configurar_codigo_de_controle_de_finalizacao_da_leitura/Coletores.htm")
						.addItem("H.3.32 DC-3500 Configurar Código de Controle de Finalização de Leitura", "Procedimentos/Hardware/Coletores/DC3500_Coletor_nao_comunica_windows%2010/Coletores.htm")
						.addItem("H.3.33 DC-3500 Configurar Conexão WiFi", "Procedimentos/Hardware/Coletores/DC3500_Configurar_conexao_wi-fi/Coletores.htm")
						.addItem("H.3.34 DC-3500 Configurar Leitura de Código de Barras", "Procedimentos/Hardware/Coletores/DC3500_Configurar_leitura_codigo_de_barras/Coletores.htm")
						.addItem("H.3.35 DC-3500 Configurar Prefixo/Sufixo para Transmissão de Dados", "Procedimentos/Hardware/Coletores/DC3500_Configurar_prefixo_sufixo_para_transmissao/Coletores.htm")
						.addItem("H.3.36 DC-3500 Configurar Teclas de Funções Personalizadas", "Procedimentos/Hardware/Coletores/DC3500_Configurar_teclas_de_funcao_personalizadas/Coletores.htm")
						.addItem("H.3.37 DC-3500 Cópia de Segurança dos Dados (Backup)", "Procedimentos/Hardware/Coletores/DC3500_Fazer_copia_de_seguranca_dados/Coletores.htm")
						.addItem("H.3.38 DC-3500 Habilitar Leitura de Código de Barras", "Procedimentos/Hardware/Coletores/DC3500_Habilitar_leitura_de_codigos_de_barras/Coletores.htm")
						.addItem("H.3.39 DC-3500 Reset", "Procedimentos/Hardware/Coletores/DC3500_Reset/Coletores.htm")
						.addItem("H.3.40 DC-3500 Transferência de Arquivos via Conexão Bluetooth", "Procedimentos/Hardware/Coletores/DC3500_Transferencia_de_arquivos_via_bluetooth/Coletores.htm")


			//Pasta CPU
			var hCpu =
				Hardware.addFolder("CPU");
				
					hCpu 
						.addItem("H.4.1 RC7400/RC8400 - Computador Desliga Sozinho", "Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Computador_Desliga_Sozinho/CPU.htm")
						.addItem("H.4.2 RC7400/RC8400 - Mouse Não Responde", "Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Mouse_Nao_Responde/CPU.htm")
						.addItem("H.4.3 RC7400/RC8400 - Nenhuma resposta ao ligar", "Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Nenhuma_Resposta_ao_Ligar/CPU.htm")
						.addItem("H.4.4 RC7400/RC8400 - Sem Imagem no Monitor", "Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Sem_Imagem_Monitor/CPU.htm")
						.addItem("H.4.5 RC7400/RC8400 - Teclado não responde", "Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Teclado_Nao_Responde/CPU.htm")
						.addItem("H.4.6 RC8000 - Computador Desliga Sozinho", "Procedimentos/Hardware/CPU_Bematech/RC8000_Computador_Desliga_Sozinho/CPU.htm")
						.addItem("H.4.7 RC8000 - Mouse Não Responde", "Procedimentos/Hardware/CPU_Bematech/RC8000_Mouse_Nao_Responde/CPU.htm")
						.addItem("H.4.8 RC8000 - Nenhuma resposta ao ligar", "Procedimentos/Hardware/CPU_Bematech/RC8000_Nenhuma_Resposta_ao_Ligar/CPU.htm")
						.addItem("H.4.9 RC8000 - Sem Imagem no Monitor", "Procedimentos/Hardware/CPU_Bematech/RC8000_Sem_Imagem_Monitor/CPU.htm")
						.addItem("H.4.10 RC8000 - Teclado não responde", "Procedimentos/Hardware/CPU_Bematech/RC8000_Teclado_Nao_Responde/CPU.htm")
						
						.addItem("H.4.11 RC8100 - Computador Desliga Sozinho", "Procedimentos/Hardware/CPU_Bematech/RC8100_Computador_Desliga_Sozinho/CPU.htm")
						.addItem("H.4.12 RC8100 - Mouse Não Responde", "Procedimentos/Hardware/CPU_Bematech/RC8100_Mouse_Nao_Responde/CPU.htm")
						.addItem("H.4.13 RC8100 - Nenhuma resposta ao ligar", "Procedimentos/Hardware/CPU_Bematech/RC8100_Nenhuma_Resposta_ao_Ligar/CPU.htm")
						.addItem("H.4.14 RC8100 - Sem Imagem no Monitor", "Procedimentos/Hardware/CPU_Bematech/RC8100_Sem_Imagem_Monitor/CPU.htm")
						.addItem("H.4.15 RC8100 - Teclado não responde", "Procedimentos/Hardware/CPU_Bematech/RC8100_Teclado_Nao_Responde/CPU.htm")
						.addItem("H.4.16 RC8400 Correção/Instalação de Drivers", "Procedimentos/Hardware/CPU_Bematech/RC8400_Correção_Instalação_Driver/CPU.htm")
						.addItem("H.4.17 RC8400 - Desabilitar Ativação USB", "Procedimentos/Hardware/CPU_Bematech/RC8400_Desabilitar_Ativacao_USB/CPU.htm")
						.addItem("H.4.18 SB 9090 POS TOUCH - Especificações", "Procedimentos/Hardware/CPU_Bematech/SB9090%20-%20Especificacoes/CPU.htm")
						.addItem("H.4.19 SB 9190 - Calibração do Monitor ", "Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Calibracao_monitor/CPU.htm")
						.addItem("H.4.20 SB 9190 - Especificações", "Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Especificacoes/CPU.htm")
						
						.addItem("H.4.21 SB 9190 - Instalação do Driver Touch", "Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Instalacao_driver/CPU.htm")
						.addItem("H.4.22 SB 9190 - Procedimento de Limpeza", "Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Limpeza/CPU.htm")
						.addItem("H.4.23 ST 1100 - Especificações", "Procedimentos/Hardware/CPU_Bematech/ST1100-Especificacoes/CPU.htm")

			//Pasta Drivers
			var hDrivers =
				Hardware.addFolder("Drivers");
				
					hDrivers 
						.addItem("H.5.1 Driver não consta no Site", "Procedimentos/Hardware/Drivers/Driver_nao_Consta_no_Site/Driver_nao_Consta_no_Site.htm")
								
			//Pasta Básico				
			var hFitBasico =
				Hardware.addFolder("Fit Básico");
				
					hFitBasico 
						.addItem("H.6.1 FIT Básico - Atualizar firmware", "Procedimentos/Hardware/Fit_Basico/fit_basico_atualizar_firmware/Basico.htm")
						.addItem("H.6.2 FIT Básico - Configurar senha", "Procedimentos/Hardware/Fit_Basico/fit_basico_configurar_senha/Basico.htm")
						.addItem("H.6.3 FIT Básico - Erro no CheckSum", "Procedimentos/Hardware/Fit_Basico/fit_basico_erro_no_checksum/Basico.htm")
						.addItem("H.6.4 FIT Básico - Especificações Técnicas", "Procedimentos/Hardware/Fit_Basico/fit_basico_especificacoes_tecnicas/Basico.htm")
						.addItem("H.6.5 FIT Básico - Gateway", "Procedimentos/Hardware/Fit_Basico/fit_basico_gateway/Basico.htm")
						.addItem("H.6.6 FIT Básico - Habilitar porta Serial ", "Procedimentos/Hardware/Fit_Basico/fit_basico_habilitar_porta_serial/Basico.htm")
						.addItem("H.6.7 FIT Básico - Microterminal não liga ", "Procedimentos/Hardware/Fit_Basico/fit_basico_nao_liga/Basico.htm")
						.addItem("H.6.8 FIT Básico - Timeout Leitores ", "Procedimentos/Hardware/Fit_Basico/fit_basico_timeout_leitores/Basico.htm")
				
			//Pasta Fit Fiscal				
			var hFitFiscal =
				Hardware.addFolder("Fit Fiscal");
				
					hFitFiscal 
						.addItem("H.7.1 FIT Fiscal Aplicativo Bemasale", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Aplicativo_%20Bemasale/FIT.htm")
						.addItem("H.7.2 FIT Fiscal Cancelamento de Cupom", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Cancelamento_de_Cupom/FIT.htm")
						.addItem("H.7.3 FIT Fiscal Consulta de Balanca", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Consulta_de_Balanca/FIT.htm")
						.addItem("H.7.4 FIT Fiscal Consulta de Cliente", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Consulta_de_Cliente/FIT.htm")
						.addItem("H.7.5 FIT Fiscal Consulta de Produtos", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Consulta_de_Produtos/FIT.htm")
						.addItem("H.7.6 FIT Fiscal Cupom Adicional", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Cupom%20Adcional/FIT.htm")
						.addItem("H.7.7 FIT Fiscal Desconto Acréscimo em Subtotal", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Desconto_Acrescimo_em_Subtotal/FIT.htm")
						.addItem("H.7.8 FIT Fiscal Especificações / Configurações / Compatibilidades", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Especificacoes_Configuracoes_Compatibilidades/FIT.htm")
						.addItem("H.7.9 FIT Fiscal Formas de Pagamentos", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Formas_de_Pagamentos/FIT.htm")
						.addItem("H.7.10 FIT Fiscal Leitura X", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Leitura_x/FIT.htm")
						
						.addItem("H.7.11 FIT Fiscal Modalidades de Vendas", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Modalidades_de_Vendas/FIT.htm")
						.addItem("H.7.12 FIT Fiscal Operações de Caixa", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Operações_%20de_%20Caixa/FIT.htm")
						.addItem("H.7.13 FIT Fiscal Pagamentos Múltiplas Formas", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Pagamentos_Multiplas_Formas/FIT.htm")
						.addItem("H.7.14 FIT Fiscal Pagamento Rápido", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Pagamentos_Rapido/FIT.htm")
						.addItem("H.7.15 FIT Fiscal Recebimentos", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Recebimentos/FIT.htm")
						.addItem("H.7.16 FIT Fiscal Venda com Cliente", "Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Venda_com_Cliente/FIT.htm")
				
			//Pasta	Gavetas	
			var hGavetas =
				Hardware.addFolder("Gavetas");
				
					hGavetas 
						.addItem("H.8.1 Gavetas - Especificações de Uso", "Procedimentos/Hardware/Gavetas/Gavetas_Especificacoes_de_uso/Gavetas.htm")
						.addItem("H.8.2 Gaveta Não Abre Com Chave", "Procedimentos/Hardware/Gavetas/gaveta_nao_abre_com_chave/gaveta_nao_abre_com_chave.htm")
				
			//Pasta	Impressoras Fiscais	
			var hImpressorasFiscais =
				Hardware.addFolder("Impressoras Fiscais");
				
					hImpressorasFiscais 
						.addItem("H.9.1 Acionamento da Gaveta de Dinheiro", "Procedimentos/Hardware/Impressoras_fiscais/Acionamento_da_gaveta_de_dinheiro/Impressoras_fiscais.htm")
						.addItem("H.9.2 Aguardando Acerto do Horário ou Desbloqueio pelo Teclado", "Procedimentos/Hardware/Impressoras_fiscais/Aguardando_Acerto_do_Horario/Impressoras_fiscais.htm")
						.addItem("H.9.3 Alteração Cadastral - Impressoras MP-2100TH-FI / MP-4000TH-FI / MP-4200TH-FI", "Procedimentos/Hardware/Impressoras_fiscais/Alteracoes_Cadastrais_MP2100_4000_4200TH_FI/Impressoras_Fiscais.htm")
						.addItem("H.9.4 Alteração do Local de uso da Impressora", "Procedimentos/Hardware/Impressoras_fiscais/Alteracao_do_local_de_uso_da_impressora/Impressoras_Fiscais.htm")
						.addItem("H.9.5 Alteração nos Arquivos Fiscais de Vendas", "Procedimentos/Hardware/Impressoras_fiscais/Alteracoes_Arquivos_Fiscais/Impressoras_Fiscais.htm")
						.addItem("H.9.6 Arquivo PAF-ECF", "Procedimentos/Hardware/Impressoras_fiscais/Arquivo_PAF_ECF/Impressoras_Fiscais.htm")
						.addItem("H.9.7 Atendimento à Desenvolvedores", "Procedimentos/Hardware/Impressoras_fiscais/Atendimento_Desenvolvedores/Impressoras_Nao_Fiscais.htm")
						.addItem("H.9.8 Cadastramento de aliquotas Fiscais", "Procedimentos/Hardware/Impressoras_fiscais/Cadastramento_aliquotas_fiscais/Impressoras_Fiscais.htm")
						.addItem("H.9.9 Cadastramento de Formas de Pagamento", "Procedimentos/Hardware/Impressoras_fiscais/Cadastramento_formas_pagamento/Impressoras_Fiscais.htm")
						.addItem("H.9.10 Cancelar Cupom Fiscal", "Procedimentos/Hardware/Impressoras_fiscais/Cancelar_cupom_fiscal/Impressoras_fiscais.htm")
						
						.addItem("H.9.11 CAT-52 Tabela de Erros", "Procedimentos/Hardware/Impressoras_fiscais/CAT-52_Tabela%20de%20Erros/Impressoras_Fiscais.htm")
						.addItem("H.9.12 Configurar Espaço entre as Linhas do Cupom", "Procedimentos/Hardware/Impressoras_fiscais/Configurar_espaco_entre_linhas/Impressoras_fiscais.htm")
						.addItem("H.9.13 Configurar Espaço entre Cupons", "Procedimentos/Hardware/Impressoras_fiscais/Configurar_espaco_entre_cupons/Impressoras_Fiscais.htm")
						.addItem("H.9.14 Configurar Guilhotina", "Procedimentos/Hardware/Impressoras_fiscais/Configurar_guilhotina/Impressoras_fiscais.htm")
						.addItem("H.9.15 Configurar Horário de Verão - MP4200 TH FI e MP4200 TH FI II", "Procedimentos/Hardware/Impressoras_fiscais/Configurar_horario_de_verao_mp4200/Impressoras_fiscais.htm")
						.addItem("H.9.16 Desabilitar Guilhotina", "Procedimentos/Hardware/Impressoras_fiscais/desabilitar_guilhotina/desabilitar_guilhotina%20.htm")
						.addItem("H.9.17 Direcionamento CHAT", "Procedimentos/Hardware/Impressoras_fiscais/Direcionamento_chat/direcionamento_chat.htm")
						.addItem("H.9.18 Download da Memória Fiscal utilizando o WinMFD2", "Procedimentos/Hardware/Impressoras_fiscais/Download_da_mfd_utilizando_winmfd2/Impressoras_fiscais.htm")
						.addItem("H.9.19 ECF Bloqueado por Redução Z Pendente", "Procedimentos/Hardware/Impressoras_fiscais/ECF_bloqueado_reducao_Z_pendente/Impressoras_fiscais.htm")
						.addItem("H.9.20 ECF Impressão com Falhas", "Procedimentos/Hardware/Impressoras_fiscais/ECF_Impressão_com_Falhas/Impressoras_fiscais.htm")
						
						.addItem("H.9.21 ECF Inoperante/Abertura Equipamento - Envio para Assistência Técnica", "Procedimentos/Hardware/Impressoras_fiscais/ECF_Inoperante_envio_para_Assistencia/Impressoras_fiscais.htm")
						.addItem("H.9.22 Erro -1 MFD2", "Procedimentos/Hardware/Impressoras_fiscais/Erro_1_MFD2/Impressoras_fiscais.htm")
						.addItem("H.9.23 Erro Cupom Pendente", "Procedimentos/Hardware/Impressoras_fiscais/Erro_cupom_pendente/Impressoras_fiscais.htm")
						.addItem("H.9.24 Erro Leds Piscando", "Procedimentos/Hardware/Impressoras_fiscais/Erro-leds/Impressoras_fiscais.htm")
						.addItem("H.9.25 Erro NACK", "Procedimentos/Hardware/Impressoras_fiscais/Erro_Nack/Impressoras_fiscais.htm")
						.addItem("H.9.26 Gerar Cat 52 Versão 1 e 2 winmfd2", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_Cat_52%20Versão_1_2_winmfd2/Impressoras_Fiscais.htm")
						.addItem("H.9.27 Gerar Relatório .txt", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_relatorio_txt/Impressoras_fiscais.htm")
						.addItem("H.9.28 Gerar Relatório CAT-52", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_cat_52/Impressoras_fiscais.htm")
						.addItem("H.9.29 Gerar Sintegra Tipo 60", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_sintegra_tipo_60/Impressoras_fiscais.htm")
						.addItem("H.9.30 Gerar Sintegra Tipo E", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_sintegra_tipo_E/Impressoras_fiscais.htm")
						
						.addItem("H.9.31 Gerar Sintegra Tipo E TDM (Nota Fiscal Gaúcha)", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_sintegra_tipo_E_TDM_gaucha/Impressoras_fiscais.htm")
						.addItem("H.9.32 Gerar Sped Fiscal", "Procedimentos/Hardware/Impressoras_fiscais/Gerar_sped_fiscal/Impressoras_fiscais.htm")
						.addItem("H.9.33 Guilhotina Bloqueada", "Procedimentos/Hardware/Impressoras_fiscais/Guilhotina_bloqueada/Impressoras_fiscais.htm")
						.addItem("H.9.34 Horário da Impressora Incorreto", "Procedimentos/Hardware/Impressoras_fiscais/Horario_da_impressora_incorreto/Impressoras_fiscais.htm")
						.addItem("H.9.35 Horário de Verão - Ativação", "Procedimentos/Hardware/Impressoras_fiscais/Configurar_horario_de_verao/Impressoras_fiscais.htm")
						.addItem("H.9.36 Horário de Verão - Retirar", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Retirar_Horario_Verao/Impressoras_Fiscais.htm")
						.addItem("H.9.37 Impressão de Código de Barras", "Procedimentos/Hardware/Impressoras_fiscais/Impressao_codigo_de_barras/Impressoras_fiscais.htm")
						.addItem("H.9.38 Impressão ruim", "Procedimentos/Hardware/Impressoras_fiscais/Impressao_ruim/Impressoras_Fiscais.htm")
						.addItem("H.9.39 Impressora Bloqueada na Virada do Mês", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_bloqueada_virada_do_mes/Impressoras_fiscais.htm")
						.addItem("H.9.40 Impressora Bloqueada por Redução Z", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_bloqueada_Redução_Z/Impressoras_fiscais.htm")
						
						.addItem("H.9.41 Impressora Fiscal - Atualizar DLL", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Atualizar_DLL/Impressoras_fiscais.htm")
						.addItem("H.9.42 Impressora Fiscal - Cessaçao de Uso", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Cessaçao_de_Uso/Impressoras_fiscais.htm")
						.addItem("H.9.43 Impressora Fiscal - Em Intervenção Técnica", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Em_Intervencao_Tecnica/Impressoras_fiscais.htm")
						.addItem("H.9.44 Impressora Fiscal - Memória Fiscal Lotada", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Memoria_fiscal_lotada/Impressoras_fiscais.htm")
						.addItem("H.9.45 Impressora Não Liga", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_nao_liga/Impressoras_fiscais.htm")
						.addItem("H.9.46 Impressora Não Localizada", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_nao_localizada/Impressoras_Fiscais.htm")
						.addItem("H.9.47 Impressora Offline", "Procedimentos/Hardware/Impressoras_fiscais/Impressora_Offline/Impressoras_Fiscais.htm")
						.addItem("H.9.48 Instalação Impressora Fiscal", "Procedimentos/Hardware/Impressoras_fiscais/Instalacao_impressora_fiscal/Impressoras_Fiscais.htm")
						.addItem("H.9.49 Instalar Bematool", "Procedimentos/Hardware/Impressoras_fiscais/Instalar_bematool/Impressoras_fiscais.htm")
						.addItem("H.9.50 Instalar WinMFD2", "Procedimentos/Hardware/Impressoras_fiscais/Instalar_winmfd2/Impressoras_fiscais.htm")
						
						.addItem("H.9.51 Lacração Impressora Fiscal", "Procedimentos/Hardware/Impressoras_fiscais/Lacrar_impressora_fiscal/Impressoras_fiscais.htm")
						.addItem("H.9.52 Leitura X", "Procedimentos/Hardware/Impressoras_fiscais/Realizar_leitura_X/Impressoras_fiscais.htm")
						.addItem("H.9.53 MP4000 TH FI / MP4200 TH FI Arredondamento ou Truncamento", "Procedimentos/Hardware/Impressoras_fiscais/MP-4200_Arredondamento_Truncamento/Impressoras_fiscais.htm")
						.addItem("H.9.54 MP-4000 TH FI - Devolução", "Procedimentos/Hardware/Impressoras_fiscais/MP-4000_TH_FI_Devolucao/Impressoras_Fiscais.htm")
						.addItem("H.9.55 MP-4200 TH FI Garantia", "Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_Garantia/Impressoras_fiscais.htm")
						.addItem("H.9.56 MP-4200 TH FI Impressora sem Comunicação", "Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_Impressora_sem_comunicacao/Impressoras_fiscais.htm")
						.addItem("H.9.57 MP-4200 TH FI II Atualização de Firmware", "Procedimentos/Hardware/Impressoras_fiscais/Atualizacao_firmware_%20impressora_4200_TH_FI_II/Atualizacao_firmware_%20impressora_4200_TH_FI_II.htm")
						.addItem("H.9.58 MP-4200 TH FI II Gerar CAT-52", "Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_II_gerar_CAT-52/Impressoras_Fiscais.htm")
						.addItem("H.9.59 MP-4200 TH FI II Instalação", "Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_II_Instalacao/Impressoras_Fiscais.htm")
						.addItem("H.9.60 MP-4000 TH FI Parâmetro Incorreto WinMFD2", "Procedimentos/Hardware/Impressoras_fiscais/MP-4000_TH_FI_Parametro_Incorreto_WinMFD2/Impressoras_fiscais.htm")
						
						.addItem("H.9.61 Ordem de Serviço em Atraso", "Procedimentos/Hardware/Impressoras_fiscais/OS_em_Atraso/Impressoras_Fiscais.htm")
						.addItem("H.9.62 Papel não Sai da Impressora", "Procedimentos/Hardware/Impressoras_fiscais/Papel_nao_sai_da_impressora/Impressoras_fiscais.htm")
						.addItem("H.9.63 RAT- Consultar", "Procedimentos/Hardware/Impressoras_fiscais/RAT-%20Consultar/Impressoras_fiscais.htm")
						.addItem("H.9.64 Realizar Leitura da Memória Fiscal", "Procedimentos/Hardware/Impressoras_fiscais/Realizar_leitura_memoria_fiscal/Impressoras_fiscais.htm")
						.addItem("H.9.65 Realizar Leitura da Memória Fita Detalhe", "Procedimentos/Hardware/Impressoras_fiscais/Realizar_leitura_memoria_fita_detalhe/Impressoras_fiscais.htm")
						.addItem("H.9.66 Realizar Redução Z", "Procedimentos/Hardware/Impressoras_fiscais/Realizar_reducao_z/Impressoras_fiscais.htm")
						.addItem("H.9.67 Testar Guilhotina", "Procedimentos/Hardware/Impressoras_fiscais/Testar_Guilhotina/Impressoras_fiscais.htm")
						.addItem("H.9.68 Virtual ECF", "Procedimentos/Hardware/Impressoras_fiscais/Virtual_ECF/Impressoras_fiscais.htm")
						.addItem("H.9.69 Virtualização de Porta de Comunicação", "Procedimentos/Hardware/Impressoras_fiscais/Virtualizacao_de_Porta_de_Comunicacao/Impressoras_nao_fiscais.htm")
						.addItem("H.9.70 Aguardando Proprietário - Bematool", "Procedimentos/Hardware/Impressoras_fiscais/Aguardando_Proprietario_Bematool/Impressoras_fiscais.htm")
						
						.addItem("H.9.71 Inserir Bobina na Impressora", "Procedimentos/Hardware/Impressoras_fiscais/Inserir_bobina/Impressoras_fiscais.htm")						
				
			//Pasta	Impressoras Não Fiscais
			var hImpressorasNFiscais =
				Hardware.addFolder("Impressoras Não Fiscais");
				
					hImpressorasNFiscais 
						.addItem("H.10.1 Alteração Cadastral – MP2500TH / MP4000TH / MP4200TH / MP-5100", "Procedimentos/Hardware/Impressoras_nao_fiscais/Alteracao_cadastral_Impressoras_mp2500th_mp4000th_mp4200th_mp5100/alteracao_cadastral.htm")
						.addItem("H.10.2 Ativar/Desativar Bipe Após A Impressão MP-2500TH / 4200th", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP4200TH_Ativar_bipe_apos_impressao/Impressoras_nao_fiscais.htm")
						.addItem("H.10.3 Ativar Ou Desativar Sensor De Pouco Papel - Impressoras MP4200TH / MP4000TH / MP2500TH / MP100sTH", "Procedimentos/Hardware/Impressoras_nao_fiscais/ativar_ou_desativar_sensor_pouco_papel/Impressoras_nao_fiscais.htm")
						.addItem("H.10.4 Atualização de firmware - Impressoras MP2500TH / MP4000TH / MP4200TH / MP-5100TH", "Procedimentos/Hardware/Impressoras_nao_fiscais/Atualizacao_firmware_%20impressoras_MP2500_4000_4200%20TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.5 Atualização de firmware - Impressora LB1000", "Procedimentos/Hardware/Impressoras_nao_fiscais/Atualizacao_firmware_%20LB1000/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.6 Cadastro de Bancos pelo Software DP-20 Plus", "Procedimentos/Hardware/Impressoras_nao_fiscais/Cadastro_bancos_Software_DP20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.7 Cadastro de Cidades pelo Software DP-20 Plus", "Procedimentos/Hardware/Impressoras_nao_fiscais/Cadastro_Cidades_Software_DP20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.8 Cadastro de Favorecidos pelo Software DP-20 Plus", "Procedimentos/Hardware/Impressoras_nao_fiscais/Cadastro_Favorecidos_Software_DP20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.9 Calibrar Posição da Etiqueta Manualmente", "Procedimentos/Hardware/Impressoras_nao_fiscais/Calibrar_posicao_etiqueta_manualmente/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.10 Calibrar Sensor de Posição da Etiqueta", "Procedimentos/Hardware/Impressoras_nao_fiscais/Calibrar_sensor_posicao_da_etiqueta/Impressoras_Nao_Fiscais.htm")
						
						.addItem("H.10.11 Características de Etiqueta e Ribbon Aceitos pela LB-1000", "Procedimentos/Hardware/Impressoras_nao_fiscais/Caracteristicas_etiqueta_e_ribbon_LB-1000/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.12 Configurar Impressora em Rede", "Procedimentos/Hardware/Impressoras_nao_fiscais/Configurar_impressora_em_rede/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.13 Configurar Impressora em wifi", "Procedimentos/Hardware/Impressoras_nao_fiscais/Configurar_impressora_em_wifi/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.14 Configurar LB-1000 em Rede", "Procedimentos/Hardware/Impressoras_nao_fiscais/Configurar_LB-1000_em_rede/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.15 Conflito com Impressoras da Marca HP", "Procedimentos/Hardware/Impressoras_nao_fiscais/Conflito_com_impressoras_HP/Impressoras_nao_fiscais.htm")
						.addItem("H.10.16 Consultar Versão de Firmware MP2500TH / MP4000TH / MP4200TH / MP-5100TH", "Procedimentos/Hardware/Impressoras_nao_fiscais/Consultar_Versao_Firmware_Impressoras_MP2500_4000_4200%20TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.17 Consultar Versão de Firmware - BemaUser MP2500TH / MP4000TH / MP4200TH / MP-5100TH", "Procedimentos/Hardware/Impressoras_nao_fiscais/Consultar_Versao_Firmware_Bemauser_Impressoras_MP2500_4000_4200TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.18 DP-20 Ajustar Data e Horário", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Ajustar_Data_Horario/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.19 DP-20 Auto Teste", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_AUTO_TESTE/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.20 DP-20 Configuração pelo Teclado", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP20_configuracao_pelo_teclado/Impressoras_Nao_Fiscais.htm")
						
						.addItem("H.10.21 DP-20 Configurar Layout de Impressão de Cheque", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Configurar_Layout_Cheques/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.22 DP-20 Configurar Porta de Comunicação Para Impressão", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Configurar_Porta_de_comunicacao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.23 DP-20 Erro-4, Erro-5 ou Erro Crítico 7", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Erro_4_ou_5/Impressoras_nao_fiscais.htm")
						.addItem("H.10.24 DP-20 Erro Crítico 02", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Erro_Crítico_02/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.25 DP-20 Erros na Impressão", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_erros_na_impressao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.26 DP-20 Impressora Não Liga", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Nao_Liga/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.27 DP-20 Inserir Fita na Impressora", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Inserir_Fita/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.28 DP-20 Não imprime centavos", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Nao_Imprime_Centavos/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.29 DP-20 RESET", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_RESET/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.30 Erro Memória Cheia FLASH / DRAM / CARD", "Procedimentos/Hardware/Impressoras_nao_fiscais/Erro_%20memoria_%20cheia_%20FLASH_DRAM_CARD/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.31 Erro Run-Time error 13", "Procedimentos/Hardware/Impressoras_nao_fiscais/Erro_runtime_error_13/Impressoras_nao_fiscais.htm")
						.addItem("H.10.32 Falha Na Impressão/Impressão Fraca/Impressão Ruim", "Procedimentos/Hardware/Impressoras_nao_fiscais/Falha_Impressao_impressao_fraca_impressao_ruim/Impressoras_Fiscais.htm")
						.addItem("H.10.33 Falha De Impressão Com Limite De Tamanho", "Procedimentos/Hardware/Impressoras_nao_fiscais/Falha_de_impressao_com_limite_de_tamanho/Falha_de_impressao.htm")
						.addItem("H.10.34 Impressão de QR Code - MP2500TH", "Procedimentos/Hardware/Impressoras_nao_fiscais/Impressao_de_QR_Code_Impressora_MP2500TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.35 Impressora está Instalada mas não Imprime", "Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_esta_instalada_mas_nao_imprime/Impressoras_nao_fiscais.htm")
						.addItem("H.10.36 Impressora MP-20 Correção de Papel", "Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_MP-20_Correção_de_Papel/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.37 Impressora MP-20 MI Pacote DLL", "Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_MP-20_MI_Pacote_DLL/Impressoras_nao_fiscais.htm")
						.addItem("H.10.38 Impressora Offline", "Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_Offline/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.39 Impressora Não Imprime Diretamente do Computador", "Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_nao_imprime_via_computador/Impressoras_nao_fiscais.htm")
						.addItem("H.10.40 Instalação de Impressora Não Fiscal no Sistema Linux", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_Impressora_Sistema_Linux/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.41 Instalação de Impressora Térmica em Rede", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalacao_Impressora_Termica_em_rede/Impressoras_nao_fiscais.htm")
						.addItem("H.10.42 Instalação de Impressoras Térmicas (MP 2100 / MP 2500 / MP 4000 / MP 4200 / MP 5100 e MP 100 S)", "Procedimentos/Hardware/Impressoras_nao_fiscais/instalacao_de_impressoras_termicas/Impressoras_nao_fiscais.htm")
						.addItem("H.10.43 Instalar e Configurar WinUtilitario Diagnostic Tool", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_configurar_aplicativo_Win_Utilitario_Diagnostic_Tool/Impressoras_nao_fiscais.htm")
						.addItem("H.10.44 Instalar Impressora LB-1000", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_LB-1000/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.45 Instalar Impressora pelo modo Generic Text Only no WINDOWS XP", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_modo_generic_text_windows_xp/Impressoras_nao_fiscais.htm")
						.addItem("H.10.46 Instalar Impressora pelo modo Generic Text Windows Vista ou Seven", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_modo_generic_text_windows_vista_ou_seven/Impressoras_nao_fiscais.htm")
						.addItem("H.10.47 Instalar Software de Configuração da Impressora DP-20", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_software_configuracao_DP_20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.48 Instalar User Software", "Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_user_%20software/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.49 LB-1000 Bartender", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000%20-%20Bartender/Bartender.htm")
						.addItem("H.10.50 LB-1000 Calibrar Impressao Etiquetas", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000_Calibrar_Impressao_Etiquetas/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.51 LB-1000 Impressão Falhada", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Impressao_Falhada/Impressoras_nao_fiscais.htm")
						.addItem("H.10.52 LB-1000 Indicadores Leds", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Indicadores_Led/Impressoras_nao_fiscais.htm")
						.addItem("H.10.53 LB-1000 Inserir o Papel", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Inserir_Papel/Impressoras_nao_fiscais.htm")
						.addItem("H.10.54 LB-1000 Inserir o Ribbon", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000_Inserir_Ribbon/Impressoras_nao_fiscais.htm")
						.addItem("H.10.55 LB-1000 Limpar Impressora", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Limpar_Impressora/Impressoras_nao_fiscais.htm")
						.addItem("H.10.56 LB-1000 Não Liga", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Nao_Liga/Impressoras_nao_fiscais.htm")
						.addItem("H.10.57 LB-1000 Retornar Configurações de Fábrica", "Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000_Retornar_padrao_de_fabrica/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.58 MP100S TH - Especificações de Limpeza", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Especificacoes_de_limpeza/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.59 MP100S TH - Especificações Técnicas", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Especificacoes_Tecnica/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.60 MP100S TH - Impressora Não Responde aos Comandos", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Impressora_nao_responde_comandos/Impressoras_Nao_Fiscais.htm")
						
						.addItem("H.10.61 MP100S TH - Impressora Não Liga", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Impressora_nao_liga/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.62 MP100S TH - Instalação", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Instalacao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.63 MP100S TH - Leds Informativos", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Leds_informativos/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.64 MP100S TH - Papel Não Sai da Impressora", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Papel_nao_sai_da_impressora/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.65 MP100S TH - Problemas de Comunicação", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Problemas_de_Comunicacao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.66 MP20 MI - Instalação", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP20_MI_Instalacao/Impressoras_nao_fiscais.htm")
						.addItem("H.10.67 MP20 MI - Pinagem do cabo Serial", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP20_MI_pinagem/Impressoras_nao_fiscais.htm")
						.addItem("H.10.68 MP-2000 TH / MP2100 TH - Instalação Serial USB", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP-2000_TH_MP2100_TH_Instalação_Serial_USB/Impressoras_nao_fiscais.htm")
						.addItem("H.10.69 MP-5100 TH - Características", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP5100TH_Caracteristicas/Impressoras_nao_fiscais.htm")
						.addItem("H.10.70 MP-5100 TH - Especificações Técnicas", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP5100TH_Especificacoes/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.71 MP-5100 TH - Inserir Imagem Em Cupom Fiscal", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP5100TH_Inserir_Logo_Cupom/Impressoras_nao_fiscais.htm")
						.addItem("H.10.72 Novo Prazo de Garantia para Impressoras Térmicas", "Procedimentos/Hardware/Impressoras_nao_fiscais/Novo_Prazo_garantia_Impressoras_Termicas/Novo_Prazo_Garantia.htm")
						.addItem("H.10.73 Ordem De Serviço em Atraso", "Procedimentos/Hardware/Impressoras_nao_fiscais/OS_em_Atraso/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.74 PP-10 Instalação Via Bluetooth", "Procedimentos/Hardware/Impressoras_nao_fiscais/PP_10_instalacao_bluetooth/PP_10_instalacao_bluetooth.htm")
						.addItem("H.10.75 PP-10 Instalação Via USB", "Procedimentos/Hardware/Impressoras_nao_fiscais/PP_10_instalacao_usb/PP_10_instalacao_usb.htm")
						.addItem("H.10.76 Resetar e Configurar Impressora DP 20", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_RESET/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.77 Software DP-20 Plus - Layout de Bancos", "Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_layout_bancos/Impressoras_nao_fiscais.htm")
						.addItem("H.10.78 Software DP-20 Plus - Layout de Cópia", "Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_layout_copia/Impressoras_nao_fiscais.htm")
						.addItem("H.10.79 Software DP-20 Plus - Menu Impressão", "Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_menu_impressao/Impressoras_nao_fiscais.htm")
						.addItem("H.10.80 Software DP-20 Plus - Windows Vista / Seven", "Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_windowns_vista_seven/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.81 DP-20 Impressão de Cheques pré-datados, sem emitir o cheque de entada (data Atual)", "Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_impressao_de_cheques_predatados_sem_emitir_entrada/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.82 MP2800 TH - Especificações Técnicas", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP-2800_TH_especificacoes/solicitacao.htm")
						.addItem("H.10.83 MP2800 TH - Instalação em Rede", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP-2800_TH_instalacao_rede/solicitacao.htm")
						.addItem("H.10.84 MP2800 TH - Instalação via USB ou Serial", "Procedimentos/Hardware/Impressoras_nao_fiscais/MP-2800_TH_instalacao_usb/instalacao.htm")


			//Pasta	KDS		
			var hKds =
				Hardware.addFolder("KDS");
				
					hKds 
						.addItem("H.11.1 KB 1700 - Teclas de Navegação", "Procedimentos/Hardware/Microterminal/KB-1700/KB_1700.htm")
						.addItem("H.11.2 KB 9000 - Configuração de Teclas de Navegação", "Procedimentos/Hardware/Kds/KB-9000/KB_9000.htm")
						.addItem("H.11.3 KB 9000 - Especificações", "Procedimentos/Hardware/Kds/KB9000_Especificacoes/KB9000_Especificacoes.htm")
						.addItem("H.11.4 LS6100 - Configuração", "Procedimentos/Hardware/Kds/LS6100_configuracao/LS6100_configuracao.htm")
						.addItem("H.11.5 LS8000 - Configuração", "Procedimentos/Hardware/Kds/LS8000_configuracao/LS8000_configuracao.htm")
				
			//Pasta	Leitores			
			var hLeitores =
				Hardware.addFolder("Leitores");
				
					hLeitores 
						.addItem("H.12.1 Amostras de Códigos de Barras", "Procedimentos/Hardware/Leitores/Amostras_de_Codigos_de_barras/Leitores.htm")
						.addItem("H.12.2 BR-200 BT Adicionar Prefixo ", "Procedimentos/Hardware/Leitores/BR-200%20BT_Adicionar_Prefixo/Leitores.htm")
						.addItem("H.12.3 BR-200 BT Adicionar Sufixo ", "Procedimentos/Hardware/Leitores/BR-200%20BT_Adicionar_Sufixo/Leitores.htm")
						.addItem("H.12.4 BR-200 BT Alterar Nome do Dispositivo", "Procedimentos/Hardware/Leitores/BR-200%20BT_Alterar_nome_do_dispositivo/Leitores.htm")
						.addItem("H.12.5 BR-200 BT Alteração de Sinal Sonoro", "Procedimentos/Hardware/Leitores/BR-200_BT_Alteracao_de_Sinal_Sonoro/Leitores.htm")
						.addItem("H.12.6 BR-200 BT Alterar a Duração do Sinal Sonoro", "Procedimentos/Hardware/Leitores/BR-200_BT_Alterar_Duracao_Sinal_Sonoro/Leitores.htm")
						.addItem("H.12.7 BR-200 BT Atualização De Firmware (Compatível Com IOS11)", "Procedimentos/Hardware/Leitores/BR-200BT_Atualizacao_de_fw/Leitores.htm")
						.addItem("H.12.8 BR-200 BT Configuração Bluetooth", "Procedimentos/Hardware/Leitores/BR-200%20BT_Configuração_Bluetooth/Leitores.htm")
						.addItem("H.12.9 BR-200 BT Configuração Windows 10", "Procedimentos/Hardware/Leitores/BR-200%20BT_Configuracao_Windows_10/Leitores.htm")
						.addItem("H.12.10 BR-200 BT Específicações Técnicas", "Procedimentos/Hardware/Leitores/BR-200%20BT_%20Específicações/Leitores.htm")
						
						.addItem("H.12.11 BR 200 BT Leitor Não Liga", "Procedimentos/Hardware/Leitores/BR-200%20BT_Leitor_Nao_Liga/Leitores.htm")
						.addItem("H.12.12 BR-200 BT Leitura de Cógido UPC-A ", "Procedimentos/Hardware/Leitores/BR-200%20BT_Leitura_Codigo_UPCA/Leitores.htm")
						.addItem("H.12.13 BR-200 BT Leitura Manual Apresentaçao", "Procedimentos/Hardware/Leitores/BR-200%20BT_Leitura_Manual_Apresentaçao/Leitores.htm")
						.addItem("H.12.14 BR 200 BT Ligar/Desligar o Leitor", "Procedimentos/Hardware/Leitores/BR-200%20BT_Ligar_desligar_Leitor/Leitores.htm")
						.addItem("H.12.15 BR-200 BT Procedimento Programação Manual", "Procedimentos/Hardware/Leitores/BR-200%20BT_Procedimento_Programação_Manual/Leitores.htm")
						.addItem("H.12.16 BR-200 BT Retornar Configurações ao Padrão de Fábrica", "Procedimentos/Hardware/Leitores/BR-200_BT_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.17 BR-310 Configuração do Leitor na Porta USB", "Procedimentos/Hardware/Leitores/BR-310_Configurar_Leitor_USB/Leitores.htm")
						.addItem("H.12.18 BR-310 Configurar Prefixo Para Código UPC-A ", "Procedimentos/Hardware/Leitores/BR-310_Configuracao_prefixo_para_cod_UPC_A/Leitores.htm")
						.addItem("H.12.19 BR-310 Configuração para a Leitura de DANFE - NFE", "Procedimentos/Hardware/Leitores/BR-310_Configurar_Leitura_Danfe/Leitores.htm")
						.addItem("H.12.20 BR-310 Configurações Iniciais Códigos", "Procedimentos/Hardware/Leitores/BR-310_Configurações_Iniciais_Códigos/Leitores.htm")

						.addItem("H.12.21 BR-310 Configurar Leitura do Código de Barras de Revistas", "Procedimentos/Hardware/Leitores/BR-310_Ler_codigos_de_revistas/Leitores.htm")
						.addItem("H.12.22 BR-310 Configurar Enter Após a Leitura do Código de Barras ", "Procedimentos/Hardware/Leitores/BR-310_Configurar_Enter_Apos_Leitura/Leitores.htm")
						.addItem("H.12.23 BR-310 Configurar para Ler Todos os Códigos Suportados", "Procedimentos/Hardware/Leitores/BR-310_Ler_Todos_Codigos_Suportados/Leitores.htm")
						.addItem("H.12.24 BR-310 Definição de tipos Códigos de Barras", "Procedimentos/Hardware/Leitores/BR-400_%20Definição_de_tipos_Códigos_de_Barras/Leitores.htm")
						.addItem("H.12.25 BR-310 Erros de Leituras de Códigos", "Procedimentos/Hardware/Leitores/BR-310_%20Erros_%20de_%20Leituras_%20de_%20Códigos/Leitores.htm")
						.addItem("H.12.26 BR-310 Habilitar Desabilitar Tipos de Saída de Dados", "Procedimentos/Hardware/Leitores/BR-310_%20Habilitar_Desabilitar_Tipos_de_Saída_de_Dados/Leitores.htm")
						.addItem("H.12.27 BR-310 Instalação Modo Teclado Modo RS232", "Procedimentos/Hardware/Leitores/BR-310_%20Instalação_%20Modo_Teclado_%20Modo_%20RS232/Leitores.htm")
						.addItem("H.12.28 BR-310 Leitura Automática do Código de Barras ", "Procedimentos/Hardware/Leitores/BR-310_Leitura_Automatica/Leitores.htm")
						.addItem("H.12.29 BR-310 Leitura de Códigos Iniciados por Zero (0)", "Procedimentos/Hardware/Leitores/BR-310_Leitura_Codigos_Iniciados_Zero/Leitores.htm")
						.addItem("H.12.30 BR-310 Retornar Configurações de Fábrica", "Procedimentos/Hardware/Leitores/BR-310_%20Retornar_Configurações_de_Fabrica/Leitores.htm")
						
						.addItem("H.12.31 BR-400 Adicionar Prefixo ou Sufixo", "Procedimentos/Hardware/Leitores/BR-400_Adicionar_Prefixo_ou_Sufixo/Leitores.htm")
						.addItem("H.12.32 BR-400 Configuração Código 128 - Comprimento Mínimo", "Procedimentos/Hardware/Leitores/BR-400_Configuracao_code_128/Leitores.htm")
						.addItem("H.12.33 BR-400 Conexão de Leitor em Computador / Microterminal", "Procedimentos/Hardware/Leitores/BR-400_Conexão_%20de_%20Leitor_%20Computador_%20Microterminal/Leitores.htm")
						.addItem("H.12.34 BR-400 Definição de tipos Códigos de Barras", "Procedimentos/Hardware/Leitores/BR-400_%20Definição_de_tipos_Códigos_de_Barras/Leitores.htm")
						.addItem("H.12.35 BR-400 Erros de Leituras de Códigos", "Procedimentos/Hardware/Leitores/BR-400_Erros_de_Leituras_de_Códigos/Leitores.htm")
						.addItem("H.12.36 BR-400 Específicações Técnicas", "Procedimentos/Hardware/Leitores/BR-400_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.37 BR-400 Exibir versão do firmware", "Procedimentos/Hardware/Leitores/BR-400_Exibir_Versao_Firmware/Leitores.htm")
						.addItem("H.12.38 BR-400 Habilitar Duplo ENTER", "Procedimentos/Hardware/Leitores/BR-400_Habilitar_duplo_Enter/Leitores.htm")
						.addItem("H.12.39 BR 400 - Incluir Vírgula “,” No Final Do Código (Sem Enter/Desabilitar Terminador )", "Procedimentos/Hardware/Leitores/BR-400_incluir_virgula_sem_enter/BR-400_incluir_virgula_sem_enter.htm")
						.addItem("H.12.40 BR-400 Instalação Hardware/Programação Inicial", "Procedimentos/Hardware/Leitores/BR-400_Instalação_Programação_Inicial/Leitores.htm")
						
						.addItem("H.12.41 BR-400 Led Azul", "Procedimentos/Hardware/Leitores/BR-400_LED_Azul/Leitores.htm")
						.addItem("H.12.42 BR-400 Restaurar Padrão de Fábrica", "Procedimentos/Hardware/Leitores/BR-400_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.43 BR-400 CODABAR - Retirar Caracteres Iniciais e Finais", "Procedimentos/Hardware/Leitores/BR-400_Retirar_Caracteres/Leitores.htm")
						.addItem("H.12.44 BR-400 Selecionar Duração do Tom de Bipe", "Procedimentos/Hardware/Leitores/BR-400_Selecao_Duracao_Bipe/Leitores.htm")
						.addItem("H.12.45 BR-400 Selecionar Volume do Bipe", "Procedimentos/Hardware/Leitores/BR-400_Selecionar_Volume_Bipe/Leitores.htm")
						.addItem("H.12.46 BR-400 Seleção do Tom do Bipe", "Procedimentos/Hardware/Leitores/BR-400_Selecao_Tom_Bipe/Leitores.htm")
						.addItem("H.12.47 BR-400 Terminador de Mensagem", "Procedimentos/Hardware/Leitores/BR-400_Terminador_Mensagem/Leitores.htm")
						.addItem("H.12.48 CODABAR - Comprimento Mínimo De Código (BR400, S100, BR400 e BR200 BT)", "Procedimentos/Hardware/Leitores/CODABAR_comprimento_minimo_de_codigo_BR400_S100_BR400_BR200BT/Leitores.htm")
						.addItem("H.12.49 Comparativo de Leitores", "Procedimentos/Hardware/Leitores/Comparativo_leitores/Leitores.htm")
						.addItem("H.12.50 D-6448 Erros de Leitura de Códigos", "Procedimentos/Hardware/Leitores/D-6448_%20Erros_%20de_%20Leitura_%20de_%20Códigos/Leitores.htm")
												
						.addItem("H.12.51 D-6448 Habilitar Parametros", "Procedimentos/Hardware/Leitores/D-6448_Habilitar_Parametros/Leitores.htm")
						.addItem("H.12.52 D-6448 Instalação Hardware", "Procedimentos/Hardware/Leitores/D-6448_Instalação_%20Hardware/Leitores.htm")
						.addItem("H.12.53 D-7500 Atualização Firmware", "Procedimentos/Hardware/Leitores/D-7500_Atualizacao_Firmware/Leitores.htm")
						.addItem("H.12.54 D-7500 Códigos Compatíveis", "Procedimentos/Hardware/Leitores/D-7500_Codigos_Compativeis/Leitores.htm")
						.addItem("H.12.55 D-7500 Configuração de Informações (Prefixo)", "Procedimentos/Hardware/Leitores/D-7500_Configuracao_Informacoes_Prefixo/Leitores.htm")
						.addItem("H.12.56 D-7500 Configuração de Informações (Sufixo)", "Procedimentos/Hardware/Leitores/D-7500_Configuração_Informações_Sufixo/Leitores.htm")
						.addItem("H.12.57 D-7500 Erro ao Ler HTTP:// (Habilitar ABNT2)", "Procedimentos/Hardware/Leitores/D-7500_erro_ao_ler_http_habilitar_abnt2/Leitores.htm")
						.addItem("H.12.58 D-7500 Específicações Técnicas", "Procedimentos/Hardware/Leitores/D-7500_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.59 D-7500 Fluxo de Programação para Códigos Diversos", "Procedimentos/Hardware/Leitores/D-7500_Fluxo_Programacao_Codigos/Leitores.htm")
						.addItem("H.12.60 D-7500 Habilitar Duplo TAB", "Procedimentos/Hardware/Leitores/D-7500_Adicionar_duplo_tab/Leitores.htm")
						
						.addItem("H.12.61 D-7500 Habilitar Qr Code", "Procedimentos/Hardware/Leitores/D-7500_Habilitar_QRcode/Leitores.htm")
						.addItem("H.12.62 D-7500 Indicacoes Bip e Led", "Procedimentos/Hardware/Leitores/D-7500_indicacoes_Bip_Led/Leitores.htm")
						.addItem("H.12.63 D-7500 Instalação Restrições e Testes", "Procedimentos/Hardware/Leitores/D-7500_Instalacao_Restricoes_Testes/Leitores.htm")
						.addItem("H.12.64 D-7500 Padrão de Mira", "Procedimentos/Hardware/Leitores/D-7500_Padrão%20de%20Mira/Leitores.htm")
						.addItem("H.12.65 D-7500 Tabela de Correções de Erros", "Procedimentos/Hardware/Leitores/D-7500_Tabela_Erros/Leitores.htm")
						.addItem("H.12.66 Habilitar/Desabilitar Febraban - Leitores S100/S500", "Procedimentos/Hardware/Leitores/S-100_%20Habilitar_%20Febraban/Leitores.htm")
						.addItem("H.12.67 I-150 Especificações Técnicas", "Procedimentos/Hardware/Leitores/I-150_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.68 I-150 Retornar ao Padrão de Fábrica ( RESET )", "Procedimentos/Hardware/Leitores/I-150_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.69 I-200 Compatibilidade Com O Sistema Operacional MAC", "Procedimentos/Hardware/Leitores/I-200_Sistema_operacional_MAC/Leitores.htm")
						.addItem("H.12.70 I-330 e I-200 - Não Lê Febraban Em Tela Reflexiva", "Procedimentos/Hardware/Leitores/I-330_200_leitura_febraban_reflexivas/I-330_200_leitura_febraban_reflexivas.htm")

						.addItem("H.12.71 I-330 Específicações Técnicas", "Procedimentos/Hardware/Leitores/I-330_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.72 I-330 Retornar Configurações ao Padrão de Fábrica", "Procedimentos/Hardware/Leitores/I-330_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.73 I-330 Seleção do Tom de Bipe", "Procedimentos/Hardware/Leitores/I-330_Selecao_Tom_Bipe/Leitores.htm")
						.addItem("H.12.74 I-500 Especificações Técnicas", "Procedimentos/Hardware/Leitores/I-500_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.75 I-500 Retornar ao Padrão de Fábrica ( RESET )", "Procedimentos/Hardware/Leitores/I-500_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.76 S-100 / S-500 Habilitar Leitura para Sistema Linux e MAC OS (USB)", "Procedimentos/Hardware/Leitores/S-500_habilitar_leitura_linux_mac/Leitores.htm")
						.addItem("H.12.77 S-100 Configurações Iniciais", "Procedimentos/Hardware/Leitores/S-100_Configurações_Iniciais/Leitores.htm")
						.addItem("H.12.78 S-100 Desabilitar Espaçamento Entre um Código de Barras e Outro", "Procedimentos/Hardware/Leitores/S-100_Desabilitar_Espacamento_entre_codigos/Leitores.htm")
						.addItem("H.12.79 S-100 Específicações Técnicas", "Procedimentos/Hardware/Leitores/S-100_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.80 S-100 Habilitar Porta Auxiliar", "Procedimentos/Hardware/Leitores/S-100_Habilitar_Porta_auxiliar/Leitores.htm")

						.addItem("H.12.81 S-100 Habilitar TAB ao Término da Mensagem", "Procedimentos/Hardware/Leitores/S-100_Tab_Termino_Mensagem/Leitores.htm")
						.addItem("H.12.82 S-100 Instalação Conexão Computador/Microterminal", "Procedimentos/Hardware/Leitores/S-100_Instalação_Conexão_Computador_Microterminal/Leitores.htm")
						.addItem("H.12.83 S-100 Operação de Leitor Modo de Mão / Modo Estático", "Procedimentos/Hardware/Leitores/S-100_Operação_%20de_%20Leitor_%20Modo_De_%20mão_%20Modo_Estático/Leitores.htm")
						.addItem("H.12.84 S-100 Restaurar Padrão de Fábrica", "Procedimentos/Hardware/Leitores/S-100_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.85 S-100 Retirar Caractere de Texto - Código CODABAR", "Procedimentos/Hardware/Leitores/S-100_Retirar_Caractere_Texto_Codabar/Leitores.htm")
						.addItem("H.12.86 S-3200 Ajuste de Tom e Volume", "Procedimentos/Hardware/Leitores/S-3200_Ajuste_Tom_Volume/Leitores.htm")
						.addItem("H.12.87 S-3200 Configurar Comunicação de Interface", "Procedimentos/Hardware/Leitores/S-3200_Configurar_Comunicação_de_Interface/Leitores.htm")
						.addItem("H.12.88 S-3200 Configurar identificador de Código de Barras", "Procedimentos/Hardware/Leitores/S-3200_Configurar_identificador_de%20_Código_de_Barras/Leitores.htm")
						.addItem("H.12.89 S-3200 Configurar Prefixo e Sufixo de Transmissão de Dados", "Procedimentos/Hardware/Leitores/S-3200_Configurar_Prefixo_e_Sufixo_de_Transmissão_de_Dados/Leitores.htm")
						.addItem("H.12.90 S-3200 Erros de Leitura de Códigos", "Procedimentos/Hardware/Leitores/S-3200_Erros_de_Leitura_de_Códigos/Leitores.htm")

						.addItem("H.12.91 S-3200 Específicações Técnicas", "Procedimentos/Hardware/Leitores/S-3200_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.92 S-3200 Habilitar Duplo TAB", "Procedimentos/Hardware/Leitores/S-3200_Habilitar_Duplo_Tab/Leitores.htm")
						.addItem("H.12.93 I-330 Configuração Bluetooth", "Procedimentos/Hardware/Leitores/I-330_config_bluetooth/Leitores.htm")
						.addItem("H.12.94 S-3200 Habilitar Enter Após Leitura de Código", "Procedimentos/Hardware/Leitores/S-3200_Habilitar_Enter_Apos_Leitura/Leitores.htm")
						.addItem("H.12.95 S-3200 Habilitar Sinal Sonoro", "Procedimentos/Hardware/Leitores/S-3200_habilitar_sinal_sonoro/Leitores.htm")
						.addItem("H.12.96 S-3200 Indicações LED (Status)/ BIP Sonoros (Status)", "Procedimentos/Hardware/Leitores/S-3200_indicações_%20LED_%20Status_BIP_Sonoros_Status/Leitores.htm")
						.addItem("H.12.97 S-3200 Instalação/Configurações Iniciais", "Procedimentos/Hardware/Leitores/S-3200_Instalação_Computador/Leitores.htm")
						.addItem("H.12.98 S-3200 Led Piscando Em Azul", "Procedimentos/Hardware/Leitores/S-3200_Led_Piscando_Azul/Leitores.htm")
						.addItem("H.12.99 S-3200 Led Piscando Em Azul e Vermelho", "Procedimentos/Hardware/Leitores/S-3200_Led_Piscando_Azul_e_Vermelho/Leitores.htm")
						.addItem("H.12.100 S-3200 Led Piscando em Vermelho", "Procedimentos/Hardware/Leitores/S-3200_Led_Piscando_Vermelho/Leitores.htm")

						.addItem("H.12.101 S-3200 Modo Sleep", "Procedimentos/Hardware/Leitores/S-3200_Modo_Sleep/Leitores.htm")
						.addItem("H.12.102 S-3200 Restaurar Padrão de Fábrica", "Procedimentos/Hardware/Leitores/S-3200_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.103 S-3200 Salvar Padrão do Cliente", "Procedimentos/Hardware/Leitores/S-3200_Salvar_Modo_Cliente/Leitores.htm")
						.addItem("H.12.104 S-500 Configurar Tom de Bipe", "Procedimentos/Hardware/Leitores/S-500_Configurar_Tom_de_Bip/Leitores.htm")
						.addItem("H.12.105 S-500 Desabilitar Espaçamento Entre um Código de Barras e Outro", "Procedimentos/Hardware/Leitores/S-500_Desabilitar_Espacamento_entre_codigos/Leitores.htm")
						.addItem("H.12.106 S-500 Erros de Leitura de Códigos", "Procedimentos/Hardware/Leitores/S-500_Erros_de_leitura_de_Códigos/Leitores.htm")
						.addItem("H.12.107 S-500 Específicações Técnicas", "Procedimentos/Hardware/Leitores/S-500_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.108 S-500 Habilitar Leitura Código Revista", "Procedimentos/Hardware/Leitores/S-500_Habilitar_Leitura_Código_Revista/Leitores.htm")
						.addItem("H.12.109 S-500 Habilitar TAB ao Término da Mensagem", "Procedimentos/Hardware/Leitores/S-500_Tab_Termino_Mensagem/Leitores.htm")
						.addItem("H.12.110 S-500 Instalação e Conexão Computador/Microterminal", "Procedimentos/Hardware/Leitores/S-500_Instalação_conexão_Computador_Microterminal/Leitores.htm")

						.addItem("H.12.111 S-500 Operação de Leitor (Modo de Mão / Modo Estático)", "Procedimentos/Hardware/Leitores/S-500_Operação_%20de_%20Leitor_(Modo_de_%20Mão_%20Modo_Estático)/Leitores.htm")
						.addItem("H.12.112 S-500 Retornar Configurações ao Padrão de Fábrica", "Procedimentos/Hardware/Leitores/S-500_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.113 Windows Não Identifica Leitor", "Procedimentos/Hardware/Leitores/Windows_Nao_Identifica_Leitor/Leitores.htm")
						.addItem("H.12.114 S-3200 Exibir Versão Firmware", "Procedimentos/Hardware/Leitores/S-3200_Exibir_Versao_Firmware/Leitores.htm")
						.addItem("H.12.115 I-200 Habilitar/Desabilitar Febraban", "Procedimentos/Hardware/Leitores/I-200_habilitar_desablitar_febraban/Leitores.htm")

				
			//Pasta	Monitores			
			var hMonitores =
				Hardware.addFolder("Monitores");
				
					hMonitores 
						.addItem("H.13.1 Monitor Touch - Calibração", "Procedimentos/Hardware/Monitores/Monitor_touch_Calibracao/Monitores.htm")
						.addItem("H.13.2 Monitor Touch - Instalação", "Procedimentos/Hardware/Monitores/Monitor_touch_Instalacao/Monitores.htm")
						.addItem("H.13.3 LCD Touch - Erro Após Trocar Placa de Vídeo", "Procedimentos/Hardware/Monitores/Erro_apos_trocar_placa_de_video/Monitores.htm")
						.addItem("H.13.4 LCD Touch - Imagem Desfocada ou Assimétrica", "Procedimentos/Hardware/Monitores/Imagem_Assimetrica_Desfocada/Monitores.htm")
						.addItem("H.13.5 LCD Touch - Monitor Não Liga ", "Procedimentos/Hardware/Monitores/Monitor_Nao_Liga/Monitores.htm")
						.addItem("H.13.6 LCD Touch - Monitor Não Reconhecido", "Procedimentos/Hardware/Monitores/Monitor_Nao_Reconhecido/Monitores.htm")
						.addItem("H.13.7 LCD Touch - Tela Preto e Branco", "Procedimentos/Hardware/Monitores/Tela_Preto_e_Branco/Monitores.htm")

				
			//Pasta Pos GO			
			var hPosGo =
				Hardware.addFolder("Pos GO");
				
					hPosGo 
						.addItem("H.14.1 Especificações Técnicas", "Procedimentos/Hardware/Posgo/posgo_Especificacoes/Especificacoes.htm")
						.addItem("H.14.2 Troca de Equipamento", "Procedimentos/Hardware/Posgo/posgo_defeito_fisico/defeito.htm")
				
			//Pasta terminaos de autoatendimento				
			var hTermAuto =
				Hardware.addFolder("Terminais De Autoatendimento");
				
					hTermAuto 
						.addItem("H.15.1 Terminal - Alarme não funciona", "Procedimentos/Hardware/Terminais/Alarmes_Nao_Funcionam/Terminais.htm")
						.addItem("H.15.2 Terminal - Autofalantes com Emissão de Ruídos", "Procedimentos/Hardware/Terminais/Autofalantes_Com_Ruido/Terminais.htm")
						.addItem("H.15.3 Terminal - Autofalantes não funcionam", "Procedimentos/Hardware/Terminais/Autofalantes_Nao_Funcionam/Terminais.htm")
						.addItem("H.15.4 Terminal - Calibrar Touch Linux", "Procedimentos/Hardware/Terminais/Calibracao_Touch_Linux/Terminais.htm")
						.addItem("H.15.5 Terminal - Calibrar Touch Windows", "Procedimentos/Hardware/Terminais/Calibracao_Touch_Windows/Terminais.htm")
						.addItem("H.15.6 Terminal - Equipamento Não Liga", "Procedimentos/Hardware/Terminais/Terminal_Nao_Liga/Terminais.htm")
						.addItem("H.15.7 Terminal - Impressora Emite Alerta Sonoro", "Procedimentos/Hardware/Terminais/Emissao_Alerta_Sonoro/Terminais.htm")
						.addItem("H.15.8 Terminal - Leitor de Código de Barras Não Funciona", "Procedimentos/Hardware/Terminais/Leitor_Nao_Funciona/Terminais.htm")
						.addItem("H.15.9 Terminal - Não Imprime", "Procedimentos/Hardware/Terminais/Terminal_Nao_Imprime/Terminais.htm")
						.addItem("H.15.10 Terminal - Sem imagem no monitor", "Procedimentos/Hardware/Terminais/Sem_Imagem_no_Monitor/Terminais.htm")
						
						.addItem("H.15.11 Terminal - Touch Não Funciona", "Procedimentos/Hardware/Terminais/Touch_Nao_Funciona/Terminais.htm")
						.addItem("H.15.12 Teste da impressora - Linux", "Procedimentos/Hardware/Terminais/Teste_Impressora_Linux/Terminais.htm")
						.addItem("H.15.13 Teste da impressora - Windows", "Procedimentos/Hardware/Terminais/Teste_Impressora_Windows/Terminais.htm")
						.addItem("H.15.14 Teste do Leitor de código de barras", "Procedimentos/Hardware/Terminais/Teste_Leitor_Codigo_Barras/Terminais.htm")
				
			//Pasta Sat Fiscal				
			var hSatFiscal =
				Hardware.addFolder("SAT Fiscal");
				
					hSatFiscal 
						.addItem("H.16.1 Configuração de Porta ", "Procedimentos/Hardware/SAT/SATFISCAL_Configurar_Porta_de_Comunicacao/Configurar_Porta.htm")
						.addItem("H.16.2 Especificações Técnicas", "Procedimentos/Hardware/SAT/SATFISCAL_Especificacoes_Tecnicas/Especificacoes.htm")
						.addItem("H.16.3 Identificar Código de Ativação", "Procedimentos/Hardware/SAT/SATFISCAL_identificar_cod_ativacao/identificar_cod_ativacao.htm")
						.addItem("H.16.4 Leds Informativos", "Procedimentos/Hardware/SAT/SATFISCAL_Leds_informativos/0800.htm")
						.addItem("H.16.5 Teste de Impressora", "Procedimentos/Hardware/SAT/SATFISCAL_Teste_de_Impressora/Teste.htm")
						.addItem("H.16.6 Treinamento SAT", "http://bookinfo.atento/zs/bematech/momento_Treinamento/SAT/Treinamento%20SAT%20para%20Hardware.pdf")
				
			
		// Pasta Multi Skill
		var Multiskill =
			celulas.addFolder("Multi Skill");
			
			var mAberturaOS =
				Multiskill.addFolder("Abertura de OS");
				
					mAberturaOS 
						.addItem("M.1.1 Fechamento de O.S Número Lógico", "Procedimentos/multi_skill/OS/numero_logico/Numero_Logico.htm")
						.addItem("M.1.2 Número Com Defeito", "Procedimentos/multi_skill/OS/Numero_logico_liberado_com_defeito/numero_logico_nao_autorizado.htm")
						.addItem("M.1.3 Número Lógico Não Autorizado", "Procedimentos/multi_skill/OS/numero_logico_nao_autorizado/numero_logico_nao_autorizado.htm")
						.addItem("M.1.4 Reinstalação TEF", "Procedimentos/multi_skill/OS/Reinstalacao_TEF/Reinstalacao_TEF.htm")
						.addItem("M.1.5 Troca de Equipamento com Defeito", "Procedimentos/multi_skill/OS/Troca_equipamento/troca_equipamento.htm")

			//Pasta Dicas						
			var mDicas =
				Multiskill.addFolder("Dicas");
				
					mDicas 
						.addItem("M.2.1 Abertura De Exceção Para Atendimento Via Voz Para Técnicos/Revendedores", "Procedimentos/multi_skill/Dicas/Exceção_atendimento_voz_tecnico_revendedores.htm")
						.addItem("M.2.2 Erro No Sistema De Vendas - Disponibilizar DLL", "Procedimentos/multi_skill/Dicas/Erro_no_sistema_de_vendas_disponibilizar_dll.htm")
						.addItem("M.2.3 Informações Ao Suporte De Sistema De Vendas", "Procedimentos/multi_skill/Dicas/Informacoes_ao_suporte_sistema_vendas.htm")
						.addItem("M.2.4 integrador TEF-IP não Executa", "Procedimentos/multi_skill/Dicas/integrador_tef_ip_nao_executa.htm")
						.addItem("M.2.5 Reimpressão de Comprovante", "Procedimentos/multi_skill/Dicas/reimpressao_de_comprovante.htm")
						.addItem("M.2.6 SiTef Hospedado - Licença Expirada", "Procedimentos/multi_skill/Dicas/sitef_hosp_licenca.htm")
						
			//Pasta Direcionamento N3						
			var mDirecionamentoN3 =
				Multiskill.addFolder("Direcionamento N3");
				
					mDirecionamentoN3 
						.addItem("M.3.1 Reset de senha do Sitef WEB", "Procedimentos/multi_skill/N3/Reset_senha_sitef_web/Reset_senha_sitef_web.htm")
						.addItem("M.3.2 Disponibilizar Novo Modulo FTP", "Procedimentos/multi_skill/n3/direcionamento/direcionamenton3.htm")
						.addItem("M.3.3 Empresas Parceiras Solicitam Log, Print Ou Pasta Especifica Por E-Mail", "Procedimentos/multi_skill/n3/direcionamento/direcionamenton3.htm")
						.addItem("M.3.4 Erro Na Licença ( Softwarehouse )", "Procedimentos/multi_skill/n3/problema_na_lincenca_sh/problema_na_licenca_sh.htm")
						.addItem("M.3.5 Erro No Fechamento Da Os Troca De Pin Pad Pinpad Não Está Em Produção", "Procedimentos/multi_skill/n3/direcionamento/direcionamenton3.htm")
						.addItem("M.3.6 Licença Desatualizada", "Procedimentos/multi_skill/n3/direcionamento/direcionamenton3.htm")
						.addItem("M.3.7 Suporte Que Esgotamos Possibilidade Pelos Parceiros E Procedimentos Do Book", "Procedimentos/multi_skill/n3/direcionamento/direcionamenton3.htm")
						.addItem("M.3.8 Tef Express Hospedado (Exceto Abertura De Os, Instalação Vpn, Drive Pinpad E Modular)", "Procedimentos/multi_skill/n3/direcionamento/direcionamenton3.htm")
						
			//Pasta Express						
			var mExpress =
				Multiskill.addFolder("Express");
				
					mExpress 
						.addItem("M.4.1 Abertura de O.S – Substituição do Pinpad", "Procedimentos/multi_skill/Express/Abertura_OS_substituicao_do_pinpad/OS_Pinpad.htm")
						.addItem("M.4.2 Alelo Auto - Requisitos ", "Procedimentos/multi_skill/Express/Alelo_auto_requisitos/Alelo_auto_requisitos.htm")
						.addItem("M.4.3 Atualização SiTef", "Procedimentos/multi_skill/Express/atualizacao_sitef/atualizacao_sitef.htm")
						.addItem("M.4.4 Atualizar Certificado de Acesso aos Relatórios SiTef Hospedado", "Procedimentos/multi_skill/Express/Atualizar_certificado_de_acesso_sitef_hospedado/Atualizar_certificado_de_acesso_sitef_hospedado.htm")
						.addItem("M.4.5 Atualizar Módulo Stone", "Procedimentos/multi_skill/Express/Configurar_modulo_stone_circular_atualizar_modulo/atualizar_modulo_stone.htm")
						.addItem("M.4.6 Bandeira ELO Pela Adquitente GetNet", "Procedimentos/multi_skill/Express/Bandeira_elo_getnet/Bandeira_elo_getnet.htm")
						.addItem("M.4.7 Bandeira ELO Pela Adquitente REDE", "Procedimentos/multi_skill/Express/Bandeira_elo_rede/Bandeira_elo_rede.htm")
						.addItem("M.4.8 Cliente Misterchef", "Procedimentos/multi_skill/Express/Cliente_mister_chefe/Cliente_mister_chefe.htm")
						.addItem("M.4.9 Configuração Combustivel Valecard", "Procedimentos/multi_skill/Express/Configuracao_combustivel_valecard/Configuracao_combustivel_valecard.htm")
						.addItem("M.4.10 Configurador Multi Bandeiras", "Procedimentos/multi_skill/Express/Configurador_Multi_Bandeiras/Configurador.htm")
						
						.addItem("M.4.11 Configurar Bandeira Good Card No Módulo CardSE", "Procedimentos/multi_skill/Express/Configurar_Bandeira_Good_Card_no_Modulo_CardSE/Configurar_Bandeira_Good_Card_no_Modulo_CardSE.htm")
						.addItem("M.4.12 Configurar Módulo Cielo", "Procedimentos/multi_skill/Express/Configurar_Cielo/Configurar_Cielo.htm")
						.addItem("M.4.13 Configurar Módulo Coopercred", "Procedimentos/multi_skill/Express/Configurar_modulo_coopercred/Configurar_modulo_coopercred.htm")
						.addItem("M.4.14 Configurar Módulo Dacasa", "Procedimentos/multi_skill/Express/Configurar_modulo_dacasa/Configurar_modulo_dacasa.htm")
						.addItem("M.4.15 Configurar Módulo DMCARD", "Procedimentos/multi_skill/Express/Configurar_Modulo_DMCard/Configurar_Dmcard.htm")
						.addItem("M.4.16 Configurar Módulo GETNET LAC", "Procedimentos/multi_skill/Express/Configurar_Modulo_GetNet/Configurar_Getnet.htm")
						.addItem("M.4.17 Configurar Módulo Nutricard", "Procedimentos/multi_skill/Express/Configurar_Modulo_nutricard/Configurar_Modulo_nutricard.htm")
						.addItem("M.4.18 Configurar Módulo Resomaq", "Procedimentos/multi_skill/Express/Configurar_modulo_resomaq_avancard/Configurar_modulo_resomaq_avancard.htm")
						.addItem("M.4.19 Configurar Módulo Stone", "Procedimentos/multi_skill/Express/Configurar_modulo_stone/Configurar_modulo_stone.htm")
						.addItem("M.4.20 Cliente Não Possui Adquirente ", "Procedimentos/multi_skill/Express/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")

						.addItem("M.4.21 Erro 03 Estab. Inval.", "Procedimentos/multi_skill/Express/erro_03_estab_inval/erro_03_estab_inval.htm")
						.addItem("M.4.22 Erro B6115", "Procedimentos/multi_skill/Express/Erro_B6115/Erro_B6115.htm")
						.addItem("M.4.23 Erro 16 (Pinpad)", "Procedimentos/multi_skill/Express/Pinpad_erro_16/Pinpad_erro_16.htm")
						.addItem("M.4.24 Erro de Comunicação com o Pinpad", "Procedimentos/multi_skill/Express/Erro_comunicacao_com_pinpad/Erro_Pinpad.htm")
						.addItem("M.4.25 Erro de log - VPN Slim", "Procedimentos/multi_skill/Express/Erro_de_log_vpn_slim/Erro_de_log_vpn_slim.htm")
						.addItem("M.4.26 Erro Dll Controle Geral Sitef Não Encontrada", "Procedimentos/multi_skill/Express/Erro_dll_controle_geral_sitef_nao_encontrada/Erro_dll_controle_geral_sitef_nao_encontrada.htm")
						.addItem("M.4.27 Erro Função Bind: 10013", "Procedimentos/multi_skill/Express/Erro_funcao_bind_10013/Erro_funcao_bind_10013.htm")
						.addItem("M.4.28 Erro VPN - Erro na autenticação do login", "Procedimentos/multi_skill/Express/ERRO_VPN_ERRO_AUTENTICAÇÃO_LOGIN/ERRO_VPN_ERRO_AUTENTICAÇÃO_LOGIN.htm")
						.addItem("M.4.29 Erro VPN Slim (Comnect) desconectada", "Procedimentos/multi_skill/Express/Erro_VPN_Slim_Comnect_desconectada/Erro_VPN_Slim_Comnect_desconectada.htm")
						.addItem("M.4.30 Erro na atualização da Licença SiTef", "Procedimentos/multi_skill/Express/erro_na_atualizacao_da_licenca_sitef/erro_na_atualizacao_da_licenca_sitef.htm")

						.addItem("M.4.31 Erro - Usuário Não Possui Permissão Para Acessar O CfSitef", "Procedimentos/multi_skill/Express/Erro_permissao_para_acessar_cfsitef/erro_permissao_para_acessar_cfsitef.htm")
						.addItem("M.4.32 Fluxo de Instação TEF e VPN", "Procedimentos/multi_skill/Express/Fluxo_de_instacao_tef_e_vpn/Fluxo_de_instacao_tef_e_vpn.htm")
						.addItem("M.4.33 Início/Fim do horário de verão", "Procedimentos/multi_skill/Express/horario_verao/horario_verao.htm")
						.addItem("M.4.34 Instalação TEF", "Procedimentos/multi_skill/Express/Instalacao_tef/Instalacao_tef.htm")
						.addItem("M.4.35 Instalação VPN Slim Comnect", "Procedimentos/multi_skill/Express/Instalação_VPN_Slim_Comnect/Instalacao_vpn_slim_comnect.htm")
						.addItem("M.4.36 Migração Sitef 5 para SiTef 6", "Procedimentos/multi_skill/Express/migracao_sitef5_para_sitef6/migracao_sitef5_para_sitef6.htm")
						.addItem("M.4.37 Modalidade SiTef", "Procedimentos/multi_skill/Express/Modalidade_sitef/Modalidade_sitef.htm")
						.addItem("M.4.38 Novo Arquivo de Licença (6.2.6.0) ", "Procedimentos/multi_skill/Express/Novo_Arquivo_Licenca_6260/arquivo_licenca.htm")
						.addItem("M.4.39 Pinpad Verificar Versão ", "Procedimentos/multi_skill/Express/Pinpad_verificar_versao/Pinpad_versao.htm")
						.addItem("M.4.40 Reimpressão de Comprovante ( NServices )", "Procedimentos/multi_skill/Express/Reimpressao_cupom_Nservices/Reimpressao_cupom_Nservices.htm")

						.addItem("M.4.41 Relatórios STONE", "Procedimentos/multi_skill/Express/relatorio_stone/relatorio_stone.htm")
						.addItem("M.4.42 Reset Senha Comnect", "Procedimentos/multi_skill/Express/reset_de_senha_comnect/reset_de_senha_comnect.htm")
						.addItem("M.4.43 Relatório SiTef Local - Consulta e Durabilidade", "Procedimentos/multi_skill/Express/relatorio_sitef_local_consulta_durabilidade/relatorio_sitef_local_consulta_durabilidade.htm")
						.addItem("M.4.44 Sitef Hospedado - Inclusão De Adquirente", "Procedimentos/multi_skill/Express/Sitef%20Hospedado_adição_de_adquirente/Numero_Logico.htm")
						.addItem("M.4.45 Sitef 6", "Procedimentos/multi_skill/Express/Sitef_6/Sitef_6.htm")
						.addItem("M.4.46 Serviço Indisponível (Carga de Tabelas)", "Procedimentos/multi_skill/Express/Servico_indisponivel_carga_de_tabelas/Servico_indisponivel_carga_de_tabelas.htm")
						.addItem("M.4.47 Serviço Indisponível (Carga de Tabelas BIN)", "Procedimentos/multi_skill/Express/Serv_indisp_carga_da_bin/Serv_indisp_carga_da_bin.htm")
						.addItem("M.4.48 Sitef Fora do Ar", "Procedimentos/multi_skill/Express/Sitef_Fora_Do_Ar/Sitef_fora_do_ar.htm")
						.addItem("M.4.49 Sitef Hospedado - Configurar Client Modular", "Procedimentos/multi_skill/Express/sitef_hosperado_configurar_c_modular/sitef_hosperado_configurar_c_modular.htm")
						.addItem("M.4.50 Sitef Não Ativo", "Procedimentos/multi_skill/Express/Sitef_Nao_Ativo/Sitef_nao_Ativo.htm")
						

						.addItem("M.4.51 Sitef Não Responde", "Procedimentos/multi_skill/Express/SITEF_nao_responde_sem_comunicacao_com_sitef/SITEF_nao_responde_sem_comunicacao_com_sitef.htm")
						.addItem("M.4.52 Sitef Não Responde -301", "Procedimentos/multi_skill/Express/Sitef_nao_responde_301/Sitef_nao_responde_301.htm")
						.addItem("M.4.53 Transação Pendente (Sitef Local)", "Procedimentos/multi_skill/Express/transacao_pendente/Terminal_Bloqueado.htm")
						.addItem("M.4.54 Teste Telnet VPN Slim", "Procedimentos/multi_skill/Express/teste_telnet_vpn_slim/teste_telnet_vpn_slim.htm")
						.addItem("M.4.55 VPN GSurf - Bandeiras inativas", "Procedimentos/multi_skill/Express/vpn_gsurf_bandeiras_inativas_sitef/vpn_gsurf_bandeiras_inativas_sitef.htm")
						.addItem("M.4.56 VPN Hospedado – Erro Na Instalação", "Procedimentos/multi_skill/Express/VPN_hospedado_erro_na_instalacao/VPN_hospedado_erro_na_instalacao.htm")
						.addItem("M.4.57 VPN Hospedado – Erro Na Instalação (Já Existe Outra Versão)", "Procedimentos/multi_skill/Express/VPN_hospedado_erro_na_instalacao/VPN_hospedado_erro_na_instalacao.htm")
						.addItem("M.4.58 Configurar Módulo SafraPay", "Procedimentos/multi_skill/Express/Configurar_Modulo_safrapay/Configurar_Modulo_safrapay.htm")

						
						
			//Pasta Total						
			var mTotal =
				Multiskill.addFolder("Total");
				
					mTotal 
						.addItem("M.5.1 Abertura de O.S – Substituição do Pinpad", "Procedimentos/multi_skill/total/Abertura_OS_substituicao_do_pinpad/OS_Pinpad.htm")
						.addItem("M.5.2 Cliente Não Possui Adquirente ", "Procedimentos/multi_skill/total/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")
						.addItem("M.5.3 Erro ao Levantar CTF", "Procedimentos/multi_skill/total/Erro_ao_levantar/Erro_ao_levantar.htm")
						.addItem("M.5.4 Erro Não Disponível E6", "Procedimentos/multi_skill/total/Erro_Nao_Disponivel_E6/Erro_E6.htm")
						.addItem("M.5.5 Gerenciador Padrão Não Ativo", "Procedimentos/multi_skill/total/Gerenciador_padrao_nao_ativo/Gerenciador_Padrao.htm")
						.addItem("M.5.6 Instalação TEF DLL", "Procedimentos/multi_skill/total/Instalacao_tef_dll/Instalacao_tef_vpn.htm")
						.addItem("M.5.7 Instalação TEF HTTPS", "Procedimentos/multi_skill/total/Instalacao_tef_https/Instalacao_tef_https.htm")
						.addItem("M.5.8 Instalação TEF com VPN", "Procedimentos/multi_skill/total/Instalacao_tef_vpn/Instalacao_tef_vpn.htm")
						.addItem("M.5.9 Pinpad Verificar Versão ", "Procedimentos/multi_skill/total/Pinpad_verificar_versao/Pinpad_versao.htm")
						
			//Pasta Turbo					
			var mTurbo =
				Multiskill.addFolder("Turbo");
				
					mTurbo 
						.addItem("M.6.1 Abertura de O.S – Substituição do Pinpad", "Procedimentos/multi_skill/turbo/Abertura_OS_substituicao_do_pinpad/OS_Pinpad.htm")
						.addItem("M.6.2 Alterar Modalidade Pay&go Duo para Pay&Go", "Procedimentos/multi_skill/turbo/Alterar_modalidade_paygoduo_para_paygo/Alterar_modalidade_paygoduo_para_paygo.htm")
						.addItem("M.6.3 Cliente Não Possui Adquirente ", "Procedimentos/multi_skill/turbo/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")
						.addItem("M.6.4 Configurar Ticket LOG", "Procedimentos/multi_skill/turbo/Configurar_Ticket-Log/Configurar_Ticket_log.htm")
						.addItem("M.6.5 Erro 1004 VPN Tunnel", "Procedimentos/multi_skill/turbo/erro_1004_vpn_tunnel/erro_1004_vpn_tunnel.htm")
						.addItem("M.6.6 Erro 1503", "Procedimentos/multi_skill/turbo/Erro_1503/Erro_1503.htm")
						.addItem("M.6.7 Erro 1563", "Procedimentos/multi_skill/turbo/Erro_1563/Erro_1563.htm")
						.addItem("M.6.8 Erro 1568", "Procedimentos/multi_skill/turbo/Erro_1568/Erro_1568.htm")
						.addItem("M.6.9 Erro de Permissão Instalador Pay&Go", "Procedimentos/multi_skill/turbo/erro_de_permissao_paygo/erro_de_permissao_paygo.htm")
						.addItem("M.6.10 Downgrade Pay&Go", "Procedimentos/multi_skill/turbo/Downgrade_paygo/Downgrade.htm")
						
						.addItem("M.6.11 ID já instalado", "Procedimentos/multi_skill/turbo/ID_ja_instalado/ID_ja_instalado.htm")
						.addItem("M.6.12 Pay&Go Nova Versão", "Procedimentos/multi_skill/turbo/pay_go_nova_versao/pay_go_nova_versao.htm")
						.addItem("M.6.13 Pinpad - Erro de Permissão", "Procedimentos/multi_skill/turbo/Pinpad_erro_de_permissao/Pinpad_erro_de_permissao.htm")
						.addItem("M.6.14 Pinpad Verificar Versão ", "Procedimentos/multi_skill/turbo/Pinpad_verificar_versao/Pinpad_versao.htm")
						.addItem("M.6.15 REDE 88", "Procedimentos/multi_skill/turbo/rede_88/rede_88.htm")
						.addItem("M.6.16 Solicitação de dados para instalação", "Procedimentos/multi_skill/turbo/solicitacao_de_dados_para_instalacao/solicitacao_de_dados_para_instalacao.htm")
						.addItem("M.6.17 Zerar Instalação", "Procedimentos/multi_skill/turbo/zerar_instalacao/zerar_instalacao.htm")
						.addItem("M.6.18 VPN Não Instalada", "Procedimentos/multi_skill/turbo/vpn_nao_instalada/vpn_nao_instalada.htm")

	
		// Pasta SAT
		var Sat =
			celulas.addFolder("SAT");

			//Pasta assuntos Regulatórios	
			var sAssuntosreg =
				Sat.addFolder("Assuntos Regulatórios");
				
					sAssuntosreg 
						.addItem("S.1.1Assuntos Regulatórios", "Procedimentos/SAT/Assuntos_Regulatórios/Assuntos.htm")
						
			//Pasta Básico
			var sBemacashBasico =
				Sat.addFolder("Bemacash Básico");
				
					sBemacashBasico 
						.addItem("S.2.1 Aplicativo Android", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Aplicativo_Android/Aplicativo_Android.htm")
						.addItem("S.2.2 Ativação de Caixas Registradoras", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Ativação%20de%20Caixas%20Registradoras/Ativacao_caixas_registradoras.htm")
						.addItem("S.2.3 Composição de Produtos", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Composição_Produtos/Composicao_de_Produtos.htm")
						.addItem("S.2.4 Configurações Hardware", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Configurações_hardware/configuracao_hardware.htm")
						.addItem("S.2.5 Configurações de Loja", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Configuracoes_Loja/Configuracoes_de_Loja.htm")
						.addItem("S.2.6 Configurar Grupos de Impostos", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Grupos_Impostos/Bemacash_Grupos_Impostos.htm")
						.addItem("S.2.7 Departamentos e categorias", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Departamentos_Categorias/Bemacash_departamentos_categorias.htm")
						.addItem("S.2.8 Gerenciamento de Código de Barras", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Gerenciamento_Codigo_Barras/Gerenciamento_de_Codigo_de_Barras.htm")
						.addItem("S.2.9 Gerenciamento de Inventário", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Gerenciamento_Inventario/Gerenciamento_de_Inventario.htm")
						.addItem("S.2.10 Importar Banco de Dados", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Importar_Banco_de_Dados/Importar_banco_de_dados.htm")
						
						.addItem("S.2.11 Inventário Secundário", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Inventário_Secundário/Inventario_Secundario.htm")
						.addItem("S.2.12 Módulo de Compra", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Modulo_Compra/Modulo_Compra.htm")
						.addItem("S.2.13 Notificações de Estoque", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Notificações_Estoque/Notificacoes_Itens_Estoque.htm")
						.addItem("S.2.14 Painel de Controle Web", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Painel_Controle/Bemacash_Painel_Controle.htm")
						.addItem("S.2.15 Portal Revendedor", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Portal_Revendedor_WEB/Bemacash_Portal_Revendedor_WEB.htm")
						.addItem("S.2.16 Produtos em Grade", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Produtos_Grade/produtos_em_grade.htm")
						.addItem("S.2.17 Requisitos", "Procedimentos/SAT/Bemacash_Basico/Bemacash_Requisitos/Requesitos.htm")
						
			//Pasta Bemacash NFCe						
			var sBemacashNFCe =
				Sat.addFolder("Bemacash NFCe");
				
					sBemacashNFCe 
						.addItem("S.3.1 Acrescentar um Desconto ao Subtotal ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Acrescentar_um_Desconto_Subtotal/Acrescentar_um_Desconto_Subtotal.htm")
						.addItem("S.3.2 Aplicativo Android ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Aplicativo_Android/Bemacash_Aplicativo_Android.htm")
						.addItem("S.3.3 Arquivos de Clientes e Funcionários ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Arquivos_de_Clientes_e_Funcionarios/Arquivos_de_Clientes_e_Funcionarios.htm")
						.addItem("S.3.4 Ativação de Caixas Registradoras ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Ativação%20de%20Caixas%20Registradoras/Bemacash_Ativação%20de%20Caixas%20Registradoras.htm")
						.addItem("S.3.5 Certificado ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Certificado/Certificado.htm")
						.addItem("S.3.6 Composição de Produtos ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Composição_Produtos/Bemacash_Composição_Produtos.htm")
						.addItem("S.3.7 Configurações de Hardware ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Configurações_hardware/configuracao_hardware.htm")
						.addItem("S.3.8 Configuração de Hardware Alteranativo - Impressoras", "Procedimentos/SAT/Bemacash_NFCe_SAT/Configuracao_de_Hardware_Alteranativo_Impressoras/Configuracao_hardware_alternativo.htm")
						.addItem("S.3.9 Configurações de Loja ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Configuracoes_Loja/Configuracoes_de_Loja.htm")
						.addItem("S.3.10 Configuração Fiscal Manager - NFC-e", "Procedimentos/SAT/Bemacash_NFCe_SAT/Configuracao_Fiscal_Manager_NFC-e/Configuracao_fiscal_manager_nfce.htm")

						.addItem("S.3.11 Configuração Fiscal Manager - SAT", "Procedimentos/SAT/Bemacash_NFCe_SAT/Configuracao_Fiscal_Manager_SAT/Configuracao_Fiscal_Manager_SAT.htm")
						.addItem("S.3.12 Configurar Funções de Hardware", "Link")
						.addItem("S.3.13 Configurar Grupos de Impostos ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Grupos_Impostos/Bemacash_Grupos_Impostos.htm")
						.addItem("S.3.14 Configurar Impressoras Auxiliares ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Configurar_Impressoras_Auxiliares/Configuracao_Impressoras_Auxiliares.htm")
						.addItem("S.3.15 Contingência ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Contingencia/Contingencia.htm")
						.addItem("S.3.16 Departamentos e Categorias ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Departamentos_Categorias/Bemacash_departamentos_categorias.htm")
						.addItem("S.3.17 Devoluções a partir do Histórico de Vendas", "Procedimentos/SAT/Bemacash_NFCe_SAT/Devolucoes_a_partir_do_histórico_de_vendas/Devolucoes_a_partir_do_histórico_de_vendas.htm")
						.addItem("S.3.18 Encomendar seu Hardware On Line", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Encomendar_Hardware_On_Line/Encomendar_Hardware_Online.htm")
						.addItem("S.3.19 Envio de Cupons por E-mail", "Procedimentos/SAT/Bemacash_NFCe_SAT/Envio_de_Cupons_por_E-mail/Envio_de_Cupons_por_E-mail.htm")
						.addItem("S.3.20 Exclusão de Itens, Alteração na Quantidade de Produtos e Acréscimo de Descontos ", "Link")

						.addItem("S.3.21 Exclusão de um Item do Banco de Dados ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Exclusao_de_um_Item_do_Banco_de_Dados/Exclusao_de_um_Item_do_Banco_de_Dados.htm")
						.addItem("S.3.22 Gerenciamento de Clientes", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Gerenciamento_Cliente/Gerenciamento_de_Clientes.htm")
						.addItem("S.3.23 Gerenciamento de Código de Barras", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Gerenciamento_Codigo_Barras/Gerenciamento_de_Codigo_de_Barras.htm")
						.addItem("S.3.24 Gerenciamento de Inventario ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Gerenciamento_Inventario/Gerenciamento_de_Inventario.htm")
						.addItem("S.3.25 Histórico de Transações e Vendas", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Historico_Transações_Vendas/Historico_de_Transacoes.htm")
						.addItem("S.3.26 Importar Banco de Dados", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Importar_Banco_de_Dados/Importar_banco_de_dados.htm")
						.addItem("S.3.27 Impressão", "link")
						.addItem("S.3.28 Inventário Secundário ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Inventário_Secundário/Inventario_Secundario.htm")
						.addItem("S.3.29 Meios de Pagamentos - Pagamentos em Dinheiro e Cartões de Crédito", "Procedimentos/SAT/Bemacash_NFCe_SAT/Pagamentos_em_dinheiro_e_cartoes_de_credito/Pagamentos_em_dinheiro_e_cartoes_de_credito.htm")
						.addItem("S.3.30 Módulo de Estoque, Modificadores e Ajuste da Quantidade Disponível em Estoque ", "Link")

						.addItem("S.3.31 Módulo Registrador (Compra) ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Modulo_registrador_compra/Modulo_registrador_compra.htm")
						.addItem("S.3.32 Módulo de Relatórios: Relatório Resumido de Vendas e Geração da Folha de Pagamento ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Modulo_de_Relatorios/Modulo_de_Relatorios.htm")
						.addItem("S.3.33 Notificações de Estoque ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Notificações_Estoque/Notificacoes_Itens_Estoque.htm")
						.addItem("S.3.34 Operação com Modificadores", "Procedimentos/SAT/Bemacash_NFCe_SAT/Operacao_com_modificadores/Operacao_com_modificadores.htm")
						.addItem("S.3.35 Operação sem Vendas, Saques e Pagamentos a Outros ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Operacao_sem_vendas_saques_e_pagamentos_a_outros/Operacao_sem_vendas_saques_e_pagamentos_a_outros.htm")
						.addItem("S.3.36 Ordem de Compras ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Ordem_Compra/Ordem_Compra.htm")
						.addItem("S.3.37 Outros Tipos de Pagamentos: Operação com Crédito na Loja e Pagamento Por Vários Meios ", "Link")
						.addItem("S.3.38 Painel de Controle Web ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Painel_Controle/Bemacash_Painel_Controle.htm")
						.addItem("S.3.39 Pedido em Espera e Invalidação de Pedidos ", "Link")
						.addItem("S.3.40 Portal Revendedor WEB ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Portal_Revendedor_WEB/Bemacash_Portal_Revendedor_WEB.htm")

						.addItem("S.3.41 Produtos em Grade ", "Link")
						.addItem("S.3.42 Relatórios via WEB ", "Link")
						.addItem("S.3.43 Requisitos ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_Requisitos/Requesitos.htm")
						.addItem("S.3.44 Relatório de Notas ", "Link")
						.addItem("S.3.45 SEFAZ ", "Link")
						.addItem("S.3.46 SPED Geração de Arquivo de Escrituração ", "Procedimentos/SAT/Bemacash_NFCe_SAT/Bemacash_SPED_Geracao_Arquivo_Escrituração/Geracao_Arquivo_Escrituracao.htm")
						.addItem("S.3.47 Tributos de Vendas ", "Link")
						.addItem("S.3.48 Troca de Operadores de Caixa ", "Link")
						.addItem("S.3.49 Venda de Item com Captura de Atendimento Rápido ", "Link")
						.addItem("S.3.50 Venda de Item com Captura na Visualização de Varejo", "Link")

						
			//Pasta Atualizações					
			var sAtualizacoes =
				Sat.addFolder("Atualizações");
				
					sAtualizacoes 
						.addItem("S.4.1 Atualizações SAT", "Procedimentos/SAT/SatFiscal_Atualizacoes/Atualizacoes_SAT/Atualizacoes.htm")
						
			//Pasta Cliente Final					
			var sClienteFinal =
				Sat.addFolder("Cliente Final");
				
					sClienteFinal 
						.addItem("S.5.1 0800 Atendimento ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_0800_Atendimento/0800.htm")
						.addItem("S.5.2 Abertura de OS - Cliente Corporativo SAT", "Procedimentos/SAT/SatFiscal_Cliente_Final/Abertura_de_OS_SAT/Abertura_OS.htm")
						.addItem("S.5.3 Alteração de Dados Cadastrais", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Alteracao_dados_cadastrais/Alteracao.htm")
						.addItem("S.5.4 Arquivo XML", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Arquivo_XML/XML.htm")
						.addItem("S.5.5 Ativação Associação ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Ativacao_associacao/Ativacao.htm")
						.addItem("S.5.6 Ativação De Equipamentos Fabricados Até Maio/2017 ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_ativacao_equip_maio_17/ativacao_equipamentos_fabricados_maio_17.htm")
						.addItem("S.5.7 Atualização RB-1000 e RB-2000 ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Atualizacao_RB1000_FI/Ativacao.htm")
						.addItem("S.5.8 Bloqueio Autônomo", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Bloqueio_Autonomo/Bloqueio.htm")
						.addItem("S.5.9 Bloqueio SEFAZ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Bloqueio_SEFAZ/Bloqueio_SEFAZ.htm")
						.addItem("S.5.10 Cliente Corporativo - Direcionamento Hardware", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Cliente_Corporativo_Direcionamento_Hardware/Cliente_Corporativo.htm")
						
						.addItem("S.5.11 Cliente SAT Remoto", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Cliente_Sat_Remoto/Sat_Remoto.htm")
						.addItem("S.5.12 Configuração de Rede", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Configuracao_de_Rede/Configuracao_de_Rede.htm")
						.addItem("S.5.13 Desativação SAT Fiscal", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Desativacao_SAT/Desativacao.htm")
						.addItem("S.5.14 Desativação SAT Fiscal - Bloqueio SEFAZ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Desativacao/Desativacao.htm")
						.addItem("S.5.15 Devolução De Equipamento - RMA", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_devolucao_de_equipamento_rma/devolucao.htm")
						.addItem("S.5.16 Direcionamento à Desenvolvedores", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Direcionamento_Desenvolvedor/Desenvolvedor.htm")
						.addItem("S.5.17 Encaminamento para o Setor Interno ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_encaminhamento_interno/encaminhamento_interno.htm")
						.addItem("S.5.18 Erro 06099 - Erro na Leitura Segura do Arquivo no Disco", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_06099/Erro_%2006099.htm")
						.addItem("S.5.19 Erro ao Associar Assinatura", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_ao_Associar_Assinatura/Erro_ao_Associar_Assinatura.htm")
						.addItem("S.5.20 Erro ao Passar Vendas", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_ao_Passar_Vendas/Erro_ao_Passar_Vendas.htm")

						.addItem("S.5.21 Erro ao Registrar Sessão", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_ao_registrar_sessao/Erro_ao_Registrar_Sessao.htm")
						.addItem("S.5.22 Erro de Comunicação com a SEFAZ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_de_Comunicacao_com_a_SEFAZ/Erro_Comunicacao.htm")
						.addItem("S.5.23 Erro de Envio por Contingência", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_envio_por_contingencia/Contingencia.htm")
						.addItem("S.5.24 Erro Database disk image is malformed", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_database_disk/erro_database.htm")
						.addItem("S.5.25 Erro de Validação de Conteúdo", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_de_Validacao_Conteudo/Erro_Validacao.htm")
						.addItem("S.5.26 Erro na Abertura da Porta de Comunicação com o SAT e/ou Bossa com port ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_Porta_de_Comunicacao/Configurar_Porta.htm")
						.addItem("S.5.27 Erro na Abertura da Porta de Comunicação com o SAT - Windows 8 e 10", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_na_Abertura_de_Porta_Windows/Erro_Abertura_de_Porta.htm")
						.addItem("S.5.28 Erro no Relógio", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_no_Relogio/Erro_Relogio.htm")
						.addItem("S.5.29 Erro no Teste Fim a Fim", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Erro_Teste_Fim_a_Fim/Teste_fim_a_fim.htm")
						.addItem("S.5.30 Especificações de Uso ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Especificacoes_de_Uso/Ativacao.htm")

						.addItem("S.5.31 Especificações Técnicas", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Especificacoes_Tecnicas/Especificacoes.htm")
						.addItem("S.5.32 Identificar Código de Ativação", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_identificar_cod_ativacao/identificar_cod_ativacao.htm")
						.addItem("S.5.33 Instalação", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Instalacao/Instalacao.htm")
						.addItem("S.5.34 Led CFE", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_led_cfe/led_cfe.htm")
						.addItem("S.5.35 Leds Informativos", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Leds_informativos/0800.htm")
						.addItem("S.5.36 Log de Status", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Logs_status/log_status.htm")
						.addItem("S.5.37 Lote em Processamento", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Lote_em_processamento/Lote_em_processamento.htm")
						.addItem("S.5.38 Lote Inválido", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Lote_Invalido/Lote_Invalido.htm")
						.addItem("S.5.39 Obrigatoriedade", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Obrigatoriedade/Obrigatoriedade.htm")
						.addItem("S.5.40 Projeto Ativação - SAT Fiscal", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Projeto_Ativação/Ativacao.htm")

						.addItem("S.5.41 RB2000 - Driver WIN10 (Assinatura Digital)", "Procedimentos/SAT/SatFiscal_Cliente_Final/RB2000_driver_win10/rb2000_driver.htm")
						.addItem("S.5.42 SAT Fiscal RB-2000 ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_RB2000/Ativacao.htm")
						.addItem("S.5.43 Software de Ativação - Especificações ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Software_Ativacao/Ativacao.htm")
						.addItem("S.5.44 Solicitar Laudo", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_solicitar_laudo/solicitar_laudo.htm")
						.addItem("S.5.45 Suporte ao Fiscal Manager", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Fiscal_Manager/Fiscal_Manager.htm")
						.addItem("S.5.46 Reset Código de Ativação", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Reset_Codigo_Ativacao/Sat_Reset_Codigo_Ativacao.htm")
						.addItem("S.5.47 Tabela de Erros ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Tabelas_de_Erros/Ativacao.htm")
						.addItem("S.5.48 Telas de Informações SAT", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Telas_%20de_%20Informacoes_SAT/Ativacao.htm")
						.addItem("S.5.49 Teste de Impressora", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Teste_de_Impressora/Teste.htm")
						.addItem("S.5.50 Projeto Ativação - Corporativo ", "Procedimentos/SAT/SatFiscal_Cliente_Final/SATFISCAL_Projeto_Ativação_corporativo/Projeto_Ativação_corporativo.htm")
						
			//Pasta Desenvolvedores						
			var sDesenvolvedores =
				Sat.addFolder("Desenvolvedores");
				
					sDesenvolvedores 
						.addItem("S.6.1 Ativação Associação", "Procedimentos/SAT/Satfiscal_Desenvolvedores/SATFISCAL_Ativacao_associacao/Ativacao.htm")
						.addItem("S.6.2 Convênio ICMS 85/01 - Requisitos Para Desenvolvimento De Equipamento Emissor De Cupom Fiscal", "Procedimentos/SAT/Satfiscal_Desenvolvedores/requisitos_de_equipamento/convenio_icms_85-01.pdf")
						
			//Pasta	Legislação
			var sLegislacao =
				Sat.addFolder("Legislação");
				
					sLegislacao 
						.addItem("S.7.1 Arquitetura SAT ", "Procedimentos/SAT/SatFiscal_Legislação/Arquitetura_SAT/Arquitetura_SAT.htm")
						.addItem("S.7.2 Atos COTEPE / ICMS 2013 - SAT RJ", "Procedimentos/SAT/SatFiscal_Legislação/ato_copete_icms_2013_rj/Convenio.htm")
						.addItem("S.7.3 Convênio 156/94 - 85/01 - 09/09 Impressoras e Acessórios ", "Procedimentos/SAT/SatFiscal_Legislação/Convênio%20156_94_85_01_09_09_Impressoras_Acessórios/Convenio.htm")
						.addItem("S.7.4 Convênio 85/01 09/09 o que muda? ", "Procedimentos/SAT/SatFiscal_Legislação/Convenio_85_01_09_09_o_que_muda/Convenio.htm")
						.addItem("S.7.5 Especificações Técnicas do SAT ", "Procedimentos/SAT/SatFiscal_Legislação/Especificacoes_Tecnicas_SAT/Especificacoes.htm")
						.addItem("S.7.6 ICMS 09/09 - Configurações / Conectividade ", "Procedimentos/SAT/SatFiscal_Legislação/ICMS_09_09_Configurações_Conectividade/Convenio.htm")
						.addItem("S.7.7 ICMS 09/09 - Integração de Softwares ", "Procedimentos/SAT/SatFiscal_Legislação/ICMS_09_09_Integração_Software/Integracao.htm")
						.addItem("S.7.8 ICMS 09/09 Tecnologias", "Procedimentos/SAT/SatFiscal_Legislação/ICMS_09_09_Tecnologias/Tecnologias.htm")
						.addItem("S.7.9 Legislação Comprovante Débito / Crédito", "Procedimentos/SAT/SatFiscal_Legislação/Legislação_Comprovante_Debito_Credito/Integracao.htm")
						.addItem("S.7.10 Legislação Convênio 09/09 ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacão_Convenio_09_09/Convenio.htm")

						.addItem("S.7.11 Legislação Convênio 156/94 ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Convenio_156_94/Convenio.htm")
						.addItem("S.7.12 Legislação Convênio 85/01", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Convenio_85_01/Convenio.htm")
						.addItem("S.7.13 Legislação Cupom Fiscal ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Cupom_Fiscal/CupomFiscal.htm")
						.addItem("S.7.14 Legislação Leitura X ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Leitura_X/LeituraX.htm")
						.addItem("S.7.15 Legislação Recebimento Não Fiscal ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Recebimento_Não_Fiscal/Recebimento.htm")
						.addItem("S.7.16 Legislação Redução Z ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Reducao_Z/ReducaoZ.htm")
						.addItem("S.7.17 Legislação Relatório Gerencial ", "Procedimentos/SAT/SatFiscal_Legislação/Legislação_Relatório_Gerencial/Gerencial.htm")
						.addItem("S.7.18 Legislação Suprimento Sangria", "Procedimentos/SAT/SatFiscal_Legislação/Legislação_Suprimento_Sangria/Sangria.htm")
						.addItem("S.7.19 Legislação Tabelas Contadores ", "Procedimentos/SAT/SatFiscal_Legislação/Legislacao_Tabelas_Contadores/Convenio.htm")
						.addItem("S.7.20 Portaria SAT-147 ( SAT de Contingência )", "Procedimentos/SAT/SatFiscal_Legislação/Portaria_CAT_147_2012_sat_contigencia/portaria.htm")

						.addItem("S.7.21 Terminologia Alíquotas ", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Aliquotas/Convenio.htm")
						.addItem("S.7.22 Terminologia Leitura X / Redução Z ", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_LeituraX_Redu%C3%A7%C3%A3oZ/Terminologia.htm")
						.addItem("S.7.23 Terminologia Meios Pagamentos", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Meios_Pagamentos/Terminologia.htm")
						.addItem("S.7.24 Terminologia Memória Fiscal ", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Mem%C3%B3ria_Fiscal/MF.htm")
						.addItem("S.7.25 Terminologia Memória Fita Detalhe", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Mem%C3%B3ria_Fita_Detalhe/MFD.htm")
						.addItem("S.7.26 Terminologia Suprimento / Sangria ", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Suprimento_Sangria/Terminologia.htm")
						.addItem("S.7.27 Terminologia Totalizador Geral / Totalizador Não Fiscal ", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Totalizador_Geral_Totalizador_Nao_Fiscal/Totalizadores.htm")
						.addItem("S.7.28 Terminologia Venda Bruta / Venda Liquida", "Procedimentos/SAT/SatFiscal_Legisla%C3%A7%C3%A3o/Terminologia_Venda%20Bruta_Venda%20Liquida/Totalizadores.htm")
						
				
		// Pasta TEF
		var Tef =
			celulas.addFolder("TEF");
	
			//Pasta TEF Express
			var tExpress =
				Tef.addFolder("Express");
				
					tExpress 
						.addItem("T.1.1 Alelo Auto - Requisitos", "Procedimentos/TEF/TEF%20Express/Alelo_auto_requisitos/Alelo_auto_requisitos.htm")
						.addItem("T.1.2 Abertura de O.S – Pinpad com número de série ilegível ou inexistente", "Procedimentos/TEF/TEF%20Express/Abertura_%20OS_pinpad_com_numero_de_serie_ilegivel_ou_inexistente/OS_Pinpad.htm")
						.addItem("T.1.3 Abertura de O.S - Número Lógico", "Procedimentos/TEF/TEF%20Express/OS_numero_logico/Numero_Logico.htm")
						.addItem("T.1.4 Abertura de O.S - Substituição de Pinpad", "Procedimentos/TEF/TEF%20Express/OS_substituicao_do_pinpad/OS_Pinpad.htm")
						.addItem("T.1.5 Adquirentes Aceitas no TEF Express", "Procedimentos/TEF/Cartoes_Aceitos/Tef_Express.htm")
						.addItem("T.1.6 Alteração Cadastral - Workfinity e Agent TEF", "Procedimentos/TEF/TEF%20Express/Alteracao_cadastro_WKF/Alterar_cadastro_wkf.htm")
						.addItem("T.1.7 Ativação Console Geral", "Procedimentos/TEF/TEF%20Express/Ativacao_Console_Geral/Ativacao.htm")
						.addItem("T.1.8 Atualização de Dados Cadastrais - Cupom", "Procedimentos/TEF/TEF%20Express/atualizacao_cadastral/Ativacao.htm")
						.addItem("T.1.9 Atualização de Licença", "Procedimentos/TEF/TEF%20Express/Atualizacao_de_licenca/Atualizacao_de_licenca.htm")
						.addItem("T.1.10 Atualização Sitef", "Procedimentos/TEF/TEF%20Express/atualizacao_sitef/atualizacao_sitef.htm")

						.addItem("T.1.11 Atualizar Certificado de Acesso aos Relatórios SITEF", "Procedimentos/TEF/TEF%20Express/Atualizar_certificado_de_acesso_sitef_hospedado/Atualizar_certificado_de_acesso_sitef_hospedado.htm")
						.addItem("T.1.12 Atualizar Módulo Stone", "Procedimentos/TEF/TEF%20Express/Configurar_modulo_stone_circular_atualizar_modulo/atualizar_modulo_stone.htm")
						.addItem("T.1.13 Bematech Conciliador", "Procedimentos/TEF/TEF%20Express/Bematech_Conciliador/Bematech_Conciliador.htm")
						.addItem("T.1.14 Bandeiras Aceitas na Stone", "Procedimentos/TEF/TEF%20Express/Bandeira_stone/Bandeiras_stone.htm")
						.addItem("T.1.15 Bandeira ELO Pela Adquitente GetNet", "Procedimentos/TEF/TEF%20Express/Bandeira_elo_getnet/Bandeira_elo_getnet.htm")
						.addItem("T.1.16 Cancelamento de Número Lógico", "Procedimentos/TEF/TEF%20Express/Cancelamento_de_numero_logico/Numero_Logico.htm")
						.addItem("T.1.17 Cancelamento TEF", "Procedimentos/TEF/TEF%20Express/Cancelamento_TEF/Cancelamento.htm")
						.addItem("T.1.18 Cancelamento TEF - Fluxo de Status", "Procedimentos/TEF/TEF Express/Cancelamento_TEF_status/Status_ag_tef.htm")
						.addItem("T.1.19 Cancelar Solicitação de Cancelamento TEF", "Procedimentos/TEF/TEF%20Express/Cancelar_solicitacao_cancelamento_tef/Cancelar_solicitacao_cancelamento_tef.htm")
						.addItem("T.1.20 Cancelamento de Transação", "Procedimentos/TEF/TEF%20Express/Cancelamento_transacao/Cancelamento_Transacao.htm")

						.addItem("T.1.21 Característica TEF", "Procedimentos/TEF/TEF%20Express/Carateristicas_tef/Carateristicas_tef.htm")
						.addItem("T.1.22 Carga de Tabelas", "Procedimentos/TEF/TEF%20Express/Carga_de_Tabelas/Carga_Tabelas.htm")
						.addItem("T.1.23 Cliente SoftwareHouse", "Procedimentos/TEF/TEF%20Express/cliente_softwarehouse/cliente_softwarehouse.htm")
						.addItem("T.1.24 Cliente Não Possui Adquirente", "Procedimentos/TEF/TEF%20Express/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")
				//Falta o 25
						.addItem("T.1.26 Comunicação SiTef com Sistema de Automação", "Procedimentos/TEF/TEF%20Express/Comunicacao_sitef_com_sistema_de_automacao/Comunicacao_sitef_com_sistema_de_automacao.htm")
						.addItem("T.1.27 Configurar Bandeira Valemais", "Procedimentos/TEF/TEF%20Express/Configurar_Bandeira_Valemais/Configurar_Modulo_Valemais.htm")
						.addItem("T.1.28 Configurar Cielo", "Procedimentos/TEF/TEF%20Express/Configurar_Cielo/Configurar_Cielo.htm")
						.addItem("T.1.29 Configurar Elavon", "Procedimentos/TEF/TEF%20Express/Configurar_Elavon/Configurar_Elavon.htm")
						.addItem("T.1.30 Configurar Módulo BanesCard", "Procedimentos/TEF/TEF%20Express/Configurar_modulo_banescard/Configurar_modulo_banescard.htm")

						.addItem("T.1.31 Configurar Módulo CooperCred", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_coopercred/Configurar_Modulo_coopercred.htm")
						.addItem("T.1.32 Configurar Módulo DMCard", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_DMCard/Configurar_Dmcard.htm")
						.addItem("T.1.33 Configurar Módulo Getnet", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_GetNet/Configurar_Getnet.htm")
						.addItem("T.1.34 Configurar Módulo Stand-By", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_Standby/Configurar_Stand.htm")
						.addItem("T.1.35 Configurar Módulo Neus", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_Neus/Configurar_Modulo_Neus.htm")
						.addItem("T.1.36 Configurar Módulo Nutricard", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_nutricard/Configurar_nutricard.htm")
						.addItem("T.1.37 Configurar Multi Bandeiras", "Procedimentos/TEF/TEF%20Express/Configurador_Multi_Bandeiras/Configurador.htm")
						.addItem("T.1.38 Configurar Pinpad", "Procedimentos/TEF/TEF%20Express/Configurar_pinpad/Configurar_pinpad.htm")
						.addItem("T.1.39 Configurar Rede", "Procedimentos/TEF/TEF%20Express/Configurar_Rede/Configurar_Rede.htm")
						.addItem("T.1.40 Consulta de Assistência - Workfinity", "Procedimentos/TEF/TEF%20Express/Consulta_de_Assistencia_Workfinity/Consulta_Assistencia.htm")

						.addItem("T.1.41 Consultar Transações", "Procedimentos/TEF/TEF%20Express/Consultar_transacoes/Consultar_Transacoes.htm")
						.addItem("T.1.42 Consultar Visualizador de Tabelas", "Procedimentos/TEF/TEF%20Express/consultar_visualizador_tabelas/consultar_visualizador_tabelas.htm")
						.addItem("T.1.43 Erro 03 Estab. Inval.", "Procedimentos/TEF/TEF%20Express/erro_03_estab_inval/erro_03_estab_inval.htm")
						.addItem("T.1.44 Erro -31 Pinpad", "Procedimentos/TEF/TEF%20Express/Erro_-31_pinpad/Erro_-31.htm")
						.addItem("T.1.45 Erro 70 Módulo Inválido", "Procedimentos/TEF/TEF%20Express/Erro_70_Modo_Invalido/Erro_70_Modo_Invalido.htm")
						.addItem("T.1.46 Erro 5 VPN (GSURF)", "Procedimentos/TEF/TEF%20Express/Erro_5_VPN/Erro_5.htm")
						.addItem("T.1.47 Erro 56, 440 ou 442 VPN", "Procedimentos/TEF/TEF%20Express/Erros_56_440_ou_442/Erro_56_440_442.htm")
						.addItem("T.1.48 Erro 413 VPN", "Procedimentos/TEF/TEF%20Express/Erro_413_VPN/Erro_413.htm")
						.addItem("T.1.49 Erro de Comunicação com o Pinpad", "Procedimentos/TEF/TEF%20Express/Erro_comunicacao_com_pinpad/Erro_Pinpad.htm")
						.addItem("T.1.50 Erro de Comunicação com o SITEF", "Procedimentos/TEF/TEF%20Express/Erro_de_comunicacao_com_Sitef/Erro_Sitef.htm")

						.addItem("T.1.51 Erro Dll Controle Geral Sitef Não Encontrada", "Procedimentos/TEF/TEF%20Express/Erro_dll_controle_geral_sitef_nao_encontrada/Erro_dll_controle_geral_sitef_nao_encontrada.htm")
						.addItem("T.1.52 Erro Função Bind: 10013", "Procedimentos/TEF/TEF%20Express/Erro_funcao_bind_10013/Erro_funcao_bind_10013.htm")
						.addItem("T.1.53 Erro Insira ou Passe o Cartão", "Procedimentos/TEF/TEF%20Express/Erro_insira_ou_passe_o_cartao/Insira_Cartao.htm")
						.addItem("T.1.54 Erro no Arquivo de Saída STS", "Procedimentos/TEF/TEF%20Express/erro_arquivo_de_saida_sts_local/Erro_arquivo_saida_STS_local.htm")
						.addItem("T.1.55 Erro Tente de Novo TO", "Procedimentos/TEF/TEF%20Express/Erro_tente_de_novo_TO/Tente_de_novo.htm")
						.addItem("T.1.56 Erro VPN Slim Comnect Desconectada", "Procedimentos/TEF/TEF%20Express/Erro_VPN_Slim_Comnect_desconectada/Erro_VPN_Slim_Comnect_desconectada.htm")
						.addItem("T.1.57 Falha TCP/IP", "Procedimentos/TEF/TEF%20Express/Falha_tcp_ip/Falha_TCP.htm")
						.addItem("T.1.58 Inclusão de Checkout", "Procedimentos/TEF/TEF%20Express/Inclusao_checkout/Inclusao_checkout.htm")
						.addItem("T.1.59 Inclusão de Novas Adquirentes", "Procedimentos/TEF/TEF%20Express/Inclusao_de_novos_adquirentes/Novas_Adquirentes.htm")
						.addItem("T.1.60 Migração Sitef 5 para SiTef 6", "Procedimentos/TEF/TEF%20Express/migracao_sitef5_para_sitef6/migracao_sitef5_para_sitef6.htm")

						.addItem("T.1.61 Modalidades SiTef", "Procedimentos/TEF/TEF%20Express/Modalidades_sitef/Modalidades_sitef.htm")
						.addItem("T.1.62 Módulo Inválido", "Procedimentos/TEF/TEF%20Express/Erro_modulo_invalido/Modulo_Invalido.htm")
						.addItem("T.1.63 Erro - Usuário Não Possui Permissão Para Acessar O CFSitef", "Procedimentos/TEF/TEF%20Express/Erro_permissao_para_acessar_cfsitef/erro_permissao_para_acessar_cfsitef.htm")
						.addItem("T.1.64 Erro Pinpad 11, 30 ou 35", "Procedimentos/TEF/TEF%20Express/Erro_pinpad_11_30_35/Erro_pinpad_11_30_35.htm")
						.addItem("T.1.65 Pendente Lic (Status Agente Tef)", "Procedimentos/TEF/TEF%20Express/Pendente_lic/Pendente_lic.htm")
						.addItem("T.1.66 Perda/Furto/Extravio de Pinpad", "Procedimentos/TEF/TEF%20Express/Pinpad_extravio/Pinpad_extravio.htm")
						.addItem("T.1.67 Pinpad - Alteração de informação no visor", "Procedimentos/TEF/TEF%20Express/pinpad_alteracao_de_informacoes_no_visor/pinpad_alteracao_de_informacoes_no_visor.htm")
						.addItem("T.1.68 Pinpad - Auto Teste ou Erro 0040", "Procedimentos/TEF/TEF%20Express/Pinpad_Auto_Teste_0040/Pinpad_Auto_teste_0040.htm")
						.addItem("T.1.69 Pinpad - Equipamento Novo Com Defeito", "Procedimentos/TEF/TEF%20Express/Pinpad_novo_defeito/pinpad_novo_com_defeito.htm")
						.addItem("T.1.70 Pinpad - Devolução", "Procedimentos/TEF/TEF%20Express/Pinpad_devolucao/Pinpad_devolucao.htm")

						.addItem("T.1.71 Pinpad - Número de Série Não Localizado", "Procedimentos/TEF/TEF%20Express/Pinpad_numero_serie_nao_localizado/Pinpad_numero_serie_nao_localizado.htm")
						.addItem("T.1.72 Refaça a Transação", "Procedimentos/TEF/TEF%20Express/Erro_refaca_a_transacao/Refaca_Transacao.htm")
						.addItem("T.1.73 Reinstalação TEF", "Procedimentos/TEF/TEF%20Express/Reinstalacao/Reinstalacao.htm")
						.addItem("T.1.74 Relatorio SiTef Local - Consulta e durabilidade", "Procedimentos/TEF/TEF%20Express/relatorio_sitef_local_consulta_durabilidade/relatorio_sitef_local_consulta_durabilidade.htm")
						.addItem("T.1.75 Serviço Indisponível (Carga de Tabelas)", "Procedimentos/TEF/TEF%20Express/Servico_indisponivel_carga_de_tabelas/Servico_indisponivel_carga_de_tabelas.htm")
						.addItem("T.1.76 Serviço Indisponível (Carga de Tabelas BIN)", "Procedimentos/TEF/TEF%20Express/Serv_indisp_carga_da_bin/Serv_indisp_carga_da_bin.htm")
						.addItem("T.1.77 Sitef Fora do Ar", "Procedimentos/TEF/TEF%20Express/Sitef_Fora_Do_Ar/Sitef_fora_do_ar.htm")
						.addItem("T.1.78 Sitef Não Ativo", "Procedimentos/TEF/TEF%20Express/Sitef_Nao_Ativo/Sitef_nao_Ativo.htm")
						.addItem("T.1.79 Sitef Não Responde", "Procedimentos/TEF/TEF%20Express/SITEF_nao_responde_sem_comunicacao_com_sitef/SITEF_nao_responde_sem_comunicacao_com_sitef.htm")
						.addItem("T.1.80 SiTef Não Inicia Junto Ao Windows 10", "Procedimentos/TEF/TEF%20Express/sitef_nao_inicia_junto_ao_sistema/sitef_nao_inicia_junto_ao_w10.htm")

						.addItem("T.1.81 TEF Licença Provisória", "Procedimentos/TEF/TEF Express/TEF_licenca_provisoria/tef_provisorio.htm")
						.addItem("T.1.82 Teste de Vendas - Simulador PDV", "Procedimentos/TEF/TEF%20Express/Teste_de_Vendas_com_PDV_Simulador/Teste_PDV.htm")
						.addItem("T.1.83 Transação Pendente", "Procedimentos/TEF/TEF%20Express/transacao_pendente/Terminal_Bloqueado.htm")
						.addItem("T.1.84 Transacionar Cartões AMEX e ELO através da adquirente Rede", "Procedimentos/TEF/TEF%20Express/Transacionar_Cartoes_ELO_AMEX_atraves_REDE/Transacionar_ELO_AMEX_atraves_REDE.htm")
						.addItem("T.1.85 Troca de Assistência Técnica", "Procedimentos/TEF/TEF%20Express/Troca_de_Assistencia_Tecnica/Troca_de_assistencia.htm")
						.addItem("T.1.86 Troca de CNPJ / Inscrição Estadual", "Procedimentos/TEF/TEF%20Express/troca_de_cnpj/troca_cnpj.htm")
						.addItem("T.1.87 Troca de Equipamento com Defeito", "Procedimentos/TEF/TEF%20Express/Troca_equipamento/Troca_Equipamento.htm")
						.addItem("T.1.88 Troca de Modalidade TEF", "Procedimentos/TEF/TEF%20Express/Troca_de_Modalidade_TEF/Troca_modalidade.htm")
						.addItem("T.1.89 VPN GSURF Bandeiras Inativa", "Procedimentos/TEF/TEF%20Express/vpn_gsurf_bandeiras_inativas/vpn_gsurf_bandeiras_inativas.htm")
						.addItem("T.1.90 VPN GSURF teste de conectividade", "Procedimentos/TEF/TEF%20Express/vpn_gsurf_teste_de_conectividade/vpn_gsurf_teste_de_conectividade.htm")

						.addItem("T.1.91 VPN ID e Senha", "Procedimentos/TEF/TEF Express/VPN_id_e_senha/tef_provisorio.htm")
						.addItem("T.1.92 Bandeiras SoroCred, Ticket, Sodexo e Cabal Via SafraPay", "Procedimentos/TEF/TEF%20Express/Bandeira_soroCred_ticket_Sodexo_cabal_safrapay/Bandeira_soroCred_ticket_Sodexo_cabal_safrapay%20.htm")
						.addItem("T.1.93 Configurar Módulo SafraPay", "Procedimentos/TEF/TEF%20Express/Configurar_Modulo_safrapay/Configurar_safrapay.htm")
						.addItem("T.1.94 Novo campo de Busca Agente TEF", "Procedimentos/TEF/TEF%20Express/Novo_campo_agente_TEF/campo_agente_tef.htm")
						.addItem("T.1.95 Ordem de Serviço em atraso", "Procedimentos/TEF/TEF%20Express/OS_em_Atraso/atraso.html")
												
			
			//Pasta TEF Express Hospedado
			var tExpressHosp =
				Tef.addFolder("Express Hospedado");
				
					tExpressHosp 						
							.addItem("T.2.1 Abertura de O.S – Pinpad com número de série ilegível ou inexistente", "Procedimentos/TEF/TEF%20Express/Abertura_%20OS_pinpad_com_numero_de_serie_ilegivel_ou_inexistente/OS_Pinpad.htm")
							.addItem("T.2.2 Abertura de O.S - Número Lógico", "Procedimentos/TEF/TEF%20Express/OS_numero_logico/Numero_Logico.htm")
							.addItem("T.2.3 Abertura de O.S - Substituição de Pinpad", "Procedimentos/TEF/TEF%20Express/OS_substituicao_do_pinpad/OS_Pinpad.htm")
							.addItem("T.2.4 Adquirentes Aceitas no TEF Express", "Procedimentos/TEF/Cartoes_Aceitos/Tef_Express.htm")
							.addItem("T.2.5 Alteração Cadastral - Workfinity e Agent TEF", "Procedimentos/TEF/TEF%20Express/Alteracao_cadastro_WKF/Alterar_cadastro_wkf.htm")
							.addItem("T.2.6 Atualização de Dados Cadastrais - Cupom", "Procedimentos/TEF/TEF%20Express/atualizacao_cadastral/Ativacao.htm")
							.addItem("T.2.7 Atualizar Certificado de Acesso aos Relatórios SITEF", "Procedimentos/TEF/TEF%20Express/Atualizar_certificado_de_acesso_sitef_hospedado/Atualizar_certificado_de_acesso_sitef_hospedado.htm")
							.addItem("T.2.8 Bematech Conciliador", "Procedimentos/TEF/TEF%20Express/Bematech_Conciliador/Bematech_Conciliador.htm")
							.addItem("T.2.9 Bandeiras Aceitas na Stone", "Procedimentos/TEF/TEF%20Express/Bandeira_stone/Bandeiras_stone.htm")
							.addItem("T.2.10 Cancelamento de Número Lógico", "Procedimentos/TEF/TEF%20Express/Cancelamento_de_numero_logico/Numero_Logico.htm")

							.addItem("T.2.11 Cancelamento TEF", "Procedimentos/TEF/TEF%20Express/Cancelamento_de_numero_logico/Numero_Logico.htm")
							.addItem("T.2.12 Cancelamento TEF - Fluxo de Status", "Procedimentos/TEF/TEF Express/Cancelamento_TEF_status/Status_ag_tef.htm")
							.addItem("T.2.13 Cancelar Solicitação de Cancelamento TEF", "Procedimentos/TEF/TEF%20Express/Cancelar_solicitacao_cancelamento_tef/Cancelar_solicitacao_cancelamento_tef.htm")
							.addItem("T.2.14 Cancelamento de Transação", "Procedimentos/TEF/TEF%20Express/Cancelamento_transacao/Cancelamento_Transacao.htm")
							.addItem("T.2.15 Característica TEF", "Procedimentos/TEF/TEF%20Express/Carateristicas_tef/Carateristicas_tef.htm")
							.addItem("T.2.16 Cliente SoftwareHouse", "Procedimentos/TEF/TEF%20Express/cliente_softwarehouse/cliente_softwarehouse.htm")
							.addItem("T.2.17 Cliente Não Possui Adquirente", "Procedimentos/TEF/TEF%20Express/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")
							.addItem("T.2.18 Comunicação SiTef com Sistema de Automação", "Procedimentos/TEF/TEF%20Express/Comunicacao_sitef_com_sistema_de_automacao/Comunicacao_sitef_com_sistema_de_automacao.htm")
							.addItem("T.2.19 Consulta de Assistência - Workfinity", "Procedimentos/TEF/TEF%20Express/Consulta_de_Assistencia_Workfinity/Consulta_Assistencia.htm")
							.addItem("T.2.20 Erro -31 Pinpad", "Procedimentos/TEF/TEF%20Express/Erro_-31_pinpad/Erro_-31.htm")

							.addItem("T.2.21 Erro 5 VPN (GSURF)", "Procedimentos/TEF/TEF%20Express/Erro_5_VPN/Erro_5.htm")
							.addItem("T.2.22 Erro 56, 440 ou 442 VPN", "Procedimentos/TEF/TEF%20Express/Erros_56_440_ou_442/Erro_56_440_442.htm")
							.addItem("T.2.23 Erro 413 VPN", "Procedimentos/TEF/TEF%20Express/Erro_413_VPN/Erro_413.htm")
							.addItem("T.2.24 Erro de Comunicação com o SITEF", "Procedimentos/TEF/TEF%20Express/Erro_de_comunicacao_com_Sitef/Erro_Sitef.htm")
							.addItem("T.2.25 Erro no Arquivo de Saída STS", "Procedimentos/TEF/TEF%20Express/erro_arquivo_de_saida_sts/Erro_arquivo_saida_STS.htm")
							.addItem("T.2.26 Erro Tente de Novo TO", "Procedimentos/TEF/TEF%20Express/Erro_tente_de_novo_TO/Tente_de_novo.htm")
							.addItem("T.2.27 Erro VPN Slim Comnect Desconectada", "Procedimentos/TEF/TEF%20Express/Erro_VPN_Slim_Comnect_desconectada/Erro_VPN_Slim_Comnect_desconectada.htm")
							.addItem("T.2.28 Falha TCP/IP", "Procedimentos/TEF/TEF%20Express/Falha_tcp_ip/Falha_TCP.htm")
							.addItem("T.2.29 Inclusão de Checkout", "Procedimentos/TEF/TEF%20Express/Inclusao_checkout/Inclusao_checkout.htm")
							.addItem("T.2.30 Modalidades SiTef", "Procedimentos/TEF/TEF%20Express/Modalidades_sitef/Modalidades_sitef.htm")

							.addItem("T.2.31 Módulo Inválido", "Procedimentos/TEF/TEF%20Express/Erro_modulo_invalido/Modulo_Invalido.htm")
							.addItem("T.2.32 Erro Pinpad 11, 30 ou 35", "Procedimentos/TEF/TEF%20Express/Erro_pinpad_11_30_35/Erro_pinpad_11_30_35.htm")
							.addItem("T.2.33 Pendente Lic (Status Agente Tef)", "Procedimentos/TEF/TEF%20Express/Pendente_lic/Pendente_lic.htm")
							.addItem("T.2.34 Perda/Furto/Extravio de Pinpad", "Procedimentos/TEF/TEF%20Express/Pinpad_extravio/Pinpad_extravio.htm")
							.addItem("T.2.35 Pinpad - Auto Teste ou Erro 0040", "Procedimentos/TEF/TEF%20Express/Pinpad_Auto_Teste_0040/Pinpad_Auto_teste_0040.htm")
							.addItem("T.2.36 Pinpad - Equipamento Novo Com Defeito", "Procedimentos/TEF/TEF%20Express/Pinpad_novo_defeito/pinpad_novo_com_defeito.htm")
							.addItem("T.2.37 Pinpad - Devolução", "Procedimentos/TEF/TEF%20Express/Pinpad_devolucao/Pinpad_devolucao.htm")
							.addItem("T.2.38 Pinpad - Número de Série Não Localizado", "Procedimentos/TEF/TEF%20Express/Pinpad_numero_serie_nao_localizado/Pinpad_numero_serie_nao_localizado.htm")
							.addItem("T.2.39 Refaça a Transação", "Procedimentos/TEF/TEF%20Express/Erro_refaca_a_transacao/Refaca_Transacao.htm")
							.addItem("T.2.40 Configurar Pinpad", "Procedimentos/TEF/TEF%20Express/Sitef_hospedado_configurar_pinpad/Configurar_pinpad.htm")

							.addItem("T.2.41 Consulta de Transações", "Procedimentos/TEF/TEF%20Express/Sitef_Hospedado_Consulta_de_Transacao/Consulta_Transacao.htm")
							.addItem("T.2.42 Fora do Ar", "Procedimentos/TEF/TEF%20Express/Sitef_Hospedado_Fora_do_Ar/Sitef_hospedado_fora_do_ar.htm")
							.addItem("T.2.43 Inclusão de Novas Adquirentes", "Procedimentos/TEF/TEF%20Express/Sitef_hospedado_Inclusao_de_novos_adquirentes/Novas_Adquirentes.htm")
							.addItem("T.2.44 Reset Senha SiTef WEB", "Procedimentos/TEF/TEF%20Express/Reset_senha_sitef_web/Reset_senha_sitef_web.htm")
							.addItem("T.2.45 Resumo de Movimento", "Procedimentos/TEF/TEF%20Express/Sitef_Hospedado_Resumo_de_Movimento/Resumo_Movimento.htm")
							.addItem("T.2.46 Sem Conexão SiTef", "Procedimentos/TEF/TEF%20Express/Sitef_hospedado_sem_conexao_sitef/sem_conexao_sitef.htm")
							.addItem("T.2.47 Transação Pendente", "Procedimentos/TEF/TEF%20Express/sitef_hospedado_sitef_web_transacoes_pendentes/sitef_hospedado_sitef_web_consulta_transacoes_pendentes.htm")
							.addItem("T.2.48 TEF Licença Provisória", "Procedimentos/TEF/TEF Express/TEF_licenca_provisoria/tef_provisorio.htm")
							.addItem("T.2.49 Troca de Assistência Técnica", "Procedimentos/TEF/TEF%20Express/Troca_de_Assistencia_Tecnica/Troca_de_assistencia.htm")
							.addItem("T.2.50 Troca de CNPJ / Inscrição Estadual", "Procedimentos/TEF/TEF%20Express/troca_de_cnpj/troca_cnpj.htm")

							.addItem("T.2.51 Troca de Equipamento com Defeito", "Procedimentos/TEF/TEF%20Express/Troca_equipamento/Troca_Equipamento.htm")
							.addItem("T.2.52 Troca de Modalidade TEF", "Procedimentos/TEF/TEF%20Express/Troca_de_Modalidade_TEF/Troca_modalidade.htm")
							.addItem("T.2.53 VPN GSURF Bandeiras Inativa", "Procedimentos/TEF/TEF%20Express/vpn_gsurf_bandeiras_inativas/vpn_gsurf_bandeiras_inativas.htm")
							.addItem("T.2.54 VPN GSURF teste de conectividade", "Procedimentos/TEF/TEF%20Express/vpn_gsurf_teste_de_conectividade/vpn_gsurf_teste_de_conectividade.htm")
							.addItem("T.2.55 VPN ID e Senha", "Procedimentos/TEF/TEF Express/VPN_id_e_senha/tef_provisorio.htm")
							.addItem("T.2.56 Novo campo de Busca Agente TEF", "Procedimentos/TEF/TEF%20Express/Novo_campo_agente_TEF/campo_agente_tef.htm")
							.addItem("T.2.57 Ordem de Serviço em atraso", "Procedimentos/TEF/TEF%20Express/OS_em_Atraso/atraso.html")						
									
			
			//pasta TEF Total
			var tTotal =
				Tef.addFolder("Total");
				
					tTotal 
						.addItem("T.3.1 Abertura de O.S – Pinpad com número de série ilegível ou inexistente", "Procedimentos/TEF/TEF%20Total/Abertura_%20OS_pinpad_com_numero_de_serie_ilegivel_ou_inexistente/OS_Pinpad.htm")
						.addItem("T.3.2 Abertura de O.S. Substituição do Pinpad", "Procedimentos/TEF/TEF%20Total/Abertura_OS_substituicao_do_pinpad/OS_Pinpad.htm")
						.addItem("T.3.3 Adquirentes Aceitas no TEF Total", "Procedimentos/TEF/Cartoes_Aceitos/Tef_Total.htm")
						.addItem("T.3.4 Alteração Cadastral - Workfinity e Agent TEF", "Procedimentos/TEF/TEF%20Total/Alteracao_cadastro_WKF/Alterar_cadastro_wkf.htm")
						.addItem("T.3.5 Atualização de Dados Cadastrais - Cupom", "Procedimentos/TEF/TEF%20Total/atualizacao_cadastral/Atualizacao.htm")
						.addItem("T.3.6 Autenticação do Terminal - Erro: Dados Do Aparelho Não Conferem", "Procedimentos/TEF/TEF%20Total/autenticacao_do_terminal_aparelho_nao_confere/autenticacao_do_terminal_aparelho_nao_confere.htm")
						.addItem("T.3.7 Bandeiras Aceitas na Stone", "Procedimentos/TEF/TEF%20Total/Bandeira_stone/Bandeiras_stone.htm")
						.addItem("T.3.8 Bandeira Própria de Adquirente", "Procedimentos/TEF/TEF%20Total/Bandeira_propria_de_adquirente/Bandeira_propria_de_adquirente.htm")
						.addItem("T.3.9 Cancelamento de Número Lógico", "Procedimentos/TEF/TEF%20Total/Cancelamento_de_numero_logico/Numero_Logico.htm")
						.addItem("T.3.10 Cancelamento TEF", "Procedimentos/TEF/TEF%20Total/Cancelamento_TEF/Cancelamento.htm")

						.addItem("T.3.11 Cancelamento TEF - Fluxo de Status", "Procedimentos/TEF/TEF Total/Cancelamento_TEF_status/Status_ag_tef.htm")
						.addItem("T.3.12 Cancelamento de Transação", "Procedimentos/TEF/TEF%20Total/Cancelamento_Transacao/Cancelamento_Transacao.htm")
						.addItem("T.3.13 Cancelar Solicitação de Cancelamento TEF", "Procedimentos/TEF/TEF%20Total/Cancelar_solicitacao_cancelamento_tef/Cancelar_solicitacao_cancelamento_tef.htm")
						.addItem("T.3.14 Característica TEF", "Procedimentos/TEF/TEF%20Total/Carateristicas_tef/Carateristicas_tef.htm")
						.addItem("T.3.15 Carga de Tabelas", "Procedimentos/TEF/TEF%20Total/Carga_de_Tabelas/Carga_Tabelas.htm")
						.addItem("T.3.16 Cartão Não Autorizado - Erros 51,52,53,54,55 e 56", "Procedimentos/TEF/TEF%20Total/Cartao_nao_Autorizado%20-%2051,52,53,54,55%20e%2056/Cartao_nao_Autorizado.htm")
						.addItem("T.3.17 Cliente Não Possui Adquirente", "Procedimentos/TEF/TEF%20Total/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")
						.addItem("T.3.18 Concentrar Rota Adquirente", "Procedimentos/TEF/TEF%20Total/Concentrar_rota_adquirente/Concentrar_Rota.htm")
						.addItem("T.3.19 Configurar Pinpad", "Procedimentos/TEF/TEF%20Total/Configurar_pinpad/Configurar_Pinpad.htm")
						.addItem("T.3.20 Consulta de Assistência - Workfinity", "Procedimentos/TEF/TEF%20Total/Consulta_de_Assistencia_Workfinity/Consulta_Assistencia.htm")

						.addItem("T.3.21 Consultar Transações", "Procedimentos/TEF/TEF%20Total/Consultar_transacoes/Consulta_Transacao.htm")
						.addItem("T.3.22 Erro 0000 - Retorno 11", "Procedimentos/TEF/TEF%20Total/Erro_0000_11/Erro_0000_11.htm")
						.addItem("T.3.23 Erro 0000 - Retorno 16", "Procedimentos/TEF/TEF%20Total/Erro_0000_16/Erro_0000_16.htm")
						.addItem("T.3.24 Erro 0040", "Procedimentos/TEF/TEF%20Total/Erro_0040/Erro_0040.htm")
						.addItem("T.3.25 Erro 0203", "Procedimentos/TEF/TEF%20Total/Erro_0203/Erro_0203.htm")
						.addItem("T.3.26 Erro 0210", "Procedimentos/TEF/TEF%20Total/Erro_0210/Erro_0210.htm")
						.addItem("T.3.27 Erro 0211", "Procedimentos/TEF/TEF%20Total/Erro_0211/Erro_0211.htm")
						.addItem("T.3.28 Erro 0241", "Procedimentos/TEF/TEF%20Total/Erro_0241/Erro_0241.htm")
						.addItem("T.3.29 Erro 1 - Carga de Tabelas", "Procedimentos/TEF/TEF%20Total/Erro_1_Carga_de_Tabelas/Carga_Tabelas.htm")
						.addItem("T.3.30 Erro 1004 Retorno 02", "Procedimentos/TEF/TEF%20Total/Erro_1004_retorno_02/Erro_1004.htm")

						.addItem("T.3.31 Erro 1014", "Procedimentos/TEF/TEF%20Total/Erro_1014/Erro_1014.htm")
						.addItem("T.3.32 Erro 20 - Problema Pinpad", "Procedimentos/TEF/TEF%20Total/Erro%2020%20-%20Problema%20Pinpad/Erro_20.htm")
						.addItem("T.3.33 Erro 99 - Pinpad", "Procedimentos/TEF/TEF%20Total/Erro_99_pinpad/Erro_99.htm")
						.addItem("T.3.34 Erro 999", "Procedimentos/TEF/TEF%20Total/Erro_999/Erro_999.htm")
						.addItem("T.3.35 Erro Ao Levantar CTF", "Procedimentos/TEF/TEF%20Total/Erro_ao_levantar/Erro_ao_levantar.htm")
						.addItem("T.3.36 Erro Config ou 1024", "Procedimentos/TEF/TEF%20Total/Erro_config_ou_1024/Erro_1024.htm")
						.addItem("T.3.37 Erro De Dados Cadastrais Auttar", "Procedimentos/TEF/TEF%20Total/erro_dados_cadastrais_auttar/erro_dados_cadastrais_auttar.htm")
						.addItem("T.3.38 Erro Não Disponível E6", "Procedimentos/TEF/TEF%20Total/Erro_Nao_Disponivel_E6/Erro_E6.htm")
						.addItem("T.3.39 Erro PANDESCONECT-NH", "Procedimentos/TEF/TEF%20Total/Erro_pandesconect-nh/Erro_pandesconect-nh.htm")
						.addItem("T.3.40 Erro Tente de Novo TO", "Procedimentos/TEF/TEF%20Total/Erro_tente_de_novo_TO/Tente_de_novo.htm")

						.addItem("T.3.41 Erros 56, 440 ou 442 VPN", "Procedimentos/TEF/TEF%20Total/Erros_56_440_ou_442/Erros_56_440_442.htm")
						.addItem("T.3.42 Fort Brasil Ativação", "Procedimentos/TEF/TEF%20Total/Fort_Brasil_Ativa%C3%A7%C3%A3o/Fort_Brasil.htm")
						.addItem("T.3.43 Gerenciador de Dispositivos Desativado", "Procedimentos/TEF/TEF%20Total/Gerenciador_de_Dispositivos_Desativado/Gerenciador_Dispositivos.htm")
						.addItem("T.3.44 Gerenciador Padrão Não Ativo", "Procedimentos/TEF/TEF%20Total/Gerenciador_padrao_nao_ativo/Gerenciador_Padrao.htm")
						.addItem("T.3.45 Getnet - Ativação/Solicitação", "Procedimentos/TEF/TEF%20Total/Getnet_Ativacao/Getnet.htm")
						.addItem("T.3.46 Inclusão de Adquirente Algorix", "Procedimentos/TEF/TEF%20Total/inclusao_de_adquirente_algorix/inclusao_adquirente.htm")
						.addItem("T.3.47 Inclusão de Checkout", "Procedimentos/TEF/TEF%20Total/Inclusao_checkout/Inclusao_checkout.htm")
						.addItem("T.3.48 Inclusão de Novas Adquirentes", "Procedimentos/TEF/TEF%20Total/Inclusao_de_novos_adquirentes/Novas_Adquirentes.htm")
						.addItem("T.3.49 Insira ou Passe o Cartão", "Procedimentos/TEF/TEF%20Total/Insira_ou_passe_o_cartao/Insira_ou_Passe_Cartao.htm")
						.addItem("T.3.50 Instalação Driver Pinpad", "Procedimentos/TEF/TEF%20Total/Instalacao_driver_pinpad/Instalacao_driver_pinpad.htm")

						.addItem("T.3.51 Instalação e Configuração TEF Total com Conexão Via HTTPS", "Procedimentos/TEF/TEF%20Total/Instalacao_TEF_TOTAL/Instalacao_TEF.htm")
						.addItem("T.3.52 Já Existe Arquivo de Saída STS", "Procedimentos/TEF/TEF%20Total/Ja_existe_arquivo_de_saida_STS/Ja_existe_arquivo.htm")
						.addItem("T.3.53 Módulo Inválido", "Procedimentos/TEF/TEF%20Total/Erro_modulo_invalido/Modulo_Invalido.htm")
						.addItem("T.3.54 Ordem de Serviço em Atraso", "Procedimentos/TEF/TEF%20Total/OS_em_Atraso/atraso.html")
						.addItem("T.3.55 Pendente Lic (Status Agente Tef)", "Procedimentos/TEF/TEF%20Total/Pendente_lic/Pendente_lic.htm")
						.addItem("T.3.56 Perda/Furto/Extravio de Pinpad", "Procedimentos/TEF/TEF%20Total/Pinpad_extravio/Pinpad_extravio.htm")
						.addItem("T.3.57 Pinpad - Alteração de informação no visor", "Procedimentos/TEF/TEF%20Total/pinpad_alteracao_de_informacoes_no_visor/pinpad_alteracao_de_informacoes_no_visor.htm")
						.addItem("T.3.58 Pinpad - Auto Teste ou Erro 0040", "Procedimentos/TEF/TEF%20Total/Pinpad_Auto_Teste_0040/Pinpad_Auto_teste_0040.htm")
						.addItem("T.3.59 Pinpad - Devolução", "Procedimentos/TEF/TEF%20Total/Pinpad_devolucao/Pinpad_devolucao.htm")
						.addItem("T.3.60 Pinpad - Equipamento Novo Com Defeito", "Procedimentos/TEF/TEF%20Total/Pinpad_novo_defeito/pinpad_novo_com_defeito.htm")

						.addItem("T.3.61 Pinpad - Número de Série Não Localizado", "Procedimentos/TEF/TEF%20Total/Pinpad_numero_serie_nao_localizado/Pinpad_numero_serie_nao_localizado.htm")
						.addItem("T.3.62 Pinpad - Problemas Físicos", "Procedimentos/TEF/TEF%20Total/Pinpad_Problema_Fisico/Pinpad_Problema_Fisico.htm")
						.addItem("T.3.63 Reimpressão de Comprovante", "Procedimentos/TEF/TEF%20Total/Reimpressao_de_comprovante/Reimpressao.htm")
						.addItem("T.3.64 Refaça a Transação", "Procedimentos/TEF/TEF%20Total/Erro_refaca_a_transacao/Refaca_Transacao.htm")
						.addItem("T.3.65 Reinstalação TEF", "Procedimentos/TEF/TEF%20Total/Reinstalacao/Reinstalacao.htm")
						.addItem("T.3.66 Reset Senha CTF", "Procedimentos/TEF/TEF%20Total/Reset_senha_ctf/Reset_Senha.htm")
						.addItem("T.3.67 Tef Não Inicia Junto Ao Windows 10", "Procedimentos/TEF/TEF%20Total/tef_nao_inicia_junto_ao_sistema/tef_nao_inicia_junto_ao_w10.htm")
						.addItem("T.3.68 Terminal Bloqueado Transação Pendente", "Procedimentos/TEF/TEF%20Total/Terminal_bloqueado_transacao_pendente/Transacao_Pendente.htm")
						.addItem("T.3.69 Teste de Vendas - Simulador PDV", "Procedimentos/TEF/TEF%20Total/Teste_de_Vendas_com_PDV_Simulador/Teste_PDV.htm")
						.addItem("T.3.70 Troca de CNPJ / Inscrição Estadual", "Procedimentos/TEF/TEF%20Total/troca_de_cnpj/troca_cnpj.htm")

						.addItem("T.3.71 Troca de Assistência Técnica", "Procedimentos/TEF/TEF%20Total/Troca_de_Assistencia_Tecnica/Troca_de_assistencia.htm")
						.addItem("T.3.72 Troca de Equipamento com Defeito", "Procedimentos/TEF/TEF%20Total/Troca_equipamento/Troca_Equipamento.htm")
						.addItem("T.3.73 Troca de Modalidade TEF", "Procedimentos/TEF/TEF%20Total/Troca_de_Modalidade_TEF/Troca_modalidade.htm")
						.addItem("T.3.74 Vendas Desfeitas", "Procedimentos/TEF/TEF%20Total/Vendas_Desfeitas/Vendas_Desfeitas.htm")
						.addItem("T.3.75 Novo campo de Busca Agente TEF", "Procedimentos/TEF/TEF%20Total/Novo_campo_agente_TEF/campo_agente_tef.htm")
						
						
			
			//Pasta TEF Turbo 		
			var tTurbo =
				Tef.addFolder("Turbo");
				
					tTurbo 
						.addItem("T.4.1 Abertura de O.S – Pinpad com número de série ilegível ou inexistente", "Procedimentos/TEF/TEF%20Turbo/Abertura_%20OS_pinpad_com_numero_de_serie_ilegivel_ou_inexistente/OS_Pinpad.htm")
						.addItem("T.4.2 Abertura O.S - Pinpad não Cadastrado", "Procedimentos/TEF/TEF%20Turbo/Abertura_O.S_Pinpad_n%C3%A3o_Cadastrado/OS_Pinpad.htm")
						.addItem("T.4.3 Abertura O.S - Substituição de Pinpad", "Procedimentos/TEF/TEF%20Turbo/Abertura_OS_substituicao_do_pinpad/OS_Pinpad.htm")
						.addItem("T.4.4 Adquirentes Aceitas no TEF Turbo", "Procedimentos/TEF/Cartoes_Aceitos/Tef_Turbo.htm")
						.addItem("T.4.5 Alteração Cadastral - Workfinity e Agent TEF", "Procedimentos/TEF/TEF%20Turbo/Alteracao_cadastro_WKF/Alterar_cadastro_wkf.htm")
						.addItem("T.4.6 Atualização de Dados Cadastrais - Cupom", "Procedimentos/TEF/TEF%20Turbo/atualizacao_cadastral/Atualizacao.htm")
						.addItem("T.4.7 Atualização Driver Ingenico", "Procedimentos/TEF/TEF%20Turbo/Atualizacao_Driver_Ingenico/Driver_Ingenico.htm")
						.addItem("T.4.8 Atualização Pay&Go", "Procedimentos/TEF/TEF%20Turbo/Atualizacao_paygo/Atualizacao.htm")
						.addItem("T.4.9 Bandeiras Aceitas na Stone", "Procedimentos/TEF/TEF%20Turbo/Bandeira_stone/Bandeiras_stone.htm")
						.addItem("T.4.10 Bandeira Própria de Adquirente", "Procedimentos/TEF/TEF%20Turbo/Bandeira_propria_de_adquirente/Bandeira_propria_de_adquirente.htm")

						.addItem("T.4.11 Buscando Servidor - Erro 211", "Procedimentos/TEF/TEF%20Turbo/Erro_211/Erro_211.htm")
						.addItem("T.4.12 Cadastro de Preços - Valecard", "Procedimentos/TEF/TEF%20Turbo/Erro_211/Erro_211.htm")
						.addItem("T.4.13 Cancelamento de Número Lógico", "Procedimentos/TEF/TEF%20Turbo/Cancelamento_de_numero_logico/Numero_Logico.htm")
						.addItem("T.4.14 Cancelamento de Transação", "Procedimentos/TEF/TEF%20Turbo/Cancelamento_transacao/Cancelamento_Transacao.htm")
						.addItem("T.4.15 Cancelamento TEF", "Procedimentos/TEF/TEF%20Turbo/Cancelamento_TEF/Cancelamento.htm")
						.addItem("T.4.16 Cancelamento TEF - Fluxo de Status", "Procedimentos/TEF/TEF Turbo/Cancelamento_TEF_status/Status_ag_tef.htm")
						.addItem("T.4.17 Cancelar Solicitação de Cancelamento TEF", "Procedimentos/TEF/TEF%20Turbo/Cancelar_solicitacao_cancelamento_tef/Cancelar_solicitacao_cancelamento_tef.htm")
						.addItem("T.4.18 Características TEF", "Procedimentos/TEF/TEF%20Turbo/Carateristicas_tef/Carateristicas_tef.htm")
						.addItem("T.4.19 Carga de Tabelas", "Procedimentos/TEF/TEF%20Turbo/Carga_de_Tabelas/Carga_Tabelas.htm")
						.addItem("T.4.20 Cartão não Autorizado - Erros 51,52,53,54,55 e 56", "Procedimentos/TEF/TEF%20Turbo/Cartao_nao_Autorizado%20-%2051,52,53,54,55%20e%2056/Cartao_nao_Autorizado.htm")

						.addItem("T.4.21 CGR sem VPN", "Procedimentos/TEF/TEF%20Turbo/CGR_sem_VPN/CGR_sem_VPN.htm")
						.addItem("T.4.22 Checkout Duplicado", "Procedimentos/TEF/TEF%20Turbo/Checkout_duplicado/Checkout_Duplicado.htm")
						.addItem("T.4.23 Cliente Não Possui Adquirente", "Procedimentos/TEF/TEF%20Turbo/Cliente_nao_possui_adquirente/Cliente_nao_possui_adquirente.htm")
						.addItem("T.4.24 Configurar Accord", "Procedimentos/TEF/TEF%20Turbo/Configurar_Accord/Configurar_Accord.htm")
						.addItem("T.4.25 Configurar Algorix", "Procedimentos/TEF/TEF%20Turbo/Configurar_Algorix/Configurar_Algorix.htm")
						.addItem("T.4.26 Configurar Bancredcard", "Procedimentos/TEF/TEF%20Turbo/Configurar_bancred-card/Configurar_Bancred.htm")
						.addItem("T.4.27 Configurar Banesecard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Banesecard/Configurar_Banesecard.htm")
						.addItem("T.4.28 Configurar Banrisul", "Procedimentos/TEF/TEF%20Turbo/Configurar_Banrisul/Configurar_Banrisul.htm")
						.addItem("T.4.29 Configurar Bin e Fort Brasil", "Procedimentos/TEF/TEF%20Turbo/Configurar_Bin_Fort/Configurar_Bin.htm")
						.addItem("T.4.30 Configurar Cielo", "Procedimentos/TEF/TEF%20Turbo/Configurar_Cielo/Configurar_Cielo.htm")

						.addItem("T.4.31 Configurar Cielo PGWeb", "Procedimentos/TEF/TEF%20Turbo/Configurar_cielo_pgweb/Configurar_cielo_pgweb.htm")
						.addItem("T.4.32 Configurar Coopercred", "Procedimentos/TEF/TEF%20Turbo/Configurar_Coopercred/Configurar_Cooper.htm")
						.addItem("T.4.33 Configurar Credi Shop", "Procedimentos/TEF/TEF%20Turbo/Configurar_Credi-shop/Configurar_Credi.htm")
						.addItem("T.4.34 Configurar Fancard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Fancard/Configurar_Fancard.htm")
						.addItem("T.4.35 Configurar Fitcard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Fitcard/Configurar_Fitcard.htm")
						.addItem("T.4.36 Configurar GETNET", "Procedimentos/TEF/TEF%20Turbo/Configurar_Getnet/Configurar_Getnet.htm")
						.addItem("T.4.37 Configurar Neus", "Procedimentos/TEF/TEF%20Turbo/Configurar_Neus/Configurar_Neus.htm")
						.addItem("T.4.38 Configurar Orgcard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Orgcard/Configurar_Orgcard.htm")
						.addItem("T.4.39 Configurar PayGo Net", "Procedimentos/TEF/TEF%20Turbo/Configurar_PayGo_NET/Configurar_PayGo.htm")
						.addItem("T.4.40 Configurar Pinpad", "Procedimentos/TEF/TEF%20Turbo/Configurar_pinpad/Configurar_Pinpad.htm")

						.addItem("T.4.41 Configurar Policard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Policard/Configurar_Policard.htm")
						.addItem("T.4.42 Configurar Premmia", "Procedimentos/TEF/TEF%20Turbo/Configurar_Premmia/Configurar_Premmia.htm")
						.addItem("T.4.43 Configurar REDE", "Procedimentos/TEF/TEF%20Turbo/Configurar_Rede/Configurar_Rede.htm")
						.addItem("T.4.44 Configurar Safra Pay", "Procedimentos/TEF/TEF%20Turbo/Configurar_safra_pay/Configurar_safra_pay.htm")
						.addItem("T.4.45 Configurar Senff", "Procedimentos/TEF/TEF%20Turbo/Configurar_Senff/Configurar_Senff.htm")
						.addItem("T.4.46 Configurar Stone", "Procedimentos/TEF/TEF%20Turbo/Configurar_Stone/Configurar_Stone.htm")
						.addItem("T.4.47 Configurar Ticket Car", "Procedimentos/TEF/TEF%20Turbo/Configurar_Ticket-Car/Configurar_Ticket.htm")
						.addItem("T.4.48 Configurar Ticket Log", "Procedimentos/TEF/TEF%20Turbo/Configurar_Ticket-Log/Configurar_Ticket_log.htm")
						.addItem("T.4.49 Configurar Tricard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Tricard/Configurar_Tricard.htm")
						.addItem("T.4.50 Configurar Valecard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Valecard/Configurar_Valecard.htm")

						.addItem("T.4.51 Configurar Vero", "Procedimentos/TEF/TEF%20Turbo/Configurar_Vero/Configurar_Vero.htm")
						.addItem("T.4.52 Configurar Verycard", "Procedimentos/TEF/TEF%20Turbo/Configurar_Verycard/Configurar_Verycard.htm")
						.addItem("T.4.53 Consulta de Assistência - Workfinity", "Procedimentos/TEF/TEF%20Turbo/Consulta_de_Assistencia_Workfinity/Consulta_Assistencia.htm")
						.addItem("T.4.54 Consultar Transações", "Procedimentos/TEF/TEF%20Turbo/Consultar_transacoes/Consultar_Transacoes.htm")
						.addItem("T.4.55 Erro 03", "Procedimentos/TEF/TEF%20Turbo/erro_03/erro_03.htm")
						.addItem("T.4.56 Erro 1003 - protocolo 103 – Licença expirada", "Procedimentos/TEF/TEF%20Turbo/Erro_1003/erro_1003.htm")
						.addItem("T.4.57 Erro 1012", "Procedimentos/TEF/TEF%20Turbo/Erro_1012/Erro_1012.htm")
						.addItem("T.4.58 Erro 1013", "Procedimentos/TEF/TEF%20Turbo/Erro_1013/Erro_1013.htm")
						.addItem("T.4.59 Erro 1015", "Procedimentos/TEF/TEF%20Turbo/Erro_1015/Erro_1015.htm")
						.addItem("T.4.60 Erro 1017", "Procedimentos/TEF/TEF%20Turbo/Erro_1017/Erro_1017.htm")

						.addItem("T.4.61 Erro 12 - Transação Inválida", "Procedimentos/TEF/TEF%20Turbo/Erro_12_Transacao_invalida/Erro_12.htm")
						.addItem("T.4.62 Erro 14", "Procedimentos/TEF/TEF%20Turbo/Erro_14/Erro_14.htm")
						.addItem("T.4.63 Erro 1501", "Procedimentos/TEF/TEF%20Turbo/Erro_1501/Erro_1501.htm")
						.addItem("T.4.64 Erro 1503", "Procedimentos/TEF/TEF%20Turbo/Erro_1503/Erro_1503.htm")
						.addItem("T.4.65 Erro 1563", "Procedimentos/TEF/TEF%20Turbo/Erro_1563/Erro_1563.htm")
						.addItem("T.4.66 Erro 1568", "Procedimentos/TEF/TEF%20Turbo/Erro_1568/Erro_1568.htm")
						.addItem("T.4.67 Erro 4002", "Procedimentos/TEF/TEF%20Turbo/Erro_4002/Erro_4002.htm")
						.addItem("T.4.68 Erro 4010", "Procedimentos/TEF/TEF%20Turbo/Erro_4010/Erro_4010.htm")
						.addItem("T.4.69 Erro 4010 - Com Teste de Ping Comunicando", "Procedimentos/TEF/TEF%20Turbo/Erro_4010_com_ping_comunicando/Erro_4010_com_ping_comunicando.htm")
						.addItem("T.4.70 Erro 4012", "Procedimentos/TEF/TEF%20Turbo/Erro_4012/Erro_4012.htm")

						.addItem("T.4.71 Erro 4014", "Procedimentos/TEF/TEF%20Turbo/Erro_4014/Erro_4014.htm")
						.addItem("T.4.72 Erro 46", "Procedimentos/TEF/TEF%20Turbo/Erro_46/Erro_46.htm")
						.addItem("T.4.73 Erro 57 - Serviço Inválido", "Procedimentos/TEF/TEF%20Turbo/Erro_57_servico_invalido/Erro_57.htm")
						.addItem("T.4.74 Erro -6", "Procedimentos/TEF/TEF%20Turbo/Erro_-6/Erro_6.htm")
						.addItem("T.4.75 Erro 90 Ligue 0800", "Procedimentos/TEF/TEF%20Turbo/Erro_90_ligue_0800/Erro_90.htm")
						.addItem("T.4.76 Erro Adquirentes/Sistemas de Vendas", "Procedimentos/TEF/TEF%20Turbo/Erro_Adquirentes_Sistemas_de_vendas/Adquirentes_Sistema_de_Vendas.htm")
						.addItem("T.4.77 Erro ao comunicar com a Elavon", "Procedimentos/TEF/TEF%20Turbo/Erro_ao_comunicar_Elavon/Erro_comunicar_Elavon.htm")
						.addItem("T.4.78 Erro B6103", "Procedimentos/TEF/TEF%20Turbo/Erro_B6103/Erro_B6103.htm")
						.addItem("T.4.79 Erro Bit 53", "Procedimentos/TEF/TEF%20Turbo/Erro_bit_53/Bit_53.htm")
						.addItem("T.4.80 Erro EMV", "Procedimentos/TEF/TEF%20Turbo/Erro_EMV/Erro_EMV.htm")

						.addItem("T.4.81 Erro No Create Arq. Solicitacao", "Procedimentos/TEF/TEF%20Turbo/Erro_no_create_arq/Erro_no_create_arq.htm")
						.addItem("T.4.82 Erro Tente de Novo ED", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_ED/Tente_de_novo_ED.htm")
						.addItem("T.4.83 Erro Tente de Novo EL - BANESE", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_EL_BANESE/Erro_tente_de_novo_EL_BANESE.htm")
						.addItem("T.4.84 Erro Tente de Novo EL / EC / EM / LC", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_EL_EC/Tente_de_Novo_EL_EC_EM.htm")
						.addItem("T.4.85 Erro Tente de Novo ER", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_ER/Tente_de_novo_ER.htm")
						.addItem("T.4.86 Erro Tente de Novo ID", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_ID/Tente_Novo_ID.htm")
						.addItem("T.4.87 Erro Tente de Novo MI", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_MI/Tente_de_novo_MI.htm")
						.addItem("T.4.88 Erro Tente de Novo NC", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_NC/Tente_de_novo_NC.htm")
						.addItem("T.4.89 Erro Tente de Novo ND", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_ND/Tente_de_novo_ND.htm")
						.addItem("T.4.90 Erro Tente de Novo NS", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_NS/Tente_de_novo_NS.htm")

						.addItem("T.4.91 Erro Tente de Novo TO", "Procedimentos/TEF/TEF%20Turbo/Erro_tente_de_novo_TO/Tente_de_novo.htm")
						.addItem("T.4.92 Falha ao Buscar Arquivo - Transação Não Completa", "Procedimentos/TEF/TEF%20Turbo/Falha_ao_Buscar_Arquivo/Falha_ao_Buscar_Arquivo.htm")
						.addItem("T.4.93 Gerenciador Padrão Inativo", "Procedimentos/TEF/TEF%20Turbo/Gerenciador_padrao_inativo/Gerenciador.htm")
						.addItem("T.4.94 Inclusão de Checkout", "Procedimentos/TEF/TEF%20Turbo/Inclusao_checkout/Inclusao_checkout.htm")
						.addItem("T.4.95 Inclusão de Novas Adquirentes", "Procedimentos/TEF/TEF%20Turbo/Inclusao_de_novos_adquirentes/Novas_Adquirentes.htm")
						.addItem("T.4.96 Inicialize o POS", "Procedimentos/TEF/TEF%20Turbo/Inicialize_o_POS/Inicialize_POS.htm")
						.addItem("T.4.97 Insira ou Passe o Cartão", "Procedimentos/TEF/TEF%20Turbo/Insira_ou_passe_o_cartao/Insira_ou_Passe_Cartao.htm")
						.addItem("T.4.98 Instalação Driver Pinpad", "Procedimentos/TEF/TEF%20Turbo/Instalacao_driver_pinpad/Instalacao_driver_pinpad.htm")
						.addItem("T.4.99 Já Existe Arquivo de Saída STS", "Procedimentos/TEF/TEF%20Turbo/Ja_existe_arquivo_de_saida_STS/Ja_existe_arquivo_saida_STS.htm")
						.addItem("T.4.100 Liberar Terminais Virtuais", "Procedimentos/TEF/TEF%20Turbo/Liberar_Terminais_Virtuais/Liberar_Terminais.htm")

						.addItem("T.4.101 Licença Expirada / Inválida", "Procedimentos/TEF/TEF%20Turbo/Licenca_Expirada_Invalida/Licenca_Expirada.htm")
						.addItem("T.4.102 Lote Cheio - Rede", "Procedimentos/TEF/TEF%20Turbo/Lote_cheio_REDE/Lote_cheio.htm")
						.addItem("T.4.103 Modo de Venda Invalido (Parcelamento)", "Procedimentos/TEF/TEF%20Turbo/Modo_%20de_Venda_%20Invalido_%20Parcelamento/Modo_de_Venda_Invalido.htm")
						.addItem("T.4.104 Módulo Inválido", "Procedimentos/TEF/TEF%20Turbo/Modulo_invalido/Modulo_Invalido.htm")
						.addItem("T.4.105 N103 Terminal Fechado - Valecard", "Procedimentos/TEF/TEF%20Turbo/N103_Terminal_Fechado_Valecard/N103_Valecard.htm")
						.addItem("T.4.106 Nenhuma Rede Ativa ou Configurada", "Procedimentos/TEF/TEF%20Turbo/Nenhuma_rede_ativa_ou_configurada/Nenhuma_Rede_Configurada.htm")
						.addItem("T.4.107 Ordem de Serviço em atraso", "Procedimentos/TEF/TEF%20Turbo/OS_em_Atraso/atraso.html")
						.addItem("T.4.108 Pendente Lic (Status Agente Tef)", "Procedimentos/TEF/TEF%20Turbo/Pendente_lic/Pendente_lic.htm")
						.addItem("T.4.109 Personalização Pay&Go", "Procedimentos/TEF/TEF%20Turbo/personalizacao_paygo/persolizacao.htm")
						.addItem("T.4.110 Perda/Furto/Extravio de Pinpad", "Procedimentos/TEF/TEF%20Turbo/Pinpad_extravio/Pinpad_extravio.htm")

						.addItem("T.4.111 Pinpad - Alteração de informação no visor", "Procedimentos/TEF/TEF%20Turbo/pinpad_alteracao_de_informacoes_no_visor/pinpad_alteracao_de_informacoes_no_visor.htm")
						.addItem("T.4.112 Pinpad - Aplicação Não Suportada", "Procedimentos/TEF/TEF%20Turbo/Pinpad_aplicacao_nao_suportada/Pinpad_aplicacao_nao_suportada.htm")
						.addItem("T.4.113 Pinpad - Auto Teste ou Erro 0040", "Procedimentos/TEF/TEF%20Turbo/Pinpad_Auto_Teste_0040/Pinpad_Auto_teste_0040.htm")
						.addItem("T.4.114 Pinpad Bloqueado", "Procedimentos/TEF/TEF%20Turbo/Pinpad_bloqueado/Pinpad_Bloqueado.htm")
						.addItem("T.4.115 Pinpad - Contat Help", "Procedimentos/TEF/TEF%20Turbo/Pinpad_Contat_Help/Pinpad_Contat_Help.htm")
						.addItem("T.4.116 Pinpad - Devolução", "Procedimentos/TEF/TEF%20Turbo/Pinpad_devolucao/Pinpad_devolucao.htm")
						.addItem("T.4.117 Pinpad - Erro de leitura no cartão", "Procedimentos/TEF/TEF%20Turbo/Pinpad_erro_de_leitura_no_cartao/Pinpad_erro_de_leitura_no_cartao.htm")
				//Arrumar no orginal o 117 que esta como 114					
						.addItem("T.4.118 Pinpad - Erro de Permissão", "Procedimentos/TEF/TEF%20Turbo/Pinpad_erro_de_permissao/Pinpad_erro_de_permissao.htm")
						.addItem("T.4.119 Pinpad - Equipamento Novo Com Defeito", "Procedimentos/TEF/TEF%20Turbo/Pinpad_novo_defeito/pinpad_novo_com_defeito.htm")
						.addItem("T.4.120 Pinpad Gertec - Verificar Versão", "Procedimentos/TEF/TEF%20Turbo/Pinpad_Gertec_Versao/Pinpad_Gertec.htm")

						.addItem("T.4.121 Pinpad - Número de Série Não Localizado", "Procedimentos/TEF/TEF%20Turbo/Pinpad_numero_serie_nao_localizado/Pinpad_numero_serie_nao_localizado.htm")
						.addItem("T.4.122 Pinpad - Problemas Físicos", "Procedimentos/TEF/TEF%20Turbo/Pinpad_Problema_Fisico/Pinpad_Problema_Fisico.htm")
						.addItem("T.4.123 Redecard - Erro 56", "Procedimentos/TEF/TEF%20Turbo/Redecard_56/Erro_56.htm")
						.addItem("T.4.124 Rede 88", "Procedimentos/TEF/TEF%20Turbo/REDE_88/Rede_88.htm")
						.addItem("T.4.125 Rede 89", "Procedimentos/TEF/TEF%20Turbo/REDE_89/Rede_89.htm")
						.addItem("T.4.126 Refaça a Transação", "Procedimentos/TEF/TEF%20Turbo/Refaca_a_transacao/Refaca_Transacao.htm")
						.addItem("T.4.127 Reimpressão de Comprovante", "Procedimentos/TEF/TEF%20Turbo/Reimpressao_comprovante/Reimpressao_de_Comprovante.htm")
						.addItem("T.4.128 Reinstalação TEF", "Procedimentos/TEF/TEF%20Turbo/Reinstalacao/Reinstalacao.htm")
						.addItem("T.4.129 Tef Não Inicia Junto ao Windows 10", "Procedimentos/TEF/TEF%20Turbo/tef_nao_inicia_junto_ao_sistema/sitef_nao_inicia_junto_ao_w10.htm")
						.addItem("T.4.130 Terminal Bloqueado Numero Lógico não Autorizado", "Procedimentos/TEF/TEF%20Turbo/Terminal_bloqueado_numero_logico_nao_autorizado/Numero_Logico_nao_Autorizado.htm")

						.addItem("T.4.131 Terminal Bloqueado Transação Pendente", "Procedimentos/TEF/TEF%20Turbo/Terminal_bloqueado_transacao_pendente/Transacao_Pendente.htm")
						.addItem("T.4.132 Teste de Vendas com PDV Simulador", "Procedimentos/TEF/TEF%20Turbo/Teste_de_Vendas_com_PDV_Simulador/Teste_PDV.htm")
						.addItem("T.4.133 Ticket Car - Checkout Duplicado", "Procedimentos/TEF/TEF%20Turbo/Checkout_Duplicado_Ticket/Checkout_Duplicado_Ticket.htm")
						.addItem("T.4.134 Troca de Assistência Técnica", "Procedimentos/TEF/TEF%20Turbo/Troca_de_Assistencia_Tecnica/Troca_de_assistencia.htm")
						.addItem("T.4.135 Troca de Chaves - Servidor Pay&Go", "Procedimentos/TEF/TEF%20Turbo/Troca_de_Chaves_Servidor_PayGo/Troca_Chaves.htm")
						.addItem("T.4.136 Troca de CNPJ / Inscrição Estadual", "Procedimentos/TEF/TEF%20Turbo/troca_de_cnpj/troca_cnpj.htm")
						.addItem("T.4.137 Troca de Equipamento com Defeito", "Procedimentos/TEF/TEF%20Turbo/Troca_equipamento/troca_equipamento.htm")
						.addItem("T.4.138 Troca de Modalidade TEF", "Procedimentos/TEF/TEF%20Turbo/Troca_de_Modalidade_TEF/Troca_modalidade.htm")
						.addItem("T.4.139 Venda Digitada a Distância", "Procedimentos/TEF/TEF%20Turbo/Venda_Digitada_a_Distancia/Venda_Digitada.htm")
						.addItem("T.4.140 Verificar Licença e Versão", "Procedimentos/TEF/TEF%20Turbo/Verificar_licenca_e_versao/verificar_licenca_versao.htm")

						.addItem("T.4.141 VPN não instalada", "Procedimentos/TEF/TEF%20Turbo/Vpn_nao_instalada/vpn_nao_instalada.htm")
						.addItem("T.4.142 Terminal em Trânsito", "Procedimentos/TEF/TEF%20Turbo/Terminal_em_transito/Terminal_em_transito.htm")
						.addItem("T.4.143 Erro Requisição Ambiente Inválido", "Procedimentos/TEF/TEF%20Turbo/Erro_requisicao_ambiente_invalido/requisicao.htm")
						.addItem("T.4.144 Novo campo de Busca Agente TEF", "Procedimentos/TEF/TEF%20Turbo/Novo_campo_agente_TEF/campo_agente_tef.htm")
						
						
						
					
			//Pasta TEF Simples	
			var tSimples =
				Tef.addFolder("Simples");
				
					tSimples 
						.addItem("T.5.1 Atendimento para Tef Simples (Tef Discado)", "TEF/TEF Simples/Atendimento_para_tef_simples/Atendimento_para_tef_simples.htm")
						

   // Pasta Fale Conosco
	var FaleConosco = 
        	menu.addFolder("Fale Conosco");
        	
        	FaleConosco 
				.addItem("Supervisão", "Link")
				.addItem("Coordenação", "Link")
				.addItem("Book", "Link")

   // Pasta Comunicados
   	var Comunicados = 
        	menu.addFolder("Comunicados");
        	
        	Comunicados 
				.addItem("Atento", "Link")
				.addItem("Bematech", "Link")
				.addItem("Mensagens Urgentes", "Link")

        	
   // Pasta Checklist
	var Checklist = 
        	menu.addFolder("Checklist");
        	
        	Checklist 
				.addItem("Chat", "Link")
				.addItem("E-mail", "Link")
				.addItem("Voz", "Link")

        	
   // Pasta Destaques
	var Destaques = 
        	menu.addFolder("Destaques");
        	
        	Destaques 
				.addItem("Qualidade", "Link")
				.addItem("Campanhas", "Link")

        	
   // Pasta Utilitários
	var Utilitarios = 
        	menu.addFolder("Utilitários");
        	
        	Utilitarios 
				.addItem("Atento Mundi", "Link")
				.addItem("Bematech", "Link")
				.addItem("WorkFinity", "Link")
				.addItem("Pessoas Online", "Link")
				.addItem("Bloco de Notas", "Link")
				.addItem("Cronômetro", "http://bookinfo.atento/zs/bematech/cronometro/cronometro.htm")
				.addItem("Bematech", "Link")
				.addItem("Leitura Online", "Link")
				.addItem("Links Úteis", "Link")
				.addItem("Manuais", "Link")


        	
   // Pasta Informações
	var Informacoes = 
        	menu.addFolder("Informações");
		
		Informacoes
				.addItem("Atento", "Link")
				.addItem("Qualidade", "Link")
				.addItem("NPS", "Link")
				.addItem("Escalada", "Link")				

	menu 
		.addItem("Telefones", "Link")
		.addItem("Treinamentos", "Link")
		.addItem("Aniversáriantes", "Link")




    
    // NÃƒÆ’O MEXER
    // ordenar(menu);
    construir(menu);
});
