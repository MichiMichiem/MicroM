# MicroM
API ENDPOINTS




GET '/users/:user_id'
  - req: user_id
  - res: 
  {
    user_id:
    first_name:
    last_name:
    rank:
    username:
    permission_lvl:
    org_id:
    section_id:
  }

GET '/users'
  -req: none
  -res:
  [
    {
    user_id:
    first_name:
    last_name:
    rank:
    username:
    permission_lvl:
    org_id:
    section_id:
    }, 
    {user2 obj}, 
    ...
  ]

GET '/users/org/:org_id'
  -req: org_id
  -res:
  [
    {
    user_id:
    first_name:
    last_name:
    rank:
    username:
    permission_lvl:
    org_id:
    section_id:
    }, 
    {user2 obj}, 
    ...
  ]


GET '/users/section/:section_id'
  -req: section_id
  -res:
  [
    {
    user_id:
    first_name:
    last_name:
    rank:
    username:
    permission_lvl:
    org_id:
    section_id:
    }, 
    {user2 obj}, 
    ...
]

GET '/structure/:org_id'
  req: org_id
  res: 
  {
    name: 20 AMXS,
    location: some location
    org_id: 1
    children: [
                {
                section_id: 1
                name: Command
                org_id: 1
                location: 
                parent_section_id: null
                }, 
                {
                section_id: 2,
                name: flight line,  
                org_id: 1, 
                location: flightline, 
                parent_section_id: 1
                }, 
                {
                section_id: 3,
                name: backshop,  
                org_id: 1, 
                location: hanger 2, 
                parent_section_id: 1
                },
                {
                section_id: 4,
                name: A1,  
                org_id: 1, 
                location: hanger 3, 
                parent_section_id: 1
                },
                {
                section_id: 5,
                name: CrewChiefs,  
                org_id: 1, 
                location: flightline, 
                parent_section_id: 2
                },
                ....
              ] 
}

GET '/structure/:sec_id'
  req: sec_id ex: 2
  res:        
      { 
        section_id: 2,
        name: flight line,  
        org_id: 1, 
        location: flightline, 
        parent_section_id: 1
        children: [
                    {
                    section_id: 5,
                    name: CrewChiefs,  
                    org_id: 1, 
                    location: flightline, 
                    parent_section_id: 2
                    }, 
                    {
                    section_id: 6,
                    name: Team 1,  
                    org_id: 1, 
                    location: flightline, 
                    parent_section_id: 5
                    }, 
                    {
                    section_id: 7,
                    name: Team 2,  
                    org_id: 1, 
                    location: flightline, 
                    parent_section_id: 5
                    }, 
                    {
                    section_id: 8,
                    name: Team 3,  
                    org_id: 1, 
                    location: flightline, 
                    parent_section_id: 5
                    }, 
                    {
                    section_id: 9,
                    name: Avionics,  
                    org_id: 1, 
                    location: flightline, 
                    parent_section_id: 2
                    }, 
                    {
                    section_id: 10,
                    name: Jets,  
                    org_id: 1, 
                    location: flightline, 
                    parent_section_id: 2
                    }
                  ] 
}

POST '/new/section'
  req: body: 
            {
              name: Team 4,  
              org_id: 1, 
              location: flightline, 
              parent_section_id: 5
            }
    res: 
        {
          section_id: 5,
          name: CrewChiefs,  
          org_id: 1, 
          location: flightline, 
          parent_section_id: 2
          children: 
                    [ 
                      {
                        section_id: 6,
                        name: Team 1,  
                        org_id: 1, 
                        location: flightline, 
                        parent_section_id: 5
                      }, 
                      {
                        section_id: 7,
                        name: Team 2,  
                        org_id: 1, 
                        location: flightline, 
                        parent_section_id: 5
                      }, 
                      {
                        section_id: 8,
                        name: Team 3,  
                        org_id: 1, 
                        location: flightline, 
                        parent_section_id: 5
                      }, 
                      {
                        section_id: 10,
                        name: Team 4,  
                        org_id: 1, 
                        location: flightline, 
                        parent_section_id: 5
                      }
                    ]
        }

POST '/new/user/
  req: body: 
            {   
              user_id:
              first_name:
              last_name:
              rank:
              username:
              permission_lvl:
              org_id:
              section_id:
            }

res: [{user}, {user}, {user}....] //list of users for id'd section id or all users for org if secion_id is null

POST '/new/organization'
  req: body: 
            {
              name: 20 AMXS,
              location: some location
            }
  res:      {
              name: 20 AMXS,
              location: some location
            }

PATCH '/users/user_id'
  req: body: 
    {
      first_name: Bob
    }

res: 
  { 
    user_id:
    first_name: Bob
    last_name:
    rank:
    username:
    permission_lvl:
    org_id:
    section_id:
  }

PATCH '/structure/:sec_id'
  req: body: 
        {
          location: something new
        }
  res: 
      {
        section_id: 6,
        name: Team 1,  
        org_id: 1, 
        location: something new, 
        parent_section_id: 5
      }


npm install @material-ui/icons
