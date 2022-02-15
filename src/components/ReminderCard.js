import * as AdaptiveCards from "adaptivecards";
import React, { useEffect,useRef } from 'react';
import "../styles/ReminderCard.css"

let card = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.5",
    "speak": "<s>Your  meeting about \"Adaptive Card design session\"<break strength='weak'/> is starting at 20:30pm</s><s>Do you want to snooze <break strength='weak'/> or do you want to send a late notification to the attendees?</s>",
    "body": [
        {
            "type": "TextBlock",
            "text": "Card design session",
            "size": "Large",
            "weight": "Bolder",
            "wrap": true,
            "style": "heading"
        },
        {
            "type": "TextBlock",
            "text": " Conf Room 112/3377 (10) ",
            "isSubtle": true,
            "wrap": true
        },
        {
            "type": "TextBlock",
            "text": "20:30 - 09:30",
            "isSubtle": true,
            "spacing": "None",
            "wrap": true
        },
        {
            "type": "TextBlock",
            "text": "Snooze for",
            "wrap": true
        },
        {
            "type": "Input.ChoiceSet",
            "id": "snooze",
            "value": "5",
            "choices": [
                {
                    "title": "5 minutes",
                    "value": "5"
                },
                {
                    "title": "15 minutes",
                    "value": "15"
                },
                {
                    "title": "30 minutes",
                    "value": "30"
                }
            ]
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Snooze",
            "data": {
                "x": "snooze"
            }
        },
        {
            "type": "Action.Submit",
            "title": "I'll be late",
            "data": {
                "x": "late"
            }
        }
    ]
}

var adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
        fontFamily: "RooneySans-Regular,Lucida Grande, Lucida Sans Unicode, Trebuchet MS, sans-serif;"
        
        // More host config options
    });


    adaptiveCard.parse(card);
    
    var renderedCard = adaptiveCard.render();



    const ReminderCard = () => {
        const container = useRef(null)
        useEffect( () => {
            setTimeout( () => {
                container.current.appendChild(renderedCard)
            },900)
        });
        return(
            <div className="reminderCard">
                <div id={'container'} ref={container} />
            </div>
        )
    };
    export default ReminderCard;
    
