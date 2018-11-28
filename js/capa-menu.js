﻿var menu;

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
						.addItem("C.1.1 Ato COTEPE", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/Ato%20Cotepe%2017-04%20-%20Lay-out.pdf")
						.addItem("C.1.2 Gerar Ato COTEPE", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/Gerar_Ato_Cotep/Gerar_Ato_Cotep.htm")
						.addItem("C.1.3 Gerar CAT 52", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/Gerar_CAT52/Gerar_Cat52.htm")
						.addItem("C.1.4 Gerar Sintegra Tipo 60", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/Gerar_Sintegra_tipo60/Gerar_Sintegra.htm")
						.addItem("C.1.5 Gerar Sped Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/Gerar_Sped_Fiscal/Gerar_Sped.htm")
						.addItem("C.1.6 Gerar XML", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/Gerar_XML/Gerar_XML.htm")
						.addItem("C.1.7 Aguardando Acerto do Horário ou Desbloqueio pelo Teclado", "http://bookinfo.atento/zs/bematech/Procedimentos/Chat/desbloqueio_pelo_teclado/desbloqueio_pelo_teclado.htm")

	    // Pasta E-mail	
		var email = 
			celulas.addFolder("E-mail");
	
			//Pasta Abertura de OS 
			var eAberturaOS =
				email.addFolder("Abertura de O.S");
				
					eAberturaOS 
						.addItem("E.1.1 Abertura de O.S. - Cliente Corporativo SAT", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/OS_Cliente_Corporativo_SAT/OS_cliente_Corporativo_SAT.htm") 
						.addItem("E.1.2 Cadastro Módulo Fiscal Eletrônico (SAT Ceará)", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/OS_mfe_sat_ceara/OS_mfe_sat_ceara.htm")
						.addItem("E.1.3 E-mail Interno (Boticário)", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail//email_interno/email_interno.htm")
						.addItem("E.1.4 Fraseologia para Clientes Corporate Prime", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/OS_Fraseologia_Cliente_Prime/OS_Fraseologia.htm")
						.addItem("E.1.5 O.S. Inclusão da Informação Projeto", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/OS_Inclusao_Informacao_Projeto/OS_Projeto.htm")

			// Pasta Configurações
			var eConfiguracao =
				email.addFolder("Configurações");
				
					eConfiguracao 
						.addItem("E.2.1 Endereço De E-Mail Para Direcionamento De Cliente Ao Setor De Vendas", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/Endereco_de_email_para_direcionamento_vendas/email_vendas.htm")
						.addItem("E.2.2 Envio De Checklist Com Dados Para Confirmação Cadastral", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/Envio_checklist_dados_para_confirmacao_cadastral/Envio_checklist_dados_para_confirmacao_cadastral.htm")
						.addItem("E.2.3 S-3200  Procedimentos de Configuração", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/Configuracao_de_leitor_S3200/Configuracao.htm")
						.addItem("E.2.4 Prime IBM", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/Prime/Prime.htm")
						.addItem("E.2.5 Registro De Solicitação Inicial Do Cliente Na Célula De E-Mail", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/registro_solicitacao/registro.htm")
						.addItem("E.2.6 Template Explicativo Sobre Configurações De Leitores De Códigos De Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/Template_para_configuracao_leitores/Template_para_configuracao_leitores.htm")
						.addItem("E.2.7 Tratativa Clientes Corporativo", "http://bookinfo.atento/zs/bematech/Procedimentos/E-mail/tratativas_corporativo/corp.htm")
				
				
				
		// Pasta hardware
		var Hardware =
			celulas.addFolder("Hardware");
			
			//Pasta abertura de O.S
			var hAberturaOS =
				Hardware.addFolder("Abertura O.S");
				
					hAberturaOS 
						.addItem("H.1.1 Abertura de O.S. - Clientes Corporativos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Abertura_de_OS/Impressoras_Fiscais.htm")
						.addItem("H.1.2 Abertura de O.S. - Clientes Corporativos SAT", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Abertura_de_OS_SAT/Abertura_OS.htm")
						.addItem("H.1.3 Abertura de O.S. Com Cortesia ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Abertura_de_OS_cortesia/Abertura_de_OS_cortesia.htm")
						.addItem("H.1.4 Cadastro de clientes WorkFinity", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Cadastro_clientes_WorkFinity/Cadastro_clientes_WorkFinity.htm")
						.addItem("H.1.5 Clientes Que Entram Em Contato Para Consultar Tratativas De Desenvolvedores", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Clientes_que_entram_em_contato_para_consultar_tratativas_de_desenvolvedores/Clientes_que_entram_em_contato_para_consultar_tratativas_de_desenvolvedores.htm")
						.addItem("H.1.6 Equipamento Não Cadastrado", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Equipamento_nao_cadastrado/Equipamento_nao_cadastrado.htm")
						.addItem("H.1.7 Garantias Expiradas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Abertura_OS/Validacao_Garantias_Vencidas/Impressoras_fiscais.htm")
				
			//Pasta Balanças
			var hBalancas =
				Hardware.addFolder("Balanças");
				
					hBalancas 
						.addItem("H.2.1 SA-110 Balança Não Comunica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Balancas/SA-110_Balanca_Nao_Comunica/Balanca.htm")
						.addItem("H.2.2 SA-110 Balança Não Liga ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Balancas/SA-110_Balanca_Nao_Liga/Balanca.htm")
						.addItem("H.2.3 SA-110 Mensagem E1 ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Balancas/SA-110_Mensagem_E1/Balanca.htm")
						.addItem("H.2.4 SA-110 Mensagem E2 ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Balancas/SA-110_Mensagem_E2/Balanca.htm")
						.addItem("H.2.5 SA-110 Mensagem E4 ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Balancas/SA-110_Mensagem_E4/Balanca.htm")
						.addItem("H.2.6 SA-110 Mensagem --OF- ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Balancas/SA-110_Mensagem_OF/Balanca.htm")
				
			//Pasta Coletores
			var hColetores =
				Hardware.addFolder("Coletores ");
				
					hColetores 
						.addItem("H.3.1 DC-2000 Apagar Dados e/ou Tarefas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Apagar_dados_ou_tarefas/Coletores.htm")
						.addItem("H.3.2 DC-2000 Coletor Não Comunica com Computador", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Coletor_nao_comunica_com_computador/Coletores.htm")
						.addItem("H.3.3 DC-2000 Coletor Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2000_Coletor_Nao_Liga/Coletores.htm")
						.addItem("H.3.4 DC-2000 Coletor não sincroniza com WinTaskGen", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Coletor_nao_sincroniza_com_o_WinTaskGen/Coletores.htm")
						.addItem("H.3.5 DC-2000 Configurar Cógido de Barras - Software Win Taskgen", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_Configurar_Codigo_Barras_Wintaskgen/Coletores.htm")
						.addItem("H.3.6 DC 2000 Configurar ITF 2 e 5", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_configurar_itf_2_e_5/Coletores.htm")
						.addItem("H.3.7 DC-2000 Configurar Prefixo/Sufixo na Transmissão de Dados", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Configurar_prefixo_sufixo_para_transmissao/Coletores.htm")
						.addItem("H.3.8 DC-2000 Data Corrompida", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2000_Data_Corrompida/Coletores.htm")
						.addItem("H.3.9 DC-2000 Digitar Através do Teclado do Leitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_Digitar_atraves_teclado_do_Leitor/Coletores.htm")
						.addItem("H.3.10 DC-2000 Download Fail", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2000_Download_Fail/Coletores.htm")
						
						.addItem("H.3.11 DC-2000 Erro RTC Fail", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_RTC_Fail/Coletores.htm")
						.addItem("H.3.12 DC-2000 Exportar Dados .TXT", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_Exportar_Dados_txt/Coletores.htm")
						.addItem("H.3.13 DC-2000 Importar tarefa", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_importar_tarefa/Coletores.htm")
						.addItem("H.3.14 DC-2000 Instalação de Driver", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2000_Instalar_driver/Coletores.htm")
						.addItem("H.3.15 DC-2000 Leitor de Códigos de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Leitura_de_codigos_de_Barras/Coletores.htm")
						.addItem("H.3.16 DC-2000 Retornar Configurações de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Retornar_coletor_para_configuracoes_de_fabrica/Coletores.htm")
						.addItem("H.3.17 DC-2000 Salvar Dados em Formato CSV", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Salvar_dados_em_formato_csv/Coletores.htm")
						.addItem("H.3.18 DC-2000 Separar Código da Quantidade Utilizando Delimitadores", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2000_Separar_Codigo_da_Quantidade/Coletores.htm")
						.addItem("H.3.19 DC-2000 Transferência de Dados para o Computador", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC200_Transferencia_de_dados/Coletores.htm")
						.addItem("H.3.20 DC-2200 Atualização Firmware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2200_Atualizacao_Firmware/Coletores.htm")
						
						.addItem("H.3.21 DC-2200 Coletor Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2200_Coletor_Nao_Liga/Coletores.htm")
						.addItem("H.3.22 DC-2200 Digitar Através do Teclado", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2200_Digitar_Atraves_do_Teclado/Coletores.htm")
						.addItem("H.3.23 DC-2200 Exportar Dados Após Coleta/Captura", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2200_Exportar_Dados_Apos_Coleta/Coletores.htm")
						.addItem("H.3.24 DC-2200 Instalação / Configuração", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2200_Instalação_Utilização/Coletores.htm")
						.addItem("H.3.25 DC-2200 Reset", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC-2200_Reset/Coletores.htm")
						.addItem("H.3.26 DC-2200 Separar Código da Quantidade Utilizando Delimitadores", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC2200_Separar_Codigo_da_Quantidade/Coletores.htm")
						.addItem("H.3.27 DC-3500 Alternar Conexão entre Bluetooth com WiFi", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Alterar_conexao_entre_bluetooth_com_wifi/Coletores.htm")
						.addItem("H.3.28 DC-3500 Coletor Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Coletor_Nao_Liga/Coletores.htm")
						.addItem("H.3.29 DC-3500 Aumentar Tamanho de teclado", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Aumentar_tamanho_teclado/Coletores.htm")
						.addItem("H.3.30 DC-3500 Calibrar Caneta Apontadora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Calibrar_caneta_apontadora/Coletores.htm")
						
						.addItem("H.3.31 DC-3500 Coletor Não Comunica Via Usb (Windows 10)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_configurar_codigo_de_controle_de_finalizacao_da_leitura/Coletores.htm")
						.addItem("H.3.32 DC-3500 Configurar Código de Controle de Finalização de Leitura", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Coletor_nao_comunica_windows%2010/Coletores.htm")
						.addItem("H.3.33 DC-3500 Configurar Conexão WiFi", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Configurar_conexao_wi-fi/Coletores.htm")
						.addItem("H.3.34 DC-3500 Configurar Leitura de Código de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Configurar_leitura_codigo_de_barras/Coletores.htm")
						.addItem("H.3.35 DC-3500 Configurar Prefixo/Sufixo para Transmissão de Dados", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Configurar_prefixo_sufixo_para_transmissao/Coletores.htm")
						.addItem("H.3.36 DC-3500 Configurar Teclas de Funções Personalizadas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Configurar_teclas_de_funcao_personalizadas/Coletores.htm")
						.addItem("H.3.37 DC-3500 Cópia de Segurança dos Dados (Backup)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Fazer_copia_de_seguranca_dados/Coletores.htm")
						.addItem("H.3.38 DC-3500 Habilitar Leitura de Código de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Habilitar_leitura_de_codigos_de_barras/Coletores.htm")
						.addItem("H.3.39 DC-3500 Reset", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Reset/Coletores.htm")
						.addItem("H.3.40 DC-3500 Transferência de Arquivos via Conexão Bluetooth", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Coletores/DC3500_Transferencia_de_arquivos_via_bluetooth/Coletores.htm")


			//Pasta CPU
			var hCpu =
				Hardware.addFolder("CPU");
				
					hCpu 
						.addItem("H.4.1 RC7400/RC8400 - Computador Desliga Sozinho", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Computador_Desliga_Sozinho/CPU.htm")
						.addItem("H.4.2 RC7400/RC8400 - Mouse Não Responde", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Mouse_Nao_Responde/CPU.htm")
						.addItem("H.4.3 RC7400/RC8400 - Nenhuma resposta ao ligar", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Nenhuma_Resposta_ao_Ligar/CPU.htm")
						.addItem("H.4.4 RC7400/RC8400 - Sem Imagem no Monitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Sem_Imagem_Monitor/CPU.htm")
						.addItem("H.4.5 RC7400/RC8400 - Teclado não responde", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC7400_8400_Teclado_Nao_Responde/CPU.htm")
						.addItem("H.4.6 RC8000 - Computador Desliga Sozinho", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8000_Computador_Desliga_Sozinho/CPU.htm")
						.addItem("H.4.7 RC8000 - Mouse Não Responde", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8000_Mouse_Nao_Responde/CPU.htm")
						.addItem("H.4.8 RC8000 - Nenhuma resposta ao ligar", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8000_Nenhuma_Resposta_ao_Ligar/CPU.htm")
						.addItem("H.4.9 RC8000 - Sem Imagem no Monitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8000_Sem_Imagem_Monitor/CPU.htm")
						.addItem("H.4.10 RC8000 - Teclado não responde", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8000_Teclado_Nao_Responde/CPU.htm")
						
						.addItem("H.4.11 RC8100 - Computador Desliga Sozinho", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8100_Computador_Desliga_Sozinho/CPU.htm")
						.addItem("H.4.12 RC8100 - Mouse Não Responde", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8100_Mouse_Nao_Responde/CPU.htm")
						.addItem("H.4.13 RC8100 - Nenhuma resposta ao ligar", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8100_Nenhuma_Resposta_ao_Ligar/CPU.htm")
						.addItem("H.4.14 RC8100 - Sem Imagem no Monitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8100_Sem_Imagem_Monitor/CPU.htm")
						.addItem("H.4.15 RC8100 - Teclado não responde", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8100_Teclado_Nao_Responde/CPU.htm")
						.addItem("H.4.16 RC8400 Correção/Instalação de Drivers", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8400_Correção_Instalação_Driver/CPU.htm")
						.addItem("H.4.17 RC8400 - Desabilitar Ativação USB", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/RC8400_Desabilitar_Ativacao_USB/CPU.htm")
						.addItem("H.4.18 SB 9090 POS TOUCH - Especificações", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/SB9090%20-%20Especificacoes/CPU.htm")
						.addItem("H.4.19 SB 9190 - Calibração do Monitor ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Calibracao_monitor/CPU.htm")
						.addItem("H.4.20 SB 9190 - Especificações", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Especificacoes/CPU.htm")
						
						.addItem("H.4.21 SB 9190 - Instalação do Driver Touch", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Instalacao_driver/CPU.htm")
						.addItem("H.4.22 SB 9190 - Procedimento de Limpeza", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/SB9190%20-%20Limpeza/CPU.htm")
						.addItem("H.4.23 ST 1100 - Especificações", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/CPU_Bematech/ST1100-Especificacoes/CPU.htm")

			//Pasta Drivers
			var hDrivers =
				Hardware.addFolder("Drivers");
				
					hDrivers 
						.addItem("H.5.1 Driver não consta no Site", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Drivers/Driver_nao_Consta_no_Site/Driver_nao_Consta_no_Site.htm")
								
			//Pasta Básico				
			var hFitBasico =
				Hardware.addFolder("Fit Básico");
				
					hFitBasico 
						.addItem("H.6.1 FIT Básico - Atualizar firmware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_atualizar_firmware/Basico.htm")
						.addItem("H.6.2 FIT Básico - Configurar senha", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_configurar_senha/Basico.htm")
						.addItem("H.6.3 FIT Básico - Erro no CheckSum", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_erro_no_checksum/Basico.htm")
						.addItem("H.6.4 FIT Básico - Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_especificacoes_tecnicas/Basico.htm")
						.addItem("H.6.5 FIT Básico - Gateway", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_gateway/Basico.htm")
						.addItem("H.6.6 FIT Básico - Habilitar porta Serial ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_habilitar_porta_serial/Basico.htm")
						.addItem("H.6.7 FIT Básico - Microterminal não liga ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_nao_liga/Basico.htm")
						.addItem("H.6.8 FIT Básico - Timeout Leitores ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Basico/fit_basico_timeout_leitores/Basico.htm")
				
			//Pasta Fit Fiscal				
			var hFitFiscal =
				Hardware.addFolder("Fit Fiscal");
				
					hFitFiscal 
						.addItem("H.7.1 FIT Fiscal Aplicativo Bemasale", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Aplicativo_%20Bemasale/FIT.htm")
						.addItem("H.7.2 FIT Fiscal Cancelamento de Cupom", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Cancelamento_de_Cupom/FIT.htm")
						.addItem("H.7.3 FIT Fiscal Consulta de Balanca", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Consulta_de_Balanca/FIT.htm")
						.addItem("H.7.4 FIT Fiscal Consulta de Cliente", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Consulta_de_Cliente/FIT.htm")
						.addItem("H.7.5 FIT Fiscal Consulta de Produtos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Consulta_de_Produtos/FIT.htm")
						.addItem("H.7.6 FIT Fiscal Cupom Adicional", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Cupom%20Adcional/FIT.htm")
						.addItem("H.7.7 FIT Fiscal Desconto Acréscimo em Subtotal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Desconto_Acrescimo_em_Subtotal/FIT.htm")
						.addItem("H.7.8 FIT Fiscal Especificações / Configurações / Compatibilidades", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Especificacoes_Configuracoes_Compatibilidades/FIT.htm")
						.addItem("H.7.9 FIT Fiscal Formas de Pagamentos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Formas_de_Pagamentos/FIT.htm")
						.addItem("H.7.10 FIT Fiscal Leitura X", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Leitura_x/FIT.htm")
						
						.addItem("H.7.11 FIT Fiscal Modalidades de Vendas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Modalidades_de_Vendas/FIT.htm")
						.addItem("H.7.12 FIT Fiscal Operações de Caixa", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Operações_%20de_%20Caixa/FIT.htm")
						.addItem("H.7.13 FIT Fiscal Pagamentos Múltiplas Formas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Pagamentos_Multiplas_Formas/FIT.htm")
						.addItem("H.7.14 FIT Fiscal Pagamento Rápido", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Pagamentos_Rapido/FIT.htm")
						.addItem("H.7.15 FIT Fiscal Recebimentos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Recebimentos/FIT.htm")
						.addItem("H.7.16 FIT Fiscal Venda com Cliente", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Fit_Fiscal/FIT-Fiscal_Venda_com_Cliente/FIT.htm")
				
			//Pasta	Gavetas	
			var hGavetas =
				Hardware.addFolder("Gavetas");
				
					hGavetas 
						.addItem("H.8.1 Gavetas - Especificações de Uso", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Gavetas/Gavetas_Especificacoes_de_uso/Gavetas.htm")
						.addItem("H.8.2 Gaveta Não Abre Com Chave", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Gavetas/gaveta_nao_abre_com_chave/gaveta_nao_abre_com_chave.htm")
				
			//Pasta	Impressoras Fiscais	
			var hImpressorasFiscais =
				Hardware.addFolder("Impressoras Fiscais");
				
					hImpressorasFiscais 
						.addItem("H.9.1 Acionamento da Gaveta de Dinheiro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Acionamento_da_gaveta_de_dinheiro/Impressoras_fiscais.htm")
						.addItem("H.9.2 Aguardando Acerto do Horário ou Desbloqueio pelo Teclado", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Aguardando_Acerto_do_Horario/Impressoras_fiscais.htm")
						.addItem("H.9.3 Alteração Cadastral - Impressoras MP-2100TH-FI / MP-4000TH-FI / MP-4200TH-FI", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Alteracoes_Cadastrais_MP2100_4000_4200TH_FI/Impressoras_Fiscais.htm")
						.addItem("H.9.4 Alteração do Local de uso da Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Alteracao_do_local_de_uso_da_impressora/Impressoras_Fiscais.htm")
						.addItem("H.9.5 Alteração nos Arquivos Fiscais de Vendas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Alteracoes_Arquivos_Fiscais/Impressoras_Fiscais.htm")
						.addItem("H.9.6 Arquivo PAF-ECF", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Arquivo_PAF_ECF/Impressoras_Fiscais.htm")
						.addItem("H.9.7 Atendimento à Desenvolvedores", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Atendimento_Desenvolvedores/Impressoras_Nao_Fiscais.htm")
						.addItem("H.9.8 Cadastramento de aliquotas Fiscais", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Cadastramento_aliquotas_fiscais/Impressoras_Fiscais.htm")
						.addItem("H.9.9 Cadastramento de Formas de Pagamento", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Cadastramento_formas_pagamento/Impressoras_Fiscais.htm")
						.addItem("H.9.10 Cancelar Cupom Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Cancelar_cupom_fiscal/Impressoras_fiscais.htm")
						
						.addItem("H.9.11 CAT-52 Tabela de Erros", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/CAT-52_Tabela%20de%20Erros/Impressoras_Fiscais.htm")
						.addItem("H.9.12 Configurar Espaço entre as Linhas do Cupom", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Configurar_espaco_entre_linhas/Impressoras_fiscais.htm")
						.addItem("H.9.13 Configurar Espaço entre Cupons", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Configurar_espaco_entre_cupons/Impressoras_Fiscais.htm")
						.addItem("H.9.14 Configurar Guilhotina", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Configurar_guilhotina/Impressoras_fiscais.htm")
						.addItem("H.9.15 Configurar Horário de Verão - MP4200 TH FI e MP4200 TH FI II", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Configurar_horario_de_verao_mp4200/Impressoras_fiscais.htm")
						.addItem("H.9.16 Desabilitar Guilhotina", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/desabilitar_guilhotina/desabilitar_guilhotina%20.htm")
						.addItem("H.9.17 Direcionamento CHAT", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Direcionamento_chat/direcionamento_chat.htm")
						.addItem("H.9.18 Download da Memória Fiscal utilizando o WinMFD2", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Download_da_mfd_utilizando_winmfd2/Impressoras_fiscais.htm")
						.addItem("H.9.19 ECF Bloqueado por Redução Z Pendente", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/ECF_bloqueado_reducao_Z_pendente/Impressoras_fiscais.htm")
						.addItem("H.9.20 ECF Impressão com Falhas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/ECF_Impressão_com_Falhas/Impressoras_fiscais.htm")
						
						.addItem("H.9.21 ECF Inoperante/Abertura Equipamento - Envio para Assistência Técnica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/ECF_Inoperante_envio_para_Assistencia/Impressoras_fiscais.htm")
						.addItem("H.9.22 Erro -1 MFD2", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Erro_1_MFD2/Impressoras_fiscais.htm")
						.addItem("H.9.23 Erro Cupom Pendente", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Erro_cupom_pendente/Impressoras_fiscais.htm")
						.addItem("H.9.24 Erro Leds Piscando", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Erro-leds/Impressoras_fiscais.htm")
						.addItem("H.9.25 Erro NACK", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Erro_Nack/Impressoras_fiscais.htm")
						.addItem("H.9.26 Gerar Cat 52 Versão 1 e 2 winmfd2", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_Cat_52%20Versão_1_2_winmfd2/Impressoras_Fiscais.htm")
						.addItem("H.9.27 Gerar Relatório .txt", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_relatorio_txt/Impressoras_fiscais.htm")
						.addItem("H.9.28 Gerar Relatório CAT-52", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_cat_52/Impressoras_fiscais.htm")
						.addItem("H.9.29 Gerar Sintegra Tipo 60", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_sintegra_tipo_60/Impressoras_fiscais.htm")
						.addItem("H.9.30 Gerar Sintegra Tipo E", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_sintegra_tipo_E/Impressoras_fiscais.htm")
						
						.addItem("H.9.31 Gerar Sintegra Tipo E TDM (Nota Fiscal Gaúcha)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_sintegra_tipo_E_TDM_gaucha/Impressoras_fiscais.htm")
						.addItem("H.9.32 Gerar Sped Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Gerar_sped_fiscal/Impressoras_fiscais.htm")
						.addItem("H.9.33 Guilhotina Bloqueada", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Guilhotina_bloqueada/Impressoras_fiscais.htm")
						.addItem("H.9.34 Horário da Impressora Incorreto", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Horario_da_impressora_incorreto/Impressoras_fiscais.htm")
						.addItem("H.9.35 Horário de Verão - Ativação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Configurar_horario_de_verao/Impressoras_fiscais.htm")
						.addItem("H.9.36 Horário de Verão - Retirar", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Retirar_Horario_Verao/Impressoras_Fiscais.htm")
						.addItem("H.9.37 Impressão de Código de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressao_codigo_de_barras/Impressoras_fiscais.htm")
						.addItem("H.9.38 Impressão ruim", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressao_ruim/Impressoras_Fiscais.htm")
						.addItem("H.9.39 Impressora Bloqueada na Virada do Mês", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_bloqueada_virada_do_mes/Impressoras_fiscais.htm")
						.addItem("H.9.40 Impressora Bloqueada por Redução Z", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_bloqueada_Redução_Z/Impressoras_fiscais.htm")
						
						.addItem("H.9.41 Impressora Fiscal - Atualizar DLL", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Atualizar_DLL/Impressoras_fiscais.htm")
						.addItem("H.9.42 Impressora Fiscal - Cessaçao de Uso", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Cessaçao_de_Uso/Impressoras_fiscais.htm")
						.addItem("H.9.43 Impressora Fiscal - Em Intervenção Técnica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Em_Intervencao_Tecnica/Impressoras_fiscais.htm")
						.addItem("H.9.44 Impressora Fiscal - Memória Fiscal Lotada", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_Fiscal_Memoria_fiscal_lotada/Impressoras_fiscais.htm")
						.addItem("H.9.45 Impressora Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_nao_liga/Impressoras_fiscais.htm")
						.addItem("H.9.46 Impressora Não Localizada", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_nao_localizada/Impressoras_Fiscais.htm")
						.addItem("H.9.47 Impressora Offline", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Impressora_Offline/Impressoras_Fiscais.htm")
						.addItem("H.9.48 Instalação Impressora Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Instalacao_impressora_fiscal/Impressoras_Fiscais.htm")
						.addItem("H.9.49 Instalar Bematool", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Instalar_bematool/Impressoras_fiscais.htm")
						.addItem("H.9.50 Instalar WinMFD2", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Instalar_winmfd2/Impressoras_fiscais.htm")
						
						.addItem("H.9.51 Lacração Impressora Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Lacrar_impressora_fiscal/Impressoras_fiscais.htm")
						.addItem("H.9.52 Leitura X", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Realizar_leitura_X/Impressoras_fiscais.htm")
						.addItem("H.9.53 MP4000 TH FI / MP4200 TH FI Arredondamento ou Truncamento", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4200_Arredondamento_Truncamento/Impressoras_fiscais.htm")
						.addItem("H.9.54 MP-4000 TH FI - Devolução", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4000_TH_FI_Devolucao/Impressoras_Fiscais.htm")
						.addItem("H.9.55 MP-4200 TH FI Garantia", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_Garantia/Impressoras_fiscais.htm")
						.addItem("H.9.56 MP-4200 TH FI Impressora sem Comunicação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_Impressora_sem_comunicacao/Impressoras_fiscais.htm")
						.addItem("H.9.57 MP-4200 TH FI II Atualização de Firmware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Atualizacao_firmware_%20impressora_4200_TH_FI_II/Atualizacao_firmware_%20impressora_4200_TH_FI_II.htm")
						.addItem("H.9.58 MP-4200 TH FI II Gerar CAT-52", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_II_gerar_CAT-52/Impressoras_Fiscais.htm")
						.addItem("H.9.59 MP-4200 TH FI II Instalação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4200_TH_FI_II_Instalacao/Impressoras_Fiscais.htm")
						.addItem("H.9.60 MP-4000 TH FI Parâmetro Incorreto WinMFD2", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/MP-4000_TH_FI_Parametro_Incorreto_WinMFD2/Impressoras_fiscais.htm")
						
						.addItem("H.9.61 Ordem de Serviço em Atraso", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/OS_em_Atraso/Impressoras_Fiscais.htm")
						.addItem("H.9.62 Papel não Sai da Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Papel_nao_sai_da_impressora/Impressoras_fiscais.htm")
						.addItem("H.9.63 RAT- Consultar", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/RAT-%20Consultar/Impressoras_fiscais.htm")
						.addItem("H.9.64 Realizar Leitura da Memória Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Realizar_leitura_memoria_fiscal/Impressoras_fiscais.htm")
						.addItem("H.9.65 Realizar Leitura da Memória Fita Detalhe", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Realizar_leitura_memoria_fita_detalhe/Impressoras_fiscais.htm")
						.addItem("H.9.66 Realizar Redução Z", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Realizar_reducao_z/Impressoras_fiscais.htm")
						.addItem("H.9.67 Testar Guilhotina", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Testar_Guilhotina/Impressoras_fiscais.htm")
						.addItem("H.9.68 Virtual ECF", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Virtual_ECF/Impressoras_fiscais.htm")
						.addItem("H.9.69 Virtualização de Porta de Comunicação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Virtualizacao_de_Porta_de_Comunicacao/Impressoras_nao_fiscais.htm")
						.addItem("H.9.70 Aguardando Proprietário - Bematool", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Aguardando_Proprietario_Bematool/Impressoras_fiscais.htm")
						
						.addItem("H.9.71 Inserir Bobina na Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_fiscais/Inserir_bobina/Impressoras_fiscais.htm")						
				
			//Pasta	Impressoras Não Fiscais
			var hImpressorasNFiscais =
				Hardware.addFolder("Impressoras Não Fiscais");
				
					hImpressorasNFiscais 
						.addItem("H.10.1 Alteração Cadastral – MP2500TH / MP4000TH / MP4200TH / MP-5100", "javascript:OpenWindow('Hardware/Impressoras_nao_fiscais/Alteracao_cadastral_Impressoras_mp2500th_mp4000th_mp4200th_mp5100/alteracao_cadastral.htm',180,640);")
						.addItem("H.10.2 Ativar/Desativar Bipe Após A Impressão MP-2500TH / 4200th", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP4200TH_Ativar_bipe_apos_impressao/Impressoras_nao_fiscais.htm")
						.addItem("H.10.3 Ativar Ou Desativar Sensor De Pouco Papel - Impressoras MP4200TH / MP4000TH / MP2500TH / MP100sTH", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/ativar_ou_desativar_sensor_pouco_papel/Impressoras_nao_fiscais.htm")
						.addItem("H.10.4 Atualização de firmware - Impressoras MP2500TH / MP4000TH / MP4200TH / MP-5100TH", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Atualizacao_firmware_%20impressoras_MP2500_4000_4200%20TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.5 Atualização de firmware - Impressora LB1000", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Atualizacao_firmware_%20LB1000/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.6 Cadastro de Bancos pelo Software DP-20 Plus", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Cadastro_bancos_Software_DP20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.7 Cadastro de Cidades pelo Software DP-20 Plus", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Cadastro_Cidades_Software_DP20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.8 Cadastro de Favorecidos pelo Software DP-20 Plus", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Cadastro_Favorecidos_Software_DP20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.9 Calibrar Posição da Etiqueta Manualmente", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Calibrar_posicao_etiqueta_manualmente/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.10 Calibrar Sensor de Posição da Etiqueta", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Calibrar_sensor_posicao_da_etiqueta/Impressoras_Nao_Fiscais.htm")
						
						.addItem("H.10.11 Características de Etiqueta e Ribbon Aceitos pela LB-1000", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Caracteristicas_etiqueta_e_ribbon_LB-1000/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.12 Configurar Impressora em Rede", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Configurar_impressora_em_rede/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.13 Configurar Impressora em wifi", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Configurar_impressora_em_wifi/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.14 Configurar LB-1000 em Rede", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Configurar_LB-1000_em_rede/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.15 Conflito com Impressoras da Marca HP", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Conflito_com_impressoras_HP/Impressoras_nao_fiscais.htm")
						.addItem("H.10.16 Consultar Versão de Firmware MP2500TH / MP4000TH / MP4200TH / MP-5100TH", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Consultar_Versao_Firmware_Impressoras_MP2500_4000_4200%20TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.17 Consultar Versão de Firmware - BemaUser MP2500TH / MP4000TH / MP4200TH / MP-5100TH", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Consultar_Versao_Firmware_Bemauser_Impressoras_MP2500_4000_4200TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.18 DP-20 Ajustar Data e Horário", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Ajustar_Data_Horario/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.19 DP-20 Auto Teste", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_AUTO_TESTE/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.20 DP-20 Configuração pelo Teclado", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP20_configuracao_pelo_teclado/Impressoras_Nao_Fiscais.htm")
						
						.addItem("H.10.21 DP-20 Configurar Layout de Impressão de Cheque", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Configurar_Layout_Cheques/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.22 DP-20 Configurar Porta de Comunicação Para Impressão", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Configurar_Porta_de_comunicacao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.23 DP-20 Erro-4, Erro-5 ou Erro Crítico 7", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Erro_4_ou_5/Impressoras_nao_fiscais.htm")
						.addItem("H.10.24 DP-20 Erro Crítico 02", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Erro_Crítico_02/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.25 DP-20 Erros na Impressão", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_erros_na_impressao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.26 DP-20 Impressora Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Nao_Liga/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.27 DP-20 Inserir Fita na Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Inserir_Fita/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.28 DP-20 Não imprime centavos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_Nao_Imprime_Centavos/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.29 DP-20 RESET", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_RESET/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.30 Erro Memória Cheia FLASH / DRAM / CARD", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Erro_%20memoria_%20cheia_%20FLASH_DRAM_CARD/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.31 Erro Run-Time error 13", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Erro_runtime_error_13/Impressoras_nao_fiscais.htm")
						.addItem("H.10.32 Falha Na Impressão/Impressão Fraca/Impressão Ruim", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Falha_Impressao_impressao_fraca_impressao_ruim/Impressoras_Fiscais.htm")
						.addItem("H.10.33 Falha De Impressão Com Limite De Tamanho", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Falha_de_impressao_com_limite_de_tamanho/Falha_de_impressao.htm")
						.addItem("H.10.34 Impressão de QR Code - MP2500TH", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Impressao_de_QR_Code_Impressora_MP2500TH/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.35 Impressora está Instalada mas não Imprime", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_esta_instalada_mas_nao_imprime/Impressoras_nao_fiscais.htm")
						.addItem("H.10.36 Impressora MP-20 Correção de Papel", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_MP-20_Correção_de_Papel/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.37 Impressora MP-20 MI Pacote DLL", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_MP-20_MI_Pacote_DLL/Impressoras_nao_fiscais.htm")
						.addItem("H.10.38 Impressora Offline", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_Offline/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.39 Impressora Não Imprime Diretamente do Computador", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Impressora_nao_imprime_via_computador/Impressoras_nao_fiscais.htm")
						.addItem("H.10.40 Instalação de Impressora Não Fiscal no Sistema Linux", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_Impressora_Sistema_Linux/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.41 Instalação de Impressora Térmica em Rede", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalacao_Impressora_Termica_em_rede/Impressoras_nao_fiscais.htm")
						.addItem("H.10.42 Instalação de Impressoras Térmicas (MP 2100 / MP 2500 / MP 4000 / MP 4200 / MP 5100 e MP 100 S)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/instalacao_de_impressoras_termicas/Impressoras_nao_fiscais.htm")
						.addItem("H.10.43 Instalar e Configurar WinUtilitario Diagnostic Tool", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_configurar_aplicativo_Win_Utilitario_Diagnostic_Tool/Impressoras_nao_fiscais.htm")
						.addItem("H.10.44 Instalar Impressora LB-1000", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_LB-1000/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.45 Instalar Impressora pelo modo Generic Text Only no WINDOWS XP", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_modo_generic_text_windows_xp/Impressoras_nao_fiscais.htm")
						.addItem("H.10.46 Instalar Impressora pelo modo Generic Text Windows Vista ou Seven", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_modo_generic_text_windows_vista_ou_seven/Impressoras_nao_fiscais.htm")
						.addItem("H.10.47 Instalar Software de Configuração da Impressora DP-20", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_software_configuracao_DP_20/Impressoras_nao_fiscais.htm")
						.addItem("H.10.48 Instalar User Software", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Instalar_user_%20software/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.49 LB-1000 Bartender", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000%20-%20Bartender/Bartender.htm")
						.addItem("H.10.50 LB-1000 Calibrar Impressao Etiquetas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000_Calibrar_Impressao_Etiquetas/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.51 LB-1000 Impressão Falhada", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Impressao_Falhada/Impressoras_nao_fiscais.htm")
						.addItem("H.10.52 LB-1000 Indicadores Leds", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Indicadores_Led/Impressoras_nao_fiscais.htm")
						.addItem("H.10.53 LB-1000 Inserir o Papel", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Inserir_Papel/Impressoras_nao_fiscais.htm")
						.addItem("H.10.54 LB-1000 Inserir o Ribbon", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000_Inserir_Ribbon/Impressoras_nao_fiscais.htm")
						.addItem("H.10.55 LB-1000 Limpar Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Limpar_Impressora/Impressoras_nao_fiscais.htm")
						.addItem("H.10.56 LB-1000 Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB1000_Nao_Liga/Impressoras_nao_fiscais.htm")
						.addItem("H.10.57 LB-1000 Retornar Configurações de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/LB-1000_Retornar_padrao_de_fabrica/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.58 MP100S TH - Especificações de Limpeza", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Especificacoes_de_limpeza/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.59 MP100S TH - Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Especificacoes_Tecnica/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.60 MP100S TH - Impressora Não Responde aos Comandos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Impressora_nao_responde_comandos/Impressoras_Nao_Fiscais.htm")
						
						.addItem("H.10.61 MP100S TH - Impressora Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Impressora_nao_liga/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.62 MP100S TH - Instalação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Instalacao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.63 MP100S TH - Leds Informativos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Leds_informativos/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.64 MP100S TH - Papel Não Sai da Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Papel_nao_sai_da_impressora/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.65 MP100S TH - Problemas de Comunicação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP100S_TH_Problemas_de_Comunicacao/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.66 MP20 MI - Instalação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP20_MI_Instalacao/Impressoras_nao_fiscais.htm")
						.addItem("H.10.67 MP20 MI - Pinagem do cabo Serial", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP20_MI_pinagem/Impressoras_nao_fiscais.htm")
						.addItem("H.10.68 MP-2000 TH / MP2100 TH - Instalação Serial USB", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP-2000_TH_MP2100_TH_Instalação_Serial_USB/Impressoras_nao_fiscais.htm")
						.addItem("H.10.69 MP-5100 TH - Características", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP5100TH_Caracteristicas/Impressoras_nao_fiscais.htm")
						.addItem("H.10.70 MP-5100 TH - Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP5100TH_Especificacoes/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.71 MP-5100 TH - Inserir Imagem Em Cupom Fiscal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/MP5100TH_Inserir_Logo_Cupom/Impressoras_nao_fiscais.htm")
						.addItem("H.10.72 Novo Prazo de Garantia para Impressoras Térmicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Novo_Prazo_garantia_Impressoras_Termicas/Novo_Prazo_Garantia.htm")
						.addItem("H.10.73 Ordem De Serviço em Atraso", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/OS_em_Atraso/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.74 PP-10 Instalação Via Bluetooth", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/PP_10_instalacao_bluetooth/PP_10_instalacao_bluetooth.htm")
						.addItem("H.10.75 PP-10 Instalação Via USB", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/PP_10_instalacao_usb/PP_10_instalacao_usb.htm")
						.addItem("H.10.76 Resetar e Configurar Impressora DP 20", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_RESET/Impressoras_Nao_Fiscais.htm")
						.addItem("H.10.77 Software DP-20 Plus - Layout de Bancos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_layout_bancos/Impressoras_nao_fiscais.htm")
						.addItem("H.10.78 Software DP-20 Plus - Layout de Cópia", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_layout_copia/Impressoras_nao_fiscais.htm")
						.addItem("H.10.79 Software DP-20 Plus - Menu Impressão", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_menu_impressao/Impressoras_nao_fiscais.htm")
						.addItem("H.10.80 Software DP-20 Plus - Windows Vista / Seven", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/Software_DP20_windowns_vista_seven/Impressoras_nao_fiscais.htm")
						
						.addItem("H.10.81 DP-20 Impressão de Cheques pré-datados, sem emitir o cheque de entada (data Atual)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Impressoras_nao_fiscais/DP-20_impressao_de_cheques_predatados_sem_emitir_entrada/Impressoras_Nao_Fiscais.htm")


			//Pasta	KDS		
			var hKds =
				Hardware.addFolder("KDS");
				
					hKds 
						.addItem("H.11.1 KB 1700 - Teclas de Navegação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Microterminal/KB-1700/KB_1700.htm")
						.addItem("H.11.2 KB 9000 - Configuração de Teclas de Navegação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Kds/KB-9000/KB_9000.htm")
						.addItem("H.11.3 KB 9000 - Especificações", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Kds/KB9000_Especificacoes/KB9000_Especificacoes.htm")
						.addItem("H.11.4 LS6100 - Configuração", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Kds/LS6100_configuracao/LS6100_configuracao.htm")
						.addItem("H.11.5 LS8000 - Configuração", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Kds/LS8000_configuracao/LS8000_configuracao.htm")
				
			//Pasta	Leitores			
			var hLeitores =
				Hardware.addFolder("Leitores");
				
					hLeitores 
						.addItem("H.12.1 Amostras de Códigos de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/Amostras_de_Codigos_de_barras/Leitores.htm")
						.addItem("H.12.2 BR-200 BT Adicionar Prefixo ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Adicionar_Prefixo/Leitores.htm")
						.addItem("H.12.3 BR-200 BT Adicionar Sufixo ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Adicionar_Sufixo/Leitores.htm")
						.addItem("H.12.4 BR-200 BT Alterar Nome do Dispositivo", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Alterar_nome_do_dispositivo/Leitores.htm")
						.addItem("H.12.5 BR-200 BT Alteração de Sinal Sonoro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200_BT_Alteracao_de_Sinal_Sonoro/Leitores.htm")
						.addItem("H.12.6 BR-200 BT Alterar a Duração do Sinal Sonoro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200_BT_Alterar_Duracao_Sinal_Sonoro/Leitores.htm")
						.addItem("H.12.7 BR-200 BT Atualização De Firmware (Compatível Com IOS11)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200BT_Atualizacao_de_fw/Leitores.htm")
						.addItem("H.12.8 BR-200 BT Configuração Bluetooth", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Configuração_Bluetooth/Leitores.htm")
						.addItem("H.12.9 BR-200 BT Configuração Windows 10", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Configuracao_Windows_10/Leitores.htm")
						.addItem("H.12.10 BR-200 BT Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_%20Específicações/Leitores.htm")
						
						.addItem("H.12.11 BR 200 BT Leitor Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Leitor_Nao_Liga/Leitores.htm")
						.addItem("H.12.12 BR-200 BT Leitura de Cógido UPC-A ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Leitura_Codigo_UPCA/Leitores.htm")
						.addItem("H.12.13 BR-200 BT Leitura Manual Apresentaçao", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Leitura_Manual_Apresentaçao/Leitores.htm")
						.addItem("H.12.14 BR 200 BT Ligar/Desligar o Leitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Ligar_desligar_Leitor/Leitores.htm")
						.addItem("H.12.15 BR-200 BT Procedimento Programação Manual", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200%20BT_Procedimento_Programação_Manual/Leitores.htm")
						.addItem("H.12.16 BR-200 BT Retornar Configurações ao Padrão de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-200_BT_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.17 BR-310 Configuração do Leitor na Porta USB", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Configurar_Leitor_USB/Leitores.htm")
						.addItem("H.12.18 BR-310 Configurar Prefixo Para Código UPC-A ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Configuracao_prefixo_para_cod_UPC_A/Leitores.htm")
						.addItem("H.12.19 BR-310 Configuração para a Leitura de DANFE - NFE", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Configurar_Leitura_Danfe/Leitores.htm")
						.addItem("H.12.20 BR-310 Configurações Iniciais Códigos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Configurações_Iniciais_Códigos/Leitores.htm")

						.addItem("H.12.21 BR-310 Configurar Leitura do Código de Barras de Revistas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Ler_codigos_de_revistas/Leitores.htm")
						.addItem("H.12.22 BR-310 Configurar Enter Após a Leitura do Código de Barras ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Configurar_Enter_Apos_Leitura/Leitores.htm")
						.addItem("H.12.23 BR-310 Configurar para Ler Todos os Códigos Suportados", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Ler_Todos_Codigos_Suportados/Leitores.htm")
						.addItem("H.12.24 BR-310 Definição de tipos Códigos de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_%20Definição_de_tipos_Códigos_de_Barras/Leitores.htm")
						.addItem("H.12.25 BR-310 Erros de Leituras de Códigos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_%20Erros_%20de_%20Leituras_%20de_%20Códigos/Leitores.htm")
						.addItem("H.12.26 BR-310 Habilitar Desabilitar Tipos de Saída de Dados", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_%20Habilitar_Desabilitar_Tipos_de_Saída_de_Dados/Leitores.htm")
						.addItem("H.12.27 BR-310 Instalação Modo Teclado Modo RS232", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_%20Instalação_%20Modo_Teclado_%20Modo_%20RS232/Leitores.htm")
						.addItem("H.12.28 BR-310 Leitura Automática do Código de Barras ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Leitura_Automatica/Leitores.htm")
						.addItem("H.12.29 BR-310 Leitura de Códigos Iniciados por Zero (0)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_Leitura_Codigos_Iniciados_Zero/Leitores.htm")
						.addItem("H.12.30 BR-310 Retornar Configurações de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-310_%20Retornar_Configurações_de_Fabrica/Leitores.htm")
						
						.addItem("H.12.31 BR-400 Adicionar Prefixo ou Sufixo", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Adicionar_Prefixo_ou_Sufixo/Leitores.htm")
						.addItem("H.12.32 BR-400 Configuração Código 128 - Comprimento Mínimo", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Configuracao_code_128/Leitores.htm")
						.addItem("H.12.33 BR-400 Conexão de Leitor em Computador / Microterminal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Conexão_%20de_%20Leitor_%20Computador_%20Microterminal/Leitores.htm")
						.addItem("H.12.34 BR-400 Definição de tipos Códigos de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_%20Definição_de_tipos_Códigos_de_Barras/Leitores.htm")
						.addItem("H.12.35 BR-400 Erros de Leituras de Códigos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Erros_de_Leituras_de_Códigos/Leitores.htm")
						.addItem("H.12.36 BR-400 Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.37 BR-400 Exibir versão do firmware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Exibir_Versao_Firmware/Leitores.htm")
						.addItem("H.12.38 BR-400 Habilitar Duplo ENTER", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Habilitar_duplo_Enter/Leitores.htm")
						.addItem("H.12.39 BR 400 - Incluir Vírgula “,” No Final Do Código (Sem Enter/Desabilitar Terminador )", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_incluir_virgula_sem_enter/BR-400_incluir_virgula_sem_enter.htm")
						.addItem("H.12.40 BR-400 Instalação Hardware/Programação Inicial", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Instalação_Programação_Inicial/Leitores.htm")
						
						.addItem("H.12.41 BR-400 Led Azul", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_LED_Azul/Leitores.htm")
						.addItem("H.12.42 BR-400 Restaurar Padrão de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.43 BR-400 CODABAR - Retirar Caracteres Iniciais e Finais", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Retirar_Caracteres/Leitores.htm")
						.addItem("H.12.44 BR-400 Selecionar Duração do Tom de Bipe", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Selecao_Duracao_Bipe/Leitores.htm")
						.addItem("H.12.45 BR-400 Selecionar Volume do Bipe", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Selecionar_Volume_Bipe/Leitores.htm")
						.addItem("H.12.46 BR-400 Seleção do Tom do Bipe", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Selecao_Tom_Bipe/Leitores.htm")
						.addItem("H.12.47 BR-400 Terminador de Mensagem", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/BR-400_Terminador_Mensagem/Leitores.htm")
						.addItem("H.12.48 CODABAR - Comprimento Mínimo De Código (BR400, S100, BR400 e BR200 BT)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/CODABAR_comprimento_minimo_de_codigo_BR400_S100_BR400_BR200BT/Leitores.htm")
						.addItem("H.12.49 Comparativo de Leitores", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/Comparativo_leitores/Leitores.htm")
						.addItem("H.12.50 D-6448 Erros de Leitura de Códigos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-6448_%20Erros_%20de_%20Leitura_%20de_%20Códigos/Leitores.htm")
												
						.addItem("H.12.51 D-6448 Habilitar Parametros", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-6448_Habilitar_Parametros/Leitores.htm")
						.addItem("H.12.52 D-6448 Instalação Hardware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-6448_Instalação_%20Hardware/Leitores.htm")
						.addItem("H.12.53 D-7500 Atualização Firmware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Atualizacao_Firmware/Leitores.htm")
						.addItem("H.12.54 D-7500 Códigos Compatíveis", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Codigos_Compativeis/Leitores.htm")
						.addItem("H.12.55 D-7500 Configuração de Informações (Prefixo)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Configuracao_Informacoes_Prefixo/Leitores.htm")
						.addItem("H.12.56 D-7500 Configuração de Informações (Sufixo)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Configuração_Informações_Sufixo/Leitores.htm")
						.addItem("H.12.57 D-7500 Erro ao Ler HTTP:// (Habilitar ABNT2)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_erro_ao_ler_http_habilitar_abnt2/Leitores.htm")
						.addItem("H.12.58 D-7500 Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.59 D-7500 Fluxo de Programação para Códigos Diversos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Fluxo_Programacao_Codigos/Leitores.htm")
						.addItem("H.12.60 D-7500 Habilitar Duplo TAB", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Adicionar_duplo_tab/Leitores.htm")
						
						.addItem("H.12.61 D-7500 Habilitar Qr Code", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Habilitar_QRcode/Leitores.htm")
						.addItem("H.12.62 D-7500 Indicacoes Bip e Led", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_indicacoes_Bip_Led/Leitores.htm")
						.addItem("H.12.63 D-7500 Instalação Restrições e Testes", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Instalacao_Restricoes_Testes/Leitores.htm")
						.addItem("H.12.64 D-7500 Padrão de Mira", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Padrão%20de%20Mira/Leitores.htm")
						.addItem("H.12.65 D-7500 Tabela de Correções de Erros", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/D-7500_Tabela_Erros/Leitores.htm")
						.addItem("H.12.66 Habilitar/Desabilitar Febraban - Leitores S100/S500", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_%20Habilitar_%20Febraban/Leitores.htm")
						.addItem("H.12.67 I-150 Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-150_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.68 I-150 Retornar ao Padrão de Fábrica ( RESET )", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-150_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.69 I-200 Compatibilidade Com O Sistema Operacional MAC", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-200_Sistema_operacional_MAC/Leitores.htm")
						.addItem("H.12.70 I-330 e I-200 - Não Lê Febraban Em Tela Reflexiva", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-330_200_leitura_febraban_reflexivas/I-330_200_leitura_febraban_reflexivas.htm")

						.addItem("H.12.71 I-330 Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-330_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.72 I-330 Retornar Configurações ao Padrão de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-330_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.73 I-330 Seleção do Tom de Bipe", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-330_Selecao_Tom_Bipe/Leitores.htm")
						.addItem("H.12.74 I-500 Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-500_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.75 I-500 Retornar ao Padrão de Fábrica ( RESET )", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-500_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.76 S-100 / S-500 Habilitar Leitura para Sistema Linux e MAC OS (USB)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_habilitar_leitura_linux_mac/Leitores.htm")
						.addItem("H.12.77 S-100 Configurações Iniciais", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Configurações_Iniciais/Leitores.htm")
						.addItem("H.12.78 S-100 Desabilitar Espaçamento Entre um Código de Barras e Outro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Desabilitar_Espacamento_entre_codigos/Leitores.htm")
						.addItem("H.12.79 S-100 Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.80 S-100 Habilitar Porta Auxiliar", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Habilitar_Porta_auxiliar/Leitores.htm")

						.addItem("H.12.81 S-100 Habilitar TAB ao Término da Mensagem", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Tab_Termino_Mensagem/Leitores.htm")
						.addItem("H.12.82 S-100 Instalação Conexão Computador/Microterminal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Instalação_Conexão_Computador_Microterminal/Leitores.htm")
						.addItem("H.12.83 S-100 Operação de Leitor Modo de Mão / Modo Estático", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Operação_%20de_%20Leitor_%20Modo_De_%20mão_%20Modo_Estático/Leitores.htm")
						.addItem("H.12.84 S-100 Restaurar Padrão de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.85 S-100 Retirar Caractere de Texto - Código CODABAR", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-100_Retirar_Caractere_Texto_Codabar/Leitores.htm")
						.addItem("H.12.86 S-3200 Ajuste de Tom e Volume", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Ajuste_Tom_Volume/Leitores.htm")
						.addItem("H.12.87 S-3200 Configurar Comunicação de Interface", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Configurar_Comunicação_de_Interface/Leitores.htm")
						.addItem("H.12.88 S-3200 Configurar identificador de Código de Barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Configurar_identificador_de%20_Código_de_Barras/Leitores.htm")
						.addItem("H.12.89 S-3200 Configurar Prefixo e Sufixo de Transmissão de Dados", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Configurar_Prefixo_e_Sufixo_de_Transmissão_de_Dados/Leitores.htm")
						.addItem("H.12.90 S-3200 Erros de Leitura de Códigos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Erros_de_Leitura_de_Códigos/Leitores.htm")

						.addItem("H.12.91 S-3200 Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.92 S-3200 Habilitar Duplo TAB", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Habilitar_Duplo_Tab/Leitores.htm")
						.addItem("H.12.93 I-330 Configuração Bluetooth", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-330_config_bluetooth/Leitores.htm")
						.addItem("H.12.94 S-3200 Habilitar Enter Após Leitura de Código", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Habilitar_Enter_Apos_Leitura/Leitores.htm")
						.addItem("H.12.95 S-3200 Habilitar Sinal Sonoro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_habilitar_sinal_sonoro/Leitores.htm")
						.addItem("H.12.96 S-3200 Indicações LED (Status)/ BIP Sonoros (Status)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_indicações_%20LED_%20Status_BIP_Sonoros_Status/Leitores.htm")
						.addItem("H.12.97 S-3200 Instalação/Configurações Iniciais", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Instalação_Computador/Leitores.htm")
						.addItem("H.12.98 S-3200 Led Piscando Em Azul", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Led_Piscando_Azul/Leitores.htm")
						.addItem("H.12.99 S-3200 Led Piscando Em Azul e Vermelho", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Led_Piscando_Azul_e_Vermelho/Leitores.htm")
						.addItem("H.12.100 S-3200 Led Piscando em Vermelho", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Led_Piscando_Vermelho/Leitores.htm")

						.addItem("H.12.101 S-3200 Modo Sleep", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Modo_Sleep/Leitores.htm")
						.addItem("H.12.102 S-3200 Restaurar Padrão de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.103 S-3200 Salvar Padrão do Cliente", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Salvar_Modo_Cliente/Leitores.htm")
						.addItem("H.12.104 S-500 Configurar Tom de Bipe", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Configurar_Tom_de_Bip/Leitores.htm")
						.addItem("H.12.105 S-500 Desabilitar Espaçamento Entre um Código de Barras e Outro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Desabilitar_Espacamento_entre_codigos/Leitores.htm")
						.addItem("H.12.106 S-500 Erros de Leitura de Códigos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Erros_de_leitura_de_Códigos/Leitores.htm")
						.addItem("H.12.107 S-500 Específicações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Especificacoes_Tecnicas/Leitores.htm")
						.addItem("H.12.108 S-500 Habilitar Leitura Código Revista", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Habilitar_Leitura_Código_Revista/Leitores.htm")
						.addItem("H.12.109 S-500 Habilitar TAB ao Término da Mensagem", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Tab_Termino_Mensagem/Leitores.htm")
						.addItem("H.12.110 S-500 Instalação e Conexão Computador/Microterminal", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Instalação_conexão_Computador_Microterminal/Leitores.htm")

						.addItem("H.12.111 S-500 Operação de Leitor (Modo de Mão / Modo Estático)", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Operação_%20de_%20Leitor_(Modo_de_%20Mão_%20Modo_Estático)/Leitores.htm")
						.addItem("H.12.112 S-500 Retornar Configurações ao Padrão de Fábrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-500_Retornar_Padrao_de_Fabrica/Leitores.htm")
						.addItem("H.12.113 Windows Não Identifica Leitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/Windows_Nao_Identifica_Leitor/Leitores.htm")
						.addItem("H.12.114 S-3200 Exibir Versão Firmware", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/S-3200_Exibir_Versao_Firmware/Leitores.htm")
						.addItem("H.12.115 I-200 Habilitar/Desabilitar Febraban", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Leitores/I-200_habilitar_desablitar_febraban/Leitores.htm")

				
			//Pasta	Monitores			
			var hMonitores =
				Hardware.addFolder("Monitores");
				
					hMonitores 
						.addItem("H.13.1 Monitor Touch - Calibração", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Monitor_touch_Calibracao/Monitores.htm")
						.addItem("H.13.2 Monitor Touch - Instalação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Monitor_touch_Instalacao/Monitores.htm")
						.addItem("H.13.3 LCD Touch - Erro Após Trocar Placa de Vídeo", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Erro_apos_trocar_placa_de_video/Monitores.htm")
						.addItem("H.13.4 LCD Touch - Imagem Desfocada ou Assimétrica", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Imagem_Assimetrica_Desfocada/Monitores.htm")
						.addItem("H.13.5 LCD Touch - Monitor Não Liga ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Monitor_Nao_Liga/Monitores.htm")
						.addItem("H.13.6 LCD Touch - Monitor Não Reconhecido", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Monitor_Nao_Reconhecido/Monitores.htm")
						.addItem("H.13.7 LCD Touch - Tela Preto e Branco", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Monitores/Tela_Preto_e_Branco/Monitores.htm")

				
			//Pasta Pos GO			
			var hPosGo =
				Hardware.addFolder("Pos GO");
				
					hPosGo 
						.addItem("H.14.1 Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Posgo/posgo_Especificacoes/Especificacoes.htm")
						.addItem("H.14.2 Troca de Equipamento", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Posgo/posgo_defeito_fisico/defeito.htm")
				
			//Pasta terminais de autoatendimento				
			var hTermAuto =
				Hardware.addFolder("Terminais De Autoatendimento");
				
					hTermAuto 
						.addItem("H.15.1 Terminal - Alarme não funciona", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Alarmes_Nao_Funcionam/Terminais.htm")
						.addItem("H.15.2 Terminal - Autofalantes com Emissão de Ruídos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Autofalantes_Com_Ruido/Terminais.htm")
						.addItem("H.15.3 Terminal - Autofalantes não funcionam", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Autofalantes_Nao_Funcionam/Terminais.htm")
						.addItem("H.15.4 Terminal - Calibrar Touch Linux", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Calibracao_Touch_Linux/Terminais.htm")
						.addItem("H.15.5 Terminal - Calibrar Touch Windows", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Calibracao_Touch_Windows/Terminais.htm")
						.addItem("H.15.6 Terminal - Equipamento Não Liga", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Terminal_Nao_Liga/Terminais.htm")
						.addItem("H.15.7 Terminal - Impressora Emite Alerta Sonoro", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Emissao_Alerta_Sonoro/Terminais.htm")
						.addItem("H.15.8 Terminal - Leitor de Código de Barras Não Funciona", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Leitor_Nao_Funciona/Terminais.htm")
						.addItem("H.15.9 Terminal - Não Imprime", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Terminal_Nao_Imprime/Terminais.htm")
						.addItem("H.15.10 Terminal - Sem imagem no monitor", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Sem_Imagem_no_Monitor/Terminais.htm")
						
						.addItem("H.15.11 Terminal - Touch Não Funciona", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Touch_Nao_Funciona/Terminais.htm")
						.addItem("H.15.12 Teste da impressora - Linux", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Teste_Impressora_Linux/Terminais.htm")
						.addItem("H.15.13 Teste da impressora - Windows", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Teste_Impressora_Windows/Terminais.htm")
						.addItem("H.15.14 Teste do Leitor de código de barras", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/Terminais/Teste_Leitor_Codigo_Barras/Terminais.htm")
				
			//Pasta Sat Fiscal				
			var hSatFiscal =
				Hardware.addFolder("SAT Fiscal");
				
					hSatFiscal 
						.addItem("H.16.1 Configuração de Porta ", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/SAT/SATFISCAL_Configurar_Porta_de_Comunicacao/Configurar_Porta.htm")
						.addItem("H.16.2 Especificações Técnicas", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/SAT/SATFISCAL_Especificacoes_Tecnicas/Especificacoes.htm")
						.addItem("H.16.3 Identificar Código de Ativação", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/SAT/SATFISCAL_identificar_cod_ativacao/identificar_cod_ativacao.htm")
						.addItem("H.16.4 Leds Informativos", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/SAT/SATFISCAL_Leds_informativos/0800.htm")
						.addItem("H.16.5 Teste de Impressora", "http://bookinfo.atento/zs/bematech/Procedimentos/Hardware/SAT/SATFISCAL_Teste_de_Impressora/Teste.htm")
						.addItem("H.16.6 Treinamento SAT", "http://bookinfo.atento/zs/bematech/momento_Treinamento/SAT/Treinamento%20SAT%20para%20Hardware.pdf")
				

			
			
		// Pasta Multi Skill
		var Multiskill =
			celulas.addFolder("Multi Skill");
			
			var mAberturaOS =
				Multiskill.addFolder("Abertura de OS");
				
					mAberturaOS 
						.addItem("Nome", "Link");
			//Pasta Dicas						
			var mDicas =
				Multiskill.addFolder("Dicas");
				
					mDicas 
						.addItem("Nome", "Link");
			//Pasta Direcionamento N3						
			var mDirecionamentoN3 =
				Multiskill.addFolder("Direcionamento N3");
				
					mDirecionamentoN3 
						.addItem("Nome", "Link");
			//Pasta Express						
			var mExpress =
				Multiskill.addFolder("Express");
				
					mExpress 
						.addItem("Nome", "Link");
			//Pasta Total						
			var mTotal =
				Multiskill.addFolder("Total");
				
					mTotal 
						.addItem("Nome", "Link");
			//Pasta Turbo					
			var mTurbo =
				Multiskill.addFolder("Turbo");
				
					mTurbo 
						.addItem("Nome", "Link");

	
		// Pasta SAT
		var Sat =
			celulas.addFolder("Sat");

			//Pasta assuntos Regulatórios	
			var sAssuntosreg =
				Sat.addFolder("Assuntos Regulatórios");
				
					sAssuntosreg 
						.addItem("Nome", "Link");
						
			//Pasta Básico
			var sBemacashBasico =
				Sat.addFolder("Bemacash Básico");
				
					sBemacashBasico 
						.addItem("Nome", "Link");
						
			//Pasta Bemacash NFCe						
			var sBemacashNFCe =
				Sat.addFolder("Bemacash NFCe");
				
					sBemacashNFCe 
						.addItem("Nome", "Link");
						
			//Pasta Atualizações					
			var sAtualizacoes =
				Sat.addFolder("Atualizações");
				
					sAtualizacoes 
						.addItem("Nome", "Link");
						
			//Pasta Cliente Final					
			var sClienteFinal =
				Sat.addFolder("Cliente Final");
				
					sClienteFinal 
						.addItem("Nome", "Link");
						
			//Pasta Desenvolvedores						
			var sDesenvolvedores =
				Sat.addFolder("Desenvolvedores");
				
					sDesenvolvedores 
						.addItem("Nome", "Link");
						
			//Pasta	Legislação
			var sLegislacao =
				Sat.addFolder("Legislação");
				
					sLegislacao 
						.addItem("Nome", "Link");
						

				
		// Pasta TEF
		var Tef =
			celulas.addFolder("Tef");
	
			//Pasta TEF Express
			var tExpress =
				Tef.addFolder("Express");
				
					tExpress 
						.addItem("Nome", "Link");
			
			//Pasta TEF Express Hospedado
			var tExpressHosp =
				Tef.addFolder("Express Hospedado");
				
					tExpressHosp 
						.addItem("Nome", "Link");
			
			//pasta TEF Total
			var tTotal =
				Tef.addFolder("Total");
				
					tTotal 
						.addItem("Nome", "Link");
			
			//Pasta TEF Turbo 		
			var tTurbo =
				Tef.addFolder("Turbo");
				
					tTurbo 
						.addItem("Nome", "Link");
					
			//Pasta TEF Simples	
			var tSimples =
				Tef.addFolder("Simples");
				
					tSimples 
						.addItem("Nome", "Link");
						
   // Pasta Backoffice
	var Backoffice = 
        	menu.addFolder("Backoffice");
        					
			Backoffice 
				.addItem("Atraso de O.S", "Link")
				.addItem("Cancelamento de O.S", "Link")
				.addItem("Cliente Corporativos", "Link")			
				.addItem("Exceções TEF", "Link")      	
				.addItem("Exceções TEF Cancelamento", "Link")
				.addItem("Exceções SAC", "Link")
				.addItem("Exceções SAT", "Link")
				.addItem("Reclamações", "Link")
				.addItem("SAC Corporate", "Link")
				.addItem("Suporte N3", "Link")

				        	
        	

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
				.addItem("Telefones", "Link")
				.addItem("Treinamentos", "Link")
				.addItem("Aniversáriantes", "Link")




    
    // NÃƒÆ’O MEXER
    // ordenar(menu);
    construir(menu);
});