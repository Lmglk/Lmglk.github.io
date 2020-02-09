import * as React from 'react';

import style from './Header.pcss';

type IProps = {
    name: string;
    role: string;
    imageUrl: string;
};

export class Header extends React.PureComponent<IProps> {
    public render(): React.ReactElement {
        const { name, role, imageUrl } = this.props;

        return (
            <div className={style.header}>
                <div className={style.imageContainer}>
                    <img className={style.image} src={imageUrl} alt={name} />
                </div>
                <div className={style.content}>
                    <h1>{name}</h1>
                    <div className={style.role}>{role}</div>
                </div>
            </div>
        );
    }
}
