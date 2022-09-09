# Markdown case: Real Estate Care

**Starter info vóór start applicatie**.
https://github.com/Pleun-18/ionicVue_RealEstateCare

*Inloggen dummy/loi gebruiker:*

E-mail: loi@loi.nl
Wachtwoord: admin321
> **Note:** Json-server moet draaien om inspecties en logins te kunnen gebruiken/vinden.
    command: json-server --watch public/data/db.json
> 

## Uitleg applicatie:
De applicatie is gebouwd om voor makelaars een versimpeld overzicht/systeem voor inspecties te creëeren. De applicatie heeft de hieronder genoemde technische ontwikkelingen die het voor de makelaar makkelijker maakt om ter plekke inspecties toe te voegen, aanpassen te passen en te verwijderen: 

-   Webbased (SPA) IOS + Android + Touch interface
-   UI/UX moet aansluiten op design/workflow
-   Foto’s direct kunnen toevoegen aan rapportage
-   Zonder netwerk moeten gegevens gecached worden tot netwerk er weer is.    
-   is het dashboard zoals in XD    
-   Toegewezen rapportages (pictogram met ‘badge’)    
-   Uitgevoerde rapportages openen (inzien, aanpassen)    
-   Kennisbase/documentatie    
-   Instellingen (of beheer)
-   Vanuit de lijst met toegewezen rapportages kan de inspecteur op locatie de  
rapportage van het betreffende pand openen en stap voor stap invullen

## Aanvulling:
Naast bovengenoemd technische ontwerp zijn ook de volgende onderdelen toegevoegd ter verduidelijking van de applicatie en om de applicatie werkzaam te houden: 
-   De mogelijkheid om een inspectie af te ronden en te verplaatsen naar "finishedReports" is toegevoegd.
-   De applicatie is in verband met dependencies in de online dienst van Ionic Frameworks geplaatst. Doordat anders, met een omweg via netlify/firebase, andere commands uitgevoerd moesten worden om de Ionic elementen werkzaam te krijgen binnen de online dienst.
- Aangezien het mij lijkt dat er meerdere mensen de applicatie en dus ook de inspecties kunnen inzien en aanpassen. Kunnen mensen zich niet aanmelden via de applicatie. De gegevens worden extern toegevoegd, waarna de bijbehorende inspecties gelijk gekoppeld kunnen worden.


## Beschrijving:
De applicatie voor deze opdracht is gemaakt met het framework VueJs in combinatie met de Ionic library. Vervolgens is de online service van IonicFrameworks gebruikt om een live-omgeving te creëren

## Security, usability, accessibility & style guides
Tijdens de uitwerking van de opdracht moet ik meegeven dat het lastig is je bezig te houden met de veiligheid, als de applicatie opzich al een hele kluif is om te onderzoeken. 
Daarbij wil ik meegeven dat de veiligheid nog niet geoptimaliseerd is, maar dat hier tijdens het project zeker rekening mee gehouden is.  Onder meer op gebied van: 
-   Non-trusted templates. Gebruikte templates zijn tijdens dit project ten aller tijd afkomstig uit de Ionic en Vue documentatie. 
- De plugin "Vetur" is gebruikt om templates te type-checken.
- Ook de Google-devtool voor Vue is ingezet om type en applicatie fouten te voorkomen.
- VueJs heeft zelf ook al haar algemene security instelling gedocumenteerd die ten aller tijde beschikbaar zijn voor gebruikers: https://vuejs.org/guide/best-practices/security.html#potential-dangers

Vervolgens is er voor de usability  aan de hand van de 10 heuristieken rekening gehouden met het volgende: 

|                |                         |                    |
|----------------|-------------------------------|----|
|Status visibility|Wordt gehandhaafd door de pagina's visueel te laden a.d.h.v een loading-icon en de weergave van waar de gebruiker zich bevindt via de url.                |
|System/real world|Aangezien de app gemaakt is voor makelaars wordt voor het in de app vak-jargon gebruikt.
|Control/freedom|De gebruiker kan door de tabs altijd terug naar het hoofdmenu of via de header terug naar het inlogscherm.
|Consistency|Voor soortgelijke handelingen worden in de app dezelfde benamingen gebruikt.         |
|Error prevention|Via de store is er altijd worden errors real-time bijgehouden.
|Recognition|Binnen de app worden handeling stap voor stap uitgevoerd waarbij handeling niet onthouden hoeven worden. Dit doet het systeem.
|Flexibility/efficiency|De pagina's binnen de app worden aangevuld als popup om fouten via de router te voorkomen en content sneller te laden.              |
|Aestetic/minimalist|De app toont de meest relevante informatie als eerst. Minder relevante informatie staat meer op de achtergrond. 
|Recognize/diagnose/recover|De gebruiker krijg nu nog een lap tekst met informatie over wat er fout ging. Dit bevat het probleem, maar ook veel irrelevante informatie. Het is nog niet duidelijk hoe dit geminimaliseerd kan worden.
|Help/docs|Dit wordt vaak weinig gebruikt, maar is toegevoegd aan de info-tab in de applicatie inclusief bereikbaarheid.

-   U schrijft een korte verantwoording over het toepassen – of nog niet hebben kunnen toepassen – van security, usability (a.d.h.v. de 10 heuristieken van Jacob Nielsen), accessibility en style guides/best practices van het betreffende framework binnen uw prototype en voegt dit toe aan uw markdown-document. Beschrijf hierin ook of uw applicatie wel of niet voldoet aan de WCAG 2.1-richtlijnen en wat er eventueel nog ontbreekt.

**Beste practises**
-   Gebruik altijd v-for samen met :key in Vue
- Gebruik altijd kebab Casing voor events
- De naam van een component moet altijd in PascalCase en in 2 woorden.
- Blijf npm packages updaten
- Gebruik passende data types voor alle variabelen
- Blijf consistent in het schrijven van code (@ === v-on, kies het een of het ander)
- Het gebruik van TypeScript maakt het oplossen van fouten in code/files makkelijker.
- Mix geen v-if's en v-for's
- Gebruik de store én mixins voor het globaal aanroepen van componenten en functies. Dit houdt ook de code schoon en overzichtelijk.
- Gebruik alleen basis javascript expliciet in een template.
- Gebruik zo min mogelijk third-party packages. Ze nemen vaak meer ruimte in dan uiteindelijk de bedoeling is. 
- "Audit-(fix)" dependencies regelmatig
- Gebruik captcha's. Dit heb ik niet gedaan omdat het inloggen onder meer een simulatie is.
 
**Style guide**
Voor de stijl van de applicatie is rekening gehouden met de stijl vanuit Real Estate Care. Hiervan is de branding te vinden in de assets van de applicatie *(Public/assets/iphone...).
Deze stijlementen zij gebruikt voor zowel de dark-theme als de light-theme.

**WCAG-richtlijnen**
Aangezien dit mijn eerste VueJs applicatie is, en er nog zoveel verbeterd kan worden, voldoe ik natuurlijk niet 100% aan de WCAG-richtlijnen. Waar de implementatie wel in te zien is, is het volgende: 
- Dark-light theme (voorkeur aan te passen)
- Lettergrootte (standaard uitvergroot)
- Kleurgebruik (veel harde tinten)
- Geluid nog niet (maar voor makelaars?)


## Niet volledig werkzame onderdelen:

 **- Dark theme:**
Is gekoppeld aan de gebruiker en wordt toegepast bij het inloggen.
Wordt nog niet in de database aangepast na een verandering door de gebruiker in de settings. Ik dacht dit te kunnen doen a.d.h.v een toggle, maar die geeft alleen true en false terug en niet "dark" of "light". Ik mis momenteel de correcte koppeling.
 **- Notificaties:**
Er zijn nog geen notificaties, dit is momenteel een alert.
 **- Redirect after upload:** 
De gebruiker wordt opnieuw verwezen naar het inlogscherm ná de upload van een nieuwe inspectie. Dit gebeurt ook na het veranderen van een inspectie. Er werd online Dit werkte echt niet. 
 **- Upload van strings naar db.json:** 
Bij het uploaden van een nieuwe inspectie worden er alleen strings verstuurd. 
(gedeeltelijk opgelost door ook de string: "false" te gebruiken als boolean)
Bij het veranderen van een inspectie via een input veld lukt de koppeling en verandering van een boolean wel.
 **- Zoekfunctie:** 
Er is gepoogd een zoekfunctie naast de filtering te gebruiken.
Deze blijkt in een for-loop bij het laden geplaatst te moeten worden. 
Hier is nog geen oplossing voor gevonden.
> **Note:** Omdat de sortering op alfabet is toegevoegd kon ik niet ook nog een andere gesorteerde array in de for-loop plaatsen. Daarvoor mis ik nog een stuk logica.
> 
**- Direct toevoegen van foto's**
Het direct toevoegen van foto's is nog niet toegevoegd door een mindere kennis in camera implementatie in een applicatie. Dit lijkt mij meer relevant om direct in de app te gebruiken, dan om hier acheraf foto's aan toe te voegen. Mocht ik dit wel in de applicatie geplaatst hebben zou dit hetzelfde gedaan zijn als alle andere informatie die wordt gegeven bij de melding van schade.
**- Cashing van de gegevens**
Bij de melding/aanpassing/verwijdering van schade worden de gegevens na een submit opgeslagen in de db.json. Dit wordt niet als cash gedaan. Echter bij het inloggen worden de gegevens van de gebruiker wél opgeslagen als local storage. Dit is niet de bedoeling als het gaat om explicite gebruikersgegevens, maar normaal gesproken hoort dit ook niet in de front-end opgeslagen te worden, maar via de backend in de database. De huidige keuze is puur met dummy materiaal uitgewerkt om de werking van de applicatie te kunnen inzien.
**- CRUD werkt niet in online dienst?**
Om de een of andere reden kan ik via de online dienst geen CRUDS uitvoeren via de front-end naar de db.json via de json-server. De aanpassingen worden gewoonweg niet meegenomen. Dit kan wel in mijn lokale omgeving.
 
