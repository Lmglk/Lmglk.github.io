declare module '*.pcss' {
    interface IPcssFile {
        [className: string]: string;
    }

    const pcssFile: IPcssFile;

    export = pcssFile;
}
