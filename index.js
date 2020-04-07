const enums = require('./enums');
const version = require('./package').version;
const Duel = require('./duel')
const duels = {};


Object.assign(global, enums);

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
    const duel = duels[id];
    const game_field = duel.game_field;
    if (info.duelist === 0) {
        if(game_field.is_location_useable(info.con, info.loc, info.seq)) {
            const card = duel.new_card(info.code);
            card.owner = info.team;
            game_field.add_card(info.con, card, info.loc, info.seq);
            card.current.postion = info.pos;
            if(!(info.loc & LOCATION_ONFIELD) || (info.pos & POS_FACEUP)) {
				card.enable_field_effect(true);
				game_field.adjust_instant();
			}
            return true;
        }
    }   

    if(info.team > 1 || !(info.loc & (LOCATION_DECK | LOCATION_EXTRA)))
			{return;}
		info.duelist--;
		const card = DUEL.new_card(info.code);
		const player = game_field.player[info.team];
		if(info.duelist >= player.extra_lists_main.size()) {
			player.extra_lists_main.resize(info.duelist + 1);
			player.extra_lists_extra.resize(info.duelist + 1);
			player.extra_lists_hand.resize(info.duelist + 1);
			player.extra_extra_p_count.resize(info.duelist + 1);
		}
		card.current.location = info.loc;
		card.owner = info.team;
		card.current.controler = info.team;
		card.current.position = POS_FACEDOWN_DEFENSE;
		if(info.loc == LOCATION_DECK){
			const list = player.extra_lists_main[info.duelist];
			list.push_back(card);
			card.current.sequence = list.size() - 1;
		} else {
			const list = player.extra_lists_extra[info.duelist];
			list.push_back(card);
			card.current.sequence = list.size() - 1;
		}
}

module.exports = {
    createDuel,
    destroyDuel,
    getVersion,
    enums
};


