import * as AdaptiveCards from "adaptivecards";
import React, { useEffect,useRef } from 'react';
import "../styles/FormsCard.css"
let card = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.5",
    "body": [
        {
            "type": "TextBlock",
            "size": "Medium",
            "weight": "Bolder",
            "text": " Input.Text elements",
            "horizontalAlignment": "Center",
            "wrap": true,
            "style": "heading"
        },
        {
            "type": "Input.Text",
            "label": "Name",
            "id": "SimpleVal",
            "isRequired": true,
            "errorMessage": "Name is required"
        },
        {
            "type": "Input.Text",
            "label": "Email",
            "style": "Email",
            "id": "EmailVal"
        },
        {
            "type": "Input.Text",
            "label": "Phone",
            "style": "Tel",
            "id": "TelVal"
        },
        {
            "type": "Input.Number",
            "label": "Quantity",
            "min": -5,
            "max": 5,
            "value": 1,
            "id": "NumVal",
            "errorMessage": "The quantity must be between -5 and 5"
        },
        {
            "type": "Input.Date",
            "label": "Due Date",
            "id": "DateVal",
            "value": "2017-09-20"
        },
        {
            "type": "Input.Time",
            "label": "Start time",
            "id": "TimeVal",
            "value": "16:59"
        },
        {
            "type": "TextBlock",
            "size": "Medium",
            "weight": "Bolder",
            "text": "Input ChoiceSet ",
            "horizontalAlignment": "Center",
            "wrap": true,
            "style": "heading"
        },
        {
            "type": "Input.ChoiceSet",
            "id": "CompactSelectVal",
            "label": "What color do you want? (compact)",
            "value": "1",
            "choices": [
                {
                    "title": "Red",
                    "value": "1"
                },
                {
                    "title": "Green",
                    "value": "2"
                },
                {
                    "title": "Blue",
                    "value": "3"
                }
            ]
        },
        {
            "type": "Input.ChoiceSet",
            "id": "SingleSelectVal",
            "label": "What color do you want? (expanded)",
            "style": "expanded",
            "value": "1",
            "choices": [
                {
                    "title": "Red",
                    "value": "1"
                },
                {
                    "title": "Green",
                    "value": "2"
                },
                {
                    "title": "Blue",
                    "value": "3"
                }
            ]
        },
        {
            "type": "Input.ChoiceSet",
            "id": "MultiSelectVal",
            "label": "What color do you want? (multiselect)",
            "isMultiSelect": true,
            "value": "1,3",
            "choices": [
                {
                    "title": "Red",
                    "value": "1"
                },
                {
                    "title": "Green",
                    "value": "2"
                },
                {
                    "title": "Blue",
                    "value": "3"
                }
            ]
        },
        {
            "type": "TextBlock",
            "size": "Medium",
            "weight": "Bolder",
            "text": "Input.Toggle",
            "horizontalAlignment": "Center",
            "wrap": true,
            "style": "heading"
        },
        {
            "type": "Input.Toggle",
            "label": "Please accept the terms and conditions:",
            "title": "I accept the terms and conditions (True/False)",
            "id": "AcceptsTerms",
            "isRequired": true,
            "errorMessage": "Accepting the terms and conditions is required"
        },
        {
            "type": "Input.Toggle",
            "label": "How do you feel about red cars?",
            "title": "Red cars are better than other cars",
            "valueOn": "RedCars",
            "valueOff": "NotRedCars",
            "id": "ColorPreference"
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Submit",
            "data": {
                "id": "1234567890"
            }
        },
        {
            "type": "Action.ShowCard",
            "title": "Show Card",
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "Input.Text",
                        "label": "enter comment",
                        "id": "CommentVal"
                    }
                ],
                "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "OK"
                    }
                ]
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



    const FormCard = () => {
        const container = useRef(null)
        useEffect( () => {
            setTimeout( () => {
                container.current.appendChild(renderedCard)
            },900)
        });
        return(
            <div className="formCard">
                <div id={'container'} ref={container} />
            </div>
        )
    };
    export default FormCard;
    
