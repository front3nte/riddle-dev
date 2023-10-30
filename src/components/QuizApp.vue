<script setup lang="ts">
document.body.classList.remove('start')
import QuestionItem from './QuestionItem.vue'
import { useLevelStore, useQuizStore } from '../stores/quiz'

const quizStore = useQuizStore()
const levelStore = useLevelStore()

const firstQuestions = [
  {
    q: 'Was ist die erste Ziffer von Jasmins Durchwahl?',
    a: '8'
  },
  {
    q: 'Wann hat Antonio auf seiner Tastatur einen echten Bug 🐞 gefunden?',
    a: '15.12.2012'
  },
  {
    q: 'Wann hat Daniel davon berichtet, dass eine Theme-Erstellerin Hühner, Feuer und Lamas in die IDE zaubert?',
    a: '30.06.2021'
  },
  {
    q: 'Was ist der zweite **Begriff** in der zweiten <h3> in den Notizen vom Frontend Circle vom `${Dritte Antwort}`?',
    a: 'Task Runner'
  },
  {
    q: 'Wer steht auf Nummer `${Erste Antwort}` der Teilnehmer:innen des Frontend Circles vom `${Zweite Antwort}`?',
    a: 'Nadine Pusch'
  },
  {
    q: 'Wer hat einen Blog Post darüber geschrieben, dass ein bestimmter `${Fünfte Antwort}` bei Installation fehlschlägt?',
    a: 'André Petrakow'
  },
  {
    q: 'Welches Unicode-Zeichen ist in der UTF-8-codierung binär mit `01011110` codiert?',
    a: '^'
  },
  {
    q: 'Erster Buchstabe des zweiten Wortes von `${Vierte Antwort}`',
    a: 'R'
  },
  {
    q: 'Erster Buchstabe des zweiten Wortes von `${Sechste Antwort}`',
    a: 'P'
  },
  {
    q: 'const a = `${Dritte Antwort}`;<br> console.log(`${a.vorvorletztesZeichen}${a.vorletzteZeichen}`);<br><br> Was wird hier in der Konsole ausgegeben?',
    a: '02'
  },
  {
    q: 'Dritter Buchstabe von `${Fünfte Antwort}`', // Hier könnte man alternativ auch das @ nehmen
    a: 'd'
  },
  {
    q: 'Zweiter Buchstabe zweites Wort von `${Fünfte Antwort}`',
    a: 'u'
  }
]

const fantasyQuestions = [
  {
    q: 'Während eurer Reise durch das Reich, in dem Drachen den Himmel  durchziehen und Weise das Wissen der Welt hüten, werdet ihr mit einem uralten Zauberspruch konfrontiert, bekannt nur von den klügsten Magiern. Dieser Zauberspruch erlaubte es, einen Schatz gerecht unter den edlen Rittern aufzuteilen, und dabei genau jenes  Überbleibsel zu offenbaren, das keiner der Schatzsucher mehr erhalten konnte. Mit welchem Symbol wurde dieser magische  Schlüssel von den Gelehrten auf das Pergament der alten Schriften gezeichnet?',
    a: '%'
  },
  {
    q: 'Nachdem ihr das Rätsel des Zauberspruchs gelöst habt, führt euer Weg  euch zu den mächtigen Gilden und Zünften, die ihre Namen als Banner in  die Welt hinaus trugen. Der Name eines jeden solchen Ordens begann mit einem Zeichen, einem Buchstaben,  der wie ein Talisman ihre Identität und ihren Stolz schützte. Erzähle  mir, oh wackerer Reisender, welches mystische Zeichen dem Namen des Ordens voransteht, unter dessen Banner ihr dienst?',
    a: ']'
  },
  {
    q: 'Mit einem festen Entschluss in eurem Herzen und dem Wind in eurem Haar tretet ihr in diese wundersame Welt ein, bereit, eure Mission zu erfüllen und das Schicksal des Landes zu verändern. Euer Abenteuer hat gerade erst begonnen.Eure Entdeckungen führen euch zu den Alchemisten und Magiern, die das Schicksal der umliegenden Königreiche bestimmten, wo es ein heiliges Zeichen gibt, das die Kraft besitzt, Energien zu vereinen und getrennte Welten zu einem Ganzen zu  verbinden.<br /> Dieses Zeichen wurde von den Gelehrten verehrt, da es das  Potential besaß, das Wenige in das Viele zu verwandeln. Welches  geheimnisvolle Symbol trugen die Weisen auf ihren Roben, um die Kunst  des Zusammenführens und des Ergänzens zu symbolisieren?',
    a: '+'
  },
  {
    q: 'Mit den gesammelten Wissen reist ihr weiter und gelangt zu einem Punkt,  an dem Schatten und Licht in einem ewigen Tanz verschmelzen. Dort existierte einst ein Symbol, das Boten und Gelehrte  gleichermaßen verehrten. Es war das Zeichen, welches Welten verband,  Nachrichten durch die Winde trug und den Absender mit dem Empfänger  verknüpfte. In einer Zeit, in der Worte Macht hatten und Gedanken die  Realität formten, welches mystische Zeichen erlaubte es den Weisen,  Botschaften über Grenzen und Königreiche hinweg zu senden?',
    a: '@'
  },
  {
    q: 'Durch verschlungene Pfade führt euer Abenteuer euch zu einem altertümlichen Scriptorium. In der Dämmerung der Zeit, als Legenden geboren wurden, begebt ihr euch auf eine Reise tief in die Erinnerung eurer Seele. Euch umgeben flüsternde Schatten  und das leise Rascheln von Pergament. Eine geheimnisvolle Schriftrolle, geschrieben von einem vergessenen Orakel aus einem verborgenen  Königreich, zieht deine Aufmerksamkeit auf sich. Sie spricht von einer  magischen Matrix, einem Netz, das die vier Ecken der Welt verbindet und  in dem jedes Wesen sein eigenes leuchtendes Portal schaffen kann. Die  Worte sind komplex, und die Glyphen tanzen vor deinen Augen. Als ihr beschließt, euer eigenes Portal zu dieser magischen Matrix zu erschaffen, bereitet ihr eure Feder vor und betrachtet die Tinte, die aus den Tränen eines Drachen zu stammen scheint. Bevor ihr jedoch das erste Wort schreibt, gibt es ein entscheidendes Zeichen, das den Pfad  öffnet. Welches ist dieses Schlüsselsymbol, das das Tor zu dieser neuen  Dimension öffnet?',
    a: '<'
  },
  {
    q: 'Eure Reisen lassen euch nicht zur Ruhe kommen, und in der mystischen  Welt von Scriptaria macht ihr die Bekanntschaft der Kodexmagier. Ihr stolpert in einer uralten Bibliothek über ein rätselhaftes Grimoire, das von einem Magier aus dem Reich der Schatten verfasst wurde. In  diesem Buch werden Codes und Symbole beschrieben, die es ermöglichen,  die Essenz von Botschaften und Weissagungen zu bündeln und  hervorzuheben, sodass andere Wanderer und Sucher sie leichter finden  können. Mitten in einem verzauberten Lied, das die Macht beschreibt,  Worte aus den Tiefen der Äther zu ziehen und sie für alle sichtbar zu  machen, gibt es ein Schlüsselsymbol, das diese Magie kanalisiert.  Welches Zeichen, oft als Tor oder Anker verwendet, beschwört die Macht,  Worte und Gedanken aus dem endlosen Fluss der Erzählungen zu heben?',
    a: '#'
  },
  {
    q: 'Nachdem ihr die Geheimnisse von Scriptaria enträtselt habt, führt euer Weg euch in die unerforschten Ebenen von Eldoria, wo Drachen majestätisch am  Himmel kreisen und Elfenlieder durch die silbernen Wälder hallen. Ein Elf erzählt euch von einer Legende, die nur den mutigsten Abenteurern bekannt ist. Tief in  den Höhlen des Berges Morndrial, bewacht von Goblins und von Fallen durchzogen, liegt ein vergessener Schrein. An dessen Altar, so erzählen  es die Barden, ruht ein Artefakt von unschätzbarem Wert: Das Relikt der  Vereinigung. Es ist kein Edelstein, kein Gold, sondern ein Symbol, das  die Kraft besitzt, zwei Seelen, zwei Schicksale, zwei Geschichten  miteinander zu verknüpfen, als wären sie eins. Viele Magier und Paladine haben ihr Leben riskiert, um dieses Zeichen zu finden, denn es hält den Schlüssel zu einer Magie, die Welten miteinander verschmelzen kann. Abenteurer, welches Zeichen verbirgt sich hinter der Legende und wartet  darauf, von dir entdeckt zu werden?',
    a: '&'
  },
  {
    q: 'Der Abschied von Eldoria ist gekommen. Ihr konntet hier kraft Tanken, aber der Elf schickt euch weiter in die weit entfernten verzauberten Lande von Parenthia, wo Worte Macht besitzen und jedes Symbol eine verborgene Kraft birgt, begegnet ihr als renommierte Sprachmeister uralten Legenden und Mythen. Einer dieser Erzählungen, die in den Liedern der Barden widerhallen, berichtet von einem besonderen Zeichen, das den Beginn einer geheimen Botschaft oder eines mächtigen Zaubers markiert. <br/> Dieses Zeichen, so heißt es, ist wie das Tor zu einer verborgenen Kammer, das sich öffnet, um Schätze, Geheimnisse oder magische Formeln zu enthüllen. Es ist der erste Schritt, um in die Tiefen eines Rätsels einzutauchen, ein Einladungszeichen, das die Neugierigen und Wissbegierigen dazu auffordert, weiterzulesen und tiefer zu graben. In der Akademie von Parenthia, wo Sprachmeister wie ihr trainiert werden, ist dieses Symbol von größter Bedeutung, da es den Anfang einer jeden großen Entdeckung markiert. Welches geheimnisvolle Zeichen dient als Türöffner zu den verborgenen Geheimnissen von Parenthia?',
    a: '('
  },
  {
    q: 'Eure Vorräte neiden sich gen Ende, doch ihr seid euch Gewiss, dass ihr die letzten Aufgaben auf dieser beschwerlichen Reise gemeinsam meistern könnt. Ihr erblickt das schimmernde Tal von Apostrophon, wo Worte und Sätze wie Musik durch die Lüfte schweben, sind dir als bewanderter Geschichtenerzähler viele Geheimnisse bekannt. Die Zentauren, die dort leben, erzählen euch von einem feinen, schlanken Zeichen, das es ermöglicht, die Stimme eines anderen wiederzugeben, als ob sie deine eigene wäre.<br />Dieses zarte Symbol, sagen die Alten, hält die Macht, Flüstern aus der Vergangenheit festzuhalten und sie in der Gegenwart erklingen zu lassen. Es ist wie eine kleine Brücke zwischen der Welt der Realität und der Welt der Erinnerung, die es den Sprechenden ermöglicht, das Echo einer anderen Seele zu spüren. In den Hallen von Apostrophon wird dieses Zeichen von Dichtern und Schriftstellern gesucht, um die Worte derer wiederzugeben, die nicht mehr unter uns weilen oder die aus der Ferne sprechen. Welches flüchtige Zeichen trägt die Gabe, Stimmen aus der Ferne in die Nähe zu rufen?',
    a: "'"
  },
  {
    q: 'Zurück im Orden, dem ihr dient, erinnert ihr euch an eure Tage als Anführer der Zirkel von Vorderendmagiern, wo Ideen Gestalt annehmen und Meister ihr Handwerk verfeinern, bekannt für ihre herausragenden Fähigkeiten. Jeder dieser Zirkel, getrieben von seiner eigenen Vision und durch manche Schlacht getragen, erreichte einen Wendepunkt. Es wurde beschlossen, die Kräfte zu teilen und die Weisheit zu vervielfachen.<br />Wie ein Fluss, der sich teilt und neue Wege bahnt, verwandelten sich diese beiden Zirkel von Vorderendmagiern unter eurer Führung. Sie teilten ihr Wissen und spalteten sich, wodurch neue Funken der Magie im Orden entfacht wurden. Wo einst zwei Zirkel unter eurem Banner standen und das Bild des Ordens prägten, wie viele beeindruckende Zirkel von Vorderendmagiern sind nun durch diese zauberhafte Wandlung entstanden?',
    a: '4'
  },
  {
    q: 'In den schattigen Gefilden von Tridecalia, wo Zahlen über das Schicksal bestimmen und Mythen und Magie sich verflechten, wandert ihr als Zahlenweiser, stets auf der Suche nach der Essenz der Numerologie. Es gibt eine besondere Zahl, in deren Schatten viele Aberglauben und Legenden gewachsen sind.<br />In den Herzen vieler gilt sie als Botin des Unglücks, gefürchtet und gemieden, als Bringerin von Veränderungen und Umwälzungen. Aber ebenso wird sie in einigen Ecken von Tridecalia als Schlüssel zu alten Geheimnissen und verborgenen Wahrheiten verehrt. Diese Zahl steht zwischen den Welten der Einzelziffern und der Mehrziffern, balancierend auf der Grenze von Licht und Dunkelheit. Welches mysteriöse Numerikum, in Liedern sowohl gefürchtet als auch verehrt, trägt die Dualität des Glücks und des Unglücks in sich?',
    a: '13'
  },
  {
    q: 'Während eurer beschwerlichen Wanderung durch das sagenumwobene Land, durchquert von mächtigen Flüssen und gewaltigen Bergen, stolpert ihr über einen  verborgenen Eingang zu einer uralten Höhle. Eingeprägt über dem  steinernen Torbogen findet ihr eine Inschrift in einer fast vergessenen  Sprache. Die Legende besagt, dass diese Höhle das Herzstück der  Zahlenmagie beherbergt und nur jene, die ihre tiefsten Geheimnisse  kennen, dürfen eintreten.<br />Inmitten der Dunkelheit dieser Höhle, beleuchtet nur von der flackernden Fackel in eurer Hand, seht ihr ein großes Portal mit einer einzelnen Inschrift. Sie spricht von einer Zahl, die weder Anfang noch Ende kennt, die den Beginn aller Dinge markiert und dennoch das Fehlen aller Dinge repräsentiert. Es ist die essentielle Zahl, der Ursprung, von dem alles andere abstammt und zu dem alles zurückkehrt. Welche Zahl öffnet das Tor zur tiefsten Kammer dieser geheimnisvollen Höhle?',
    a: '0'
  }
]
</script>

<template>
  <div v-if="levelStore.level === 'fantasy-welcome'">
    <p>
      Super, ihr seid nicht zu stoppen! Nachdem ihr nun das WIM durchwühlt und in alten
      Mattermost-Chats gekramt habt, legen wir nun den Schleier der Fantasie über all die Technik
      und begeben uns ins Reich der Sagen, Rätsel und Mythen.
    </p>
    <p>
      In einem Zeitalter, in dem die Welt noch von ungezähmten Magien durchzogen war, beginnt eure
      Reise. Die Morgensonne wirft die ersten goldenen Strahlen über das Land, während ein kühler
      Wind durch die hohen Baumwipfel der uralten Wälder weht. Ein Hauch von Abenteuer liegt in der
      Luft.
    </p>
    <p>
      Ihr werft euch eure schweren Umhänge über, die mit Symbolen und Runen bestickt sind, die von
      euren vergangenen Abenteuern und Schlachten zeugen. Das Leder eurer Stiefel knirscht leise,
      während ihr eure Schritte auf den alten Pfad lenkt, der sich vor euch durch die Landschaft
      schlängelt. Ihr spürt das Gewicht eures Köchers auf dem Rücken, in dem eure sorgfältig
      gefertigten Pfeile ruhen, bereit für jedes drohende Unheil. An eurer Seite schwingt das
      vertraute Gefühl des Schwertgriffs, poliert und scharf, das Zeichen eines wahren Abenteurers.
    </p>
    <p>
      Vor euch breitet sich das sagenumwobene Land aus – Wälder, deren Dunkelheit von Geheimnissen
      und Magie durchzogen ist, Täler, in denen sich Flüsse wie silberne Bänder durch die Landschaft
      schlängeln, und Weiten, die von mystischen Kreaturen und unbekannten Gefahren bevölkert sind.
      Doch mit jedem Schritt, den ihr auf dieser Reise macht, fühlt ihr, dass ihr nicht alleine
      seid. Die Alten des Landes, die Geister und die Götter, sie alle beobachten euch, bereit, euch
      auf eurem Weg zu helfen oder euch herauszufordern.
    </p>
    <p>
      Mit einem festen Entschluss in eurem Herzen und dem Wind in eurem Haar tretet ihr in diese
      wundersame Welt ein, bereit, eure Mission zu erfüllen und das Schicksal des Landes zu
      verändern. Euer Abenteuer hat gerade erst begonnen.
    </p>
    <button class="riddle-start-button" @click="levelStore.increment()">Gute Reise!</button>
  </div>
  <div v-else-if="levelStore.level === 'basic-quiz'">
    <template v-for="(item, index) in firstQuestions" :key="`questionItem-${index}`">
      <QuestionItem
        v-if="quizStore.count == index"
        :index="index"
        :question="item.q"
        :answer="item.a"
        :questionCount="firstQuestions.length"
      />
    </template>
  </div>
  <div v-else-if="levelStore.level === 'fantasy-quiz'">
    
    <template v-for="(item, index) in fantasyQuestions" :key="`questionItem-${index}`">
      <QuestionItem
        v-if="quizStore.count == index"
        :index="index"
        :question="item.q"
        :answer="item.a"
        :questionCount="fantasyQuestions.length"
      />
    </template>
  </div>
  <div v-else-if="levelStore.level === 'final-riddle'">
    <p>
      Mit dem Wissen und den Erkenntnissen, die ihr während eurer epischen Reise durch das Land
      gesammelt habt, steht ihr nun vor einem monumentalen, von magischem Leuchten durchzogenen
      Portal. Die Legenden sprechen davon, dass dieses Tor den letzten Hinweis zu eurer heiligen
      Mission beherbergt, aber es kann nicht von jedermann geöffnet werden. Nur diejenigen, die die
      Geheimnisse des Landes entschlüsselt haben, können die Macht dieses Portals freisetzen.
    </p>
    <p>
      Vor euch findet ihr einen antiken Steinpfeiler, in den ein seltsames Pult mit mehreren
      Vertiefungen gemeißelt wurde. Jede dieser Vertiefungen scheint genau die Form eines der
      Symbole und Zahlen zu haben, die ihr während eurer Abenteuer entdeckt habt.
    </p>
    <p>
      Flüsternd durch die Luft hallen die Worte einer alten Sage: "Die Antworten, die ihr sucht,
      sind der Schlüssel, den ihr besitzt. Fügt sie zusammen, vereint ihr Wissen und setzt sie in
      die richtige Reihenfolge, um die magische Sequenz zu vervollständigen."
    </p>
    <p>
      Während ihr die gesammelten Symbole und Zahlen in die Vertiefungen des Pults setzt, spürt ihr,
      wie die Energie des Portals reagiert, jedes Mal stärker werdend, wenn ein weiteres Stück des
      Puzzles an seinen Platz gesetzt wird.
    </p>
    <p>
      Sobald alles an seinem Platz ist, sollt ihr die uralten Worte sprechen: "Durch das Wissen der
      Vergangenheit, öffne dich für unsere Mission!" Wenn ihr richtig liegt, wird sich das Portal
      öffnen und der letzte Hinweis wird euch enthüllt. Wenn nicht, muss das Rätsel von Neuem
      begonnen werden. Seid wachsam, denn eure Mission ist fast erfüllt. Es liegt nun an euch, die
      Antworten zu kombinieren und das Portal zu öffnen.
    </p>
    <button class="riddle-start-button final" @click="levelStore.increment()">Tretet näher</button>
  </div>
</template>

<style lang="scss">
.riddle-start-button {
  padding: 15px 20px;
  font-size: 22px;
  background: transparent;
  border: 2px solid darkslategrey;
  border-radius: 4px;
  color: white;
  min-width: 200px;
  float: right;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  display: flex;
  margin: auto;
  align-items: baseline;
  justify-content: center;

  &.final {
    float: none;
  }

  &:hover {
    background-color: darkslategrey;
  }

  &:active {
    color: darkslategrey;
    background-color: white;
  }
}
</style>
