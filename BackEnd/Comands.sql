-- SQLite
INSERT INTO "parceiros_clientes" ("codigo","name","email")  VALUES ("654321","Emerson Oliveira","emerson_karate@gmail.com");

INSERT INTO "suporte" ("codigo","name","email")  VALUES ("222222","Iuri Aguiar","iuiu@gmail.com");

INSERT INTO "chamado" ("codigo", "dataHoraDoChamado", "dataHoraDeExecucao", "dataHoraDeEncerramento", "tipoDeErro", "descricaoDeErro", "status", "fk_client", "fk_suporte")
VALUES ("222222", "2018-10-05 10:00", "2018-10-05 12:00", NULL, "Problema de Hardware", "Computador Travando", "Andamento", "123456", "222222");