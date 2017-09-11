"use strict";

import GetElem from "./GetElem.js";

export default class AddEvent {
    constructor() {
        this.addEventToMainPageButtons();
        this.addEventToLoginPageButtons();
        this.addEventToRegisterPageButtons();
        this.addEventToRecordsPageButtons();
        this.showOnlyOnePage("main-page");
    }

    hideAllPages() {
        document.getElementsByClassName('main-page')[0].hidden = true;
        document.getElementsByClassName('register-page')[0].hidden = true;
        document.getElementsByClassName('records-page')[0].hidden = true;
        document.getElementsByClassName('login-page')[0].hidden = true;
    }

    showOnlyOnePage(pageName) {
        this.hideAllPages();
        document.getElementsByClassName(pageName.toString())[0].hidden = false;
    }

    addEventToMainPageButtons() {
        const objGetElem = new GetElem();
        const t = this;

        objGetElem.getEl("main-menu__button-play").addEventListener("click", function(){
            alert("start game");
        });

        objGetElem.getEl("main-menu__button-login").addEventListener("click", function(){
            t.showOnlyOnePage("login-page");
        });

        objGetElem.getEl("main-menu__button-records").addEventListener("click", function(){
            t.showOnlyOnePage("records-page");
        });

        objGetElem.getEl("main-menu__button-info").addEventListener("click", function(){
            alert("information about game");
        });
    }

    addEventToLoginPageButtons() {
        const t = this;
        const objGetElem = new GetElem();

        objGetElem.getEl("login-form__button").addEventListener("click", function(){
            alert("login logic");
        });

        objGetElem.getEl("login-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("main-page");
        });

        objGetElem.getEl("login-page__link-to-register").addEventListener("click", function () {
            t.showOnlyOnePage("register-page");
        });
    }

    addEventToRegisterPageButtons() {
        const t = this;
        const objGetElem = new GetElem();

        objGetElem.getEl("register-form__button").addEventListener("click", function(){
            alert("register logic");
        });

        objGetElem.getEl("register-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("login-page");
        });

        objGetElem.getEl("login-page__link-to-login").addEventListener("click", function () {
            t.showOnlyOnePage("login-page");
        });
    }

    addEventToRecordsPageButtons() {
        const t = this;
        const objGetElem = new GetElem();

        objGetElem.getEl("records-page__button-back").addEventListener("click", function () {
            t.showOnlyOnePage("main-page");
        });

        objGetElem.getEl("register-form__button").addEventListener("click", function(){
            alert("register logic");
        });
    }
}