import { MarkdownToJSX } from 'markdown-to-jsx';
import { H1 } from '../../UIKItPackage/components/H1';
import { H2 } from '../../UIKItPackage/components/H2';
import { H3 } from '../../UIKItPackage/components/H3';
import { UnorderedList } from '../../UIKItPackage/components/UnorderedList';
import { ListItem } from '../../UIKItPackage/components/ListItem';

export const markdownOptions: MarkdownToJSX.Options = {
    overrides: {
        h1: {
            component: H1,
        },
        h2: {
            component: H2,
        },
        h3: {
            component: H3,
        },
        ul: {
            component: UnorderedList,
        },
        li: {
            component: ListItem,
        },
    },
};
