export const contacts = [
    {
        username: "ron",
        id: 1,
        name: "Ron Segal",
        profileImage: "/profile/ron.jpg",
        lastMsg: "It was a great dinner",
        lastMsgTime: "23:02"
    },
    {
        username: "noam",
        id: 2,
        name: "Noam Cohen",
        profileImage: "/profile/noam.jpg",
        lastMsg: "Yes, it had so much fun.",
        lastMsgTime: "23:30"
    },
    {
        username: "dvir",
        id: 3,
        name: "Dvir Pollak",
        profileImage: "/profile/dvir.jpg",
        lastMsg: "I think we should see each other more.",
        lastMsgTime: "23:40"
    },
    {
        username: "dan",
        id: 4,
        name: "Dan Cohen",
        profileImage: "/profile/dan.jpg",
        lastMsg: "I agree.",
        lastMsgTime: "23:42"
    },
    {
        id: 5,
        username: "idan",
        name: "Idan Ben Ari",
        profileImage: "/profile/idan.jpg",
        lastMsg: "I feel great",
        lastMsgTime: "23:30"
    },
    {
        id: 6,
        username: "shlomo",
        name: "Shlomo Levin",
        profileImage: "/profile/shlomo.png",
        lastMsg: "I'm happy to hear than.",
        lastMsgTime: "23:34"
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
                writtenIn: "09:56"
            },
            {
                id: 2,
                type: "text",
                text: "My name is Ron.",
                senderUsername: "ron",
                writtenIn: "10:05"
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
                writtenIn: "10:10"
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Ron!",
                senderUsername: "dvir",
                writtenIn: "10:10"
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
                writtenIn: "10:15"
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Ron",
                senderUsername: "dan",
                writtenIn: "10:20"
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
                writtenIn: "10:25"
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Ron",
                senderUsername: "idan",
                writtenIn: "10:30"
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
                writtenIn: "10:35"
            },
            {
                id: 2,
                type: "text",
                text: "Fine Ron, nice idea",
                senderUsername: "shlomo",
                writtenIn: "10:49"
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
                writtenIn: "10:56"
            },
            {
                id: 2,
                type: "text",
                text: "My name is Noam.",
                senderUsername: "noam",
                writtenIn: "11:05"
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
                writtenIn: "11:10"
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Noam!",
                senderUsername: "dvir",
                writtenIn: "11:11"
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
                writtenIn: "11:15"
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Noam",
                senderUsername: "dan",
                writtenIn: "11:20"
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
                writtenIn: "11:25"
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Noam",
                senderUsername: "idan",
                writtenIn: "11:30"
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
                writtenIn: "11:35"
            },
            {
                id: 2,
                type: "text",
                text: "Fine Noam, nice idea",
                senderUsername: "shlomo",
                writtenIn: "11:49"
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
                writtenIn: "11:56"
            },
            {
                id: 2,
                type: "text",
                text: "My name is Dan.",
                senderUsername: "dan",
                writtenIn: "12:05"
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
                writtenIn: "12:10"
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Dan!",
                senderUsername: "dvir",
                writtenIn: "12:11"
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
                writtenIn: "12:15"
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Dan",
                senderUsername: "idan",
                writtenIn: "12:20"
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
                writtenIn: "12:25"
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Dan",
                senderUsername: "noam",
                writtenIn: "12:30"
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
                writtenIn: "12:35"
            },
            {
                id: 2,
                type: "text",
                text: "Fine Dan, nice idea",
                senderUsername: "shlomo",
                writtenIn: "12:49"
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
                writtenIn: "11:56"
            },
            {
                id: 2,
                type: "text",
                text: "My name is Idan.",
                senderUsername: "idan",
                writtenIn: "12:05"
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
                writtenIn: "12:10"
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Idan!",
                senderUsername: "dvir",
                writtenIn: "12:11"
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
                writtenIn: "12:15"
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Idan",
                senderUsername: "dan",
                writtenIn: "12:20"
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
                writtenIn: "12:25"
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Idan",
                senderUsername: "noam",
                writtenIn: "12:30"
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
                writtenIn: "12:35"
            },
            {
                id: 2,
                type: "text",
                text: "Fine Idan, nice idea",
                senderUsername: "shlomo",
                writtenIn: "12:49"
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
                writtenIn: "11:56"
            },
            {
                id: 2,
                type: "text",
                text: "My name is Shlomo.",
                senderUsername: "shlomo",
                writtenIn: "12:05"
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
                writtenIn: "12:10"
            },
            {
                id: 2,
                type: "text",
                text: "I'm great. Thanks Shlomo!",
                senderUsername: "dvir",
                writtenIn: "12:11"
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
                writtenIn: "12:15"
            },
            {
                id: 2,
                type: "text",
                text: "Ok bro. Nice idea Shlomo",
                senderUsername: "idan",
                writtenIn: "12:20"
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
                writtenIn: "12:25"
            },
            {
                id: 2,
                type: "text",
                text: "It was good. Thanks Shlomo",
                senderUsername: "noam",
                writtenIn: "12:30"
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
                writtenIn: "12:35"
            },
            {
                id: 2,
                type: "text",
                text: "Fine Shlomo, nice idea",
                senderUsername: "dan",
                writtenIn: "12:49"
            }
            ]
    }
]
export const messages = [
    {
        id: 1,
        type: "text",
        text: "It was a great dinner",
        senderUsername: "ron",
        writtenIn: "09:56"
    },
    {
        id: 2,
        type: "text",
        text: "We will do it again.",
        senderUsername: "noam",
        writtenIn: "12:01"
    },
    {
        id: 3,
        type: "text",
        text: "Next time - we will play tennis",
        senderUsername: "dvir",
        writtenIn: "13:30",
    },
    {
        id: 4,
        type: "text",
        text: "Great!",
        senderUsername: "dan",
        writtenIn: "13:40"
    },
    {
        id: 5,
        type: "text",
        text: "How are you?",
        senderUsername: "idan",
        writtenIn: "14:00"
    }
]

export const users = [
    {
        username: 'noam',
        password: '123456'
    },
    {
        username: 'dvir',
        password: '123456'
    },
    {
        username: 'ron',
        password: '123456'
    },
    {
        username: 'dan',
        password: '123456'
    }
]