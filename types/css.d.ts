declare module '*.css' {
    interface ICssFile {
        [className: string]: string;
    }

    const cssFile: ICssFile;

    export = cssFile;
}
