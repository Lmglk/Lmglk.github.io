declare module 'postcss-units' {
    import * as postcss from 'postcss';

    export interface Options {
        size?: number;
        fallback?: boolean;
        precision?: number;
    }

    interface PostcssUnitsPlugin {
        (options: Options): postcss.Plugin<any>;
    }

    const plugin: PostcssUnitsPlugin;

    export default plugin;
}
