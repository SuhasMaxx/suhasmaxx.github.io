const template = document.createElement('template');
template.innerHTML =  `
<style>
.circle-container-block{
    display: inline-block;
    text-align: center;
}

@media only screen and (max-width:620px) {
    /* For mobile phones: */
    .circle-container-block {
        width:100%;
    }
}

.ring-circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
    transform-origin: 50% 50%;
}

.circle-container{
  position: relative;
  width: 120px;
  height: 120px;
  display: inline-block;
  border-radius: 60px;
  margin: 25px;
  box-shadow: 
        inset 0 0 50px #44ffee,
        
        0 0 25px #44ffee, -5px 0 40px #f0f, 5px 0 40px #0ff;
}

.icon-container{
  position: absolute;
  width: 80px;
  height: 80px;
  top: 20px;
  left: 20px;
}

.tech-icon{
  width: 80px;
  height: 80px;
}

.progress-ring{
  margin-bottom: 10px;
}


</style>
<div class="circle-container-block">
    <div class="circle-container">
        <div class="icon-container">
            <img class="tech-icon" />
        </div>
        <svg class="progress-ring" height="120" width="120">
            <circle 
                class="ring-circle glow" 
                stroke-width="7" 
                stroke="#a9dbba" 
                fill="transparent" 
                r="57" 
                cx="60" 
                cy="60" 
            ></circle>
        </svg>
        <span class="title-text">{{}}</span>
    </div>
</div>`;

class CircleProgress extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = 'assets/img/'+this.getAttribute('img');
        this.shadowRoot.querySelector('.title-text').innerHTML = this.getAttribute('techname');
        this.drawCirclePercent();
    }

    drawCirclePercent() {
        var circle = this.shadowRoot.querySelector('circle');
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        const offset = circumference - (this.getAttribute('percent') / 100 * circumference);
        circle.style.strokeDashoffset = offset;
    }
}

window.customElements.define('circle-progress', CircleProgress);