const tTextTemplate = document.createElement('template');
tTextTemplate.innerHTML =  `
<style>
.blinking-cursor {
    font-weight: 100;
    font-size: 20px;
    color: #ede9ff;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  
  @keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ede9ff;
    }
  }
  
  @-moz-keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: #ede9ff;
    }
  }
  
  @-webkit-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ede9ff;
    }
  }
  
  @-ms-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ede9ff;
    }
  }
  
  @-o-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ede9ff;
    }
  }

  .text-content{
    display: inline-block;
    transition: width 1s;
  }

  .icon{
    padding-right: 10px;
  }
</style>
<div class="animate-text">
    <span class="icon" style="font-size:20px"></span><div class="text-content"></div><span class="blinking-cursor">|</span>
</div>`;

class TypingText extends HTMLElement {
    texts= []
    currentText = ""
    $TextElement = null
    textCounter = 0
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(tTextTemplate.content.cloneNode(true));
        this.texts = this.getAttribute('texts').split(",");
        this.$TextElement = this.shadowRoot.querySelector('.text-content');
        this.$IconElement = this.shadowRoot.querySelector('.icon');
        this.startTextAnimation();
    }

    startTextAnimation() {
        this.fillText(this.texts[this.textCounter]+'...');
        this.setIcon();
    }

    fillText(textContent) {
        if(textContent){
            this.currentText = textContent;
        }
        if(this.$TextElement.innerText.length < this.currentText.length){
            this.$TextElement.innerText = this.$TextElement.innerText + this.currentText.charAt(this.$TextElement.innerText.length);
            setTimeout(() => {
                this.fillText();
            }, 100);
        } else {
            setTimeout(() => {
                this.trimText();
            }, 1000);
        }
    }

    trimText(){
        let textContent = this.$TextElement.innerText
        this.$TextElement.innerText =  textContent.substring(0, textContent.length - 1);
        if(textContent.length <= 1){
            this.clearIcon();
            setTimeout(() => {
                this.changeText();
            }, 500)
        } else {
            setTimeout(() => {
                this.trimText();
            }, 50)
        }
    }

    clearIcon(){
      this.$IconElement.innerHTML = '';
    }

    setIcon() {
      let iconCode = "";
      if(this.textCounter == 0){
          iconCode = "🖥️";
          /* iconCode = '<i class="fas fa-code"></i>'; */
      } else if(this.textCounter == 1){
          iconCode = "📸";
          /* iconCode = '<i class="fas fa-camera"></i>'; */
      } else {
          iconCode = '✈️';
          /* iconCode = '<i class="fas fa-plane"></i>'; */
          //iconCode = "&#128692";
      }
      this.$IconElement.innerHTML = iconCode;
    }

    changeText(){
        this.textCounter++;
        
        if(this.textCounter == this.texts.length){
            this.textCounter = 0;
        }
        this.setIcon();

        this.fillText(this.texts[this.textCounter] + '...');
        /* this.$TextElement.innerHTML = this.texts[this.textCounter] + '... ';
        setTimeout(() => {
            this.trimText();
        }, 1000) */
    }
}

window.customElements.define('typing-text', TypingText);