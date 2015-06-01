-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Giu 01, 2015 alle 08:59
-- Versione del server: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `big_gym`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `award`
--

CREATE TABLE IF NOT EXISTS `award` (
  `idPremi` int(11) NOT NULL,
  `descrizinePremio` varchar(500) NOT NULL,
  `titolo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `award`
--

INSERT INTO `award` (`idPremi`, `descrizinePremio`, `titolo`) VALUES
(1, 'Dopo aver lavorato tanto e bene con i clienti, è stato assegnato il premio <b>Best Customer Trainer</b> del mese a ', 'Miglior istruttore per la rivista NoPainNoGain'),
(2, 'Dopo aver lavorato tanto e bene con i clienti, è stato conferito il premio <b>Best Customer Trainer</b> del mese a ', 'Best Customer Trainer');

-- --------------------------------------------------------

--
-- Struttura della tabella `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL,
  `nomeCat` varchar(25) NOT NULL,
  `descrizioneCat` varchar(500) NOT NULL,
  `descrizioneCompleta` varchar(500) NOT NULL,
  `benefici` varchar(500) NOT NULL,
  `chiPratica` varchar(500) NOT NULL,
  `imgCat` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `category`
--

INSERT INTO `category` (`id`, `nomeCat`, `descrizioneCat`, `descrizioneCompleta`, `benefici`, `chiPratica`, `imgCat`) VALUES
(1, 'Attività di tonificazione', 'Questa ginnastica che rassoda la parte superiore ed inferiore del corpo, con esercizi mirati e l''impiego di strumenti come lo step o piccoli attrezzi...', 'Questa ginnastica che rassoda la parte superiore ed inferiore del corpo, con esercizi mirati e l''impiego di strumenti come lo step o piccoli attrezzi (pesetti, elastici, barre), risulta particolarmente piacevole e divertente, grazie allo stimolante lavoro collettivo.', 'Tonificazione dei principali gruppi muscolari e al miglioramento di resistenza e coordinazione attraverso un intenso lavoro cardiovascolare.', 'Chiunque, basta regolare l''attività in base alla propria forma fisica', './img/tonificazione.jpg'),
(2, 'Corpo e Mente', 'Come il corpo, anche la mente può essere tenuta in esercizio in palestra. Divertirsi non può più essere considerata una distrazione dall''attività fisica, perché in realtà è un contributo attivo...', 'Come il corpo, anche la mente può essere tenuta in esercizio in palestra. Divertirsi non può più essere considerata una distrazione dall''attività fisica, perché in realtà è un contributo attivo al raggiungimento dei propri risultati per la forma ideale.\r\nSe la "ginnastica mentale" ci aiuta a rimanere giovani e attivi nel corpo, è altrettanto vero che l''elasticità mentale migliora proprio attraverso l''allenamento.', 'Migliora l’equilibrio psicofisico, per rivitalizzare il corpo e favorire un corretto flusso energetico attraverso la respirazione e la ricerca della consapevolezza corporea', 'Ognuno può  scegliere  la disciplina  più adatta alle sue esigenze e soprattutto al suo stato d’animo', './img/corpo_e_mente.jpg'),
(3, 'Cardio', 'Questo allenamento ad alta intensità consente di ridurre la massa grassa e modellare il corpo in tempi record. Grazie a questo metodo di allenamento...', 'Questo allenamento ad alta intensità consente di ridurre la massa grassa e modellare il corpo in tempi record. Grazie a questo metodo di allenamento, si possono bruciare grandi quantità di lipidi. Si consiglia di eseguire un breve riscaldamento iniziale e defaticamento finale.', 'Ha come obiettivo il miglioramento della capacità cardio respiratoria e vascolare, stimola e aumenta l’efficienza del sistema cuore e polmoni, incrementa il metabolismo basale, migliora il rapporto tra la percentuale di massa grassa e massa magra.', 'Allenamento adatto sia a uomini che a donne allenati, data l''intensità dello sforzo.', './img/Cardio.jpg'),
(4, 'Funzionali', 'Sistema di allenamento innovativo che migliora le performance dell’individuo, predisponendo il corpo a svolgere più efficacemente le attività quotidiane...', 'Sistema di allenamento innovativo che migliora le performance dell’individuo, predisponendo il corpo a svolgere più efficacemente le attività quotidiane o atletiche attraverso esercizi che sviluppano forza, resistenza e capacità neuromuscolari.\r\nNato nel campo della riabilitazione, sviluppatosi successivamente nello sport professionistico l’allenamento funzionale oggi spopola nelle palestre di tutto il mondo.', 'Migliora le performance dell’individuo, predisponendo il corpo a svolgere più efficacemente le attività quotidiane', 'Chiunque, basta regolare l''attività in base alla propria forma fisica', './img/Funzionale.jpg'),
(5, 'Condizionamento', 'Il condizionamento muscolare è la capacità di allenare i propri muscoli ad un grado di contrazione diversa da quella normale, ottenendo una migliore risposta...', 'Il condizionamento muscolare è la capacità di allenare i propri muscoli ad un grado di contrazione diversa da quella normale, ottenendo una migliore risposta neuromuscolare (tono), una migliore resistenza (endurance) ed un miglior stato nutrizionale (trofismo).', 'Allenare la risposta muscolare e la tonicità muscolare.', 'Chiunque, basta regolare l''attività in base alla propria forma fisica', './img/Condizionamento.jpg'),
(6, 'Acquafitness', 'Acquafitness comprende una serie di esercizi aerobici in acqua poco profonda. Fatto principalmente in piedi, nell''acqua fino alla vita o...', 'Acquafitness comprende una serie di esercizi aerobici in acqua poco profonda. Fatto principalmente in piedi, nell''acqua fino alla vita o poco più in alta. La maggior parte dei corsi di Acquafitness sono tenuti in gruppi con un insegnante professionista qualificato per circa un''ora .', 'L''aggiunta di esercizio acquatico può notevolmente migliorare la tua salute . Gli adulti dovrebbero anche fare attività di potenziamento muscolare che sono di intensità moderata o elevata e coinvolgono tutti i principali gruppi muscolari. Nel corso del tempo l''aerobica in acqua può portare a una riduzione della pressione arteriosa e frequenza cardiaca a riposo, che permetterà di migliorare la salute generale.', 'Tutti quelli che hanno una età compresa tra 14 e 99', './img/Acquafitness.JPG');

-- --------------------------------------------------------

--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `nome` varchar(20) NOT NULL,
  `descrizione` varchar(500) NOT NULL,
  `target` varchar(500) NOT NULL,
  `livello` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `img1` varchar(100) DEFAULT NULL,
  `img2` varchar(100) DEFAULT NULL,
  `img3` varchar(100) DEFAULT NULL,
  `istruttore` int(11) NOT NULL,
  `istruttore2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `course`
--

INSERT INTO `course` (`nome`, `descrizione`, `target`, `livello`, `categoria`, `img1`, `img2`, `img3`, `istruttore`, `istruttore2`) VALUES
('Boxe Up', 'Boxe Up è un mix di tutto quello che il nostro istinto o stato d''animo vuole sfogare al sacco: non c’è contatto fisico, non c''è gara e non ci sono vincitori o sconfitti. È un corso di fitness studiato per unire la musica alle tecniche degli sport da combattimento e delle arti marziali, il tutto di fronte a un sacco.', 'Alcuni dei benefici che si possono ottenere con la pratica costante sono: l’aumento della forza e della flessibilità muscolare, decompressione della colonna e delle articolazioni, aumento della mobilità, miglioramento della circolazione sanguigna e linfatica, maggior agilità.flessibilità muscolare, decompressione della colonna e delle articolazioni, aumento della mobili', 0, 2, './img/Box Up1.jpg', './img/Box Up2.jpg', NULL, 2, 0),
('Hydrobike', 'L'' idrobike consiste nella pratica dello spinning in piscina: la bicicletta che si utilizza è una speciale bicicletta da spinning in acciaio, concepita per sfruttare e beneficiare al massimo della resistenza dell'' acqua. Non è necessario saper nuotare per frequentare un corso di hydrobike: l'' acqua infatti raggiunge l'' altezza della vita, spalle e testa rimagono fuori, solo le ginocchia restano sempre sommerse durante gli esercizi.', 'La pratica dell'' hydrobike è l'' ideale per chi presenta problemi di sovrappeso e di ritenzione idrica: è un'' attività fisica di tipo aerobico quindi permette un buon consumo di calorie. Inoltre, un buon allenamento agisce positivamente sul sistema cardio-vascolare rinforzando il cuore, la resistenza alla fatica e migliorando la circolazione.', 2, 6, './img/hydrobike.jpg', './img/hydrobike2.jpg', NULL, 8, 0),
('Jazzercise', 'Il programma Jazzercise è stato fondato nel 1969 dalla Jazzercise CEO Judi Sheppard Missett e mescola la danza, l''allenamento della resistenza, pilates, yoga, kickboxing e movimenti in stile latino con la musica popolare.', 'Rassodamento gluteri e miglioramento della tonicità muscolare delle cosce', 0, 1, './img/jazzercise.jpg', './img/jazzercise2.jpg', NULL, 6, 0),
('Pancafit', 'Pancafit è l’unico attrezzo, brevettato in tutto il mondo, capace di riequilibrare la postura con semplicità ed in tempi brevissimi, agendo sulla globalità delle catene muscolari. E’ in grado di ridare libertà e benessere a tutto il corpo attraverso l''allungamento muscolare globale decompensato. Non si tratta di un semplice stretching analitico o classico. E’ un allungamento muscolare fatto in postura corretta ed utilizza tecniche respiratorie per sbloccare il diaframma', 'Aiuta a migliorare la postura e la condizione fisica grazie alla sua azione sulle tensioni e sulle rigidità muscolari. Inoltre si agisce su tutti gli apparati che hanno relazione con la postura: articolazione temporo-mandibolare e denti, occhi e funzione visiva, sistema cutaneo e cicatrici reattive, sistema podalico e patologie del piede', 1, 4, './img/panca fit.jpg', './img/panca fit2.jpg', NULL, 1, 0),
('Sweeng', 'Il termine SweenG è un gioco parole: unisce la dolcezza “sweet” al divertimento “swing” (dondolare).\r\nLo SweenG nasce dall''unione di due differenti realtà: quella del “controllo” caratteristica della tecnica\r\nPilates con quella dell''allenamento sportivo.', 'Alcuni dei benefici che si possono ottenere con la pratica costante sono: l’aumento della forza e della flessibilità muscolare, decompressione della colonna e delle articolazioni, aumento della mobilità, miglioramento della circolazione sanguigna e linfatica, maggior agilità.', 0, 4, './img/sweeng1.jpg', './img/sweeng2.jpg', './img/sweeng3.jpg', 1, 6),
('Tai Chi', 'La boxe della suprema polarità (t''ai chi ch''uan) è anche abbreviato in Taiji o Tai Chi; stile interno delle arti marziali cinesi nato come tecnica di combattimento, è oggi conosciuto in occidente soprattutto come ginnastica e come tecnica di medicina preventiva.', 'Una delle caratteristiche che ha dato estrema notorietà al Taijiquan è la sua utilità per la salute; riduzione del colesterolo, il miglioramento della cordinazione e un miglioramento delle funzionalità fisiologiche', 2, 2, './img/Tai Chi.jpg', './img/Tai Chi2.jpg', NULL, 5, 0),
('V-Gravity Group', 'Gravity Training System, o più semplicemente GTS, è un metodo di allenamento da effettuarsi per mezzo di un attrezzo dal medesimo nome e che permette di potenziare tutti i distretti muscolari sfruttando in maniera amplificata l’effetto della forza di gravità sul corpo umano.\r\nNato all’inizio del 2000 a San Diego, in California.', 'Questo attrezzo consente infatti di esercitarsi sfruttando circa 150 posizioni diverse, con un conseguente beneficio a livello psico-fisico. È adatto a tutte quelle persone che cercano il massimo dall’allenamento con un impegno di tempo ridotto', 0, 1, './img/v_gravity.jpg', './img/v_gravity2.jpg', NULL, 7, 0),
('V-Jump Conditioning', 'V-Jump Conditioning: Lavoro che combina la resistenza cardiovascolare a quella muscolare su di un ”Trampolino elastico”. Allenamento divertente, di grande intensità e dinamicità.', 'Rassodamento glutei e miglioramento della tonicità muscolare delle cosce', 1, 5, './img/V-Jump1.jpg', './img/V-Jump2.jpg', NULL, 4, 0),
('V-Step Tone', 'Lo Step tone consiste in un allenamento aerobico, nato in America, che utilizza una piattaforma dalla quale\r\nsi sale e si scende. Infatti, lo Step tone è una piattaforma larga circa 40 cm. per un metro di lunghezza. La\r\nlezione di Step tone, (traduzione inglese di gradino), prevede una serie di esercizi dinamici di salita e\r\ndiscesa dalla piattaforma seguendo un ritmo costante scandito dalla musica', 'Aumenta le capacità cardiocircolatorie e respiratorie, offre maggiori benefici muscolari, tonifica al ritmo di musica in particolare gambe e glutei e sviluppa resistenza muscolare grazie ai movimenti continui', 1, 5, './img/step e tone.jpg', './img/step e tone2.jpg', NULL, 4, 0),
('Zumba', 'Zumba è una lezione di fitness musicale di gruppo che utilizza i ritmi e i movimenti della musica afro-caraibica, mixati con i movimenti tradizionali dell''aerobica. Fu creata dal ballerino e coreografo Alberto "Beto" Perez  alla fine degli anni novanta in Colombia.', 'Ha come obiettivo principale creare un alto consumo calorico grazie alla sua intensità variabile. Inoltre le musiche e le coreografie hanno lo scopo principale di divertire il praticante in modo da fargli dimenticare lo sforzo fisico con conseguente alto consumo calorico.', 2, 3, './img/Zumba1.jpg', './img/Zumba2.jpg', NULL, 3, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor`
--

CREATE TABLE IF NOT EXISTS `instructor` (
  `id_istruttore` int(11) NOT NULL,
  `nomeIstruttore` varchar(20) NOT NULL,
  `categoria` int(11) NOT NULL,
  `corso1` varchar(20) DEFAULT NULL,
  `corso2` varchar(20) DEFAULT NULL,
  `img` varchar(50) NOT NULL,
  `eta` int(11) NOT NULL,
  `altezza` int(11) NOT NULL,
  `luogo` varchar(50) NOT NULL,
  `id_premi` int(11) DEFAULT NULL,
  `storia` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructor`
--

INSERT INTO `instructor` (`id_istruttore`, `nomeIstruttore`, `categoria`, `corso1`, `corso2`, `img`, `eta`, `altezza`, `luogo`, `id_premi`, `storia`) VALUES
(1, 'Stefano Campari', 4, 'Pancafit', 'Sweeng', './img/stefano_campari.jpg', 30, 175, 'Milano', 1, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\n                        <li> 2011 Corso di Istruttore Pancafit conseguito presso Wellness Center 2000 Roma</li>\n                        <li>2014 Corso di Istruttore Sweeng conseguito presso Big Gym Monza</li>'),
(2, 'Giorgio Castoldi', 2, 'Boxe Up', NULL, './img/giorgio_castoldi.jpg', 32, 180, 'Monza', NULL, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\n                        <li> 2010 Corso di Istruttore Boxe Up conseguito presso Wellness Center 2000 Roma</li>'),
(3, 'Benedetta Roncalli', 3, 'Zumba', NULL, './img/benedetta_roncalli.jpg', 28, 167, 'Bergamo', 2, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\n                        <li>2013 Corso di Istruttore Zumba conseguito presso Big Gym Monza</li>'),
(4, 'Giampaolo Gambi', 5, 'V-Jump Conditioning', 'V-Step Tone', './img/giampaolo_gambi.jpg', 28, 172, 'Ravenna', NULL, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\n                        <li> 2011 Corso di Istruttore Jump Conditioning conseguito presso Wellness Center 2000 Roma</li>\n                        <li>2014 Corso di Istruttore Step Tone conseguito presso Big Gym Monza</li>'),
(5, 'Maurizio Carugati', 2, 'Tai Chi', NULL, './img/maurizio_carugati.jpg', 45, 176, 'Como', 2, '<li>AA 1997-1998 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\n                        <li> 2008 Corso di Istruttore Tai Chi conseguito presso il Centro Tai Chi Chuan a Milano</li>'),
(6, 'Fanni Fidenzio', 1, 'Jazzercise', 'Sweeng', './img/fanni_fidenzio.jpg', 46, 170, 'Pamplona', 2, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\r\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\r\n                        <li> 2011 Corso di Istruttore Pancafit conseguito presso Wellness Center 2000 Roma</li>\r\n                        <li>2014 Corso di Istruttore Sweeng conseguito presso Big Gym Monza</li>'),
(7, 'Erica Abate', 1, 'V-Gravity Group', NULL, './img/erika_abate.jpg', 32, 170, 'Salerno', NULL, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\r\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\r\n                        <li> 2011 Corso di Istruttore Pancafit conseguito presso Wellness Center 2000 Roma</li>\r\n                        <li>2014 Corso di Istruttore Sweeng conseguito presso Big Gym Monza</li>'),
(8, 'Marco Bancone', 6, 'Hydrobike', NULL, './img/marco_bancone.jpg', 39, 170, 'Bari', NULL, '<li>AA 2006-2007 Laurea in Scienze Motorie e Sportive conseguita presso l’Università degli Studi di Milano</li>\n                        <li>2008 Corso di Istruttore Pilates conseguito presso Sporting Club Villasanta</li>\n                        <li> 2011 Corso di Istruttore Hydrobike conseguito presso Wellness Center 2000 Roma</li>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `award`
--
ALTER TABLE `award`
  ADD PRIMARY KEY (`idPremi`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`nome`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id_istruttore`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
