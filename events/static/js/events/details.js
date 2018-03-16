$('.navimg2').on('click',function () {
      $('.event-details').slideToggle('slow');
      $('#techdiv').slideToggle('slow');
      $('.register-div').fadeOut('slow');
      $('.navimg2').addClass('navimg1');
      $('.navimg1').removeClass('navimg2');
      $('.register-link').attr("href","")
});

$('.card').on('click',function () {
      var name = $(this).attr('id');
      console.log(name);
      var femina = "<h1 style='text-align:center'>FBB Campus Princess</h1><p>\
          <i class='fa fa-circle' style='font-size:8px;'></i> Nationality: Indian Passport Holder<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> The applicant should be between 18 - 25 years of age as of December 31, 2018. The applicant will be required to produce their age proof (Passport, birth certificate, school leaving certificate, driver's license, etc).<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> Relationship Status: The applicant should be unmarried.<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> Height: 5'5\" and above(without heels)<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> Unmarried/ single/ not engaged<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> Student of any recognized educational institution.<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> If selected, the applicant will have to follow the dress code of a Black Cocktail Dress and Stilettos while walking the ramp<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> For any queries Contact Kabir Sharda: 9867327421 or email at kabir@GJ.org.in<br>\
          <i class='fa fa-circle' style='font-size:8px;'></i> The applicant must agree to abide by all rules, as changed from time to time by the Organisers.</p>\
          ";
      var dtmf = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Electric Nova</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Gear up your electric brain signals and explore this event\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The event will have two rounds.<br>Round 1: There will be a quiz based on concept of Electric and Electronics.<br>Round 2: A slide will be shown on a topic of<br>Electronics and an instant quiz will be played<br>Round 3: Circuit board design contest.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var bloopers = "<a href='http://www.greenkogroup.com/' target='_blank'><img src='static/img/events/greenko.png' style='width:15%;'></a><h1 style='text-align:center;display:inline-block;width:70%;'>Electronic Bloopers</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1> \
        <p>Passionate about Electronics? Then this one is for you. This January, come and get immersed in an exciting world of electronics. Prove your mettle by participating in this quiz.\
        <p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Coming Soon</h1>\
        </div>\
        <div class='tab-pane' id='3a'>\
        </p><h1>Rules and regulation:</h1>\
        1. It is an offline quiz event.<br> 2. Team size is 1 or 2.<br>\
        3. The event consists of two rounds.<br>\
        4. Number of teams that get selected for second round will be decided on spot based on participation.<br>\
        5. In any case, decision of organiser is final.<br> \
        <h1>Judging criteria:</h1><p>\
        1.  The team with maximum points is declared as winner.<br> \
        2.  Top three teams in second round based on the points are declared as winners.<br>\
        3.  Participation certificates are given only to those who clear round 1</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>Prize</h1>\
        <p>Prizes Worth INR 5,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organisers:</h1>\
        <p>Gowtham -9705311199<br>Abhishek Bairagi-7089079662<br>Gaurav Gijare-7058906800\
        </p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </div>\
        </div>\
        </div>";
    var iot = "<a href='http://www.greenkogroup.com/' target='_blank'><img src='static/img/events/greenko.png' style='width:15%;'></a><h1 style='text-align:center;display:inline-block;width:70%;'>IOT Challenge</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction:</h1><br>\
        <p>Being human, we have always been fascinated with gadgets, they make life simpler and work efficiently. IoT is not only making every single gadget smarter than ever before but also they are making them easily accessible across the globe. That is why this is still an active area of interest. So let's make some gadget which simplifies our life using IoT. To achieve this come and participate in this event and show what you’ve got in you to make the world a smarter place.\
        </p>\
        <p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h2>Event Description:</h2><p>\
        As the name suggests this event is based on one of the hottest topics in today’s world that is, internet of things. This event checks the basic level knowledge of the student in the field of IOT.<br>\
        This event will consist of three rounds namely,<br>\
        Qualification round<br>\
        Second round<br>\
        Final round<br>\
        The qualification will test the amount of knowledge the student has in very basic level things related to IOT.<br>\ The second round will check the basic arduino knowledge of the student and the final round will be totally based on Arduino UNO.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.  Maximum of three people are allowed to participate in a group.<br>\
        2.  Every participant should be registered which can be done before hand or on the spot.<br>\
        3.  Arduino boards and other required components will be provided.<br>\
        4.  Organisers decision is final in all matters.<br>\
        5.  In the case of a tie the one who is faster to implement will be awarded.<br>\
        6.  Any kind of malpractices will not be entertained and the participant will be disqualified.<br>\
        <h1>Judging criteria:</h1><p>\
        The team with maximum points at the end will be declared as winner. The participants who enter the second round will be given participation certificates.\
        </p>\
        </div>\
        <div class='tab-pane' id='4a'>\
          <h1>Prize:</h1>\
          <p>Prize:INR 20,000*/-</p>\
          <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organisers:</h1>\
        <p>\
        Ketan iyengar-9769563302<br>\
        Rishideep-9542853064<br>\
        Sam Chalyanth - 9705684020<br>\
        Srujana-9515594498</p>\
        <p>Will be updated soon</p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </div>\
        </div>\
        </div>\
        ";
    var jugaad= "<a href='http://www.greenkogroup.com/' target='_blank'><img src='static/img/events/greenko.png' style='width:15%;'></a><h1 style='text-align:center;display:inline-block;width:70%;'>Jugaad IT</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1><p>\
        One of the important works of an electric student is to debug a circuit. This event will test your ability to understand the circuit and debug it. You will have to tweak the circuit given to you to make it work according to the Event Description.\
        </p><p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Event Description</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> Round 1<br>\
         This round will be theoretical and some general question on electronics will be asked.<br><br> \
        <i class='fa fa-circle' style='font-size:8px;'></i> Round 2<br>\
        In this a circuit will be given to the each team. The circuit which will be given to each team will be identical.The required information will be given about the circuit. <br>\
        The participants are also allowed to google about the circuit.</p> \
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1. The main goal of round one is to select 8 teams out of all the teams.<br>\
        2. Team size can be 1 to 3</p>\
        <h1>Judging criteria:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The performance in the first round will decide who goes to next     round.<br> \
        <i class='fa fa-circle' style='font-size:8px;'></i> The team which finishes debugging and fixing the circuit is declared as winner<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Organiser verdict is the final and binding</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>Prize</h1>\
         <p>Prizes Worth INR 10,000*/-</p>\
         <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organisers:</h1>\
        <p>Pran prateep-9494688054<br>Sumanth-9640493740<br>Saketh-8790774329 <br>Md Bilal-8125908531</p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </div>\
        </div>\
        </div>\
        ";
    var junkyard ="</a><h1 style='text-align:center;display:inline-block;width:70%;'>Mecholites</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Where all the mechanical engineers at?\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The event will have two rounds.<br>Round 1: There will be a quiz based on concept of Mechanics.<br>Round 2: Identification of mechanics used in the work of mechanical field</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 100/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var bridge = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Bridge The Gap</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Let's see if the 'CIVILIANS' are notorius here.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The event will have a rapid fire quiz based on concept of Civil Engineering.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var salesman ="<a href='http://www.greenkogroup.com/' target='_blank'><img src='static/img/events/greenko.png' style='width:15%;'></a><h1 style='text-align:center;display:inline-block;width:70%;'>Salesman of Fest</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction:</h1>\
        <p>This events tests the sales capability of participants and also shows their convincing power. We believe that sales is also one of the quality of entrepreneurship. This tests that quality.</p>\
        <p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Coming Soon</h1>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1>\
        <p>Every participant gets the same amount of products that they need to sell to random people.</p> \
        <h1>Judging Criteria:</h1>\
        <p>Whoever sells them all first wins the event.</p>\
        <h1>General Rules</h1>\
        <p>1.  Team size could be of 3-5 members<br>\
        2.  All members of the team should be enrolled as students in an  educational institute.<br>\
        3.  No person can be a part of more than one team.<br>\
        4.  Decision of Judges will be final and binding.</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>Prize</h1>\
        <p>Prizes Worth INR 3,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organisers:</h1>\
        <p>Keshav Chouksey</p>\
        <p>+91 9424485766</p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </div>\
        </div>\
        </div>\
        ";
    var crowd = "<h1 style='text-align:center;display:inline-block;width:70%;'>Bridge The Gap</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction:</h1>\
        <p>This event encourages people to express their idea in front of the crowd. This event focusses on the skills required for pitching in front of large crowds. Pitch is the first thing that is required by any entrepreneur. The main aim of the event is to decide the best pitch.</p>\
        <p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Coming Soon</h1>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event Rules:</h1><p>\ 1.  Every participant is given a virtual money which he can invest in other people’s ideas.<br>\
        2.  No participant cannot spend any money on his own idea. <br>\
        3.  No participant cannot spend more than half of the money on one idea.<br>\ 4.  Each participant has to spend his money on at least three ideas.<br>\
        <h1>Judging criteria:</h1><p>\
        The idea that receives maximum virtual money wins the event.<br>\
        </p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>Prize</h1>\
        <p>Prizes Worth INR 3,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organizers</h1>\
        <p>Keshav Chouksey</p>\
        <p>+91 9424485766</p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </div>\
        </div>\
        </div>\
        ";
    var cadpro = "<a href='http://www.greenkogroup.com/' target='_blank'><img src='static/img/events/greenko.png' style='width:15%;'></a><h1 style='text-align:center;display:inline-block;width:70%;'>CADPRO</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction:</h1>\
        <p>CAD PRO Design Challenge will test your designing skills in 3D design software and here, you have to prove your expertise in a challenging scenario where you race against time.</p>\
        <p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Event Description</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> It will be an on-spot designing round. Participants will be given a Event Description at the time of event and they have to submit their design in the specified time limit.<br>\<i class='fa fa-circle' style='font-size:8px;'></i>  Each Question will carry some points according to the type of question and its level of difficulty.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Models can be prepared in any CAD software (CATIA/Pro E/AutoCad/Solidworks/Solidedge) and the final file must be prepared in IGES or STEP format. Bring your own laptops with necessary softwares installed.<br>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.Each team can have a maximum of two participants.<br>\
        2.There will be a prelim round in case the participation exceeds<br>\ 3.Decision of the organizers will be final and binding. No claim will be entertained against the announced results.<br>\
        <h1>Judging criteria:</h1>\
        1.Any sign of plagiarism from internet or from other participant will lead to direct disqualification.<br>\
        2.Participant can only submit once. In case of multiple submissions only the first entry will be considered for evaluation.<br>\
        3.The design will be evaluated on the following aspects:<br>\
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A. Originality of the Design<br>\
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B. Clear and easily comprehensible design<br>\
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C. Time Taken<br><br>\
        4.Certificate of Merit and Prizes will be given for the top two teams.<br>\
        5.Participation Certificate will be given for those who registered online and participated in the event.<br>\
        6.Participation Certificate is not guaranteed for those who registered onspot for the event.<br>\
        7.Disqualified teams will not be considered for any certificates. </p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>Prize</h1>\
        <p>Prizes Worth INR 15,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organisers:</h1>\
        <p>Akshar kota-9440021015<br>Radhakrishna -9704179963<br>vijay-9492867842<br>Akhil George-9445299569</p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </p>\
        </div>\
        </div>\
        </div>\
        ";
    var drift = "<a href='http://www.greenkogroup.com/' target='_blank'><img src='static/img/events/greenko.png' style='width:15%;'></a><h1 style='text-align:center;display:inline-block;width:70%;'>Drift King</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction:</h1>\
        <p>Want to try making an IC engine? Drift king gives you a chance to design a machine with given constraints. In this event, the contestants are expected to make to an IC engine powered machine, that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track packed with a number of obstacles.</p>\
        <p>Event will be on 10th or 11th Febuary 2018</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Event Description:</h1>\
        <p>In this event ,the contestants are expected to make to an IC engine powered machine ,that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track packed with a number of obstacles.\
        <br><br><a  href='/static/pdf/driftking.pdf'><button class='btn2'>Event Description PDF</button></a>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Rules and Regulations:</h1><p>\
        1.Team can have a max of 4 people.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.All members of team need to register for the event<br>\
        5.Students from different educational institutes can form a team.</p>\
        <h1>Certification Policy:</h1><p>\
        1. Certificate of Merit and Prizes will be given for the top two teams.<br>\
        2. Participation Certificate will be given for those who registered online and participated in the event.<br>\
        3. Participation Certificate is not guaranteed for those who registered onspot for the event<br>\
        </p></div>\
        <div class='tab-pane' id='4a'>\
        <h1>Prize</h1>\
        <p>Prizes Worth INR 50,000*/-\ </p>\ <p>Prizes will be given after April 2nd 2018</p>\ <h1>Organisers</h1>\
        <p>sachin - 7207873406<br>Ayush Negi - 828003282<br>Sai Sandeep - 9177785183<br>Lokesh - 9010880613<br>Trinadh - 9666254100</p>\
        <h1>Contact:</h1>\
        <p><a href='mailto:techy@GJ.org.in'>techy@GJ.org.in</a></p>\
        </div>\
        </div>\
        </div>\
        ";
    var robowars = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Mecholites</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Talk is cheap, show me the code.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The event will have a quiz based on concepts of Programming.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 100/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var robosoccer = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Best Out Of Waste</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Wasted enough? Create much.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>There will be a model presentation.<br>The student have to make a technical model out of waste products only.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 4-5 members.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 400/- per team.\
        </div>\
        </div>\
        </div>\
          ";
    var robopirates = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Net - Hunt</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Ever cleared a semester in 1 night? Well, this is for you.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>Topic will be given on the spot. The student will be given some time to search and study about the topic on the Internet.<br>There will be a quiz based on that topic.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var linerobot = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Ancient Trifles</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Anybody here reads literature?.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>ROUND 1 :- Quiz based on the Modern History along with certain common abbreviation.<br>ROUND 2 :- Quiz based on Medieval History.<br>ROUND 3 :- Quiz based on Ancient History.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var aquanet = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Robo Soccer</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Aha! That's the we all been waiting for!!\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>Classic Robo Soccer game.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 3-4 members.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 300/- per team.<br>\
        6.Robots can be wired or wireless.<br>\
        7.Operating Battery = 12Volts.<br>\
        8. No locking System.<br>\
        9. Body dimension = 40x40 cm (max).<br>\
        10. Mouth Dimension = 10cm (max) [excluding body Dimension]<br>\
        </div>\
        </div>\
        </div>\
        ";
    var galileo = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Chemergence</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>For the ones that indulge too much into the Bio-Engineering.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The event will have two rounds.<br>Round 1: There will be a quiz based on on concepts of Environment ,Chemical and Biology.<br>Round 2: Extempore based on topics of Chemical, Biotech, and Environment Engineering.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var enigma = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Apti-Shots</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Unleash the power of PDP.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>ROUND 1 :- There will be a quiz based on the concept of verbal , non- verbal, logical reasoning along with aptitude.<br>ROUND 2 :- The qualifying student has to face the personal interview.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1-2 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var hackamaze = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Start Up Hindustan</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>For all the future Elon Musks.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>There will be a model presentation. The student has to make a presentation on a Start-up Idea as a Entrepreneur.<br>Top teams (winners) will be sent to Incubation Centre and forwarded to TSS. Senthil sir.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 3-4 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 300/- per team.\
        </div>\
        </div>\
        </div>\
          ";
    var quest = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Bang D Juncture</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>G-E-N-E-R-A-L knowledge\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>It is a time based quiz on the topic of general knowledge and current affairs.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var algo = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Copy If YOu Can</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>The event only A Copy Cat can win at! Maybe?\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The student has to copy a file(any file) from one folder to another by breaking a barrier.<br>Bring your own Pen drives.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";

    var automobile ="</a><h1 style='text-align:center;display:inline-block;width:70%;'>RoboWar(Tracking)</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Classic Old Robowars.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>1. Robots will be wired based or wireless.<br>2. Operating Battery = 12V.<br>3. Weight of Robots = max 10 kg.<br>4. Body dimension = 40x40 cm (max)<br>NOTE :-  Measurement will  be taken very carefully otherwise the teams will be disqualified.<br>(There will be various hurdles on the track).</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 3-4 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 300/- per team.\
        </div>\
        </div>\
        </div>\
          ";
    var scitech = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Clash Of Logo</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Put on your designer hats.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The student has to design a logo on a certain logic.<br>[NOTE-   * The topic will be given on the spot.<br>*The student can use any software according to his/her need.]</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
        var breakfree = "<h1 style='text-align:center'>AajaNachle(SoloDance)</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size:1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;' ><a onclick='return groupDance();' id='groupdance' style='color:white' href='#2a' data-toggle='tab'>&nbsp;Rules</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#5a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>Aaja Nachle is the Solo Dance competition of GyanJyoti where various contestants participate to showcase there talent<br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\
        </div>\
        <div class='tab-pane' id='2a'><br>\ <h1>Qualifier round</h1> \
        <p> <i class='fa fa-circle' style='font-size:8px;'></i> All dancers will showcase their choreography for 2 minutes<br>\</p>\
         	<i class='fa fa-circle' style='font-size:8px;'></i> The usage of heavy props(Chairs,etc) is NOT permitted</p>\
          	<i class='fa fa-circle' style='font-size:8px;'></i> Only registered entries are allowed to participate in the event.</p>\
           	<i class='fa fa-circle' style='font-size:8px;'></i> Each participant will be evaluated by the judges.</p>\
        <h1>Round 2: Final</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only participants shortlisted from qualifier can participate in this round.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> In this round participant will be tested by the judges<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The performance should not exceed 4 minutes<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final and binding<br>\
        </div>\
        <div class='tab-pane' id='5a'>\
        <h1>PRIZES:</h1>\
        <p>1st Prize Rs.1500/-</p>\
        2nd Prize Rs.1000/-</p>\
        3rd Prize Gifts/-</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </p>\
        </div>\
        </div>\
        </div>\
        ";
    var nrithyanjali = "<h1 style='text-align:center'>Kakli Dhamaal (DuetDance)</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Rules</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        </p><h1>Qualifier</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> All dancers will showcase at the qualifier rounds<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> In this round participant will be tested by the judge<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only registered entries are allowed to participate in the event.</p>\
           	<i class='fa fa-circle' style='font-size:8px;'></i> Each participant will be evaluated by the judges.</p>\
        <h1>Round 2: Final</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only participants shortlisted from qualifier can participate in this round.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> In this round participant will be tested by the judges<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The performance should not exceed 4 minutes<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final and binding<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
         <h1>PRIZES:</h1>\
        <p>1st Prize  Rs.3000/-</p>\
        2nd Prize  Rs.2000/-</p>\
        3rd Prize  Gifts</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </p>\
        </div>\
        </div>\
        </div>\
        ";
    var stepup = "<h1 style='text-align:center'>Chak De Fatte (GroupDance) </h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Rules</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>Rules</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> A preliminary round will be held to shortlist the teams<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> All teams of hcst need toper form for 2 minutes (minimum) to 3 minutes (maximum) in front of panel.Only shortlisted teams will be allowed to participate in the finals <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> On Stage Time : 8 Minutes; 6 minutes is for the performance and 2 minutes is for miscellaneous use which includes entry, exit, setting up etc<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Number of participants (size of the crew) :4 - 8 member<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Exceeding the time limit will lead to deduction of points</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The competition music must not contain in appropriate , lewdor offensive language.</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Extra fittings / props are allowed with an exception of fire related ones or pyrotechnics. Backdrops, scenery are permitted provided they can be carried on, setup and removed with in 10 seconds of being called on to the stage or at the completion of the performance.</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Atire may include accessories such as hats, caps, gloves, scarves, jewelery, etc. Removing pieces of clothing during the performance is permited provided if it is not offensive or out of character. Clothing that is too short, suggestive or inappropriate for the age of the performer is not allowed.</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Glass Bangles are not alowed</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Each team wil be evaluated by the judges on the folowing criteria : skils, musicality, performance, creativity and selection of song.</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges will be final.</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st Prize Rs.1500/-</p>\
        2nd Prize Rs.1000/-</p>\
        3rd Prize Gifts</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";
      var vibrazione = "<h1 style='text-align:center'>Ek Taal: A Solo Singing Competition</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>Wanna put your singing skills to the test? Got a versatile voice that can mesmerize everyone? Put your heart to it and sing your way to glory!.Its a solo singing competition.\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time limit per participant is 4 minutes.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> This is a single round event.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Indian and western songs are allowed in this category. Both will be judged together.<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st Prize Rs.1500/-</p>\
        2nd Prize Rs.1000/-</p>\
        3rd Prize Gifts</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";




    var octave = "<h1 style='text-align:center'>Taal Se Taal:A Duet Singing Competition</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        </p><h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time limit per participant is 4 minutes.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> This is single round event.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only Indian songs are allowed.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st Prize Rs 2500/-</p>\
        2nd Prize Rs 2000/-</p>\
        3rd Prize Gifts </p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";

    var djwars = "<h1 style='text-align:center'>Tak Dhin-Taa</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time limit for participants is 6 minutes.(Including max 2 minutes for assembling)<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> This is single round event.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Maximum 8 members are Allowed & Minimum 4.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only Indian songs are allowed.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final.<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1></p>\
        1st Prize Rs.3000/-</p>\
        2nd Prize Rs.2000/-</p>\
        3rd Prize Gifts</p>\
        <h1>ORGANISERS:</h1>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";
    var nukkad ="<h1>Rang manch:A street-play competition</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>\
        Haven't you ever wanted to change the way our country functions? Well, it's time to be the change you want to see!<br><br>\
        GJ 2018 is bringing Forward, Nukkad Natak-A Street Play Competition.<br>\ It is all about creating awareness about social problems that plague our soil and bringing about realization in our youth!</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> On Stage Time: 10 Minutes; 8 minutes is for the performance and 2 minutes is for miscellaneous use which includes entry, exit, setting up etc.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Number of participants (size of the crew): 6-10members.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The dialogues must not contain inappropriate, lewd or offensive language.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Extra fittings/ props are allowed with an exception of fire related ones or pyrotechnics. Backdrops, scenery are permitted provided they can be carried on, set up and removed within 5 seconds of being called on to the stage or at the completion of the performance.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Attire may include accessories such as hats, caps, gloves, scarves, jewelry , etc. Removing pieces of clothing during the performance is permitted provided if it is not offensive or out of character. Clothing that is too short, suggestive or inappropriate for the age of the performer is not allowed.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Exceeding the time limit will lead to negative points.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final and binding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> As per the norms, no mic will be provided.<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st Prize Rs.6000/-</p>\
        2nd Prize Rs.3500/-</p>\
        3rd Prize Rs.2000/-</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>";/////

    var andaaz = "<h1 style='text-align:center'>Annt Akshar</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> Team of three is allowed <br> \
        <i class='fa fa-circle' style='font-size:8px;'></i> The last word said by the last performing team should be the first word of the song for the following team<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> No abusive songs allowed.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time given for thinking the song would be 10 sec. If the Time exceeds The team will be disqualified.<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st PRIZE Rs.2500/-</p>\
        2nd PRIZE Rs.1500/-</p>\
        3rd PRIZE Gifts/-</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>";
    var stage = "<h1 style='text-align:center'>The Stage:Stage play</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>What’s life without a bit of DRAMA? <br>GJ2018 brings you yet another new event where you get to the audience emotionally with your vivid acting skills.Come, participate and take us to another world of story-telling and drama.</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The event will be conducted in one round.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There is no specific theme for this event.The participants are free to choose any theme.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Languages preferred are English, Hindi, and Telugu.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Duration of the play should be 20-30 minutes(including stage setup time).<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Registrations must be done on-line for this event.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> The team size should be 5-15 members.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Stage play comprises of multiple scenes and may have blackouts.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Backstage voiceovers and narrations are allowed during the performance.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Pre-recorded music is allowed and should be brought in a pen drive in .mp3 format only. It will not be allowed in any other form.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i >Participants will be provided a laptop and are expected to appoint someone to sit and play during the performance.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Music may also be played live. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Participants will be provided a light control box, from which the lighting on the stage can be controlled.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Any kind of fluids, live animals, flame, heavy and sharp objects or any other material which has a possibility of damaging the stage is STRICTLY not allowed.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time limit should be strictly followed failing which there will be deduction in your respective score.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Inappropriate content or content defaming any political party or religious group is strictly prohibited. There should not be any direct implication against anyone.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Use of unparliamentary language is strictly prohibited and will lead to disqualification.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The props required for the play should be brought by the participants itself.However,large props like chairs and tables etc. can be arranged, but the participants have to inform earlier.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i>The decision of the judges and organizers will be final and binding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i>The organising team has the complete right to change the prize money if the participation is less than five.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Acting<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Direction<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Screenplay <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Overall Impact</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.15,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>ORGANISERS:</h1>\
        <p>Bharath - 9989493337</p>\
        </div>\
        </div>\
        </div>";
    var voice = "<h1 style='text-align:center'>Lend Your Voice</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>A perfect opportunity to test your ability to be creative and prompt together with the presence of mind. Ever thought that you could have delivered the dialogues better than the actors in the movie? Then this is the right place for you to be.GJ & ηvision 2018 presents a unique event \"Lend Your Voice\" </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> The contestants are provided with an option of a few ACTION HERO VIDEOS.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> They will be given half hour to choose the video.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> After choosing the video the participants will be given another half hour for preparation in which they are supposed to come up with a humorous and entertaining version of the video by putting their own voice into the characters.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> They are then supposed to perform it on stage while the video is being played, with the actual dialogues muted.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> All the videos will be 1 min long</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> It consists of only one round.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The participants will be given a given a movie clipping one hour before the competition.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> During the competition, the audio of the clipping will be muted, and the participants have to make out their own dialogues and deliver it parallel in sequence with the video and must make it as funny as possible.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The clippings will be given in English, Telugu or Hindi as per your choice.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> You will be judged based on the dialogues you make and the way you present it.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Use of unparliamentary language is strictly prohibited and will lead to disqualification.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges and organizers is final and binding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The organising team has the complete right to change the prize money if the participation is less than six.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Dialogue presentation<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Creativity</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.2,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>ORGANISERS:</h1>\
        <p>Will be updated soon</p>\
        </div>\
        </div>\
        </div>\
        ";
    var film = "<h1 style='text-align:center'>Film Fare Fiesta: A Short film Competition</h1>\
        <h1 style='text-align:center'>Lend Your Voice</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>Do you think you can take after Steven Spielberg, Christopher Nolan and James Cameron? Make your own short film, enthral and captivate movie buffs with your creativity. The stage at GJ & ηvision 2018 is set for you. Get judged by esteemed people in film industry.</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i>  All the entries are judged on the first day to shortlist 6 out of them. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> These 6 will be judged on second day by esteemed judges.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Run time should not be more than 20 minutes<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Atleast one member from each team should be present while the judgement is taking place.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Movie should be shot at a minimum resolution of 480 pixels. Marks might be reduced due to poor video/ audio quality.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Any attempt at copyright infringement can lead to immediate disqualification.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Plagiarism is accepted with due credits.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Films in languages other than English, Hindi, and Telugu should be accompanied with subtitles.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Participants should send their videos/youtube links of the videos to laxmi.g@GJ.org.in. GJ ID of the contestant must be included in the mail.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only those short films which are shot and released after 1st july 2017 would be accepted.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the organizers and the judges is final and binding. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The organising team has the complete right to change the prize money if the participation is less than six. <br></p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Script<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Direction<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Screenplay<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Costumes<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Dialogues<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Cinematography<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Sound editing/ mixing<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Visual effects<br></p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.5,000*/-<br>\
        </p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>ORGANISERS:</h1><p>\
        Pradhyumna M Dinni - 9492586679<br>\
        Sandy Sharma - 7288958195</p>\
        </div>\
        </div>\
        </div>\
        ";

    var picelectic = "<h1 style='text-align:center'>Picelectic: Competition for best pictures taken during GJ & ηvision 2018</h1>\
        <h1 style='text-align:center'>Lend Your Voice</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>\
        Portray your photography skills by shooting pictures in,on and about GJ & ηvision 2018. There will be 2 winners announced each day of the 3 days the fest goes on. The pictures can be submitted any time near the counter that is allocated.</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There are no online registrations for this event.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There are only on-spot registrations available for this event.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The captures must be only during the 3 days of the GJ & ηvision 2018 fest and only inside HCST Mathura premises.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The pics must be taken only using a Digi-cam or a Bluetooth enabled mobile (for transfer purpose).<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Winner is judged according to the moments captured in the best way.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The organising team has the complete right to change the prize money if the participation is less than ten.<br>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.3,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>ORGANISERS:</h1>\
        <p>Will be updated soon</p>\
        </div>\
        </div>\
        </div>\
        ";

    var art = "<h1 style='text-align:center'>Manzira</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Must contact cultural dept. for the availability of the instrument playing if not, bring your own.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> In this round participant will be tested by the judges.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The performance should not exceed 4 minutes.<bR>\
        <i class='fa fa-circle' style='font-size:8px;'></i> 1 min extra will be provided for setup (if required).<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Exceeding the time limit will lead to negative points.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Pre-recorded sounds are not allowed.</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final and binding.</p>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st PRIZE Rs.2000/-</p>\
        2nd PRIZE Rs.1500/-</p>\
        3rd PRIZE Gifts</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";
    var face ="<h1>Face off With Beats</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>FORMAT:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The songs must be related to 90’s theme and relevant decent songs.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> original composition will be given extra weightage.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Bring your Instruments, Except drum kit.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> A maximum number of 8 participants per team is allowed.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> An individual may play for only one band.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The band members have to be college students only.  Kindly bring your college id.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> 5 minutes   on   stage for setup   time   will   be provided extra.</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Only 15 minutes are given to perform..<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Exceeding the time limit will lead to negative points.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Obscenity on stage will be strictly prohibited.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Pre-recorded sounds are not allowed.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Judge’s decision will be final and binding and are not open to review.<br>\
        </div>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st PRIZE Rs.8000/-</p>\
        2nd PRIZE Rs.6000/-</p>\
        3rd PRIZE Rs.3000/-</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";
    var nail ="<h1>Nail Art</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>Can you add your intricate details creatively on much smaller canvas like finger nails? Then come, show up your talent in 'Nail Art' of GJ & ηvision 2018!!</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Registrations will be done on the spot during GJ & ηvision 2018.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Each Team must consist of 2 members.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The following materials will be provided to you:<br>\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Nail polishes<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Nail art pens<br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> The event goes on for all the three days during the fest.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Winners will be declared for each of the three days.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Contestants shall use only the paints provided to them by the organizers.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There will be a time limit of 7 minutes and you should complete in that time.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges and the organisers is final and abiding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The organising team has the complete right to change the prize money if the participation is less than five.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ Neatness<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time duration<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Attractiveness</p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>Organizers</h1>\
        <p>Will be updated soon.</p>\
        </div>\
        </div>\
        </div>\
        ";
    var mehendi ="<h1>Mehendi Art</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>Mehndi adorns the hands and Life takes on a new color. So let the henna flow out of your cones and let's see what color it brings to your life.</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> Registrations will be on the spot during GJ & ηvision 2018.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Each Team must consist of 2 members.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Mehendi cones will be provided by the organisers.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Designs are of your own choice.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There will be a time limit of 1 hour.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There is no limit on the number of cones. You can use as many as you want<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> You will be allowed to put mehendi only one hand.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of judges and organisers is final and abiding.</br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The organising team has the complete right to change the prize money if the participation is less than five.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ Attractivness<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Creativity<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Neatness </p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>ORGANISERS:</h1>\
        <p>Will be updated soon.</p>\
        </div>\
        </div>\
        </div>\
        ";
    var clay = "<h1 style='text-align:center'>Clay Modelling</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event format</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p>Come! Bring life to figments of your own thoughts and imaginations by moulding beautiful structures out of clay! Win exciting prizes!!</p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>EVENT FORMAT:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> Registrations will be on the spot during the fest.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The following materials will be provided to you<br>\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Polymer clay<br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Paints (if required)<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> One can select his/her own theme or model. Every participant will be given limited amount of clay and time, so one has to really plan out his model so as to not run out of clay.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> The amount of clay and paint provided will be limited.Team size should be less than 3.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The final results will be announced on the final day of GJ & ηvision 2018.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the organisers and judges is final and abiding to all.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The organising team has the complete right to change the prize money if the participation is less than five.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> Creativity<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Finishing </p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000*/-</p>\
        <p>Prizes will be given after April 2nd 2018</p>\
        <h1>ORGANISERS:</h1>\
        <p>Will be updated soon.</p>\
        </div>\
        </div>\
        </div>\
        ";
    var rj = "<h1 style='text-align:center'>Muquabla(Instant Dance)</h1>\
        <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#4a' data-toggle='tab'><i class='fas fa-trophy'></i>&nbsp;Organizers & Prizes</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
        <p></p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>RULES AND REGULATIONS:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i> Dancers will dance to the music played by the Organizers. The dance style performed will be in accordance with the music played.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> On Spot Registrations will close 1 hour before the commencement of the event<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The dance battle will either be 1 vs. 1 or 2 vs. 2 depending on battle category through the following rounds.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Quarter Finals<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Semi Finals<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Finals<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the judges is final.<br></p>\
        </div>\
        <div class='tab-pane' id='4a'>\
        <h1>PRIZES:</h1><p>\
        1st PRIZE Gifts/-</p>\
        2nd PRIZE Gifts/-</p>\
        3rd PRIZE Gifts/-</p>\
        <h1>For Contact:</h1><p>\
        Luv Madaan (EC) - 9711845494</p>\
        </div>\
        </div>\
        </div>\
        ";
    var treasure = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Treasure Hunt</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The student has to copy a file(any file) from one folder to another by breaking a barrier.<br>Bring your own Pen drives.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var lan = "<h1 style='text-align:center'>Need For Speed</h1><h1>ABOUT</h1>\
        <p><br>\
        Come join us for a fun filled day of gaming.<br>\
        Let’s find out, who is the pro!</p>\ <h1></h1><p>\
        <h1>RULES</h1><p>\
        <p>Rules:-<br>1.A lab game <br>2. Singles lap race<br>3. Winners will be participant completing the race in minimum team</p>\  ";
    var destination = "<h1 style='text-align:center'>Chess</h1>\
        <h1>ABOUT</h1><p>\
        <br>\
        GJ brings to you a real treasure, if you can find it!!</p>\ <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The rooks are placed on the outside corners, right and left edge.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The teams should assemble 30 min before the start of the game.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The knights are placed immediately inside the rooks.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The bishops are placed immediately inside of the knights.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The queen is placed on the central square of the some color that of that of the player: white queen on the white square and black queen on the black square.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The kings takes the vacant spot next to the queen<br>\
        <p></p>";
    var food= "<h1 style='text-align:center'>100 METER RACE</h1>\
        <h1>ABOUT</h1>\
        <p></p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Participants completing in minimum time will be winner<br>\
        <p></p>";
    var casino = "<h1 style='text-align:center'>BOLLYWOOD TADKA</h1><h1>ABOUT</h1><p>\
        <h1>ABOUT</h1>\
        <p></p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> There will be buzzer round<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> A quiz will be conducted related to the Bollywood.<br>\
        <p></p>";
    var minute = "<h1 style='text-align:center'>Selfie Swag</h1>\
        <h1>ABOUT</h1>\
        <p>1. The event is hosted on <a href='https://www.instagram.com/gyanjyoti2k18/' target='_blank'>Instagram</a>.<br>2. Send your pictures @ 8865837389.</p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Single pics to be posted<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Pic getting maximum like, share, comments<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Pics will be on instagram and likes will be traced.</p>\
        <p></p>";
    var madads = "<h1 style='text-align:center'>MINI MILITIA</h1>\
        <h1>ABOUT</h1><p>\
        </p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> App will be provided on the spot (no hacked version)<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Time limit 6 min<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Maximum 5 players in a team.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Bring  your own devices.<br>\
        </p>\
        <p></p>\
        ";
    var ramp = "<h1 style='text-align:center'>BADMINTON (SINGLE)</h1>\
        <h1>ABOUT</h1>\
        <p></p>\
        <h1>RULES</h1>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Individual game for boys and girls<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Rackets are provided by us<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Game point will be decided according to situation<br>\
        <p></p>\
        ";
    var social = "<h1 style='text-align:center'>BADMINTON (DOUBLE)</h1>\
        <h1>ABOUT</h1>\
        <p></p>\
        <h1>RULES</h1>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Individual game for boys and girls<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Rackets are provided by us<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Game point will be decided according to situation<br>\
        <p></p>\
        ";
    var wheel = "<h1 style='text-align:center'>SHOOT AT BASKET</h1>\
        <h1>ABOUT</h1><p>\
        </p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> 10_*+chances  will be given<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Participants will maximum basket will be declared as winner.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Individual participation for boys and girls.</p>\
        <p></p>\
        ";
    var snakes = "<h1 style='text-align:center'>GULLY CRICKET</h1>\
        <h1>ABOUT</h1><p>\
        </p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Maximum 6 members will be given in a team.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> 2 Girls are compulsory. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Lbw is not valid.</p>\
        <p></p>\
        ";
    var plane ="<h1 style='text-align:center'>GULLY CRICKET</h1>\
        <h1>ABOUT</h1><p>\
        </p>\
        <h1>RULES</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Maximum 6 members will be given in a team.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> 2 Girls are compulsory. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Lbw is not valid.</p>\
        <p></p>\
        ";
    var coffee = "<h1 style='text-align:center'>FUTSAL</h1>\
        <h1>ABOUT</h1>\
        <p></p>\
        <h1>RULES</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> 4 Players on court - rolling substitutions (5 a side team)<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Played to lines , Ball is returned to play with a kick-in .<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Outdoor grass pitch <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> All players allowed to enter the penalty area.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> No height restriction on ball.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Use of square goals(3m by 2m).</p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> 4 foul limit ; No wall fordirect free kick from 10m after 4th foul.<br>\
        <p>NOTE - Ground size 32m by 18m .<br>\
        (Penalty spot 4m ; Penalty area 4m semicircle ; Halfway line 16m ; Halfway circle 2m radius .) <br>\
        </p>\
        <p></p>";
    var socialnet = "<h1 style='text-align:center'>Dart</h1>\
        <h1>ABOUT</h1>\
        <p>\
        <h1>RULES</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> Dart board(or)Balloons are shot by the dart pins given to the participant.<br>\
        </p>";
    var harlemshake = "<h1 style='text-align:center'>Much more events</h1>\
        <h1>ABOUT</h1>\
        <p>Click on the below button to see more events.<br>\
        <h1></h1>\
        <p> <br>\</p>";
    var GJejung = "<h1 style='text-align:center'>GJ-E-Jung</h1><p>\
        Travel on a double bass and riff through the jungle which has creatures who are calm like a bomb. GJ is back with its signature Event, the metal battle. Get ready to put the stage on Wildfire.<br>\
        'For those about to rock, we salute you!'' - AC/DC<br>\
        <h1>Event Format</h1>\ <p><i class='fa fa-circle' style='font-size:8px;'></i> This event will consist of 2 rounds</p>\  <h1>Prelims:</h1>\ <p><i class='fa fa-circle' style='font-size:8px;'></i> Each band interested in participating should upload their demos/videos to google drive  and share the link with <a href='mailto:kabir@GJ.org.in'>kabir@GJ.org.in</a>.\
        <br>and fill out this <a href=\"https://goo.gl/forms/hSrqpXdRgnQ8Bv8K2\">form</a>.<br>(Do not upload more than 2 videos in the drive link.)</p>\<i class='fa fa-circle' style='font-size:8px;'></i>  Out of this 5 bands will be shortlisted, and will be performing at GJ-e-Jung prelims, GJ 2018.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Each band will be given 20 minutes to perform including sound check.</p>\
        <h1>Finals:</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> Winners of the prelims will go through the finals.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Each band will be given 20 mins to perform on stage including sound check (subjected to changes).<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The winner and the first runner up will be given prizes. (Not yet decided).</p>\
        <h1>Rules and Regulations:</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> Language of songs is not a criterion. The band can be fully instrumental as well. The genre of the band should be any variation of metal. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> No band can have more than 7 members. Also, no person can play for more than 2 different bands.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The bands cannot share the same frontman.<br>\ <i class='fa fa-circle' style='font-size:8px;'></i> HCST Mathura reserves the right to shift any band's slot timings at any point of time before the prelims.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> In case of any damage to the provided equipment, the band will be fined for the damage and may be disqualified.<br>\ <i class='fa fa-circle' style='font-size:8px;'></i> The decision is dependent on the nature of the damage and the judges' discretion. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> HCST Mathura reserves the right to cancel the event in case of some unforeseen circumstances.<br>\ In case of any dispute the decision of the organizers will be final and binding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Consumption of Alcohol and Drugs is strictly prohibited on Campus.</p>\
        <h1>Contact Person:</h1><p>\
        Kabir Sharda<br>\
        kabir@GJ.org.in<br>\
        9867327421</p>\
        ";
    var manthan = "<h1 style='text-align:center'>Manthan</h1>\
        <h1>Event Format</h1>\ <p><i class='fa fa-circle' style='font-size:8px;'></i> This event will consist of 2 rounds</p>\  <h1>Prelims:</h1>\ <p><i class='fa fa-circle' style='font-size:8px;'></i> Each band interested in participating should upload their videos on a google drive and share the link with <a href='mailto:kabir@GJ.org.in'>kabir@GJ.org.in</a>. Fill ut this <a href='https://goo.gl/forms/PBGzR7Zo0DTLIoEQ2'>form</a> as well.<br><i class='fa fa-circle' style='font-size:8px;'></i> Don't upload more than 2 videos in the drive link.<br>\ <i class='fa fa-circle' style='font-size:8px;'></i>  Out of this 5 bands will be shortlisted, and will be performing at Manthan prelims, GJ 2018.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Each band will be given 20 minutes to perform including sound check.<br>\
        <h1>RULES AND REGULATIONS</h1>\
        <p><i class='fa fa-circle' style='font-size:8px;'></i> Any non-professional band is allowed to register. You need not be a college band to participate in this event.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Language is no criterion. We are looking for bands that play fusion music (anything except metal) and in any language.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Registering team should send/upload one demo in the process of registration. The demo need not be a studio recording.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Incorrect information will result in disqualification, whether discovered prior to, during or after the finals and the Candidate shall be liable to the Organizers for such misrepresentation.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Candidates must conduct themselves in a proper manner and portray high moral standards. Candidates will not consume any alcoholic beverages, use illegal drugs or public smoking or use foul language or should not misconduct in any way during the course of the entire event.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The Judges' decision shall be final and binding for all.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision of the organizers with respect to line-up is final and abiding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The GJ 2018 team holds the right to change the rules at any moment of time.</p>\
        <h1>JUDGING CRITERIA</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The winners of the prelims will go through to the finals.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The winners will be announced by the judges immediately after the event. Judge’s decision is considered final and should be abided by everyone.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> All the finalists will be given the participation certificates.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The Prize will be distributed only among the top 2 contestants.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The crowd‘s response is considered important.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The following will be looked in the contestants/bands performance:<br><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Entertainment<br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Public involvement<br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Energy<br>\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:8px;'></i> Attitude<br><br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The winner and the first runner up will be given prizes. (Not yet decided).</p>\          <h1>Rules and Regulations:</h1><p>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Language of songs is not a criterion. The band can be fully instrumental as well. The genre of the band should be any variation of metal. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> No band can have more than 7 members. Also, no person can play for more than 2 different bands.<br>\<i class='fa fa-circle' style='font-size:8px;'></i>  The bands cannot share the same frontman.<br>\ HCST Mathura reserves the right to shift any band's slot timings at any point of time before the prelims.<br>\ <i class='fa fa-circle' style='font-size:8px;'></i> In case of any damage to the provided equipment, the band will be fined for the damage and may be disqualified.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> The decision is dependent on the nature of the damage and the judges' discretion. <br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> HCST Mathura reserves the right to cancel the event in case of some unforeseen circumstances.<br>\ <i class='fa fa-circle' style='font-size:8px;'></i> In case of any dispute the decision of the organizers will be final and binding.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i> Consumption of Alcohol and Drugs is strictly prohibited on Campus.</p>\      <h1>Contact Person:</h1>\
        <p>Kabir Sharda<br>\
        kabir@GJ.org.in<br>\
        9867327421</p>\
        ";
    var detective = "<h1 style='text-align:center'>StandUp Comedy</h1>\
        <p></p>\
        <h1>Rules:</h1><p>\ <i class='fa fa-circle' style='font-size:8px;'></i>  If your chance to level up and do in front of audience. Wise cracks and one-liners always draw applause, here's your.<br>\
        <i class='fa fa-circle' style='font-size:8px;'></i>  Time Limit: 2-5 Min.</p>\
        </p>";
    var conclave = "<h1 style='text-align:center'>Much more events</h1>\
        <h1>ABOUT</h1>\
        <p>Click on the below button to see more events.<br><a href='fine.html' target='_blank'><button>Know More</button></a><br>\
        <h1></h1>\
        <p> <br>\</p>";
    var elmatrico = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>PhysiZone</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>An event for all the physics geeks.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>The event will have two rounds<br>Round 1: The event will have a quiz based on basic Physics understanding.<br>Round 2: This round will have a quiz based on basic concepts of engineering physics.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var quadcopter = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Web Creation</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Fastest designer wins.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>ROUND 1 :- The student has to design the Webpage showing the particulars.<br>[NOTE- Particulars to be added will be announced on spot.]</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1-2 members.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var paperpt = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>Best Out Of Waster</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Trust us maths is a beauty.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>There will be a model presentation.<br>The student have to make a technical model out of waste products only.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 4-5 members.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 400/- per team.\
        </div>\
        </div>\
        </div>\
          ";
    var helloworld = "</a><h1 style='text-align:center;display:inline-block;width:70%;'>MathOnauts</h1>\
          <ul  class='nav nav-tabs'>\
        <li class='active' style='font-size: 1.1em;margin: 1%;'>\
        <a style='color:white' href='#1a' data-toggle='tab'><i class='fa fa-align-justify' aria-hidden='true'></i>&nbsp;Introduction</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#2a' data-toggle='tab'><i class='fas fa-question-circle'></i>&nbsp;Event Description</a>\
        </li>\
        <li class='' style='font-size: 1.1em;margin: 1%;'><a style='color:white' href='#3a' data-toggle='tab'><i class='fas fa-exclamation-triangle'></i>&nbsp;Rules & Regulations</a>\
        </li>\
        </ul>\
        <div class='tab-content'>\
        <div class='tab-pane active' id='1a'>\
        <h1>Introduction</h1>\
          <p>Trust us maths is a beauty.\
          </p>\
        </div>\
        <div class='tab-pane' id='2a'>\
        <h1>About:</h1>\
          <p>Round 1: There will be a quiz  based on concepts of Mathematics.<br><br>*Questions can be aptitude types.<br>Round 2 :- Students have to solve few differential and integral equations in a particular time.</p>\
        </div>\
        <div class='tab-pane' id='3a'>\
        <h1>Event rules:</h1><p>\
        1.A team may consist of a maximum of 1 member.<br>\
        2.No person can be a part of more than one team.<br>\
        3.All students must carry a valid identity card<br>\
        4.Organizer’s decision shall be treated as final and binding on all.</p>\
        5.Participation fees is 50/- per head.\
        </div>\
        </div>\
        </div>\
          ";
    var def = "<h1 style='text-align:center'>Coming Soon...</h1>";


    if(name == "dtmf") {
      $('#details').html(dtmf);
    } else if (name == "bloopers") {
      $('#details').html(bloopers);
    } else if (name == "iot") {
      $('#details').html(iot);
    } else if (name == "jugaad") {
      $('#details').html(jugaad);
    } else if (name == "junkyard") {
      $('#details').html(junkyard);
    } else if (name == "bridge") {
      $('#details').html(bridge);
    } else if (name == "salesman") {
      $('#details').html(salesman);
    } else if (name == "crowd") {
      $('#details').html(crowd);
    } else if (name == "cadpro") {
      $('#details').html(cadpro);
    } else if (name == "drift") {
      $('#details').html(drift);
    } else if (name == "robowars") {
      $('#details').html(robowars);
    } else if (name == "robosoccer") {
      $('#details').html(robosoccer);
    } else if (name == "robopirates") {
      $('#details').html(robopirates);
    } else if (name == "linerobot") {
      $('#details').html(linerobot);
    } else if (name == "helloworld") {
      $('#details').html(helloworld);
    } else if (name == "aquanet") {
      $('#details').html(aquanet);
    } else if (name == "galileo") {
      $('#details').html(galileo);
    } else if (name == "enigma") {
      $('#details').html(enigma);
    } else if (name == "hackamaze") {
      $('#details').html(hackamaze);
    } else if (name == "algo") {
      $('#details').html(algo);
    } else if (name == "quest") {
      $('#details').html(quest);
    } else if (name == "automobile") {
      $('#details').html(automobile);
    } else if (name == "scitech") {
      $('#details').html(scitech);
    } else if (name == "breakfree") {
      $('#details').html(breakfree);
    } else if (name == "nrithyanjali") {
      $('#details').html(nrithyanjali);
    } else if (name == "stepup") {
      $('#details').html(stepup);
    } else if (name == "vibrazione") {
      $('#details').html(vibrazione);
    } else if (name == "octave") {
      $('#details').html(octave);
    } else if (name == "djwars") {
      $('#details').html(djwars);
    } else if (name == "nukkad") {
      $('#details').html(nukkad);
    } else if (name == "andaaz") {
      $('#details').html(andaaz);
    } else if (name == "stage") {
      $('#details').html(stage);
    } else if (name == "voice") {
      $('#details').html(voice);
    } else if (name == "film") {
      $('#details').html(film);
    } else if (name == "picelectic") {
      $('#details').html(picelectic);
    } else if (name == "art") {
      $('#details').html(art);
    } else if (name == "face") {
      $('#details').html(face);
    } else if (name == "nail") {
      $('#details').html(nail);
    } else if (name == "mehendi") {
      $('#details').html(mehendi);
    } else if (name == "clay") {
      $('#details').html(clay);
    } else if (name == "rj") {
      $('#details').html(rj);
    }else if (name == "lan") {
      $('#details').html(lan);
    }else if (name == "destination") {
      $('#details').html(destination);
    }else if (name == "food") {
      $('#details').html(food);
    }else if (name == "casino") {
      $('#details').html(casino);
    }else if (name == "minute") {
      $('#details').html(minute);
    }else if (name == "madads") {
      $('#details').html(madads);
    }else if (name == "social") {
      $('#details').html(social);
    }else if (name == "wheel") {
      $('#details').html(wheel);
    }else if (name == "snake") {
      $('#details').html(snake);
    }else if (name == "plane") {
      $('#details').html(plane);
    }else if (name == "coffee") {
      $('#details').html(coffee);
    }else if (name == "socialnet") {
      $('#details').html(socialnet);
    }else if (name == "harlemshake") {
      $('#details').html(harlemshake);
    }else if (name == "GJejung") {
      $('#details').html(GJejung);
    }else if (name == "manthan") {
      $('#details').html(manthan);
    }else if (name == "femina") {
      $('#details').html(femina);
    }else if (name == "ramp") {
      $('#details').html(ramp);
    }else if (name == "conclave") {
      $('#details').html(conclave);
    }else if (name == "detective") {
      $('#details').html(detective);
    }else if (name == "elmatrico") {
      $('#details').html(elmatrico);
    }else if (name == "paperpt") {
      $('#details').html(paperpt);
    }else if (name == "quadcopter") {
      $('#details').html(quadcopter);
    }else {
      $('#details').html(def);
    }





      var id = $(this).attr('id');
      var link = "/register/"+id;
      console.log(id);
      $('#reglink').attr('href','/register/'+id);
      $('#techdiv').slideUp('slow');
      $('#cultdiv').slideUp('slow');
      $('#onlinediv').slideUp('slow');
      $('#litrdiv').slideUp('slow');
      $('#infidiv').slideUp('slow');
      $('#biggiesdiv').slideUp('slow');
      $('.event-details').slideToggle('slow');
      $('.register-div').fadeIn('fast');
      if (id == 'breakfree') {
        $('.register-div').fadeOut('fast');
      }
      $('.navbtn img').addClass('navimg2');
      $('.navbtn img').removeClass('navimg1');
      $('.register-link').attr("href",link);



    });

    function groupDance() {
      $('.register-link').attr("href",'register/groupdance');
      $('.register-div').fadeIn('fast');
    }

    function soloDance() {
      $('.register-link').attr("href",'register/solodance');
      $('.register-div').fadeIn('fast');
    }

    function duet() {
      $('.register-link').attr("href",'register/duet');
      $('.register-div').fadeIn('fast');
    }
