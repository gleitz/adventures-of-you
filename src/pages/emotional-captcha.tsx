// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./emotional-captcha.css"

class EmotionalCaptcha extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  handleClick = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  }

  render() {
    return (
      <Layout>
        <SEO title="Emotional Captcha" />
        <h1>Emotional Captcha</h1>
        <div>To enter the experience we need to check your humanity.</div>
        <div
          class="container"
        >
          <div class="captcha-container">
            <div class="header">
              <p>
                Select all squares<br />that make you <strong>angry</strong>
              </p>
              <input type="hidden" value="selfiesticks" name="category" />
            </div>

            <div class="content">
              <div
                class={this.state.isActive ? 'captcha-image active' : 'captcha-image'}
                data-token="$1$/afeNSK.$BwLqdMpYWhK7kt5BFUp0v."
                data-id="9"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$/afeNSK.$BwLqdMpYWhK7kt5BFUp0v.&amp;id=9"
                  alt=""
                  onClick={this.handleClick}
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$CCczlEWq$82KOz3nHz3a6ulIITxqgJ."
                data-id="5"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$CCczlEWq$82KOz3nHz3a6ulIITxqgJ.&amp;id=5"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$YOZWcR/y$R/Bpnc1Qdlb6ZP/tJLdCT/"
                data-id="8"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$YOZWcR/y$R/Bpnc1Qdlb6ZP/tJLdCT/&amp;id=8"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$467UYtxo$NZF18b6xvMV6pO24PtrXU1"
                data-id="1"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$467UYtxo$NZF18b6xvMV6pO24PtrXU1&amp;id=1"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$Qkjh2TyP$gPlNxN79phX9veIUaJBc9."
                data-id="7"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$Qkjh2TyP$gPlNxN79phX9veIUaJBc9.&amp;id=7"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$Bj2B51Zh$qTUbsw7VIvJwiQgEMDG0m."
                data-id="7"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$Bj2B51Zh$qTUbsw7VIvJwiQgEMDG0m.&amp;id=7"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$k6dqfwm9$SQTSR1qTi43nNfppbLHmm/"
                data-id="4"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$k6dqfwm9$SQTSR1qTi43nNfppbLHmm/&amp;id=4"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$iFC0GHlH$9Cfx/bDywRCSkOKLuO9xu."
                data-id="3"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$iFC0GHlH$9Cfx/bDywRCSkOKLuO9xu.&amp;id=3"
                  alt=""
                />
              </div>
              <div
                class="captcha-image"
                data-token="$1$Svy7kPTJ$TcBr7ADKQljgEzFiMZRhJ/"
                data-id="6"

              >
                <img
                  src="http://www.humansnotinvited.com/captcha/image.php?image_name=$1$Svy7kPTJ$TcBr7ADKQljgEzFiMZRhJ/&amp;id=6"
                  alt=""
                />
              </div>{" "}
            </div>
          </div>

          <div class="footer">
            <a href="javascript:void(0)" class="button">
              Verify
            </a>
          </div>
        </div>
      </Layout>
    )
  }

}

export default EmotionalCaptcha
