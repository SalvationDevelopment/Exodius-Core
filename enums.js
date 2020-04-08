global.SUMMON_TYPE_NORMAL = 0x10000000
global.SUMMON_TYPE_ADVANCE = 0x11000000
global.SUMMON_TYPE_GEMINI = 0x12000000
global.SUMMON_TYPE_FLIP = 0x20000000
global.SUMMON_TYPE_SPECIAL = 0x40000000
global.SUMMON_TYPE_FUSION = 0x43000000
global.SUMMON_TYPE_RITUAL = 0x45000000
global.SUMMON_TYPE_SYNCHRO = 0x46000000
global.SUMMON_TYPE_XYZ = 0x49000000
global.SUMMON_TYPE_PENDULUM = 0x4a000000
global.SUMMON_TYPE_LINK = 0x4c000000
//Counter
global.COUNTER_WITHOUT_PERMIT = 0x1000
global.COUNTER_NEED_ENABLE = 0x2000

global.ASSUME_CODE = 1
global.ASSUME_TYPE = 2
global.ASSUME_LEVEL = 3
global.ASSUME_RANK = 4
global.ASSUME_ATTRIBUTE = 5
global.ASSUME_RACE = 6
global.ASSUME_ATTACK = 7
global.ASSUME_DEFENSE = 8
global.ASSUME_LINK = 9
global.ASSUME_LINKMARKER = 10

//double-name cards
global.CARD_MARINE_DOLPHIN = 78734254
global.CARD_TWINKLE_MOSS = 13857930

global.MATCH_ALL = (x, y) => (((x) & (y)) == (y));
global.MATCH_ANY = (x, y) => ((x) & (y));
global.ADD_BIT = (x, y) => ((x) |= (y));
global.REMOVE_BIT = (x, y) => ((x) &= ~(y));

global.OPERATION_SUCCESS = 1;
global.OPERATION_FAIL = 0;
global.OPERATION_CANCELED = -1;


global.LOCATION_DECK = 0x01;
global.LOCATION_HAND = 0x02;
global.LOCATION_MZONE = 0x04;
global.LOCATION_SZONE = 0x08;
global.LOCATION_GRAVE = 0x10;
global.LOCATION_REMOVED = 0x20;
global.LOCATION_EXTRA = 0x40;
global.LOCATION_OVERLAY = 0x80;
global.LOCATION_ONFIELD = 0x0c;
global.LOCATION_FZONE = 0x100;
global.LOCATION_PZONE = 0x200;
global.LOCATION_ALL = 0x3ff;

//Positions
global.POS_FACEUP_ATTACK = 0x1
global.POS_FACEDOWN_ATTACK = 0x2
global.POS_FACEUP_DEFENSE = 0x4
global.POS_FACEDOWN_DEFENSE = 0x8
global.POS_FACEUP = 0x5
global.POS_FACEDOWN = 0xa
global.POS_ATTACK = 0x3
global.POS_DEFENSE = 0xc

//Flip effect flags
global.NO_FLIP_EFFECT = 0x10000

//Types of cards
global.TYPE_MONSTER = 0x1
global.TYPE_SPELL = 0x2
global.TYPE_TRAP = 0x4
global.TYPE_NORMAL = 0x10
global.TYPE_EFFECT = 0x20
global.TYPE_FUSION = 0x40
global.TYPE_RITUAL = 0x80
global.TYPE_TRAPMONSTER = 0x100
global.TYPE_SPIRIT = 0x200
global.TYPE_UNION = 0x400
global.TYPE_GEMINI = 0x800
global.TYPE_TUNER = 0x1000
global.TYPE_SYNCHRO = 0x2000
global.TYPE_TOKEN = 0x4000
global.TYPE_QUICKPLAY = 0x10000
global.TYPE_CONTINUOUS = 0x20000
global.TYPE_EQUIP = 0x40000
global.TYPE_FIELD = 0x80000
global.TYPE_COUNTER = 0x100000
global.TYPE_FLIP = 0x200000
global.TYPE_TOON = 0x400000
global.TYPE_XYZ = 0x800000
global.TYPE_PENDULUM = 0x1000000
global.TYPE_SPSUMMON = 0x2000000
global.TYPE_LINK = 0x4000000

//Attributes
global.ATTRIBUTE_EARTH = 0x01
global.ATTRIBUTE_WATER = 0x02
global.ATTRIBUTE_FIRE = 0x04
global.ATTRIBUTE_WIND = 0x08
global.ATTRIBUTE_LIGHT = 0x10
global.ATTRIBUTE_DARK = 0x20
global.ATTRIBUTE_DIVINE = 0x40

//Races
global.RACE_WARRIOR = 0x1
global.RACE_SPELLCASTER = 0x2
global.RACE_FAIRY = 0x4
global.RACE_FIEND = 0x8
global.RACE_ZOMBIE = 0x10
global.RACE_MACHINE = 0x20
global.RACE_AQUA = 0x40
global.RACE_PYRO = 0x80
global.RACE_ROCK = 0x100
global.RACE_WINGEDBEAST = 0x200
global.RACE_PLANT = 0x400
global.RACE_INSECT = 0x800
global.RACE_THUNDER = 0x1000
global.RACE_DRAGON = 0x2000
global.RACE_BEAST = 0x4000
global.RACE_BEASTWARRIOR = 0x8000
global.RACE_DINOSAUR = 0x10000
global.RACE_FISH = 0x20000
global.RACE_SEASERPENT = 0x40000
global.RACE_REPTILE = 0x80000
global.RACE_PSYCHIC = 0x100000
global.RACE_DIVINE = 0x200000
global.RACE_CREATORGOD = 0x400000
global.RACE_WYRM = 0x800000
global.RACE_CYBERSE = 0x1000000

//Reasons
global.REASON_DESTROY = 0x1
global.REASON_RELEASE = 0x2
global.REASON_TEMPORARY = 0x4
global.REASON_MATERIAL = 0x8
global.REASON_SUMMON = 0x10
global.REASON_BATTLE = 0x20
global.REASON_EFFECT = 0x40
global.REASON_COST = 0x80
global.REASON_ADJUST = 0x100
global.REASON_LOST_TARGET = 0x200
global.REASON_RULE = 0x400
global.REASON_SPSUMMON = 0x800
global.REASON_DISSUMMON = 0x1000
global.REASON_FLIP = 0x2000
global.REASON_DISCARD = 0x4000
global.REASON_RDAMAGE = 0x8000
global.REASON_RRECOVER = 0x10000
global.REASON_RETURN = 0x20000
global.REASON_FUSION = 0x40000
global.REASON_SYNCHRO = 0x80000
global.REASON_RITUAL = 0x100000
global.REASON_XYZ = 0x200000
global.REASON_REPLACE = 0x1000000
global.REASON_DRAW = 0x2000000
global.REASON_REDIRECT = 0x4000000
//global.REASON_REVEAL      0x8000000
global.REASON_LINK = 0x10000000

//Status
global.STATUS_DISABLED = 0x0001
global.STATUS_TO_ENABLE = 0x0002
global.STATUS_TO_DISABLE = 0x0004
global.STATUS_PROC_COMPLETE = 0x0008
global.STATUS_SET_TURN = 0x0010
global.STATUS_NO_LEVEL = 0x0020
global.STATUS_BATTLE_RESULT = 0x0040
global.STATUS_SPSUMMON_STEP = 0x0080
global.STATUS_FORM_CHANGED = 0x0100
global.STATUS_SUMMONING = 0x0200
global.STATUS_EFFECT_ENABLED = 0x0400
global.STATUS_SUMMON_TURN = 0x0800
global.STATUS_DESTROY_CONFIRMED = 0x1000
global.STATUS_LEAVE_CONFIRMED = 0x2000
global.STATUS_BATTLE_DESTROYED = 0x4000
global.STATUS_COPYING_EFFECT = 0x8000
global.STATUS_CHAINING = 0x10000
global.STATUS_SUMMON_DISABLED = 0x20000
global.STATUS_ACTIVATE_DISABLED = 0x40000
global.STATUS_EFFECT_REPLACED = 0x80000
global.STATUS_FUTURE_FUSION = 0x100000
global.STATUS_ATTACK_CANCELED = 0x200000
global.STATUS_INITIALIZING = 0x400000
//global.STATUS_ACTIVATED          0x800000
global.STATUS_JUST_POS = 0x1000000
global.STATUS_CONTINUOUS_POS = 0x2000000
global.STATUS_FORBIDDEN = 0x4000000
global.STATUS_ACT_FROM_HAND = 0x8000000
global.STATUS_OPPO_BATTLE = 0x10000000
global.STATUS_FLIP_SUMMON_TURN = 0x20000000
global.STATUS_SPSUMMON_TURN = 0x40000000

//Query list
global.QUERY_CODE = 0x1
global.QUERY_POSITION = 0x2
global.QUERY_ALIAS = 0x4
global.QUERY_TYPE = 0x8
global.QUERY_LEVEL = 0x10
global.QUERY_RANK = 0x20
global.QUERY_ATTRIBUTE = 0x40
global.QUERY_RACE = 0x80
global.QUERY_ATTACK = 0x100
global.QUERY_DEFENSE = 0x200
global.QUERY_BASE_ATTACK = 0x400
global.QUERY_BASE_DEFENSE = 0x800
global.QUERY_REASON = 0x1000
global.QUERY_REASON_CARD = 0x2000
global.QUERY_EQUIP_CARD = 0x4000
global.QUERY_TARGET_CARD = 0x8000
global.QUERY_OVERLAY_CARD = 0x10000
global.QUERY_COUNTERS = 0x20000
global.QUERY_OWNER = 0x40000
global.QUERY_STATUS = 0x80000
global.QUERY_IS_PUBLIC = 0x100000
global.QUERY_LSCALE = 0x200000
global.QUERY_RSCALE = 0x400000
global.QUERY_LINK = 0x800000
global.QUERY_IS_HIDDEN = 0x1000000
global.QUERY_COVER = 0x2000000
global.QUERY_END = 0x80000000

//Link markers
global.LINK_MARKER_BOTTOM_LEFT = 1
global.LINK_MARKER_BOTTOM = 2
global.LINK_MARKER_BOTTOM_RIGHT = 4
global.LINK_MARKER_LEFT = 10
global.LINK_MARKER_RIGHT = 40
global.LINK_MARKER_TOP_LEFT = 100
global.LINK_MARKER_TOP = 200
global.LINK_MARKER_TOP_RIGHT = 400

//Messages
global.MSG_RETRY = 1
global.MSG_HINT = 2
global.MSG_WAITING = 3
global.MSG_START = 4
global.MSG_WIN = 5
global.MSG_UPDATE_DATA = 6
global.MSG_UPDATE_CARD = 7
global.MSG_REQUEST_DECK = 8
global.MSG_SELECT_BATTLECMD = 10
global.MSG_SELECT_IDLECMD = 11
global.MSG_SELECT_EFFECTYN = 12
global.MSG_SELECT_YESNO = 13
global.MSG_SELECT_OPTION = 14
global.MSG_SELECT_CARD = 15
global.MSG_SELECT_CHAIN = 16
global.MSG_SELECT_PLACE = 18
global.MSG_SELECT_POSITION = 19
global.MSG_SELECT_TRIBUTE = 20
global.MSG_SORT_CHAIN = 21
global.MSG_SELECT_COUNTER = 22
global.MSG_SELECT_SUM = 23
global.MSG_SELECT_DISFIELD = 24
global.MSG_SORT_CARD = 25
global.MSG_SELECT_UNSELECT_CARD = 26
global.MSG_CONFIRM_DECKTOP = 30
global.MSG_CONFIRM_CARDS = 31
global.MSG_SHUFFLE_DECK = 32
global.MSG_SHUFFLE_HAND = 33
global.MSG_REFRESH_DECK = 34
global.MSG_SWAP_GRAVE_DECK = 35
global.MSG_SHUFFLE_SET_CARD = 36
global.MSG_REVERSE_DECK = 37
global.MSG_DECK_TOP = 38
global.MSG_SHUFFLE_EXTRA = 39
global.MSG_NEW_TURN = 40
global.MSG_NEW_PHASE = 41
global.MSG_CONFIRM_EXTRATOP = 42
global.MSG_MOVE = 50
global.MSG_POS_CHANGE = 53
global.MSG_SET = 54
global.MSG_SWAP = 55
global.MSG_FIELD_DISABLED = 56
global.MSG_SUMMONING = 60
global.MSG_SUMMONED = 61
global.MSG_SPSUMMONING = 62
global.MSG_SPSUMMONED = 63
global.MSG_FLIPSUMMONING = 64
global.MSG_FLIPSUMMONED = 65
global.MSG_CHAINING = 70
global.MSG_CHAINED = 71
global.MSG_CHAIN_SOLVING = 72
global.MSG_CHAIN_SOLVED = 73
global.MSG_CHAIN_END = 74
global.MSG_CHAIN_NEGATED = 75
global.MSG_CHAIN_DISABLED = 76
global.MSG_CARD_SELECTED = 80
global.MSG_RANDOM_SELECTED = 81
global.MSG_BECOME_TARGET = 83
global.MSG_DRAW = 90
global.MSG_DAMAGE = 91
global.MSG_RECOVER = 92
global.MSG_EQUIP = 93
global.MSG_LPUPDATE = 94
global.MSG_UNEQUIP = 95
global.MSG_CARD_TARGET = 96
global.MSG_CANCEL_TARGET = 97
global.MSG_PAY_LPCOST = 100
global.MSG_ADD_COUNTER = 101
global.MSG_REMOVE_COUNTER = 102
global.MSG_ATTACK = 110
global.MSG_BATTLE = 111
global.MSG_ATTACK_DISABLED = 112
global.MSG_DAMAGE_STEP_START = 113
global.MSG_DAMAGE_STEP_END = 114
global.MSG_MISSED_EFFECT = 120
global.MSG_BE_CHAIN_TARGET = 121
global.MSG_CREATE_RELATION = 122
global.MSG_RELEASE_RELATION = 123
global.MSG_TOSS_COIN = 130
global.MSG_TOSS_DICE = 131
global.MSG_ROCK_PAPER_SCISSORS = 132
global.MSG_HAND_RES = 133
global.MSG_ANNOUNCE_RACE = 140
global.MSG_ANNOUNCE_ATTRIB = 141
global.MSG_ANNOUNCE_CARD = 142
global.MSG_ANNOUNCE_NUMBER = 143
global.MSG_CARD_HINT = 160
global.MSG_TAG_SWAP = 161
global.MSG_RELOAD_FIELD = 162 // Debug.ReloadFieldEnd()
global.MSG_AI_NAME = 163
global.MSG_SHOW_HINT = 164
global.MSG_PLAYER_HINT = 165
global.MSG_MATCH_KILL = 170
global.MSG_CUSTOM_MSG = 180
global.MSG_REMOVE_CARDS = 190

global.OLD_REPLAY_MODE = 231

//Hints
global.HINT_EVENT = 1
global.HINT_MESSAGE = 2
global.HINT_SELECTMSG = 3
global.HINT_OPSELECTED = 4
global.HINT_EFFECT = 5
global.HINT_RACE = 6
global.HINT_ATTRIB = 7
global.HINT_CODE = 8
global.HINT_NUMBER = 9
global.HINT_CARD = 10
global.HINT_ZONE = 11


global.CHINT_TURN = 1
global.CHINT_CARD = 2
global.CHINT_RACE = 3
global.CHINT_ATTRIBUTE = 4
global.CHINT_NUMBER = 5
global.CHINT_DESC_ADD = 6
global.CHINT_DESC_REMOVE = 7

global.PHINT_DESC_ADD = 6
global.PHINT_DESC_REMOVE = 7

global.EFFECT_CLIENT_MODE_NORMAL = 0
global.EFFECT_CLIENT_MODE_RESOLVE = 1
global.EFFECT_CLIENT_MODE_RESET = 2

global.OPCODE_ADD = 0x40000000
global.OPCODE_SUB = 0x40000001
global.OPCODE_MUL = 0x40000002
global.OPCODE_DIV = 0x40000003
global.OPCODE_AND = 0x40000004
global.OPCODE_OR = 0x40000005
global.OPCODE_NEG = 0x40000006
global.OPCODE_NOT = 0x40000007
global.OPCODE_BAND = 0x40000008
global.OPCODE_BOR = 0x40000009
global.OPCODE_BNOT = 0x40000010
global.OPCODE_BXOR = 0x40000011
global.OPCODE_LSHIFT = 0x40000012
global.OPCODE_RSHIFT = 0x40000013
global.OPCODE_ISCODE = 0x40000100
global.OPCODE_ISSETCARD = 0x40000101
global.OPCODE_ISTYPE = 0x40000102
global.OPCODE_ISRACE = 0x40000103
global.OPCODE_ISATTRIBUTE = 0x40000104
global.OPCODE_GETCODE = 0x40000105
global.OPCODE_GETSETCARD = 0x40000106
global.OPCODE_GETTYPE = 0x40000107
global.OPCODE_GETRACE = 0x40000108
global.OPCODE_GETATTRIBUTE = 0x40000109

//Players
global.PLAYER_NONE = 2
global.PLAYER_ALL = 3

//Phases
global.PHASE_DRAW = 0x01
global.PHASE_STANDBY = 0x02
global.PHASE_MAIN1 = 0x04
global.PHASE_BATTLE_START = 0x08
global.PHASE_BATTLE_STEP = 0x10
global.PHASE_DAMAGE = 0x20
global.PHASE_DAMAGE_CAL = 0x40
global.PHASE_BATTLE = 0x80
global.PHASE_MAIN2 = 0x100
global.PHASE_END = 0x200

//Options
global.DUEL_TEST_MODE = 0x01
global.DUEL_ATTACK_FIRST_TURN = 0x02
//global.DUEL_NO_CHAIN_HINT    = 0x04
global.DUEL_OBSOLETE_RULING = 0x08
global.DUEL_PSEUDO_SHUFFLE = 0x10
global.DUEL_TAG = 0x20
global.DUEL_SIMPLE_AI = 0x40
global.DUEL_RELAY = 0x80
global.DUEL_OBSOLETE_IGNITION = 0x100
global.DUEL_1ST_TURN_DRAW = 0x200
global.DUEL_1_FACEUP_FIELD = 0x400
global.DUEL_PZONE = 0x800
global.DUEL_SEPARATE_PZONE = 0x1000
global.DUEL_EMZONE = 0x2000
global.DUEL_FSX_MMZONE = 0x4000
global.DUEL_TRAP_MONSTERS_NOT_USE_ZONE = 0x8000
global.DUEL_RETURN_TO_EXTRA_DECK_TRIGGERS = 0x10000
global.DUEL_TRIGGER_ONLY_IN_LOCATION = 0x20000
global.DUEL_SPSUMMON_ONCE_OLD_NEGATE = 0x40000
global.DUEL_CANNOT_SUMMON_OATH_OLD = 0x80000
global.DUEL_NO_STANDBY_PHASE = 0x100000
global.DUEL_NO_MAIN_PHASE_2 = 0x200000
global.DUEL_3_COLUMNS_FIELD = 0x400000
global.DUEL_DRAW_UNTIL_5 = 0x800000
global.DUEL_NO_HAND_LIMIT = 0x1000000
global.DUEL_UNLIMITED_SUMMONS = 0x2000000
global.DUEL_INVERTED_QUICK_PRIORITY = 0x4000000
global.DUEL_MODE_SPEED = (DUEL_3_COLUMNS_FIELD | DUEL_NO_MAIN_PHASE_2 | DUEL_TRIGGER_ONLY_IN_LOCATION)
global.DUEL_MODE_RUSH = (DUEL_3_COLUMNS_FIELD | DUEL_NO_MAIN_PHASE_2 | DUEL_NO_STANDBY_PHASE | DUEL_1ST_TURN_DRAW | DUEL_INVERTED_QUICK_PRIORITY | DUEL_DRAW_UNTIL_5 | DUEL_NO_HAND_LIMIT | DUEL_UNLIMITED_SUMMONS | DUEL_TRIGGER_ONLY_IN_LOCATION)
global.DUEL_MODE_MR1 = (DUEL_OBSOLETE_IGNITION | DUEL_1ST_TURN_DRAW | DUEL_1_FACEUP_FIELD | DUEL_SPSUMMON_ONCE_OLD_NEGATE | DUEL_RETURN_TO_EXTRA_DECK_TRIGGERS | DUEL_CANNOT_SUMMON_OATH_OLD)
global.DUEL_MODE_MR2 = (DUEL_1ST_TURN_DRAW | DUEL_1_FACEUP_FIELD | DUEL_SPSUMMON_ONCE_OLD_NEGATE | DUEL_RETURN_TO_EXTRA_DECK_TRIGGERS | DUEL_CANNOT_SUMMON_OATH_OLD)
global.DUEL_MODE_MR3 = (DUEL_PZONE | DUEL_SEPARATE_PZONE | DUEL_SPSUMMON_ONCE_OLD_NEGATE | DUEL_RETURN_TO_EXTRA_DECK_TRIGGERS | DUEL_CANNOT_SUMMON_OATH_OLD)
global.DUEL_MODE_MR4 = (DUEL_PZONE | DUEL_EMZONE | DUEL_SPSUMMON_ONCE_OLD_NEGATE | DUEL_RETURN_TO_EXTRA_DECK_TRIGGERS | DUEL_CANNOT_SUMMON_OATH_OLD)
global.DUEL_MODE_MR5 = (DUEL_PZONE | DUEL_EMZONE | DUEL_FSX_MMZONE | DUEL_TRAP_MONSTERS_NOT_USE_ZONE | DUEL_TRIGGER_ONLY_IN_LOCATION)
global.DUEL_MODE_MR1_FORB = (TYPE_XYZ | TYPE_PENDULUM | TYPE_LINK)
global.DUEL_MODE_MR2_FORB = (TYPE_PENDULUM | TYPE_LINK)
global.DUEL_MODE_MR3_FORB = TYPE_LINK
global.DUEL_MODE_MR4_FORB = 0
global.DUEL_MODE_MR5_FORB = 0


//status
global.EFFECT_STATUS_AVAILABLE = 0x0001
//global.EFFECT_STATUS_ACTIVATED= 0x0002
global.EFFECT_STATUS_SPSELF = 0x0004

global.EFFECT_COUNT_CODE_OATH = 0x10000000
global.EFFECT_COUNT_CODE_DUEL = 0x20000000
global.EFFECT_COUNT_CODE_SINGLE = 0x40000000

//========== Reset ==========
global.RESET_SELF_TURN = 0x10000000
global.RESET_OPPO_TURN = 0x20000000
global.RESET_PHASE = 0x40000000
global.RESET_CHAIN = 0x80000000
global.RESET_EVENT = 0x1000
global.RESET_CARD = 0x2000
global.RESET_CODE = 0x4000
global.RESET_COPY = 0x8000

global.RESET_DISABLE = 0x00010000
global.RESET_TURN_SET = 0x00020000
global.RESET_TOGRAVE = 0x00040000
global.RESET_REMOVE = 0x00080000
global.RESET_TEMP_REMOVE = 0x00100000
global.RESET_TOHAND = 0x00200000
global.RESET_TODECK = 0x00400000
global.RESET_LEAVE = 0x00800000
global.RESET_TOFIELD = 0x01000000
global.RESET_CONTROL = 0x02000000
global.RESET_OVERLAY = 0x04000000
global.RESET_MSCHANGE = 0x08000000

//========== Types ==========
global.EFFECT_TYPE_SINGLE = 0x0001
global.EFFECT_TYPE_FIELD = 0x0002
global.EFFECT_TYPE_EQUIP = 0x0004
global.EFFECT_TYPE_ACTIONS = 0x0008
global.EFFECT_TYPE_ACTIVATE = 0x0010
global.EFFECT_TYPE_FLIP = 0x0020
global.EFFECT_TYPE_IGNITION = 0x0040
global.EFFECT_TYPE_TRIGGER_O = 0x0080
global.EFFECT_TYPE_QUICK_O = 0x0100
global.EFFECT_TYPE_TRIGGER_F = 0x0200
global.EFFECT_TYPE_QUICK_F = 0x0400
global.EFFECT_TYPE_CONTINUOUS = 0x0800
global.EFFECT_TYPE_XMATERIAL = 0x1000
global.EFFECT_TYPE_GRANT = 0x2000
global.EFFECT_TYPE_TARGET = 0x4000

//========== Flags ==========
global.effect_flag = {
    EFFECT_FLAG_INITIAL: 0x0001,
    EFFECT_FLAG_FUNC_VALUE: 0x0002,
    EFFECT_FLAG_COUNT_LIMIT: 0x0004,
    EFFECT_FLAG_FIELD_ONLY: 0x0008,
    EFFECT_FLAG_CARD_TARGET: 0x0010,
    EFFECT_FLAG_IGNORE_RANGE: 0x0020,
    EFFECT_FLAG_ABSOLUTE_TARGET: 0x0040,
    EFFECT_FLAG_IGNORE_IMMUNE: 0x0080,
    EFFECT_FLAG_SET_AVAILABLE: 0x0100,
    EFFECT_FLAG_CANNOT_NEGATE: 0x0200,
    EFFECT_FLAG_CANNOT_DISABLE: 0x0400,
    EFFECT_FLAG_PLAYER_TARGET: 0x0800,
    EFFECT_FLAG_BOTH_SIDE: 0x1000,
    EFFECT_FLAG_COPY_INHERIT: 0x2000,
    EFFECT_FLAG_DAMAGE_STEP: 0x4000,
    EFFECT_FLAG_DAMAGE_CAL: 0x8000,
    EFFECT_FLAG_DELAY: 0x10000,
    EFFECT_FLAG_SINGLE_RANGE: 0x20000,
    EFFECT_FLAG_UNCOPYABLE: 0x40000,
    EFFECT_FLAG_OATH: 0x80000,
    EFFECT_FLAG_SPSUM_PARAM: 0x100000,
    EFFECT_FLAG_REPEAT: 0x200000,
    EFFECT_FLAG_NO_TURN_RESET: 0x400000,
    EFFECT_FLAG_EVENT_PLAYER: 0x800000,
    EFFECT_FLAG_OWNER_RELATE: 0x1000000,
    EFFECT_FLAG_CANNOT_INACTIVATE: 0x2000000,
    EFFECT_FLAG_CLIENT_HINT: 0x4000000,
    EFFECT_FLAG_CONTINUOUS_TARGET: 0x8000000,
    EFFECT_FLAG_LIMIT_ZONE: 0x10000000,
    //	EFFECT_FLAG_COF               : 0x20000000,
    //	EFFECT_FLAG_CVAL_CHECK        : 0x40000000,
    EFFECT_FLAG_IMMEDIATELY_APPLY: 0x80000000
};

global.effect_flag2 = {
    //	EFFECT_FLAG2_NAGA               : 0x0001,
    EFFECT_FLAG2_COF: 0x0002,
    EFFECT_FLAG2_MAJESTIC_MUST_COPY: 0x80000000,
};

glopbal.effect_flag = (flag1, flag2) => {
    return Number(flag1) | Number(flag2);
}


global.EFFECT_IMMUNE_EFFECT = 1
global.EFFECT_DISABLE = 2
global.EFFECT_CANNOT_DISABLE = 3
global.EFFECT_SET_CONTROL = 4
global.EFFECT_CANNOT_CHANGE_CONTROL = 5
global.EFFECT_CANNOT_ACTIVATE = 6
global.EFFECT_CANNOT_TRIGGER = 7
global.EFFECT_DISABLE_EFFECT = 8
global.EFFECT_DISABLE_CHAIN = 9
global.EFFECT_DISABLE_TRAPMONSTER = 10
global.EFFECT_CANNOT_INACTIVATE = 12
global.EFFECT_CANNOT_DISEFFECT = 13
global.EFFECT_CANNOT_CHANGE_POSITION = 14
global.EFFECT_TRAP_ACT_IN_HAND = 15
global.EFFECT_TRAP_ACT_IN_SET_TURN = 16
global.EFFECT_REMAIN_FIELD = 17
global.EFFECT_MONSTER_SSET = 18
global.EFFECT_QP_ACT_IN_SET_TURN = 19
global.EFFECT_CANNOT_SUMMON = 20
global.EFFECT_CANNOT_FLIP_SUMMON = 21
global.EFFECT_CANNOT_SPECIAL_SUMMON = 22
global.EFFECT_CANNOT_MSET = 23
global.EFFECT_CANNOT_SSET = 24
global.EFFECT_CANNOT_DRAW = 25
global.EFFECT_CANNOT_DISABLE_SUMMON = 26
global.EFFECT_CANNOT_DISABLE_SPSUMMON = 27
global.EFFECT_SET_SUMMON_COUNT_LIMIT = 28
global.EFFECT_EXTRA_SUMMON_COUNT = 29
global.EFFECT_SPSUMMON_CONDITION = 30
global.EFFECT_REVIVE_LIMIT = 31
global.EFFECT_SUMMON_PROC = 32
global.EFFECT_LIMIT_SUMMON_PROC = 33
global.EFFECT_SPSUMMON_PROC = 34
global.EFFECT_EXTRA_SET_COUNT = 35
global.EFFECT_SET_PROC = 36
global.EFFECT_LIMIT_SET_PROC = 37
global.EFFECT_DEVINE_LIGHT = 38
global.EFFECT_CANNOT_DISABLE_FLIP_SUMMON = 39
global.EFFECT_INDESTRUCTABLE = 40
global.EFFECT_INDESTRUCTABLE_EFFECT = 41
global.EFFECT_INDESTRUCTABLE_BATTLE = 42
global.EFFECT_UNRELEASABLE_SUM = 43
global.EFFECT_UNRELEASABLE_NONSUM = 44
global.EFFECT_DESTROY_SUBSTITUTE = 45
global.EFFECT_CANNOT_RELEASE = 46
global.EFFECT_INDESTRUCTABLE_COUNT = 47
global.EFFECT_UNRELEASABLE_EFFECT = 48
global.EFFECT_DESTROY_REPLACE = 50
global.EFFECT_RELEASE_REPLACE = 51
global.EFFECT_SEND_REPLACE = 52
global.EFFECT_CANNOT_DISCARD_HAND = 55
global.EFFECT_CANNOT_DISCARD_DECK = 56
global.EFFECT_CANNOT_USE_AS_COST = 57
global.EFFECT_CANNOT_PLACE_COUNTER = 58
global.EFFECT_CANNOT_TO_GRAVE_AS_COST = 59
global.EFFECT_LEAVE_FIELD_REDIRECT = 60
global.EFFECT_TO_HAND_REDIRECT = 61
global.EFFECT_TO_DECK_REDIRECT = 62
global.EFFECT_TO_GRAVE_REDIRECT = 63
global.EFFECT_REMOVE_REDIRECT = 64
global.EFFECT_CANNOT_TO_HAND = 65
global.EFFECT_CANNOT_TO_DECK = 66
global.EFFECT_CANNOT_REMOVE = 67
global.EFFECT_CANNOT_TO_GRAVE = 68
global.EFFECT_CANNOT_TURN_SET = 69
global.EFFECT_CANNOT_BE_BATTLE_TARGET = 70
global.EFFECT_CANNOT_BE_EFFECT_TARGET = 71
global.EFFECT_IGNORE_BATTLE_TARGET = 72
global.EFFECT_CANNOT_DIRECT_ATTACK = 73
global.EFFECT_DIRECT_ATTACK = 74
global.EFFECT_GEMINI_STATUS = 75
global.EFFECT_EQUIP_LIMIT = 76
global.EFFECT_GEMINI_SUMMONABLE = 77
global.EFFECT_REVERSE_DAMAGE = 80
global.EFFECT_REVERSE_RECOVER = 81
global.EFFECT_CHANGE_DAMAGE = 82
global.EFFECT_REFLECT_DAMAGE = 83
global.EFFECT_CANNOT_ATTACK = 85
global.EFFECT_CANNOT_ATTACK_ANNOUNCE = 86
global.EFFECT_CANNOT_CHANGE_POS_E = 87
global.EFFECT_ACTIVATE_COST = 90
global.EFFECT_SUMMON_COST = 91
global.EFFECT_SPSUMMON_COST = 92
global.EFFECT_FLIPSUMMON_COST = 93
global.EFFECT_MSET_COST = 94
global.EFFECT_SSET_COST = 95
global.EFFECT_ATTACK_COST = 96
global.EFFECT_UPDATE_ATTACK = 100
global.EFFECT_SET_ATTACK = 101
global.EFFECT_SET_ATTACK_FINAL = 102
global.EFFECT_SET_BASE_ATTACK = 103
global.EFFECT_UPDATE_DEFENSE = 104
global.EFFECT_SET_DEFENSE = 105
global.EFFECT_SET_DEFENSE_FINAL = 106
global.EFFECT_SET_BASE_DEFENSE = 107
global.EFFECT_REVERSE_UPDATE = 108
global.EFFECT_SWAP_AD = 109
global.EFFECT_SWAP_BASE_AD = 110
global.EFFECT_SWAP_ATTACK_FINAL = 111
global.EFFECT_SWAP_DEFENSE_FINAL = 112
global.EFFECT_ADD_CODE = 113
global.EFFECT_CHANGE_CODE = 114
global.EFFECT_ADD_TYPE = 115
global.EFFECT_REMOVE_TYPE = 116
global.EFFECT_CHANGE_TYPE = 117
global.EFFECT_REMOVE_CODE = 118
global.EFFECT_ADD_RACE = 120
global.EFFECT_REMOVE_RACE = 121
global.EFFECT_CHANGE_RACE = 122
global.EFFECT_ADD_ATTRIBUTE = 125
global.EFFECT_REMOVE_ATTRIBUTE = 126
global.EFFECT_CHANGE_ATTRIBUTE = 127
global.EFFECT_UPDATE_LEVEL = 130
global.EFFECT_CHANGE_LEVEL = 131
global.EFFECT_UPDATE_RANK = 132
global.EFFECT_CHANGE_RANK = 133
global.EFFECT_UPDATE_LSCALE = 134
global.EFFECT_CHANGE_LSCALE = 135
global.EFFECT_UPDATE_RSCALE = 136
global.EFFECT_CHANGE_RSCALE = 137
global.EFFECT_SET_POSITION = 140
global.EFFECT_SELF_DESTROY = 141
global.EFFECT_SELF_TOGRAVE = 142
global.EFFECT_DOUBLE_TRIBUTE = 150
global.EFFECT_DECREASE_TRIBUTE = 151
global.EFFECT_DECREASE_TRIBUTE_SET = 152
global.EFFECT_EXTRA_RELEASE = 153
global.EFFECT_TRIBUTE_LIMIT = 154
global.EFFECT_EXTRA_RELEASE_SUM = 155
global.EFFECT_TRIPLE_TRIBUTE = 156
global.EFFECT_ADD_EXTRA_TRIBUTE = 157
global.EFFECT_EXTRA_RELEASE_NONSUM = 158
global.EFFECT_PUBLIC = 160
global.EFFECT_COUNTER_PERMIT = 0x10000
global.EFFECT_COUNTER_LIMIT = 0x20000
global.EFFECT_RCOUNTER_REPLACE = 0x30000
global.EFFECT_LPCOST_CHANGE = 170
global.EFFECT_LPCOST_REPLACE = 171
global.EFFECT_SKIP_DP = 180
global.EFFECT_SKIP_SP = 181
global.EFFECT_SKIP_M1 = 182
global.EFFECT_SKIP_BP = 183
global.EFFECT_SKIP_M2 = 184
global.EFFECT_CANNOT_BP = 185
global.EFFECT_CANNOT_M2 = 186
global.EFFECT_CANNOT_EP = 187
global.EFFECT_SKIP_TURN = 188
global.EFFECT_SKIP_EP = 189
global.EFFECT_DEFENSE_ATTACK = 190
global.EFFECT_MUST_ATTACK = 191
global.EFFECT_FIRST_ATTACK = 192
global.EFFECT_ATTACK_ALL = 193
global.EFFECT_EXTRA_ATTACK = 194
// global.EFFECT_MUST_BE_ATTACKED       =   195
global.EFFECT_ONLY_BE_ATTACKED = 196
global.EFFECT_ATTACK_DISABLED = 197
global.EFFECT_NO_BATTLE_DAMAGE = 200
global.EFFECT_AVOID_BATTLE_DAMAGE = 201
global.EFFECT_REFLECT_BATTLE_DAMAGE = 202
global.EFFECT_PIERCE = 203
global.EFFECT_BATTLE_DESTROY_REDIRECT = 204
global.EFFECT_BATTLE_DAMAGE_TO_EFFECT = 205
global.EFFECT_BOTH_BATTLE_DAMAGE = 206
global.EFFECT_ALSO_BATTLE_DAMAGE = 207
global.EFFECT_CHANGE_BATTLE_DAMAGE = 208
global.EFFECT_TOSS_COIN_REPLACE = 220
global.EFFECT_TOSS_DICE_REPLACE = 221
global.EFFECT_TOSS_COIN_CHOOSE = 222
global.EFFECT_TOSS_DICE_CHOOSE = 223
global.EFFECT_FUSION_MATERIAL = 230
global.EFFECT_CHAIN_MATERIAL = 231
global.EFFECT_SYNCHRO_MATERIAL = 232
global.EFFECT_XYZ_MATERIAL = 233
global.EFFECT_FUSION_SUBSTITUTE = 234
global.EFFECT_CANNOT_BE_FUSION_MATERIAL = 235
global.EFFECT_CANNOT_BE_SYNCHRO_MATERIAL = 236
global.EFFECT_SYNCHRO_MATERIAL_CUSTOM = 237
global.EFFECT_CANNOT_BE_XYZ_MATERIAL = 238
global.EFFECT_CANNOT_BE_LINK_MATERIAL = 239
global.EFFECT_SYNCHRO_LEVEL = 240
global.EFFECT_RITUAL_LEVEL = 241
global.EFFECT_XYZ_LEVEL = 242
global.EFFECT_EXTRA_RITUAL_MATERIAL = 243
global.EFFECT_NONTUNER = 244
global.EFFECT_OVERLAY_REMOVE_REPLACE = 245
//global.EFFECT_SCRAP_CHIMERA            =    246
//global.EFFECT_TUNE_MAGICIAN_X          =    247
global.EFFECT_CANNOT_BE_MATERIAL = 248
global.EFFECT_PRE_MONSTER = 250
global.EFFECT_MATERIAL_CHECK = 251
global.EFFECT_DISABLE_FIELD = 260
global.EFFECT_USE_EXTRA_MZONE = 261
global.EFFECT_USE_EXTRA_SZONE = 262
global.EFFECT_MAX_MZONE = 263
global.EFFECT_MAX_SZONE = 264
global.EFFECT_MUST_USE_MZONE = 265
global.EFFECT_BECOME_LINKED_ZONE = 266
global.EFFECT_HAND_LIMIT = 270
global.EFFECT_DRAW_COUNT = 271
global.EFFECT_SPIRIT_DONOT_RETURN = 280
global.EFFECT_SPIRIT_MAYNOT_RETURN = 281
global.EFFECT_CHANGE_ENVIRONMENT = 290
global.EFFECT_NECRO_VALLEY = 291
global.EFFECT_FORBIDDEN = 292
global.EFFECT_NECRO_VALLEY_IM = 293
global.EFFECT_REVERSE_DECK = 294
global.EFFECT_REMOVE_BRAINWASHING = 295
global.EFFECT_BP_TWICE = 296
global.EFFECT_UNIQUE_CHECK = 297
global.EFFECT_MATCH_KILL = 300
global.EFFECT_SYNCHRO_CHECK = 310
global.EFFECT_QP_ACT_IN_NTPHAND = 311
global.EFFECT_MUST_BE_SMATERIAL = 312
global.EFFECT_TO_GRAVE_REDIRECT_CB = 313
global.EFFECT_CHANGE_LEVEL_FINAL = 314
global.EFFECT_CHANGE_RANK_FINAL = 315
global.EFFECT_MUST_BE_FMATERIAL = 316
global.EFFECT_MUST_BE_XMATERIAL = 317
global.EFFECT_MUST_BE_LMATERIAL = 318
global.EFFECT_SPSUMMON_PROC_G = 320
global.EFFECT_SPSUMMON_COUNT_LIMIT = 330
global.EFFECT_LEFT_SPSUMMON_COUNT = 331
global.EFFECT_CANNOT_SELECT_BATTLE_TARGET = 332
global.EFFECT_CANNOT_SELECT_EFFECT_TARGET = 333
global.EFFECT_ADD_SETCODE = 334
global.EFFECT_NO_EFFECT_DAMAGE = 335
global.EFFECT_UNSUMMONABLE_CARD = 336
global.EFFECT_DISCARD_COST_CHANGE = 338
global.EFFECT_HAND_SYNCHRO = 339
global.EFFECT_ONLY_ATTACK_MONSTER = 343
global.EFFECT_MUST_ATTACK_MONSTER = 344
global.EFFECT_PATRICIAN_OF_DARKNESS = 345
global.EFFECT_EXTRA_ATTACK_MONSTER = 346
global.EFFECT_UNION_STATUS = 347
global.EFFECT_OLDUNION_STATUS = 348
global.EFFECT_REMOVE_SETCODE = 349
global.EFFECT_CHANGE_SETCODE = 350
global.EFFECT_EXTRA_FUSION_MATERIAL = 352
global.EFFECT_TUNER_MATERIAL_LIMIT = 353
global.EFFECT_EXTRA_PENDULUM_SUMMON = 360
global.EFFECT_IRON_WALL = 361
global.EFFECT_CANNOT_LOSE_DECK = 400
global.EFFECT_CANNOT_LOSE_LP = 401
global.EFFECT_CANNOT_LOSE_EFFECT = 402
global.EFFECT_BP_FIRST_TURN = 403
global.EFFECT_UNSTOPPABLE_ATTACK = 404
global.EFFECT_ALLOW_NEGATIVE = 405
global.EFFECT_SELF_ATTACK = 406
global.EFFECT_BECOME_QUICK = 407
global.EFFECT_LEVEL_RANK = 408
global.EFFECT_RANK_LEVEL = 409
global.EFFECT_LEVEL_RANK_S = 410
global.EFFECT_RANK_LEVEL_S = 411
global.EFFECT_UPDATE_LINK = 420
global.EFFECT_CHANGE_LINK = 421
global.EFFECT_CHANGE_LINK_FINAL = 422
global.EFFECT_ADD_LINKMARKER = 423
global.EFFECT_REMOVE_LINKMARKER = 424
global.EFFECT_CHANGE_LINKMARKER = 425
global.EFFECT_FORCE_NORMAL_SUMMON_POSITION = 426
global.EFFECT_FORCE_SPSUMMON_POSITION = 427
global.EFFECT_DARKNESS_HIDE = 428

global.EVENT_STARTUP = 1000
global.EVENT_FLIP = 1001
global.EVENT_FREE_CHAIN = 1002
global.EVENT_DESTROY = 1010
global.EVENT_REMOVE = 1011
global.EVENT_TO_HAND = 1012
global.EVENT_TO_DECK = 1013
global.EVENT_TO_GRAVE = 1014
global.EVENT_LEAVE_FIELD = 1015
global.EVENT_CHANGE_POS = 1016
global.EVENT_RELEASE = 1017
global.EVENT_DISCARD = 1018
global.EVENT_LEAVE_FIELD_P = 1019
global.EVENT_CHAIN_SOLVING = 1020
global.EVENT_CHAIN_ACTIVATING = 1021
global.EVENT_CHAIN_SOLVED = 1022
//global.EVENT_CHAIN_ACTIVATED    = 1023
global.EVENT_CHAIN_NEGATED = 1024
global.EVENT_CHAIN_DISABLED = 1025
global.EVENT_CHAIN_END = 1026
global.EVENT_CHAINING = 1027
global.EVENT_BECOME_TARGET = 1028
global.EVENT_DESTROYED = 1029
global.EVENT_MOVE = 1030
global.EVENT_ADJUST = 1040
global.EVENT_SUMMON_SUCCESS = 1100
global.EVENT_FLIP_SUMMON_SUCCESS = 1101
global.EVENT_SPSUMMON_SUCCESS = 1102
global.EVENT_SUMMON = 1103
global.EVENT_FLIP_SUMMON = 1104
global.EVENT_SPSUMMON = 1105
global.EVENT_MSET = 1106
global.EVENT_SSET = 1107
global.EVENT_BE_MATERIAL = 1108
global.EVENT_BE_PRE_MATERIAL = 1109
global.EVENT_DRAW = 1110
global.EVENT_DAMAGE = 1111
global.EVENT_RECOVER = 1112
global.EVENT_PREDRAW = 1113
global.EVENT_SUMMON_NEGATED = 1114
global.EVENT_FLIP_SUMMON_NEGATED = 1115
global.EVENT_SPSUMMON_NEGATED = 1116
global.EVENT_CONTROL_CHANGED = 1120
global.EVENT_EQUIP = 1121
global.EVENT_ATTACK_ANNOUNCE = 1130
global.EVENT_BE_BATTLE_TARGET = 1131
global.EVENT_BATTLE_START = 1132
global.EVENT_BATTLE_CONFIRM = 1133
global.EVENT_PRE_DAMAGE_CALCULATE = 1134
// global.EVENT_DAMAGE_CALCULATING =1135
global.EVENT_PRE_BATTLE_DAMAGE = 1136
//global.EVENT_BATTLE_END        =  1137
global.EVENT_BATTLED = 1138
global.EVENT_BATTLE_DESTROYING = 1139
global.EVENT_BATTLE_DESTROYED = 1140
global.EVENT_DAMAGE_STEP_END = 1141
global.EVENT_ATTACK_DISABLED = 1142
global.EVENT_BATTLE_DAMAGE = 1143
global.EVENT_TOSS_DICE = 1150
global.EVENT_TOSS_COIN = 1151
global.EVENT_TOSS_COIN_NEGATE = 1152
global.EVENT_TOSS_DICE_NEGATE = 1153
global.EVENT_LEVEL_UP = 1200
global.EVENT_PAY_LPCOST = 1201
global.EVENT_DETACH_MATERIAL = 1202
global.EVENT_RETURN_TO_GRAVE = 1203
global.EVENT_TURN_END = 1210
global.EVENT_PHASE = 0x1000
global.EVENT_PHASE_START = 0x2000
global.EVENT_ADD_COUNTER = 0x10000
global.EVENT_REMOVE_COUNTER = 0x20000
global.EVENT_CUSTOM = 0x10000000

global.DOUBLE_DAMAGE = 0x80000000
global.HALF_DAMAGE = 0x80000001

//Location Use Reason
global.LOCATION_REASON_TOFIELD = 0x1
global.LOCATION_REASON_CONTROL = 0x2
global.LOCATION_REASON_COUNT = 0x4
global.LOCATION_REASON_RETURN = 0x8
//Chain Info
global.CHAIN_DISABLE_ACTIVATE = 0x01
global.CHAIN_DISABLE_EFFECT = 0x02
global.CHAIN_HAND_EFFECT = 0x04
global.CHAIN_CONTINUOUS_CARD = 0x08
global.CHAIN_ACTIVATING = 0x10
global.CHAIN_HAND_TRIGGER = 0x20
//global.CHAIN_DECK_EFFECT	=	0x40
global.CHAININFO_CHAIN_COUNT = 0x01
global.CHAININFO_TRIGGERING_EFFECT = 0x02
global.CHAININFO_TRIGGERING_PLAYER = 0x04
global.CHAININFO_TRIGGERING_CONTROLER = 0x08
global.CHAININFO_TRIGGERING_LOCATION = 0x10
global.CHAININFO_TRIGGERING_SEQUENCE = 0x20
global.CHAININFO_TARGET_CARDS = 0x40
global.CHAININFO_TARGET_PLAYER = 0x80
global.CHAININFO_TARGET_PARAM = 0x100
global.CHAININFO_DISABLE_REASON = 0x200
global.CHAININFO_DISABLE_PLAYER = 0x400
global.CHAININFO_CHAIN_ID = 0x800
global.CHAININFO_TYPE = 0x1000
global.CHAININFO_EXTTYPE = 0x2000
global.CHAININFO_TRIGGERING_POSITION = 0x4000
global.CHAININFO_TRIGGERING_CODE = 0x8000
global.CHAININFO_TRIGGERING_CODE2 = 0x10000
//global.CHAININFO_TRIGGERING_TYPE	=	0x20000
global.CHAININFO_TRIGGERING_LEVEL = 0x40000
global.CHAININFO_TRIGGERING_RANK = 0x80000
global.CHAININFO_TRIGGERING_ATTRIBUTE = 0x100000
global.CHAININFO_TRIGGERING_RACE = 0x200000
global.CHAININFO_TRIGGERING_ATTACK = 0x400000
global.CHAININFO_TRIGGERING_DEFENSE = 0x800000
//Timing
global.TIMING_DRAW_PHASE = 0x1
global.TIMING_STANDBY_PHASE = 0x2
global.TIMING_MAIN_END = 0x4
global.TIMING_BATTLE_START = 0x8
global.TIMING_BATTLE_END = 0x10
global.TIMING_END_PHASE = 0x20
global.TIMING_SUMMON = 0x40
global.TIMING_SPSUMMON = 0x80
global.TIMING_FLIPSUMMON = 0x100
global.TIMING_MSET = 0x200
global.TIMING_SSET = 0x400
global.TIMING_POS_CHANGE = 0x800
global.TIMING_ATTACK = 0x1000
global.TIMING_DAMAGE_STEP = 0x2000
global.TIMING_DAMAGE_CAL = 0x4000
global.TIMING_CHAIN_END = 0x8000
global.TIMING_DRAW = 0x10000
global.TIMING_DAMAGE = 0x20000
global.TIMING_RECOVER = 0x40000
global.TIMING_DESTROY = 0x80000
global.TIMING_REMOVE = 0x100000
global.TIMING_TOHAND = 0x200000
global.TIMING_TODECK = 0x400000
global.TIMING_TOGRAVE = 0x800000
global.TIMING_BATTLE_PHASE = 0x1000000
global.TIMING_EQUIP = 0x2000000
global.TIMING_BATTLE_STEP_END = 0x4000000
global.TIMING_BATTLED = 0x8000000

global.GLOBALFLAG_DECK_REVERSE_CHECK = 0x1
global.GLOBALFLAG_BRAINWASHING_CHECK = 0x2
//global.GLOBALFLAG_SCRAP_CHIMERA	=	0x4
//global.GLOBALFLAG_DELAYED_QUICKEFFECT=	0x8
global.GLOBALFLAG_DETACH_EVENT = 0x10
//global.GLOBALFLAG_MUST_BE_SMATERIAL=	0x20
global.GLOBALFLAG_SPSUMMON_COUNT = 0x40
//global.GLOBALFLAG_XMAT_COUNT_LIMIT=		0x80
global.GLOBALFLAG_SELF_TOGRAVE = 0x100
global.GLOBALFLAG_SPSUMMON_ONCE = 0x200
//global.GLOBALFLAG_TUNE_MAGICIAN=		0x400
//
global.PROCESSOR_FLAG_END = 0
global.PROCESSOR_FLAG_WAITING = 0x1
global.PROCESSOR_FLAG_CONTINUE = 0x2

global.PROCESSOR_ADJUST = 1
global.PROCESSOR_HINT = 2
global.PROCESSOR_TURN = 3
global.PROCESSOR_REFRESH_LOC = 5
global.PROCESSOR_STARTUP = 6
global.PROCESSOR_SELECT_IDLECMD = 10
global.PROCESSOR_SELECT_EFFECTYN = 11
global.PROCESSOR_SELECT_BATTLECMD = 12
global.PROCESSOR_SELECT_YESNO = 13
global.PROCESSOR_SELECT_OPTION = 14
global.PROCESSOR_SELECT_CARD = 15
global.PROCESSOR_SELECT_CHAIN = 16
global.PROCESSOR_SELECT_UNSELECT_CARD = 17
global.PROCESSOR_SELECT_PLACE = 18
global.PROCESSOR_SELECT_POSITION = 19
global.PROCESSOR_SELECT_TRIBUTE_P = 20
global.PROCESSOR_SORT_CHAIN = 21
global.PROCESSOR_SELECT_COUNTER = 22
global.PROCESSOR_SELECT_SUM = 23
global.PROCESSOR_SELECT_DISFIELD = 24
global.PROCESSOR_SORT_CARD = 25
global.PROCESSOR_SELECT_RELEASE = 26
global.PROCESSOR_SELECT_TRIBUTE = 27
global.PROCESSOR_POINT_EVENT = 30
global.PROCESSOR_QUICK_EFFECT = 31
global.PROCESSOR_IDLE_COMMAND = 32
global.PROCESSOR_PHASE_EVENT = 33
global.PROCESSOR_BATTLE_COMMAND = 34
global.PROCESSOR_DAMAGE_STEP = 35
global.PROCESSOR_FORCED_BATTLE = 36
global.PROCESSOR_ADD_CHAIN = 40
global.PROCESSOR_SOLVE_CHAIN = 42
global.PROCESSOR_SOLVE_CONTINUOUS = 43
global.PROCESSOR_EXECUTE_COST = 44
global.PROCESSOR_EXECUTE_OPERATION = 45
global.PROCESSOR_EXECUTE_TARGET = 46
global.PROCESSOR_DESTROY = 50
global.PROCESSOR_RELEASE = 51
global.PROCESSOR_SENDTO = 52
global.PROCESSOR_MOVETOFIELD = 53
global.PROCESSOR_CHANGEPOS = 54
global.PROCESSOR_OPERATION_REPLACE = 55
global.PROCESSOR_DESTROY_REPLACE = 56
global.PROCESSOR_RELEASE_REPLACE = 57
global.PROCESSOR_SENDTO_REPLACE = 58
global.PROCESSOR_SUMMON_RULE = 60
global.PROCESSOR_SPSUMMON_RULE = 61
global.PROCESSOR_SPSUMMON = 62
global.PROCESSOR_FLIP_SUMMON = 63
global.PROCESSOR_MSET = 64
global.PROCESSOR_SSET = 65
global.PROCESSOR_SPSUMMON_STEP = 66
global.PROCESSOR_SSET_G = 67
global.PROCESSOR_DRAW = 70
global.PROCESSOR_DAMAGE = 71
global.PROCESSOR_RECOVER = 72
global.PROCESSOR_EQUIP = 73
global.PROCESSOR_GET_CONTROL = 74
global.PROCESSOR_SWAP_CONTROL = 75
global.PROCESSOR_CONTROL_ADJUST = 76
global.PROCESSOR_SELF_DESTROY = 77
global.PROCESSOR_TRAP_MONSTER_ADJUST = 78
global.PROCESSOR_PAY_LPCOST = 80
global.PROCESSOR_REMOVE_COUNTER = 81
global.PROCESSOR_ATTACK_DISABLE = 82
global.PROCESSOR_ACTIVATE_EFFECT = 83

global.PROCESSOR_ANNOUNCE_RACE = 110
global.PROCESSOR_ANNOUNCE_ATTRIB = 111
global.PROCESSOR_ANNOUNCE_LEVEL = 112
global.PROCESSOR_ANNOUNCE_CARD = 113
global.PROCESSOR_ANNOUNCE_TYPE = 114
global.PROCESSOR_ANNOUNCE_NUMBER = 115
global.PROCESSOR_ANNOUNCE_COIN = 116
global.PROCESSOR_TOSS_DICE = 117
global.PROCESSOR_TOSS_COIN = 118
global.PROCESSOR_ROCK_PAPER_SCISSORS = 119

global.PROCESSOR_SELECT_FUSION = 131
global.PROCESSOR_DISCARD_HAND = 150
global.PROCESSOR_DISCARD_DECK = 151
global.PROCESSOR_SORT_DECK = 152
global.PROCESSOR_REMOVE_OVERLAY = 160

//global.PROCESSOR_DESTROY_S	=		100
//global.PROCESSOR_RELEASE_S	=		101
//global.PROCESSOR_SENDTO_S		=	102
//global.PROCESSOR_CHANGEPOS_S	=	103
//global.PROCESSOR_SELECT_YESNO_S=	120
//global.PROCESSOR_SELECT_OPTION_S=	121
//global.PROCESSOR_SELECT_CARD_S	=	122
//global.PROCESSOR_SELECT_EFFECTYN_S=	123
//global.PROCESSOR_SELECT_UNSELECT_CARD_S=	124
//global.PROCESSOR_SELECT_PLACE_S=	125
//global.PROCESSOR_SELECT_POSITION_S=	126
//global.PROCESSOR_SELECT_TRIBUTE_S=	127
//global.PROCESSOR_SORT_CARDS_S=		128
//global.PROCESSOR_SELECT_RELEASE_S=	129
//global.PROCESSOR_SELECT_TARGET=		130
//global.PROCESSOR_SELECT_SYNCHRO=	132
//global.PROCESSOR_SELECT_XMATERIAL=	139
//global.PROCESSOR_SELECT_SUM_S=		133
//global.PROCESSOR_SELECT_DISFIELD_S=	134
//global.PROCESSOR_SPSUMMON_S=		135
//global.PROCESSOR_SPSUMMON_STEP_S=	136
//global.PROCESSOR_SPSUMMON_COMP_S=	137
//global.PROCESSOR_RANDOM_SELECT_S=	138
//global.PROCESSOR_DRAW_S=			140
//global.PROCESSOR_DAMAGE_S=			141
//global.PROCESSOR_RECOVER_S=			142
//global.PROCESSOR_EQUIP_S=			143
//global.PROCESSOR_GET_CONTROL_S=		144
//global.PROCESSOR_SWAP_CONTROL_S=	145
//global.PROCESSOR_MOVETOFIELD_S=		161
