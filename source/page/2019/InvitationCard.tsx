import { createCell, component, mixin } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { toPng } from 'html-to-image';

import { session } from '../../model';
import { SessionBox } from '../../component';

import style from './InvitationCard.less';
import banner from './data/banner.jpg';
import BuyCode from './data/BuyCode.png';

interface InvitationCardState {
    imageURI: string;
}

@observer
@component({
    tagName: 'invitation-card',
    renderTarget: 'children'
})
export class InvitationCard extends mixin<{}, InvitationCardState>() {
    state = { imageURI: '' };

    showImage = async () => {
        if (this.state.imageURI) return;

        const box = this.querySelector<HTMLElement>('main');

        if (box) this.setState({ imageURI: await toPng(box) });
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

    render(_, { imageURI }: InvitationCardState) {
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
