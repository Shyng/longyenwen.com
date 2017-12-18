import React from 'react';

// TODO zhuan
/**
 * [黑体字形大全]
 * $起头的是音调
 * _起头的是横彦
 * 浊音符号是_$
 */
export default (phth) => {
  // const VoicedSign = ''; // 浊音符号

  const characterMap = {
    a3: [
      'm58.33,6.83l8.05,1.10l-3.84,12.27c6.84,-1.53 19.85,-3.32 22.76,-2.41c2.91,0.91 3.66,3.54 4.30,6.05c0.64,2.51 -0.92,10.10 -5.18,17.82l-7.16,-2.22c2.26,-3.98 5.48,-11.83 4.06,-13.61c-1.43,-1.78 -16.39,1.28 -23.38,3.55l-4.52,-7.27l4.91,-15.28z'
    ],
    a34: [
      'm58.33,7.58l7.72,2.02l-4.84,26.32c6.67,-1.81 22.51,-0.91 25.43,0.75c2.91,1.67 4.66,3.48 5.30,8.09c0.64,4.61 -5.09,21.50 -11.68,27.49l-5.99,-5.58c4.93,-1.63 10.98,-18.84 9.56,-22.10c-1.43,-3.26 -19.89,-3.33 -26.88,0.83l-4.35,-5.65l5.74,-32.16l0.00,0z'
    ],
    a14: [
      'm36.70003,13.18758l-10.63913,32.12408c19.66243,-10.17499 51.86162,-9.66062 54.78162,-8.00062c2.91,1.67 4.83798,3.48 5.47798,8.09c0.64,4.61 -3.01359,19.66089 -8.7137,25.82887l-5.87135,-4.57146c5.28595,-6.79138 8.08303,-17.83145 6.29707,-21.44741c-1.78596,-3.61596 -34.91436,-1.921 -55.43072,9.89208l-6.52529,-5.75876l12.55755,-37.79104l8.06597,1.63426z'
    ],
    a13: [
      'm35.72674,11.45745l9.11787,0.21011l-3.66205,11.91404l31.65895,-0.80819l5.36787,6.93989l-5.00203,18.17596l-8.76179,-2.39799l3.88201,-14.3219l-33.3468,0.88032l-3.45213,-5.6682l4.1981,-14.92404z'
    ],
    o3: [
      'm65.197441,8.373751l7.417793,1.949002c-1.542481,7.712403 -5.932618,17.204591 -10.144776,21.891358l17.441895,-2.847655l2.135741,6.407225l-25.272948,4.627443l-5.695313,-4.805422c7.197569,-8.065439 12.615352,-19.868425 14.117608,-27.221951z',
      'm79.435722,19.052463l-5.396661,3.372829l5.695313,17.797853l8.720947,-1.601807l-9.019599,-19.568875z'
    ],
    o4: [
      'm65.70061,39.17502l7.41779,1.949c-1.54248,7.71241 -5.93261,17.20459 -10.14477,21.89136l19.22168,-3.20361l1.6018,6.76318l-26.51879,4.62744l-5.69532,-4.80542c7.19757,-8.06544 12.61535,-19.86842 14.11761,-27.22195z',
      'm81.12322,47.98167l-5.57464,3.5508l7.11914,18.68776l8.6023,-2.07642l-10.1468,-20.16214z'
    ],
    o34: [
      'm64.48554,16.3828l6.88385,0.34719c-1.18653,15.89942 -5.22068,34.29052 -9.78881,43.24878l18.91021,-3.51507l2.00225,6.5407l-26.60777,5.16138l-4.09351,-5.16138c6.48565,-10.0232 11.3695,-30.19116 12.69378,-46.6216z',
      'm78.90178,38.45212l-4.86273,1.86001l9.61085,28.20961l7.83106,-2.4917l-12.57918,-27.57792z'
    ],
    o14: [
      'm43.90805,14.64033l8.05128,2.22877c-2.5769,13.60155 -8.48715,31.53643 -22.89739,44.97131l43.44035,-8.31673l3.44944,7.44116l-53.78872,10.25187l-5.55959,-7.59651c19.60154,-20.82662 22.70309,-32.31992 27.30463,-48.97987z',
      'm68.65247,35.44717l-5.91929,3.91732l13.92382,31.80464l9.63624,-4.39014l-17.64077,-31.33182z'
    ],
    o13: [
      'm50.95916,10.15355l6.70587,3.72879l-14.83154,18.09448l23.37451,-3.67823l2.31373,6.76318l-33.16333,5.16138l-3.3816,-7.11914l18.98236,-22.95046z',
      'm62.29046,16.33828l-4.99623,3.5953l9.9668,20.12642l8.29085,-3.08496l-13.26142,-20.63676z'
    ],
    o24: [
      'm42.74138,37.97366l7.55128,3.72878l-17.39739,23.80464l35.77368,-4.9834l4.44945,6.94116l-49.12206,6.58521l-3.55959,-6.76318l22.30463,-29.31321z',
      'm67.65247,46.94717l-5.75262,3.41732l11.25715,23.80464l9.13624,-4.39014l-14.64077,-22.83182z'
    ],
    e3: [ // !epsilon
      'm54.049513,19.752242l-1.234389,-6.759811l29.722411,-3.025634l3.470581,8.676453l-13.404342,17.305038l-4.037552,-4.490585l8.854431,-14.193786l-23.37114,2.488325z',
      'm65.484634,21.93248l-6.796219,4.630814l13.214905,16.596496l4.938904,-3.55957l-11.35759,-17.66774z'
    ],
    e34: [
      'm51.91377,31.16264l0.01146,-7.47171l33.99388,-2.4917l3.38161,8.14251l-16.16304,29.58555l-3.68158,-4.3126l11.03468,-25.40643l-28.57701,1.95438z',
      'm63.95697,42.19734l-6.17698,4.45283l14.15298,23.30036l6.71868,-4.37533l-14.69468,-23.37786z'
    ],
    e14: [
      'm20.90128,31.19215l-1.50986,-9.32913l57.93737,-5.51233l6.08508,10.06089l-27.78676,37.55355l-5.60172,-5.67798l22.58411,-32.701l-51.70822,5.606z',
      'm40.89563,42.14549l-6.40998,6.06777l24.41076,24.63499l4.95853,-4.41051l-22.95931,-26.29225z'
      // 'm24.46085,36.29419l-0.73863,-7.9053l51.05555,-4.44444l4.81945,8.08334l-23.93056,32.19443l-5.16666,-5.5l18.05555,-26.33333l-44.0947,3.9053z',
      // 'm43.50599,44.24168l-6.17267,6.4435l21.44445,19.8889l5.61111,-4.94445l-20.88289,-21.38795z'
    ],
    e13: [
      'm32.98872,21.17607l-0.70045,-7.11577l37.90942,-3.38158l3.82654,8.49847l-18.38774,18.55088l-4.74947,-3.77867l12.59198,-15.61761l-30.49028,2.84428z',
      'm45.0171,24.42418l-6.08431,5.69869l18.19832,16.59649l4.22698,-3.55957l-16.34099,-18.73561z'
    ],
    E3: [ // epsilon
      'm64.090131,8.113863l-6.836667,0.373488l-2.080124,30.311966c13.630863,2.175518 28.728024,-3.955305 30.968262,-5.161378c2.240237,-1.206073 -0.355959,-7.475098 -5.161379,-5.873291c-4.80542,1.601807 -11.212646,3.737549 -17.975829,4.271485l1.085737,-23.92227z'
    ],
    E34: [
      'm66.71531,11.53994l-6.5697,0.26968l-0.47833,56.57861c15.16593,0.03977 30.01839,-4.33351 33.52672,-6.60745l-2.46945,-6.38496c-4.80542,2.13574 -13.84895,5.25035 -23.67115,5.60629l-0.33809,-49.46217z'
    ],
    E13: [
      'm41.91628,13.44495l-7.89273,2.33582l3.8117,31.23523l35.25458,-0.80091l0.00001,-7.77173l-28.31344,0.47462l-2.86012,-25.47303z'
    ],
    E14: [ // 没用吧
      'm38.53469,17.6571l-9.43522,1.80188l-2.7735,44.58362c16.28009,0.87506 41.57775,-1.63147 56.07805,-8.05353l0.53396,-9.13622c-13.57087,4.83014 -33.48965,9.24499 -47.06052,9.09173l2.65723,-38.28748z'
    ],
    y12: [ // former: 这里直接改成y了，不行再处理
      'm25.576671,10.622134l8.256662,-0.7888c1.833332,42.999999 -9.666666,56.166666 -15.166666,64.166667l-7.000001,-4.500001c8.970003,-11.014844 15.773336,-27.529688 13.910005,-58.877866z'
    ],
    i2: [
      'm49.33675,60.0735l-38.4317,16.25876l-3.35809,-8.42897c13.66,-3.1 27.78384,-9.39731 40.38384,-15.66731l1.40595,7.83752z'
    ],
    i3: [
      'm75.64087,8.720947l1.601807,28.654541l-7.831055,1.067871l-3.421367,-28.338363l9.650615,-1.38405z'
    ],
    i34: [
      'm71.30073,15.78833l7.85027,-1.9505l-0.14831,57.53155l-8.36499,-4.03417l0.66303,-51.54688z'
    ],
    i4: [
      'm55.61898,50.08527l4.80471,-4.83424l29.05871,21.16832l-8.81734,3.92665l-25.04608,-20.26073z'
    ],
    i14: [
      'm22.92519,34.4813l1.0748,7.60512l52.08334,-2.66666l-5.45833,14.75l11.875,-14.58334l-0.66667,-7.66667l-58.90814,2.56155z'
    ],
    i13: [
      'm46.4609,14.53078l8.52334,-2.20576l1.36821,26.99711l-5.79544,1.12349l-4.09611,-25.91484z'
    ],
    i24: [
      'm19.3419,56.93609l0.49282,9.15327l66.29699,-2.98114l-0.88989,-6.6297l-65.89992,0.45757z'
    ],
    w12: [
      'm18.7812,17.86159l22.59596,-0.64393l4.21064,6.92491l-12.1666,39.53318l-6.72207,-0.21712l9.73485,-38.15809l-17.81213,0.39162l0.15935,-7.83057z',
      'm10.62275,61.22915l0.94585,8.36046l36.66358,-2.66969l0.71191,-6.40722l-38.32134,0.71645z'
    ],
    u2: [
      'm12.38,47.98l26.57258,-1.47652l2.23955,8.08955l-19.00697,11.58046l25.82529,-3.13743l0.69955,7.11607l-38.61606,3.93l-3.38652,-6.4591l24.20168,-14.23651l-17.5791,0.91348l-0.95,-6.33l0,0.01z'
    ],
    u4: [
      'm56.79807,50.23898l-0.51236,-6.89009l24.02709,-1.20135l2.95889,6.65195l-11.72433,17.24167l-7.20812,-1.42384l9.9668,-15.36175l-17.50797,0.98341z',
      'm51.39197,63.72085l-0.35663,6.75864l40.80158,-0.48944l-0.80091,-7.92005l-39.64404,1.65085z'
    ],
    u34: [
      'm58.48253,27.5222l0.8733,-7.72209l21.00147,-0.75641l5.11688,6.71868l-13.74884,33.19299l-7.69757,0.1335l12.74204,-32.32309l-18.28728,0.75642z',
      'm52.09385,65.69861l-0.5839,-6.78773l39.62247,-1.70191l-1.02708,7.80879l-38.01149,0.68085z'
    ],
    u14: [
      'm33.20374,25.17005l0.03289,-7.79128l35.77367,-0.8009l3.94908,6.78543l-15.96867,32.28691l-7.28429,-0.57919l13.81974,-30.82857l-30.32242,0.9276z',
      'm17.06472,53.21506l-0.16735,7.31521l69.63411,-1.02338l-0.96757,-7.42005l-68.49919,1.12822z'
      // 'm32.92835,30.57532l0.03289,-7.79128l35.77367,-0.8009l3.94908,6.78543l-15.96867,32.28691l-7.28429,-0.57919l13.81974,-30.82857l-30.32242,0.9276z',
      // 'm20.62429,55.58811l-0.34533,6.95925l63.0489,-0.8454l-0.96757,-7.42005l-61.736,1.3062z'
    ],
    u24: [
      'm34.01683,52.90865l0.19955,-7.95795l35.77367,-0.8009l4.11575,6.78543l-11.63534,17.95358l-5.78429,-1.24586l7.65308,-15.49523l-30.32242,0.76093z',
      'm22.02552,64.25478l-0.17866,7.29258l63.0489,-0.8454l-0.80091,-7.92005l-62.06933,1.47287z'
    ],
    v12: [ // yu
      'm6.531249,30.182764l4.635417,34.483903l28.333334,-5.333334l-2,-8.166667l-19.333334,4.000001l-3.333332,-27.666668l-8.302085,2.682765z',
      'm35.364582,10.766097l8.302084,-2.016096l0.000001,64.333333l-8.166667,-1.833334l-0.135418,-60.483903z'
    ],
    v2: [
      'm8.031249,54.849432l2.817709,14.658617l6.817709,2.325287l24.333333,-13.66667l-1.166666,-7.5l-23.333335,12.500001l-1.999999,-11.166667l-7.468751,2.849432z',
      'm39.864582,45.099431l7.302084,-0.84943l1.000001,28.499999l-8.500001,-2l0.197916,-25.650569z'
    ],
    v3: [
      'm62.44661,12.98459l-7.76271,0.94224l-0.53393,20.02257l7.65307,3.91554l19.99873,-21.72122l-1.62245,-3.19579l-18.02033,14.1938l0.28762,-14.15714z',
      'm79.04309,12.85109l7.32099,-2.48385l0.8009,28.47657l-8.00904,-1.51282l-0.11285,-24.4799z'
    ],
    v34: [
      'm53.19805,27.87942l7.58162,-1.10478l0.11123,21.72451l17.31953,-5.92891l1.25698,5.53959l-20.60102,9.64421l-5.66193,-4.92779l-0.00641,-24.94683z',
      'm77.79245,14.82022l7.59275,-1.4607l-0.00001,59.35954l-7.77544,-1.47945l0.1827,-56.41939z'
    ],
    v14: [
      'm21.59571,20.60636l8.67423,0.03505l-4.65105,31.64826l49.52087,-22.38969l1.74568,8.30806l-54.51429,24.69248l-6.82859,-5.27244l6.05315,-37.02172z',
      'm72.53939,15.08166l8.36331,-1.65719l3.82513,52.98488l-8.9421,-1.64612l-3.24634,-49.68157z'
      // 'm24.2654,31.46305l8.67421,-2.45664l-1.98136,27.02081l38.4862,-17.76225l1.92365,6.70626l-42.7677,21.31088l-6.82859,-5.09446l2.49359,-29.7246z',
      // 'm67.91195,20.42101l8.18533,-1.47921l4.53704,46.93361l-8.9421,-1.64612l-3.78027,-43.80828z'
    ],
    v13: [
      'm38.52085,15.80135l-7.86282,0.79763l-0.23359,21.55764l7.65307,3.73756l29.96553,-21.17616l-0.91054,-4.87547l-28.69904,15.68438l0.08739,-15.72558z',
      'm65.32886,15.69008l7.6992,-0.6818l-0.11125,24.14946l-7.83106,-1.01224l0.24311,-22.45542z'
    ],
    b12: [
      'm45.5464,70.40983l-7.53509,-0.80502l-0.53394,-47.94644l-12.76546,0.96607c0.75873,27.55428 -6.09449,42.9718 -10.71792,50.39663l-6.0053,-6.59122c6.50931,-9.25616 10.62342,-27.97309 9.25716,-50.33935l27.57617,-2.07617l0.72438,56.3955z'
    ],
    b1: [
      'm14.379733,10.864582c0.928978,2.822917 1.342489,34.802085 -4.879733,40.802085c-6.222222,6 9,2.305556 11.166666,-6.75c2.166666,-9.055556 2.166667,-18.861112 2.166667,-26.916668l14.5,-1.166665l0.333334,28.083333l8.333334,-0.416667l-0.500001,-35.833333l-31.120267,2.197915z'
    ],
    p12: [
      'm27.614582,10.84943l-7.697916,-2.932762l-8.583332,18.916665l2.333332,7.5l24.250002,-6.999999c0.111111,8.138888 -17.333334,37.222221 -31.916668,41.249999l7.083333,6c12.277778,-5.11111 33.486111,-34.305555 34.000001,-49.354166l-4.500002,-6.979167l-20.833332,6.083334l5.864582,-13.483904z',
      'm14.447915,37.016097l-2.364582,6.150569l29.833334,25.166667l6.833333,-7.333334l-34.302085,-23.983902z'
    ],
    p1: [
      'm25.447916,11.516097l-6.864583,-2.766096l-6.249999,14.083332l1.499999,8l24.416668,-5.166666c0.111111,7.305555 -17.5,24.222221 -32.083334,28.249999l11.083332,3.333334c12.277778,-5.11111 29.319445,-20.138889 30.166668,-33.020833l-4.166668,-6.645834l-21.833332,4.583334l4.031249,-10.65057z',
      'm17.114582,30.682764l-2.364582,6.150569l27.5,12.166667l7.666667,-6.666667l-32.802085,-11.650569z'
    ],
    f12: [
      'm16.10063,16.85243l27.13391,-4.14882l5.77262,6.17082c0.16868,14.08018 -13.30714,42.98166 -32.39071,53.95231l-8.50358,-3.25912c23.11271,-12.59783 32.82033,-40.15186 33.1062,-48.65926l-24.29939,3.5445l-0.81905,-7.60043z',
      'm17.12389,33.08776l-1.76429,7.3327l21.03168,5.83108l2.68514,-5.31486l-21.95253,-7.84892z'
    ],
    m12: [
      'm11.281249,17.182764l1.718752,7.567236l24.749999,-5.833333l-2.583333,26.333334l7.833333,1.416666l3.5,-30.583334l-6.583333,-6.166666l-28.635418,7.266097z',
      'm24.197915,30.016098l-8.114582,-1.932763l-8.875,31.416666l5.124999,5.833333l25.583336,-5.499999l-5.000001,9.833332l6.916667,4.750001l7.583333,-14.583334l-5.333334,-8.583333l-25.666666,5.25l7.781248,-26.483903z'
    ],
    m1: [
      'm14.281249,10.182764l-0.947915,7.650569l22.166666,-0.5l-1.5,14.833334l8,0.166666l2,-22.166666l-29.718751,0.016097z',
      'm20.614582,20.016097l-7.364582,0.15057l-2.583334,21.666666l26.833334,-0.666666l-4.5,8.833333l7.5,0l5.666666,-8.833333l-2,-6.916667l-25.166666,0.583333l1.614582,-14.817236z'
    ],
    m14: [
      'm17.83568,15.81825l0.11695,8.10119l55.18432,-3.51961l-6.85481,26.33333l8.01131,1.41667l7.5935,-30.58334l-6.58333,-6.16666l-57.46794,4.41842z',
      'm38.41973,29.04709l-7.84762,-1.33949l-19.90968,36.93401l6.0149,6.60457l63.43344,-10.36475l-5,9.83333l6.91666,4.75l7.58334,-14.58333l-5.33334,-8.58333l-63.48709,10.09991l17.62939,-33.35092z'
    ],
    d12: [
      'm28.10005,12.93126l-7.28784,-2.18956l-5.82051,14.39253l2.90876,7.65611l22.68287,-2.28243l-1.09878,26.54865l-9.61427,-11.5513l-3.62028,7.54489l13.93213,17.12707l6.51151,-2.95629l2.24,-39.21942l-4.3488,-5.82694l-20.69909,2.03734l4.2143,-11.28065z',
      'm29.0109,36.97529l5.69491,4.71618c-5.51734,10.90118 -10.50073,21.26843 -17.44189,30.38983l-9.47736,-0.66742c8.79524,-10.0557 15.45474,-21.53523 21.22434,-34.43859z'
    ],
    d1: [
      'm26.74334,11.60698l-6.57667,-3.52365l-7.66667,10.91667l3.33333,6.83333l25.48228,-2.30014l-3.88348,11.21455l-9.35974,-5.91064l-2.90572,6.82957l12.31391,7.41968l5.37274,-2.85858l6.64668,-18.0611l-5,-6.41667l-22.41667,2.41667l4.66001,-6.55969z',
      'm27.36865,24.52488l5.73535,3.50674l-15.48413,15.88458l-5.69531,-3.11463l15.44409,-16.27669z'
    ],
    d14: [
      'm45.98688,14.57756l-7.91076,-2.23406l-13.4291,17.24019l4.02114,7.65611l47.86683,-4.01772l-7.68399,28.10597l-20.47095,-15.06638l-4.51018,5.36465l25.14478,19.97473l7.22342,-4.91406l9.18116,-35.48187l-5.10521,-6.27188l-45.26012,3.99509l10.93298,-14.35077z',
      'm48.55889,37.52405l6.5848,3.60382c-4.71643,10.50073 -17.79785,23.31518 -30.47883,28.78802l-10.41174,-3.87103c17.07123,-6.05119 29.9155,-19.88894 34.30577,-28.52081z'
    ],
    t12: [
      'm7.700724,33.961063l0.412912,7.607119l38.969698,-2.015151l1.151515,-6.878788l-40.534125,1.28682z',
      'm23.79921,10.180759l-10.761331,57.879848l8.05303,4.81818l27.272727,-2.893938l-1.37121,-6.712123l-25.075758,1.28788l9.878788,-54.560606l-7.996246,0.180759z'
    ],
    t1: [
      'm9.450724,20.044396l-0.003755,7.023786l37.803032,-1.515151l1.484848,-6.545455l-39.284125,1.03682z',
      'm24.299209,8.180759l-8.26133,30.213181l3.219697,5.984848l24.60606,-1.893938l1.378789,-6.545456l-20.742425,1.121212l7.962122,-29.560606l-8.162913,0.680759z'
    ],
    l12: [
      'm9.17657,63.69468l7.77565,6.39973l31.87119,-30.95314l-3.4476,-4.19759l-36.19924,28.751z',
      'm37.20172,32.78135l-5.32891,3.69497l-16.06763,-16.79338l7.61865,-6.33333l13.77789,19.43174z'
    ],
    l1: [
      'm8.379701,40.819104l3.286965,10.180896l36.000001,-19.333333l-2.333334,-5.833333c-8.040099,5.217479 -20.246865,12.434958 -36.953632,14.98577z',
      'm36.546368,26.98577l-5.213035,3.51423l-12.666666,-13.833333l7.499999,-6.333334l10.379702,16.652437z'
    ],
    l14: [
      'm44.62385,11.84461l-7.92074,4.68762l13.53695,22.14758l5.60566,-3.42029l-11.22187,-23.41491z',
      'm23.04889,74.51282l-4.83577,-10.02527c29.36646,-7.11914 54.99537,-21.59473 61.1653,-24.44238l2.4917,5.33935c-4.4789,2.8276 -30.67119,15.44401 -58.82123,29.1283z'
    ],
    n12: [
      'm44.46699,13.81809l3.32025,6.38247c-8.3205,6.18476 -20.69001,10.05579 -31.41321,11.43512l-0.75641,-7.25262c11.61871,-1.81603 19.85584,-4.9669 28.84937,-10.56497z',
      'm18.08167,30.85954l7.45824,-1.4041l-3.73755,30.7458l26.47432,-2.18025l-0.35597,7.65309l-29.81139,2.4472l-5.11689,-4.53845l5.08924,-32.72329z'
    ],
    n1: [
      'm41.949998,14.126667l-4.33,-5.79c-6.368888,4.558888 -20.737777,8.617777 -21.606666,7.676666c-0.868889,-0.941111 -0.342223,18.271111 -4.763334,22.073334l4.936666,6.42l30.78,-1c2.97,-1.68 3.310001,-6.416666 1.380001,-7.626666l-27.356666,0.906666l0.836666,-15.146666c7.136667,-1.36 15.12,-3.860001 20.123333,-7.513334z'
    ],
    n4: [
      'm89.24977,45.75977l-3.62977,-7.08977c-9.45,4.89 -30.98,3.81034 -31.44,5.01c-0.46,1.19966 0.10417,15.11089 -2.79651,22.46021l4.03527,4.93169l35.04414,-0.87707c1.27034,-1.27955 2.78775,-5.99303 0.4573,-7.60348l-30.90017,1.13989l1.08878,-13.64158c0.47,-0.36 20.97096,-1.00989 28.14096,-4.32989z'
    ],
    n14: [
      'm75.01701,14.47224l2.9969,6.43529c-15.92907,5.7398 -34.43884,8.45397 -54.50592,9.56634l-0.40045,-6.67419c18.91979,-1.49251 36.9497,-3.83041 51.90947,-9.32744z',
      'm32.58396,24.62195l-7.53348,-0.28339l-7.56409,33.90491l3.87103,5.60631l63.98328,-1.77977l-0.93439,-7.60859l-58.37696,1.37934l6.55461,-31.21881z'
    ],
    n24: [
      'm77.9778,51.51441l1.17564,-8.33563l-53.15338,1.45043l-6.1781,21.74829l3.32337,6.5335l58.89325,-0.87707c1.27034,-1.27955 2.96573,-6.88292 0.63528,-8.49337l-53.32546,1.13988l3.22452,-12.21774l45.40488,-0.94829z'
    ],
    g12: [
      'm30.152429,12.349406l-6.819095,-4.016073l-13.833333,23.333334l3.999999,7.166667l36.166668,-6.166669l-2.000001,-7.666666l-28.499999,5.333334l10.985761,-17.983927z',
      'm27.819094,35.516076l8.347573,-1.016073c1.944444,11.666667 -5.944446,32.749997 -16.166668,39.249996l-10.097571,-1.733925c11.499999,-6.333334 20.083332,-25.666665 17.916666,-36.499998z'
    ],
    g1: [
      'm29.985762,9.849406l-6.819095,-4.016073l-12.333333,18.333334l3.999999,7l33.833334,-5.166668l-2.166667,-6.833333l-26.166666,3.833334l9.652428,-13.150594z',
      'm24.652428,26.016075l7.680906,0.983927c-0.388889,8.5 -5.944447,18.666665 -15.333335,26.999997l-11.514238,2.182741c11.999999,-9.833334 19,-21.833332 19.166667,-30.166665z'
    ],
    g14: [
      'm30.73433,14.259l7.57556,2.11502l-10.11175,18.75295l55.85222,-9.94301l1.73529,7.56409l-64.90284,11.15332l-2.55103,-7.2378l12.40255,-22.40457z',
      'm58.67696,32.94675l-7.77511,0.15725c0.65259,13.67469 2.64003,23.03339 -20.02257,34.30536l4.00451,5.56184c20.37472,-9.08483 25.17632,-18.97057 23.79317,-40.02445z'
    ],
    k12: [
      'm27.758489,9.288801l7.908179,2.211201c-3.444445,11.333333 -10.555556,24.5 -23.833334,33.833333l-4.833333,-6.166667c8.363941,-5.5704 16.894547,-16.974134 20.758488,-29.877867z',
      'm22.591823,31.788801l4.24151,-7.122134l21.333334,3.833333l2,8.000001c-3.722223,17.722223 -14.277777,27.777778 -35.666666,38.500001l-6.666667,-5.833333c17.166666,-5.333333 33.5,-21.166668 33.833333,-33.166668l-19.074844,-4.2112z'
    ],
    k1: [
      'm28.425156,6.955467l5.908178,4.044534l-18,19.5l-4.333334,-5.833334l16.425156,-17.7112z',
      'm21.091822,21.288801l4.741511,-5.955468l17.666667,3l2.333333,5.833334c-6.388889,15.388889 -20.944444,23.777778 -35.833333,29.333334l-2.166667,-6.666667c12.833333,-5.333333 26,-14.000001 29.166667,-22.5l-15.908178,-3.044533z'
    ],
    h12: [
      'm8.743336,33.455467l0.756664,8.377866l39.5,-3.666667l-1.333333,-8.333333l-38.923331,3.622134z',
      'm25.576671,10.622134l8.256662,-0.7888c1.833332,42.999999 -9.666666,56.166666 -15.166666,64.166667l-7.000001,-4.500001c8.970003,-11.014844 15.773336,-27.529688 13.910005,-58.877866z'
    ],
    h1: [
      'm12.07667,26.7888l1.089997,7.044533l35.5,-5l-1.666667,-7.333333l-34.92333,5.2888z',
      'm27.076671,8.622134l7.589996,-1.622133c-0.500001,28.5 -11.166667,39.166665 -19.5,44.999999l-9.166668,-1c11.803336,-9.348177 20.106671,-15.529689 21.076672,-42.377866z'
    ],
    ng4: [
      'm85.62,38.569887c-9.950565,3.988984 -31.68079,4.711355 -32.441129,5.410452c-0.760339,0.699097 -0.429774,15.989661 -2.729774,23.939661l8.070226,4.25l16.290508,-11.705593l11.006191,9.884526c10.86373,1.236963 5.628062,-5.145212 2.056214,-8.46826l-12.562236,-11.020673l-16.351355,11.94l1.224125,-12.490113c0.47,-0.36 20.295197,-1.610565 27.865649,-4.830452l-2.428419,-6.909548z'
    ],
    ng14: [
      'm75.01701,14.47224l2.9969,6.43529c-15.92907,5.7398 -34.43884,8.45397 -54.50592,9.56634l-0.40045,-6.67419c18.91979,-1.49251 36.9497,-3.83041 51.90947,-9.32744z',
      'm32.58396,24.62195l-7.53348,-0.28339l-8.23151,39.24427l6.67419,5.60631l32.43659,-26.11834l-4.89441,-4.67194l-25.13948,20.37854l6.6881,-34.15545z',
      'm45.56166,33.48207l5.78363,-3.85535c12.28052,15.12818 24.91699,26.5188 37.01953,34.17188l-9.43286,3.02563c-13.73378,-10.7581 -21.4163,-19.02449 -33.3703,-33.34216z'
    ],
    ng24: [
      'm79.13466,51.51441l1.26463,-8.33563l-54.39923,1.45043l-6.57855,23.48358l6.96081,5.86608l27.01054,-12.91928l26.74728,11.25614c1.17024,0.12203 5.69845,-5.58145 3.368,-7.1919l-30.09994,-12.65979l-24.0598,11.4155l3.22452,-11.41684l46.56174,-0.94829z'
    ],
    j12: [
      'm26.22955,10.15787l8.39854,-0.58l-0.63349,23.04809l-6.80303,0.69l-0.96202,-23.15809z',
      'm42.81,31.94l2.68,7.24l-25.65415,24.23415l28.00809,-3.37202l0.7601,7.07404l-36.12415,4.20989l-4.68595,-7.60212l26.45606,-24.35394l-21.01957,1.59989l-0.32191,-7.16202l29.90148,-1.86787z'
    ],
    j1: [
      'm25.83,5.406667l8.01,-0.28l-0.46,11.42l-6.5,0.33l-1.05,-11.47z',
      'm40.343333,15.873333l2.546667,7.206667l-19.7,13.916667l23.686667,-2.086667l1.333333,7.296667l-34.653333,1.703333l-3.18,-7.79c5.34,-1.85 17.333333,-7.86 23.923333,-13.88l-17.193333,0.83l0.573333,-6.64l22.663333,-0.556667z'
    ],
    j14: [
      'm46.79867,12.58466l7.87473,-0.29429l-0.82397,18.61951l-6.08874,0.26144l-0.96202,-18.58666z',
      'm70.83028,28.14554l3.10857,7.23999c-7.55139,12.50663 -37.7218,21.58468 -39.0351,21.80558l53.26597,-2.01933l0.21651,7.34041l-73.69558,1.40034l-2.0669,-6.88783c17.96155,-4.64179 44.92308,-13.95023 52.0751,-21.97297l-36.59099,1.12369l1.39237,-7.49535l41.33005,-0.53453z'
    ],
    q12: [
      'm14.493337,16.98577l0.67333,7.597562l23.25,-2.583333l-30.666667,42.666668l6.166667,6.583333l34.5,-49l-4.416666,-8.583334l-29.506664,3.319104z',
      'm50.16,53.570001c-1.17,-1.5 -15.413333,-12.916667 -17.493333,-14.566667c-2.08,-1.65 -5.59,3.82 -5.67,3.67l19.413333,20.486667l3.75,-9.59z'
    ],
    q1: [
      'm14.16,12.65244l1.50667,7.93089l17.11727,-3.31636l-23.55281,25.69005l3.72399,8.42721l30.46155,-34.46756l-5.58334,-8.25l-23.67333,3.98577z',
      'm44.41,48.15l4.75,-8.08c-1.17,-1.5 -12.58,-11.75 -14.66,-13.4c-2.08,-1.65 -5.59,3.82 -5.67,3.67l15.58,17.82l0,-0.01z'
    ],
    q14: [
      'm22.25622,16.33847l-0.78003,7.66153l47,-0.42858l-56.03175,40.96826l6.31747,6.03174l61.28571,-46.57142l-3.14286,-7.85715l-54.64854,0.19562z',
      'm56.11336,38.86228l-6.38095,4.71429l33.15648,27.18533l6.30159,-5.90476l-33.07712,-25.99486z'
    ],
    x12: [
      'm25.561993,10.562001l8.521341,-0.562003l-1.333333,34.500002l-5.833334,0.083331l-1.354674,-34.02133z',
      'm13.5126,33.8037l-1.56199,-7.39533l33.58333,-1.5l4.16667,6.91666c-4,19.81071 -20.37918,34.47038 -34.21739,41.14005l-7.66293,-4.57578c22.27163,-10.67199 32.71266,-28.57112 33.61903,-35.75533l-27.92672,1.16973z'
    ],
    x1: [
      'm23.47866,6.812001l8.688008,-0.062002l-1.666667,24.166668l-5.666667,0.916665l-1.354674,-25.021331z',
      'm11.811993,23.812002l-0.561993,-6.562002l32.916666,-3.666667l4.333333,6.083333c-2.666666,14.333334 -35.771339,33.145337 -39.354672,32.47867c-3.583333,-0.666667 -4.083334,-6.166667 -1.833334,-6.416667c2.25,-0.25 25.749999,-11.583335 32.52134,-25.145336l-0.117251,0.070251l-27.904089,3.158418z'
    ],
    x14: [
      'm44.5134,11.47167l9.81334,-0.562l-1.51131,40.01733l-7.25716,-0.4506l-1.04487,-39.00473z',
      'm21.95669,34.6936l-0.67209,-8.81916l58.44099,-3.63574l4.81926,7.15396c-4,19.81071 -36.81253,44.19987 -65.42296,47.13199l-4.99324,-7.77939c35.44203,-3.73083 59.23145,-29.28303 59.95984,-37.35713l-52.1318,3.30547z'
    ],
    r12: [
      'm49.031249,17.932764l-6.197916,-5.682764c-9.388889,9.944445 -21.527778,16.305556 -36.416667,21.583334l3.333334,6.833332c14.34375,-5.077967 29.187499,-12.072601 39.281249,-22.733902z',
      'm22.364581,32.766096l6.468751,-3.349429l4.500001,38.166666l-8.916666,-2.666667l-2.052086,-32.15057z'
    ],
    r1: [
      'm29.599397,6.728195l8.650603,2.105139c-3.666667,17.166667 -10.583334,31.666666 -24.583334,41.833333l-5.166666,-6.000001c11.449799,-7.47949 20.649598,-20.542313 21.099397,-37.938471z',
      'm33.516064,23.061528l-3.849397,4.771806l13.333333,15.666667c2.166667,0.833333 9.377175,-0.632917 4.849397,-6.271806c-4.527778,-5.638889 -9.388889,-9.444445 -14.333333,-14.166667z'
    ],
    r14: [
      'm48.82954,17.84637l7.11491,-0.03156c-1.03702,30.00001 -13.03703,40.48146 -33.18518,54.20369l-3.40742,-6.12961c18.68391,-11.93392 29.29377,-26.05305 29.47769,-48.04252z',
      'm48.07028,40.0686l4.05934,-7.36489c5.03704,14.42593 22.24075,28.79629 34.77779,32.22222l-12.38889,2.33333c-12.0383,-7.13761 -21.24327,-17.05303 -26.44824,-27.19066z'
    ],
    z12: [
      'm40.485762,12.18274l-22.121442,0.704314l-0.621438,6.954316l17.84045,-0.924704l-26.583331,20.166667l3.749997,7.583333l36.750002,-4.666667l-2.833334,-8l-25.166667,3.666668l24.242882,-17.991965l-5.257119,-7.491962z',
      'm29.152428,39.349408l8.264239,0.317261c-0.722222,13.333333 -8.777779,27.333332 -18.083334,34.33333l-10.430905,-1.650592c9.999999,-8.333334 20.083333,-19.666666 20.25,-32.999999z'
    ],
    z1: [
      'm41.152429,9.349406l-25.538109,1.620981l0.961895,7.287649l15.923784,-1.258037l-20.666665,14.833334l2.499998,6.333333l34.500001,-3.500001l-2.166667,-6.833333l-21.333333,2.666668l18.826214,-12.741964l-3.007118,-8.40863z',
      'm23.819094,33.016075l6.097573,1.483927c-2.888889,8.5 -6.611113,11.333332 -14.416668,19.666664l-8.264238,-1.817259c9.999999,-8.333334 12.416666,-10.999999 16.583333,-19.333332z'
    ],
    z14: [
      'm68.24001,16.16389l-36.28812,-0.44382l0.2119,7.17653l27.72935,-0.20247l-45.22311,23.6764l4.22323,7.3488l69.743,-2.12142l-0.32975,-7.8673l-58.5769,2.43575l42.34159,-22.38088l-3.83119,-7.62159z',
      'm49.45183,52.70227l7.59757,-2.01608l0.13889,18.83333l-7.48646,0.84941l-0.25,-17.66666z'
    ],
    c12: [
      'm16.106973,16.819103l-5.523639,21.76423l6.083333,5c8.361111,-1.944444 21.555557,-5.055556 23.916668,-3.166667c2.361111,1.888889 -5.555555,26.277778 -10.583333,28.75l7.833332,2.833333c5.083333,-4.638888 15.888888,-37.444443 8.25,-39.249999c-7.638888,-1.805556 -18.444444,0.888888 -26.75,2.583333l5,-18.999999l-8.226361,0.485769z',
      'm32.273643,10.485769c-0.878941,8.224593 -4.924548,25.824187 -6.428488,30.277949c-1.50394,4.453761 -6.966212,20.428353 -20.51182,29.569613l10.666667,2.333335c4.722221,-6.888889 17.611113,-11.611111 24.166666,-61.833334l-7.893025,-0.347563z'
    ],
    c1: [
      'm14.27364,13.652436l-2.856973,14.930897l5.75,4.333333c8.361111,-1.944444 22.38889,-5.555556 24.250001,-3.5c1.861111,2.055556 -0.888889,8.111111 -4.25,11.916667l6.666666,3.333333c4.25,-3.805555 9.222221,-21.61111 1.416666,-22.416666c-7.805555,-0.805556 -17.61111,1.388888 -25.916666,3.083333l1.833333,-11l-6.893027,-0.680897z',
      'm28.773641,9.652436c-0.878941,8.224593 -1.924547,15.324187 -4.928487,23.111282c-3.00394,7.787095 -11.966213,16.761688 -14.845154,19.236282l15,-7c1.222221,-1.388889 9.944445,-9.777778 11.999999,-35.166667l-7.226358,-0.180897z'
    ],
    c14: [
      'm25.95512,17.11573l-8.19332,26.39167l5.19345,6.06787c4.08963,-2.47838 51.09998,-11.99671 53.81706,-6.90421c2.71708,5.0925 -2.35195,19.51458 -7.91366,27.50415l6.05354,3.01131c7.04111,-5.3508 14.28707,-33.17295 7.18213,-37.64819c-7.10494,-4.47524 -47.63291,2.4907 -55.04858,5.253l6.77978,-22.55957l-7.8704,-1.11603z',
      'm59.14839,11.55364c-0.87894,8.22459 -4.74657,20.48483 -9.09816,28.85412c-4.35159,8.36929 -12.12759,22.20815 -31.72447,32.06132l9.02036,3.13424c0.89569,-0.83763 31.53793,-14.1918 39.33934,-62.9902l-7.53707,-1.05948z'
    ],
    s12: [
      'm18.334247,18.106982l15.665754,19.893017l-5.166667,4.5l-17,-17.833333l6.500913,-6.559684z',
      'm41.750913,11.356983c-3.389194,16.297672 -18.36172,41.762012 -34.41758,53.393018l2.916667,7.166666l36.166667,-3.749999c2.833333,-0.333333 1.000912,-7.559685 -1.999088,-8.393018l-24.834245,3.726351c6.666667,-3.722222 25.333333,-29.11111 29.499999,-49.666666l-7.33242,-2.476352z'
    ],
    s1: [
      'm18.750913,13.190316l11.499087,11.059684l-3.833333,4.666666l-12.166667,-9.333333l4.500913,-6.393017z',
      'm36.417579,7.856983c-5.389194,11.797672 -14.195053,21.095345 -25.750913,30.893017l2.583334,6.333333l34.333334,-3.916666c2.833333,-0.333333 1.000912,-6.393018 -1.499088,-7.393018l-23.334246,3.726351c5.5,-3.722222 14.333333,-13.444444 19.666666,-25l-5.999087,-4.643017z'
    ],
    s14: [
      'm32.51047,16.87509l18.99909,19.22636l-4.66668,3.83334l-20.33334,-16.50001l6.00093,-6.55969z',
      'm64.04853,11.77279c-6.3638,12.87383 -21.1217,29.31484 -46.96922,44.48752l4.08333,7.50001l61.34376,-1.17938c2.83333,-1.83333 2.49179,-7.75531 0.32512,-7.58864l-53.00221,1.72635c16.00002,-9.38889 31.14769,-21.67667 41.48101,-41.23221l-7.26179,-3.71365z'
      // 'm34.16759,23.52364l18.99909,19.22636l-4.66668,3.83334l-20.33334,-16.50001l6.00093,-6.55969z',
      // 'm62.86201,17.4681c-5.88919,14.29766 -16.37561,24.33144 -42.22313,39.50412l4.08333,7.50001l53.75001,-1.41668c2.83333,-1.83333 1.54257,-7.51801 -0.6241,-7.35134l-44.45924,1.72635c16.00002,-9.38889 26.6389,-16.93057 36.97222,-36.48611l-7.49909,-3.47635z'
    ],
    // ao34: [
    //   'm74.43183,12.98054l-7.24495,-2.3908c-3.20361,11.96905 -5.60632,16.4185 -12.72545,26.38529l4.27149,6.6742l12.63646,-2.26922c-5.51734,8.89893 -12.66984,15.20604 -20.81236,22.72563l3.47058,5.94003l32.73692,-5.1725l-2.53618,-6.05127l-22.25845,3.84879c7.16363,-6.71869 11.26828,-9.90006 18.20944,-22.31407l-3.69306,-6.94115l-11.62078,2.07936c4.31597,-6.18476 6.49621,-10.58973 9.56634,-22.51429z',
    //   'm78.28669,51.0184l4.74029,-2.86409l7.89618,20.11689l-7.13977,3.05369l-5.4967,-20.30649z'
    // ],
    // ao14: [
    //   ''
    // ],
    // ai34: [
    //   ''
    // ],
    // ai14: [
    //   ''
    // ],
    // Ei34: [
    //   ''
    // ],
    // Ei14: [
    //   ''
    // ],
    er14: [
      'm16.83182,34.02879l-0.20309,-9.08761l65.13899,-8.64227l3.62142,7.61589l-5.99064,28.63322l-6.86646,3.94289l-16.0044,-13.40852l16.02898,4.42258l3.81266,-21.40366l-59.53746,7.92748z',
      'm47.25118,23.34713l7.75642,-1.20802l0.97737,49.12114l-8.46807,-1.88988l-0.26572,-46.02324z'
      // 'm21.39994,38.5969l-0.67771,-7.4858l56.83333,-7.27776l4.33333,6.66666l-8.54167,22.16667c-0.25,0.54167 -4,4.58334 -7.875,2.87501l-13.75,-15.72223l15.79167,7.38889l6.54167,-15.70834l-52.65562,7.0969z',
      // 'm46.93697,31.35616l7.04451,-1.20802l1.33333,40.22222l-7.22222,-0.99999l-1.15562,-38.01421z'
    ],
    er: [
      ''
    ],
    $1: [
      'm26.7217,78.31606l3.77,14.98c17.17,-0.11 34,-2.06 51.17,-0.5l0.5,-7.33c-12.28,-0.33 -29.89,0.17 -45.5,0.83l-2.77,-10.98c-1.67,-0.83 -7.67,2 -7.17,3z'
      // 'm24.23,78.85l3.77,14.98c17.17,-0.11 34,-2.06 51.17,-0.50l0.50,-7.33c-12.28,-0.33 -29.89,0.17 -45.50,0.83l-2.77,-10.98c-1.67,-0.83 -7.67,2.00 -7.17,3.00z'
    ],
    $2: [
      'm54.90057,71.5827l-0.16,5.78c-16.13,1.73 -15.32,11.57 -1.4,12c13.92,0.43 17.33,-7.93 0.6,-11.8l0.8,-6.2c28.87,7.27 19.93,24.73 -1,24.4c-20.93,-0.33 -29.96,-20.92 1.16,-24.18z'
      // 'm52.31,71.82l-0.16,5.78c-16.13,1.73 -15.32,11.57 -1.40,12c13.92,0.43 17.33,-7.93 0.60,-11.80l0.80,-6.20c28.87,7.27 19.93,24.73 -1,24.40c-20.93,-0.33 -29.96,-20.92 1.16,-24.18z'
    ],
    $3: [
      'm34.98,76.08l-8.06,1.92c1.33,6.06 2.75,7.36 4.08,14.58l6.67,1.08c10.06,-7.06 28.75,-12.86 31.08,-11.58c2.33,1.28 -1.17,5.22 -3.17,10.00l6.58,4.17c3.78,-5.44 6.81,-10.64 7.42,-16.92l-7.83,-7c-14.33,3.56 -23.67,5.44 -34.33,12l-2.44,-8.25z'
    ],
    $4: [
      'm64.521485,74.492021l4.7,4.73c-10.48,8.9 -19.87,12.1 -34.9,15.05l-2.05,-6.2c17.8,-3.09 24.95,-8.49 32.25,-13.58z',
      'm42.321485,74.242021l-4.1,5.93c10.73,7.33 25.82,11.42 37.15,13.95l1.15,-7.35c-10.48,-1.84 -23.67,-5.74 -34.2,-12.53z'
    ],
    _t: [UN], // 测试用的吧
    _$: [UN], // 测试用的吧
  };
  // console.log(phth, characterMap[phth], characterMap)
  return characterMap[phth] || [UN];
};

const tempJsx = (
  <svg width="1800" height="900">
</svg>
);

const UN = '';
