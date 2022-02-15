import * as AdaptiveCards from "adaptivecards";
import React, { useEffect,useRef } from 'react';
import "../styles/TickerCard.css"
let card = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.5",
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Broadridge Corporation",
                    "size": "Medium",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "Nasdaq Global Select: MSFT",
                    "isSubtle": true,
                    "spacing": "None",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "{{DATE(2019-05-03T20:00:00+00:00, SHORT)}} {{TIME(2019-05-03T20:00:00+00:00)}}",
                    "wrap": true
                }
            ]
        },
        {
            "type": "Container",
            "spacing": "None",
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "128.90 ",
                                    "size": "ExtraLarge",
                                    "wrap": true
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "▲ 2.69 USD (2.13%)",
                                    "spacing": "None",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "FactSet",
                                    "facts": [
                                        {
                                            "title": "Open",
                                            "value": "127.42 "
                                        },
                                        {
                                            "title": "High",
                                            "value": "129.43 "
                                        },
                                        {
                                            "title": "Low",
                                            "value": "127.25 "
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

    var adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
        fontFamily: "RooneySans-Regular,Lucida Grande, Lucida Sans Unicode, Trebuchet MS, sans-serif;"
        
        // More host config options
    });
    //adaptiveCard.onExecuteAction = function(action) { alert("Ow!"); }

    adaptiveCard.parse(card);
    
    var renderedCard = adaptiveCard.render();

    //document.body.appendChild(renderedCard);

    const TickerCard = () => {
        const container = useRef(null)
        useEffect( () => {
            setTimeout( () => {
                container.current.appendChild(renderedCard)
            },1200)
        });
        return(
            <div className="tickerCard">
                <div id={'container'} ref={container} />
            </div>
        )
    };
    export default TickerCard;
    
