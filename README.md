[![Stories in Ready](http://badge.waffle.io/qq99/echoplexus.png)](http://waffle.io/qq99/echoplexus)  
[echoplexus](https://echoplex.us) (v0.2.1)
==================

Testez! [chat.tetalab.org](https://chat.tetalab.org "https://chat.tetalab.org")

Rejoignez la salle de discussion des dev @ [chat.echoplex.us/echodev](https://chat.echoplex.us/echodev "Echoplexus Developer Chat")

En résumé
---------

Echoplexus est une plateforme de chat anonyme, basée sur le web, ressemblant à IRC qui fait de son mieux pour respecter votre privacy. Il vous permet de créer des salles de discussion publiques ou privées. Vous pouvez sécuriser un pseudonyme à une anonymisation liée avec `/msg nickserv register ____`. Vous pouvez coder et dessiner à plusieurs en temps réel. **Depuis la version v0.2.0, vous pouvez passer des appels téléphoniques et vidéos Peer2Peer avec les personnes sur votre salon de discussion.**

Prochains Objectifs
-------------------

- Transfert de fichiers P2P par WebRTC
- Transfert de fichiers avec dépot sur serveur (quand WebRTC n'est pas disponible, pour plus de persistance sur l'historique des fichiers)
- Chat Peer2Peer, lancé par Echoplexus (pour faciliter les communications off-the-record)
- Cryptage Point-à-Point
- Une plus grande séléction de language pour la collaboration REPL en temps réel
- Un contrôle d'accès utilisateur
- ...

Vous pouvez consulter les prochaines [fonctionnalités](https://github.com/qq99/echoplexus/issues?labels=enhancement&milestone=&page=1&state=open "Planned Enhancements")

Qu'est-ce que c'est?
--------------------

Echoplexus est conçu pour être modulaire. Il commence par une simple application de chat et s'est agrandit pour inclure beaucoup de choses différentes.

Echoplexus inclus actuellement 4 modules: Chat, Code, Draw et Call. De fait, vous pouvez faire tourner toute combinaison (ou juste 1) de ces modules suivant vos besoins.

Pourquoi aurai-je besoin de ça?
-------------------------------

Echoplexus fonctionne bien pour les groupes de personnes qui veulent un système de chat riche, sécurisé et vraiment respectueux de la privacy. Comme il est open-source et facile a installer, vous pouvez avoir votre propre infrastructure de communication sans avoir besoin d'un service basé sur le cloud. Il y a une tranquilité d'esprit là-dedans. Nous trouvons aussi que c'est une bonne solutions pour les personnes qui prennent soin de leurs données (et de savoir qui peut ou ne peut pas regarder ces données).

Beaucoup de groupes utilisent des plateformes de communications payantes basées sur le web. Il y a beaucoup de solutions de ce type, et nous nous en sommes inspirés pour notre développement. Echoplexus fait le lien entre ces plateformes et les logiciels open-source.

D'autres utilisent IRC. Cependant, cela peut prendre du temps de monter son propre serveur, beaucoup de personnes ne veulent pas configurer leur client IRC, et ils ne veulent certainement pas configurer les serveurs et les ports de ce client. Au final, la plupart des utilisateurs sont bloqués dans une interface texte (sans médias). De plus, votre IP est aussi visible par les autres à moins que vous ayez pris des mesures pour la cacher.

Les autres services (comme Google Talk / Hangouts) sont OK, mais par défaut pour des communication de personne à personne, dans des clients propiétaires, et basé sur du cloud.

Quasiment toutes les alternatives vous demanderont de spécifier un identifiant avant de commencer à discuter. Pire, certaines vous demanderont de vous authentifier avec votre adresse email. J'ai toujours pensé que la plus grosse barrière d'entrée a été de demander aux utilisateurs de faire quelque chose qu'ils ne voulaient pas -- il a surement pleins d'autres choses à faire! L'anonymat peut conduire à de grandes conversations.

Chat
----

La partie la plus importante d'Echoplexus est le support de l'anonymat. Les utilisateur détestent les formulaires d'enregistrement. L'anonymat permet le liberté d'expression. L'anonymat lié est aussi possible.

Echoplexus tentera d'afficher toutes les images directement dans la barre de Media sur le côté droit. De même, il tentera de parser les URL YouTube afin de les afficher. Quand le serveur rencontre une URL, il prend un screenshot de la page en question et essaye de fournir le titre de cette page à l'utilisateur. Afin de protéger votre privacy, l'affichage de ces images est désactivé par défaut.

Vous pouvez éditer tous les messages que vous avez envoyé dans les 2 dernières heures, tant que vous n'avez pas perdu votre connexion. Vous pouvez éditer après une déconnexion si vous étiez identifiés quand vous avez envoyé le message. Vous pouvez faire cela en double-cliquant sur le message, ou en cliquant sur l'icone de crayon qui apparait quand vous placez votre souris sur le message.

Quand vous rejoignez un salon de discussion, l'historique des conversations récentes que vous auriez pu rater sera automatiquement mis à jour. At tout moment, vous pouvez récupérer l'historique des conversations pour ce salon de discussion. Les messages envoyés par les utilisateurs identifiés sont reconnaissable par un icone de cadenas vert, cela permettant de protéger votre identité à travers cet historique.

Commandes supportées:
- `/join [nom_du_salon]`: Rejoindre un salon de discussion
- `/leave`: Quitter le salon de discussion en cours
- `/topic [description du sujet]`: Changer le sujet de conversation du salon de discussion (le message restera visible en haut du salon tout le temps)
- `/broadcast [message]`: Envoyer un message sur tous les salons auxquel vous êtes connectés.  Alias: `/bc`
- `/nick [votre_pseudo]`: Changer de pseudonyme (Anonymous par défaut), celui-ci est enregistré dans un cookie distinct pour chaque salon de discussion
- `/register [mot_de_passe]`: Activer l'anonymat lié; les gens qui vous parlaient hier peuvetn s'assurer que vous êtes la même personne aujourd'hui (et non quelqu'un qui a pris votre pseudonyme) en vous enregistrant et en vous identifiant.
- `/identify [mot_de_passe]`: Prendre possesion de votre pseudonyme, et afficher le cadenas vert à côté de celui-ci dans la liste des utilisateurs (indique aux autres personnes que vous êtes identifié).
- `/private [mot_de_passe_du_salon]`: Rendre le salon e discussion privé. Seuls ceux avec le mot de passe peuvent y participer.
- `/password [mot_de_passe_du_salon]`: Fournir le mot de passe d'un salon de discussion privé après l'avoir rejoint. Les essais incorrectes seront signalés à tous les utilisateurs présents dans ce salon.
- `/public`: Faire d'un salon privé un salon publique.
- `/whisper [pseudonyme] [message privé]`: Envoyer un message privé qui ne sera visible que par la personne indiqué par le pseudonyme.  Alias: `/w`, `/tell`, `/t`, `/pm`.  *Pro-tip:* Utiliser "ctrl+r" pour répondre rapidement à la dernière personne qui vous a envoyé un message privé.
- `/pull [N]`: Synchoniser les N derniers messages que vous avez raté quand vous n'étiez pas connecté au salon de discussion. Le maximum est actuellement fixé à 100 afin de garder un UI répondant jusqu'à qu'une nouvelle méthode d'affichage soit trouvée.
- `[pseudonyme partiel]+<TABKEY>`: Autocomplétion (basée sur L-Distance) du pseudonyme de quelqu'un dans le salon de discussion.
- `@[pseudonyme]`: Avoir l'attention de l'utilisateur en question.
- `/color [#FFFFFF]`: Fournir un code de 6 chiffres hexadécimal avec ou sans le `#` afin de changerla couleur de votre pseudonyme.
- `/edit #[numéro] [nouveau message]`: Changer le contenu d'un message spécifique. Cela est utile pour corriger les fautes d'orthographe ou pour vous auto-censurer. Vous pouvez aussi double-clicker sur un message pour l'éditer en ligne, pressez Entrée pour confirmer, Esc ou cliquez ailleurs pour annuler.
- `>>[integer]`: Citer un message spécifique. Cliquez sur l'icone de Réponse sur un message pour indiquer automatiquement cette commande.

**Note:** L'enregistrement d'un pseudonyme est différencié sur chaque salon de discussion afin d'augmenter la possibilité d'utilisation de pseudonyme pour tous les utilisateurs. Donc, vous devrez enregistrer votre pseudonyme à chaque fois que vous rejoignez un nouveau salon.

Code
----

Actuellement, seule l'édition collaborative et intéractive de HTML et Javascript est supportée. Une `iframe` sandbox est utilisée pour protéger le contenu du navigateur, mais pour être complétement sûr, aucun code n'est lancé sans votre consentement. Une fonction de `LiveReload` vous permet de relancer le code quand vous, ou quelqu'un d'autre, l'édite. Un bouton `Refresh` efface et remet à jour l'état de l'`iframe`.

L'`iframe` a accès au librairies `jQuery` et `underscore.js` pour aider l'utilisateur. Plus de librairies pourraient être inclues prochainement.

Draw
----

Les capacités de Draw sont très basiques, assez pour faciliter l'échange d'un tableau blanc persistant avec les personnes avec qui vous discutez. Je ne pense pas qu'il y ait un besoin de complétement ré-inventer la roue (et finir par ré-implenter un nouveau Photoshop/Illustrator ici).

Call
----

Passez des appels audio et vidéo Peer2Peer avec toutes les personnes présentes dans le même salon de discussion que vous, en utilisant WebRTC. Pour faire cela, vous devrez probablement utiliser Chrome Canary/Beta ou Firefox Aurora/Beta, qui à l'écriture de ce document, inclus le support expérimental WebRTC.

Securité
--------

**Echoplexus n'est pas complétement sécurisé, mais on y arrive**

Votre enregistrement, identification, et les mots de passe des salons privés sont d'abord *salted* avec un random de 256 bytes en utilisant `crypto.randomBytes` de node. Ensuite, ils sont passés dans 4096 itérations de `crypto.pbkdf` avec une clé de 256 bytes avant d'être stockés dans Redis. Les mots de passes de salons privés sont traités de la même façon. Dans votre installation, ces mesures peuvent être considérées comme inutiles si vous n'utilisez pas HTTPS.

Nous apprécions grandement tout feedback sur la sécurité d'Echoplexus. Restez assuré que ce projet considère sa sécurité comme un enjeu très sérieux. **Actullement, les logs de discussions d'un salon privé ne sont pas encryptés!**

Installation
------------

Voir [INSTALL.md](https://github.com/qq99/echoplexus/blob/master/INSTALL.md).

License:
-------
GPLv3 and MIT
