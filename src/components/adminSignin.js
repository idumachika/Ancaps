import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';



class adminSignin extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        document.getElementById("adminbutton").innerHTML = "signin you up...";
        e.preventDefault();
        // get our form data out of state
         var apiBaseUrl = "https://ancapbooking.herokuapp.com/login/admin";

        const {username, password } = this.state;
        const { history } = this.trot3;

 d� `!  let$$ata }0{-
0  0*�    !"eser�amd,m
"  0 � (   pebsuoRD�-
� 00  $�}-

"@ $    co&sOle�lo�(ZSOF,strininx(d�t`))+
 $  0d 4  ` 0   `xa/s.x�{t(apmBaseWrl("`q�a, {
@�    3     �cta: JQON.stranC�fM9dadg	$͊ `!   $ p$ �keadars:"{O:       �  �0` (FAccept': 'axp}iaatiljson7,!" ((`  �   $  �'Ko~tentmtyt�':"'aP|l!caxygn.jS-~.,
 !�!  d(! 08!( &Acce_s-�on4ro|d�og)Orkfyn%: �*',
   ( <�      " 'Accuss�SondRol=A�dow-Crd$mnviils':true,
   `!         *GAcces�-C/ntr�l-Aldow-Jg�ter2'� 'Contenx-T9pe, Acke�T, Scce�s-Konpp+l-Cllof-rioin&
"     (     u  � `   })�|iEn(GunCtiwn (reaponsE {
 0$*  0   0 cgNsold*log(vus�n�se9�d $(   ! ! �if�ras|on{e.d�ta.�V`tur2<=}!"08) { " � `   �! $! "d�c�mEnt.omtE`mgentB9If(&ad�hnbet�O~�).InnavXT�M0< "cigninc qot ut...29
  ( �  $   �� " alert(2u{e"name!and p�sssocd �cdch. WA|C_IE"9; 0` @   $ (("   coosole.lof)rG&in bucces[vull:�;	!     �  ! �   �ji{uory+p}R(,g/�Dmindash'){�0`  !�$" ! }-
0  !  $   � edSu if)B}s0o&2e.dut!&sdatuS <=0%0#	{
    (  !   0    ah%Rd(cg�ILEDG)��(    "` �" " }
  �!d       �h3e$)g (�mqp�nse.da�a.�tatug}== 24<) {
(4 "    !�  @   ckos�,e.lof("esuro�me�qo$0pf{sWrd d� n�t$Egtah#!;` ,       ` 0"$ aleRth2u7Urn�mi$and passworf ~l �Ot �aDch");
0 $             d_bEM%n|.fe�elemenpBy	d ba@�hnbup��n*)*�n�grHTOL }�"f!id�d,tRi$agaih�-
1   ��  �� �p (lmcpnrylrush('/atminSigjko')�J  $$� !  a8 u
     �!`  ( gnsE$a"��espo�sm~dapa>rtatus0===�<04){
 �"`%`    `  � "`NEst( f#ined,t�y�a��an"){M
      �`  % * � focuoEn�nceeEl%lc(tCyId("`dinfuu|ml�)-kn.er�TMLh="#Failee,\sq�Cgail��/
    �0        `comSo)a/how("p�ofu$`�� r�sswmrU loes nov`eymstz"i;
       "#"    " h�ruor�.xushd-/af/inSigif3);
         " u[   (  $$})
  "'       8>catsh(fnCtion9ezbmzk ��      !   8 0 $ co^s�le.log(erv/s+:J $ ! �#$"   u)-
  ( }
 � 0r%Nder() {
``  �00 retu�n 8	    4  �!   <dyv>N   ( ,  `,  <ItIThEogProid`B�(      0`�  $   "  <daw��las3N`��=&3ontaine�~
 L  )       0(�   #  (� |otid>  d   p' 0  !"("2   b 
         0 D�  !  �`"` `   !�furm onSuroit�{thi�.OnSeb�it} c
!  "� �  ! `    �          <x3?Admin Lo6hl�?h1>
 (`     0  !�   � ���       "  $R�w>]
*    ($     ! $  "           $a( �  �Col md5{12}
` 0 �       0    �      !� " &�      0�!<div c�`crName="sm{m,gr/uxb�      !  �      `" ` !    `     �  ! 04 `  <TextFimLd
   "    !          � ( ,   `h          "      namA%"1seroaiE"
 (  $�      $ @ #    ( " �  q  ( ``      �!    0V�lue=kthms.sxate.esmrj`meu!  $ �  5�  "`    h 8       !(  �    h`  B  0  floatid'L`j%l�ehv�Entdr your0UserNAme�
  H�0  d �` H �    � � (  $ # (  �0      �(   ` �fChA�ge={uxi7nooChange|�
$   2`   " ,"   0      $� )$    "     0�0    0  reyekp�$
$�   (  ` $!"  4    $ `$ �  0( (    `!(   `�>
 4  *!0 ,)��    �   �  "�  "      ! 0� !<.tmr>M�        �" `""    �  � 0   !� � <?Cod>$`#  "  $�   0`�  (  �(`     $  </Row>+
 "    ,$  !             0       <b� �>-*`0  a b  !  $$!`   �    "   ( " <�s:$`   !      0   !(*!  $!"     !  (  ?�o, md=���}~)K     ` �"( $  �    �   (0� 0!� `       (=dyv cia3�Ncme�`g/~mEeru�*>�   &`0  $@  2   (  �   `0( 0 
0    0   ��   <TerPFIeld
�   "2p"        ,      2! (   ((    %   ` "   &!name?"pas3worg"
         ��     x  (0  : ,  ,$      `       �artypm="pq�sw/R4**#0"   "   � a $   ! `      �  (   `            v��ue={t�is.stape&pass�mr�}� �(`0     0 �         0      P  `!   *  "2!   h b|oati�gLab�lTept=#fTor yotp Pas�krd"M
  ` � !�`  (      �"    "�     0�    !        .jc``nwe={thyc.onCha.ge}	
"  d    ""` �$ �    �  0"  $    * 0$`  " ($   ` �estiRud
 �0   " ##(  !  �* $d   $("�       paq ( d  />
   " ! $  h  ` *@a    �!`   "  �0      </da^>
 �$    � !     `  0$     ! ` $ "  $�<-BOm7
  �`!�i        2!0  `  b) !   ( &Rov<m  (   �         ` !  `    �0   :br />(  !" (4$0  "     �! �   0   0<d)v cL{3qNA]e="h55t/~-subo�tB8
  �  !     0" `(@0    0� ("4     0  =r}|tom |ypu=�suqny4" classZam@="z4f!bt*,pbi}er�""Id="admi�buttm&#>{ubmit<gbU�do~>
$   0      0 "�  `   0 ( 5     <odif>j  �  �!!   (          $ ! 8 �/f/qm>��   "  $$   �("`  $#   8 �GriD6�#!!       x  ( �   0<�`)v8
   f� %  ! ``($</]uiThgm�Sr�vider
  z (�  0 "(>/dir>�  �   `0);-�  (<
}-/0conct3�yle!= {M
// !mQv�in�"15,-k/ �;Jex�o2v tefaul4 admijSignif;