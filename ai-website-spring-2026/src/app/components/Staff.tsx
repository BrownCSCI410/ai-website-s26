import StaffCard from "./StaffCard"

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


export default function Staff() {
    const staff_header_style = "flex items-center justify-center w-full text-3xl text-white font-bold py-8 px-16 my-5 max-w-fit rounded-[26px] border border-white/20 bg-[#CF0000]/60 backdrop-blur-md shadow-2xl";
    const staff_subsection_style = "flex md:flex-wrap sm:flex-wrap xs:flex-wrap items-center justify-center gap-8";

    return(
        <section>
            <div id="content-container" className="flex flex-col items-center mb-10">
                
                <h3 className={`${staff_header_style}`}>Professors</h3>
                <div className={`${staff_subsection_style}`}>
                    <StaffCard name="Serena Booth (Professor)" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Serena} clashRoyaleImagePath={Witch}></StaffCard>
                    
                    <StaffCard name="Dog" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Dog} clashRoyaleImagePath={Lava_hound}></StaffCard>
                </div>

                <h3 className={`${staff_header_style}`}>HTAs</h3>
                <div className={`${staff_subsection_style}`}>
                    <StaffCard name="Mehdi" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Mehdi} clashRoyaleImagePath={Sparky}></StaffCard>

                    <StaffCard name="Salman" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Salman} clashRoyaleImagePath={Healer}></StaffCard>
                    
                    <StaffCard name="Sarah" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Sarah} clashRoyaleImagePath={Fire_spirit}></StaffCard>
                </div>

                <h3 className={`${staff_header_style}`}>Joint STA/UTAs</h3>
                <div className={`${staff_subsection_style}`}>
                    <StaffCard name="Avery" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Avery} clashRoyaleImagePath={Avery}></StaffCard>
                </div>

                <h3 className={`${staff_header_style}`}>UTAs</h3>
                <div className={`${staff_subsection_style}`}>
                    <StaffCard name="Alex" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Alex} clashRoyaleImagePath={Ebarbs}></StaffCard>

                    <StaffCard name="Gun" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Gun} clashRoyaleImagePath={Evo_furnace}></StaffCard>
                    
                    <StaffCard name="John" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={John} clashRoyaleImagePath={Sus_bush}></StaffCard>

                    <StaffCard name="Leanne" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Leanne} clashRoyaleImagePath={Leanne}></StaffCard>

                    <StaffCard name="Maddie" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Maddie} clashRoyaleImagePath={Fire_cracker}></StaffCard>

                    <StaffCard name="Matias" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Matias} clashRoyaleImagePath={Elixir_golem}></StaffCard>

                    <StaffCard name="Michael" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Michael} clashRoyaleImagePath={Royal_recruits}></StaffCard>

                    <StaffCard name="Nico" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Nico} clashRoyaleImagePath={Mini_peka}></StaffCard>

                    <StaffCard name="Riley" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Riley} clashRoyaleImagePath={Hog_rider}></StaffCard>

                    <StaffCard name="Stephanie" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Stephanie} clashRoyaleImagePath={Mega_knight}></StaffCard>

                    <StaffCard name="Tyrone" cslogin="" pronouns=""
                    blurb="" favCharacter = "" hometown = ""
                    photoPath={Tyrone} clashRoyaleImagePath={Balloon}></StaffCard>
                </div>
            </div>
        </section>
    );
}