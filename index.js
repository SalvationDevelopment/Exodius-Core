const version = require('./package').version;
const Duel = require('./duel')
const duels = {

}


const defaultLogHandler = console.log;

function defaultCardReader(filename, data) {
    return data;
}

function getVersion() {
    return version;
}

function createDuel(id, options) {
    if (!options.cardReader) {
        console.error('Card Reader Required!');
        return;
    }
    if (!options.scriptReader) {
        console.error('Card Reader Required!');
        return;
    }

    if (!options.logReader) {
        options.logReader = defaultLogHandler;
        return;
    }

    const duel = new Duel(option);
    duel.game_field.core.duel_options = options.flags; // should be an array;

    options.team2.forEach((team) => {
        duel.game_field.core.player[i].lp = team.startingLP;
        duel.game_field.core.player[i].start_lp = team.startingLP;
        duel.game_field.core.player[i].start_count = team.startingDrawCount;
        duel.game_field.core.player[i].draw_count = team.drawCountPerTurn;
    });

    duels[id] = duel;
    return true;
}


function destroyDuel (id) {
    delete duels[id];
}


function newCard (id, info) {
    const game_field = duels[id].game_field;
    if (info.duelist === 0) {
        if(game_field.is_location_useable(info.con, info.loc, info.seq)) {

        }
    }
}

module.exports = {
    createDuel,
    destroyDuel,
    getVersion
};


