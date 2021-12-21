import { MarkdownToJSX } from 'markdown-to-jsx';
import { LocationIcon } from '../../IconPackage/components/LocationIcon';
import { EnvelopeIcon } from '../../IconPackage/components/EnvelopeIcon';
import { PhoneIcon } from '../../IconPackage/components/PhoneIcon';
import { TelegramIcon } from '../../IconPackage/components/TelegramIcon';
import { WhatsAppIcon } from '../../IconPackage/components/WhatsAppIcon';
import { ViberIcon } from '../../IconPackage/components/ViberIcon';
import { GithubIcon } from '../../IconPackage/components/GithubIcon';
import { InstagramIcon } from '../../IconPackage/components/InstagramIcon';

export const markdownIconOptions: MarkdownToJSX.Options = {
    overrides: {
        LocationIcon: {
            component: LocationIcon,
        },
        EnvelopeIcon: {
            component: EnvelopeIcon,
        },
        PhoneIcon: {
            component: PhoneIcon,
        },
        TelegramIcon: {
            component: TelegramIcon,
        },
        WhatsAppIcon: {
            component: WhatsAppIcon,
        },
        ViberIcon: {
            component: ViberIcon,
        },
        GithubIcon: {
            component: GithubIcon,
        },
        InstagramIcon: {
            component: InstagramIcon,
        },
    },
};
