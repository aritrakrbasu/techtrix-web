import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import automata from '../assets/automata.png'
import geeks from '../assets/geeks.png'
import flagship from '../assets/flagship.png'
import gaming from '../assets/gaming.png'
import artfact from '../assets/art fact.png'
import outofthebox from '../assets/out of the box.png'
import robotics from '../assets/robotics.png'

function EventModal() {
    let { eventDetails } = useParams();
    var  types ={
        "need-for-speed-dual-race" : {
            name:"Need for Speed (Dual Race)",
            eventDetails : `The winner ain't the one with the fastest car <br><br>

            Burn your tyres and disappear the track in smoke, the speed rage is here. But, this time you need to hold your bot and find your buddy, because TechTrix 2022 is all set to make NFS more exciting with buddies. <br><br>
            
            When speed and strategy combines track bleed. Show us your skills and snatch the winning title, if you think it's yours. But, like every battlefield you need to follow some- <br><br>
            
            <b>Rules And Regulations</b> <br><br>
            <ul>
                <li> It will be 1 vs 1 racing event from the beginning. Completing the track before the opponent should be the main target. A race where time will be of least importance. </li>
                <li> This is a racing event so fastest and the most balanced robots will win.</li>
                <li> Robots who defeat their opponents in faceoff will qualify for the following rounds.</li>
                <li> Teams who chose to quit or cannot complete the track will not be considered while shortlisting candidates for the next round.</li>
                <li> No two team should share the same robot. </li>
                <li> Stepping on the track is forbidden. Failing to abide will lead to disqualification without any refunds.</li>
                <li> Participants will be provided with a standard 220-volts 50 Hz AC power supply outlet. The outlet will be roughly placed in the center of the arena.</li>
                <li> At no time after the beginning of the round should the participants touch the bots. All the resets will be done by the people in charge. Touching of bots can be done only at the time of technical timeouts. Details of technical timeout will be disclosed on the day itself.</li>
                <li> The robot should fit in a box of dimension 30cm x 30cm x 30cm.</li>
                <li> The robot may be wired or wireless. No extra points for wireless robots. But for wireless, it is mandatory to use dual frequency remote or else it will lead to disqualification.</li>
                <li> For wired bots, the length of the wire should be sufficient enough to cover the entire track. A minimum length of 7 m should be used to ensure this.</li>
                <li> Maximum weight of robot should not be more than 3kgs.</li>
                <li> The potential difference between any two points should not exceed 24 V DC at any point of time during the run. </li>
                
            <br><br>
            </ul>
            <b>COORDINATOR:</b>
            SAGEN SOREN- 9523803373. <br>
            ALOK KUMAR- 8583078558. <br> <br>
            <small>(**CO-ODINATOR MAY SUBJECTED TO CHANGE ANY RULES IF REQUIRED.)</small>
            
            `,
            img : robotics
        },
        "road-rash-single-race":{
            name : "ROAD RASH (SINGLE RACE)",
            eventDetails: `"The winner isn’t the one with the fastest car" <br> <br>

            Burn your tyres and disappear the track in smoke, the speed rage is here. But, this time you need to hold your bot and find your buddy, because TECHTRIX 2022 is all set to make NFS more exciting with buddies. <br> <br>
            
            When speed and strategy combine track bleed. Show us your skills and snatch the winning title, if you think it's yours. But, like every battlefield you need to follow some- <br> <br>

            <b>RULES AND REGULATIONS:</b>
            <ul>
                <li>This is a time-based racing event so fastest and the most balanced robots will win. </li>
                <li>All the rounds will be solo races with increasing arena complexities towards the finals. </li>
                <li>Time taken by the robots to complete the track will be the only criteria of judgement for qualification to the next round. </li>
                <li>Teams who chose to quit will not be considered while shortlisting candidates for the next round in any case. </li>
                <li>No two team should share the same robot.</li>
                <li>Stepping on the track is forbidden. Failing to abide will lead to disqualification without any refunds. </li>
                <li>Participants will be provided with a standard 220-volts 50 Hz AC power supply outlet. The outlet will be roughly placed in the centre of the arena. </li>
                <li>At no time after the beginning of the round should the participants touch the bots. All the resets will be done by the people in charge. Touching the bots will lead to disqualification. </li>
                <li>The robot should fit in a box of dimension 30cm x 30cm x 30cm. • The robot may be wired or wireless. No extra points for wireless robots.  But for wireless, it is mandatory to use dual frequency remote or else it will lead to disqualification. </li>
                <li>For wired bots, the length of the wire should be sufficient enough to cover the entire track. A minimum length of 7 m should be used to ensure this. </li>
                <li>Maximum weight of robot should not be more than 3kgs. External control device shall not be considered for weight and size measurement. </li>
                <li>The potential difference between any two points should not exceed 24 V DC at any point of time during the run.  </li>
            </ul>

            <b>COORDINATOR:</b>
            Shubham sadhu- 8002490015 <br>
            Ritam Biswas- 7278024495 <br><br>
            <small>(**CO-ODINATOR MAY SUBJECTED TO CHANGE ANY RULES IF REQUIRED.)</small>
            
            
            `,
            img : robotics
        },
        "final-kick-soccer" : {
            img : robotics,
            name : "FINAL KICK (SOCCER)",
            eventDetails: `"Your love makes me strong; your hate makes me unstoppable!” – Cristiano Ronaldo <br><br>
            Can we replace Ronaldo with Bot? No, we cannot, but we can assemble those magical legs in our bot. Yes, we are talking about the most exciting Robo Soccer (Final Kick) event from Techtrix 2022. <br>
            If you think your bot can kick the final shot and lift up the winning title then get your laces tight and show why we should serve the winning title. The good part is that you are alone enough to take part in this exciting event. <br>
            So, what are you waiting for? Register yourself now and be a part of this mesmerizing Tech Fest (Techtrix). <br><br>

            <b>RULES AND REGULATIONS:</b>
            <ul>
                <li> The game will start at the count of 3 given by referee followed by whistle. In case a team starts its robot before the whistle, the game will be restarted and a team making this mistake for more than 3 times will be disqualified.
                <li>Each team will have to defend the goal on its side as well as score the goal on the opposite side.
                <li>Each team can have a maximum of 5 team members.
                <li>The ball can be either dragged or pushed by the team. But cannot have any holding or gripping mechanism.
                <li>One half-length will be 4 minutes.
                <li>Maximum 3 members per team will be allowed to remain close to field for operating the robots.
                <li>In case of jam up of robots for more than 30 seconds the robots will have to kick-off again at the order of the referee.
                <li>In case of any discrepancy the final decision rests in the hands of coordinators.
                <li>Any act of misbehaviour or misconduct will lead to immediate 
                <li>The robots are not allowed to use grippers or actuations which are intended to harm the opponent’s robot.
                <li>Any type of war or destructive mechanisms are not allowed.

            <b>COORDINATOR:</b>
Sayan Mridha- 8697431076 <br>
Abhirup Tapadar- 7003794044 <br><br>

<small>(**CO-ODINATOR MAY SUBJECTED TO CHANGE ANY RULES IF REQUIRED.)</small>

            `,
        },
        "street-fighter-lightweight-war-5-kg" : {
            img : robotics,
            name : "FINAL KICK (SOCCER)",
            eventDetails : `"Break my wheels and get ready to roll" <br>
            Fighting on street to fighting in cage blood changes from red to black! Don't trust me? Check this amazing robotic event in Techtrix 2022 and be ready to see my words live. 
            If you trust your bot to win against the previous champions then we warmly welcome you here. But remember to bring your specs, because when the beast steps in sparks come out. 
            Before participating, check these rules first- <br><br>
            
            DESIGN SPECIFICATIONS<br><br>

 Specifications:<br>
1. Dimensions of the bot (35 x35x35) cm. (zero tolerance)<br>
2. The weight of the machine should not exceed 5 Kgs (10% tolerance). All batteries   should be on board. The weight of the remote controller will not be counted.<br>
3. Only wedge bots are allowed.<br><br>

 Mobility<br>
Mobility methods that are NOT allowed:<br>
1. Flying (using air foil, helium balloons, ornithopters, etc.) is not allowed.<br>
2. The robots should not secure itself on the ring surface by using suction cups,<br>
diaphragms, sticky treads, glue or other such devices.<br><br>

Robot Control Requirements:<br>
1. The robot can be controlled by wired or wireless.<br>
2. Control must be exhibited over all of its functions and positions. Although autonomous functions within the bot are acceptable; the controller must be able to remotely disable or override these functions at any time. Note that any damage due to this function is the responsibility of the team, and there must compulsorily be a manual emergency stop (E-stop) function that can be controlled from the radio controller to manually override this autonomous function in case of emergency.<br>
3. If a team has two bots in a same category separate driving system and separate operator should be there.  <br><br>

Battery and Power:<br>
1. The machine must be powered electrically. Use of an IC engine in any form is not<br>
allowed. On-board batteries must be sealed, immobilized-electrolyte types (such as gel cells, lithium, NiCad, NiMH, or dry cells).<br>
2. The voltage between any 2 points on the machine should not exceed 36V DC at any point in time. Participants will have to bring their own converters for standard power supply according to Indian standards.<br>
3. During match change of voltage between 2 points is not allowed.<br><br>

Weapon Systems:<br>
1. Robots cannot have any kind of magnetic weapons, cutters, saws.<br>
2. Following weapons cannot be used:<br>
a. Liquid projectiles (Foam, liquefied gases).<br>
b. Any kinds of inflammable liquids.<br>
c. Weapons causing invisible damage (Electrical weapons, RF jamming weapons
and others).<br><br>

Match Duration and Type:<br>
Matches will consist of 4 minutes of active fight time exclusive of any time-outs. Hence, it is not binding but advisable to keep battery capacity, power usage and machine defences such that they can sustain a 4-minute fight. The matches can be of the following types:
1. Match: A regular 1-on-1 combat between two robots<br>
2. Rumble: A combat between more than two robots simultaneously<br>
A detailed document of rules regarding the format and rules to be followed during the event days shall be uploaded later, and the participants will be informed.<br>
<br>
Criteria for victory<br>
a. Aggression (5 points)<br>
b. Control (3points)<br>


<b>COORDINATOR:</b><br>
ROHIT DAS: 8584032804.<br>
(**CO-ODINATOR MAY SUBJECTED TO CHANGE ANY RULES IF REQUIRED.)


            `
        },
        "-mortal-kombat-heavyweight-war-15-kg":{
            img : robotics,
            name : "MORTAL KOMBAT (HEAVYWEIGHT WAR 15 KG)",
            eventDetails : `"I made a choice. This is our Tournament, remember? Mortal Kombat. We fight it."  <br><br>

            Don't think you need much clues after this! Yes, the battle cage is ready to punish your big monster. Check your gears and grease the axles. There's nothing small in a 15kg robo war, neither the pain nor the gain. <br><br>
            
            Experiencing Mortal Kombat behind the fence is far more exciting than virtual reality. The dazzling sparks inside the cage and the bleeding bots start the storm in the crowd.
            
            So, get ready to show up your skills, Tectrix 2022's most awaited battleground is here! <br><br>
            
            
            DESIGN SPECIFICATIONS<br>

Specifications:<br>
1. There will be no restrictions on the dimensions of the bot.<br>
2. The weight of the machine should not exceed 15 Kgs. All batteries   should be on board. The weight of the remote controller will not be counted.<br>
3. All type of bots are allowed.<br>

Mobility:
Mobility methods that are NOT allowed:<br>
1. Flying (using air foil, helium balloons, ornithopters, etc.) is not allowed.<br>
2. The robots should not secure itself on the ring surface by using suction cups,
diaphragms, sticky treads, glue or other such devices.<br>
<br>
Robot Control Requirements:<br>
1. The robot can be controlled by wired or wireless.<br>
2. Control must be exhibited over all of its functions and positions. Although autonomous functions within the bot are acceptable, the controller must be able to
remotely disable or override these functions at any time. Note that any damage due to this function is the responsibility of the team, and there must compulsorily be a manual emergency stop (E-stop) function that can be controlled from the radio controller to manually override this autonomous function in case of emergency.<br>
3. If a team has two bots in a same category separate driving system and separate operator should be there. <br> <br>

Battery and Power:<br>
1. The machine must be powered electrically. Use of an IC engine in any form is not<br>
allowed. On-board batteries must be sealed, immobilized-electrolyte types (such as gel cells, lithium, NiCad, NiMH, or dry cells).<br>
2. The electric voltage between any 2 points on the machine should not exceed 36V DC at any point in time. Participants will have to bring their own converters for standard power supply according to Indian standards.<br><br>

Weapon Systems:<br>
1. Robots can have any kind of magnetic weapons, cutters, flippers, saws, lifting devices,
spinning hammers etc. (if they qualify the criteria mentioned below) as weapons.<br>
2. Following weapons cannot be used:<br><br>
a. Liquid projectiles (Foam, liquefied gases).<br>
b. Any kinds of inflammable liquids.<br>
c. Weapons causing invisible damage (Electrical weapons, RF jamming weapons
and others).<br>

Match Duration and Type:<br>
Matches will consist of 3 minutes of active fight time exclusive of any time-outs. Hence, it is not binding but advisable to keep battery capacity, power usage and machine defences such that they can sustain a 3-minute fight. The matches can be of the following types:<br>
1. Match: A regular 1-on-1 combat between two robots<br>
2. Rumble: A combat between more than two robots simultaneously a detailed document of rules regarding the format and rules to be followed during the event days shall be uploaded later, and the participants will be informed.<br><br>

Criteria for victory:<br>
a. Aggression<br>
b. Control<br>
c. Damage<br>


<b>Coordinator:</b><br>
Rohit Das: 8584032804.<br>
(**CO-ODINATOR MAY SUBJECTED TO CHANGE ANY RULES IF REQUIRED.)


            `
        },
        "the-legend-of-zelda-pick-a-place":{
            img : robotics,
            name : "PAC-MAN (LINE FOLLOWER)",
            eventDetails: `"People are fascinated by Robots because they are machines which can mimic life" - -Colin Angle <br><br>

            Do you remember the first time, when you saw robots operate autonomously, and it felt magical? That wonderful, magnificent moment! Which had only occupied screens and plays, in front of your eyes in the real world! Autonomous Robots were the first, to show the magic of technology to all of us, and make us believe in the marvellous power of science! <br>
            So come and experience the glorious technology of line follower robots, only at Techtrix’22!!! <br><br>
            
            Rules And Regulations:<br>
            Round 1 track will be made public two days before the event.<br>
            Round 2 track will be made public only after the successful completion of round 1 and publication of 2nd round qualifiers.<br>
            No two teams should participate with the same robot.<br>
            Computers, programmers and software need to be arranged by the team themselves. We will provide two/three pin sockets with proper ground connection.<br>
            The competition is only for autonomous robots, no manual robots will be entertained.<br>
            The robots should be able to process data on-board. No remotely kept computer should control the robots.<br>
            The robots have to be designed by the team itself.<br>
            Usage of commercially available modules such as sensors, development boards, etc. are allowed; but it is forbidden to use complete robotic-system which is sold readymade for the purpose of this competitions such as Lego kits. <br>
            Time taken to complete track will be only awarded to participants who complete the track. Those who fail to complete the entire track or quit mid-way will not be awarded any points and loses their chance to go to next levels.<br>
            The robot should fit in a box of dimension 30cm x 30cm   No limitations on height.<br>
            The maximum weight should not be more than 3 kg.<br>
            The robot can be powered electrically only (internal or external).<br>
            The electric voltage between 2 points should not be more than 20V DC at any point of time in the run.<br>
            Track will have multiple sections.<br>
            There will be a checkpoint after each section.<br><br>
            <b>COORDINATOR:</b> <br>
            Soham Maity- 7980026839.<br>
            (**CO-ODINATOR MAY SUBJECTED TO CHANGE ANY RULES IF REQUIRED.)
            `
        },
        "bgmi--mobile-gaming":{
            img : gaming,
            name : "BGMI- MOBILE GAMING",
            eventDetails : `“The real battle for your own soul isn't about falling from a great height; it's about descending, or not, one choice at a time.”
            ― Jim Butcher, Battle Ground <br><br>
            
            Get ready to fight the ultimate gaming event where you have your eyes glued to the screen! The ultimate battle which will determine your victory.
            Techtrix brings to you the ultimate battle field game BGMI..!<br><br>
            
            
            GENERAL RULES:<br>
            
            Each team will register to the coordinators 15mins prior to the match. Timing of the match will be notified by the conducting coordinator at the time of the event.<br>
            All the candidates must have an EXP level of minimum 40 to enter the lobby.<br>
            After settling down, room ids and password will be provided to the registered team with slot number.<br>
            Everyone must update the game to the latest version and prepare yourself with the map of Erangel.<br>
            Devices will not be provided by us including its accessories. Candidates must bring their own headphones and power banks.<br>
            Use of triggers and hacks are strictly prohibited. <br>
            Virtual players are not allowed. All members must be present at the venue.<br>
            Every candidate registers themselves for a single match. The winners and the runners up get the prize.<br>
            Ipads or tablets are not allowed to participate.<br>
            Event will take place on first come first serve agenda.<br>
            Total players limit in each lobby:<br>
            DUO- 30teams<br>
            SQUAD- 16teams<br>
            In case of duo, single players will not be allowed to enter the lobby. For squad, minimum of 3 players are required to enter the lobby upon clearing the registration fees of a full squad.<br>
            Prize pool will be notified later depending on registration.<br>
            Registration fees for duo is Rs40 per team and for squad is Rs60 per team.<br><br>
            
            <b>COORDINATOR:</b><br>
            Saunak Dasgupta- 6290 570 032
            
            `
        },
        "pes-2021-or-2020--mobile-gaming" :{
            img : gaming,
            name : "PES 2021 OR 2020",
            eventDetails : `“Do you know what my favourite part of the game is? The opportunity to play.”  - Mike Singletary <br>

            The implacable determination to create a revolutionary football tournament. Our ambition to create the perfect football experience, from the grass on the pitch, to the players' movement, all the way to the crowds in the stadium. Techtrix gives you an opportunity to show your sport spirit in football!!!Get ready for a revolutionary football gaming experience with PES.<br>
            
            GENERAL RULES:<br>
            Tournament will take place n the form of a knockout tournament.<br>
            All registered will play against their opponent using their own mobile data as assigned by the coordinators.<br>
            As tournament proceeds, the number of teams will decrease to 2, who would be eligible for prize pool as winner and runners up.<br><br>
            
            Rules<br>
            Team strength of each player should not exceed 3000.<br>
            They can contain up to 3 iconic moment players.<br>
            Match can only be restarted in case of network issues or glitches. Coordinators will take care of that issue.<br>
            Every match would be played as an online friend match.<br><br>
            
            <b>Coordinator:</b><br>
            Abhishek Dutta- 7980041993.
            `
        },
        "valorant--pc-gaming" : {
            img : gaming,
            name : "VALORANT",
            eventDetails: `"Too many problem-solving sessions become battlegrounds where decisions are made based on power rather than intelligence." ~ Margaret J. Wheatley <br><br>

            Get ready to fight, shoot and enjoy the virtual reality of team battling! Switch on your PCs and Laptops and get into the field of battle!!! Take part in “Valorant-Pc”... at Techtrix<br><br>
            
            RULES AND REGULATION:<br>
            Things to keep in mind before registering:<br>
            A total of eight matches will be played per day in this three day tournament except the final day where nine matches will be played. Timings will range from anywhere between 11 am to 8 pm.<br>
            The maximum cap for our tournament is 24 teams. Registrations will be accepted on a first come first serve basis. No teams will be considered after the first 24 teams have completed their registrations, but refunds will be granted for ineligible teams.<br>
            Brackets will be published publicly for all the teams to see as soon as the registration cap is reached.<br>
                    
            No re-scheduling will be done once the brackets have been published. Register only if you and your team are available anywhere between 11 am - 8 pm during 7th, 8th and 9th of April.<br>
            Timings will depend on the slot of matchups present in the bracket. The matchups which come first in the brackets will get afternoon slots whereas the later matchups will receive evening and night slots.<br>
            Teams failing to show up for their respective matches within the given time frame will be subject to disqualification and no refunds will be granted.<br>
            No refunds will be granted once the teams have completed their registration.<br>
            Teams are requested to report 15 mins prior to their official match timings. In case of any delay a maximum of 10 mins will be allotted to every team to report for the match else they will be met with a disqualification.<br>
            Our college will not be providing any sort of gear for the participants. Each participant must carry their own mouse, keyboard, headphone/earphone and mousepad. If an active player shows up without his/her gear and is unable to play their match, their team will be subject to a disqualification unless they find a replacement.<br>
            Notes:<br>
            In case of a disqualification, the opponent team will be granted the win.<br>
            A team will be considered present, if and only if all five of the active players have reported before the match has begun. Stand-ins will be considered as active players, if any of the players from the main lineup fails to show up on time.<br>
            Any non-present teams post the 10 min buffer time will immediately be disqualified. For example, if a team comes with four players and fails to find a fifth before the given time, they will be disqualified.<br>
            Pre-Game:<br>
            Map veto will be done 10 mins before the start of the match. Representatives from both the teams must be present at the time of veto.<br>
                    Mode of Veto: Coin Toss<br>
            Each team will be given 10 mins for warming up before their matches begin.<br><br>
            Match Creation:<br>
            The on-site admin will be responsible for creating the match lobbies and inviting all the players.<br>
            Lobby settings:<br>
            Party Status: Close<br>
            Map: Depends on the VETO<br>
            Default Server: Mumbai<br>
            Cheats: Off<br>
            Mode: Tournament<br>
            Overtime Win By Two: On<br>
            Play out all rounds: Off<br>
            Hide Match History: Off<br>
            Only the players and the admin will be present in a match lobby, any other observers/coaches will not be allowed.<br>
            Pauses:<br>
            Each team will be allowed one tactical pause per map. Players can call for one by typing “/to” or “/timeout” in the chat box. Using more than one tactical pause on a single map can lead to a disqualification.<br>
            For a technical pause, players must contact the on-site admin and mention beforehand in all chat about the need for one. Each team will be granted 5 mins of pause time for technical issues after which the games will be resumed. To start a technical pause, players must access the pause timer from in-game settings.<br>
            Tournament Info:<br>
            All matches except the finals will be played out in a best of one format. The finals will be played in a best of three format. All of the matches in the tournament are in single elimination (knockout) format.<br>
            Only the first and second team are eligible for the prize money.<br>
            Byes will be given randomly to teams. Teams which get byes to the second round don’t need to report on the first day of the tournament (on 7th).<br>
            Admins and co-ordinators reserve all rights to change, modify or adapt tournament rules as deemed necessary to uphold and maintain a spirit of sportsmanship, and ensure that the tournament runs smoothly.<br>
            In case of any on-site dispute, the admin's decision will be final.<br>
            No lobbies/games will be rehosted. The only scenario where lobby/game rehosting will be allowed is when the match has been started on a wrong map. In which case, all players must leave the game and wait for the admin to rehost the match.<br>
            All agents and maps are available to be played.<br>
            
            <b>Coordinator:</b><br>
            Souhit: 87776 74199
            `
        },
        "minds-eye-entrepreneurship":{
            img : flagship,
            name : "MIND’S EYE (ENTREPRENEURSHIP)",
            eventDetails: `“The true entrepreneur is a doer, not a dreamer 💫” <br>
            Let the big ideas of yours not go to waste, let your ambitions take shape, and for all these to happen you, my fellow visionary has to give it a start. Pitch in your plan as we take up a seat to lend you an ear. <br><br>
            
            GENERAL RULES:<br>
            To be declared.<br><br>
            
            <b>COORDINATOR:</b><br>
            Joy Sinha: 8777817728.
            `
        },
        "extempore":{
            img : flagship,
            name : "EXTEMPORE",
            eventDetails: `“The true entrepreneur is a doer, not a dreamer 💫”<br>
            Let the big ideas of yours not go to waste, let your ambitions take shape, and for all these to happen you, my fellow visionary have to give it a start. Pitch in your plan as we take up a seat to lend you an ear. <br><br>
            
            GENERAL RULES:<br>
            To be declared.<br><br>
            
            <b>COORDINATOR:</b> <br>
            Pijush Ganguly: 87776 85511.
            `
        },
        "competitive-programming":{
            img: automata,
            name: "COMPETITIVE PROGRAMMING",
            eventDetails : `“ Coders are today’s rock stars”<br>
            If you are one of those programmers who like to ponder about solutions when thrown with a witty problem. Don’t worry, we got you! Presenting you the favorite event of all the cp enthusiasts, the COMPETITIVE PROGRAMMING. Happy coding to the rockstars! 😉<br>
            Rules:<br>
            To be declared.<br><br>
            Coordinator:<br>
            Dipesh Shaw: 8809468338.
            `
        },
        "bug-finder":{
            img: automata,
            name: "BUG FINDER",
            eventDetails : `“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupéry <br><br>
            Are you ready to find the “BUG” in code? Who knows you may find the bug in a blink of an eye or may like as easy a breath taken time!! Just give it a try to learn and explore the world of mischievous code “bugs”...participate in TECHTRIX’s…“BUG FINDER”.<br>
            Rules:<br>
            To be declared.<br><br>
            Coordinator:<br>
            Dipesh Shaw: 8809468338.
            `
        },
        "hackathon":{
            img: automata,
            name: "Hackathon",
            eventDetails : `“Everybody has a creative potential and from the moment you can express this creative potential, you can start changing the world.”
            -  Paulo Coelho. <br><br>

Hackathon enriches young and novice minds and rears in them the process of realizing their own capabilities. Through the thorough and exhilarating process of problem-solving one not only hones their technical and imaginative power, but they also become aware of the common man’s problem and in turn the reality of society.<br>

Techtrix 2022, brings to you, Hackathon, an event where you will not only be able to do all that’s mentioned but also have immense fun and form a strong network that will push your limits for the rest of your life. In order to have a once-in-a-lifetime opportunity, bring your pals, form a team, and register for Hackathon 2022.<br><br>

RULES:<br>
To be declared.<br>
COORDINATOR:<br>
Joy Sinha: 8777817728.<br>
`
        },
        "antakshari":{
            img: automata,
            name: "Antakshari",
            eventDetails : `“guess if you can, and choose, if you dare”
            Pierre corneille<br><br>
            
            
            Are you, someone who knows every song in Bollywood?<br>
            Can you guess the movie, by just looking at what an actor is wearing?<br>
            Do you remember everything you hear?<br>
            <br>
            Intrigued?<br>
            Well, wait no more. Techtrix 2022 brings to you ANTAKSHARI, our innovative and mind-boggling take on this old-school game.<br><br>
            
            Prelims<br>
            The qualifying round of ANTAKSHARI will consist of three rounds: <br>
            1. ‘Shabd-Jaal’ (Word Passing)<br>
            2. ‘Mein Hoon Kaun’ (Dumb Charades)<br>
            3. ‘Meri Awaaz Suno’ (Audio Round)<br><br>
            
            Marking Schemes:<br>
            Shabd Jaal<br>
            Five marks for each right song.<br>
            No minus marking in this round.<br><br>
            
            Mein Hoon Kaun<br>
            Ten marks for identifying and singing the right song.<br>
            Bonus five marks for guessing the movie’s name, right.<br>
            Minus five for identifying the incorrect song.<br><br>
            
            Meri Awaz Suno<br>
            Ten marks for guessing the right song.<br>
            Minus five for the wrong song.<br>
            Minus five for singing the incomplete or wrong lyrics of the first two lines (Mukhda).<br><br>
            
            GENERAL RULES:<br><br>
            
            2 teams with the highest scores, will be selected from each qualifier & go on to compete in the semifinals, which again will have 5(3+2) rounds of play i.e., 3 qualifier rounds with slight modifications and 2 mega-surprise rounds.
            The finalists will compete in the final game of Antakshari, which will consist of 5 rounds i.e., 3 qualifier rounds with slight modifications and 2 mega-surprise rounds.
            Two of the highest-scoring teams will be awarded as the Winner and 1st Runner Up of Antakshari. <br>
            
            
            RULES:<br><br>
            Every Antakshari team must consist of 2 members. The decision of the Panel will be final and irrefutable.<br>
            Tiebreaker at any deciding round will be resolved by a special round, at the discretion of the panel.<br>
            Any foul play will result in the expulsion of the team.<br><br>
            <b>Coordinator: </b><br>
            Nilavo Sarkar- 90732 50219.
            `
        }
        
    }
  return (
    <div className='bg-solid h-100'>
            <Navbar />
            <div className='event-desc-container'>
                {
                    eventDetails in types ? (
                        <>
                        <div className='event-desc-left'>
                            <img src={types[eventDetails].img} className="lightinganim" />
                        </div>
                        <div className='event-desc-right-col'>
                            <div className='event-details-name'>
                                <p>{types[eventDetails].name}</p>
                            </div>
                            <div className='event-details-container'>
                                <p className='event-details' dangerouslySetInnerHTML={{__html: types[eventDetails].eventDetails}}/>
                            </div>
                        </div>
                        </>


                    ):(
                        <div className='event-details-name'>
                        <p>Comming Soon</p>
                    </div>
                    )
                }
            </div>
    </div>
  )
}

export default EventModal