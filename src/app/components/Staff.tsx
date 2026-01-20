import { ProfCard, TACard } from "./StaffCard"
import Image from "next/image";
import { useRef } from "react";
import { PREFIX } from "./prefix";

import Dog from "../../../public/staff_photos/dog_card.png"
import Serena from "../../../public/staff_photos/serena_card.png";
import Mehdi from "../../../public/staff_photos/mehdi_card.png";
import Salman from "../../../public/staff_photos/salman_card.png";
import Sarah from "../../../public/staff_photos/sarah_card.png";
import Avery from "../../../public/staff_photos/avery_card.png";
import Alex from "../../../public/staff_photos/alex_card.png";
import John from "../../../public/staff_photos/john_card.png";
import Gun from "../../../public/staff_photos/gun_card.png";
import Leanne from "../../../public/staff_photos/leanne_card.png";
import Maddie from "../../../public/staff_photos/maddie_card.png";
import Matias from "../../../public/staff_photos/matias_card.png";
import Michael from "../../../public/staff_photos/michael_card.png";
import Nico from "../../../public/staff_photos/nico_card.png";
import Riley from "../../../public/staff_photos/riley_card.png";
import Stephanie from "../../../public/staff_photos/stephanie_card.png";
import Tyrone from "../../../public/staff_photos/tyrone_card.png";

import Ebarbs from "../../../public/clash_cards/ebarbs_card.png";
import Fire_cracker from "../../../public/clash_cards/fire_cracker_card.png";
import Fire_spirit from "../../../public/clash_cards/fire_spirit_card.png";
import Healer from "../../../public/clash_cards/healer_card.png";
import Lava_hound from "../../../public/clash_cards/lava_hound_card.png";
import Mega_knight from "../../../public/clash_cards/mega_knight_card.png";
import Mini_peka from "../../../public/clash_cards/minipeka_card.png";
import Sparky from "../../../public/clash_cards/sparky_card.png";
import Sus_bush from "../../../public/clash_cards/sus_bush_card.png";
import Balloon from "../../../public/clash_cards/balloon_card.png";
import Elixir_golem from "../../../public/clash_cards/elixir_golem_card.png";
import Evo_furnace from "../../../public/clash_cards/evo_furnace_card.png";
import Hog_rider from "../../../public/clash_cards/hog_rider_card.png";
import Witch from "../../../public/clash_cards/witch_card.png";
import Royal_recruits from "../../../public/clash_cards/royal_recruits_card.png";
import Night_witch from "../../../public/clash_cards/night_witch_card.png";
import Muskies from "../../../public/clash_cards/muskies_card.png";


export default function Staff() {
    // UPDATED: Added max-w-[90%] so headers don't overflow on tiny screens
    const staff_header_style = "flex items-center justify-center w-full text-3xl text-white font-bold py-8 px-16 my-5 max-w-[90%] md:max-w-fit rounded-[26px] border border-white/20 bg-[#CF0000]/60 backdrop-blur-md shadow-2xl text-center";
    
    // UPDATED: Removed 'md:', 'sm:', 'xs:'. Just used 'flex-wrap'. 
    // This forces wrapping on ALL screen sizes if there isn't enough space.
    const staff_subsection_style = "flex flex-wrap items-center justify-center gap-8 w-full";
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
      
    const playSound = () => {
        if (!audioRef.current) {
        audioRef.current = new Audio(`${PREFIX}clang.mp3`);
        }
    
        audioRef.current.currentTime = 0; 
        audioRef.current.play();
    };

    return(
        <section>
            {/* Added padding-x (px-4) to container to prevent cards touching edge of phone screen */}
            <div id="content-container" className="flex flex-col items-center mb-10 px-4">
                
                <h3 className={`${staff_header_style}`}>Professor</h3>

               {/* WRAPPER: Changed to flex-col on mobile, flex-row on large screens. */}
                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 relative">
                    
                     {/* LEFT IMAGE: Added 'hidden lg:block' to hide skeleton on mobile/tablet */}
                     <div
                        className="hidden lg:absolute lg:left-0 lg:block flex-shrink-0  "
        
                    >      
                        <Image
                            src={`${PREFIX}Guard.webp`}
                            alt="skeleton" 
                            className="skeleton translate-x-30 translate-y-40"                        
                            width = {200} 
                            height = {400}
                            priority
                        />
                    </div>
                   
                    <div className={`${staff_subsection_style}`}>
                        <ProfCard name="Serena Booth" pronouns="she/her/hers"
                        blurb="Serena a (new) Assistant Professor in Computer Science at Brown University. At Brown, she leads the GIRAFFE Lab, where she and her students work on questions specification, governance, and interaction for AI systems and robots. After finishing her PhD at MIT in 2023, Serena worked in the U.S. Senate as an AI policy advisor to advance U.S. AI regulation in high-risk applications like housing and banking. Serena spends her leisure time playing fetch with her dog, riding a tandem bicycle with her partner, skiing, or running."
                        hometown = "Cambridge, UK & Memphis, TN"
                        photoPath={Serena} clashRoyaleImagePath={Witch}></ProfCard>
                    </div>
                    
                    {/* RIGHT IMAGE: Added 'hidden lg:block' to hide balloon on mobile/tablet */}
                    <div className="hidden lg:block lg:absolute lg:right-0">
                        <Image
                            src={`${PREFIX}witch.png`}
                            alt="Balloon" 
                            className="witch translate-x-30 -translate-y-40"
                            width = {700}
                            height = {900}
                        />
                    </div>
                </div>

                <h3 className={`${staff_header_style}`}>Dog TAs</h3>
                {/* WRAPPER: Added relative positioning and responsive handling for side images */}
                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 relative">
                    
                     {/* LEFT IMAGE: Added 'hidden lg:block' to hide skeleton on mobile/tablet */}
                     <div className="hidden lg:absolute lg:left-0 lg:block flex-shrink-0">      
                        <Image
                            src={`${PREFIX}Royal_Hog.webp`}
                            alt="hog" 
                            className="hog translate-y-30 translate-x-25"                        
                            width = {250} 
                            height = {400}
                            priority
                        />
                    </div>

                    <div className={`${staff_subsection_style}`}>                    
                        <TACard name="Ducki" pronouns=""
                        blurb="Howdy! I'm Ducki. I was raised in NYC, but when the city overwhelmed me, my original human gave me up to Prof. Booth. She feeds me and takes me to the beach and hiking which is cool but not as much as I'd like. She says she's 'busy' teaching or something ridiculous."  hometown = "Manhattan"
                        photoPath={Dog} clashRoyaleImagePath={Lava_hound}></TACard>
                    </div>

                    {/* RIGHT IMAGE: Added 'hidden lg:block' to hide balloon on mobile/tablet */}
                    <div className="hidden lg:block lg:absolute lg:right-0">
                        <Image
                            src= {`${PREFIX}Lava_Hound.webp`}
                            alt="Lava hound" 
                            className="lava hound -translate-y-70"
                            width = {300} 
                            height = {400}
                        />
                    </div>
                    
                </div>

                

                <h3 className={`${staff_header_style}`}>HTAs</h3>
                <div className={`${staff_subsection_style}`}>
                    <TACard name="Mehdi" pronouns="he/him"
                    blurb="Hi! I’m Mehdi, a junior double majoring in CS and Apma–Econ. When I’m not in the SciLi, you’ll most likely find me in the CIT. In my free time, I enjoy playing poker and building in Minecraft!" 
                    hometown = "Casablanca, Morocco"
                    photoPath={Mehdi} clashRoyaleImagePath={Sparky}></TACard>

                    <TACard name="Salman"  pronouns="he/him"
                    blurb="Hey! I'm Salman, and I'm a junior from Syria studying CS and APMA. In my free time, I love to play Minecraft, watch a sitcom (currently looking for one to watch next), or hike! Super excited to meet you all :)"
                    hometown = "Latakia, Syria"
                    photoPath={Salman} clashRoyaleImagePath={Healer}></TACard>
                    
                    <TACard name="Sarah"  pronouns="she/her"
                    blurb="Hi! It's super nice to meet you all! I'm a junior studying CS, but you're more likely to find me in TFG 205 than the CIT." 
                    hometown = "Solon, Ohio"
                    photoPath={Sarah} clashRoyaleImagePath={Fire_spirit}></TACard>
                </div>
                <h3 className={`${staff_header_style}`}>Joint STA/UTA</h3>

                {/* WRAPPER: Added relative positioning and responsive handling for side images */}
                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 relative">
                    
                     {/* LEFT IMAGE: Added 'hidden lg:block' to hide skeleton on mobile/tablet */}
                     <div
                        className="hidden lg:absolute lg:left-0 lg:block flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                        onClick={playSound}
                        title="clang"
                    >      
                        <Image
                            src={`${PREFIX}new_skel.png`}
                            alt="skeleton" 
                            className="skeleton translate-y-50 translate-x-25"
                            width = {250} 
                            height = {400}
                            priority
                        />
                    </div>
                    

                    <div className={`${staff_subsection_style}`}>
                        <TACard name="Avery"  pronouns="he/him"
                        blurb="Hello! I’m a junior studying Computer Science from NJ. Outside of classes, I’m heavily involved in student theater, and am the co-chair of Musical Forum. I also currently work as a Bruno Fellow and a Tour Guide! In my free time, I love to sing, play games, get food with friends, and watch Survivor!"
                        hometown = "East Hanover, New Jersey"
                        photoPath={Avery} clashRoyaleImagePath={Mini_peka}></TACard>
                    </div>

                    {/* RIGHT IMAGE: Added 'hidden lg:block' to hide balloon on mobile/tablet */}
                    <div className="hidden lg:block lg:absolute lg:right-0">
                        <Image
                            src={`${PREFIX}Balloon_red.webp`}
                            alt="Balloon" 
                            className="balloon -translate-y-70 -translate-x-10"
                            width = {300}
                            height = {400}
                        />
                    </div>
                    
                </div>

                <h3 className={`${staff_header_style}`}>UTAs</h3>
                <div className={`${staff_subsection_style}`}>
                    <TACard name="Alex"  pronouns="he/him"
                    blurb="Hi! I'm Alex, and I'm a sophomore studying APMA and CS. In my free time I like to be active outside, listen to music, and watch sports. Excited to meet y'all!"
                    hometown = "Shrewsbury, Massachusetts"
                    photoPath={Alex} clashRoyaleImagePath={Ebarbs}></TACard>

                    <TACard name="Gun"  pronouns="he/him"
                    blurb="Hi everyone! I'm Gun, a sophomore studying Computer Science and Economics from Thailand. In my free time, I enjoy scrolling on reels, playing golf, and hanging out with friends. Super excited to meet you all!"
                    hometown = "Bangkok, Thailand"
                    photoPath={Gun} clashRoyaleImagePath={Evo_furnace}></TACard>
                    
                    <TACard name="John"  pronouns="he/him"
                    blurb="Hi! I'm a junior studying applied math and computer science. I like to swim, play piano, play video games, and listen to music."
                    hometown = "Milford, Pennsylvania"
                    photoPath={John} clashRoyaleImagePath={Sus_bush}></TACard>

                    <TACard name="Leanne"  pronouns="she/her"
                    blurb="Hi! I'm Leanne, and I'm a junior studying CS and APMA-Econ. I really enjoy exploring new cafes, collecting vinyls, listening to music, and doing ballroom dance! :)"
                    hometown = "Singapore"
                    photoPath={Leanne} clashRoyaleImagePath={Muskies}></TACard>

                    <TACard name="Maddie"  pronouns="she/her"
                    blurb="Hi! I am a sophomore from North Carolina studying APMA-CS. I love watching Arsenal games, snowboarding, hiking, puzzling, and going on side quests. Always feel free to reach out, I love yapping! I can’t wait to meet you!"
                    hometown = "Winston-Salem, North Carolina "
                    photoPath={Maddie} clashRoyaleImagePath={Fire_cracker}></TACard>

                    <TACard name="Matias"  pronouns="he/him"
                    blurb="Hello! I am a junior from Boise, Idaho! In my free time I play drums in some jazz groups and also I can juggle 😎"
                    hometown = "Boise, Idaho"
                    photoPath={Matias} clashRoyaleImagePath={Elixir_golem}></TACard>

                    <TACard name="Michael"  pronouns="he/him"
                    blurb="Hello! I'm a sophomore studying Applied Math and CS. In my free time, I like to play video  games and basketball badly. I also love watching F1, otters and Jayson Tatum."
                    hometown = "Memphis, Tennessee"
                    photoPath={Michael} clashRoyaleImagePath={Royal_recruits}></TACard>

                    <TACard name="Nico"  pronouns="he/him"
                    blurb="Hi, I'm Nico! I'm a current junior studying CS and physics. In my free time, I like to run, surf, hike, and drink strawberry milkshakes. I'm super excited to meet you all!"
                    hometown = "San Francisco, California"
                    photoPath={Nico} clashRoyaleImagePath={Mini_peka}></TACard>

                    <TACard name="Riley"  pronouns="he/him"
                    blurb="Hi, I'm Riley, a junior from New Jersey studying computer science. Outside of the classroom, I enjoy running, watching movies, and writing. Hope to see you all at office hours!"
                    hometown = "East Windsor, New Jersey"
                    photoPath={Riley} clashRoyaleImagePath={Hog_rider}></TACard>

                    <TACard name="Stephanie"  pronouns="she/her"
                    blurb="Hi everyone! I'm a junior studying Computer Science and Cognitive Science. Outside of class, you'll find me dancing with Fusion Dance Company, baking desserts, and trying new coffee shops with friends."
                    hometown = "Newton, Massachusetts"
                    photoPath={Stephanie} clashRoyaleImagePath={Mega_knight}></TACard>

                    <TACard name="Tyrone"  pronouns="he/him"
                    blurb="Hi! I’m a sophomore studying Computer Science and Economics. I like card tricks, climbing, and cookies. I’m really excited to meet you all!!"
                    hometown = "San Juan, Philippines"
                    photoPath={Tyrone} clashRoyaleImagePath={Balloon}></TACard>
                </div>
            </div>
        </section>
    );
}
