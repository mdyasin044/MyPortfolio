import dp from '../../Images/BUET_LOGO.svg.png'
import samsung_health from '../../Images/samsung_health.png'
import samsung_knox from '../../Images/knox.jpg'
import samsung_logo from '../../Images/samsung_logo.png'


const Data = [
    {
        icon: samsung_logo,
        title: 'Senior Software Engineer',
        institution: 'Samsung R&D Institute Bangladesh',
        location: 'Dhaka, Bangladesh',
        time: '01/2023 - Present',
        description: 'Working as a member of NC Experience Group',
        skills: ['C#', '.Net', 'WPF', 'Windows'],
        role: [
            'Designed Customized Report for Ultrasound Machines using .Net and WPF.',
            'Designed editor and viewer module using MVVM Architecture.'
        ],
    },
    {
        icon: samsung_knox,
        title: 'Senior Software Engineer',
        institution: 'Samsung R&D Institute Bangladesh',
        location: 'Dhaka, Bangladesh',
        time: '02/2021 - 01/2023',
        description: 'Working as a member of Wearable Experience Group',
        skills: ['React', 'Redux', 'Electron', 'NodeJS', 'Typescript'],
        role: [
            'Built HTTP Relay Server using Node JS to share files with enterprise devices instantly in a closed network.',
            'Designed configuration profile database with 100+ entries using MongoDB and Express and reduced data redundancy.',
            'Implemented dynamic UI components with React-Redux to integrate 100+ forms seamlessly and refactored code to increase reusability with 50% reduced code.',
            'Designed and implemented QR code feature using NodeJS to assimilate custom configuration data to deploy on enterprise devices.',
            'Implemented License Verification for customers using OpenSSL to block unauthorized installation of the application.',
            'Optimized app performance by 25% by fixing potential NodeJS memory leaks and CPU usage through memory and CPU profiling.',
        ],
    },
    {
        icon: samsung_health,
        title: 'Software Engineer',
        institution: 'Samsung R&D Institute Bangladesh',
        location: 'Dhaka, Bangladesh',
        time: '07/2019 - 02/2021',
        description: 'Worked as a member of Samsung Health Application Group',
        skills: ['Swift', 'Objective-C', 'Rest APIs '],
        role: [
            'Implemented Data Platform module which validates, authenticates and encrypts sensitive health data produced by the Samsung smart watches.',
            'Implemented REST APIs for CRUD operations of data such as water, caffeine intake, steps count.',
            'Solved a critical issue called Central European Summer Time (CEST) issue which causes timestamp conflict of health data.',
            'Built functional UI components with SwiftUI.',
            'Contributed in increasing Unit Test Coverage upto 85% of the projects.',
        ],
    },
    {
        icon: dp,
        title: 'Undergrad Student',
        institution: 'Bangladesh University of Engineering and Technology',
        location: 'Dhaka, Bangladesh',
        time: '02/2015 - 04/2019',
        description: 'Completed B.Sc in Computer Science and Engineering',
        skills: [],
        role: [],
    },
]

export default Data