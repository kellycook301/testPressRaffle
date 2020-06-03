function getRaffleWinner() {
    var raffleEntries = new Array(
    '@kellycook301',
    '@jordenhart',
    '@ianjaredbell',
    '@grantth7',
    '@elxchoppo',
    '@early_humans',
    '@_alexdejong',
    '@onlinedungeon',
    '@dontcallmevince',
    '@tosinabasi',
    '@detroitarun',
    '@elxchoppo',
    '@tatemercer',
    '@youngfratjesus',
    '@bertkreischer',
    '@andrewvle',
    '@florencepugh',
    '@streetprowl_abe',
    '@m_shinoda',
    '@jordenhart',
    '@detroitarun',
    '@grantth7',
    '@kellycook301',
    '@jordenhart'
    );
    var random = raffleEntries[Math.floor(Math.random() * raffleEntries.length)];
    var text = "Congrats to " + random + " for winning a test press, a wall flag, and a shirt. Please contact us for your shirt choice. MORE IMPORTANTLY, thank you to everyone who entered for contributing to Black Lives Matter Global Network."
    document.getElementById("message").innerHTML=text;
}