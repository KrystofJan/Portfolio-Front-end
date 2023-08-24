<script>
export default{
    data(){
        return{
            show: true,
            show_window: false,
            is_edu: false,
            is_work: false,
            window_text: "education.txt",
            show_start: false,
            is_info: true,
            show_about: false,
            show_prog: false,
            show_lang: false
        }
    },
    methods: {
        close(){
            this.show = false;
        },
        open_id(window_id){
            if(window_id === `education`){
                this.is_edu = true;
                this.is_work = false;
                this.is_info = false;
                this.window_text = "education.txt";
            }
            else if(window_id=== `work`){
                this.is_edu = false;
                this.is_work=true;
                this.is_info = false;
                this.window_text = "work_experience.txt"
            }
            else if(window_id=== `info`){
                this.is_edu = false;
                this.is_work=false;
                this.is_info = true;
                this.window_text = "info.txt"
            }
            this.show_window = true;
        },
        showStartContent(section){
            
            // element.style.transform="rotate(-180deg)";
            if(!this.rotated){
                
            if(section===`lang`){
                this.show_lang = !this.show_lang;
                if(this.show_lang){
                    document.getElementById(section).style.transform = "rotate(180deg)";
                }
                else{
                    document.getElementById(section).style.transform = "rotate(0deg)";
                }
            }
            if(section===`about`){
                this.show_about = !this.show_about;
                if(this.show_about){
                    document.getElementById(section).style.transform = "rotate(180deg)";
                }
                else{
                    document.getElementById(section).style.transform = "rotate(0deg)";
                }
            }
            if(section===`prog`){
                this.show_prog = !this.show_prog;
                if(this.show_prog){
                    document.getElementById(section).style.transform = "rotate(180deg)";
                }
                else{
                    document.getElementById(section).style.transform = "rotate(0deg)";
                }
            }
        }
    }
}
}
</script>
<template>
    <div class="CV" v-if="show" v-on:click="close()">
        <h1 class="heading" v-on:click="close()">Warning!</h1>
        <p>The next section is going to a little different than others.<br>
        To exit click anywhere and please open the `info.txt` file</p>
    </div>
    <main v-else>
        <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
        <div class="file edu" v-on:click="open_id(`education`)">
            <img src="../assets/file-icon.png" class="file-icon" alt="work_experience"/>
            <span class="file-name">Education.txt</span>
        </div>
        <div class="file work" v-on:click="open_id(`work`)">
            <img src="../assets/file-icon.png" class="file-icon" alt="work_experience"/>
            <span class="file-name">work_experience.txt</span>
        </div>
        <div class="file info" v-on:click="open_id(`info`)">
            <img src="../assets/file-icon.png" class="file-icon" alt="work_experience"/>
            <span class="file-name">info.txt</span>
        </div>
        <div class="file-window" v-if="show_window">
            <div class="blue-top">
                <span class="window-name">{{ window_text }}</span> 
                <div class="window-buttons">
                    <!-- <div class="window-button"></div> -->
                    <!-- <div class="window-button">_</div> -->
                    <div class="window-button" v-on:click="show_window = false">X</div>
                </div>
            </div>
            <div class="window-content">
                <div v-if="is_edu">
                    <h1 class="file-heading">Education</h1>
                    <div class="window-section">
                        <h2 class="section-heading">VSB - Technical University of Ostrava</h2>
                        <span class="date">
                            Sep 2020 - Now
                        </span>
                        <ul>
                            <li>Faculty: Faculty of Electrical Engineering and Computer Science</li>
                            <li>Field: Computer Science</li>
                            <li>Address: 17. listopadu 2172/15, 708 00 Ostrava-Poruba, Czech Republic</li>
                        </ul>
                    </div>
                    <div class="window-section">
                        <h2 class="section-heading">Dankook University</h2>
                        <span class="date">
                            Sep 2022 - Nov 2022
                        </span>
                        <ul>
                            <li>Semester abroad</li>
                            <li>Faculty: Collage of Software Convergence</li>
                            <li>Address: 152 Jukjeon-ro, Suji-gu, Yongin-si, Gyeonggi-do, South Korea</li>
                        </ul>
                    </div>
                    <div class="window-section">
                        <h2 class="section-heading">SPSEI Ostrava</h2>
                        <span class="date">
                            Sep 2016 - Jun 2020
                        </span>
                        <ul>
                            <li>Maturita exam in Databases and Programming</li>
                            <li>Field: Computer Science</li>
                            <li>Focus on programming</li>
                            <li>Address: Kratochvílova 7, 702 00 Moravská Ostrava a Přívoz, Czech Republic</li>
                        </ul>
                    </div>
                </div>
                <div v-if="is_work">
                    <h1 class="file-heading">Work Experience</h1>
                    <div class="window-section">
                        <h2 class="section-heading">Profiq s.r.o.</h2>
                        <span class="date">
                            Apr 2023 - Aug 2023
                        </span>
                        <ul>
                            <li>Position: Junior Software Engineer</li>
                            <li>About the position: QA Engineer, Test Automation on Public API for a
client</li>
                            <li>City: Ostrava</li>
                        </ul>
                    </div>
                    <div class="window-section">
                        <h2 class="section-heading">Z+M Partner</h2>
                        <span class="date">
                            Aug 2020 - Nov 2020
                        </span>
                        <ul>
                            <li>Position: Data extraction</li>
                            <li>About the position: Extracting data from file to a database</li>
                            <li>City: Ostrava</li>
                        </ul>
                    </div>
                </div>
                <div v-if="is_info">
                This section is a replica of windows 98. Just click icons and the files will appear.
                </div>
            </div>
        </div>
        <div class="start-bar" v-if="show_start">
            <div class="blue-side">
                <div class="windows">Windows 98</div>
            </div>
            <div class="start-main">
                <div class="start-profile">
                    <img src="../assets/profilovka_win.png" class="profile-pic" alt="profile pic">
                    <h2>Jan-Kryštof Zahradník</h2>
                </div>
                <div class="start-section">
                    <div  class="start-section-name">
                        <img src="../assets/info.png" alt="globe" class="start-content-icon" />
                        <h3>About_me.json</h3>
                        <img v-on:click="showStartContent(`about`)" src="../assets/down.svg" id="about" alt="globe" class="start-content-icon pointer" />
                    </div>
                    <div class="start-section-content" v-if="show_about">
                        <code>{<br> "DateOfBirth": "28/03/2001",<br>
                        "Gender": "Male",<br>
                        "Nationality": "Czech",<br>
                        "Email": "jendazah@gmail.com",<br>
                        "PhoneNumber": +420 725 877 300",<br>
                        "Address": "Na Obleskách 34, Řepiště, 73931"<br>
                        }</code>
                    </div>
                </div>
                <div class="start-section">
                    <div  class="start-section-name">
                        <img src="../assets/globe.png" alt="globe" class="start-content-icon" />
                        <h3>Languages.msi</h3>
                        <img v-on:click="showStartContent(`lang`)" src="../assets/down.svg" id="lang" alt="globe" class="start-content-icon pointer" />
                    </div>
                    <div class="start-section-content" v-if="show_lang">
                        Native language <br>
                        Czech: |███████| 21TB 1Kb/s <br>
                        Other <br>
                        English: |█████..| 56GB 5Mb/s <br>
                    </div>
                </div>
                <div class="start-section">
                    <div  class="start-section-name">
                        <img src="../assets/comand-line.png" alt="globe" class="start-content-icon" />
                        <h3>programming_skills.csv</h3>
                        <img v-on:click="showStartContent(`prog`)" src="../assets/down.svg" alt="globe" id="prog" class="start-content-icon pointer" />
                    </div>
                    <div class="start-section-content" v-if="show_prog">
                        c;c++;c#;python;javascript;Kotlin;MySQL;PL/SQL;MS SQL;LateX;html;css;pytest;
                    </div>
                </div>
            </div>
        </div>
        <div id="menubar">
            <div class="start" v-on:click="show_start=!show_start"></div>
        </div>
    </main>
</template>

<style scoped>
.start-profile{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10rem;
    border-top: 5px solid #dadada;
    border-bottom: 5px solid #dadada;
}
.profile-pic{
    height: 8rem;
    width: 8rem;
}
.start-section-content{
    overflow-wrap: break-word;
    background-color: #ccc;
    width: 75%;
    padding: 1rem;
    border-radius: 0.5rem;
}
.start-section{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.section-heading{
    text-decoration: underline;
}
.pointer{
    cursor: pointer;
    transition: 0.3s ease;
}
.start-section-name{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.start-content-icon{
    height: 3rem;
    width: 3rem;
}
.start-main{
    position: absolute;
    max-height: 65vh;
    overflow-y:auto;
    top: 0;
    left: 2rem;
    width: calc(100% - 2rem);
}
.windows{
    display: inline-block;
    white-space: nowrap;
    transform: rotate(-90deg);
    font-size: 1rem;
    color: white;
    position: absolute;
    bottom: 3rem;
    left: -2rem;
}
.blue-side{
    width: 2rem;
    height: 100%;
    background: linear-gradient(to top, #00f, rgb(106, 106, 255));
}
.start-bar{
    height: 65vh;
    width: 30%;
    background-color: white;
    border-right: 2px solid #d4d4d4;
    border-top: 2px solid #d4d4d4;
    position: absolute;
    left: 0;
    bottom: 5%;
}
.window-content{
    padding: 1rem;
    max-height: 65vh;
    overflow-y:auto;
}
.start{
    height: 100%;
    width: 5.6%;

    background-image: url("../assets/start_base.png");
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
}
.start:active{
    background-image: url("../assets/start_active.png");
}
*{
    box-sizing: border-box;
}
#app{
    height: 100%;
}
.window-buttons{
    display: flex;
    /* justify-content: space-evenly; */
    justify-content: flex-end;
    padding-right: 1rem;
    align-items: center;
    flex-direction: row;
    width: 15%;
    flex-wrap: wrap;
}
.window-button{
    width: 1rem;
    height: 1rem;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.blue-top{
    width: 100%;
    height: 1.5rem;
    background: linear-gradient(to right, #00f, rgb(106, 106, 255));
    display: flex;
    justify-content: space-between;
}
.file-window{
    width: 50%;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
}
.file{
    margin: 1rem;
    width: 5rem;
    cursor: pointer;
}
.file:hover{
    background-color: rgba(255, 255 ,255, 0.5)
}
.edu{
    margin-top: unset;
}
.file-icon{
    width: 3rem;
    height: 3rem;
    display: block;
    margin: 0 auto;
}
.file-name{
    display: block;
    word-wrap: break-word;
    text-align: center;
}

#menubar{
    background-color: lightgray;
    height: 5%;
    width: 100%;
    position: absolute;
    top: 95%;
    left: 0;
}
main{
    background-image: url('../assets/cv_bg.jpg');
    height: 100vh;
    font-family: "Lucida Console";
    font-weight: thin;
    background-size: cover;
    background-position: center;
}
 .CV{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: linear-gradient(45deg, red ,orange,yellow,green,blue,indigo,violet);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: 500% auto;
    animation: colorGradient 5s infinite alternate ease-in-out;
    cursor: pointer;
 }
 .CV p{
    color: white;
    
 }
 .heading{
    margin: auto;
    text-align: center;
    background: linear-gradient(-45deg, violet , indigo, blue, green, yellow, orange, red);
    background-clip: text;
    color: transparent;
    background-size: 500% auto;
    animation: colorGradient2 2s infinite alternate linear;
    
 }
 @keyframes colorGradient {
  0% {
      background-position: 0% 50%;
  }
  100% {
      background-position: 100% 50%;
  }
}
 @keyframes colorGradient2 {
  0% {
      background-position: 0% 50%;
      transform: scale(1);
  }
  99% {
      background-position: 100% 50%;
      transform: scale(4);
  }
}
</style>