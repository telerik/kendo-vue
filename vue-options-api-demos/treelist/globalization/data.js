
const employees = [
    {
        "id": 1,
        "name": "Daryl Sweeney",
        "reportsTo": null,
        "phone": "(555) 924-9726",
        "extension": 8253,
        "hireDate": new Date(2012, 2, 7),
        "fullTime": true,
        "position": "CEO",
        "timeInPosition": 2,
        "employees": [
            {
                "id": 2,
                "name": "Guy Wooten",
                "reportsTo": 1,
                "phone": "(438) 738-4935",
                "extension": 1155,
                "hireDate": new Date(2010, 3, 3),
                "fullTime": true,
                "position": "Chief Technical Officer",
                "timeInPosition": 1,
                "employees": [
                    {
                        "id": 32,
                        "name": "Buffy Weber",
                        "reportsTo": 2,
                        "phone": "(699) 838-6121",
                        "extension": 8933,
                        "hireDate": new Date(2011, 7, 11),
                        "fullTime": true,
                        "position": "VP, Engineering",
                        "timeInPosition": 2,
                        "employees": [
                            {
                                "id": 11,
                                "name": "Hyacinth Hood",
                                "reportsTo": 32,
                                "phone": "(889) 345-2438",
                                "extension": 8564,
                                "hireDate": new Date(2014, 2, 3),
                                "fullTime": true,
                                "position": "Team Lead",
                                "timeInPosition": 1,
                                "employees": [
                                    {
                                        "id": 60,
                                        "name": "Akeem Carr",
                                        "reportsTo": 11,
                                        "phone": "(738) 136-2814",
                                        "extension": 9353,
                                        "hireDate": new Date(2011, 4, 21),
                                        "fullTime": true,
                                        "position": "Junior Software Developer",
                                        "timeInPosition": 2
                                    },
                                    {
                                        "id": 78,
                                        "name": "Rinah Simon",
                                        "reportsTo": 11,
                                        "phone": "(285) 912-5271",
                                        "extension": 7795,
                                        "hireDate": new Date(2012, 10, 11),
                                        "fullTime": true,
                                        "position": "Software Developer",
                                        "timeInPosition": 4
                                    }
                                ]
                            },
                            {
                                "id": 42,
                                "name": "Gage Daniels",
                                "reportsTo": 32,
                                "phone": "(107) 290-6260",
                                "extension": 896,
                                "hireDate": new Date(2013, 5, 16),
                                "fullTime": true,
                                "position": "Software Architect",
                                "timeInPosition": 5
                            },
                            {
                                "id": 43,
                                "name": "Constance Vazquez",
                                "reportsTo": 32,
                                "phone": "(800) 301-1978",
                                "extension": 5141,
                                "hireDate": new Date(2011, 6, 7),
                                "fullTime": true,
                                "position": "Director, Engineering",
                                "timeInPosition": 1,
                                "employees": [
                                    {
                                        "id": 46,
                                        "name": "Darrel Solis",
                                        "reportsTo": 43,
                                        "phone": "(327) 977-0216",
                                        "extension": 7779,
                                        "hireDate": new Date(2015, 4, 25),
                                        "fullTime": true,
                                        "position": "Team Lead",
                                        "timeInPosition": 4,
                                        "employees": [
                                            {
                                                "id": 47,
                                                "name": "Brian Yang",
                                                "reportsTo": 46,
                                                "phone": "(565) 146-5435",
                                                "extension": 3885,
                                                "hireDate": new Date(2012, 9, 27),
                                                "fullTime": true,
                                                "position": "Senior Software Developer",
                                                "timeInPosition": 3
                                            },
                                            {
                                                "id": 50,
                                                "name": "Lillian Bradshaw",
                                                "reportsTo": 46,
                                                "phone": "(323) 509-3479",
                                                "extension": 5426,
                                                "hireDate": new Date(2014, 5, 10),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 2
                                            },
                                            {
                                                "id": 51,
                                                "name": "Christian Palmer",
                                                "reportsTo": 46,
                                                "phone": "(490) 421-8718",
                                                "extension": 3706,
                                                "hireDate": new Date(2012, 12, 27),
                                                "fullTime": false,
                                                "position": "Technical Lead",
                                                "timeInPosition": 1
                                            },
                                            {
                                                "id": 55,
                                                "name": "Summer Mosley",
                                                "reportsTo": 46,
                                                "phone": "(784) 962-2301",
                                                "extension": 5492,
                                                "hireDate": new Date(2010, 3, 2),
                                                "fullTime": true,
                                                "position": "QA Engineer",
                                                "timeInPosition": 5
                                            },
                                            {
                                                "id": 56,
                                                "name": "Barry Ayers",
                                                "reportsTo": 46,
                                                "phone": "(452) 373-9227",
                                                "extension": 1308,
                                                "hireDate": new Date(2011, 10, 11),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 4
                                            },
                                            {
                                                "id": 59,
                                                "name": "Keiko Espinoza",
                                                "reportsTo": 46,
                                                "phone": "(226) 600-5305",
                                                "extension": 9363,
                                                "hireDate": new Date(2011, 9, 18),
                                                "fullTime": true,
                                                "position": "Junior QA Engineer",
                                                "timeInPosition": 4
                                            },
                                            {
                                                "id": 61,
                                                "name": "Candace Pickett",
                                                "reportsTo": 46,
                                                "phone": "(120) 117-7475",
                                                "extension": 5178,
                                                "hireDate": new Date(2010, 5, 6),
                                                "fullTime": true,
                                                "position": "Support Officer",
                                                "timeInPosition": 0
                                            }
                                        ]
                                    },
                                    {
                                        "id": 63,
                                        "name": "Mia Caldwell",
                                        "reportsTo": 43,
                                        "phone": "(848) 636-6470",
                                        "extension": 6368,
                                        "hireDate": new Date(2012, 10, 7),
                                        "fullTime": true,
                                        "position": "Team Lead",
                                        "timeInPosition": 4,
                                        "employees": [
                                            {
                                                "id": 65,
                                                "name": "Thomas Terry",
                                                "reportsTo": 63,
                                                "phone": "(764) 831-4248",
                                                "extension": 3574,
                                                "hireDate": new Date(2015, 6, 15),
                                                "fullTime": false,
                                                "position": "Senior Enterprise Support Officer",
                                                "timeInPosition": 2
                                            },
                                            {
                                                "id": 67,
                                                "name": "Ruth Downs",
                                                "reportsTo": 63,
                                                "phone": "(138) 991-1440",
                                                "extension": 8067,
                                                "hireDate": new Date(2013, 7, 13),
                                                "fullTime": true,
                                                "position": "Senior Software Developer",
                                                "timeInPosition": 5
                                            },
                                            {
                                                "id": 70,
                                                "name": "Yasir Wilder",
                                                "reportsTo": 63,
                                                "phone": "(759) 701-8665",
                                                "extension": 8350,
                                                "hireDate": new Date(2010, 11, 8),
                                                "fullTime": true,
                                                "position": "Senior QA Enginner",
                                                "timeInPosition": 3
                                            },
                                            {
                                                "id": 71,
                                                "name": "Flavia Short",
                                                "reportsTo": 63,
                                                "phone": "(370) 133-9238",
                                                "extension": 6390,
                                                "hireDate": new Date(2013, 2, 21),
                                                "fullTime": true,
                                                "position": "Support Officer",
                                                "timeInPosition": 0
                                            },
                                            {
                                                "id": 74,
                                                "name": "Aaron Roach",
                                                "reportsTo": 63,
                                                "phone": "(958) 717-9230",
                                                "extension": 4899,
                                                "hireDate": new Date(2011, 7, 30),
                                                "fullTime": true,
                                                "position": "Junior Software Developer",
                                                "timeInPosition": 6
                                            },
                                            {
                                                "id": 75,
                                                "name": "Eric Russell",
                                                "reportsTo": 63,
                                                "phone": "(516) 575-8505",
                                                "extension": 2224,
                                                "hireDate": new Date(2012, 10, 28),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 3
                                            },
                                            {
                                                "id": 76,
                                                "name": "Cheyenne Olson",
                                                "reportsTo": 63,
                                                "phone": "(241) 645-0257",
                                                "extension": 9181,
                                                "hireDate": new Date(2015, 5, 19),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 5
                                            },
                                            {
                                                "id": 77,
                                                "name": "Shaine Avila",
                                                "reportsTo": 63,
                                                "phone": "(844) 435-1360",
                                                "extension": 3374,
                                                "hireDate": new Date(2010, 1, 31),
                                                "fullTime": true,
                                                "position": "UI Designer",
                                                "timeInPosition": 5
                                            },
                                            {
                                                "id": 81,
                                                "name": "Chantale Long",
                                                "reportsTo": 63,
                                                "phone": "(252) 419-6891",
                                                "extension": 7868,
                                                "hireDate": new Date(2010, 6, 17),
                                                "fullTime": true,
                                                "position": "Senior QA Enginner",
                                                "timeInPosition": 1
                                            },
                                            {
                                                "id": 83,
                                                "name": "Dane Cruz",
                                                "reportsTo": 63,
                                                "phone": "(946) 701-6165",
                                                "extension": 3828,
                                                "hireDate": new Date(2014, 10, 8),
                                                "fullTime": true,
                                                "position": "Junior Software Developer",
                                                "timeInPosition": 2
                                            },
                                            {
                                                "id": 84,
                                                "name": "Regan Patterson",
                                                "reportsTo": 63,
                                                "phone": "(265) 946-1765",
                                                "extension": 6955,
                                                "hireDate": new Date(2012, 3, 1),
                                                "fullTime": true,
                                                "position": "Technical Writer",
                                                "timeInPosition": 6
                                            },
                                            {
                                                "id": 85,
                                                "name": "Drew Mckay",
                                                "reportsTo": 63,
                                                "phone": "(327) 293-0162",
                                                "extension": 6904,
                                                "hireDate": new Date(2011, 3, 25),
                                                "fullTime": true,
                                                "position": "Senior Software Developer",
                                                "timeInPosition": 3
                                            },
                                            {
                                                "id": 88,
                                                "name": "Bevis Miller",
                                                "reportsTo": 63,
                                                "phone": "(525) 557-0169",
                                                "extension": 6978,
                                                "hireDate": new Date(2011, 4, 19),
                                                "fullTime": true,
                                                "position": "Senior Software Developer",
                                                "timeInPosition": 5
                                            },
                                            {
                                                "id": 89,
                                                "name": "Bruce Mccarty",
                                                "reportsTo": 63,
                                                "phone": "(936) 777-8730",
                                                "extension": 6552,
                                                "hireDate": new Date(2014, 3, 28),
                                                "fullTime": true,
                                                "position": "Support Officer",
                                                "timeInPosition": 5
                                            }
                                        ]
                                    },
                                    {
                                        "id": 90,
                                        "name": "Ocean Blair",
                                        "reportsTo": 43,
                                        "phone": "(343) 586-6614",
                                        "extension": 1424,
                                        "hireDate": new Date(2011, 4, 27),
                                        "fullTime": true,
                                        "position": "Team Lead",
                                        "timeInPosition": 2,
                                        "employees": [
                                            {
                                                "id": 91,
                                                "name": "Guinevere Osborn",
                                                "reportsTo": 90,
                                                "phone": "(424) 741-0006",
                                                "extension": 3166,
                                                "hireDate": new Date(2014, 11, 19),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 3
                                            },
                                            {
                                                "id": 92,
                                                "name": "Olga Strong",
                                                "reportsTo": 90,
                                                "phone": "(949) 417-1168",
                                                "extension": 4568,
                                                "hireDate": new Date(2015, 5, 28),
                                                "fullTime": true,
                                                "position": "Graphic Designer",
                                                "timeInPosition": 4
                                            },
                                            {
                                                "id": 93,
                                                "name": "Robert Orr",
                                                "reportsTo": 90,
                                                "phone": "(977) 341-3721",
                                                "extension": 9241,
                                                "hireDate": new Date(2012, 8, 20),
                                                "fullTime": false,
                                                "position": "Support Officer",
                                                "timeInPosition": 6
                                            },
                                            {
                                                "id": 95,
                                                "name": "Odette Sears",
                                                "reportsTo": 90,
                                                "phone": "(264) 818-6576",
                                                "extension": 1914,
                                                "hireDate": new Date(2013, 7, 5),
                                                "fullTime": true,
                                                "position": "Senior Software Developer",
                                                "timeInPosition": 3
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 45,
                                "name": "Zelda Medina",
                                "reportsTo": 32,
                                "phone": "(563) 359-6023",
                                "extension": 2600,
                                "hireDate": new Date(2012, 11, 6),
                                "fullTime": true,
                                "position": "QA Architect",
                                "timeInPosition": 2
                            }
                        ]
                    },
                    {
                        "id": 52,
                        "name": "Skyler Cleveland",
                        "reportsTo": 2,
                        "phone": "(217) 280-5300",
                        "extension": 9655,
                        "hireDate": new Date(2014, 11, 10),
                        "fullTime": true,
                        "position": "VP, Engineering",
                        "timeInPosition": 2,
                        "employees": [
                            {
                                "id": 40,
                                "name": "Karleigh Garza",
                                "reportsTo": 52,
                                "phone": "(370) 983-8796",
                                "extension": 4044,
                                "hireDate": new Date(2014, 3, 10),
                                "fullTime": true,
                                "position": "Team Lead",
                                "timeInPosition": 1,
                                "employees": [
                                    {
                                        "id": 49,
                                        "name": "Elmo Tyson",
                                        "reportsTo": 40,
                                        "phone": "(344) 496-9555",
                                        "extension": 6950,
                                        "hireDate": new Date(2014, 9, 18),
                                        "fullTime": true,
                                        "position": "Software Developer",
                                        "timeInPosition": 4
                                    },
                                    {
                                        "id": 72,
                                        "name": "Stacey Lynn",
                                        "reportsTo": 40,
                                        "phone": "(140) 772-7509",
                                        "extension": 8396,
                                        "hireDate": new Date(2014, 7, 31),
                                        "fullTime": false,
                                        "position": "QA Engineer",
                                        "timeInPosition": 1,
                                        "employees": [
                                            {
                                                "id": 80,
                                                "name": "Meredith Parrish",
                                                "reportsTo": 72,
                                                "phone": "(714) 284-2408",
                                                "extension": 7675,
                                                "hireDate": new Date(2012, 11, 13),
                                                "fullTime": true,
                                                "position": "Junior QA Engineer",
                                                "timeInPosition": 6
                                            }
                                        ]
                                    },
                                    {
                                        "id": 96,
                                        "name": "Cassady Whitley",
                                        "reportsTo": 40,
                                        "phone": "(996) 587-8405",
                                        "extension": 780,
                                        "hireDate": new Date(2013, 5, 7),
                                        "fullTime": true,
                                        "position": "Software Developer",
                                        "timeInPosition": 5
                                    },
                                    {
                                        "id": 97,
                                        "name": "Haviva Campbell",
                                        "reportsTo": 40,
                                        "phone": "(263) 887-4689",
                                        "extension": 2808,
                                        "hireDate": new Date(2013, 3, 5),
                                        "fullTime": true,
                                        "position": "Support Officer",
                                        "timeInPosition": 2
                                    },
                                    {
                                        "id": 98,
                                        "name": "Cameron Ayers",
                                        "reportsTo": 40,
                                        "phone": "(470) 709-8030",
                                        "extension": 2893,
                                        "hireDate": new Date(2013, 8, 28),
                                        "fullTime": true,
                                        "position": "Support Officer",
                                        "timeInPosition": 3
                                    },
                                    {
                                        "id": 99,
                                        "name": "Martha Sargent",
                                        "reportsTo": 40,
                                        "phone": "(587) 812-4418",
                                        "extension": 5099,
                                        "hireDate": new Date(2014, 2, 27),
                                        "fullTime": true,
                                        "position": "Senior Software Developer",
                                        "timeInPosition": 3
                                    },
                                    {
                                        "id": 100,
                                        "name": "Darrel Kinney",
                                        "reportsTo": 40,
                                        "phone": "(888) 483-9606",
                                        "extension": 4779,
                                        "hireDate": new Date(2014, 3, 24),
                                        "fullTime": false,
                                        "position": "Graphic Designer",
                                        "timeInPosition": 1
                                    }
                                ]
                            },
                            {
                                "id": 54,
                                "name": "Kuame Frye",
                                "reportsTo": 52,
                                "phone": "(360) 721-5886",
                                "extension": 2730,
                                "hireDate": new Date(2010, 11, 17),
                                "fullTime": true,
                                "position": "Software Architect",
                                "timeInPosition": 1,
                                "employees": [
                                    {
                                        "id": 64,
                                        "name": "Ori Wynn",
                                        "reportsTo": 54,
                                        "phone": "(366) 342-0166",
                                        "extension": 7252,
                                        "hireDate": new Date(2015, 6, 21),
                                        "fullTime": true,
                                        "position": "Team Lead",
                                        "timeInPosition": 0,
                                        "employees": [
                                            {
                                                "id": 6,
                                                "name": "Moses Duncan",
                                                "reportsTo": 64,
                                                "phone": "(421) 611-4814",
                                                "extension": 669,
                                                "hireDate": new Date(2010, 5, 24),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 6
                                            },
                                            {
                                                "id": 12,
                                                "name": "Jamalia Wallace",
                                                "reportsTo": 64,
                                                "phone": "(611) 391-8016",
                                                "extension": 1952,
                                                "hireDate": new Date(2011, 9, 8),
                                                "fullTime": true,
                                                "position": "Junior Designer",
                                                "timeInPosition": 3
                                            },
                                            {
                                                "id": 62,
                                                "name": "Palmer Gregory",
                                                "reportsTo": 64,
                                                "phone": "(360) 430-2505",
                                                "extension": 4337,
                                                "hireDate": new Date(2014, 8, 30),
                                                "fullTime": true,
                                                "position": "Designer",
                                                "timeInPosition": 4
                                            },
                                            {
                                                "id": 68,
                                                "name": "Mallory Gilliam",
                                                "reportsTo": 64,
                                                "phone": "(878) 423-2971",
                                                "extension": 1341,
                                                "hireDate": new Date(2014, 7, 24),
                                                "fullTime": true,
                                                "position": "Senior Software Developer",
                                                "timeInPosition": 1
                                            },
                                            {
                                                "id": 73,
                                                "name": "Ima Hughes",
                                                "reportsTo": 64,
                                                "phone": "(905) 485-8001",
                                                "extension": 1273,
                                                "hireDate": new Date(2013, 6, 3),
                                                "fullTime": true,
                                                "position": "Software Developer",
                                                "timeInPosition": 0
                                            },
                                            {
                                                "id": 79,
                                                "name": "Duncan Mathews",
                                                "reportsTo": 64,
                                                "phone": "(790) 971-9709",
                                                "extension": 4573,
                                                "hireDate": new Date(2011, 8, 21),
                                                "fullTime": false,
                                                "position": "Software Developer",
                                                "timeInPosition": 3
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 69,
                                "name": "Sierra Beasley",
                                "reportsTo": 52,
                                "phone": "(271) 953-1968",
                                "extension": 3324,
                                "hireDate": new Date(2011, 4, 2),
                                "fullTime": true,
                                "position": "Team Lead",
                                "timeInPosition": 3,
                                "employees": [
                                    {
                                        "id": 38,
                                        "name": "Elton Tucker",
                                        "reportsTo": 69,
                                        "phone": "(988) 930-9331",
                                        "extension": 9216,
                                        "hireDate": new Date(2015, 6, 4),
                                        "fullTime": true,
                                        "position": "Support Officer",
                                        "timeInPosition": 1
                                    },
                                    {
                                        "id": 39,
                                        "name": "Iona Brennan",
                                        "reportsTo": 69,
                                        "phone": "(356) 563-0600",
                                        "extension": 5634,
                                        "hireDate": new Date(2010, 9, 23),
                                        "fullTime": true,
                                        "position": "Junior Support Officer",
                                        "timeInPosition": 4
                                    },
                                    {
                                        "id": 53,
                                        "name": "Paul Campos",
                                        "reportsTo": 69,
                                        "phone": "(899) 205-1689",
                                        "extension": 8586,
                                        "hireDate": new Date(2011, 3, 17),
                                        "fullTime": true,
                                        "position": "Interaction Designer",
                                        "timeInPosition": 4,
                                        "employees": [
                                            {
                                                "id": 66,
                                                "name": "Gloria Freeman",
                                                "reportsTo": 53,
                                                "phone": "(344) 950-9168",
                                                "extension": 4738,
                                                "hireDate": new Date(2013, 5, 6),
                                                "fullTime": true,
                                                "position": "Junior Interaction Designer",
                                                "timeInPosition": 0
                                            }
                                        ]
                                    },
                                    {
                                        "id": 57,
                                        "name": "Alyssa Hansen",
                                        "reportsTo": 69,
                                        "phone": "(548) 925-4799",
                                        "extension": 4716,
                                        "hireDate": new Date(2011, 1, 19),
                                        "fullTime": true,
                                        "position": "Junior Software Developer",
                                        "timeInPosition": 6
                                    },
                                    {
                                        "id": 82,
                                        "name": "Yael Walters",
                                        "reportsTo": 69,
                                        "phone": "(311) 489-8191",
                                        "extension": 6520,
                                        "hireDate": new Date(2013, 7, 4),
                                        "fullTime": true,
                                        "position": "Software Developer",
                                        "timeInPosition": 6
                                    },
                                    {
                                        "id": 87,
                                        "name": "Dahlia Hunt",
                                        "reportsTo": 69,
                                        "phone": "(720) 339-5202",
                                        "extension": 3690,
                                        "hireDate": new Date(2011, 3, 26),
                                        "fullTime": true,
                                        "position": "Senior Software Developer",
                                        "timeInPosition": 4
                                    },
                                    {
                                        "id": 94,
                                        "name": "Adria Stanley",
                                        "reportsTo": 69,
                                        "phone": "(536) 357-6391",
                                        "extension": 3374,
                                        "hireDate": new Date(2014, 7, 26),
                                        "fullTime": true,
                                        "position": "Software Developer",
                                        "timeInPosition": 0
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "name": "Priscilla Frank",
                "reportsTo": 1,
                "phone": "(278) 927-2684",
                "extension": 4183,
                "hireDate": new Date(2014, 11, 30),
                "fullTime": true,
                "position": "Chief Product Officer",
                "timeInPosition": 2,
                "employees": [
                    {
                        "id": 4,
                        "name": "Ursula Holmes",
                        "reportsTo": 3,
                        "phone": "(302) 760-2034",
                        "extension": 2226,
                        "hireDate": new Date(2011, 6, 6),
                        "fullTime": true,
                        "position": "EVP, Product Strategy",
                        "timeInPosition": 4
                    },
                    {
                        "id": 24,
                        "name": "Melvin Carrillo",
                        "reportsTo": 3,
                        "phone": "(348) 933-5167",
                        "extension": 2482,
                        "hireDate": new Date(2014, 7, 21),
                        "fullTime": true,
                        "position": "Director, Developer Relations",
                        "timeInPosition": 6,
                        "employees": [
                            {
                                "id": 29,
                                "name": "Martha Chavez",
                                "reportsTo": 24,
                                "phone": "(860) 754-3464",
                                "extension": 4531,
                                "hireDate": new Date(2013, 3, 12),
                                "fullTime": true,
                                "position": "Developer Advocate",
                                "timeInPosition": 0
                            },
                            {
                                "id": 30,
                                "name": "Oren Fox",
                                "reportsTo": 24,
                                "phone": "(572) 414-3299",
                                "extension": 4849,
                                "hireDate": new Date(2013, 5, 14),
                                "fullTime": false,
                                "position": "Developer Advocate",
                                "timeInPosition": 0
                            },
                            {
                                "id": 41,
                                "name": "Amos Barr",
                                "reportsTo": 24,
                                "phone": "(470) 381-3718",
                                "extension": 7643,
                                "hireDate": new Date(2010, 3, 9),
                                "fullTime": true,
                                "position": "Developer Advocate",
                                "timeInPosition": 2
                            }
                        ]
                    }
                ]
            },
            {
                "id": 5,
                "name": "Anika Vega",
                "reportsTo": 1,
                "phone": "(910) 714-1802",
                "extension": 6353,
                "hireDate": new Date(2010, 2, 25),
                "fullTime": true,
                "position": "Chief Process Officer",
                "timeInPosition": 5,
                "employees": [
                    {
                        "id": 10,
                        "name": "Vernon Ballard",
                        "reportsTo": 5,
                        "phone": "(702) 185-8890",
                        "extension": 9242,
                        "hireDate": new Date(2015, 6, 26),
                        "fullTime": true,
                        "position": "Director Facilities",
                        "timeInPosition": 2,
                        "employees": [
                            {
                                "id": 16,
                                "name": "Ali Guy",
                                "reportsTo": 10,
                                "phone": "(429) 912-6578",
                                "extension": 2225,
                                "hireDate": new Date(2014, 6, 29),
                                "fullTime": true,
                                "position": "Operations Manager",
                                "timeInPosition": 4,
                                "employees": [
                                    {
                                        "id": 23,
                                        "name": "Bruce Reilly",
                                        "reportsTo": 16,
                                        "phone": "(995) 243-7302",
                                        "extension": 4815,
                                        "hireDate": new Date(2015, 4, 1),
                                        "fullTime": true,
                                        "position": "Head of Security",
                                        "timeInPosition": 1,
                                        "employees": [
                                            {
                                                "id": 26,
                                                "name": "Rowan Morin",
                                                "reportsTo": 23,
                                                "phone": "(792) 141-4374",
                                                "extension": 1844,
                                                "hireDate": new Date(2015, 7, 30),
                                                "fullTime": true,
                                                "position": "Building Security",
                                                "timeInPosition": 5
                                            },
                                            {
                                                "id": 44,
                                                "name": "Benedict Soto",
                                                "reportsTo": 23,
                                                "phone": "(822) 282-5991",
                                                "extension": 6422,
                                                "hireDate": new Date(2012, 6, 1),
                                                "fullTime": false,
                                                "position": "Building Security",
                                                "timeInPosition": 4
                                            }
                                        ]
                                    },
                                    {
                                        "id": 48,
                                        "name": "Maryam Rios",
                                        "reportsTo": 16,
                                        "phone": "(673) 764-6720",
                                        "extension": 531,
                                        "hireDate": new Date(2014, 3, 3),
                                        "fullTime": true,
                                        "position": "Team Lead, Personal Assistants",
                                        "timeInPosition": 1,
                                        "employees": [
                                            {
                                                "id": 58,
                                                "name": "Rose Mcintyre",
                                                "reportsTo": 48,
                                                "phone": "(771) 615-4590",
                                                "extension": 7094,
                                                "hireDate": new Date(2015, 6, 30),
                                                "fullTime": false,
                                                "position": "Personal Assistant",
                                                "timeInPosition": 6
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 7,
                "name": "Nevada Hart",
                "reportsTo": 1,
                "phone": "(254) 220-1576",
                "extension": 6649,
                "hireDate": new Date(2015, 8, 17),
                "fullTime": true,
                "position": "Chief Financial Officer",
                "timeInPosition": 6,
                "employees": [
                    {
                        "id": 14,
                        "name": "Zena Sanford",
                        "reportsTo": 7,
                        "phone": "(437) 568-8160",
                        "extension": 4452,
                        "hireDate": new Date(2010, 11, 30),
                        "fullTime": true,
                        "position": "VP, Finance",
                        "timeInPosition": 4
                    },
                    {
                        "id": 15,
                        "name": "Quinlan Howe",
                        "reportsTo": 7,
                        "phone": "(464) 334-9748",
                        "extension": 8722,
                        "hireDate": new Date(2011, 6, 9),
                        "fullTime": false,
                        "position": "Senior Director, Finance",
                        "timeInPosition": 0,
                        "employees": [
                            {
                                "id": 17,
                                "name": "Indira Lopez",
                                "reportsTo": 15,
                                "phone": "(301) 368-0938",
                                "extension": 8027,
                                "hireDate": new Date(2013, 8, 18),
                                "fullTime": true,
                                "position": "ERP Team Lead",
                                "timeInPosition": 4,
                                "employees": [
                                    {
                                        "id": 18,
                                        "name": "Lareina Lara",
                                        "reportsTo": 17,
                                        "phone": "(233) 457-7482",
                                        "extension": 1996,
                                        "hireDate": new Date(2010, 4, 30),
                                        "fullTime": true,
                                        "position": "ERP Solutions Consultant",
                                        "timeInPosition": 6
                                    },
                                    {
                                        "id": 19,
                                        "name": "Maxwell Wise",
                                        "reportsTo": 17,
                                        "phone": "(570) 494-2531",
                                        "extension": 9865,
                                        "hireDate": new Date(2012, 5, 19),
                                        "fullTime": true,
                                        "position": "Systems Engineer",
                                        "timeInPosition": 0
                                    }
                                ]
                            },
                            {
                                "id": 20,
                                "name": "Hunter Mcbride",
                                "reportsTo": 15,
                                "phone": "(409) 442-7016",
                                "extension": 4284,
                                "hireDate": new Date(2012, 10, 20),
                                "fullTime": true,
                                "position": "Senior Director, Tax",
                                "timeInPosition": 3
                            },
                            {
                                "id": 21,
                                "name": "Jana Serrano",
                                "reportsTo": 15,
                                "phone": "(910) 718-4620",
                                "extension": 6970,
                                "hireDate": new Date(2010, 4, 2),
                                "fullTime": true,
                                "position": "Financial Planning & Analysis Manager",
                                "timeInPosition": 2
                            },
                            {
                                "id": 22,
                                "name": "Zachery Shelton",
                                "reportsTo": 15,
                                "phone": "(310) 240-8675",
                                "extension": 4527,
                                "hireDate": new Date(2011, 11, 23),
                                "fullTime": false,
                                "position": "Corporate Finance Controller",
                                "timeInPosition": 6,
                                "employees": [
                                    {
                                        "id": 28,
                                        "name": "Cullen Freeman",
                                        "reportsTo": 22,
                                        "phone": "(136) 554-8814",
                                        "extension": 9861,
                                        "hireDate": new Date(2014, 3, 15),
                                        "fullTime": true,
                                        "position": "Treasurer Accountant",
                                        "timeInPosition": 2
                                    },
                                    {
                                        "id": 31,
                                        "name": "Quinn Dean",
                                        "reportsTo": 22,
                                        "phone": "(152) 613-3507",
                                        "extension": 6621,
                                        "hireDate": new Date(2015, 1, 29),
                                        "fullTime": true,
                                        "position": "Accountant",
                                        "timeInPosition": 6
                                    },
                                    {
                                        "id": 34,
                                        "name": "Samantha Brady",
                                        "reportsTo": 22,
                                        "phone": "(206) 398-4328",
                                        "extension": 1157,
                                        "hireDate": new Date(2011, 2, 13),
                                        "fullTime": true,
                                        "position": "Accountant",
                                        "timeInPosition": 2,
                                        "employees": [
                                            {
                                                "id": 35,
                                                "name": "Tamara Green",
                                                "reportsTo": 34,
                                                "phone": "(219) 248-2789",
                                                "extension": 4880,
                                                "hireDate": new Date(2014, 2, 4),
                                                "fullTime": true,
                                                "position": "Junior Accountant",
                                                "timeInPosition": 6
                                            }
                                        ]
                                    },
                                    {
                                        "id": 36,
                                        "name": "Olympia Coleman",
                                        "reportsTo": 22,
                                        "phone": "(944) 853-6383",
                                        "extension": 2136,
                                        "hireDate": new Date(2013, 7, 31),
                                        "fullTime": true,
                                        "position": "Collections Manager",
                                        "timeInPosition": 3
                                    },
                                    {
                                        "id": 37,
                                        "name": "Breanna Goodwin",
                                        "reportsTo": 22,
                                        "phone": "(379) 988-9630",
                                        "extension": 5898,
                                        "hireDate": new Date(2010, 5, 23),
                                        "fullTime": false,
                                        "position": "Payroll Specialist",
                                        "timeInPosition": 4
                                    }
                                ]
                            },
                            {
                                "id": 27,
                                "name": "Curran Travis",
                                "reportsTo": 15,
                                "phone": "(438) 135-8033",
                                "extension": 3841,
                                "hireDate": new Date(2011, 6, 13),
                                "fullTime": true,
                                "position": "Finance Controller",
                                "timeInPosition": 5
                            }
                        ]
                    }
                ]
            },
            {
                "id": 8,
                "name": "Hunter Fry",
                "reportsTo": 1,
                "phone": "(766) 358-9858",
                "extension": 3741,
                "hireDate": new Date(2011, 2, 12),
                "fullTime": false,
                "position": "General Counsel",
                "timeInPosition": 3,
                "employees": [
                    {
                        "id": 9,
                        "name": "Kuame Carrillo",
                        "reportsTo": 8,
                        "phone": "(192) 383-1305",
                        "extension": 9228,
                        "hireDate": new Date(2011, 2, 22),
                        "fullTime": true,
                        "position": "Associate General Councel",
                        "timeInPosition": 0
                    },
                    {
                        "id": 13,
                        "name": "Stacy Todd",
                        "reportsTo": 8,
                        "phone": "(925) 286-3327",
                        "extension": 8565,
                        "hireDate": new Date(2014, 7, 5),
                        "fullTime": true,
                        "position": "Councel",
                        "timeInPosition": 0
                    },
                    {
                        "id": 33,
                        "name": "Valentine Wyatt",
                        "reportsTo": 8,
                        "phone": "(165) 166-6205",
                        "extension": 3588,
                        "hireDate": new Date(2015, 5, 21),
                        "fullTime": true,
                        "position": "Councel",
                        "timeInPosition": 5
                    },
                    {
                        "id": 86,
                        "name": "Daniel Mccarthy",
                        "reportsTo": 8,
                        "phone": "(624) 483-6206",
                        "extension": 9112,
                        "hireDate": new Date(2013, 12, 3),
                        "fullTime": false,
                        "position": "Staff Attorney",
                        "timeInPosition": 0
                    }
                ]
            }
        ]
    }
];

export default employees;
