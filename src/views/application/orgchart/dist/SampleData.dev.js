"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var OrgChartData = {
  organization: {
    organization_id: 1,
    name: "20 AMXS"
  },
  sections: [{
    section_id: 1,
    name: "Command Section",
    parent: 0
  }, {
    section_id: 2,
    name: "SubSection One",
    parent: 1
  }, {
    section_id: 3,
    name: "SubSection Two",
    parent: 1
  }, {
    section_id: 4,
    name: "SubSection of SubSection One",
    parent: 2
  }, {
    section_id: 5,
    name: "SubSection of SubSection Two",
    parent: 3
  }],
  users: [{
    user_id: 1,
    first_name: "John",
    last_name: "Doe",
    rank: "A1C",
    username: "jDoe11",
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    permission_level: 2,
    organization_id: 1,
    section_id: 1
  }, {
    user_id: 2,
    first_name: "Mark",
    last_name: "Last",
    rank: "SrA",
    username: "mLast11",
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    permission_level: 2,
    organization_id: 1,
    section_id: 1
  }, {
    user_id: 1,
    first_name: "Jeremy",
    last_name: "Cantaloupe",
    rank: "SSgt",
    username: "jCantaloupe11",
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    permission_level: 2,
    organization_id: 1,
    section_id: 2
  }, {
    user_id: 1,
    first_name: "Kevin",
    last_name: "Match",
    rank: "Amn",
    username: "kMatch11",
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    permission_level: 2,
    organization_id: 1,
    section_id: 3
  }, {
    user_id: 1,
    first_name: "Ivan",
    last_name: "Help",
    rank: "MSgt",
    username: "iHelp11",
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    permission_level: 2,
    organization_id: 1,
    section_id: 4
  }, {
    user_id: 1,
    first_name: "Mike",
    last_name: "Candle",
    rank: "1Lt",
    username: "jDoe11",
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    permission_level: 2,
    organization_id: 1,
    section_id: 5
  }]
};
var _default = OrgChartData;
exports["default"] = _default;