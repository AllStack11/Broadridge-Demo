import * as AdaptiveCards from "adaptivecards";
import React, { useEffect,useRef } from 'react';
import "../styles/DemoCard.css"
// Author a card
// In practice you'll probably get this from a service
// see http://adaptivecards.io/samples/ for inspiration
var card = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "Image",
            "url": "https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/uptrend.png"
        },
        {
            "type": "TextBlock",
            "text": "Lorem Ipmsum"
        }
    ],
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "Action 1",
            "url": "http://adaptivecards.io"
        },
        {
            "type": "Action.OpenUrl",
            "title": "Action 2",
            "url": "http://github.com/Microsoft/AdaptiveCards"
        }
    ]
};

// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

// Set its hostConfig property unless you want to use the default Host Config
// Host Config defines the style and behavior of a card
adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
    fontFamily: "RooneySans-Regular,Lucida Grande, Lucida Sans Unicode, Trebuchet MS, sans-serif;"
    // More host config options
});

// Set the adaptive card's event handlers. onExecuteAction is invoked
// whenever an action is clicked in the card
adaptiveCard.onExecuteAction = function(action) { alert("Ow!"); }


// Parse the card payload
adaptiveCard.parse(card);

// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();

// And finally insert it somewhere in your page:
//document.getElementById("demoCard").appendChild(renderedCard);


const DemoCard = () => {
    const container = useRef(null)
    useEffect( () => {
        container.current.appendChild(renderedCard)
    });
    return(
        <div className="demoCard">
            <div id={'container'} ref={container} />
        </div>
    )
};
export default DemoCard;