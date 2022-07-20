//const rowSeperator = '|';
//const colSeperator = ';';

let dataFromCSV;

Papa.parse("./badges-overview.csv", {
	download: true,
	complete: function(results) {
		console.log(results);
		dataFromCSV = results;
	}
});
console.log(dataFromCSV);
export let data = dataFromCSV;
//let rawData = 'Framework;Criterion;Description;Categories|FAIRness assessment (Lamprecht et al. 2020);F1 Software and its associated metadata have a global, unique and persistent identifier for each released version.;;Referencing, Version|FAIRness assessment (Lamprecht et al. 2020);F2 Software is described with rich metadata.;;Metadata|FAIRness assessment (Lamprecht et al. 2020);F3 Metadata clearly and explicitly include identifiers for all the versions of the software it describes.;;Referencing, Versioning|FAIRness assessment (Lamprecht et al. 2020);F4 Software and its associated metadata are included in a searchable software registry.;;Registry|FAIRness assessment (Lamprecht et al. 2020);A1 Software and its associated metadata are accessible by their identifier using a standardized communications protocol.;;Accessibilty|FAIRness assessment (Lamprecht et al. 2020);A1.1 The protocol is open, free, and universally implementable.;;Accessibilty|FAIRness assessment (Lamprecht et al. 2020);A1.2 The protocol allows for an authentication and authorization procedure, where necessary.;;Accessibilty|FAIRness assessment (Lamprecht et al. 2020);A2 Software metadata are accessible, even when the software is no longer available.;;Accessibilty|FAIRness assessment (Lamprecht et al. 2020);I1 Software and its associated metadata use a formal, accessible, shared and broadly applicable language to facilitate machine readability and data exchange.;;Interoperability|FAIRness assessment (Lamprecht et al. 2020);I2S.1 Software and its associated metadata are formally described using controlled vocabularies that follow the FAIR principles.;;Interoperability|FAIRness assessment (Lamprecht et al. 2020);I2S.2 Software use and produce data types and formats that are formally described using controlled vocabularies that follow the FAIR principles.;;Interoperability|FAIRness assessment (Lamprecht et al. 2020);Software dependencies are documented and mechI4Sanisms to access them exist.;;Interoperability|FAIRness assessment (Lamprecht et al. 2020);R1 Software and its associated metadata are richly described with a plurality of accurate and relevant attributes.;;Reproducability|FAIRness assessment (Lamprecht et al. 2020);R1.1 Software and its associated metadata have independent, clear and accessible usage licenses compatible with the software dependencies.;;Reproducability|FAIRness assessment (Lamprecht et al. 2020);R1.2 Software metadata include detailed provenance, detail level should be community agreed.;;Reproducability|FAIRness assessment (Lamprecht et al. 2020);R1.3 Software metadata and documentation meet domain-relevant community standards.;;Reproducability|software-heritage.org;Step 1.1 README;README, contains a description of the software (name, purpose, pointers to website, documentation, development platform, contact and support information, …);Metadata, Documentation|software-heritage.org;Step 1.2 AUTHORS;"AUTHORS, list of all the persons that need to be credited for the software; if you want to specify the roles of each person, we suggest to use the taxonomy of contributors elaborated at Inria.";Attribution|software-heritage.org;Step 1.3 LICENSE;LICENSE, the project license terms. For Open Source Licenses, use the standard SPDX licence names. For large software projects and developers, we suggest to look at the REUSE process and tools.;Licensing|software-heritage.org;Step 1.4 codemeta.json;A codemeta.json, A linked data metadata file will assist in indexing your source code in the Software Heritage archive and provide an easy way to link to other related research outputs. See the  CodeMeta  initiative for more information and our CodeMeta generator tool.;Metadata|software-heritage.org;Step 2 Save code to softwareheritage.org;Once your code repository has been properly prepared and up-to date, you need to: - go to the Software Heritage save code now page, - pick your version control system in the drop-down list, - enter the code repository url (the clone/checkout url as given by your development platform), - click on the Submit button.;Registry, Archiving, Version|software-heritage.org;Reference work;Once your source code has been archived, there are many ways to reference it in your article. Three common use cases are: (1) adding a link to the full repository archived in Software Heritage, (2) adding a link to a precise version of the software project, (3) adding a link to a precise version of a source code file, down to the level of the line of code.;Referencing|N4C Guidelines;;Anwendung: Recherche in Softwareverzeichnissen und Software Journals, in allgemeinen Code-Verzeichnissen oder in Plugin-/Modulsuchen für bestimmte Programmiersprachen und Softwarepakete.;Research|N4C Guidelines;;Anwendung: Für Entwickler:innen: Ausführliche Dokumentation und Beschreibung der Software in Dokumenten wie README, CONTRIBUTE, LICENSE, etc. Code-Dokumentation je nach Programmiersprache mit Frameworks wie Doxygen, JavaDoc, pydoc, etc.;Documentation, Attribution, Licensing|N4C Guidelines;;"Anwendung: Kalkulation/Finanzierungsmodell; Service Agreements z.B. mit einem Daten- oder Rechenzentrum; Issue und Bug Tracking z.B. in GitLab oder über GitHub.";Software management|N4C Guidelines;;Anwendung: Automatisches Testing, CI/CD-Pipelines, Bug Tracking z.B. in GitLab oder GitHub.;Quality|N4C Guidelines;;Anwendung: Es existieren verschiedene Versionskontrollsysteme, von denen Git aktuell am weitesten verbreitet und für die Anwendung empfehlenswert ist. Speziell für kollaborative Projekte kann die Plattform GitLab sehr nützlich sein, da sie weitergehende Funktionalitäten wie Issue Tracking, Rechteverwaltung und Wikis bietet. Viele Einrichtungen bieten den Zugang zu institutionseigenen GitLab-Instanzen. Eine mögliche Alternative bietet GitHub, welches jedoch kommerziell betrieben wird. Der Einsatz von Git kann auch ohne webbasierte Plattform erfolgen. Für die Benennung einzelner Versionen bzw. Releases von Software existieren Konventionen (z. B. Semantic Versioning - semver.org).;Version|N4C Guidelines;;Anwendung: Es steht eine Vielzahl veschiedener Lizenzmodelle zur Verfügung. Vor der Wahl einer konkreten Lizenz sollten Informationen über die Auswirkungen des Einsatzes eingeholt werden. Zur Orientierung gibt es vielfältige Informationsangebote (z. B. choosealicense.com). Nach der Wahl einer Lizenz sollte diese explizit und gut sichtbar in Softwareprojekten dargestellt werden, etwa in Metadaten, Beschreibungen und Dokumentationen der Software, und/oder mittels einer Datei namens LICENSE mit dem Lizenztext als Inhalt im Wurzelverzeichnis des Software-Pakets.;Licensing|N4C Guidelines;;Anwendung: Publikation der Software selbst (Source Code, Package), Publikation von Dokumentation und Metadaten (in Software-Repositorien/Registries), ggf. Publikation eines Software Papers, Archivierung publizierter Software-Versionen und Vergabe von persistenten Identifikatoren für die Software und ihre Versionen z.B. bei Zenodo.;Archiving, Publication|N4C Guidelines;;Anwendung: Die notwendige Zitation von Software durch Anwender:innen sollte durch eine konkrete und deutlich sichtbare Zitationsvorgabe in der Beschreibung und den Metadaten (ggfs. zusätzlich als Datei CITATION.cff im Quellcode - wird z.B. unterstützt von GitHub, Zenodo, Zotero) zur Software vorgegeben werden. Mindestangaben umfassen hierbei die verwantwortlichen Personen, den Publikationszeitpunkt, die Softwareversion sowie möglichst eine persistente Referenz auf die Software-Quelle mittels PID (Persistent Identifier), DOI (Digital Object Identifier) o.ä.;Citation, Attribution|Netherlands eScience Center - Software Development Guide;Pick & include an open source license;;License|Netherlands eScience Center - Software Development Guide;Use version control;;Version|Netherlands eScience Center - Software Development Guide;Use a publicly accessible version controlled repository;;Version, Registry|Netherlands eScience Center - Software Development Guide;Add a readme describing the project;;Documentation|Netherlands eScience Center - Software Development Guide;Use code quality tools;;Quality|Netherlands eScience Center - Software Development Guide;Testing;;Quality|Netherlands eScience Center - Software Development Guide;Use standards;;Quality|Netherlands eScience Center - Software Development Guide;When users are expected: - Release your software, - provide user documentation, - easy installation, - provide issue tracker;;|Netherlands eScience Center - Software Development Guide;When contributors are expected: - Provide development documentation, - Provide a means of communication, - Implement and add a code of conduct, - Contribution guideline;;|N4C Registry - basierend auf TADIRAH DH-Taxonomy?;;;|CKIT Rezensionen;;;'
//export const data = rawData.split(rowSeperator).map( line => line.split(colSeperator));
