import "./style.css";
import { UI } from "peasy-ui";
import { model } from "./state/state";

let template = `
<div>
    <div class="lrg" \${===global.respContent}> 
        <div class="hero">
            <span>Creative Developer</span>
        </div>
        <div class="headshotbkgnd">
            <img class="headshot" alt="" src="\${main.mug}" />
        </div>
        <div class="rightmasking"></div>
        <div class="namediv">
            <span>Justin</span>
            <span>Young</span>
        </div>
        <div class="svgdiv">
            <svg viewBox="-9.235 3.736 199.035 92.468" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, -20.537664, -69.250595)">
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 27.705 138.525 C 30.275 191.643 83.773 152.12 83.115 138.525"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 70.074 134.013 C 71.843 128.706 70.766 121.921 69.525 118.928 C 68.284 115.933 60.461 105.225 54.083 98.395 C 45.574 89.286 40.077 84.052 21.345 77.499" transform="matrix(-0.330292, -0.943879, 0.943879, -0.330292, -38.39465, 184.269937)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;" d="M 64.645 73.886 C 83.424 73.528 90.082 90.234 110.82 92.35"/>
                    <path style="stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;" d="M 83.194 138.737 C 83.094 132.246 88.153 129.798 92.28 129.362 C 95.067 129.068 110.748 129.079 110.748 129.079" transform="matrix(0.999882, 0.015334, -0.015334, 0.999882, 2.064747, -1.471199)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;" cx="88.071" cy="127.078" rx="11.753" ry="11.87"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);" cx="88.037" cy="126.967" rx="7.846" ry="8.1"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" cx="66" cy="95" rx="16" ry="16"/>
                    <g transform="matrix(1.112741, 0, 0, 1.112741, -6.93627, -9.594408)">
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 75.432 90.909 L 75.432 97.742 L 68.963 96.192 L 68.963 92.805 L 75.432 90.909 Z"/>
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 62.13 97.742 L 62.13 90.909 L 55.661 92.459 L 55.661 95.846 L 62.13 97.742 Z" transform="matrix(-1, 0, 0, -1, 117.791, 188.650993)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 68.781 104.393 L 68.781 97.56 L 62.312 99.11 L 62.312 102.497 L 68.781 104.393 Z" transform="matrix(0, 1, -1, 0, 166.522997, 35.429998)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 68.781 91.091 L 68.781 84.258 L 62.312 85.808 L 62.312 89.195 L 68.781 91.091 Z" transform="matrix(0, -1, 1, 0, -22.128004, 153.221003)"/>
                    </g>
                    <rect style="stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);" transform="matrix(0.003146, -0.999995, 0.999995, 0.003146, -9.70647, 156.073563)" x="53.934" y="106.489" width="4.059" height="10.841" rx="2" ry="2"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 138.519 165.454 C 141.089 112.336 194.587 151.859 193.929 165.454" transform="matrix(-1, 0, 0, -1, 332.454025, 303.978989)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 199.364 77.499 C 201.133 82.806 200.056 89.591 198.815 92.584 C 197.574 95.579 189.751 106.287 183.373 113.117 C 174.864 122.226 169.367 127.46 150.635 134.013" transform="matrix(0.330292, -0.943879, 0.943879, 0.330292, 17.689461, 236.443323)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;" d="M 110.82 92.344 C 129.599 92.702 136.257 75.996 156.995 73.88" transform="matrix(-1, 0, 0, -1, 267.814995, 166.229668)"/>
                    <path style="stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;" d="M 110.894 129.078 C 110.794 135.569 115.853 138.017 119.98 138.453 C 122.767 138.747 138.448 138.736 138.448 138.736" transform="matrix(-0.999882, 0.015334, -0.015334, -0.999882, 251.379211, 265.886603)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;" cx="-133.569" cy="127.078" rx="11.753" ry="11.87" transform="matrix(-1, 0, 0, 1, 0, 0)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);" cx="-133.603" cy="126.967" rx="7.846" ry="8.1" transform="matrix(-1, 0, 0, 1, 0, 0)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" cx="-155.64" cy="95" rx="16" ry="16" transform="matrix(-1, 0, 0, 1, 0, 0)"/>
                    <rect style="stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);" transform="matrix(-0.003146, -0.999995, -0.999995, 0.003146, 18.029969, 48.876105)" x="-53.934" y="-106.489" width="4.059" height="10.841" rx="2" ry="2"/>
                    <g transform="matrix(1, 0, 0, 1, -0.324172, -0.194503)">
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="156" cy="87" rx="4.5" ry="4.5"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="156" cy="101.865" rx="4.5" ry="4.5"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="148.102" cy="94.629" rx="4.5" ry="4.5"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="164.028" cy="94.629" rx="4.5" ry="4.5"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="footer">
            <a href="#">My Story</a>
            <a href="#">Projects</a>
            <a href="#">Technologies</a>
            <a href="#">Game Jams</a>
            <a href="#">My Games</a>
            <a href="#">Contact Me</a>
        </div>
    </div>
    <div class="sml" \${!==global.respContent}> 
        <div class="menu \${menu.cssString}" >
            <img alt="" src="\${menu.src}"/ \${click@=>menu.toggle}>
            <div class="menuLinks">
                <a href="#" \${===menu.isOpen}>My Story</a>
                <a href="#" \${===menu.isOpen}>Projects</a>
                <a href="#" \${===menu.isOpen}>Technologies</a>
                <a href="#" \${===menu.isOpen}>Game Jams</a>
                <a href="#" \${===menu.isOpen}>My Games</a>
                <a href="#" \${===menu.isOpen}>Contact Me</a>
            </div>
            
        </div>
        <div class="smhero">
            <span>Creative Developer</span>
        </div>
        <div class="smheadshotbkgnd">
            <img class="smheadshot" alt="" src="\${main.mug}" />
        </div>
        <div class="smfooter">
            <span>Justin Young</span>
        </div>
        <div class="smsvgdiv">
            <svg viewBox="-9.235 3.736 199.035 92.468" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, -20.537664, -69.250595)">
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 27.705 138.525 C 30.275 191.643 83.773 152.12 83.115 138.525"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 70.074 134.013 C 71.843 128.706 70.766 121.921 69.525 118.928 C 68.284 115.933 60.461 105.225 54.083 98.395 C 45.574 89.286 40.077 84.052 21.345 77.499" transform="matrix(-0.330292, -0.943879, 0.943879, -0.330292, -38.39465, 184.269937)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;" d="M 64.645 73.886 C 83.424 73.528 90.082 90.234 110.82 92.35"/>
                    <path style="stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;" d="M 83.194 138.737 C 83.094 132.246 88.153 129.798 92.28 129.362 C 95.067 129.068 110.748 129.079 110.748 129.079" transform="matrix(0.999882, 0.015334, -0.015334, 0.999882, 2.064747, -1.471199)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;" cx="88.071" cy="127.078" rx="11.753" ry="11.87"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);" cx="88.037" cy="126.967" rx="7.846" ry="8.1"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" cx="66" cy="95" rx="16" ry="16"/>
                    <g transform="matrix(1.112741, 0, 0, 1.112741, -6.93627, -9.594408)">
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 75.432 90.909 L 75.432 97.742 L 68.963 96.192 L 68.963 92.805 L 75.432 90.909 Z"/>
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 62.13 97.742 L 62.13 90.909 L 55.661 92.459 L 55.661 95.846 L 62.13 97.742 Z" transform="matrix(-1, 0, 0, -1, 117.791, 188.650993)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 68.781 104.393 L 68.781 97.56 L 62.312 99.11 L 62.312 102.497 L 68.781 104.393 Z" transform="matrix(0, 1, -1, 0, 166.522997, 35.429998)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);" d="M 68.781 91.091 L 68.781 84.258 L 62.312 85.808 L 62.312 89.195 L 68.781 91.091 Z" transform="matrix(0, -1, 1, 0, -22.128004, 153.221003)"/>
                    </g>
                    <rect style="stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);" transform="matrix(0.003146, -0.999995, 0.999995, 0.003146, -9.70647, 156.073563)" x="53.934" y="106.489" width="4.059" height="10.841" rx="2" ry="2"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 138.519 165.454 C 141.089 112.336 194.587 151.859 193.929 165.454" transform="matrix(-1, 0, 0, -1, 332.454025, 303.978989)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" d="M 199.364 77.499 C 201.133 82.806 200.056 89.591 198.815 92.584 C 197.574 95.579 189.751 106.287 183.373 113.117 C 174.864 122.226 169.367 127.46 150.635 134.013" transform="matrix(0.330292, -0.943879, 0.943879, 0.330292, 17.689461, 236.443323)"/>
                    <path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;" d="M 110.82 92.344 C 129.599 92.702 136.257 75.996 156.995 73.88" transform="matrix(-1, 0, 0, -1, 267.814995, 166.229668)"/>
                    <path style="stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;" d="M 110.894 129.078 C 110.794 135.569 115.853 138.017 119.98 138.453 C 122.767 138.747 138.448 138.736 138.448 138.736" transform="matrix(-0.999882, 0.015334, -0.015334, -0.999882, 251.379211, 265.886603)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;" cx="-133.569" cy="127.078" rx="11.753" ry="11.87" transform="matrix(-1, 0, 0, 1, 0, 0)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);" cx="-133.603" cy="126.967" rx="7.846" ry="8.1" transform="matrix(-1, 0, 0, 1, 0, 0)"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;" cx="-155.64" cy="95" rx="16" ry="16" transform="matrix(-1, 0, 0, 1, 0, 0)"/>
                    <rect style="stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);" transform="matrix(-0.003146, -0.999995, -0.999995, 0.003146, 18.029969, 48.876105)" x="-53.934" y="-106.489" width="4.059" height="10.841" rx="2" ry="2"/>
                    <g transform="matrix(1, 0, 0, 1, -0.324172, -0.194503)">
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="156" cy="87" rx="4.5" ry="4.5"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="156" cy="101.865" rx="4.5" ry="4.5"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="148.102" cy="94.629" rx="4.5" ry="4.5"/>
                    <ellipse style="stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);" cx="164.028" cy="94.629" rx="4.5" ry="4.5"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</div>`;

UI.create(document.body, template, model);

/**
 * get initial window size and set up model
 */
model.global.screenWidth = window.screen.availWidth;
model.global.screenHeight = window.screen.availHeight;
model.global.windowWidth = window.innerWidth;
model.global.windowHeight = window.innerHeight;
window.addEventListener("resize", model.global.update);
if (model.global.windowWidth < 800 || model.global.screenWidth < 1000) model.global.size = "small";
else model.global.size = "large";

setInterval(() => UI.update(), 1000 / 60);
