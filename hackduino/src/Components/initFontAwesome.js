import { library } from "@fortawesome/fontawesome-svg-core";
import {fas, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {fab, faFacebook, faYoutube, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, fas, faFacebook, faYoutube, faWhatsapp, faGithub, faEnvelope);
}
export default initFontAwesome;