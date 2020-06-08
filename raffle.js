function getRaffleWinner() {
    var raffleEntries = new Array(
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@undercut4bieber',
    '@daedricbowhunter',
    '@daedricbowhunter',
    '@jeth_ray',
    '@jeth_ray',
    '@haydengoodridge',
    '@haydengoodridge',
    '@haydengoodridge',
    '@haydengoodridge',
    '@kazeshiini',
    '@awfuldisclosures',
    '@jon_snakeeater',
    '@jon_snakeeater',
    '@malik_richard',
    '@svsshley',
    '@svsshley',
    );
    var random = raffleEntries[Math.floor(Math.random() * raffleEntries.length)];
    var text = "Congrats to " + random + " for winning a test press, a wall flag, and a shirt. Please contact us for your shirt choice. MORE IMPORTANTLY, a big thank you to everyone who entered for contributing to Black Lives Matter Global Network. - Love, TNOV"
    document.getElementById("message").innerHTML=text;
}