const version = require('./package').version;
const Duel = require('./duel')
const Enums = require('./enums')
const duels = {

}

const defaultLogHandler = console.log;

function defaultCardReader(filename, data) {
    return data;
}

/**
 * Get the version from the base Node package
 * @returns {string} version
 */
function getVersion() {
    return version;
}

/**
 * Create a new Duel
 * @param {string} id
 * @param {} options
 */
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


/**
 * Destroys Duel
 * @param {string} id 
 */
function destroyDuel (id) {
    delete duels[id];
}


/**
 * New Card
 * @param {string} id 
 * @param {*} info 
 */
function newCard (id, info) {
    const game_field = duels[id].game_field;
    if (info.duelist === 0) {
        if (game_field.is_location_useable(info.con, info.loc, info.seq)) {
            const pCard = game_field.newCard(info.code);
            pCard.owner = info.team;
            game_field.addCard(info.con, pCard, info.loc, info.seq);
            pCard.current.position = info.pos;
            
            // if a card is on the field and face-up, run the effect
            if (!(info.loc & LOCATION_ONFIELD) || (info.pos & POS_FACEUP)) {
                pCard.enable_field_effect(true);
                game_field.adjust_instant();
            }

            if (info.loc & LOCATION_ONFIELD) {
                if (info.loc == LOCATION_MZONE) {
                    pCard.set_status(STATUS_PROC_COMPLETE, true);
                }
            }
        }
    } else {
        if (info.team > 1 || !(info.loc & (LOCATION_DECK | LOCATION_EXTRA))) {
            return;
        }

        --info.duelist;
        const pCard = duels.newCard(info.code);
        const player = game_field.player[info.team];
        
        if (info.duelist >= player.extra_lists_main.length()) {
            // This may need to be rewritten after being brought over from the source
            // player.extra_lists_main.resize(info.duelist + 1);
            // player.extra_lists_extra.resize(info.duelist + 1);
            // player.extra_lists_hand.resize(info.duelist + 1);
			// player.extra_extra_p_count.resize(info.duelist + 1);
        }

        pCard.current.location = info.loc;
        pCard.owner = info.team;
        pCard.current.controller = info.team;
        pCard.current.position = POS_FACEDOWN_DEFENSE;

        if (info.loc == LOCATION_DECK) {
            const list = player.extra_lists_main[info.duelist];
            list.push(pCard);
            pCard.current.sequence = list.length()-1;
        } else {
            const list = player.extra_lists_extra[info.duelist];
            list.push(pCard);
            pCard.current.sequence = list.length()-1;
        }
    }
}

/**
 * Start a new Duel
 * @param {string} id
 */
function startDuel (id) {
    const game_field = duels[id].game_field;

    game_field.core.shuffle_hand_check[0] = false;
    game_field.core.shuffle_hand_check[1] = false;
    game_field.core.shuffle_deck_check[0] = false;
    game_field.core.shuffle_deck_check[1] = false;
    game_field.addProcess(PRCESSOR_STARTUP, 0, 0, 0, 0, 0);

    const p0StartCount = game_field.player[0].start_count;
    if (p0StartCount > 0) {
        game_field.draw(0, REASON_RULE, PLAYER_NONE, 0, p0StartCount);
    }

    const p1StartCount = game_field.player[1].start_count;
    if (p1StartCount > 0) {
        game_field.draw(0, REASON_RULE, PLAYER_NONE, 1, p1StartCount);
    }

    game_field.player.forEach(function (p, index) {
        for (let l = 0; l < p.extra_lists_main.length(); ++l) {
            const main = p.extra_lists_main[l];
            const hand = p.extra_lists_hand[l];
            for (let i = 0; i < p.start_count && main.size(); ++i) {
                const pCard = main.back();
                main.pop();
                hand.push(pCard);
                pCard.current.controller = index;
                pCard.current.location = LOCATION_HAND;
                pCard.current.sequence = hand.length() - 1;
                pCard.current.position = POS_FACEDOWN;
            }
        }
    })
    game_field.add_process(PROCESSOR_TURN, 0, 0, 0, 0, 0);
}

/**
 * Duel Processor
 * @param {string} id
 */
function duelProcess (id) {
    const duel = duels[id];
    duel.buff.clear();
    
}

module.exports = {
    createDuel,
    destroyDuel,
    getVersion,
    startDuel,
};


