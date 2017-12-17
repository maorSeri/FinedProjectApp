﻿



ko.validation.registerExtenders();

function AppViewModel() {
    var that = this;
    this.UserName = ko.observable("").extend({ required: { message: "אנא מלא/י את שם המשתמש שלך" } });
    this.IdNum = ko.observable("").extend({ required: { message: "אנא מלא/י את מס' תעודת הזהות שלך" }, number: true,min:9,max: 9 });
    this.PName = ko.observable("").extend({ required: { message: "אנא מלא/י את השם הפרטי שלך" } });
    this.FName = ko.observable("").extend({ required: { message: "אנא מלא/י את שם המשפחה שלך" } });
    this.Avg = ko.observable("").extend({ required: { message: "אנא מלא/י את מס' תעודת הזהות שלך" }, number: true });
    this.GenderOptions = ko.observableArray(["זכר", "נקבה"]);
    this.reserchOptions = ko.observableArray(["תעשיה", "מחקר"]);
    this.locationOptions = ko.observableArray(["לא משנה","אוניברסיטה", "צפון","דרום","מרכז"]);
    this.GroupOptions = ko.observableArray(["1", "2", "3", "4"]);
    this.ExpOptions = ko.observableArray(["ללא נסיון", "עד שנה", "1-2 שנים", "3-5 שנים","יותר מ-5 שנים"]);
    this.BirthOptions = ko.observableArray(["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002"]);
    this.selectedReserch = ko.observable("");
    this.selectedLocation = ko.observable("");
    this.selectedBirth = ko.observable("");
    this.selectedGender = ko.observable("");
    this.selectedGroup = ko.observable("");
    this.selecteExp = ko.observable("");
    this.courses = ko.observableArray([]);
    this.codeLang = ko.observableArray([]);
    this.free = ko.observableArray([]);
    
    this.StartBtn = function () {
        var JsUser = ko.toJS(this.UserName);
        var JsIdNum = ko.toJS(this.IdNum);
        var JsPName = ko.toJS(this.PName);
        var JsFName = ko.toJS(this.FName);
        var JsAvg = ko.toJS(this.Avg);
        var JsselectedReserch = ko.toJS(this.selectedReserch);
        var JsselectedLocation = ko.toJS(this.selectedLocation);
        var JsselectedBirth = ko.toJS(this.selectedBirth);
        var JsselectedGender = ko.toJS(this.selectedGender);
        var JsselectedGroup = ko.toJS(this.selectedGroup);
        var JsselecteExp = ko.toJS(this.selecteExp);
        var Jscourses = ko.toJS(this.courses);
        var JscodeLang = ko.toJS(this.codeLang);
        var Jsfree = ko.toJS(this.free);
        var JsonData = {
            "UserName": JsUser,
            "PrivateName": JsPName,
            "LastName": JsFName,
            "IdNum": JsIdNum,
            "Avrage": JsAvg,
            "Research": JsselectedReserch,
            "Location": JsselectedLocation,
            "Birth": JsselectedBirth,
            "Gender": JsselectedGender,
            "Group": JsselectedGroup,
            "Exp": JsselecteExp,
            "Coursrs": Jscourses,
            "CodeLang": JscodeLang,
            "Free": Jsfree,
        };
        var apiUrl = "../api/Students";
        $.post(apiUrl, JsonData).done(function (item) {
            alert("User registered successfully");
            sessionStorage.loggedInUser = ko.toJS(that.UserName);
            window.location.href = "Maze.html";
        }).fail(function (jqXHR, status, errorThrown) {
            // if wrong arguments
            if (errorThrown == "BadRequest") {
                alert('Wrong details');
            }
            // if the user already exist
            else if (errorThrown == "Conflict") {
                alert('Username already exist');
            }
            else {
                alert('Failed to send request to server');
            }

        });

    };

    this.isFormValid = ko.computed(function () {

        return  this.UserName.isValid();
    }, this);
}

ko.applyBindings(AppViewModel);

