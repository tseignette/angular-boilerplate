(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{UFnY:function(e,b,a){"use strict";a.r(b),a.d(b,"PublicModule",(function(){return ie}));var c,o,i,l,t,d,n,s,r,f,T,E,_,G,$,u,A,C,h,O,p,S,L,F,g,D,m,z,R,I,J,w,y,v,K,N,j,k,x,P,M,B,X,Y,H,U,W,q,Q,V,Z,ee=a("ofXK"),be=a("tyNb"),ae=a("fXoL");c="" + "\ufffd#3\ufffd" + "Go to the English version" + "\ufffd/#3\ufffd" + "",o="Boilerplate Angular",i="Boilerplate Angular 10 avec " + "\ufffd#8\ufffd" + "Spectre.css" + "\ufffd/#8\ufffd" + ", l'i18n, le pr\xE9-rendu statique et des ressources courantes.",l="D\xE9marrage",t="" + "\ufffd#13\ufffd" + "npm install" + "\ufffd/#13\ufffd" + " est \xE9videmment un bon d\xE9but. Vous pouvez ensuite lancer :",d="" + "\ufffd#17\ufffd" + "npm start" + "\ufffd/#17\ufffd" + " pour lancer le projet en local sur " + "\ufffd#18\ufffd" + "http://localhost:4200" + "\ufffd/#18\ufffd" + " (accessible sur le r\xE9seau local)",n="" + "\ufffd#21\ufffd" + "npm run start:fr" + "\ufffd/#21\ufffd" + " fait la m\xEAme chose en utilisant la localisation fran\xE7aise",s="" + "\ufffd#24\ufffd" + "npm lint" + "\ufffd/#24\ufffd" + " pour linter (la configuration par d\xE9faut n'a pas \xE9t\xE9 modifi\xE9e)",r="" + "[\ufffd#27\ufffd|\ufffd#28\ufffd]" + "npm run extract" + "[\ufffd/#27\ufffd|\ufffd/#28\ufffd]" + " pour extraire le fichier de la langue source dans " + "[\ufffd#27\ufffd|\ufffd#28\ufffd]" + "src/locale" + "[\ufffd/#27\ufffd|\ufffd/#28\ufffd]" + "",r=ae.Kb(r),f="" + "[\ufffd#31\ufffd|\ufffd#32\ufffd]" + "npm run build" + "[\ufffd/#31\ufffd|\ufffd/#32\ufffd]" + " pour g\xE9n\xE9rer la version de production, les fichiers sont g\xE9n\xE9r\xE9s dans " + "[\ufffd#31\ufffd|\ufffd#32\ufffd]" + "dist/angular-boilerplate/browser" + "[\ufffd/#31\ufffd|\ufffd/#32\ufffd]" + "",f=ae.Kb(f),T="" + "[\ufffd#35\ufffd|\ufffd#36\ufffd|\ufffd#37\ufffd]" + "npm run prerender" + "[\ufffd/#35\ufffd|\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + " fait la m\xEAme chose mais il pr\xE9-rend aussi les routes d\xE9finies dans la configuration " + "[\ufffd#35\ufffd|\ufffd#36\ufffd|\ufffd#37\ufffd]" + "prerender" + "[\ufffd/#35\ufffd|\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + " dans " + "[\ufffd#35\ufffd|\ufffd#36\ufffd|\ufffd#37\ufffd]" + "angular.json" + "[\ufffd/#35\ufffd|\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + "",T=ae.Kb(T),E="Fonctionnalit\xE9s",_="Style",G="" + "\ufffd#44\ufffd" + "Spectre.css" + "[\ufffd/#44\ufffd|\ufffd/#45\ufffd]" + ", un framework CSS l\xE9ger, est inclus avec sa collection d'ic\xF4nes en CSS pur " + "\ufffd#45\ufffd" + "Icons.css" + "[\ufffd/#44\ufffd|\ufffd/#45\ufffd]" + ".",G=ae.Kb(G),$="i18n",u="L'i18n est r\xE9alis\xE9e avec le paquet natif. Elle est actuellement configur\xE9e pour \xEAtre en Anglais dans le code source et pour avoir une traduction en Fran\xE7ais. La configuration exacte est d\xE9taill\xE9e plus bas.",A="Ressources courantes",C="Directives",h="" + "\ufffd#57\ufffd" + "AutofocusDirective" + "\ufffd/#57\ufffd" + ": fait un focus dynamique sur un \xE9l\xE9ment",O="Pipes",p="" + "\ufffd#63\ufffd" + "ConcatPipe" + "\ufffd/#63\ufffd" + "",S="" + "\ufffd#66\ufffd" + "ForObjectPipe" + "\ufffd/#66\ufffd" + ": it\xE8re \xE0 travers les cl\xE9s d'un objet",L="" + "\ufffd#69\ufffd" + "JoinPipe" + "\ufffd/#69\ufffd" + "",F="" + "\ufffd#72\ufffd" + "LastElementPipe" + "\ufffd/#72\ufffd" + ": retourne le dernier \xE9l\xE9ment d'un tableau",g="" + "\ufffd#75\ufffd" + "SplitPipe" + "\ufffd/#75\ufffd" + "",D="" + "\ufffd#78\ufffd" + "ToFixedPipe" + "\ufffd/#78\ufffd" + "",m="Structure",z="@core",R="" + "\ufffd#85\ufffd" + "CoreModule" + "\ufffd/#85\ufffd" + " est cens\xE9 contenir les services globaux et les mod\xE8les. Il y a plusieurs autres fichiers utiles :",I="" + "[\ufffd#89\ufffd|\ufffd#90\ufffd]" + "core.constants.ts" + "[\ufffd/#89\ufffd|\ufffd/#90\ufffd]" + " pour stocker les constantes de l'application (\xE0 ne pas confondre avec\n      " + "[\ufffd#89\ufffd|\ufffd#90\ufffd]" + "environment.ts" + "[\ufffd/#89\ufffd|\ufffd/#90\ufffd]" + ")",I=ae.Kb(I),J="" + "\ufffd#93\ufffd" + "core.utils.ts" + "\ufffd/#93\ufffd" + " pour stocker les fonctions simples que vous voulez pouvoir utiliser partout",w="@theme",y="" + "[\ufffd#98\ufffd|\ufffd#99\ufffd]" + "ThemeModule" + "[\ufffd/#98\ufffd|\ufffd/#99\ufffd]" + " est cens\xE9 contenir les ressources globales qui peuvent \xEAtre utilis\xE9es dans les templates (composants, directives, pipes, etc.). vous pouvez aussi y trouver un dossier nomm\xE9 " + "[\ufffd#98\ufffd|\ufffd#99\ufffd]" + "styles" + "[\ufffd/#98\ufffd|\ufffd/#99\ufffd]" + " contenant les fichiers suivants :",y=ae.Kb(y),v="" + "\ufffd#103\ufffd" + "custom-spectre.css.scss" + "\ufffd/#103\ufffd" + " importe et configure Spectre.css",K="" + "\ufffd#106\ufffd" + "main.scss" + "\ufffd/#106\ufffd" + " d\xE9finit les styles globaux",N="" + "\ufffd#109\ufffd" + "variables.scss" + "\ufffd/#109\ufffd" + " stocke les variables SCSS",j="@modules",k="Ceci est cens\xE9 contenir les modules qui sont susceptibles d'\xEAtre import\xE9s \xE0 divers endroits de l'application.",x="Configuration",P="Le projet a \xE9t\xE9 initialis\xE9 avec le " + "\ufffd#118\ufffd" + "CLI Angular" + "\ufffd/#118\ufffd" + " puis modifi\xE9.",M="D\xE9bogage",B="" + "\ufffd#123\ufffd" + ".vscode/launch.json" + "\ufffd/#123\ufffd" + " permet d'attacher le d\xE9bogueur \xE0 " + "\ufffd#124\ufffd" + "Chrome" + "\ufffd/#124\ufffd" + ".",X="i18n",Y="L'i18n a \xE9t\xE9 configur\xE9e de cette mani\xE8re :",H="le code source est en Anglais et il y a une traduction en Fran\xE7ais",U="les fichiers de langue sont stock\xE9s dans " + "\ufffd#134\ufffd" + "src/locale" + "\ufffd/#134\ufffd" + "",W="la commande de g\xE9n\xE9ration g\xE9n\xE8re toutes les localisations configur\xE9es",q="le HREF de base est vide pour la langue du code source et d\xE9finit comme le code de la langue pour les traductions",Q="une traduction manquante lance une erreur et arr\xEAte la g\xE9n\xE9ration",V="Routing",Z="Les routes inexistantes sont redirig\xE9es vers l'accueil et la restauration de la position du d\xE9filement est activ\xE9e.";const ce=[{path:"",component:(()=>{class e{constructor(e){this.locale=e,this.isEnglish=this.locale.startsWith("en")}}return e.\u0275fac=function(b){return new(b||e)(ae.Db(ae.u))},e.\u0275cmp=ae.xb({type:e,selectors:[["app-public"]],decls:145,vars:1,consts:[[1,"container","grid-lg","my-2"],[3,"href"],["id","angular-boilerplate",1,"text-center"],[1,"text-center"],["href","https://picturepan2.github.io/spectre"],["id","getting-started"],["href",""],["id","features"],["id","styling"],["href","https://picturepan2.github.io/icons.css"],["id","i18n"],["id","common-resources"],["id","directives"],["id","pipes"],["id","structure"],["id","-core"],["id","-theme"],["id","-modules"],["id","configuration"],["id","debugging"],["id","routing"]],template:function(e,b){1&e&&(ae.Gb(0,"div",0),ae.Gb(1,"p"),ae.Lb(2,c),ae.Eb(3,"a",1),ae.Jb(),ae.Fb(),ae.Gb(4,"h1",2),ae.Ib(5,o),ae.Fb(),ae.Gb(6,"p",3),ae.Lb(7,i),ae.Eb(8,"a",4),ae.Jb(),ae.Fb(),ae.Gb(9,"h2",5),ae.Ib(10,l),ae.Fb(),ae.Gb(11,"p"),ae.Lb(12,t),ae.Eb(13,"code"),ae.Jb(),ae.Fb(),ae.Gb(14,"ul"),ae.Gb(15,"li"),ae.Lb(16,d),ae.Eb(17,"code"),ae.Eb(18,"a",6),ae.Jb(),ae.Fb(),ae.Gb(19,"li"),ae.Lb(20,n),ae.Eb(21,"code"),ae.Jb(),ae.Fb(),ae.Gb(22,"li"),ae.Lb(23,s),ae.Eb(24,"code"),ae.Jb(),ae.Fb(),ae.Gb(25,"li"),ae.Lb(26,r),ae.Eb(27,"code"),ae.Eb(28,"code"),ae.Jb(),ae.Fb(),ae.Gb(29,"li"),ae.Lb(30,f),ae.Eb(31,"code"),ae.Eb(32,"code"),ae.Jb(),ae.Fb(),ae.Gb(33,"li"),ae.Lb(34,T),ae.Eb(35,"code"),ae.Eb(36,"code"),ae.Eb(37,"code"),ae.Jb(),ae.Fb(),ae.Fb(),ae.Gb(38,"h2",7),ae.Ib(39,E),ae.Fb(),ae.Gb(40,"h3",8),ae.Ib(41,_),ae.Fb(),ae.Gb(42,"p"),ae.Lb(43,G),ae.Eb(44,"a",4),ae.Eb(45,"a",9),ae.Jb(),ae.Fb(),ae.Gb(46,"h3",10),ae.Ib(47,$),ae.Fb(),ae.Gb(48,"p"),ae.Ib(49,u),ae.Fb(),ae.Gb(50,"h3",11),ae.Ib(51,A),ae.Fb(),ae.Gb(52,"h4",12),ae.Ib(53,C),ae.Fb(),ae.Gb(54,"ul"),ae.Gb(55,"li"),ae.Lb(56,h),ae.Eb(57,"code"),ae.Jb(),ae.Fb(),ae.Fb(),ae.Gb(58,"h4",13),ae.Ib(59,O),ae.Fb(),ae.Gb(60,"ul"),ae.Gb(61,"li"),ae.Lb(62,p),ae.Eb(63,"code"),ae.Jb(),ae.Fb(),ae.Gb(64,"li"),ae.Lb(65,S),ae.Eb(66,"code"),ae.Jb(),ae.Fb(),ae.Gb(67,"li"),ae.Lb(68,L),ae.Eb(69,"code"),ae.Jb(),ae.Fb(),ae.Gb(70,"li"),ae.Lb(71,F),ae.Eb(72,"code"),ae.Jb(),ae.Fb(),ae.Gb(73,"li"),ae.Lb(74,g),ae.Eb(75,"code"),ae.Jb(),ae.Fb(),ae.Gb(76,"li"),ae.Lb(77,D),ae.Eb(78,"code"),ae.Jb(),ae.Fb(),ae.Fb(),ae.Gb(79,"h2",14),ae.Ib(80,m),ae.Fb(),ae.Gb(81,"h3",15),ae.Ib(82,z),ae.Fb(),ae.Gb(83,"p"),ae.Lb(84,R),ae.Eb(85,"code"),ae.Jb(),ae.Fb(),ae.Gb(86,"ul"),ae.Gb(87,"li"),ae.Lb(88,I),ae.Eb(89,"code"),ae.Eb(90,"code"),ae.Jb(),ae.Fb(),ae.Gb(91,"li"),ae.Lb(92,J),ae.Eb(93,"code"),ae.Jb(),ae.Fb(),ae.Fb(),ae.Gb(94,"h3",16),ae.Ib(95,w),ae.Fb(),ae.Gb(96,"p"),ae.Lb(97,y),ae.Eb(98,"code"),ae.Eb(99,"code"),ae.Jb(),ae.Fb(),ae.Gb(100,"ul"),ae.Gb(101,"li"),ae.Lb(102,v),ae.Eb(103,"code"),ae.Jb(),ae.Fb(),ae.Gb(104,"li"),ae.Lb(105,K),ae.Eb(106,"code"),ae.Jb(),ae.Fb(),ae.Gb(107,"li"),ae.Lb(108,N),ae.Eb(109,"code"),ae.Jb(),ae.Fb(),ae.Fb(),ae.Gb(110,"h3",17),ae.Ib(111,j),ae.Fb(),ae.Gb(112,"p"),ae.Ib(113,k),ae.Fb(),ae.Gb(114,"h2",18),ae.Ib(115,x),ae.Fb(),ae.Gb(116,"p"),ae.Lb(117,P),ae.Eb(118,"strong"),ae.Jb(),ae.Fb(),ae.Gb(119,"h3",19),ae.Ib(120,M),ae.Fb(),ae.Gb(121,"p"),ae.Lb(122,B),ae.Eb(123,"code"),ae.Eb(124,"strong"),ae.Jb(),ae.Fb(),ae.Gb(125,"h3",10),ae.Ib(126,X),ae.Fb(),ae.Gb(127,"p"),ae.Ib(128,Y),ae.Fb(),ae.Gb(129,"ul"),ae.Gb(130,"li"),ae.Ib(131,H),ae.Fb(),ae.Gb(132,"li"),ae.Lb(133,U),ae.Eb(134,"code"),ae.Jb(),ae.Fb(),ae.Gb(135,"li"),ae.Ib(136,W),ae.Fb(),ae.Gb(137,"li"),ae.Ib(138,q),ae.Fb(),ae.Gb(139,"li"),ae.Ib(140,Q),ae.Fb(),ae.Fb(),ae.Gb(141,"h3",20),ae.Ib(142,V),ae.Fb(),ae.Gb(143,"p"),ae.Ib(144,Z),ae.Fb(),ae.Fb()),2&e&&(ae.ub(3),ae.Rb("href",b.isEnglish?"fr":"../",ae.Tb))},styles:[""]}),e})()}];let oe=(()=>{class e{}return e.\u0275mod=ae.Bb({type:e}),e.\u0275inj=ae.Ab({factory:function(b){return new(b||e)},imports:[[be.a.forChild(ce)],be.a]}),e})(),ie=(()=>{class e{}return e.\u0275mod=ae.Bb({type:e}),e.\u0275inj=ae.Ab({factory:function(b){return new(b||e)},imports:[[ee.b,oe]]}),e})()}}]);