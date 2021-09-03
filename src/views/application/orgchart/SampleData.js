/* eslint-disable */
const mode = "static";

const randData = {
    //for organizations
    arrOrgNums: ["1st", "2cd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th"],
    arrOrgNames: ["Aircraft Maintenance", "Communications", "Maintenance", "Intel", "Bomb", "Security Forces"],
    arrBases: ["Ellsworth", "Barksdale", "Cheyenne", "Andereson", "Wright-Patterson", "Andrews", "Scott", "Hickam", "Keesler", "Peterson"],
    
    //for sections
    arrSectionNames: ["Fuel", "Pilot", "Command", "Maintenance", "Intel", "Operations", "Communications"],
    arrSectionTypes: ["Office", "Section", "Platoon", "Flight"],
    arrLocationStreet: ["Funny", "Church", "Avocado", "California", "Boston", "First", "Fifth", "Airplane", "Park", "Industry"],
    arrLocationType: ["St", "Rd", "Blvd", "Dr", "Ave"],
    arrLocationCity: ["ParkTown", "Hill City", "AmishTown", "FakeCity", "SamplePlace"],
    arrLocationState: ["SD", "GE", "AL", "WY", "NH", "MY", "CA"],
    
    //for users
    firstNames: ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan", "Alexander", "Ethan", "Jacob", "Michael", "Daniel", "Henry", "Jackson", "Sebastian", "Aiden", "Matthew", "Samuel", "David"],
    lastNames: ["Raynes", "Tacket", "Chiem", "Oleg", "Candle", "SomeLast", "Hunter", "Poppyseed", "Apricot", "Cedar", "Cuphead"],
    ranks: ["AB", "Amn", "A1C", "Sra", "SSgt", "TSgt", "MSgt", "SMSgt", "CMSgt", "2Lt", "1Lt", "Capt", "Maj", "Lt Col", "Col", "Brig Gen", "Maj Gen", "Lt Gen", "Gen"],
    afscLetters: ["A","B","C","D","E","F"],
    afscCodes: ["1","3","5","7","9"],
    jobTitleNouns: ["Paper", "Candle", "Paperwork", "Fuel", "Phone", "Employee", "Salad", "Table", "Wall", "Computer"],
    jobTitleVerbs: ["Technician", "Commander", "Maker", "Cleaner", "Filer", "Builder", "Chooser"]
  }
  let OrgChartDynamic = {
    organization: {
        organization_id: 1,
        name: null,
        location: null
    },
    sections: [],
    users: []
  }
  
  function generateRand() {
    //set organization name
    OrgChartDynamic.organization.name = (`${randData.arrOrgNums[Math.floor(Math.random() * randData.arrOrgNums.length)]} ${randData.arrOrgNames[Math.floor(Math.random() * randData.arrOrgNames.length)]} Squadron`);
    //set organization location
    OrgChartDynamic.organization.location = (`${randData.arrBases[Math.floor(Math.random() * randData.arrBases.length)]} Air Force Base`);
    //create sections
    let parentCount = 0;
    for (let i=1;i<(Math.floor(Math.random() * 20)+1);i++) {
      let buildObj = {
        section_id: i,
        name: `${randData.arrSectionNames[Math.floor(Math.random() * randData.arrSectionNames.length)]} ${randData.arrSectionTypes[Math.floor(Math.random() * randData.arrSectionTypes.length)]}`,
        parent_section_id: parentCount,
        location: `${Math.floor(Math.random() * 500)} ${randData.arrLocationStreet[Math.floor(Math.random() * randData.arrLocationStreet.length)]} ${randData.arrLocationType[Math.floor(Math.random() * randData.arrLocationType.length)]}, ${randData.arrLocationCity[Math.floor(Math.random() * randData.arrLocationCity.length)]} ${randData.arrLocationState[Math.floor(Math.random() * randData.arrLocationState.length)]} ${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}`
      }
      OrgChartDynamic.sections.push(buildObj);
      if (Math.floor(Math.random() * 5) > 2 || parentCount === 0) {
        parentCount++;
      }
    }
    //create users
    let personCount = 1;
    for (let i=0;i<OrgChartDynamic.sections.length;i++) {
      for (let j=1;j<(Math.floor(Math.random() * 20)+4);j++) {
        let buildObj = {
            user_id: personCount,
            first_name: `${randData.firstNames[Math.floor(Math.random() * randData.firstNames.length)]}`,
            last_name: `${randData.lastNames[Math.floor(Math.random() * randData.lastNames.length)]}`,
            rank: `${randData.ranks[Math.floor(Math.random() * randData.ranks.length)]}`,
            email: null,
            username: null,
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: Math.floor(Math.random() * 5),
            organization_id: 1,
            section_id: i,
            home_address: `${Math.floor(Math.random() * 500)} ${randData.arrLocationStreet[Math.floor(Math.random() * randData.arrLocationStreet.length)]} ${randData.arrLocationType[Math.floor(Math.random() * randData.arrLocationType.length)]}, ${randData.arrLocationCity[Math.floor(Math.random() * randData.arrLocationCity.length)]} ${randData.arrLocationState[Math.floor(Math.random() * randData.arrLocationState.length)]} ${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}`,
            afsc: `${Math.floor(Math.random() * 9.99)}${randData.afscLetters[Math.floor(Math.random() * randData.afscLetters.length)]}${Math.floor(Math.random() * 9.99)}${randData.afscCodes[Math.floor(Math.random() * randData.afscCodes.length)]}${Math.floor(Math.random() * 9.99)}`,
            job_title: `${randData.jobTitleNouns[Math.floor(Math.random() * randData.jobTitleNouns.length)]} ${randData.jobTitleVerbs[Math.floor(Math.random() * randData.jobTitleVerbs.length)]}`,
            cell_phone: `${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}-${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}-${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}${Math.floor(Math.random() * 9.99)}`
        }
        buildObj.username = `${buildObj.first_name[0].toLowerCase()}${buildObj.last_name}${Math.floor(Math.random() * 50)+1}`
        OrgChartDynamic.users.push(buildObj);
        buildObj.email = `${buildObj.username}@mail.dod`;
        personCount++;
      }
    }
  }
  generateRand()



const OrgChartStatic = {
    organization: {
        organization_id: 1,
        name: "20th Aircraft Maintenance Squadron",
        location: "Barksdale Air Force Base"
    },
    sections: [
        {
            section_id: 1,
            name: "Command Office",
            parent_section_id: 0,
            location: "432 hector dr, somecity GI 99837"
        },
        {
            section_id: 2,
            name: "Pilots",
            parent_section_id: 1,
            location: "Bar"
        },
        {
            section_id: 3,
            name: "Support Squadron",
            parent_section_id: 1,
            location: "Home"
        },
        {
            section_id: 4,
            name: "Operational Team",
            parent_section_id: 2,
            location: "Hanger 3, Bay 2"
        },
        {
            section_id: 5,
            name: "Support Team",
            parent_section_id: 2,
            location: "Hanger 4, Rm 3"
        },
        {
            section_id: 6,
            name: "Some Other Office",
            parent_section_id: 3,
            location: "Bldg 567 Office 123"
        },
        {
            section_id: 7,
            name: "Fuel Section",
            parent_section_id: 3,
            location: "8388 JordanTacket Blvd, somecity GI, 00928"
        },
        {
            section_id: 8,
            name: "Karate Office",
            parent_section_id: 3,
            location: "Bldg 56709 Office 1889"
        },
        {
            section_id: 9,
            name: "iaido school",
            parent_section_id: 8,
            location: "Bldg 56709 Office 1123"
        },
        {
            section_id: 10,
            name: "Kendo school",
            parent_section_id: 8,
            location: "Bldg 56709 Office 1124"
        },
    ],
    users: [
        {
            user_id: 1,
            first_name: "John",
            last_name: "Doe",
            rank: "A1C",
            email: "jDoe11@mail.dod",
            username: "jDoe11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 1,
            organization_id: 1,
            section_id: 1,
            home_address: "adsldasladsldasldas",
            afsc: "3F151",
            job_title: "Computer Technician",
            cell_phone: "555-555-5555"
        },
        {
            user_id: 2,
            first_name: "Mark",
            last_name: "Last",
            rank: "SrA",
            email: "mLast11@mail.dod",
            username: "mLast11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 2,
            organization_id: 1,
            section_id: 1,
            home_address: "adsldasladsldasldas",
            afsc: "3F253",
            job_title: "Fuel Watcher",
            cell_phone: "555-545-0094"
        },
        {
            user_id: 3,
            first_name: "Jeremy",
            last_name: "Cantaloupe",
            rank: "SSgt",
            email: "jCantaloupe11@mail.dod",
            username: "jCantaloupe11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 2,
            organization_id: 1,
            section_id: 2,
            home_address: "adsldasladsldasldas",
            afsc: "2R174",
            job_title: "Airplane Fixer",
            cell_phone: "337-098-5443"
        },
        {
            user_id: 4,
            first_name: "Kevin",
            last_name: "Match",
            rank: "Amn",
            email: "kMatch11@mail.dod",
            username: "kMatch11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 1,
            organization_id: 1,
            section_id: 3,
            home_address: "adsldasladsldasldas",
            afsc: "3D131",
            job_title: "Paperwork Filer",
            cell_phone: "998-364-7787"
        },
        {
            user_id: 5,
            first_name: "Ivan",
            last_name: "Help",
            rank: "MSgt",
            email: "iHelp11@mail.dod",
            username: "iHelp11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 3,
            organization_id: 1,
            section_id: 4,
            home_address: "adsldasladsldasldas",
            afsc: "3D094",
            job_title: "Employee Manager",
            cell_phone: "993-483-9002"
        },
        {
            user_id: 6,
            first_name: "Mike",
            last_name: "Candle",
            rank: "1Lt",
            email: "mCandle11@mail.dod",
            username: "mCandle11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 3,
            organization_id: 1,
            section_id: 5,
            home_address: "adsldasladsldasldas",
            afsc: "1B451",
            job_title: "Candle Lighter",
            cell_phone: "800-493-7889"
        },
        {
            user_id: 7,
            first_name: "Amy",
            last_name: "Candle",
            rank: "Maj",
            email: "aCandle11@mail.dod",
            username: "aCandle11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 4,
            organization_id: 1,
            section_id: 6,
            home_address: "adsldasladsldasldas",
            afsc: "1B473",
            job_title: "Insurgent Shooter",
            cell_phone: "180-028-8873"
        },
        {
            user_id: 8,
            first_name: "Jake",
            last_name: "Dude",
            rank: "Civilian",
            email: "Jake.Dude@fake.com",
            username: "jake.dude",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 5,
            organization_id: 1,
            section_id: 7,
            home_address: "adsldasladsldasldas",
            afsc: "1D398",
            job_title: "Tunnel Crawler",
            cell_phone: "899-398-3778"
        },
        {
            user_id: 9,
            first_name: "Gas",
            last_name: "Herup",
            rank: "Scumbag",
            email: "none",
            username: "scum.bag@trash.com",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 5,
            organization_id: 1,
            section_id: 7,
            home_address: "adsldasladsldasldas",
            afsc: "1D398",
            job_title: "Rodent",
            cell_phone: "899-398-3778"
        },
        {
            user_id: 10,
            first_name: "Henry",
            last_name: "Tumor",
            rank: "Gen",
            email: "hTumor11@mail.dod",
            username: "hTumor11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 5,
            organization_id: 1,
            section_id: 7,
            home_address: "adsldasladsldasldas",
            afsc: "1D398",
            job_title: "Tunnel Crawler",
            cell_phone: "899-398-3778"
        },
        {
            user_id: 11,
            first_name: "Abigail",
            last_name: "Poppyseed",
            rank: "SMSgt",
            email: "aPoppyseed11@mail.dod",
            username: "aPoppyseed11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 5,
            organization_id: 1,
            section_id: 8,
            home_address: "adsldasladsldasldas",
            afsc: "1D452",
            job_title: "Table Blaster",
            cell_phone: "334-223-0498"
        },
        {
            user_id: 12,
            first_name: "Jonathan",
            last_name: "Berry",
            rank: "CMSgt",
            email: "jBerry11@mail.dod",
            username: "jBerry11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 5,
            organization_id: 1,
            section_id: 9,
            home_address: "adsldasladsldasldas",
            afsc: "1D453",
            job_title: "Table Scrubber",
            cell_phone: "293-009-4493"
        },
        {
            user_id: 13,
            first_name: "Rebecca",
            last_name: "White",
            rank: "TSgt",
            email: "rWhite11@mail.dod",
            username: "rWhite11",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            permission_level: 5,
            organization_id: 1,
            section_id: 10,
            home_address: "adsldasladsldasldas",
            afsc: "9Y373",
            job_title: "Secret Agent",
            cell_phone: "223-122-9933"
        }
    ]
}
let OrgChartData = {};
switch(mode) {
    case "static":
        OrgChartData = OrgChartStatic;
        break;
    case "dynamic":
        OrgChartData = OrgChartDynamic;
        break;
}
export default OrgChartData;