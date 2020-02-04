declare module '*.pcss' {
    interface IPcssFile {
        [className: string]: string;
    }

    const pccsFile: IPcssFile;

    export = pccsFile;
}
