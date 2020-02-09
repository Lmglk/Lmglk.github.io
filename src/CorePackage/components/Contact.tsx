import * as React from 'react';
import { LocationMarkerIcon } from '../../UIPackage/components/LocationMarkerIcon';
import { EnvelopeIcon } from '../../UIPackage/components/EnvelopeIcon';
import { PhoneIcon } from '../../UIPackage/components/PhoneIcon';
import { GithubIcon } from '../../UIPackage/components/GithubIcon';
import style from './Contact.pcss';

type Props = {
    phone: string;
    email: string;
    github: string;
    location: string;
};

export class Contact extends React.PureComponent<Props> {
    public render(): React.ReactElement {
        const { phone, email, github, location } = this.props;

        return (
            <div>
                <h2>Contact</h2>
                <ul>
                    <li className={style.listItem}>
                        <div className={style.iconContainer}>
                            <PhoneIcon />
                        </div>
                        <div>{phone}</div>
                    </li>
                    <li className={style.listItem}>
                        <div className={style.iconContainer}>
                            <EnvelopeIcon />
                        </div>
                        <div>{email}</div>
                    </li>
                    <li className={style.listItem}>
                        <div className={style.iconContainer}>
                            <GithubIcon />
                        </div>
                        <div>{github}</div>
                    </li>
                    <li className={style.listItem}>
                        <div className={style.iconContainer}>
                            <LocationMarkerIcon />
                        </div>
                        <div>{location}</div>
                    </li>
                </ul>
            </div>
        );
    }
}
