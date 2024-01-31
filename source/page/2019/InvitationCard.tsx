import { component, observer } from 'web-cell';
import { observable } from 'mobx';
import { toPng } from 'html-to-image';

import { session } from '../../model';
import { SessionBox } from '../../component';

import * as style from './InvitationCard.module.less';
import banner from './data/banner.jpg';
import BuyCode from './data/BuyCode.png';

@component({ tagName: 'invitation-card' })
@observer
export class InvitationCard extends HTMLElement {
    @observable
    accessor imageURI = '';

    showImage = async () => {
        if (this.imageURI) return;

        const box = this.querySelector<HTMLElement>('main');

        if (box) this.imageURI = await toPng(box);
    };

    renderCard() {
        const { username, gender } = session.user!;

        return (
            <main
                className={`vw-100 vh-100 text-white d-flex flex-column ${style.box}`}
            >
                <img className="img-fluid" src={banner} />

                <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-around text-center">
                    <header>
                        <h3>诚挚邀请</h3>
                        <h2>
                            {username[0]}
                            {gender === '女' ? '女士' : '先生'}
                        </h2>
                        <p className="lead mt-3">
                            于 11 月 16 ~ 17 日<br />
                            莅临<b>菁蓉国际广场</b>参会
                        </p>
                    </header>

                    <section className="w-50 px-3 pt-3 bg-white">
                        <img className="img-fluid" src={BuyCode} />
                        <div className="lead text-dark">和我一起去</div>
                    </section>
                </div>
            </main>
        );
    }

    render() {
        const { imageURI } = this;

        return (
            <SessionBox className="position-relative" onClick={this.showImage}>
                {session.user && this.renderCard()}
                <img
                    className={`position-absolute vw-100 vh-100 ${style.cover}`}
                    hidden={!imageURI}
                    src={imageURI}
                />
            </SessionBox>
        );
    }
}
