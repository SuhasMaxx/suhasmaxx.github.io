import { LitElement, html, css } from '../lib/lit-all.min.js';
export class SlidingText extends LitElement { 
    static styles = css`
    .outer{
        width: 400px;
        height: 40px;
        bottom: 0;
    }   
    .content {
		position: absolute;
		left: 45%;
		/* transform: translate(-50%, -50%); */
		height: 160px;
		overflow: hidden;
		font-family: 'Lato', sans-serif;
		font-size: 22px;
		line-height: 40px;
		color: #ecf0f1;
	}
	.content__container {
		font-weight: normal;
		overflow: hidden;
		height: 40px;
		padding: 0 25px;
	}
	.content__container:before {
		content: '[';
		left: 0;
	}
	.content__container:after {
		content: ']';
		position: absolute;
		right: 0;
	}
	.content__container:after, .content__container:before {
		position: absolute;
		top: -3px;
		color: #16a085;
		font-size: 25px;
		line-height: 40px;
		-webkit-animation-name: opacity;
		-webkit-animation-duration: 2s;
		-webkit-animation-iteration-count: infinite;
		animation-name: opacity;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}
	.content__container__text {
		display: inline;
		float: left;
		margin: 0;
	}
	.content__container__list {
		margin-top: 0;
		padding-left: 75px;
		text-align: left;
		list-style: none;
		-webkit-animation-name: change;
		-webkit-animation-duration: 10s;
		-webkit-animation-iteration-count: infinite;
		animation-name: change;
		animation-duration: 10s;
		animation-iteration-count: infinite;
	}
	.content__container__list__item {
		line-height: 40px;
		color: #00fff3;
		margin: 0;
	}
	/* Align sliding text in mobile view  */
	@media only screen and (max-width:620px) {
		.content {
			position: absolute;
			left: 10%;
		}
	}
	@-webkit-keyframes opacity {
		0%, 100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
	@-webkit-keyframes change {
		0%, 12.66%, 100% {
			transform: translate3d(0, 0, 0);
		}
		16.66%, 29.32% {
			transform: translate3d(0, -25%, 0);
		}
		33.32%, 45.98% {
			transform: translate3d(0, -50%, 0);
		}
		49.98%, 62.64% {
			transform: translate3d(0, -75%, 0);
		}
		66.64%, 79.3% {
			transform: translate3d(0, -50%, 0);
		}
		83.3%, 95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
	@-o-keyframes opacity {
		0%, 100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
	@-o-keyframes change {
		0%, 12.66%, 100% {
			transform: translate3d(0, 0, 0);
		}
		16.66%, 29.32% {
			transform: translate3d(0, -25%, 0);
		}
		33.32%, 45.98% {
			transform: translate3d(0, -50%, 0);
		}
		49.98%, 62.64% {
			transform: translate3d(0, -75%, 0);
		}
		66.64%, 79.3% {
			transform: translate3d(0, -50%, 0);
		}
		83.3%, 95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
	@-moz-keyframes opacity {
		0%, 100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
	@-moz-keyframes change {
		0%, 12.66%, 100% {
			transform: translate3d(0, 0, 0);
		}
		16.66%, 29.32% {
			transform: translate3d(0, -25%, 0);
		}
		33.32%, 45.98% {
			transform: translate3d(0, -50%, 0);
		}
		49.98%, 62.64% {
			transform: translate3d(0, -75%, 0);
		}
		66.64%, 79.3% {
			transform: translate3d(0, -50%, 0);
		}
		83.3%, 95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
	@keyframes opacity {
		0%, 100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
	@keyframes change {
		0%, 12.66%, 100% {
			transform: translate3d(0, 0, 0);
		}
		16.66%, 29.32% {
			transform: translate3d(0, -25%, 0);
		}
		33.32%, 45.98% {
			transform: translate3d(0, -50%, 0);
		}
		49.98%, 62.64% {
			transform: translate3d(0, -75%, 0);
		}
		66.64%, 79.3% {
			transform: translate3d(0, -50%, 0);
		}
		83.3%, 95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
    `;
    render(){
        return html`
        <div class="outer">
            <div class="content">
            <div class="content__container">
                <p class="content__container__text">
                    I am a 
                </p>
                <ul class="content__container__list">
                    <li class="content__container__list__item">👨‍💻 Programmer</li>
                    <li class="content__container__list__item">🌍 Traveller</li>
                    <li class="content__container__list__item">📸 Photographer</li>
                    <li class="content__container__list__item">🤖 Techie</li>
                </ul>
            </div>
        </div>
        </div>`;
    }
}
customElements.define('sliding-text', SlidingText);
