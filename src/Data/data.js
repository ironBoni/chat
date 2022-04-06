export const contacts = [
    {
        username: "ron",
        id: 1,
        name: "Ron Segal",
        profileImage: "/profile/ron.jpg"
    },
    {
        username: "noam",
        id: 2,
        name: "Noam Cohen",
        profileImage: "/profile/noam.jpg",
    },
    {
        username: "dvir",
        id: 3,
        name: "Dvir Pollak",
        profileImage: "/profile/dvir.jpg"
    },
    {
        username: "dan",
        id: 4,
        name: "Dan Cohen",
        profileImage: "/profile/dan.jpg"
    },
    {
        id: 5,
        username: "idan",
        name: "Idan Ben Ari",
        profileImage: "/profile/idan.jpg"
    },
    {
        id: 6,
        username: "shlomo",
        name: "Shlomo Levin",
        profileImage: "/profile/shlomo.png"
    }
]

export const chats = [
    {
        chatId: 1,
        participicants: ["ron", "noam"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Noam.",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 6, 9, 56)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 6, 10, 5)
            }
            ]
    },
    {
        chatId: 2,
        participicants: ["ron", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 6, 10, 10)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Ron!",
                senderUsername: "dvir",
                writtenIn: new Date(2022, 4, 6, 10, 11)
            }
            ]
    },
    {
        chatId: 3,
        participicants: ["ron", "dan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Dan, let's go to the mall",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 6, 10, 12)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Ron",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 6, 10, 20)
            }
            ]
    },
    {
        chatId: 4,
        participicants: ["ron", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, how was your semester?",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 5, 10, 21)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Ron",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 5, 10, 22)
            }
            ]
    },
    {
        chatId: 5,
        participicants: ["ron", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 6, 10, 40)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Ron, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 6, 10, 52)
            }
            ]
    },
    {
        chatId: 6,
        participicants: ["noam", "ron"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 4, 10, 5)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Noam.",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 4, 11, 5)
            }
            ]
    },
    {
        chatId: 7,
        participicants: ["noam", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 6, 12, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Noam!",
                senderUsername: "dvir",
                writtenIn: new Date(2022, 4, 6, 12, 7)
            }
            ]
    },
    {
        chatId: 8,
        participicants: ["noam", "dan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Dan, let's go to the mall",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 6, 11, 5)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Noam",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 6, 11, 10)
            }
            ]
    },
    {
        chatId: 9,
        participicants: ["noam", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, how was your semester?",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 6, 11, 25)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Noam",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 6, 11, 30)
            }
            ]
    },
    {
        chatId: 10,
        participicants: ["noam", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 6, 11, 35)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Noam, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 6, 11, 40)
            }
            ]
    },
    {
        chatId: 11,
        participicants: ["dan", "ron"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 6, 11, 56)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Dan.",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 6, 11, 59)
            }
            ]
    },
    {
        chatId: 12,
        participicants: ["dan", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 3, 11, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Dan!",
                senderUsername: "dvir",
                writtenIn: new Date(2022, 4, 3, 11, 14)
            }
            ]
    },
    {
        chatId: 13,
        participicants: ["dan", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, let's go to the mall",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 6, 12, 15)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Dan",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 6, 12, 20)
            }
            ]
    },
    {
        chatId: 14,
        participicants: ["dan", "noam"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Noam, how was your semester?",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 6, 12, 25)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Dan",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 6, 12, 30)
            }
            ]
    },
    {
        chatId: 15,
        participicants: ["dan", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 6, 12, 35)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Dan, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 6, 12, 49)
            }
            ]
    },
    {
        chatId: 16,
        participicants: ["idan", "ron"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 6, 11, 57)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Idan.",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 6, 21, 5)
            }
            ]
    },
    {
        chatId: 17,
        participicants: ["idan", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 8, 21, 5)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Idan!",
                senderUsername: "dvir",
                writtenIn: new Date(2022, 4, 8, 21, 10)
            }
            ]
    },
    {
        chatId: 18,
        participicants: ["idan", "dan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Dan, let's go to the mall",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 8, 21, 20)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Idan",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 8, 21, 30)
            }
            ]
    },
    {
        chatId: 19,
        participicants: ["idan", "noam"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Noam, how was your semester?",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 8, 21, 40)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Idan",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 8, 21, 50)
            }
            ]
    },
    {
        chatId: 20,
        participicants: ["idan", "shlomo"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Shlomo, let's go to eat pizza",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 8, 21, 55)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Idan, nice idea",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 8, 22, 0)
            }
            ]
    },
    {
        chatId: 21,
        participicants: ["shlomo", "ron"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: new Date(2022, 4, 9, 23, 20)
            },
            {
                id: 2,
                type: "text",
                text: "My name is Shlomo.",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 9, 23, 21)
            }
            ]
    },
    {
        chatId: 22,
        participicants: ["shlomo", "dvir"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Hey Dvir, how are you?",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 9, 23, 25)
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Shlomo!",
                senderUsername: "dvir",
                writtenIn: new Date(2022, 4, 9, 23, 26)
            }
            ]
    },
    {
        chatId: 23,
        participicants: ["shlomo", "idan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Idan, let's go to the mall",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 9, 23, 34)
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Shlomo",
                senderUsername: "idan",
                writtenIn: new Date(2022, 4, 9, 23, 40)
            }
            ]
    },
    {
        chatId: 24,
        participicants: ["shlomo", "noam"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Noam, how was your semester?",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 9, 23, 45)
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Shlomo",
                senderUsername: "noam",
                writtenIn: new Date(2022, 4, 9, 23, 50)
            }
            ]
    },
    {
        chatId: 25,
        participicants: ["shlomo", "dan"],
        messages:
            [{
                id: 1,
                type: "text",
                text: "Dan, let's go to eat pizza",
                senderUsername: "shlomo",
                writtenIn: new Date(2022, 4, 9, 23, 55)
            },
            {
                id: 2,
                type: "text",
                text: "Fine Shlomo, nice idea",
                senderUsername: "dan",
                writtenIn: new Date(2022, 4, 9, 23, 57)
            }
            ]
    }
]

export const users = [
    {
        username: 'noam',
        nickname: 'Noam Cohen',
        password: '123456'
    },
    {
        username: 'dvir',
        nickname: 'Dvir Pollak',
        password: '123456'
    },
    {
        username: 'ron',
        nickname: 'Dvir Pollak',

        password: '123456'
    },
    {
        username: 'dan',
        password: '123456'
    },
    {
        username: 'idan',
        password: '123456'
    },
    {
        username: 'shlomo',
        password: '123456'
    }
]