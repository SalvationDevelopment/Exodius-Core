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
            game_field.add_card(info.con, pCard, info.loc, info.seq);
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
        const pCard = duels.new_card(info.code);
        const player = game_field.player[info.team];
        
        // if (info.duelist >= player.extra_lists_main.length()) {
        //     // This may need to be rewritten after being brought over from the source
        //     // player.extra_lists_main.resize(info.duelist + 1);
        //     // player.extra_lists_extra.resize(info.duelist + 1);
        //     // player.extra_lists_hand.resize(info.duelist + 1);
		// 	// player.extra_extra_p_count.resize(info.duelist + 1);
        // }

        pCard.current.location = info.loc;
        pCard.owner = info.team;
        pCard.current.controller = info.team;
        pCard.current.position = POS_FACEDOWN_DEFENSE;

        if (info.loc === LOCATION_DECK) {
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
    game_field.add_process(PRCESSOR_STARTUP, 0, 0, 0, 0, 0);

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
 * Duel Processor - Runs all processes of a duel.
 * @param {string} id
 */
function duelProcess (id) {
    const duel = duels[id];
    duel.buff.clear();
    let flag = 0;
    do {
        flag = duel.game_field.process();
        duel.generate_buffer();
    } while (duel.buff.length() === 0 && flag === PROCESSOR_FLAG_CONTINUE);
    return flag;
}


/**
 * Get messages from the Duel
 * @param {string} id 
 * @param {number} length 
 */
function duelGetMessage (id, length) {
    const duel = duels[id];
    duel.generate_buffer();
    if (length) {
        length = duel.buff.size();
    }
    return duel.buff.date();
}


/**
 * Sets a response for a duel
 * @param {string} id 
 * @param {*} buffer 
 * @param {number} length 
 */
function duelSetResponse (id, buffer, length) {
    duel.set_response(buffer, length)
}


/**
 * Gets the number of cards based on the location provided.
 * @param {string} id 
 * @param {number} team 
 * @param {global} loc 
 * @returns {number} cardCount
 */
function duelQueryCount (id, team, loc) {
    if (team !== 0 && team !== 1) {
        return 0;
    }
    const duel = duels[id];
    const player = duel.game_field.player[team];
    let cardCount = 0;
    switch (loc) {
        case LOCATION_HAND:
            return player.list_hand.length();
        case LOCATION_GRAVE:
            return player.list_grave.length();
        case LOCATION_REMOVED:
            return player.list_remove.length();
        case LOCATION_EXTRA:
            return player.list_extra.length();
        case LOCATION_DECK:
            return player.lsit_deck.length();
    }
    if (loc === LOCATION_MZONE) {
        player.list_mzone.forEach(function (card) { 
            if (card) {
                ++cardCount;
            }
        })
    }
    if (loc === LOCATION_SZONE) {
        player.list_szone.forEach(function (card) {
            if (card) {
                ++cardCount;
            }
        })
    }
    return cardCount;
}


/**
 * Queries the Duel for information
 * @param {string} id 
 * @param {number} length 
 * @param {*} info 
 */
function duelQuery (id, length, info) {
    const duel = duels[id];
    let pCard = undefined;

    // Special case for XYZ monsters
    if (info.loc & LOCATION_OVERLAY) {
        const olCard = duel.game_field.get_field_card(info.con, (info.loc & LOCATION_OVERLAY), info.seq);
        if (olCard && olCard.xyz_materials.length() > info.overlay_seq) {
            pCard = olCard.xyz_materials[info.overlay_seq];
        }
    } else {
        pCard = duel.game_field.get_field_card(info.con, info.loc, info.seq);
    }

    // Check for "null" spaces
    if (pCard === undefined) {
        return undefined;
    } else {
        pCard.get_infos(info.flags);
    }
    
    if (length) {
        length = duel.query_buffer.size();
    }
    return duel.query_buffer.data();
}


/**
 * 
 * @param {string} id 
 * @param {number} length 
 * @param {*} info 
 */
function duelQueryLocation (id, length, info) {
    const duel = duels[id];
    
    // Special case for XYZ monsters
    if (info.loc & LOCATION_OVERLAY) {
        duel.query_buffer.push(0);
    } else {
        const player = duel.game_field.player[info.con];
        let zone;
        
        // find what zone we're in
        if (info.loc === LOCATION_MZONE) {
            zone = player.list_mzone;
        } else if (info.loc === LOACTION_SZONE) {
            zone = player.list_szone;
        } else if (info.loc === LOCATION_HAND) {
            zone = player.list_hand;
        } else if (info.loc === LOACTION_GRAVE) {
            zone = player.list_grave;
        } else if (info.loc === LOCATION_REMOVED) {
            zone = player.list_remove;
        } else if (info.loc === LOCATION_EXTRA) {
            zone = player.list_extra;
        } else if (info.loc === LOCATION_DECK) {
            zone = player.list_main;
        }
        zone.forEach(function (card) {
            if (card === undefined) {
                duel.push(0);
            } else {
                card.get_infos(info.flags);
            }
        })
    }

    return zone;    
}

/**
 * Queries the field while matching the functionality of the original OCGCore
 * @param {string} id 
 * @param {number} length 
 */
function duelQueryField (id, length) {
    const duel = duels[id];
    let query;
    
    // Initial query push
    query.push(duel.game_field.core.duel_options);

    // Get the total cards on the field
    duel.game_field.player.forEach(function (p) {
        p.list_mzone.forEach(function (card) {
            if (card) {
                query.push(1);
                query.push(card.current.position);
                query.push(card.xyz_materials.length());
            } else {
                query.push(0);
            }
        })
        p.list_szone.forEach(function (card) {
            if (card) {
                query.push(1);
                query.push(card.current.position);
                query.push(card.xyz_materials.length());
            } else {
                query.push(0);
            }
        })
        query.push(p.list_main.length());
        query.push(p.list_hand.length());
        query.push(p.list_grave.length());
        query.push(p.list_remove.length());
        query.push(p.list_extra.length());
        query.push(p.extra_p_count);
    })

    // Push the number of chains to resolve
    query.push(duel.game_field.core.current_chain.length());
    
    // Query the current field
    duel.game_field.core.current_chain.forEach(function (chain) {
        const effect = chain.triggering_effect;
        query.push(effect.get_handler().data.code);
        
        info = effect.get_handler().get_info_location();
        query.push(info.controller);
        query.push(info.location);
        query.push(info.sequence);
        query.push(info.position);
        query.push(chain.triggering_controller);
        query.push(Number(chain.triggering_location));
        query.push(chain.triggering_sequence);
        query.push(effect.description);
    })

    return query;
}


module.exports = {
    createDuel,
    destroyDuel,
    getVersion,
    startDuel,
    duelProcess,
    duelGetMessage,
    duelSetResponse,
    duelQueryCount,
    duelQuery,
    duelQueryLocation,
    duelQueryField,
};


