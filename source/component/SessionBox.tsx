import { attribute, component, observer } from 'web-cell';
import { observable } from 'mobx';
import { InputGroup, FormControl, Button } from 'boot-cell';

import { session } from '../model';

@component({
    tagName: 'session-box',
    mode: 'open'
})
@observer
export class SessionBox extends HTMLElement {
    @attribute
    @observable
    accessor countDown = 0;

    connectedCallback() {
        session.getProfile();
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

    renderForm() {
        const { countDown } = this;

        return (
            <form
                // @ts-ignore
                className="m-3 p-3 border rounded"
                onSubmit={this.handleSignIn}
            >
                <h2 className="text-center mb-3">参会者登录</h2>

                <InputGroup size="lg" className="mb-3">
                    <FormControl
                        type="tel"
                        name="phone"
                        maxLength={11}
                        required
                        placeholder="手机号"
                    />
                </InputGroup>

                <InputGroup size="lg" className="mb-3">
                    <FormControl
                        name="code"
                        required
                        placeholder="短信验证码"
                        autocomplete="off"
                    />
                    <Button
                        variant="outline-secondary"
                        // @ts-ignore
                        onClick={this.handleSMSCode}
                        disabled={!!countDown}
                    >
                        {countDown ? countDown + 's' : '获取'}
                    </Button>
                </InputGroup>

                <Button
                    type="submit"
                    variant="primary"
                    className="d-block w-100"
                    size="lg"
                >
                    登录
                </Button>
            </form>
        );
    }

    render() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                />
                {session.user ? <slot /> : this.renderForm()}
            </>
        );
    }
}
