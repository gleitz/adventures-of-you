import React, { useMemo } from "react"

import "../components/urza.css"

const replaceAll = require('string.prototype.replaceall')

import redBackground from "../images/urza/gen-bg-R.jpg"
import whiteBackground from "../images/urza/gen-bg-W.jpg"
import artifactBackground from "../images/urza/gen-bg-A.jpg"
import blueBackground from "../images/urza/gen-bg-U.jpg"
import greenBackground from "../images/urza/gen-bg-G.jpg"
import goldBackground from "../images/urza/gen-bg-M.jpg"
import blackBackground from "../images/urza/gen-bg-B.jpg"
import commonSetSymbol from "../images/urza/gen-tgc-icon-diagram-common.png"
import uncommonSetSymbol from "../images/urza/gen-tgc-icon-diagram-uncommon.png"
import rareSetSymbol from "../images/urza/gen-tgc-icon-diagram-rare.png"
import mythicSetSymbol from "../images/urza/gen-tgc-icon-diagram-mythic.png"
import symbolB from "../images/urza/symbol-B.png"
import symbolC from "../images/urza/symbol-C.png"
import symbolG from "../images/urza/symbol-G.png"
import symbolR from "../images/urza/symbol-R.png"
import symbolT from "../images/urza/symbol-T.png"
import symbolU from "../images/urza/symbol-U.png"
import symbolW from "../images/urza/symbol-W.png"

import tempImage from "../images/urza/temp-image.jpg"

import textBackground from "../images/urza/text_background.jpg"

const iconRegex = /{(.*?)}/gi
const manaRegex = /{([A-Z]*?)}/gi
const getIconHtml = (symbol, isLarge) => {
  return `<abbr class="card-symbol ${isLarge ? "lg" : ""} card-symbol-${symbol}" title="tap this permanent">{T}</abbr>`
}

const css = `
        .frame-header,
        .frame-type-line {
          background: linear-gradient(
            0deg,
            rgba(201, 216, 201, 0.3),
            rgba(201, 216, 209, 0.3)
          ),
          url("${textBackground}");
          display: flex;
          margin-top: 10px;
          margin-left: 5px;
          margin-right: 5px;
          padding: 4px 0px 10px 0px;
          justify-content: space-between;
          border-radius: 18px/40px;
          height: 16px;
        }

        .frame-text-box {
          margin: 0 10px;
          background: #d3ded6;
          background-image: url("${textBackground}");
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 50px 6px;
          font-size: 1em;
          height: 260px;
          box-sizing: border-box;
          /* opacity: 0.91; */
        }

.card-symbol-B{
    background-image:url(${symbolB})
}

.card-symbol-C{
    background-image:url(${symbolC})
}
.card-symbol-G{
    background-image:url(${symbolG})
}
.card-symbol-R{
    background-image:url(${symbolR})
}

.card-symbol-T{
    background-image:url(${symbolT})
}
.card-symbol-U{
    background-image:url(${symbolU})
}
.card-symbol-W{
    background-image:url(${symbolW})
}
.frame-header,.frame-type-line{
    background:linear-gradient(0deg,rgba(201,216,201,.3),rgba(201,216,209,.3)),url(${textBackground});
    display:flex;
    margin-top:10px;
    margin-left:5px;
    margin-right:5px;
    padding:4px 0 10px 0;
    justify-content:space-between;
    border-radius:18px/40px;
    height:70px;
}
.frame-text-box{
    margin:0 10px;
    background:#d3ded6;
    background-image:url(${textBackground});
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding:50px 6px;
    font-size:1em;
    height:260px;
    box-sizing:border-box;
}
`

const UrzasPage = () => {

  // if (typeof window !== "undefined") {
    // const [card, setCard] = useQueryParam("card", JsonParam)
  // } else {

  let card
  try {
    card = JSON.parse(new URLSearchParams(location.search).get('card'))
    if (card === null) {
      throw new Error('No card provided');
    }

  } catch {
    card = {
      "basic_land": "",
      "cardId": "a733af48-332d-484a-9573-98d6db247ad1",
      "deck_name": "",
      "flavorText": "When some stars fell from the sky, many nights were extinguished.",
      "loyalty": "",
      "manaCost": "{R}",
      "name": "Torching up",
      "power": "",
      "rarity": "common",
      "subtypes": "",
      "text": "Torching up deals 1 damage to target creature.",
      "toughness": "",
      "types": "Instant",
      "url": tempImage
    }
  }

  const { cardColor } = useMemo(() => {
    return {
      cardColor: (() => {
        if (card.basic_land) {
          const basic_lands = {
            swamp: "B",
            forest: "G",
            plains: "W",
            island: "U",
            mountain: "R",
          };
          return basic_lands[card.name.toLowerCase()];
        }
        const matches = card.manaCost.match(manaRegex);
        if (!matches) {
          return "A";
        } else if ([...new Set(matches)].length === 1) {
          return matches[0].slice(1, matches[0].length - 1);
        } else {
          return "M";
        }
      })(),
    }
  }, [card])

  const { backgroundUrl, symbol, typesAndSubtypes, descriptionWithImages, isCreature, isPlaneswalker } = useMemo(() => {
    return {
      backgroundUrl: (() => {
        if (cardColor === "R") {
          return redBackground;
        } else if (cardColor === "W") {
          return whiteBackground;
        } else if (cardColor === "A") {
          return artifactBackground;
        } else if (cardColor === "U") {
          return blueBackground;
        } else if (cardColor === "G") {
          return greenBackground;
        } else if (cardColor === "M") {
          return goldBackground;
        } else if (cardColor === "B") {
          return blackBackground;
        }
        return "A";
      })(),
      symbol: (() => {
        if (card.rarity === "common") {
          return commonSetSymbol;
        } else if (card.rarity === "uncommon") {
          return uncommonSetSymbol;
        } else if (card.rarity === "rare") {
          return rareSetSymbol;
        } else if (card.rarity === "mythic") {
          return mythicSetSymbol;
        } else {
          return commonSetSymbol;
        }
      })(),
      typesAndSubtypes: (() => {
        if (card.subtypes) {
          return `${card.types} - ${card.subtypes} `;
        }
        return card.types + " ";
      })(),
      descriptionWithImages: (() => {
        return replaceAll(card.text, iconRegex, (_, symbol) => {
          return getIconHtml(symbol);
        });
      })(),
      isCreature: (() => {
        return card.types && card.types.includes("Creature");
      })(),
      isPlaneswalker: (() => {
        return (
          card.types && card.types.includes("Planeswalker")
        );
      })(),
    }
  }, [card, cardColor])

  const textToHtml = (text, isLarge) => {
    return replaceAll(text, iconRegex, (_, symbol) => {
      return getIconHtml(symbol, isLarge);
    });
  }

  {/*
     <Layout>
     <SEO title="Shelter Island De Lux Library" />
     <h1>Black History</h1>
   */}

  return (
    <div className="card-container-holder">
      <style>{css}</style>
      <div className='padded'>
        <div className="card" id="card">
          <div className="card-container">
            <div
              className="card-background"
              style={{ backgroundImage: `url(${backgroundUrl})` }}
            >
              <div className="card-frame">
                <div className={`frame-header ${cardColor}`}>
                  <h1 className="name">{card.name}</h1>
                  <span className="mana-cost"
                        dangerouslySetInnerHTML={{__html: textToHtml(card.manaCost + ' &nbsp;', true)}}
                  />
                </div>
                <div className="frame-art-wrapper">
                  {card.url
                   ? <img
                       className={`frame-art ${cardColor}`}
                       src={card.url}
                       alt="art"
                     />
                   : <img className={`frame-art loop ${cardColor}`} />
                  }
                </div>
                <div className={`frame-type-line ${cardColor}`}>
                  <h1 className="type">{typesAndSubtypes}</h1>
                  <img src={symbol} id="set-icon" alt="set-icon" />
                </div>
                <div
                  className={`frame-text-box ${cardColor}`}
                >
                  { !card.basic_land &&
                    <div>
                      <p className="description"
                         dangerouslySetInnerHTML={{ __html: textToHtml(card.text).replace(/(?:\r\n|\r|\n)/g, '<br>') }}
                      />

                      <p className="flavour-text"
                         dangerouslySetInnerHTML={{ __html: textToHtml(card.flavorText).replace(
                           /(?:\r\n|\r|\n)/g,
                           '<br>'
                         )}}
                      />
                    </div>
                  }
                </div>

                <div className="frame-bottom-info inner-margin">
                  <div className="fbi-left">
                    <p>Magic.glei.tz &#x2022; Text by Cohere.ai &#x2022; Art by WOMBO</p>
                  </div>

                  <div className="fbi-right">
                    { isCreature
                      ? <div className="power-toughness-container frame-type-line">
                          <h1 className="power-toughness-text">
                            {card.power} / {card.toughness}
                          </h1>
                        </div>
                      : <div className="power-toughness-container">
                          {card.loyalty}
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrzasPage
