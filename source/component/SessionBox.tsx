import { component, mixin, watch, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { InputGroup } from 'boot-cell/source/Form/InputGroup';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';

import { session } from '../model';

@observer
@component({
    tagName: 'session-box',
    renderTarget: 'children'
})
export class SessionBox extends mixin() {
    @watch
    countDown = 0;

    connectedCallback() {
        session.getProfile();

        super.connectedCallback!();
    }

    handleSMSCode = () => {
        this.countDown = 60;

        const timer = setInterval(
                () => --this.countDown! || clearInterval(timer),
                1000
            ),
            { elements } = this.firstElementChild as HTMLFormElement;

        return session.sendSMSCode(
            (elements.namedItem('phone') as HTMLInputElement).value
        );
    };

    handleSignIn = (event: Event) => {
        event.preventDefault();

        const form = new FormData(event.target as HTMLFormElement);

        return session.signIn(
            form.get('phone') as string,
            form.get('code') as string
        );
    };

    render() {
        const { countDown } = this;

        return session.user ? (
            this.defaultSlot
        ) : (
            <form
                className="m-3 p-3 border rounded"
                onSubmit={this.handleSignIn}
            >
                <h2 className="text-center mb-3">参会者登录</h2>

                <InputGroup size="lg" className="mb-3">
                    <Field
                        type="tel"
                        name="phone"
                        maxLength={11}
                        required
                        placeholder="手机号"
                    />
                </InputGroup>

                <InputGroup size="lg" className="mb-3">
                    <Field
                        name="code"
                        required
                        placeholder="短信验证码"
                        autocomplete="off"
                    />
                    <Button
                        outline
                        color="secondary"
                        onClick={this.handleSMSCode}
                        disabled={!!countDown}
                    >
                        {countDown ? countDown + 's' : '获取'}
                    </Button>
                </InputGroup>

                <Button type="submit" color="primary" block size="lg">
                    登录
                </Button>
            </form>
        );
    }
}
