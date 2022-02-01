function setContent() {
    document.getElementById("title").innerHTML = title;
    document.getElementById("intro").innerHTML = intro;

    // document.getElementById("heading_content").innerHTML = welcome_content;
    // document.getElementById("heading_started").innerHTML = getting_started;
    // document.getElementById("download_telegram").innerHTML = downloading_telegram;
    // document.getElementById("starting_bot").innerHTML = starting_bot;
    // document.getElementById("configuration_bot").innerHTML = configuration_bot;
    // document.getElementById("heading_instructions").innerHTML = instructions;
    // document.getElementById("instructions_personalbot").innerHTML = personalbot;
    // document.getElementById("instructions_enterraidbot").innerHTML = enterraidbot;
    // document.getElementById("instructions_channel_text").innerHTML = channel_text;
    // document.getElementById("instructions_channel_pictured").innerHTML = channel_pictured;
    // document.getElementById("heading_features").innerHTML = features;
    // document.getElementById("features_manual_raid_input").innerHTML = manual_raid_input;
    // document.getElementById("features_ex_raid_gyms").innerHTML = ex_raid_gyms;
    // document.getElementById("features_blacklisting_gyms").innerHTML = blacklisting_gyms;
    // document.getElementById("heading_bot_status").innerHTML = bot_status;
    // document.getElementById("bot_status_channel_list").innerHTML = channel_list;
    // document.getElementById("bot_status_channel_map").innerHTML = channel_map;
    // document.getElementById("heading_faq").innerHTML = heading_faq;
    // document.getElementById("faq").innerHTML = faq;
    // document.getElementById("heading_questions").innerHTML = questions;
    // document.getElementById("telegram_support_group").innerHTML = telegram_support_group;
    // document.getElementById("legal_notice").innerHTML = legal_notice;
    // document.getElementById("main_privacy_policy").innerHTML = main_privacy_policy;
};
ss

var language = "";

if (localStorage.getItem("language") == "") {
    language = window.navigator.language;
} else {
    language = localStorage.getItem("language");
}

jQuery.i18n.properties({
    name: 'Messages',
    path: 'language_files',
    mode: 'both',
    language: language,
    callback: function() {
        setContent();
    }
});

function changeLang(lang) {
    localStorage.setItem("language", lang);
    language = lang;

    jQuery.i18n.properties({
        name: 'Messages',
        path: 'language_files',
        mode: 'both',
        language: lang,
        callback: function() {
            setContent();
        }
    });
}

$(function() {
    $('#accordion').sortable();
    // $('#accordion').on("show.bs.collapse", function() { $('#accordion').sortable('disable'); });
    // $('#accordion').on("hide.bs.collapse", function() { $('#accordion').sortable('enable'); });

    $('#accordion').accordion({
        collapsible: true,
        active: true,
        heightStyle: 'fill',
        header: 'card'
    }).sortable({
        change: function(event, ui) {
            ui.placeholder.css({ visibility: 'visible', border: '5px solid yellow' });
        },
        items: '.card'
    }).bind('sortupdate', function(e, ui) {
        console.log('make ajax');
    });
});