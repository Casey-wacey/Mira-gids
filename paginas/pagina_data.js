function getUrlParameterByName(name) {
        const url = new URLSearchParams(window.location.search);
        return url.get(name);
    }
document.addEventListener("DOMContentLoaded", function() {
    data = [
        {
        title: "Introductie Pater Pieraerts",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        ExtraextraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Welkom",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Slingerproef van Foucault",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Zeiss-lenzenkijker KMS",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Interactieve sterrenkaart",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Foto Tarantulanevel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Optische banken",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Radiometeoren",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Radioactiviteit",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Geschiedenis heelal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Zonnestelsel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Kometen en meteoren",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Nakhla-meteoriet",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Sterevolutie",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Kosmologie",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Afmetingen heelal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Slingerbeweging",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Afstand vs. Lichttijd",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Afstand vs. Lichttijd",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Weegschaal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Galileo Galilei",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Zonnestelsel als pannenkoek",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Sterren als zandkorrels",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Afstanden meten in het heelal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Met de bus naar de Zon",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Zwart gat - uitleg 1",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Zwart gat - uitleg 2",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Snelheden en bewegingen",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Wandschildering zonnestelsel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Wereldbol",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Lichthinder",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Seizoenen",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "ISS",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Ruimtevaart",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Methodes exoplaneten",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Digitaal weerstation",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Ruimtevaart",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Maan",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Heliostaat (binnengedeelte)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Lego-maquette SDO",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Lichtbreking",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Kleurenwiel en RGB-spots",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Spiegels",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Spectroscopie",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Dwarsdoorsnede Zon",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Plasmabol",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Statisch planetarium",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Exoplaneten",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Waarnemingsterras",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Pater Pieraerts-koepel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Geacclim. telescoopruimte",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Heliostaat (buitengedeelte)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Armillairsfeer (deel 1)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Armillairsfeer (deel 2)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Weerkast (linkerkant)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Weerkast (rechterkant)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Grondthermometers",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Pluviometer oud",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Pluviograaf",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Pluviometer",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Kleine thermometerhut",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Grote thermometerhut",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Saturnus V vs. Abdijkerk",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "450mm Obsession Dobson",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "400mm Meade ACF",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Lego-maquette MIRA",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Valversnelling vacuum",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Hellend vlak",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Behoud impulsmoment",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Wieg van Newton",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Waterbeertjes",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Arecibo-maquette",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Molecules / Vgl. van Drake",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        title: "Proba-2 maquette",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: 'media/videos/placeholder.mp4',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    }
    ];
    
    let nummer = getUrlParameterByName('nummer');
    document.getElementById("pageTitle").innerHTML = data[nummer].title;
    document.getElementById("title").innerHTML = data[nummer].title;
    document.getElementById("algemeen").innerHTML = data[nummer].algemeen;
    document.getElementById("afbeelding").innerHTML = data[nummer].afbeelding;
    document.getElementById("extra").innerHTML = data[nummer].extra;
    document.getElementById("video").src = data[nummer].video;
    document.getElementById("audioTekst").innerHTML = data[nummer].audioTekst;
    document.getElementById("audio").innerHTML = '<source src="media/audio/N' + nummer +'.mp3">'
    document.getElementById("extraAudio").innerHTML = data[nummer].extraAudio;
})