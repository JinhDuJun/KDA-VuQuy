var idsInOrder = ["1", "2", "3", "4", "5", "6", "7", "9", "8", "10", "11"];

function setContent() {
    document.getElementById("title").innerHTML = title;
    document.getElementById("intro").innerHTML = intro;
    document.getElementById("ablauf").innerHTML = ablauf;
    document.getElementById("titel_tor").innerHTML = titel_tor;
    document.getElementById("vorbereitung").innerHTML = vorbereitung;
    document.getElementById("schritt_0").innerHTML = schritt_0;
    document.getElementById("schritt_0b").innerHTML = schritt_0b;
    document.getElementById("beschreibung_Tor").innerHTML = beschreibung_Tor;
    document.getElementById("titel_geschenke").innerHTML = titel_geschenke;
    document.getElementById("geschenke_brauthaus").innerHTML = geschenke_brauthaus;
    // document.getElementById("altar_braut").innerHTML = altar_braut;
    document.getElementById("titel_wein").innerHTML = titel_wein;
    document.getElementById("wein_braut").innerHTML = wein_braut;
    document.getElementById("titel_betreten").innerHTML = titel_betreten;
    document.getElementById("braut_betreten").innerHTML = braut_betreten;
    document.getElementById("titel_raeucher").innerHTML = titel_raeucher;
    document.getElementById("braut_raeucher").innerHTML = braut_raeucher;
    document.getElementById("braut_kerzen").innerHTML = braut_kerzen;
    document.getElementById("titel_ringe").innerHTML = titel_ringe;
    document.getElementById("braut_ringe").innerHTML = braut_ringe;
    document.getElementById("titel_mitgift").innerHTML = titel_mitgift;
    document.getElementById("braut_mitgift").innerHTML = braut_mitgift;
    document.getElementById("titel_tee").innerHTML = titel_tee;
    document.getElementById("braut_tee").innerHTML = braut_tee;
    document.getElementById("titel_betelnuss").innerHTML = titel_betelnuss;
    document.getElementById("braut_betelnuss").innerHTML = braut_betelnuss;
    document.getElementById("titel_familie_braut").innerHTML = titel_familie_braut;
    document.getElementById("braut_familie").innerHTML = braut_familie;
    document.getElementById("titel_geschenke_zurueck").innerHTML = titel_geschenke_zurueck;
    document.getElementById("braut_geschenke_zurueck").innerHTML = braut_geschenke_zurueck;
    document.getElementById("brautigam_0").innerHTML = brautigam_0;
    document.getElementById("brautigam_1").innerHTML = brautigam_1;
    document.getElementById("brautigam_2").innerHTML = brautigam_2;
    document.getElementById("brautigam_3").innerHTML = brautigam_3;
    document.getElementById("brautigam_4").innerHTML = brautigam_4;
    document.getElementById("brautigam_5").innerHTML = brautigam_5;
    document.getElementById("brautigam_6").innerHTML = brautigam_6;
    document.getElementById("ende").innerHTML = ende;
    document.getElementById("was_genau").innerHTML = was_genau;
    document.getElementById("list_braeutigam").innerHTML = list_braeutigam;
    document.getElementById("list_braut").innerHTML = list_braut;
    document.getElementById("list_altar").innerHTML = list_altar;
    document.getElementById("list_altar2").innerHTML = list_altar2;
    document.getElementById("list_glaeser").innerHTML = list_glaeser;
    document.getElementById("list_essen").innerHTML = list_essen;
    document.getElementById("list_guests").innerHTML = list_guests;
    document.getElementById("list_braeutigam").innerHTML = list_braeutigam;
    document.getElementById("list_mitgift").innerHTML = list_mitgift;
    document.getElementById("list_mitgift2").innerHTML = list_mitgift2;
    document.getElementById("list_mitgifte").innerHTML = list_mitgifte;
    document.getElementById("list_kerzen").innerHTML = list_kerzen;
    document.getElementById("list_raeucherstaebchen").innerHTML = list_raeucherstaebchen;
    document.getElementById("list_guests_wife").innerText = list_guests + "";
    document.getElementById("list_guests").innerText = list_guests;
    document.getElementById("btn_order").innerText = reihenfolge;
    document.getElementById("frage").innerText = frage;


};


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
        stop: function(event, ui) {
            idsInOrder = $("#accordion").sortable('toArray', { attribute: 'data-order' });
            console.log(idsInOrder);
        },
        items: '.card'
    }).bind('sortupdate', function(e, ui) {
        // console.log('');
    });
});

function output_order() {
    $('#input_order').val(idsInOrder);
    alert("aktuelle Reihenfolge :" + idsInOrder);
}