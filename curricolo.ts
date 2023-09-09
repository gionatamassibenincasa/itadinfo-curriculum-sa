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
    | "Architettura dei computer (AC)"
    | "Elaborazione digitale dei documenti (DE)"
    | "Algoritmi e linguaggi di programmazione (AL)";
  rationale: string;
  strumenti: string;
  risultati: string;
  abilita: string[];
}

interface Tratto {
  periodo: "Primo biennio" | "Secondo biennio" | "Quinto anno";
  argomenti: Argomento[];
}

const context: Tratto[] = [
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
      {
        argomento: "",
        arg_breve: "",
        area_tematica: "Architettura dei computer (AC)",
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
      {
        argomento: "",
        arg_breve: "",
        area_tematica: "Architettura dei computer (AC)",
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
];

console.log(JSON.stringify(context, null, 2));

/*
\subsection[Problemi e algoritmi]{Problemi, modelli, soluzioni e algoritmi}

Per introdurre gli studenti alla programmazione vengono prima presentati
e formalizzati i problemi.
Si sono scelte le seguenti abilità:

\begin{enumerate}
  \item
    Saper formalizzare un problema di ricerca
  \item
    Simulare l'esecuzione dell'algoritmo di ricerca lineare
  \item
    Simulare l'esecuzione dell'algoritmo di ricerca binaria
  \item
    Saper formalizzare il concetto di ordinamento di una sequenza
  \item
    Simulare l'algoritmo di ordinamento per selezione, per inserimento e a bolle
  \item
    Calcolare il numero di confronti e di scambi degli algoritmi di
    ordinamento basati su confronti e scambi
  \item
    Comprendere i criteri di scelta di un algoritmo rispetto ad altri
  \item
    Astrarre il modello di semplici problemi di natura quantitativa e
    descrivere algoritmicamente il procedimento di soluzione
  \item
    Simulare l'esecuzione di un programma
\end{enumerate}
  
Anche in questo caso si è fatto ricorso a `Computer Science Unplugged'.

\subsection[Sistemi Operativi]{Interagire col sistema operativo tramite la shell}

Per introdurre il sistema operativo si è scelto di saper interagire con il suo
livello più esterno sviluppando le seguenti abilità:

\begin{enumerate}
  \def\labelenumi{\arabic{enumi}.}
  \item
    Creare, rinominare, spostare e cancellare un file
  \item
    Organizzare i file nelle directory
  \item
    Invocare un programma
  \item
    Elencare file e directory
  \item
    Creare una pipe anonima tra due o più utility
  \item
    Usare comandi per la data, l'estrazione della testa e della coda
    di un file di testo, l'ordinamento delle linee, l'estrazione di campi
\end{enumerate}

Si è fatto ricorso ad una connessione `ssh` ad un server GNU/Linux.

\section{Secondo biennio e quinto anno}

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

\begin{enumerate}
  \item
    Usare le operazioni di filtraggio, riduzione e mappa nel foglio di
    calcolo
  \item
    Usare il foglio di calcolo per modellizzare e risolvere le
    problematiche d'interesse per il corso di studi
  \item
    Usare il risolutore per problemi di scelta
  \item
    Impostare problemi a variabili intere con il risolutore
\end{enumerate}

\subsection[Paradigmi]{Paradigmi di programmazione}

Nell'incapacità dell'autore di decodificare le richieste
di `implementazione di un linguaggio di programmazione,
metodologie di programmazione, sintassi di un linguaggio
orientato agli oggetti', si è scelto di presentare il paradigma
della programmazione strutturata (con funzioni definite nell'ambito 
di una funzione) in JavaScript, quello logico con esempi in Prolog,
e quello funzionale in JavaScript, realizzando funzioni pure espresse
senza l'uso dei costrutti \texttt{while}, \texttt{do-while} e texttt{for}.

\begin{enumerate}
  \item\
    Saper realizzare algoritmi usando le funzioni e 
    i costrutti di sequenza, selezione e iterazione (paradigma strutturato)
  \item
    Progettare semplici basi di fatti e regole con paradigma logico
  \item
    Saper realizzare semplici algoritmi mediante funzioni sintatticamente ricorsive
\end{enumerate}

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

\subsection[Funzioni di ordine superiore]{Funzioni di ordine superiore}

\begin{enumerate}
  \item
    Definire funzioni che hanno come argomento una funzione di variabile
    reale e un valore reale e che restituiscono un valore reale
  \item
    Definire funzioni che hanno come argomento una funzione di variabile
    reale e che restituiscono una funzione di variabile reale
  \item
    Descrivere gli algoritmi in termini di applicazione e composizione di funzioni
  \item
    Manipolare gli array usando le tecniche: filter, map, reduce.
\end{enumerate}

\subsection[Radici]{Radici di funzioni}

\begin{enumerate}
  \item Saper applicare il metodo di Erone di Alessandria per il calcolo delle radici quadrate
  \item
    Riconoscere l'esistenza di una radice di una funzione dato un intervallo
  \item
    Saper effettuare la ricerca numerica di una radice tramite il metodo
    di bisezione
  \item
    Realizzare in un linguaggio di programmazione e al foglio di calcolo
    il metodo di bisezione
    \item
    Saper effettuare la ricerca numerica di una radice tramite il metodo
    delle tangenti (di Newton)
  \item
    Realizzare in un linguaggio di programmazione e al foglio di calcolo
    il metodo delle tangenti (di Newton)
  \item
    Saper riconoscere l'equivalenza di due metodi iterativi
\end{enumerate}

\subsection[Ottimizzazione]{Ottimizzazione nel caso di una variabile reale}

\begin{enumerate}
  \item
  Riconoscere l'esistenza di un massimo e di un minimo
  \item
    Metodo di Newton per l'ottimizzazione
  \item
    Approssimare il punto di minimo locale usando il metodo di Newton
  per l'ottimizzazione
  \item
    Realizzare un un linguaggio di programmazione e al foglio di calcolo
  il metodo di Newton per l'ottimizzazione
  \item
    Realizzare un un linguaggio di programmazione e al foglio di calcolo
  il metodo della sezione aurea
\end{enumerate}



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
