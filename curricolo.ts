//@ts-check
/*
Nel testo viene fornito un estratto della programmazione didattica nel primo e secondo biennio e nel quinto anno
indicando un sottoinsieme di argomenti,
la collocazione all'interno dell'area tematica definita nelle Indicazioni Nazionali,
la motivazione principale per la scelta degli argomento,
i traguardi di competenza espressi come abilità verificabili e i materiali didattici usati.
*/

export interface Argomento {
  argomento: string;
  arg_breve: string;
  area_tematica:
    | "Algoritmi e linguaggi di programmazione (AL)"
    | "Architettura dei computer (AC)"
    | "Basi di dati (BD)"
    | "Computazione, calcolo numerico e simulazione (CS)"
    | "Elaborazione digitale dei documenti (DE)"
    | "Reti di computer (RC)"
    | "Sistemi operativi (SO)"
    | "Struttura di Internet e servizi (IS)";
  rationale: string;
  strumenti: string;
  risultati: string;
  abilita: string[];
}

interface Ciclo {
  periodo: "Primo biennio" | "Secondo biennio" | "Quinto anno";
  argomenti: Argomento[];
}

const context: Ciclo[] = [
  {
    periodo: "Primo biennio",
    argomenti: [
      {
        argomento: "Scrittura tecnico-scientifica al calcolatore",
        arg_breve: "Scrittura tecnico-scientifica",
        area_tematica: "Elaborazione digitale dei documenti (DE)",
        rationale: `L'argomento è introdotto per soddisfare la richiesta di produzione di documenti elettronici e padronanza
        di uno strumento di produzione, sebbene non principale come indicato dalla Indicazioni nazionali, e le aspettative dei colleghi sull'uso di un sistema di videoscrittura.
        La videoscrittura si colloca di buon diritto nell'applimatica per cui si è scelto di ampliare la problematica inserendola nel contesto
        generale della comunicazione tecnico/scientifica e di selezionare degli strumenti che permettessero di mostrare delle grammatiche formali nella forma di diagrammi sintattici.
        Lo strumento di videoscrittura diventa così un linguaggio dotato di grammatica e la scrittura diventa programmazione con un linguaggio di dominio specifico.`,
        strumenti: `Si è scelto il linguaggio AsciiDoctor\cite{asciidoctor} integrato con \LaTeX{} e \texttt{asciidoctor-diagram} come caso di studio.
                Il livello di apprendimento è verificato tramite un'applicazione web basata che verifica automaticamente del livello di apprendimento.
                Come materiale di studio vengono condivisi i diagrammi sintattici del linguaggio e gli esempi realizzati in laboratorio.`,
        risultati: `Come valore aggiunto di questa attività rispetto a quella di videoscrittura con l'applicazione \textit{WYSIWYG}
        vi sono l'esperienza con le grammatiche formali e la necessità di analizzare un testo per controllarne la correttezza formale.`,
        abilita: [
          "Identificare gli attori e di una comunicazione",
          "Distinguere tra dati, informazioni e conoscenza",
          "Aggiungere l'autore e il titolo nel frontespizio di una relazione",
          "Suddividere un testo nei suoi elementi strutturali ed aggiungere i titoletti",
          "Scrivere tabelle, immagini e altri contenuti flottanti con didascalie",
          "Scrivere con elenchi ordinati, non ordinati e descrittivi",
          "Enfatizzare il testo selezionando un carattere tipografico opportuno",
        ],
      },
      {
        argomento: "Dati e codifiche",
        arg_breve: "Dati e codifiche",
        area_tematica: "Architettura dei computer (AC)",
        rationale: `L'argomento è proposto per soddisfare la richiesta di introdurre lo studente alla codifica binaria
        e non vuole limitarsi ai codici codici ASCII e Unicode indicati nelle Indicazioni nazionali.`,
        risultati: `Lo studente non è introdotto alla sola rappresentazione del testo ma anche a quella dei numeri naturali e delle immagini raster. Al concetto di cifra binaria come elemento di codifica viene affiancato in modo intuitivo il concetto di \\textit{bit} come unità di misura dell'informazione e la capacità di mettere in relazione la quantità di bit usati per rappresentare la stessa informazione usando codici diversi.`,
        strumenti: `La didattica si avvale delle attività proposte nel testo \\textit{Computer Science Unplugged}~\\cite{csu}.`,
        abilita: [
          "Convertire un numero da base due a base dieci",
          "Convertire un numero da base dieci a base due",
          "Codificare un testo usando codifiche binarie dei caratteri",
          "Decodificare un testo codificato in binario",
          "Comprendere le esigenze che hanno condotto allo sviluppo dello standard UNICODE",
          "Codificare un'immagine monocromatica mediante run-length encoding",
          "Decodificare un'immagine monocromatica codificata mediante run-length encoding",
        ],
      },
      {
        argomento: "Problemi, modelli, soluzioni e algoritmi",
        arg_breve: "Problemi e algoritmi",
        area_tematica: "Algoritmi e linguaggi di programmazione (AL)",
        rationale: `L'introduzione alla programmazione e alle sue tecniche richiede un'introduzione al concetto di algoritmo
        che deve richiede i concetti di problema, modello, codifica, istanza, soluzione, algoritmo ed esecutore.
        Il concetto di algoritmo è un concetto chiave dell'informatica e richiede un tempo di studio e sedimentazione dei concetti adeguato.`,
        risultati: `Lo studente è in grado di simulare l'esecuzione di un algoritmo, conosce alcuni problemi di ricerca e ordinamento, calcola la complessità computazionale di un semplice algoritmo basandosi sul numero di volte che una certa operazione viene eseguita, valuta l'algoritmo più efficiente per risolvere un problema noto in base alle caratteristiche dell'istanza.`,
        strumenti: `Le attività di apprendimento interattivo fanno ricorso alla manipolazione di carte da gioco, attività estrapolate da \\cite{csu} e giochi interattivi presenti nella sezione "Interactives" di \\cite{csfg}.
        Vengono condivise delle risorse di studio con la descrizione degli algoritmi in pseudo-linguaggio, diagramma delle attività e due linguaggi di programmazione.
        L'insegnante esegue passo passo gli algoritmi alla lavagna illustrando le variazioni di stato.`,
        abilita: [
          "Saper formalizzare un problema di ricerca",
          "Simulare l'esecuzione dell'algoritmo di ricerca lineare",
          "Simulare l'esecuzione dell'algoritmo di ricerca binaria",
          "Saper formalizzare il concetto di ordinamento di una sequenza",
          "Simulare l'algoritmo di ordinamento per selezione, per inserimento e a bolle",
          "Calcolare il numero di confronti e di scambi degli algoritmi di ordinamento basati su confronti e scambi",
          "Comprendere i criteri di scelta di un algoritmo rispetto ad altri",
          "Astrarre il modello di semplici problemi di natura quantitativa e descrivere algoritmicamente il procedimento di soluzione",
          "Simulare l'esecuzione di un programma",
        ],
      },
      {
        argomento: "Interagire col sistema operativo tramite la shell",
        arg_breve: "Sistemi Operativi",
        area_tematica: "Sistemi operativi (SO)",
        rationale: `Le Indicazioni nazionali richiedono la conoscenza delle funzionalità dei sistemi operativi più comuni
        e si è scelto di orientare lo studio al sistema operativo GNU/Linux in quanto esso è il sistema operativo
        più eseguito\\footnote{Si veda la voce \\url{https://en.wikipedia.org/wiki/Usage_share_of_operating_systems}{Usage share of operating systems} di Wikipedia.}
        e documentato fin nei minimi particolari ed è software libero. Nel primo bienno si è limitata l'analisi delle funzionalità al
        concetto di \\textit{file system}, processo e di \\textit{shell}. Le interfacce grafiche per la gestione dei file sono ben note agli studenti e quindi si è scelto di lavorare sul linguaggio \\texttt{bash} e sui filtri più comuni.`,
        risultati: `Gli studenti sanno condurre operazioni complesse impossibili da effettuare con le interfacce grafiche.`,
        strumenti: `Si è optato per un laboratorio avente PC operanti con la distribuzione FUSS\\footnote{Si veda il \\url{https://fuss.bz.it/}{progetto FUSS}}.`,
        abilita: [
          "Creare, rinominare, spostare e cancellare un file",
          "Organizzare i file nelle directory",
          "Invocare un programma",
          "Elencare file e directory",
          "Creare una pipe anonima tra due o più utility",
          "Usare comandi per la data, l'estrazione della testa e della coda di un file di testo, l'ordinamento delle linee, l'estrazione di campi",
        ],
      },
      {
        argomento: "Documenti elettronici per il web",
        arg_breve: "Web",
        area_tematica: "Elaborazione digitale dei documenti (DE)",
        rationale: `Viene introdotto in anticipo rispetto alle Indicazioni nazionali per avere poi il tempo nel secondo biennio di introdurre la programmazione del web.`,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "Riconoscere un linguaggio basato sui marcatori",
          "Usare i tag HTML per creare un documento valido",
          "Usare i tag semantici per strutturare il contenuto",
          "Saper realizzare un semplice sito web statico curando solo il contenuto",
          "Collegare un foglio di stile ad una pagina web",
          "Modificare lo stile del testo",
          "Modificare l'aspetto delle scatole",
          "Saper realizzare un semplice sito web statico curando anche la presentazione",
        ],
      },
    ],
  },
  {
    periodo: "Secondo biennio",
    argomenti: [
      {
        argomento: "Fogli elettronici",
        arg_breve: "Fogli elettronici",
        area_tematica: "Elaborazione digitale dei documenti (DE)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "Usare le operazioni di filtraggio, riduzione e mappa nel foglio di calcolo",
          "Usare il foglio di calcolo per modellizzare e risolvere le problematiche d'interesse per il corso di studi",
          "Usare il risolutore per problemi di scelta",
          "Impostare problemi a variabili intere con il risolutore",
          "Descrivere l'ordine delle operazioni nell'aggiornamento di un foglio di calcolo",
        ],
      },
      {
        argomento: "Paradigmi di programmazione",
        arg_breve: "Paradigmi",
        area_tematica: "Algoritmi e linguaggi di programmazione (AL)",
        rationale: `Nell'incapacità dell'autore di decodificare le richieste
di \\textit{implementazione di un linguaggio di programmazione,
metodologie di programmazione, sintassi di un linguaggio
orientato agli oggetti}, si è scelto di presentare il paradigma
della programmazione strutturata (con funzioni definite nell'ambito 
di una funzione) in JavaScript, quello logico con esempi in Prolog,
e quello funzionale in JavaScript, realizzando funzioni pure di ordine superiore.`,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "Saper realizzare algoritmi usando le funzioni e  i costrutti di sequenza, selezione e iterazione (paradigma strutturato)",
          "Riconoscere la ricorsione come caratteristica sintattica",
          "Riconoscere se il processo generato da una procedura sintatticamente ricorsiva è lineare o ricorsivo",
          "Progettare semplici basi di fatti e regole con paradigma logico",
          "Saper realizzare semplici algoritmi mediante funzioni sintatticamente ricorsive",
          "Saper attraversare semplici strutture dati definite ricorsivamente",
        ],
      },
      {
        argomento: "Documenti elettronici per il web",
        arg_breve: "Web",
        area_tematica: "Algoritmi e linguaggi di programmazione (AL)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: ["", "", "", "", ""],
      },
      {
        argomento: "",
        arg_breve: "",
        area_tematica: "Architettura dei computer (AC)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: ["", "", "", "", ""],
      },
    ],
  },
  {
    periodo: "Quinto anno",
    argomenti: [
      {
        argomento: "",
        arg_breve: "",
        area_tematica: "Reti di computer (RC)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: ["", "", "", "", ""],
      },
      {
        argomento: "",
        arg_breve: "",
        area_tematica: "Struttura di Internet e servizi (IS)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: ["", "", "", "", ""],
      },
      {
        argomento: "Funzioni di ordine superiore",
        arg_breve: "Funzioni di ordine superiore",
        area_tematica: "Computazione, calcolo numerico e simulazione (CS)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "Definire funzioni che hanno come argomento una funzione di variabile reale e un valore reale e che restituiscono un valore reale",
          "Definire funzioni che hanno come argomento una funzione di variabile reale e che restituiscono una funzione di variabile reale",
          "Descrivere gli algoritmi in termini di applicazione e composizione di funzioni",
          "Manipolare gli array usando le tecniche: filter, map, reduce.",
        ],
      },
      {
        argomento: "Radici di funzioni non lineari",
        arg_breve: "Radici",
        area_tematica: "Computazione, calcolo numerico e simulazione (CS)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "Saper applicare il metodo di Erone di Alessandria per il calcolo delle radici quadrate",
          "Riconoscere l'esistenza di una radice di una funzione dato un intervallo",
          "Saper effettuare la ricerca numerica di una radice tramite il metodo di bisezione",
          "Realizzare in un linguaggio di programmazione e al foglio di calcolo il metodo di bisezione",
          "Saper effettuare la ricerca numerica di una radice tramite il metodo delle tangenti (di Newton)",
          "Realizzare in un linguaggio di programmazione e al foglio di calcolo il metodo delle tangenti (di Newton)",
          "Saper riconoscere l'equivalenza di due metodi iterativi",
        ],
      },
      {
        argomento: "Ottimizzazione 1-dimensionale",
        arg_breve: "Ottimizzazione",
        area_tematica: "Computazione, calcolo numerico e simulazione (CS)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "Riconoscere l'esistenza di un massimo e di un minimo",
          "Metodo di Newton per l'ottimizzazione",
          "Approssimare il punto di minimo locale usando il metodo di Newton per l'ottimizzazione",
          "Realizzare un un linguaggio di programmazione e al foglio di calcolo il metodo di Newton per l'ottimizzazione",
          "Realizzare un un linguaggio di programmazione e al foglio di calcolo il metodo della sezione aurea",
        ],
      },
    ],
  },
];

//console.log(JSON.stringify(context, null, 2));
let tex = "";
context.forEach((ciclo: Ciclo) => {
  tex += `\n\\subsection{${ciclo.periodo}}\n\\label{sec:${ciclo.periodo
    .toLowerCase()
    .replace(" ", "-")}}\n\n`;

  ciclo.argomenti.forEach((arg: Argomento) => {
    tex += `\\subsubsection[${arg.arg_breve}]{${arg.argomento}}\n`;
    tex += `\\label{sec:${arg.arg_breve.toLowerCase().replace(" ", "-")}}\n\n`;

    tex += `\\noindent\\textbf{Area tematica}: ${arg.area_tematica}\n\n`;
    tex += `%\\noindent\\textbf{Abilità}:
    
\\begin{enumerate}\n`;
    arg.abilita.forEach((abilita: string) => {
      tex += `  \\item ${abilita}\n`;
    });
    tex += `\\end{enumerate}\n\n`;

    tex += `${arg.rationale}\n\n`;
    tex += `${arg.strumenti}\n\n`;
    tex += `${arg.risultati}\n\n`;
  });
});

console.log(tex);
/*
\subsection[Web]{Documenti elettronici per il web}

Nel secondo biennio si è cercato di sviluppare, gradualmente, l'astrazione
e di introdurre vari paradigmi di programmazioni, tranne quello detto
\textit{Banana Gorilla Jungle} perché con due ore a settimana bisogna
fare delle scelte.
 
\subsection[Fogli elettronici]{Fogli elettronici}

I fogli elettronici sono richiesti dai colleghi e si possono
introdurre i concetti di reattività ma anche di funzione di
ordine superiore in modo intuitivo. Si sono stabiliti i seguenti
traguardi:

\subsection[Paradigmi]{Paradigmi di programmazione}

Nell'incapacità dell'autore di decodificare le richieste
di `implementazione di un linguaggio di programmazione,
metodologie di programmazione, sintassi di un linguaggio
orientato agli oggetti', si è scelto di presentare il paradigma
della programmazione strutturata (con funzioni definite nell'ambito 
di una funzione) in JavaScript, quello logico con esempi in Prolog,
e quello funzionale in JavaScript, realizzando funzioni pure espresse
senza l'uso dei costrutti \texttt{while}, \texttt{do-while} e texttt{for}.

"Saper realizzare algoritmi usando le funzioni e  i costrutti di sequenza, selezione e iterazione (paradigma strutturato)",
"Progettare semplici basi di fatti e regole con paradigma logico",
"Saper realizzare semplici algoritmi mediante funzioni sintatticamente ricorsive"

\subsection[Grafi]{Problemi su grafi e combinatorici}

\begin{enumerate}
  \item Saper rappresentare un grafo
  \item
    Realizzare gli algoritmi di visita di un albero binario: preordine,
    postordine, simmetrico % e a livelli
  \item
    Visitare un grafo in profondità
  \item
    Visitare un grafo in ampiezza
  \item
    Simulare l'algoritmo di Dijkstra
  \item Rappresentare sul foglio di calcolo il problema dello zaino
\end{enumerate}



\end{enumerate}"


{
        argomento: "",
        arg_breve: "",
        area_tematica: "Architettura dei computer (AC)",
        rationale: ``,
        risultati: ``,
        strumenti: ``,
        abilita: [
          "",
          "",
          "",
          "",
          "",
        ],
      },
*/
