let map;
let markers = [];
let activeFaculty = 'all';

// initMap is the call back function - calls google maps using map id 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.47144744120567, lng: -80.54290959691977 },
        zoom: 16,
        mapId: 'bf02be37cedfddc179a550e9'
    });


    // constants for image scaling
    const artW = 40;
    const artH = artW;
    const healthW = 40;
    const healthH = healthW;
    const envW = 40;
    const envH = envW;
    const engW = 40;
    const engH = engW;
    const mathW = 40;
    const mathH = mathW;
    const sciW = 40;
    const sciH = sciW;
    const otherW = 40;
    const otherH = otherW;


    // Create marker data for all buildings and loop through it.
    const markerData = [
        ["Arts Lecture Hall", 43.468869110847805, -80.54182133730441, "art.png", artW, artH],
        ["Hagey Hall of Humanities", 43.46791957904823, -80.54149772673757, "art.png", artW, artH],
        ["Psychology, Anthropology, Sociology", 43.467321987833046, -80.54239543493853, "art.png", artW, artH],
        ["Modern Languages", 43.469075696219704, -80.5427813576292, "art.png", artW, artH],
        ["Theatre of Arts", 43.468995082815574, -80.54325784411755, "art.png", artW, artH],
        ["Dana Porter Arts Library", 43.469874980997744, -80.54239621530134, "art.png", artW, artH],
        ["Environment 2", 43.46806738653457, -80.5430725311803, "env.png", envW, envH],
        ["Environment 1", 43.46841693732167, -80.54253997011023, "env.png",  envW, envH],
        ["Environment 3", 43.468286851658355, -80.54359146439484, "env.png",  envW, envH],
        ["B.C Matthews Hall", 43.47426957576911, -80.54590688402736, "health.png",  envW, envH],
        ["Health Expansion", 43.47371157308569, -80.54625872875845, "health.png", healthW, healthH],
        ["Lyle S. Hallman Instute for Health Promotion", 43.47337377377929, -80.54597302691886, "health.png",healthW, healthH],
        ["Physical Activites Complex", 43.47235360388877, -80.54612674227359, "health.png", healthW, healthH],
        ["Biology 1", 43.47095599695975, -80.54313467815838, "sci.png", sciW, sciH],
        ["Biology 2", 43.4708545756471, -80.54385568644474, "sci.png", sciW, sciH],
        ["Chemistry 2", 43.47208253010809, -80.54293049809654, "sci.png", sciW, sciH],
        ["Earth Sciences & Chemistry", 43.471515891517065, -80.54271247109445, "sci.png", sciW, sciH],
        ["Quantum-Nano Centre", 43.4712671613093, -80.54440483805239, "sci.png", sciW, sciH],
        ["Physics", 43.47065468966459, -80.5413595864476, "sci.png",sciW, sciH],
        ["Science Teaching Complex", 43.47073806543277, -80.54346171344146, "sci.png", sciW, sciH],
        ["Energy Research Centre", 43.47387287413035, -80.5444400152599, "sci.png", sciW, sciH],
        ["Engineering 2", 43.471115209257775, -80.54042987297068, "eng.png", engW, engH],
        ["Centre for Environmental and Information Technology", 43.47191109249704, -80.54214938552167, "eng.png", engW, engH],
        ["Engineering 3", 43.471702221582454, -80.54211428644545, "eng.png", engW, engH],
        ["Engineering 5", 43.47295254801296, -80.54014932878889, "eng.png", engW, engH],
        ["Engineering 6", 43.47323128819193, -80.53855371527544, "eng.png", engW, engH],
        ["Engineering 7", 43.47322047535301, -80.5395024422754, "eng.png", engW, engH],
        ["Carl A. Pollock Hall", 43.471100964637266, -80.53937757295607, "eng.png", engW, engH],
        ["Douglas Wright Engineering Building", 43.47003418067286, -80.54027037110261, "eng.png", engW, engH],
        ["J.R. Coutts Engineering Lecture Hall", 43.470356476221525, -80.54081338644755, "eng.png", engW, engH],
        ["Davis Centre", 43.47303051675333, -80.5419902711069, "math.png", mathW, mathH],
        ["Mathematics and Computer Building", 43.47215876903833, -80.5439318973047, "math.png", mathW, mathH],
        ["William G. Davis Computer Research Centre", 43.472763829653495, -80.54216227134005, "math.png", mathW, mathH],
        ["William M. Tatham Centre for Co-operative and Experiential Education", 43.469101182601726, -80.54123447109194, "uwat.png", 19.452, 22.36],
        ["South Campus Hall", 43.469427013826554, -80.54036744414373, "uwat.png", 19.452, 22.36],
        ["Graduate House", 43.469914771476574, -80.54087721342982, "uwat.png", 19.452, 22.36],
        ["Ira G. Needles Hall", 43.469717567665164, -80.5435683711196, "uwat.png", 19.452, 22.36],
        ["Student Life Centre", 43.4716855329217, -80.54540308644896, "uwat.png", 19.452, 22.36],
        ["University Club", 43.47259512301811, -80.5473687321108, "uwat.png", 19.452, 22.36],
        ["Central Services Building", 43.47413483102757, -80.54371201523857, "uwat.png", 19.452, 22.36],
        ["Commissary", 43.474222092029166, -80.54290758000691, "uwat.png", 19.452, 22.36],
        ["General Services Building", 43.473607714960785, -80.54279057114266, "uwat.png", 19.452, 22.36]
    ];

    for( let i = 0; i < markerData.length; i++) {
        const currMarker = markerData[i];
        const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]}, 
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            }, 
            animation: google.maps.Animation.DROP
        });

        markers.push({
            marker,
            name: currMarker[0],
            faculty: currMarker[3].split('.')[0]
        });
    }

    setupMapControls();

}

function setupMapControls() {
    const searchInput = document.getElementById('building-search');
    const clearButton = document.getElementById('clear-search');
    const status = document.getElementById('search-status');
    const filterButtons = document.querySelectorAll('.faculty-filter');

    function updateMarkers() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        markers.forEach((item) => {
            const matchesFaculty = activeFaculty === 'all' || item.faculty === activeFaculty;
            const matchesSearch = item.name.toLowerCase().includes(searchTerm);
            const isVisible = matchesFaculty && matchesSearch;

            item.marker.setVisible(isVisible);
            if (isVisible) {
                visibleCount++;
            }
        });

        status.textContent = searchTerm || activeFaculty !== 'all'
            ? `${visibleCount} building${visibleCount === 1 ? '' : 's'} shown`
            : 'Showing all buildings';
    }

    searchInput.addEventListener('input', () => {
        updateMarkers();

        const searchTerm = searchInput.value.trim().toLowerCase();
        const match = markers.find((item) => {
            const matchesFaculty = activeFaculty === 'all' || item.faculty === activeFaculty;
            return matchesFaculty && item.name.toLowerCase().includes(searchTerm);
        });

        if (match && searchTerm) {
            map.panTo(match.marker.getPosition());
            map.setZoom(18);
        }
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        updateMarkers();
        searchInput.focus();
    });

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            activeFaculty = button.dataset.faculty;
            filterButtons.forEach((filterButton) => {
                filterButton.classList.toggle('active', filterButton === button);
            });
            updateMarkers();
        });
    });
}



window.initMap = initMap;

